#!/usr/bin/env bash
# Deploy from the laptop (run in Git Bash):  ./deploy.sh
# Builds locally, uploads the build via scp, installs prod deps and (re)starts pm2 "pulsetech".
# The server has only ~2 GB RAM, so `npm run build` is never run there.
set -euo pipefail

SERVER="root@91.196.162.194"
APP_DIR="/var/www/pulsetech"
APP_NAME="pulsetech"
PORT="3100"

cd "$(dirname "$0")"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

echo "==> Local build"
npm run build

echo "==> Staging files"
cp -r .next "$STAGE/.next"
rm -rf "$STAGE/.next/cache"
cp -r public "$STAGE/public"
cp package.json package-lock.json "$STAGE/"
# next.config.ts needs typescript (a devDependency) at runtime; ship a plain JS config instead.
echo 'export default {};' > "$STAGE/next.config.mjs"
cat > "$STAGE/ecosystem.config.cjs" <<EOF
module.exports = {
  apps: [{
    name: "$APP_NAME",
    script: "node_modules/next/dist/bin/next",
    args: "start -p $PORT -H 127.0.0.1",
    cwd: "$APP_DIR",
    env: { NODE_ENV: "production", PORT: "$PORT" },
    max_memory_restart: "400M",
  }],
};
EOF
tar -czf "$STAGE/release.tgz" -C "$STAGE" .next public package.json package-lock.json next.config.mjs ecosystem.config.cjs

echo "==> Upload"
ssh "$SERVER" "mkdir -p $APP_DIR"
scp "$STAGE/release.tgz" "$SERVER:$APP_DIR/release.tgz"

echo "==> Install and restart on server"
ssh "$SERVER" "set -e; cd $APP_DIR
rm -rf .next public
tar -xzf release.tgz && rm release.tgz
npm ci --omit=dev
if pm2 describe $APP_NAME >/dev/null 2>&1; then
  pm2 restart $APP_NAME --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save"

echo "==> Done. Check: curl -I https://pulsetech.bid"
