import type { Lang } from './projects'

export const content = {
  he: {
    dir: 'rtl',
    nav: {
      work: 'פרויקטים',
      experience: 'ניסיון',
      skills: 'כלים',
      contact: 'יצירת קשר',
    },
    hero: {
      kicker: 'Full Stack Developer',
      name: 'שרי פרקש',
      headline: 'בונה מוצרים שלמים — מהמסך הראשון ועד ה-deploy.',
      intro:
        'מפתחת Full Stack עם ניסיון בבניית אפליקציות ווב ומובייל מקצה לקצה ב-React, React Native, Node.js, FastAPI ו-PostgreSQL. מתמחה באינטגרציית API, פיצ׳רים מבוססי AI, אוטומציה ופריסה בענן — ולוקחת בעלות על משימה מהתכנון ועד ה-production.',
      ctaWork: 'לפרויקטים',
      ctaCv: 'הורדת קורות חיים',
      stats: [
        { value: '5+', label: 'מוצרים מלאים' },
        { value: '900+', label: 'קומיטים בפרויקטים שכאן' },
        { value: '98', label: 'ממוצע בלימודי הנדסאים' },
      ],
    },
    work: {
      title: 'פרויקטים',
      subtitle: 'חמישה מוצרים שבניתי — כל אחד מהם רץ מקצה לקצה: לקוח, שרת, מסד נתונים ופריסה.',
      viewRepo: 'קוד ב-GitHub',
      viewDemo: 'לאתר החי',
      readMore: 'מה בניתי',
      readLess: 'סגירה',
      stackLabel: 'טכנולוגיות',
    },
    experience: {
      title: 'ניסיון מקצועי',
      items: [
        {
          period: '2026 – היום',
          role: 'Full Stack / React Developer',
          org: 'TripEase',
          body: 'פיתוח פיצ׳רים בווב ובמובייל לפלטפורמת תכנון טיולים מבוססת AI: מסכי פרופיל, טיולים, העדפות, הזמנות ומסמכים. חיבור זרימות ה-Frontend לשירותי FastAPI ו-REST APIs, ניהול state עם Zustand ו-Redux, ותרומה לפיצ׳רים של המלצות ותכנון מסלול מותאם אישית.',
          tags: ['React', 'React Native', 'Zustand', 'Redux', 'FastAPI', 'PostgreSQL', 'Supabase'],
        },
        {
          period: '2025',
          role: 'Freelance Full Stack Developer',
          org: 'פלטפורמת תוכן ואנליטיקה',
          body: 'פיתוח פלטפורמה לתוכן דיגיטלי ולנתונים מובנים. בניית תהליכי אוטומציה לקבצים, ל-APIs ולטבלאות מסד נתונים עם Python, Pandas ו-Regex, ופיתוח כלי מבוסס OpenAI לניתוח תוכן, חיפוש סמנטי ופלטים מובנים.',
          tags: ['React', 'Node.js', 'Python', '.NET Core', 'PostgreSQL', 'Docker', 'OpenAI'],
        },
      ],
      educationTitle: 'השכלה',
      education: {
        period: '2023 – 2025',
        role: 'דיפלומה בהנדסאים (מה״ט)',
        org: 'ממוצע 98',
        body: 'קורסים נוספים: מערכות הפעלה, מערכות ספרתיות, אלגוריתמים, מבני נתונים ותורת הגרפים, אנגלית טכנית ומדוברת, וניהול מערכות Linux.',
      },
    },
    skills: {
      title: 'כלים שאני עובדת איתם',
      groups: [
        { title: 'Frontend & Mobile', items: ['React', 'React Native', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Zustand'] },
        { title: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Flask', 'Java', 'C#', '.NET Core', 'NestJS', 'REST APIs'] },
        { title: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Supabase', 'Prisma'] },
        { title: 'AI & Automation', items: ['OpenAI API', 'AI Agents', 'YOLOv8', 'Pandas', 'Regex', 'Automation workflows'] },
        { title: 'Cloud & DevOps', items: ['AWS S3', 'AWS RDS', 'IAM', 'Render', 'Cloudflare Pages', 'Docker', 'Docker Compose', 'CI/CD'] },
        { title: 'Testing & Tools', items: ['Postman', 'Unit Tests', 'Selenium', 'JUnit', 'NUnit', 'GitHub', 'Bitbucket', 'Entity Framework'] },
      ],
      languagesTitle: 'שפות',
      languages: ['עברית — שפת אם', 'אנגלית — רמה גבוהה'],
    },
    contact: {
      title: 'נעים להכיר',
      body: 'מחפשת תפקיד Full Stack או Frontend שבו אפשר לקחת פיצ׳ר מהאפיון ועד ה-production. אשמח לשמוע ממך.',
      email: 'אימייל',
      phone: 'טלפון',
      github: 'GitHub',
      cv: 'קורות חיים (PDF)',
    },
    footer: 'נבנה ב-React ו-Vite',
    langToggle: 'EN',
  },
  en: {
    dir: 'ltr',
    nav: {
      work: 'Work',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Full Stack Developer',
      name: 'Sara Farkash',
      headline: 'I build whole products — from the first screen to the deploy.',
      intro:
        'Full Stack Developer with experience building end-to-end web and mobile applications in React, React Native, Node.js, FastAPI and PostgreSQL. Focused on API integration, AI-powered features, automation and cloud deployment — and on owning a task from planning all the way to production.',
      ctaWork: 'See the work',
      ctaCv: 'Download CV',
      stats: [
        { value: '5+', label: 'shipped products' },
        { value: '900+', label: 'commits across this work' },
        { value: '98', label: 'engineering diploma GPA' },
      ],
    },
    work: {
      title: 'Selected work',
      subtitle: 'Five products I built — each one running end to end: client, server, database and deployment.',
      viewRepo: 'View on GitHub',
      viewDemo: 'Live site',
      readMore: 'What I built',
      readLess: 'Close',
      stackLabel: 'Stack',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: '2026 – Present',
          role: 'Full Stack / React Developer',
          org: 'TripEase',
          body: 'Developing user-facing web and mobile features for an AI-powered travel planning platform, including screens for profiles, trips, preferences, bookings and documents. Integrating frontend flows with FastAPI services and REST APIs, managing client state with Zustand and Redux, and contributing to AI-based recommendation and itinerary-planning features.',
          tags: ['React', 'React Native', 'Zustand', 'Redux', 'FastAPI', 'PostgreSQL', 'Supabase'],
        },
        {
          period: '2025',
          role: 'Freelance Full Stack Developer',
          org: 'Content & Analytics Platform',
          body: 'Built a content and analytics platform for digital content and structured data. Created automation workflows across files, APIs and database tables with Python, Pandas and Regex, and developed an OpenAI-based tool for content analysis, semantic search and structured outputs.',
          tags: ['React', 'Node.js', 'Python', '.NET Core', 'PostgreSQL', 'Docker', 'OpenAI'],
        },
      ],
      educationTitle: 'Education',
      education: {
        period: '2023 – 2025',
        role: 'Practical Engineering Diploma (Mah’at)',
        org: 'GPA 98',
        body: 'Additional courses: Operating Systems, Digital Systems, Algorithms, Data Structures & Graph Theory, Technical and Spoken English, and Linux system administration.',
      },
    },
    skills: {
      title: 'Tools I work with',
      groups: [
        { title: 'Frontend & Mobile', items: ['React', 'React Native', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Zustand'] },
        { title: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Flask', 'Java', 'C#', '.NET Core', 'NestJS', 'REST APIs'] },
        { title: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Supabase', 'Prisma'] },
        { title: 'AI & Automation', items: ['OpenAI API', 'AI Agents', 'YOLOv8', 'Pandas', 'Regex', 'Automation workflows'] },
        { title: 'Cloud & DevOps', items: ['AWS S3', 'AWS RDS', 'IAM', 'Render', 'Cloudflare Pages', 'Docker', 'Docker Compose', 'CI/CD'] },
        { title: 'Testing & Tools', items: ['Postman', 'Unit Tests', 'Selenium', 'JUnit', 'NUnit', 'GitHub', 'Bitbucket', 'Entity Framework'] },
      ],
      languagesTitle: 'Languages',
      languages: ['Hebrew — native', 'English — advanced'],
    },
    contact: {
      title: 'Let’s talk',
      body: 'Looking for a Full Stack or Frontend role where I can take a feature from spec to production. I’d love to hear from you.',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      cv: 'CV (PDF)',
    },
    footer: 'Built with React and Vite',
    langToggle: 'עב',
  },
} as const

export const contactInfo = {
  email: 'S3296900@gmail.com',
  phone: '058-329-6900',
  phoneHref: '+972583296900',
  github: 'https://github.com/sara-far-Git',
  cv: '/Sara_Farkash_CV.pdf',
}

export type Content = (typeof content)[Lang]
