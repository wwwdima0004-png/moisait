export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.5 3.5 3 10.7c-.9.35-.9.85-.16 1.07l4.5 1.4 1.75 5.3c.2.6.35.8.7.8.27 0 .4-.12.55-.28l1.95-1.9 4.05 3c.75.42 1.28.2 1.47-.7l2.67-12.6c.27-1.1-.4-1.6-1.98-.29Z" />
      <path d="M8 13.2 17.3 6.7" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21.5a9.5 9.5 0 1 0-8.2-4.7L2.5 21.5l4.9-1.24A9.46 9.46 0 0 0 12 21.5Z" />
      <path
        d="M8.3 8.4c-.15.4-.3.95-.22 1.5.13.9.7 1.9 1.6 2.9 1 1.05 2.1 1.6 3 1.75.55.1 1.1-.05 1.5-.25.35-.18.8-.55.9-.9.08-.3.08-.75-.08-.95-.16-.2-1.2-.6-1.5-.7-.2-.08-.35-.08-.5.1l-.45.55c-.15.18-.35.2-.55.1-.45-.2-.95-.55-1.35-.95-.35-.35-.6-.75-.8-1.1-.1-.18-.08-.35.08-.5l.45-.55c.12-.18.14-.35.06-.55-.1-.28-.45-1.25-.6-1.5-.15-.25-.3-.25-.5-.25h-.45c-.18 0-.4.02-.55.35Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
