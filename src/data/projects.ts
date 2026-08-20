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
      he: 'פיתוח Web ו-Mobile לפלטפורמת תכנון טיולים מבוססת AI. פיתחתי פיצ׳רים ב-React וב-React Native, חיברתי את שכבת הלקוח לשירותי FastAPI ולמקורות מידע חיצוניים, ועבדתי על זרימות של תכנון מסלול, המלצות מותאמות אישית, תקציב ונתוני טיסות ולינה אמיתיים.',
      en: 'Web and mobile development for an AI-powered trip planning platform. I built features in React and React Native, wired the client layer to FastAPI services and external data sources, and worked on the flows for itinerary planning, personalized recommendations, budget and real flight and lodging data.',
    },
    role: {
      he: 'Full Stack / React Developer',
      en: 'Full Stack / React Developer',
    },
    highlights: {
      he: [
        'פיתחתי מסכי משתמש מקצה לקצה: פרופיל, טיולים, העדפות, הזמנות ומסמכים — בחיבור מלא ל-REST API',
        'חיברתי state בצד הלקוח עם Zustand ו-Redux, כולל טפסים, ולידציות, טיפול בשגיאות ו-UI רספונסיבי',
        'תרמתי לפיצ׳רים מבוססי AI: מנוע המלצות, בניית מסלול יומי ותמחור תקציב מנתוני ספקים אמיתיים',
        'עבדתי בתהליך PR מסודר מול ריפו פעיל — סקירות קוד אוטומטיות, בדיקות ופריסה מתמשכת ל-Render',
      ],
      en: [
        'Built end-to-end user screens — profile, trips, preferences, bookings and documents — wired to REST APIs',
        'Wired client-side state with Zustand and Redux: forms, validation, error handling and responsive UI flows',
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
      he: 'בניתי את כל השכבות של עיתון קהילתי בעברית — Frontend, .NET API ומיקרו-שירותי Python. פיתחתי קורא גיליונות תלת-ממדי מעל PDF, מערכת Self-Service למפרסמים, פאנל ניהול, ושכבת אנליטיקה עם צ׳אטבוטים מבוססי OpenAI.',
      en: 'I built every layer of a Hebrew community newspaper — frontend, a .NET API and Python microservices. I developed a 3D flipbook reader over PDFs, a self-service advertiser system, an admin panel, and an analytics layer with OpenAI-powered chatbots.',
    },
    role: {
      he: 'Freelance Full Stack Developer',
      en: 'Freelance Full Stack Developer',
    },
    highlights: {
      he: [
        'פיתחתי קורא גיליונות תלת-ממדי מעל pdf.js ו-three.js, עם תמיכת מגע מלאה ו-RTL',
        'בניתי API ב-.NET 8 מול PostgreSQL ב-AWS RDS ואחסון קבצים ב-S3, עם התחברות Google OAuth',
        'כתבתי מיקרו-שירותי Python (Flask + OpenAI) לצ׳אטבוט מפרסמים ולניתוח נתונים, באותו Docker image',
        'פרסתי ל-Cloudflare Pages + Render, כולל Functions כ-reverse proxy לפתרון CORS ועקיפת timeout',
      ],
      en: [
        'Built a 3D issue reader on pdf.js and three.js, with full touch support and RTL layout',
        'Wrote a .NET 8 API over PostgreSQL on AWS RDS with S3 file storage and Google OAuth sign-in',
        'Shipped Python microservices (Flask + OpenAI) for the advertiser chatbot and analytics, in the same Docker image',
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
      he: 'תכננתי, פיתחתי ופרסתי רשת חברתית למתכונים במונוריפו אחד: אתר Next.js, אפליקציית React Native ו-API ב-FastAPI. בניתי פיד אינסופי, אשף יצירת מתכון, סריקת מתכון מתמונה עם GPT-4o Vision, מצב בישול עם Wake Lock, ומערכת לייקים, שמירות, תגובות ועוקבים.',
      en: 'I designed, built and deployed a social recipe network as one monorepo: a Next.js site, a React Native app and a FastAPI backend. I built an infinite feed, a recipe wizard, photo-to-recipe scanning with GPT-4o Vision, a cooking mode with Wake Lock, and likes, saves, comments and follows.',
    },
    role: {
      he: 'פרויקט אישי — תכנון, פיתוח ופריסה מלאים',
      en: 'Personal project — full design, build and deployment',
    },
    highlights: {
      he: [
        'בניתי שלוש פלטפורמות מאותו API: Next.js 14 App Router (RTL), React Native עם Expo Router, ו-FastAPI',
        'פיתחתי את "השף הדיגיטלי" — סריקת מתכון מצילום עם GPT-4o Vision והמרתו למבנה נתונים מלא',
        'שיפרתי ביצועים: חיסול שאילתות N+1, אינדקסים במסד הנתונים ושכבת cache ל-GET בצד הלקוח',
        'חיברתי אימות JWT, אחסון תמונות ב-S3/Cloudinary ומיגרציות מסד נתונים עם Alembic',
      ],
      en: [
        'Built three surfaces off one API: Next.js 14 App Router (RTL), React Native with Expo Router, and FastAPI',
        'Built a "digital chef" that scans a photographed recipe with GPT-4o Vision and turns it into structured data',
        'Improved performance: eliminated N+1 queries, added database indexes and a client-side GET cache',
        'Wired JWT auth, image storage on S3/Cloudinary and versioned database migrations with Alembic',
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
      he: 'בניתי pipeline מלא מהעלאת וידאו ועד חיפוש: חילוץ פריימים ב-OpenCV, זיהוי אובייקטים עם YOLOv8, וחיפוש חופשי בעברית על מה שמופיע בסרטון — כולל סיכומים מ-OpenAI. הניתוח רץ ברקע כדי שההעלאה לא תיחסם.',
      en: 'I built a full pipeline from video upload to search: frame extraction with OpenCV, object detection with YOLOv8, and free-form Hebrew search over what actually appears on screen — plus OpenAI-generated summaries. Analysis runs in the background so uploads never block.',
    },
    role: {
      he: 'פרויקט אישי — pipeline מלא מהעלאה ועד חיפוש',
      en: 'Personal project — full pipeline from upload to search',
    },
    highlights: {
      he: [
        'פיתחתי pipeline של ראייה ממוחשבת: OpenCV לחילוץ פריימים ו-YOLOv8 לזיהוי אובייקטים',
        'חיברתי חיפוש בעברית מעל תוצאות באנגלית דרך שכבת תרגום, עם fallback כשהשירות לא זמין',
        'הפעלתי ניתוח א-סינכרוני עם FastAPI BackgroundTasks — ההעלאה חוזרת מיד עם דגל processing',
        'חיברתי אימות Firebase Admin, נגן וידאו מובנה ואחסון תוצאות ב-SQLite',
      ],
      en: [
        'Built a computer-vision pipeline: OpenCV for frame extraction and YOLOv8 for object detection',
        'Wired Hebrew search over English detections through a translation layer, with a fallback when the service is down',
        'Ran analysis asynchronously via FastAPI BackgroundTasks — uploads return immediately with a processing flag',
        'Connected Firebase Admin authentication, a built-in video player and results persisted to SQLite',
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
