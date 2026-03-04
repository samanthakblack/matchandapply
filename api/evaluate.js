import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are a precise job match evaluator. Return valid JSON only — no prose, no markdown, no explanation outside the JSON. Evaluate the job description against this candidate profile deterministically.

CANDIDATE PROFILE:

RESUME: OPERATIONS — Operations and Automation Leader
(Best for: operations, program management, AI enablement, workflow automation, systems design, tooling, enablement roles)

Samantha Black | Operations and Automation Leader
Hilo, Hawaii (Remote-based) | samanthakblack@gmail.com | linkedin.com/in/skblack

CAREER SUMMARY
Systems minded operator and builder with 15+ years designing and scaling workflows, tooling, and reporting across distributed teams. Known for turning complex, cross functional work into clear operating systems through strong documentation, information architecture, automation, and metrics. Experienced integrating AI tools into real workflows, improving speed and visibility while maintaining quality and accessibility.

PROFESSIONAL EXPERIENCE

Methodwise — Founder | January 2026 – Present
Educational technology platform providing AI-guided learning support for parents.
- Built and shipped a live product using Claude Code, GitHub, and Netlify, including production deployment configuration and environment variable management.
- Implemented Supabase (Postgres), Google OAuth authentication, Stripe payments, and API driven workflows to support secure user access and subscriptions.
- Designed the end-to-end user flow and content structure to deliver clear, method aligned guidance, saved chat history, and repeatable use.
- Implemented analytics and feedback loops to support iteration, including usage tracking and reporting to guide product decisions.
- Translated learning science principles into practical AI-supported instructional workflows, including structured explanations, quick knowledge checks, and next step prompts.

Academy Of Art University
Associate Vice President, Online Education Production | May 2022 – Present
- Lead enterprise-wide course production operations across content design, operations, and media teams, managing 8 direct and 26 indirect reports.
- Redesigned the production operating system, reducing timelines by 50% and increasing productivity by 30% through workflow redesign, clearer ownership, and repeatable delivery cadences.
- Implemented AI supported workflows using Claude and ChatGPT to automate repetitive production tasks and improve visibility, increasing efficiency by 40% while maintaining quality and accessibility standards.
- Directed development of 1,000+ instructional assets across 23+ academic departments, aligning priorities, timelines, and stakeholder expectations in an async environment.
- Manage a $1M+ annual budget and align delivery planning with long-term strategy in partnership with executive leadership.

Director, Online Operations | December 2021 – May 2022
- Led large-scale LMS migration to Brightspace (D2L), auditing 1,800+ courses and overseeing the transfer of 3,000+ courses into a modernized digital ecosystem.
- Built tracking and reporting to provide department level visibility into migration status and risks, improving coordination across stakeholders.

Online Production Manager | October 2014 – December 2021
- Lead end-to-end production of 300+ course versions annually, coordinating cross-functional stakeholders and delivery timelines.
- Built and deployed centralized SharePoint tracking system that increased reporting efficiency by 60% and increased operational visibility.

Online Coordinator II | April 2011 – October 2014

CORE COMPETENCIES
Operating Systems and Workflow Design | Cross-Functional Program Operations | Documentation and Information Architecture | Tool Stack Optimization | Automation and AI Adoption | Metrics, Dashboards, and Reporting | Process Governance and Quality Systems | Team Leadership and Scaling

TECHNICAL FLUENCY
AI & Automation: Claude Code, ChatGPT, OpenAI API, Power Automate, Zapier, Make
Build & Data: GitHub, Netlify, Supabase (Postgres), REST APIs, SQL
Auth and Payments: Google OAuth, Stripe
Collaboration & Analytics: Slack, SharePoint, JIRA, Asana, Google Analytics, Resend

EDUCATION
MA in Education, Instructional Technologies — San Francisco State University
BA in Journalism — Hawai'i Pacific University

---

RESUME: LEARNING — Curriculum Strategy & Learning Systems Leader
(Best for: curriculum strategy, instructional design, learning experience, edtech product, academic program management, L&D leadership, AI-integrated learning roles)

Samantha Black | Curriculum Strategy & Learning Systems Leader
Hilo, Hawaii (Remote-based) | samanthakblack@gmail.com | linkedin.com/in/skblack

CAREER SUMMARY
Curriculum and learning systems leader with 14+ years scaling digital and technical education programs. Experienced building modular curriculum architectures, integrating AI-first development workflows, and aligning learning experiences with industry and workforce expectations. Proven track record leading cross-functional teams and operationalizing curriculum strategy at enterprise scale with measurable impact.

PROFESSIONAL EXPERIENCE

Methodwise — Founder | January 2026 – Present
Educational technology platform providing AI-guided learning support for parents.
- Led full-stack development using Claude Code, GitHub, and Netlify, managing deployment configuration and environment variables in production.
- Integrated Supabase (Postgres), Stripe payments, Google OAuth authentication, and API-driven workflows to support secure, scalable user interactions.
- Designed modular curriculum architecture aligned to adaptive, AI-assisted learning experiences.
- Implemented analytics and feedback systems to support iterative product refinement and measurable learner engagement.
- Translated learning science principles into scalable product features and AI-supported instructional workflows.

Academy Of Art University
Associate Vice President, Online Education Production | May 2022 – Present
- Lead enterprise-wide transformation of online course production, overseeing 8 direct and 26 indirect reports across content design, operations, and media teams.
- Reduced production timelines by 50% and increased productivity by 30% through workflow redesign and modular systems implementation.
- Integrated AI tools including Claude and ChatGPT into content development pipelines, improving efficiency by 40% while maintaining quality and accessibility standards.
- Directed development of 1,000+ interactive instructional assets to support scalable, asynchronous learning across 23+ academic departments.
- Manage $1M+ annual budget, aligning curriculum innovation with long-term academic and workforce strategy in partnership with executive leadership.

Director, Online Operations | December 2021 – May 2022
- Led large-scale LMS migration to Brightspace (D2L), auditing 1,800+ courses and overseeing the transfer of 3,000+ courses into a modernized digital ecosystem.
- Expanded digital course catalog by 5% and launched 35 new online courses aligned to evolving market and learner needs.

Online Production Manager | October 2014 – December 2021
- Lead end-to-end production of 300+ course versions annually, integrating learning design principles to improve quality, scalability, and cross-functional alignment.
- Built and deployed centralized SharePoint tracking system that increased reporting efficiency by 60% and streamlined production workflows.

Online Coordinator II | April 2011 – October 2014

CORE COMPETENCIES
Curriculum Strategy & Portfolio Ownership | Modular Curriculum Architecture | AI-Integrated Curriculum Development | Cross-Functional Product Collaboration | Learning Science Application | Workforce & Industry Alignment | Curriculum Governance & Quality Systems | Team Leadership & Scaling

TECHNICAL FLUENCY
AI & Development Tools: Claude Code, GitHub, Netlify, Supabase (Postgres), Stripe, Google OAuth, REST APIs
Web Technologies: HTML, CSS, JavaScript, SQL
Learning & Delivery: Canvas, Brightspace (D2L), Blackboard, Kaltura
Collaboration & Analytics: JIRA, Asana, SharePoint, Slack, Google Analytics

EDUCATION
MA in Education, Instructional Technologies — San Francisco State University
BA in Journalism — Hawai'i Pacific University

---

HARD REQUIREMENTS (automatic disqualifiers if failed):
- 100% remote only — hybrid or onsite = immediate SKIP
- Minimum $120,000/year base — below threshold or unclear with no upward range = flag
- Title level must be Senior Manager, Director, or above — junior scope = immediate SKIP
- No pure teaching or faculty roles
- No contract or part-time unless explicitly leading to permanent full-time

TARGET ROLES: Director of Instructional Design, Director of Learning Experience, Director of Educational Content Production, Head of Instructional Design, Senior Manager/Director of Enablement, Director of L&D, EdTech Product or Program Manager, VP/AVP Learning Operations, AI Enablement Lead/Director, Learning Systems Director, Curriculum Strategy Director

TARGET INDUSTRIES: Higher education, K-12 edtech, corporate L&D, edtech startups, SaaS with learning or enablement functions

RESUME SELECTION GUIDE:
- Operations resume: operations, program management, AI enablement, workflow automation, systems design, tooling, enablement roles
- Learning resume: curriculum strategy, instructional design, learning experience, edtech product, academic program management, L&D leadership, AI-integrated learning roles

SCORING RUBRIC (total 100 points):
- Role & Title Alignment: 0-25 (25=exact match to target roles, 13=adjacent, 0=misaligned)
- Remote Confirmation: 0-25 (25=explicitly fully remote, 13=unclear, 0=hybrid or onsite)
- Salary Signals: 0-20 (20=clearly at or above $120K, 10=unclear but likely, 0=below or red flags)
- Industry Fit: 0-15 (15=target industry, 8=adjacent, 3=stretch, 0=unrelated)
- Skills & Tools Match: 0-15 (15=strong overlap with her technical stack, 7=partial, 0=mismatch)

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
  "resume_recommendation": { "version": "Operations" | "Learning", "reason": string },
  "screening_concerns": [string]
}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { jobDescription } = req.body || {};

  if (!jobDescription) {
    return res.status(400).json({ error: 'Job description is required.' });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
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
    const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
    const parsed = JSON.parse(cleaned);

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Evaluate error:', err);
    return res.status(500).json({ error: err.message || 'Evaluation failed. Please try again.' });
  }
}
