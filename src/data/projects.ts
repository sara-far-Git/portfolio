export type Lang = 'he' | 'en'

export interface Project {
  id: string
  name: string
  period: Record<Lang, string>
  featured?: boolean
  tagline: Record<Lang, string>
  summary: Record<Lang, string>
  role: Record<Lang, string>
  highlights: Record<Lang, string[]>
  stack: string[]
  metrics: { value: string; label: Record<Lang, string> }[]
  links: { repo?: string; demo?: string; note?: Record<Lang, string> }
  /** Poster shown inside the browser frame before the live site is loaded. */
  shot?: string
  /** Pipeline steps, shown instead of a browser frame when there is no live site. */
  flow?: Record<Lang, string[]>
  accent: string
}

export const projects: Project[] = [
  {
    id: 'tripease',
    name: 'TripEase',
    period: { he: '2026–היום', en: '2026–Present' },
    featured: true,
    accent: '#5b8cff',
    tagline: {
      he: 'פלטפורמת תכנון טיולים משותפת מבוססת AI',
      en: 'AI-powered collaborative trip planning platform',
    },
    summary: {
      he: 'פיתוח Web ו-Mobile לפלטפורמת תכנון טיולים מבוססת AI. מפתחת פיצ׳רים ב-React וב-React Native, מחברת את שכבת הלקוח לשירותי FastAPI ולמקורות מידע חיצוניים, ועובדת על זרימות של תכנון מסלול, המלצות מותאמות אישית, תקציב ונתוני טיסות ולינה אמיתיים.',
      en: 'Web and mobile development for an AI-powered trip planning platform. I build features in React and React Native, wire the client layer to FastAPI services and external data sources, and work on the flows for itinerary planning, personalized recommendations, budget and real flight and lodging data.',
    },
    role: {
      he: 'Full Stack / React Developer',
      en: 'Full Stack / React Developer',
    },
    highlights: {
      he: [
        'מסכי משתמש מקצה לקצה: פרופיל, טיולים, העדפות, הזמנות ומסמכים — בחיבור מלא ל-REST API',
        'ניהול state בצד הלקוח עם Zustand ו-Redux, כולל טפסים, ולידציות, טיפול בשגיאות ו-UI רספונסיבי',
        'תרומה לפיצ׳רים מבוססי AI: מנוע המלצות, בניית מסלול יומי ותמחור תקציב מנתוני ספקים אמיתיים',
        'עבודה בתהליך PR מסודר מול ריפו פעיל — סקירות קוד אוטומטיות, בדיקות ופריסה מתמשכת ל-Render',
      ],
      en: [
        'End-to-end user screens — profile, trips, preferences, bookings and documents — wired to REST APIs',
        'Client-side state with Zustand and Redux: forms, validation, error handling and responsive UI flows',
        'Contributed to AI features: the recommendation engine, itinerary planning and budget pricing from real supplier data',
        'Worked in a disciplined PR flow on an active repo — automated review, tests and continuous deploys to Render',
      ],
    },
    stack: ['React Native', 'React', 'TypeScript', 'Zustand', 'Redux', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI', 'Docker', 'Render'],
    metrics: [
      { value: '138', label: { he: 'Pull Requests שמוזגו', en: 'merged pull requests' } },
      { value: '128', label: { he: 'קבצי בדיקות', en: 'test files' } },
      { value: '2', label: { he: 'פלטפורמות — Web ו-Mobile', en: 'platforms — web and mobile' } },
    ],
    shot: '/shots/tripease.jpg',
    links: {
      demo: 'https://planitplane.com',
      note: {
        he: 'ריפו פרטי של החברה — אשמח להציג את הקוד בשיחה',
        en: 'Private company repository — happy to walk through the code in a conversation',
      },
    },
  },
  {
    id: 'hasdera',
    name: 'Hasdera Newsletter',
    period: { he: '2025', en: '2025' },
    featured: true,
    accent: '#e08a3c',
    tagline: {
      he: 'פלטפורמת עיתון קהילתי עם מערכת מפרסמים ו-AI',
      en: 'Community newspaper platform with a self-service advertiser system and AI',
    },
    summary: {
      he: 'מערכת מלאה לעיתון קהילתי בעברית: קריאת גיליונות בחוויית "ספר מתהפך" תלת-ממדי מעל PDF, מערכת Self-Service למפרסמים להזמנת מקומות פרסום, העלאת קריאייטיב ומעקב ביצועים, פאנל ניהול, ושכבת אנליטיקה עם צ׳אטבוטים מבוססי OpenAI. בניתי את כל השכבות — Frontend, .NET API ומיקרו-שירותי Python.',
      en: 'A full platform for a Hebrew community newspaper: a 3D flipbook reading experience rendered over PDFs, a self-service advertiser system for booking ad slots, uploading creatives and tracking performance, an admin panel, and an analytics layer with OpenAI-powered chatbots. I built every layer — frontend, the .NET API and the Python microservices.',
    },
    role: {
      he: 'Freelance Full Stack Developer',
      en: 'Freelance Full Stack Developer',
    },
    highlights: {
      he: [
        'קורא גיליונות תלת-ממדי מעל pdf.js ו-three.js, עם תמיכת מגע מלאה ו-RTL',
        'API ב-.NET 8 מול PostgreSQL ב-AWS RDS ואחסון קבצים ב-S3, עם התחברות Google OAuth',
        'מיקרו-שירותי Python (Flask + OpenAI) לצ׳אטבוט מפרסמים ולניתוח נתונים, ארוזים באותו Docker image',
        'פריסה ב-Cloudflare Pages + Render, כולל Functions כ-reverse proxy לפתרון CORS ועקיפת timeout',
      ],
      en: [
        'A 3D issue reader built on pdf.js and three.js, with full touch support and RTL layout',
        'A .NET 8 API over PostgreSQL on AWS RDS with S3 file storage and Google OAuth sign-in',
        'Python microservices (Flask + OpenAI) for the advertiser chatbot and analytics, shipped in the same Docker image',
        'Deployed to Cloudflare Pages + Render, with Pages Functions as a reverse proxy to solve CORS and gateway timeouts',
      ],
    },
    stack: ['React', 'Vite', 'three.js', 'pdf.js', '.NET 8', 'C#', 'PostgreSQL', 'AWS S3', 'AWS RDS', 'Python', 'Flask', 'OpenAI', 'Docker', 'Cloudflare'],
    metrics: [
      { value: '3', label: { he: 'ממשקים — קוראים · מפרסמים · ניהול', en: 'interfaces — reader · advertiser · admin' } },
      { value: '54', label: { he: 'קומפוננטות React', en: 'React components' } },
      { value: '13', label: { he: 'API Controllers', en: 'API controllers' } },
    ],
    shot: '/shots/hasdera.jpg',
    links: {
      repo: 'https://github.com/sara-far-Git/HasderaNewsletter-2025',
      demo: 'https://hasdera-advertiser.pages.dev',
    },
  },
  {
    id: 'recipeapp',
    name: 'RecipeApp',
    period: { he: '2026', en: '2026' },
    accent: '#3fb98a',
    tagline: {
      he: 'רשת חברתית למתכונים — ווב, מובייל ו-API במונוריפו אחד',
      en: 'A social recipe network — web, mobile and API in one monorepo',
    },
    summary: {
      he: 'רשת חברתית מלאה למתכונים בעברית: פיד אינסופי, יצירת מתכון באשף, סריקת מתכון מתמונה עם GPT-4o Vision, מצב בישול עם Wake Lock, מחשבון כמויות לפי מספר סועדים, לייקים, שמירות, תגובות ומערכת עוקבים. מונוריפו אחד שמשרת אתר Next.js, אפליקציית React Native ו-API ב-FastAPI.',
      en: 'A complete social network for recipes in Hebrew: an infinite feed, a step-by-step recipe wizard, photo-to-recipe scanning with GPT-4o Vision, a cooking mode with Wake Lock, a serving-size calculator, likes, saves, comments and a follow system. One monorepo serving a Next.js site, a React Native app and a FastAPI backend.',
    },
    role: {
      he: 'פרויקט אישי — תכנון, פיתוח ופריסה מלאים',
      en: 'Personal project — full design, build and deployment',
    },
    highlights: {
      he: [
        'שלוש פלטפורמות מאותו API: Next.js 14 App Router (RTL), React Native עם Expo Router, ו-FastAPI',
        '"השף הדיגיטלי" — סריקת מתכון מצילום באמצעות GPT-4o Vision והמרתו למבנה נתונים מלא',
        'אופטימיזציית ביצועים: חיסול שאילתות N+1, אינדקסים במסד הנתונים ושכבת cache ל-GET בצד הלקוח',
        'אימות JWT, אחסון תמונות ב-S3/Cloudinary ומיגרציות מסד נתונים מסודרות עם Alembic',
      ],
      en: [
        'Three surfaces off one API: Next.js 14 App Router (RTL), React Native with Expo Router, and FastAPI',
        'A "digital chef" that scans a photographed recipe with GPT-4o Vision and turns it into structured data',
        'Performance work: eliminated N+1 queries, added database indexes and a client-side GET cache',
        'JWT auth, image storage on S3/Cloudinary and versioned database migrations with Alembic',
      ],
    },
    stack: ['Next.js 14', 'React Native', 'Expo', 'FastAPI', 'PostgreSQL 16', 'Alembic', 'Zustand', 'JWT', 'GPT-4o Vision', 'AWS S3', 'Docker'],
    metrics: [
      { value: '3', label: { he: 'פלטפורמות במונוריפו', en: 'platforms in one monorepo' } },
      { value: '11', label: { he: 'קבוצות endpoints', en: 'endpoint groups' } },
      { value: 'GPT-4o', label: { he: 'סריקת מתכון מתמונה', en: 'recipe scanning from a photo' } },
    ],
    shot: '/shots/recipeapp.jpg',
    links: {
      repo: 'https://github.com/sara-far-Git/recipeapp',
      demo: 'https://recipeapp-kohl.vercel.app/',
    },
  },
  {
    id: 'video-search-ai',
    name: 'Video Search AI',
    period: { he: '2026', en: '2026' },
    accent: '#a76bf0',
    tagline: {
      he: 'חיפוש חופשי בתוך וידאו באמצעות זיהוי אובייקטים',
      en: 'Free-form search inside video via object detection',
    },
    summary: {
      he: 'מערכת שמעלה קטעי וידאו, מנתחת אותם עם YOLOv8 לזיהוי אובייקטים פר-פריים, ומאפשרת חיפוש חופשי בעברית על מה שמופיע בסרטון — כולל סיכומים אוטומטיים מבוססי OpenAI. הניתוח רץ ברקע כדי שההעלאה לא תיחסם.',
      en: 'A system that ingests video clips, analyzes them frame-by-frame with YOLOv8 for object detection, and lets you search in free-form Hebrew for what actually appears on screen — with automatic OpenAI-generated summaries. Analysis runs in the background so uploads never block.',
    },
    role: {
      he: 'פרויקט אישי — pipeline מלא מהעלאה ועד חיפוש',
      en: 'Personal project — full pipeline from upload to search',
    },
    highlights: {
      he: [
        'Pipeline של ראייה ממוחשבת: OpenCV לחילוץ פריימים + YOLOv8 (ultralytics) לזיהוי אובייקטים',
        'חיפוש בעברית מעל תוצאות באנגלית באמצעות שכבת תרגום, עם fallback שמונע קריסה כשהשירות לא זמין',
        'ניתוח א-סינכרוני עם FastAPI BackgroundTasks — ההעלאה חוזרת מיד עם דגל processing',
        'אימות משתמשים עם Firebase Admin, נגן וידאו מובנה ואחסון תוצאות ב-SQLite',
      ],
      en: [
        'A computer-vision pipeline: OpenCV for frame extraction plus YOLOv8 (ultralytics) for object detection',
        'Hebrew search over English detections through a translation layer, with a fallback that keeps search alive when the service is down',
        'Asynchronous analysis via FastAPI BackgroundTasks — uploads return immediately with a processing flag',
        'Firebase Admin authentication, a built-in video player and results persisted to SQLite',
      ],
    },
    stack: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'OpenAI', 'Firebase Auth', 'SQLite', 'React'],
    metrics: [
      { value: 'YOLOv8', label: { he: 'מודל זיהוי אובייקטים', en: 'object detection model' } },
      { value: 'Async', label: { he: 'עיבוד ברקע', en: 'background processing' } },
      { value: 'HE↔EN', label: { he: 'חיפוש חוצה־שפות', en: 'cross-language search' } },
    ],
    flow: {
      he: [
        'העלאת וידאו',
        'חילוץ פריימים — OpenCV',
        'זיהוי אובייקטים — YOLOv8',
        'שמירת תוצאות — SQLite',
        'חיפוש חופשי בעברית',
      ],
      en: [
        'Video upload',
        'Frame extraction — OpenCV',
        'Object detection — YOLOv8',
        'Results persisted — SQLite',
        'Free-form search in Hebrew',
      ],
    },
    links: {
      repo: 'https://github.com/sara-far-Git/video-search-ai',
    },
  },
]
