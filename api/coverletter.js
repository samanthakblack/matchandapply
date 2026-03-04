import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are writing a cover letter for Samantha Black. You have her full profile including two resume versions (Operations and Learning), portfolio case studies, and testimonials from senior leaders. You also have the job description and her match evaluation for this specific role.

Write a concise, specific cover letter of no more than 350 words. Rules:
- Do NOT use phrases like "I am excited to apply" or "I believe I would be a great fit"
- Do NOT open with the company name, their mission, or a compliment about them. The first sentence must be about the candidate or the problem she solves.
- Do NOT use "resonates with," "aligns with," "passionate about," or "draws me to" in the opening paragraph.
- Lead with a specific story, observation, problem, or result — not enthusiasm for the company.
- The company's mission can be referenced but only after establishing her credibility first, never as the hook.
- Draw on her actual metrics, case studies, and language from her resumes and portfolio
- Match the tone and emphasis to whichever resume version was recommended in the evaluation (Operations or Learning)
- If the role is a Product Manager role, frame her course production experience explicitly as product ownership — she has defined requirements, managed production cycles, shipped learning products, and iterated based on data
- End on her track record or a specific outcome claim, not on restating interest or enthusiasm.
- Tone: direct, warm, accomplished
- Return plain text only, no JSON, no markdown

SAMANTHA BLACK — FULL PROFILE:

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

CORE COMPETENCIES
Operating Systems and Workflow Design | Cross-Functional Program Operations | Documentation and Information Architecture | Tool Stack Optimization | Automation and AI Adoption | Metrics, Dashboards, and Reporting | Process Governance and Quality Systems | Team Leadership and Scaling

TECHNICAL FLUENCY
AI & Automation: Claude Code, ChatGPT, OpenAI API, Power Automate, Zapier, Make
Build & Data: GitHub, Netlify, Supabase (Postgres), REST APIs, SQL
Auth and Payments: Google OAuth, Stripe
Collaboration & Analytics: Slack, SharePoint, JIRA, Asana, Google Analytics, Resend

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

CORE COMPETENCIES
Curriculum Strategy & Portfolio Ownership | Modular Curriculum Architecture | AI-Integrated Curriculum Development | Cross-Functional Product Collaboration | Learning Science Application | Workforce & Industry Alignment | Curriculum Governance & Quality Systems | Team Leadership & Scaling

TECHNICAL FLUENCY
AI & Development Tools: Claude Code, GitHub, Netlify, Supabase (Postgres), Stripe, Google OAuth, REST APIs
Web Technologies: HTML, CSS, JavaScript, SQL
Learning & Delivery: Canvas, Brightspace (D2L), Blackboard, Kaltura
Collaboration & Analytics: JIRA, Asana, SharePoint, Slack, Google Analytics

EDUCATION (both resumes)
MA in Education, Instructional Technologies — San Francisco State University
BA in Journalism — Hawai'i Pacific University

PROFESSIONAL DEVELOPMENT
DataCamp SQL Fundamentals | In Progress
UC Irvine Finance for Non-Financial Professionals | 2025
SheCodes Responsive Web Development | 2022 | SheCodes Front End Development | 2021 | SheCodes Basics | 2021

---

PORTFOLIO HIGHLIGHTS

Case Study 1: Building an AI-Powered Homework Support System (Methodwise)
Challenge: Homework help usually turns into tabs, scrolling, and piecing together explanations not aligned to how concepts are taught in class.
Action: Designed end-to-end product flow so a parent can enter a subject and grade level, get a clear explanation, and work through homework step-by-step. Built in quick knowledge checks to surface prerequisite gaps. Added follow-up pathways for practice, understanding why a method is used, spotting common mistakes, and connecting concepts to future topics. Launched free and paid plans with account creation and saved chat history.
Result: Shipped a functioning product that turns real homework moments into structured, method-aligned guidance. Created a foundation for iteration through instrumentation, feedback, and admin visibility into usage patterns and conversion.
Tooling: Claude Code, GitHub, Netlify, Supabase, Google OAuth, OpenAI API, Stripe, Resend, Google Analytics, Canva, Vimeo

Case Study 2: Scaling Course Production — Reduced timelines by 50%, postponements by 23%
Challenge: Course production across 23 academic departments operated on a 30-week cycle with 41% average postponement rate (2019-2023).
Action: Led cross-functional initiative to redesign the production cycle introducing a 15-week schedule. Partnered with HR and Legal to update contract language with stricter deadlines. Implemented Agile project management and AI-powered tools.
Result: Reduced production timelines by 50%, productivity up 30%. Postponements: 41% (2019-2023) to 21% (2024) to 16% (2025). 23% decrease in course build postponements over two years.

Case Study 3: Digitizing Contracts & Building Scalable Tracking System — 4,000+ contracts centralized
Challenge: Contract management for 200+ annual SMEs was fragmented. Paper-based agreements difficult to track, non-compliant, no central system.
Action: Digitized 4,000+ contracts. Built centralized SharePoint site. Designed custom recall and version tracking system. Created department-specific lists linked through Power Automate flows. Partnered with HR and Legal for compliance.
Result: Single source of truth for six years of historical and current data. Enabled leadership to track builds, SME frequency, departmental output, and annual contract costs. Significantly improved compliance. Established foundation for accurate budget forecasting.

Case Study 4: Large-Scale LMS Migration — 3,000+ courses migrated with zero content loss
Challenge: Needed to migrate 3,000+ courses into a new LMS that lacked versioning capacity.
Action: Directed comprehensive audit of 1,800+ online courses. Created SharePoint site to track each department's migration status. Designed custom version tracking system. Coordinated with IT, faculty, and compliance teams.
Result: Successfully migrated all 3,000+ courses on time. No courses lost. Each department had clear visibility. Maintained consistent version numbers throughout.

---

TESTIMONIALS

Chief Academic Officer: "Her leadership is grounded in integrity, professionalism, and a deep commitment to building systems that truly work. Samantha brings clarity to complex challenges and designs solutions that are effective, sustainable, and responsive to organizational needs."

Executive Vice President, Online Education: "She consistently analyzes complex situations, develops practical solutions, implements them, and evaluates results with measurable impact. Someone I rely on for process improvement, employee engagement, and organizational effectiveness."

Vice President of Online Education: "Samantha would be a transformational addition to any team. She's exceptional in her abilities to connect, synthesize, organize and communicate. She embodied integrity and ensured our standards never slipped, always advocating for students while understanding the needs of the business."`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { jobDescription, evaluation } = req.body || {};

  if (!jobDescription || !evaluation) {
    return res.status(400).json({ error: 'Job description and evaluation are required.' });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      temperature: 0.3,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `JOB DESCRIPTION:\n${jobDescription}\n\nEVALUATION RESULT:\n${JSON.stringify(evaluation, null, 2)}\n\nWrite the cover letter now.`,
        },
      ],
    });

    const coverLetter = message.content[0].text.trim();
    return res.status(200).json({ coverLetter });
  } catch (err) {
    console.error('Cover letter error:', err);
    return res.status(500).json({ error: err.message || 'Cover letter generation failed. Please try again.' });
  }
}
