// Единая точка редактирования данных сайта: контакты, ссылки, SEO-настройки.
// Меняешь значение здесь, и оно подтягивается во все страницы, метатеги и JSON-LD.

export const site = {
  name: "Pulse Tech",
  url: "https://pulsetech.bid",
  locale: "ru_RU",
  // Короткое позиционирование: используется в hero, футере и описаниях.
  tagline: "Разработка сайтов, ботов и приложений в Бишкеке",
  description:
    "Pulse Tech разрабатывает сайты, Telegram-ботов, мини-приложения, мобильные и веб-приложения, CRM-системы и автоматизацию для бизнеса в Бишкеке, по всему Кыргызстану и в странах СНГ. Под ключ: от идеи до запуска.",
  city: "Бишкек",
  country: "Кыргызстан",
  countryCode: "KG",
  phone: "+996707057005",
  phoneDisplay: "+996 707 057 005",
};

const whatsappText = "Здравствуйте! Хочу обсудить проект";

export const contactLinks = {
  // Главный канал связи: WhatsApp с предзаполненным сообщением.
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
    title: "Общение напрямую",
    description: "Вы пишете тому, кто делает проект. Без менеджеров, испорченного телефона и наценки агентства.",
    icon: "fast",
  },
  {
    title: "Под ключ",
    description: "Домен, сервер, SSL, запуск и добавление в Google и Яндекс беру на себя. Вы получаете готовый продукт.",
    icon: "reliable",
  },
  {
    title: "Задача бизнеса впереди",
    description: "Сначала разбираюсь, что должно измениться в продажах или процессах, потом пишу код.",
    icon: "result",
  },
  {
    title: "Отвечаю лично",
    description: "Первый месяц после запуска поддержка бесплатная: ошибки исправляю сам и быстро.",
    icon: "modern",
  },
];

// Этапы работы: реальная последовательность, поэтому с номерами.
export const processSteps = [
  { title: "Обсуждение", description: "Пишете в WhatsApp, я задаю пару вопросов и называю цену и сроки." },
  { title: "ТЗ и старт", description: "Техническое задание пишу сам, вы только одобряете. Предоплата 50%, и я начинаю." },
  { title: "Разработка", description: "Показываю промежуточный результат так часто, как вам удобно." },
  { title: "Запуск и поддержка", description: "Домен, сервер, SSL и поисковики настраиваю сам. Остаток 50% после сдачи, первый месяц поддержки бесплатно." },
];

export type PortfolioCase = {
  id: string;
  title: string;
  task: string;
  result: string;
  image?: string; // путь в /public, например "/portfolio/project.jpg"
};

// Заготовка под реальные проекты: как только появится первый кейс,
// добавь сюда объект такой формы, и карточка отрисуется автоматически.
export const portfolioCases: PortfolioCase[] = [];
