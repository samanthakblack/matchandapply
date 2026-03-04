import { useState } from 'react';

const VERDICT_CONFIG = {
  PASS: { bg: 'bg-green-500', text: 'text-white', label: 'PASS' },
  MAYBE: { bg: 'bg-yellow-400', text: 'text-gray-900', label: 'MAYBE' },
  SKIP: { bg: 'bg-red-500', text: 'text-white', label: 'SKIP' },
};

const SCORE_LABELS = {
  role_title_alignment: 'Role & Title Alignment',
  remote_confirmation: 'Remote Confirmation',
  salary_signals: 'Salary Signals',
  industry_fit: 'Industry Fit',
  skills_tools_match: 'Skills & Tools Match',
};

function PassIcon() {
  return (
    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FailIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function ProgressBar({ score, max }) {
  const pct = Math.min(100, Math.round((score / max) * 100));
  const color =
    pct >= 75 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-400' : 'bg-red-500';
  return (
    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
      <div className={`${color} h-1.5 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function Results({ result, onCopyResults, onExport }) {
  const [copied, setCopied] = useState(false);
  const [exported, setExported] = useState(false);

  if (!result) return null;

  const verdict = VERDICT_CONFIG[result.verdict] || VERDICT_CONFIG.SKIP;

  const handleCopy = () => {
    onCopyResults();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    onExport();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  const totalPct = Math.min(100, result.total_score);
  const totalColor =
    totalPct >= 75 ? 'bg-green-500' : totalPct >= 55 ? 'bg-yellow-400' : 'bg-red-500';

  const hardFilterRows = [
    { key: 'remote', label: 'Remote Status' },
    { key: 'salary', label: 'Salary' },
    { key: 'title_level', label: 'Title Level' },
    { key: 'employment_type', label: 'Employment Type' },
  ];

  return (
    <div className="space-y-2">
      {/* Action buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={handleExport}
          className="text-xs text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-500 rounded px-2 py-1 transition-colors"
        >
          {exported ? 'Exported!' : 'Export JSON'}
        </button>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-500 rounded px-2 py-1 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy Results'}
        </button>
      </div>

      {/* 1. Verdict */}
      <Section title="Verdict">
        <span
          className={`inline-block ${verdict.bg} ${verdict.text} text-2xl font-black px-6 py-2 rounded-lg tracking-widest`}
        >
          {verdict.label}
        </span>
      </Section>

      {/* 2. Match Score */}
      <Section title="Match Score">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-black text-white">{result.total_score}</span>
          <span className="text-xl text-gray-400">/100</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className={`${totalColor} h-3 rounded-full transition-all duration-700`}
            style={{ width: `${totalPct}%` }}
          />
        </div>
      </Section>

      {/* 3. Hard Filter Check */}
      <Section title="Hard Filter Check">
        <div className="space-y-2">
          {hardFilterRows.map(({ key, label }) => {
            const filter = result.hard_filters?.[key];
            if (!filter) return null;
            return (
              <div key={key} className="flex items-start gap-2">
                {filter.pass ? <PassIcon /> : <FailIcon />}
                <div>
                  <span className="text-sm font-semibold text-gray-200">{label}</span>
                  {filter.note && (
                    <p className="text-xs text-gray-400 mt-0.5">{filter.note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. Score Breakdown */}
      <Section title="Score Breakdown">
        <div className="space-y-3">
          {Object.entries(result.score_breakdown || {}).map(([key, val]) => (
            <div key={key}>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">{SCORE_LABELS[key] || key}</span>
                <span className="font-mono font-semibold text-gray-200">
                  {val.score}/{val.max}
                </span>
              </div>
              <ProgressBar score={val.score} max={val.max} />
              {val.reason && (
                <p className="text-xs text-gray-500 mt-1">{val.reason}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Strengths */}
      {result.strengths?.length > 0 && (
        <Section title="Strengths">
          <ul className="space-y-1.5">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                {s}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 6. Gaps & Risks */}
      {result.gaps_and_risks?.length > 0 && (
        <Section title="Gaps & Risks">
          <ul className="space-y-1.5">
            {result.gaps_and_risks.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                {g}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* 7. Resume Recommendation */}
      {result.resume_recommendation && (
        <Section title="Resume Recommendation">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
            <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">
              {result.resume_recommendation.version?.toUpperCase()}
            </span>
            <span className="text-xs text-gray-400">Resume</span>
            {result.resume_recommendation.reason && (
              <p className="text-sm text-gray-300 mt-2">{result.resume_recommendation.reason}</p>
            )}
          </div>
        </Section>
      )}

      {/* 8. Screening Concerns */}
      {result.screening_concerns?.length > 0 && (
        <Section title="Screening Concerns">
          <ul className="space-y-1.5">
            {result.screening_concerns.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-yellow-400 mt-0.5 flex-shrink-0">!</span>
                {c}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
