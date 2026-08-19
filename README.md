# Sara Farkash — Portfolio

אתר תיק עבודות דו-לשוני (עברית RTL / אנגלית LTR), נבנה ב-React + TypeScript + Vite.
התוכן נשאב מקורות החיים ומהריפוזיטוריז בגיט.

Bilingual portfolio site (Hebrew RTL / English LTR) built with React, TypeScript and Vite.

## הרצה מקומית

```bash
npm install
npm run dev
```

## בנייה

```bash
npm run build      # יוצר dist/
npm run preview    # תצוגה מקומית של ה-build
```

## פריסה

### אוטומטי — כל פוש ל-main

הריפו מחובר ל-Cloudflare Workers Builds. כל פוש ל-`main` נבנה ונפרס אוטומטית
(`npm run build` ואז `npx wrangler deploy`), וכל ענף אחר מקבל preview URL נפרד
דרך `npx wrangler versions upload`. אין secrets לתחזק — הטוקן מנוהל בצד Cloudflare.

### ידני

```bash
npm run build
npx wrangler deploy
```

`wrangler.jsonc` מגיש את `dist/` כאתר סטטי.

### GitHub Pages

הוספת `base: '/<repo-name>/'` ל-`vite.config.ts`, ואז פריסת `dist/` לענף `gh-pages`.

## מבנה

```
src/
├── data/
│   ├── projects.ts     # חמשת הפרויקטים — טקסט דו-לשוני, סטאק, מדדים, קישורים
│   └── content.ts      # שאר תוכן האתר + פרטי קשר
├── i18n/
│   └── LanguageContext.tsx   # מתג שפה, שמירה ב-localStorage, החלפת dir
├── components/         # Header, Hero, Work, ProjectCard, Experience, Skills, Contact
└── styles/global.css   # עיצוב מלא, מבוסס CSS logical properties (RTL/LTR ללא כפילות)
```

## עדכון תוכן

- **פרויקט חדש** — הוספת אובייקט ל-`src/data/projects.ts`. `featured: true` נותן כרטיס ברוחב מלא.
- **טקסטים, ניסיון, כלים, פרטי קשר** — `src/data/content.ts`.
- **קורות חיים** — החלפת `public/Sara_Farkash_CV.pdf`.
