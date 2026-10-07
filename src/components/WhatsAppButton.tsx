import { contactLinks } from "@/config/site";
import { WhatsAppIcon } from "./icons";

type Props = {
  label?: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  fullOnMobile?: boolean;
};

// Главная кнопка связи на сайте. Высота 48–56px — удобная зона нажатия пальцем.
export default function WhatsAppButton({
  label = "Написать в WhatsApp",
  variant = "solid",
  size = "lg",
  className = "",
  fullOnMobile = false,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-[transform,background-color,border-color,color] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
  const sizes = size === "lg" ? "h-14 pl-2 pr-7 text-base" : "h-12 pl-1.5 pr-5 text-[15px]";
  const variants =
    variant === "solid"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/25 text-white hover:border-white/60 hover:bg-white/[0.04]";
  const badge =
    variant === "solid" ? "bg-black text-white" : "bg-white text-black";

  return (
    <a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants} ${fullOnMobile ? "w-full sm:w-auto" : ""} ${className}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${badge} ${
          size === "lg" ? "h-10 w-10" : "h-9 w-9"
        }`}
      >
        <WhatsAppIcon className={size === "lg" ? "h-[22px] w-[22px]" : "h-5 w-5"} />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </a>
  );
}
