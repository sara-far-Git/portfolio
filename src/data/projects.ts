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
  /** When false, keep the poster and skip the iframe — the live site refuses to be framed. */
  embed?: boolean
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
      he: 'פלטפורמה לתכנון טיולים משותפים בעזרת AI',
      en: 'Collaborative trip planning with AI',
    },
    summary: {
      he: 'במסגרת העבודה על TripEase, פיתחתי פיצ׳רים ב-React וב-React Native וחיברתי ממשקים לשירותי FastAPI ולמקורות מידע חיצוניים. תרמתי לתהליכי תכנון מסלול, להמלצות מותאמות אישית ולניהול תקציב, תוך שילוב נתוני טיסות ולינה.',
      en: 'At TripEase, I developed features in React and React Native and integrated interfaces with FastAPI services and external data sources. I contributed to itinerary planning, personalized recommendations and budgeting features using flight and accommodation data.',
    },
    role: {
      he: 'Full Stack / React Developer',
      en: 'Full Stack / React Developer',
    },
    highlights: {
      he: [
        'פיתחתי מסכי פרופיל, טיולים, העדפות, הזמנות ומסמכים, וחיברתי אותם ל-REST APIs',
        'ניהלתי state בצד הלקוח עם Zustand ו-Redux, כולל טפסים, בדיקות תקינות קלט, טיפול בשגיאות וממשקים רספונסיביים',
        'תרמתי ליכולות AI: המלצות מותאמות אישית, בניית מסלול יומי וחישוב תקציב על בסיס נתוני ספקים',
        'עבדתי עם Pull Requests, סקירות קוד אוטומטיות ובדיקות, כחלק מתהליך פריסה מתמשכת ל-Render',
      ],
      en: [
        'Developed profile, trip, preference, booking and document screens, integrated with REST APIs',
        'Managed client-side state with Zustand and Redux, including forms, validation, error handling and responsive interfaces',
        'Contributed to AI features for personalized recommendations, daily itineraries and budget estimates using supplier data',
        'Worked with pull requests, automated code reviews and tests as part of continuous deployment to Render',
      ],
    },
    stack: ['React Native', 'React', 'TypeScript', 'Zustand', 'Redux', 'FastAPI', 'PostgreSQL', 'pgvector', 'OpenAI', 'Docker', 'Render'],
    metrics: [
      { value: '138', label: { he: 'Pull Requests שמוזגו', en: 'merged pull requests' } },
      { value: '128', label: { he: 'קבצי בדיקות בפרויקט', en: 'test files in the project' } },
      { value: '2', label: { he: 'פלטפורמות — Web ו-Mobile', en: 'platforms — web and mobile' } },
    ],
    shot: '/shots/tripease.jpg',
    links: {
      demo: 'https://planitplane.com',
      note: {
        he: 'מאגר הקוד פרטי. אשמח לספר על התרומה שלי ועל האתגרים הטכנולוגיים בראיון.',
        en: 'The repository is private. I’m happy to discuss my contributions and technical challenges in an interview.',
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
      he: 'עיתון קהילתי דיגיטלי עם מערכת לניהול פרסום וניתוח נתונים',
      en: 'A digital community newspaper with advertising and analytics tools',
    },
    summary: {
      he: 'פיתחתי פלטפורמה לעיתון קהילתי בעברית, הכוללת ממשק React, שירותי API ב-.NET ושירותי Python. המערכת כוללת קורא גיליונות PDF עם אפקט דפדוף תלת-ממדי, אזור שירות עצמי למפרסמים, ממשק ניהול וכלי ניתוח נתונים וצ׳אט מבוססי OpenAI.',
      en: 'Developed a Hebrew community newspaper platform with a React frontend, a .NET API and Python services. Features include a PDF reader with a 3D page-turning effect, a self-service advertiser portal, an admin interface, and analytics and chat tools powered by OpenAI.',
    },
    role: {
      he: 'מפתחת Full Stack (פרילנס)',
      en: 'Full Stack Developer (Freelance)',
    },
    highlights: {
      he: [
        'פיתחתי קורא גיליונות עם pdf.js ו-three.js, אפקט דפדוף תלת-ממדי, תמיכה במגע ותצוגה מימין לשמאל',
        'בניתי API ב-.NET 8 עם PostgreSQL ב-AWS RDS, אחסון קבצים ב-S3 והתחברות באמצעות Google OAuth',
        'פיתחתי שירותי Python עם Flask ו-OpenAI לצ׳אטבוט מפרסמים ולניתוח נתונים, וארזתי אותם ב-Docker',
        'פרסתי את המערכת ב-Cloudflare Pages וב-Render, והגדרתי Pages Functions כ-reverse proxy לטיפול ב-CORS ובמגבלות זמן תגובה',
      ],
      en: [
        'Built an issue reader with pdf.js and three.js, a 3D page-turning effect, touch support and right-to-left layout',
        'Developed a .NET 8 API with PostgreSQL on AWS RDS, S3 file storage and Google OAuth sign-in',
        'Developed Python services with Flask and OpenAI for the advertiser chatbot and analytics, packaged with Docker',
        'Deployed to Cloudflare Pages and Render, using Pages Functions as a reverse proxy to handle CORS and response time limits',
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
      demo: 'https://hasdera-magazine.co.il',
    },
  },
  {
    id: 'recipeapp',
    name: 'RecipeApp',
    period: { he: '2026', en: '2026' },
    accent: '#3fb98a',
    tagline: {
      he: 'רשת חברתית לשיתוף מתכונים ב-Web וב-Mobile',
      en: 'A social recipe platform for web and mobile',
    },
    summary: {
      he: 'פיתחתי רשת חברתית למתכונים עם אתר Next.js, אפליקציית React Native ושרת FastAPI במאגר קוד משותף. המערכת כוללת פיד מתכונים, יצירת מתכון בשלבים, חילוץ מתכונים מתמונות בעזרת GPT-4o Vision, מצב בישול ששומר על המסך פעיל, ולייקים, שמירות, תגובות ומעקב אחר משתמשים.',
      en: 'Developed a social recipe platform with a Next.js website, a React Native app and a FastAPI backend in a shared repository. Features include a recipe feed, guided recipe creation, recipe extraction from photos with GPT-4o Vision, a cooking mode that keeps the screen awake, and likes, saves, comments and follows.',
    },
    role: {
      he: 'פרויקט אישי · פיתוח Full Stack',
      en: 'Personal project · Full Stack development',
    },
    highlights: {
      he: [
        'חיברתי אתר Next.js 14 עם App Router ותמיכה בעברית ואפליקציית React Native עם Expo Router ל-API משותף ב-FastAPI',
        'פיתחתי כלי לחילוץ מתכון מצילום באמצעות GPT-4o Vision והמרתו לנתונים מובנים',
        'שיפרתי ביצועים באמצעות ביטול שאילתות N+1, הוספת אינדקסים למסד הנתונים ושמירת תגובות GET במטמון בצד הלקוח',
        'שילבתי אימות JWT, אחסון תמונות ב-S3 וב-Cloudinary וניהול שינויים במבנה מסד הנתונים באמצעות Alembic',
      ],
      en: [
        'Connected a Next.js 14 website with App Router and Hebrew support and a React Native app with Expo Router to a shared FastAPI backend',
        'Built a tool that extracts recipes from photos with GPT-4o Vision and converts them to structured data',
        'Improved performance by eliminating N+1 queries, adding database indexes and caching GET responses on the client',
        'Integrated JWT authentication, image storage on S3 and Cloudinary, and database migrations with Alembic',
      ],
    },
    stack: ['Next.js 14', 'React Native', 'Expo', 'FastAPI', 'PostgreSQL 16', 'Alembic', 'Zustand', 'JWT', 'GPT-4o Vision', 'AWS S3', 'Docker'],
    metrics: [
      { value: '3', label: { he: 'רכיבים — Web · Mobile · API', en: 'components — web · mobile · API' } },
      { value: '11', label: { he: 'קבוצות נתיבי API', en: 'API endpoint groups' } },
      { value: 'GPT-4o', label: { he: 'סריקת מתכון מתמונה', en: 'recipe scanning from a photo' } },
    ],
    shot: '/shots/recipeapp.jpg',
    links: {
      repo: 'https://github.com/sara-far-Git/recipeapp',
      demo: 'https://www.recipespace.co.il',
    },
  },
  {
    id: 'video-search-ai',
    name: 'Video Search AI',
    period: { he: '2026', en: '2026' },
    accent: '#a76bf0',
    tagline: {
      he: 'חיפוש בעברית בתוכן וידאו באמצעות זיהוי אובייקטים',
      en: 'Search video content in Hebrew using object detection',
    },
    summary: {
      he: 'פיתחתי מערכת שמנתחת סרטונים ומאפשרת לחפש בעברית אובייקטים שזוהו בהם. תהליך העיבוד משלב חילוץ פריימים עם OpenCV, זיהוי אובייקטים עם YOLOv8 וסיכומים באמצעות OpenAI. הניתוח מתבצע ברקע לאחר העלאת הסרטון.',
      en: 'Developed a system for analyzing videos and searching in Hebrew for detected objects. It combines frame extraction with OpenCV, object detection with YOLOv8 and summaries generated with OpenAI. Analysis runs in the background after upload.',
    },
    role: {
      he: 'פרויקט אישי · ראייה ממוחשבת ופיתוח Web',
      en: 'Personal project · Computer vision & web development',
    },
    highlights: {
      he: [
        'פיתחתי תהליך עיבוד בראייה ממוחשבת עם OpenCV לחילוץ פריימים ו-YOLOv8 לזיהוי אובייקטים',
        'אפשרתי חיפוש בעברית בתוצאות זיהוי באנגלית באמצעות שכבת תרגום, עם מנגנון גיבוי כשהשירות אינו זמין',
        'העברתי את הניתוח למשימות רקע עם FastAPI BackgroundTasks, כך שהשרת מחזיר סטטוס עיבוד בלי להמתין לסיום הניתוח',
        'שילבתי אימות משתמשים באמצעות Firebase Admin, נגן וידאו ושמירת תוצאות ב-SQLite',
      ],
      en: [
        'Developed a computer vision workflow with OpenCV for frame extraction and YOLOv8 for object detection',
        'Enabled Hebrew searches over English detection results through a translation layer, with a fallback when the service is unavailable',
        'Moved analysis to FastAPI BackgroundTasks so the server returns a processing status without waiting for analysis to finish',
        'Integrated Firebase Admin authentication, a video player and result storage in SQLite',
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
        'חיפוש אובייקטים בעברית',
      ],
      en: [
        'Video upload',
        'Frame extraction — OpenCV',
        'Object detection — YOLOv8',
        'Result storage — SQLite',
        'Object search in Hebrew',
      ],
    },
    links: {
      repo: 'https://github.com/sara-far-Git/video-search-ai',
    },
  },
]
