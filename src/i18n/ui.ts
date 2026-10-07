export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    "nav.home": "~",
    "nav.work": "~/work",
    "nav.projects": "~/projects",
    "nav.courses": "~/courses",
    "nav.search": "[grep]",
    "hero.whoami": "lucas@moretti",
    "hero.role": "Lucas Moretti — desarrollador de software",
    "hero.stack": "Construyo APIs, servicios y sistemas distribuidos. Go, Node.js, gRPC, RabbitMQ, Docker, Postgres.",
    "hero.aboutCmd": "cat about.txt",
    "hero.about": "La mayor parte del tiempo construyo servicios backend, sistemas en tiempo real sobre websockets y TCP, y herramientas CLI. Esta página es mi CV en texto plano.",
    "home.projectsCmd": "$ ls projects/ --recent",
    "home.workCmd": "$ tail -3 work.log",
    "home.projectsLink": "→ cd projects/",
    "home.workLink": "→ cat work.log",
    "cv.cmd": "$ ls cv/",
    "cv.es": "Descargar CV (ES)",
    "cv.en": "Download CV (EN)",
    "work.title": "Work",
    "work.description": "Lugares donde trabajé.",
    "projects.title": "Projects",
    "projects.description": "Proyectos recientes.",
    "courses.title": "Courses",
    "courses.description": "Formación educativa.",
    "certifications.title": "Certifications",
    "certifications.description": "Certificaciones.",
    "search.title": "Search",
    "search.description": "Buscá certificaciones y proyectos por palabra clave.",
    "filters.category": "Categoría",
    "filters.tags": "Tags",
    "projects.showing": "MOSTRANDO {count} DE {total} PROYECTOS",
    "article.back": "Volver a {collection}",
    "article.prev": "Anterior",
    "article.next": "Siguiente",
    "article.demo": "Ver demo",
    "article.repo": "Ver repositorio",
    "article.terminalDemo": "Demo de terminal",
    "article.poweredBy": "Grabación cortesía de",
    "article.readingTime": "{n} min de lectura",
    "demoType.live": "🟢 En vivo",
    "demoType.video": "📹 Video",
    "demoType.terminal": "🎥 Terminal",
    "demoType.code": "📄 Código",
    "certs.empty": "No hay imágenes disponibles",
    "certs.counter": "{current} de {total}",
    "search.placeholder": "¿Qué estás buscando?",
    "search.results": "{n} resultados para '{q}'",
    "footer.built": "hecho con Astro, servido por GitHub Pages",
    "legal.privacy.title": "Política de privacidad",
    "legal.privacy.body": "Este sitio es estático y no recolecta datos personales de forma directa.\n\nLa única herramienta de medición utilizada es Google Analytics, que recolecta datos de uso anónimos (páginas visitadas, país aproximado, tipo de dispositivo) mediante cookies.\n\nNo hay formularios, login ni tienda. No se venden ni comparten datos con terceros con fines comerciales.\n\nPodés desactivar el tracking usando extensiones de navegador que bloquean Google Analytics.",
    "legal.terms.title": "Términos de servicio",
    "legal.terms.body": "Este sitio tiene fines informativos y educativos. El contenido se ofrece «tal cual», sin garantías de ningún tipo.\n\nLos enlaces a sitios de terceros (GitHub, GitLab, LinkedIn, Asciinema) están sujetos a los términos propios de esas plataformas.\n\nEl código del sitio es de código abierto y puede consultarse en el repositorio del proyecto.",

    "site.description": "Desarrollador backend construyendo servicios, APIs y sistemas distribuidos.",
  },
  en: {
    "nav.home": "~",
    "nav.work": "~/work",
    "nav.projects": "~/projects",
    "nav.courses": "~/courses",
    "nav.search": "[grep]",
    "hero.whoami": "lucas@moretti",
    "hero.role": "Lucas Moretti — software developer",
    "hero.stack": "Building APIs, services and distributed systems. Go, Node.js, gRPC, RabbitMQ, Docker, Postgres.",
    "hero.aboutCmd": "cat about.txt",
    "hero.about": "Mostly I ship backend services, real-time systems over websockets and TCP, and CLI tools. This page is my resume in plain text.",
    "home.projectsCmd": "$ ls projects/ --recent",
    "home.workCmd": "$ tail -3 work.log",
    "home.projectsLink": "→ cd projects/",
    "home.workLink": "→ cat work.log",
    "cv.cmd": "$ ls cv/",
    "cv.es": "Download CV (ES)",
    "cv.en": "Download CV (EN)",
    "work.title": "Work",
    "work.description": "Places I have worked.",
    "projects.title": "Projects",
    "projects.description": "Recent projects I have worked on.",
    "courses.title": "Courses",
    "courses.description": "Educational background.",
    "certifications.title": "Certifications",
    "certifications.description": "Topics I am passionate about.",
    "search.title": "Search",
    "search.description": "Search all certs and projects by keyword.",
    "filters.category": "Category",
    "filters.tags": "Tags",
    "projects.showing": "SHOWING {count} OF {total} PROJECTS",
    "article.back": "Back to {collection}",
    "article.prev": "Prev",
    "article.next": "Next",
    "article.demo": "See Demo",
    "article.repo": "See Repository",
    "article.terminalDemo": "Terminal Demo",
    "article.poweredBy": "Recording powered by",
    "article.readingTime": "{n} min read",
    "demoType.live": "🟢 Live",
    "demoType.video": "📹 Video",
    "demoType.terminal": "🎥 Terminal",
    "demoType.code": "📄 Code",
    "certs.empty": "No images available",
    "certs.counter": "{current} of {total}",
    "search.placeholder": "What are you looking for?",
    "search.results": "Found {n} results for '{q}'",
    "footer.built": "built with Astro, served by GitHub Pages",
    "legal.privacy.title": "Privacy policy",
    "legal.privacy.body": "This site is static and does not collect personal data directly.\n\nThe only analytics tool used is Google Analytics, which collects anonymous usage data (pages visited, approximate country, device type) via cookies.\n\nThere are no forms, login or shop. No data is sold or shared with third parties for commercial purposes.\n\nYou can disable tracking with browser extensions that block Google Analytics.",
    "legal.terms.title": "Terms of service",
    "legal.terms.body": "This site is for informational and educational purposes. Content is provided «as is», without warranties of any kind.\n\nLinks to third-party sites (GitHub, GitLab, LinkedIn, Asciinema) are subject to their own terms.\n\nThe site's source code is open source and available in the project repository.",

    "site.description": "Backend developer building services, APIs and distributed systems.",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    let str = (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };
}
