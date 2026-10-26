import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Monitor } from 'lucide-react';

interface FinalCtaProps {
  onOpenEarlyAccess: () => void;
  onExplore: () => void;
}

export const FinalCta = ({ onOpenEarlyAccess, onExplore }: FinalCtaProps) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (quickEmail && quickEmail.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Background Radial Ambient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-300/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-emerald-300/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50 border border-blue-200/90 rounded-3xl p-8 sm:p-14 shadow-xl shadow-blue-500/5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-100/70 border border-blue-200 text-xs font-mono text-blue-800 uppercase tracking-wider mb-6 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Windows Desktop Private Beta</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6 font-sans">
            Turn product signals into your next commercial move.
          </h2>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Bring discovery, content, supplier research, and controlled AI workflows into one SCRIBE workspace.
          </p>

          {/* Quick Access Form or Success Alert */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 font-sans shadow-xs"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-3 text-xs sm:text-sm text-emerald-800 font-mono font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you. Your early access request has been recorded.</span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={onOpenEarlyAccess}
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
            >
              Looking for multi-seat beta access? Fill out the qualification form &rarr;
            </button>
            <span className="text-slate-300 text-xs">·</span>
            <button
              onClick={onExplore}
              className="text-xs font-mono font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              Review architectural overview &uarr;
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Monitor className="w-3.5 h-3.5 text-blue-600" />
              <span>Windows 10/11 64-bit installer</span>
            </span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="text-emerald-700 font-semibold">Encrypted local storage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
