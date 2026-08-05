// Единая точка редактирования контента сайта.
// Меняешь ссылки/тексты здесь — они подтягиваются во все секции автоматически.

export const contactLinks = {
  telegram: "https://t.me/MCLM444",
  whatsapp: "https://wa.me/996707057005",
  instagram: "https://www.instagram.com/pulse_tech.kg?igsh=NWQ3bGhia3hncW51",
};

export const brand = {
  name: "Pulse Tech",
  role: "Разработка Telegram-ботов, мини-приложений и сайтов",
};

export type Direction = {
  title: string;
  description: string;
  icon: "site" | "bot" | "app" | "automation";
};

export const directions: Direction[] = [
  {
    title: "Сайты",
    description: "Современные и быстрые сайты под любые задачи.",
    icon: "site",
  },
  {
    title: "Telegram-боты",
    description: "Автоматизация, приём заявок, уведомления и многое другое.",
    icon: "bot",
  },
  {
    title: "Мини-приложения",
    description: "Интерактивные решения внутри Telegram.",
    icon: "app",
  },
  {
    title: "Автоматизация",
    description: "Оптимизируем процессы и экономим ваше время.",
    icon: "automation",
  },
];

export type PortfolioCase = {
  id: string;
  title: string;
  task: string;
  result: string;
  gradient: string; // класс/значение для ч/б градиентной заглушки
};

// Заготовка под реальные проекты: как только появится первый кейс,
// добавь сюда объект такой формы — карточка отрисуется автоматически.
export const portfolioCases: PortfolioCase[] = [];

export type Benefit = {
  title: string;
  description: string;
  icon: "fast" | "reliable" | "result" | "modern";
};

export const benefits: Benefit[] = [
  {
    title: "Быстрый запуск",
    description: "Запускаем проекты в короткие сроки.",
    icon: "fast",
  },
  {
    title: "Надёжность",
    description: "Поддержка и доработка после запуска.",
    icon: "reliable",
  },
  {
    title: "Результат",
    description: "Делаем решения, которые приносят прибыль.",
    icon: "result",
  },
  {
    title: "Современный подход",
    description: "Используем актуальные технологии и лучшие практики.",
    icon: "modern",
  },
];
