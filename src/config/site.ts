// Единая точка редактирования контента сайта.
// Меняешь ссылки/тексты здесь — они подтягиваются во все секции автоматически.

export const contactLinks = {
  telegram: "https://t.me/MCLM444",
  whatsapp: "https://wa.me/996707057005",
  instagram: "https://instagram.com/your_username",
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

export const portfolioCases: PortfolioCase[] = [
  {
    id: "studio-landing",
    title: "Сайт-визитка для дизайн-студии",
    task:
      "Нужен был быстрый, современный сайт-портфолио, который убедительно показывает уровень студии с первого экрана.",
    result:
      "Одностраничный сайт с анимациями при скролле и загрузкой меньше секунды. Заявки с сайта пошли уже в первую неделю.",
    gradient: "from-neutral-200 via-neutral-600 to-black",
  },
  {
    id: "furniture-catalog",
    title: "Сайт-каталог для мебельного шоурума",
    task:
      "Клиенту нужен был сайт с каталогом коллекций и удобной фильтрацией, который можно обновлять самостоятельно, без разработчика.",
    result:
      "Каталог с фильтрами по материалу и размеру на несложной CMS. Владелец сам добавляет новые позиции за пару минут.",
    gradient: "from-neutral-100 via-neutral-400 to-black",
  },
  {
    id: "saas-launch",
    title: "Лендинг для запуска SaaS-продукта",
    task:
      "Стартапу нужен был сайт под запуск: объяснить продукт за 10 секунд и провести посетителя к регистрации в бету.",
    result:
      "Одностраничник с чётким объяснением ценности и формой предзаписи. Первые 200 регистраций собрали за неделю после публикации.",
    gradient: "from-white via-neutral-500 to-neutral-900",
  },
];

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
