import { useState, useCallback } from 'react';
import { evaluateJob, generateCoverLetter } from './api';
import Results from './components/Results';

const MIN_CHARS = 100;

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

function formatResultsAsText(result) {
  if (!result) return '';
  const lines = [];
  lines.push(`JOB MATCH EVALUATOR — ASSESSMENT`);
  lines.push(`=================================`);
  lines.push(`VERDICT: ${result.verdict}`);
  lines.push(`MATCH SCORE: ${result.total_score}/100`);
  lines.push('');
  lines.push(`HARD FILTER CHECK`);
  const filterLabels = { remote: 'Remote Status', salary: 'Salary', title_level: 'Title Level', employment_type: 'Employment Type' };
  for (const [key, label] of Object.entries(filterLabels)) {
    const f = result.hard_filters?.[key];
    if (f) lines.push(`  ${f.pass ? '✓' : '✗'} ${label}: ${f.note}`);
  }
  lines.push('');
  lines.push(`SCORE BREAKDOWN`);
  const scoreLabels = { role_title_alignment: 'Role & Title Alignment', remote_confirmation: 'Remote Confirmation', salary_signals: 'Salary Signals', industry_fit: 'Industry Fit', skills_tools_match: 'Skills & Tools Match' };
  for (const [key, label] of Object.entries(scoreLabels)) {
    const s = result.score_breakdown?.[key];
    if (s) lines.push(`  ${label}: ${s.score}/${s.max} — ${s.reason}`);
  }
  lines.push('');
  if (result.strengths?.length) {
    lines.push(`STRENGTHS`);
    result.strengths.forEach(s => lines.push(`  + ${s}`));
    lines.push('');
  }
  if (result.gaps_and_risks?.length) {
    lines.push(`GAPS & RISKS`);
    result.gaps_and_risks.forEach(g => lines.push(`  − ${g}`));
    lines.push('');
  }
  if (result.resume_recommendation) {
    lines.push(`RESUME RECOMMENDATION`);
    lines.push(`  ${result.resume_recommendation.version} Resume: ${result.resume_recommendation.reason}`);
    lines.push('');
  }
  if (result.screening_concerns?.length) {
    lines.push(`SCREENING CONCERNS`);
    result.screening_concerns.forEach(c => lines.push(`  ! ${c}`));
  }
  return lines.join('\n');
}

export default function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [coverLoading, setCoverLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationMsg, setValidationMsg] = useState('');

  const charCount = jobDescription.length;

  const handleEvaluate = useCallback(async () => {
    if (charCount < MIN_CHARS) {
      setValidationMsg(`Job description is too short. Please paste at least ${MIN_CHARS} characters.`);
      return;
    }
    setValidationMsg('');
    setError('');
    setResult(null);
    setCoverLetter('');
    setLoading(true);
    try {
      const data = await evaluateJob(jobDescription);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [jobDescription, charCount]);

  const handleCoverLetter = useCallback(async () => {
    if (!result) return;
    setCoverLoading(true);
    setError('');
    try {
      const letter = await generateCoverLetter(jobDescription, result);
      setCoverLetter(letter);
    } catch (err) {
      setError(err.message || 'Failed to generate cover letter.');
    } finally {
      setCoverLoading(false);
    }
  }, [jobDescription, result]);

  const handleClear = () => {
    setJobDescription('');
    setResult(null);
    setCoverLetter('');
    setError('');
    setValidationMsg('');
  };

  const handleCopyResults = () => {
    const text = formatResultsAsText(result);
    navigator.clipboard.writeText(text).catch(() => {});
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <h1 className="text-xl font-black tracking-tight text-white">
          Job Match Evaluator
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">Personal job search tool</p>
      </header>

      {/* Main two-column layout */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* LEFT PANEL */}
        <div className="md:w-2/5 md:border-r border-gray-800 flex flex-col">
          <div className="flex flex-col flex-1 p-6 gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2" htmlFor="jd">
                Job Description
              </label>
              <textarea
                id="jd"
                className="flex-1 min-h-64 md:min-h-0 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-600 resize-none focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={e => {
                  setJobDescription(e.target.value);
                  if (validationMsg) setValidationMsg('');
                }}
              />
              <div className="flex justify-between items-center mt-1.5">
                {validationMsg ? (
                  <p className="text-xs text-yellow-400">{validationMsg}</p>
                ) : (
                  <span />
                )}
                <span className={`text-xs ml-auto ${charCount < MIN_CHARS ? 'text-gray-600' : 'text-gray-400'}`}>
                  {charCount.toLocaleString()} chars
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleEvaluate}
                disabled={loading || coverLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 disabled:text-indigo-600 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Spinner />
                    <span>Evaluating...</span>
                  </>
                ) : (
                  'Evaluate'
                )}
              </button>

              {result && !loading && (
                <button
                  onClick={handleCoverLetter}
                  disabled={coverLoading}
                  className="w-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 text-gray-200 font-semibold py-2.5 rounded-lg border border-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  {coverLoading ? (
                    <>
                      <Spinner />
                      <span>Generating...</span>
                    </>
                  ) : (
                    'Generate Cover Letter'
                  )}
                </button>
              )}

              <button
                onClick={handleClear}
                disabled={loading || coverLoading}
                className="w-full text-gray-500 hover:text-gray-300 text-sm py-1.5 transition-colors disabled:opacity-40"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-3/5 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            {error && (
              <div className="mb-4 bg-red-950 border border-red-800 rounded-lg p-4 text-sm text-red-300">
                <strong className="block mb-1">Error</strong>
                {error}
              </div>
            )}

            {!result && !loading && !error && (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="text-5xl mb-4 opacity-10 select-none font-black">◎</div>
                <p className="text-gray-500 text-sm">Results will appear here</p>
                <p className="text-gray-600 text-xs mt-1">Paste a job description and click Evaluate</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-full py-20">
                <Spinner />
                <p className="text-gray-400 text-sm mt-3">Evaluating...</p>
              </div>
            )}

            {result && !loading && (
              <Results result={result} onCopyResults={handleCopyResults} />
            )}

            {/* Cover Letter */}
            {coverLetter && (
              <div className="mt-6 border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Cover Letter</h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(coverLetter).catch(() => {})}
                    className="text-xs text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-500 rounded px-2 py-1 transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <textarea
                  readOnly
                  value={coverLetter}
                  className="w-full h-80 bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 resize-none focus:outline-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
