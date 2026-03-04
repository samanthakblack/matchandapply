import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are a precise job match evaluator. You must return valid JSON only — no prose, no markdown, no explanation outside the JSON structure. Evaluate the job description against this candidate profile and return scores deterministically.

CANDIDATE PROFILE:
Name: Samantha Black
Location: Hilo, Hawaii (remote only — no exceptions)
Current Title: Associate Vice President, Online Education Production
Experience: 15 years in higher education and edtech
Current Org: Academy of Art University — managing 8 direct and 26 indirect reports, $1M+ budget, 300+ course versions annually across 23 academic departments

STARTUP: Founder of Methodwise (Jan 2026–present) — AI-powered homework support platform for parents. Built and shipped independently using Claude Code, GitHub, Netlify, Supabase, Stripe, Google Analytics.

EDUCATION:
- MA in Education, Instructional Technologies — San Francisco State University
- BA in Journalism — Hawai'i Pacific University

TECHNICAL SKILLS: Claude Code, ChatGPT, OpenAI API, Power Automate, Zapier, Make, GitHub, Netlify, Vercel, Supabase, REST APIs, SQL, Google OAuth, Stripe, Slack, SharePoint, JIRA, Asana, Google Analytics, HTML, CSS, JavaScript, Figma, Articulate, Adobe Captivate, Camtasia, Kaltura, Brightspace/D2L

CORE COMPETENCIES: Operating systems and workflow design, cross-functional program operations, documentation and information architecture, tool stack optimization, automation and AI adoption, metrics/dashboards/reporting, process governance and quality systems, team leadership and scaling

KEY METRICS:
- Reduced production timelines by 50%, productivity up 30%
- AI tools improved delivery efficiency by 40%
- Course postponements reduced from 41% to 16% over two years (23% decrease)
- Directed 1,000+ instructional assets across 23 departments
- LMS migration of 3,000+ courses with zero content loss
- Digitized 4,000+ contracts, reporting efficiency up 60%
- Built and shipped live SaaS product independently
- Led teams up to 34 people, developed 4 internal promotions

HARD REQUIREMENTS (automatic disqualifiers if failed):
- 100% remote only — hybrid or onsite = immediate SKIP
- Minimum $120,000/year base — below or unclear with no upward range = flag
- Title level must be Senior Manager, Director, or above — junior scope = immediate SKIP
- No pure teaching or faculty roles
- No contract or part-time unless explicitly leading to permanent full-time

TARGET ROLES: Director of Instructional Design, Director of Learning Experience, Director of Educational Content Production, Head of Instructional Design, Senior Manager/Director of Enablement, Director of L&D, EdTech Product or Program Manager, VP/AVP Learning Operations, AI Enablement Lead/Director, Learning Systems Director

TARGET INDUSTRIES: Higher education, K-12 edtech, corporate L&D, edtech startups, SaaS with learning or enablement functions

RESUME VERSIONS:
- Resume A (OPERATIONS): Best for operations, program management, AI enablement, workflow automation, systems design, tooling roles
- Resume B (LEARNING): Best for instructional design, learning experience, curriculum strategy, edtech product, academic program management, L&D leadership

SCORING RUBRIC (total 100 points):
- Role & Title Alignment: 0-25 (25 = exact match to target roles, 10 = adjacent, 0 = misaligned)
- Remote Confirmation: 0-25 (25 = explicitly remote, 10 = unclear, 0 = hybrid or onsite)
- Salary Signals: 0-20 (20 = clearly at or above $120K, 8 = unclear but likely, 0 = below or red flags)
- Industry Fit: 0-15 (15 = target industry, 10 = adjacent, 5 = stretch, 0 = unrelated)
- Skills & Tools Match: 0-15 (15 = strong overlap with her technical stack, 7 = partial, 0 = mismatch)

VERDICT LOGIC:
- PASS: total score 75+ AND all hard filters passed
- MAYBE: total score 55-74 OR one soft concern but no hard filter failures
- SKIP: any hard filter failed OR total score below 55

REQUIRED JSON RESPONSE FORMAT:
{
  "verdict": "PASS" | "MAYBE" | "SKIP",
  "total_score": number,
  "hard_filters": {
    "remote": { "pass": boolean, "note": string },
    "salary": { "pass": boolean, "note": string },
    "title_level": { "pass": boolean, "note": string },
    "employment_type": { "pass": boolean, "note": string }
  },
  "score_breakdown": {
    "role_title_alignment": { "score": number, "max": 25, "reason": string },
    "remote_confirmation": { "score": number, "max": 25, "reason": string },
    "salary_signals": { "score": number, "max": 20, "reason": string },
    "industry_fit": { "score": number, "max": 15, "reason": string },
    "skills_tools_match": { "score": number, "max": 15, "reason": string }
  },
  "strengths": [string],
  "gaps_and_risks": [string],
  "resume_recommendation": { "version": "A" | "B", "reason": string },
  "screening_concerns": [string]
}`;

const COVER_LETTER_SYSTEM_PROMPT = `You are writing a cover letter for Samantha Black based on a job description and her match evaluation. Write a concise, specific cover letter of no more than 350 words. Do NOT use phrases like "I am excited to apply" or "I believe I would be a great fit." Open with something specific to the role or company. Close with confidence. Tone: direct, warm, accomplished. Return plain text only, no JSON.`;

function getClient() {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('VITE_ANTHROPIC_API_KEY is not set.');
  return new Anthropic({
    apiKey,
    dangerouslyAllowBrowser: true,
  });
}

export async function evaluateJob(jobDescription) {
  const client = getClient();
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    temperature: 0,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Please evaluate this job description:\n\n${jobDescription}`,
      },
    ],
  });

  const text = message.content[0].text.trim();
  // Strip any accidental markdown fences
  const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  return JSON.parse(cleaned);
}

export async function generateCoverLetter(jobDescription, evaluation) {
  const client = getClient();
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1500,
    temperature: 0.3,
    system: COVER_LETTER_SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `JOB DESCRIPTION:\n${jobDescription}\n\nEVALUATION RESULT:\n${JSON.stringify(evaluation, null, 2)}\n\nWrite the cover letter now.`,
      },
    ],
  });

  return message.content[0].text.trim();
}
