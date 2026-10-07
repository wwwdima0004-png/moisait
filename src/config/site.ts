// Единая точка редактирования данных сайта: контакты, ссылки, SEO-настройки.
// Меняешь значение здесь — оно подтягивается во все страницы, метатеги и JSON-LD.

export const site = {
  name: "Pulse Tech",
  url: "https://pulsetech.bid",
  locale: "ru_RU",
  // Короткое позиционирование: используется в hero, футере и описаниях.
  tagline: "Разработка сайтов, ботов и приложений в Бишкеке",
  description:
    "Pulse Tech разрабатывает сайты, Telegram-ботов, мини-приложения, мобильные и веб-приложения, CRM-системы и автоматизацию для бизнеса в Бишкеке и по всему Кыргызстану.",
  city: "Бишкек",
  country: "Кыргызстан",
  countryCode: "KG",
  phone: "+996707057005",
  phoneDisplay: "+996 707 057 005",
};

const whatsappText = "Здравствуйте! Хочу обсудить проект";

export const contactLinks = {
  // Главный канал связи — WhatsApp с предзаполненным сообщением.
  whatsapp: `https://wa.me/996707057005?text=${encodeURIComponent(whatsappText)}`,
  telegram: "https://t.me/MCLM444",
  instagram: "https://www.instagram.com/pulse_tech.kg",
  phone: `tel:${site.phone}`,
};

// Профили компании для schema.org (sameAs).
export const socialProfiles = [contactLinks.instagram, contactLinks.telegram, "https://wa.me/996707057005"];

// Коды подтверждения Google Search Console и Яндекс Вебмастера.
// Вставь сюда значение атрибута content из выданного мета-тега, пустые строки игнорируются.
export const verification = {
  google: "",
  yandex: "",
};

export const navLinks = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/blog", label: "Блог" },
  { href: "/#contact", label: "Контакты" },
];

// Порядок важен: так услуги выводятся на главной, в меню и футере.
export type ServiceIcon = "site" | "bot" | "miniapp" | "app" | "crm" | "saas" | "automation";

export type Benefit = {
  title: string;
  description: string;
  icon: "fast" | "reliable" | "result" | "modern";
};

export const benefits: Benefit[] = [
  {
    title: "Прямой контакт",
    description: "Вы общаетесь с теми, кто пишет код, без менеджеров-посредников.",
    icon: "fast",
  },
  {
    title: "Поддержка после запуска",
    description: "Исправляем, дорабатываем и развиваем проект, когда он уже работает.",
    icon: "reliable",
  },
  {
    title: "Задача бизнеса впереди",
    description: "Сначала разбираемся, что должно измениться в продажах или процессах, потом пишем код.",
    icon: "result",
  },
  {
    title: "Современный стек",
    description: "Быстрые сайты и сервисы на актуальных технологиях, которые легко развивать.",
    icon: "modern",
  },
];

// Этапы работы: реальная последовательность, поэтому с номерами.
export const processSteps = [
  { title: "Обсуждение", description: "Пишете в WhatsApp, мы задаём вопросы о задаче, сроках и бюджете." },
  { title: "Оценка и план", description: "Фиксируем объём работ, этапы и стоимость до начала разработки." },
  { title: "Дизайн и разработка", description: "Показываем промежуточные результаты, вы вносите правки по ходу." },
  { title: "Запуск и поддержка", description: "Публикуем проект, обучаем команду и остаёмся на связи." },
];

export type PortfolioCase = {
  id: string;
  title: string;
  task: string;
  result: string;
  image?: string; // путь в /public, например "/portfolio/project.jpg"
};

// Заготовка под реальные проекты: как только появится первый кейс,
// добавь сюда объект такой формы — карточка отрисуется автоматически.
export const portfolioCases: PortfolioCase[] = [];
