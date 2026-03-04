# Match & Apply

A personal job match evaluator built with React + Vite. Evaluates job descriptions against a fixed candidate profile using the Anthropic API and returns a structured, consistent assessment.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Add your Anthropic API key

Create a `.env.local` file in the project root:

```
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Run locally

```bash
npm run dev
```

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. **Before deploying**, go to your Vercel project's **Settings → Environment Variables** and add:
   - **Name:** `VITE_ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key (`sk-ant-...`)
4. Deploy. Vercel will build the static site automatically using `npm run build`.

> **Note:** The API key is exposed in the browser bundle because this is a single-user personal tool with no backend. Do not share the deployed URL publicly.

## Features

- Evaluates any job description against Samantha Black's candidate profile
- Returns verdict (PASS / MAYBE / SKIP), match score, hard filter checks, score breakdown, strengths, gaps, resume recommendation, and screening concerns
- Generates a tailored cover letter on demand
- Copy results to clipboard as formatted text
- Two-column desktop layout, stacked on mobile
