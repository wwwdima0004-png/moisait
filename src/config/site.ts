// Единая точка редактирования контента сайта.
// Меняешь ссылки/тексты здесь — они подтягиваются во все секции автоматически.

export const contactLinks = {
  // TODO: подставь свои реальные ссылки
  telegram: "https://t.me/your_username",
  whatsapp: "https://wa.me/00000000000",
  instagram: "https://instagram.com/your_username",
};

export const brand = {
  name: "Dima Dev",
  role: "Разработчик Telegram-ботов, мини-приложений и сайтов",
};

export type Direction = {
  title: string;
  description: string;
  icon: "bot" | "app" | "site";
};

export const directions: Direction[] = [
  {
    title: "Telegram-боты",
    description:
      "Автоматизация, продажи, поддержка клиентов, интеграции с CRM и оплатой — всё внутри привычного мессенджера.",
    icon: "bot",
  },
  {
    title: "Mini Apps",
    description:
      "Полноценные веб-приложения внутри Telegram: каталоги, записи, игры, личные кабинеты — без установки отдельного приложения.",
    icon: "app",
  },
  {
    title: "Сайты",
    description:
      "Лендинги и сайты, которые быстро грузятся, красиво выглядят и понятно ведут посетителя к целевому действию.",
    icon: "site",
  },
];

export type PortfolioCategory = "Telegram-бот" | "Mini App" | "Сайт";

export type PortfolioCase = {
  id: string;
  title: string;
  category: PortfolioCategory;
  task: string;
  result: string;
  gradient: string; // класс/значение для ч/б градиентной заглушки
};

export const portfolioCases: PortfolioCase[] = [
  {
    id: "order-bot",
    title: "Бот приёма заказов для кофейни",
    category: "Telegram-бот",
    task:
      "Клиенту нужно было убрать очередь звонков и принимать заказы прямо в Telegram, с оплатой и уведомлением бариста.",
    result:
      "Бот с меню, корзиной, онлайн-оплатой и авто-уведомлением на кассу. Обработка заказа — 40 секунд вместо 3 минут разговора.",
    gradient: "from-neutral-100 via-neutral-400 to-black",
  },
  {
    id: "booking-miniapp",
    title: "Mini App для записи в барбершоп",
    category: "Mini App",
    task:
      "Нужно было заменить запись через переписку на понятный календарь прямо внутри Telegram, без установки приложений.",
    result:
      "Мини-приложение с выбором мастера, услуги и времени в 3 тапа. Число пропущенных записей снизилось почти вдвое.",
    gradient: "from-white via-neutral-500 to-neutral-900",
  },
  {
    id: "studio-landing",
    title: "Сайт-визитка для дизайн-студии",
    category: "Сайт",
    task:
      "Нужен был быстрый, современный сайт-портфолио, который убедительно показывает уровень студии с первого экрана.",
    result:
      "Одностраничный сайт с анимациями при скролле и загрузкой меньше секунды. Заявки с сайта пошли уже в первую неделю.",
    gradient: "from-neutral-200 via-neutral-600 to-black",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Telegram-боты",
    description:
      "От простого бота-помощника до сложной автоматизации с оплатой, базой клиентов и интеграциями — под задачу, а не шаблон.",
  },
  {
    title: "Mini Apps",
    description:
      "Веб-приложения внутри Telegram: каталоги, личные кабинеты, формы записи. Быстро открываются и не требуют установки.",
  },
  {
    title: "Сайты и лендинги",
    description:
      "Разработка сайтов с нуля: от идеи и структуры до адаптивной вёрстки, анимаций и запуска.",
  },
];
