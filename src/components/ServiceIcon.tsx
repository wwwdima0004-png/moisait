import { Globe, Bot, Grid2x2, Smartphone, SquareKanban, Cloud, Workflow } from "lucide-react";
import type { ServiceIcon as IconName } from "@/config/site";

const map: Record<IconName, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  site: Globe,
  bot: Bot,
  miniapp: Grid2x2,
  app: Smartphone,
  crm: SquareKanban,
  saas: Cloud,
  automation: Workflow,
};

export default function ServiceIcon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  const Icon = map[name] ?? Globe;
  return <Icon size={size} className={className} strokeWidth={1.75} aria-hidden="true" />;
}
