/* ══════════════════════════════════════════════════════
   TRANSLATIONS — i18n.js
   Supported languages: en, ru, uk, pl
══════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  en: {
    "nav.logo":     "AK.",
    "nav.about":    "About",
    "nav.skills":   "Skills",
    "nav.projects": "Projects",
    "nav.contact":  "Contact",

    "hero.greeting": "Hello, I'm",
    "hero.age":      "16 y.o. · .NET Junior Developer",
    "hero.cta1":     "View Projects",
    "hero.cta2":     "Contact Me",

    "about.title": "About Me",
    "about.p1": "I'm a 16-year-old .NET junior developer passionate about building clean, efficient, and scalable backend systems. I write asynchronous, optimised code and follow industry best practices.",
    "about.p2": "My focus is on REST API development with C# and .NET — from authentication flows with JWT & refresh tokens to email verification and robust error handling.",
    "about.stat1": "Years coding",
    "about.stat2": "Projects done",
    "about.stat3": "Passion for code",

    "skills.title": "Skills",
    "skills.core":  "Core Stack",
    "skills.arch":  "Architecture & Patterns",
    "skills.auth":  "Auth & Security",
    "skills.other": "Tools & More",

    "projects.title": "Projects",
    "projects.note":  "More projects coming soon…",
    "proj1.badge":    "Backend",
    "proj1.desc":     "Full backend for a digital agency platform. Implemented complete auth flow: registration, login, JWT authentication, refresh tokens, and email verification codes via MailTrap. Built all REST API endpoints from scratch.",
    "proj.live":      "View Live →",

    "contact.title": "Get In Touch",
    "contact.sub":   "Open for opportunities, collaborations, or just a chat about C#.",
    "contact.email": "Email",

    "footer.copy": "© 2026 Anton Kovalov. All rights reserved.",
    "footer.made": "Made with ❤️ and C#"
  },

  ru: {
    "nav.logo":     "АК.",
    "nav.about":    "Обо мне",
    "nav.skills":   "Навыки",
    "nav.projects": "Проекты",
    "nav.contact":  "Контакты",

    "hero.greeting": "Привет, я",
    "hero.age":      "16 лет · Junior .NET разработчик",
    "hero.cta1":     "Посмотреть проекты",
    "hero.cta2":     "Написать мне",

    "about.title": "Обо мне",
    "about.p1": "Мне 16 лет, я junior .NET разработчик, увлечённый созданием чистых, эффективных и масштабируемых бэкенд-систем. Пишу асинхронный, оптимизированный код и придерживаюсь лучших практик разработки.",
    "about.p2": "Моя специализация — разработка REST API на C# и .NET: от потоков аутентификации с JWT и refresh-токенами до верификации email и надёжной обработки ошибок.",
    "about.stat1": "Лет в разработке",
    "about.stat2": "Проектов завершено",
    "about.stat3": "Страсть к коду",

    "skills.title": "Навыки",
    "skills.core":  "Основной стек",
    "skills.arch":  "Архитектура и паттерны",
    "skills.auth":  "Аутентификация и безопасность",
    "skills.other": "Инструменты и прочее",

    "projects.title": "Проекты",
    "projects.note":  "Скоро появятся новые проекты…",
    "proj1.badge":    "Бэкенд",
    "proj1.desc":     "Полный бэкенд для платформы digital-агентства. Реализовал полный auth-флоу: регистрацию, вход, JWT-аутентификацию, refresh-токены и отправку кодов верификации на email через MailTrap. Разработал все REST API эндпоинты с нуля.",
    "proj.live":      "Открыть →",

    "contact.title": "Написать мне",
    "contact.sub":   "Открыт для возможностей, коллабораций или просто разговора о C#.",
    "contact.email": "Почта",

    "footer.copy": "© 2026 Антон Ковальов. Все права защищены.",
    "footer.made": "Сделано с ❤️ и C#"
  },

  uk: {
    "nav.logo":     "АК.",
    "nav.about":    "Про мене",
    "nav.skills":   "Навички",
    "nav.projects": "Проєкти",
    "nav.contact":  "Контакти",

    "hero.greeting": "Привіт, я",
    "hero.age":      "16 років · Junior .NET розробник",
    "hero.cta1":     "Переглянути проєкти",
    "hero.cta2":     "Написати мені",

    "about.title": "Про мене",
    "about.p1": "Мені 16 років, я junior .NET розробник, захоплений створенням чистих, ефективних і масштабованих бекенд-систем. Пишу асинхронний, оптимізований код і дотримуюсь кращих практик розробки.",
    "about.p2": "Моя спеціалізація — розробка REST API на C# і .NET: від потоків автентифікації з JWT і refresh-токенами до верифікації email та надійної обробки помилок.",
    "about.stat1": "Років у розробці",
    "about.stat2": "Проєктів виконано",
    "about.stat3": "Пристрасть до коду",

    "skills.title": "Навички",
    "skills.core":  "Основний стек",
    "skills.arch":  "Архітектура та патерни",
    "skills.auth":  "Автентифікація та безпека",
    "skills.other": "Інструменти та інше",

    "projects.title": "Проєкти",
    "projects.note":  "Незабаром з'являться нові проєкти…",
    "proj1.badge":    "Бекенд",
    "proj1.desc":     "Повний бекенд для платформи digital-агентства. Реалізував повний auth-флоу: реєстрацію, вхід, JWT-автентифікацію, refresh-токени та надсилання кодів верифікації на email через MailTrap. Розробив усі REST API ендпоінти з нуля.",
    "proj.live":      "Відкрити →",

    "contact.title": "Написати мені",
    "contact.sub":   "Відкритий до можливостей, колаборацій або просто розмови про C#.",
    "contact.email": "Пошта",

    "footer.copy": "© 2026 Антон Ковальов. Всі права захищені.",
    "footer.made": "Зроблено з ❤️ і C#"
  },

  pl: {
    "nav.logo":     "AK.",
    "nav.about":    "O mnie",
    "nav.skills":   "Umiejętności",
    "nav.projects": "Projekty",
    "nav.contact":  "Kontakt",

    "hero.greeting": "Cześć, jestem",
    "hero.age":      "16 lat · Junior .NET Developer",
    "hero.cta1":     "Zobacz projekty",
    "hero.cta2":     "Napisz do mnie",

    "about.title": "O mnie",
    "about.p1": "Mam 16 lat i jestem junior developerem .NET, który uwielbia tworzyć czyste, wydajne i skalowalne systemy backendowe. Piszę asynchroniczny, zoptymalizowany kod i stosuję najlepsze praktyki branżowe.",
    "about.p2": "Skupiam się na tworzeniu REST API w C# i .NET — od przepływów uwierzytelniania z JWT i tokenami odświeżania po weryfikację e-mail i solidną obsługę błędów.",
    "about.stat1": "Lata kodowania",
    "about.stat2": "Ukończone projekty",
    "about.stat3": "Pasja do kodu",

    "skills.title": "Umiejętności",
    "skills.core":  "Główny stos",
    "skills.arch":  "Architektura i wzorce",
    "skills.auth":  "Uwierzytelnianie i bezpieczeństwo",
    "skills.other": "Narzędzia i inne",

    "projects.title": "Projekty",
    "projects.note":  "Wkrótce pojawią się nowe projekty…",
    "proj1.badge":    "Backend",
    "proj1.desc":     "Pełny backend dla platformy agencji cyfrowej. Zaimplementowałem kompletny przepływ auth: rejestrację, logowanie, uwierzytelnianie JWT, tokeny odświeżania oraz kody weryfikacji e-mail przez MailTrap. Zbudowałem wszystkie endpointy REST API od zera.",
    "proj.live":      "Otwórz →",

    "contact.title": "Skontaktuj się",
    "contact.sub":   "Otwarty na możliwości, współpracę lub po prostu rozmowę o C#.",
    "contact.email": "E-mail",

    "footer.copy": "© 2026 Anton Kovalov. Wszelkie prawa zastrzeżone.",
    "footer.made": "Stworzone z ❤️ i C#"
  }
};

/* Typed-text strings per language */
const TYPED_STRINGS = {
  en: [".NET Junior Developer", "C# Enthusiast", "REST API Builder", "Clean Code Writer"],
  ru: [".NET Junior разработчик", "C# энтузиаст", "REST API разработчик", "Чистый код"],
  uk: [".NET Junior розробник", "C# ентузіаст", "REST API розробник", "Чистий код"],
  pl: [".NET Junior Developer", "Entuzjasta C#", "Budowniczy REST API", "Czysty kod"],
};

window.TRANSLATIONS = TRANSLATIONS;
window.TYPED_STRINGS  = TYPED_STRINGS;
