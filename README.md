# Job Match Evaluator

A personal job search tool that evaluates job descriptions against a fixed candidate profile using the Anthropic API. Returns a structured, consistent assessment every time.

Built with React + Vite. API calls are made through Vercel serverless functions — the Anthropic API key never touches the browser.

## Architecture

```
/api/evaluate.js     — Vercel serverless function (job evaluation)
/api/coverletter.js  — Vercel serverless function (cover letter generation)
/src/                — React + Vite frontend
```

The frontend calls `/api/evaluate` and `/api/coverletter`. Those functions call the Anthropic API server-side using `process.env.ANTHROPIC_API_KEY`.

## Local Development

Use the Vercel CLI to run the frontend and serverless functions together:

```bash
npm install -g vercel
vercel dev
```

> `npm run dev` (Vite only) will not work for local development because the `/api/*` routes won't be available. Use `vercel dev` instead.

You'll need a `.env.local` file (or Vercel will prompt you to link a project):

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. **Before deploying**, go to **Settings → Environment Variables** and add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key (`sk-ant-...`)
   - **Important:** Do NOT prefix it with `VITE_` — this key is server-side only and must not be exposed to the browser.
4. Deploy. Vercel builds the static frontend and automatically deploys the `/api/` functions.

## Features

- Evaluates any job description against a fixed candidate profile
- Returns verdict (PASS / MAYBE / SKIP), match score, hard filter checks, score breakdown, strengths, gaps, resume recommendation, and screening concerns
- Generates a tailored cover letter on demand
- Copy results to clipboard as formatted plain text
- Two-column desktop layout, stacked on mobile
- Right panel scrolls independently
