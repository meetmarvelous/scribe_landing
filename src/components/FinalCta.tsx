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
    <section className="py-24 bg-[#0B1020] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4F7DFF]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111A2E] border border-[#1E283D] text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29C7B8]"></span>
          <span>Windows Desktop Private Beta</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-sans">
          Turn product signals into your next commercial move.
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-2xl mx-auto">
          Bring discovery, content, supplier research, and controlled AI workflows into one SCRIBE workspace.
        </p>

        {/* Quick Access Form or Button */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={quickEmail}
              onChange={(e) => setQuickEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs sm:text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#4F7DFF] focus:ring-1 focus:ring-[#4F7DFF] font-sans"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4F7DFF] hover:bg-[#3D6BEB] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#4F7DFF]/25 active:scale-[0.98]"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-[#29C7B8]/10 border border-[#29C7B8]/30 flex items-center justify-center gap-3 text-xs sm:text-sm text-[#29C7B8] font-mono">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Thank you. Your early access request has been recorded.</span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <button
            onClick={onOpenEarlyAccess}
            className="text-xs font-mono text-[#4F7DFF] hover:underline"
          >
            Looking for multi-seat beta access? Fill out the qualification form &rarr;
          </button>
          <span className="text-[#64748B] text-xs">·</span>
          <button
            onClick={onExplore}
            className="text-xs font-mono text-[#94A3B8] hover:text-white"
          >
            Review architectural overview &uarr;
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-[#4F7DFF]" />
            <span>Windows 10/11 64-bit installer</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">·</span>
          <span>Encrypted local storage</span>
        </div>
      </div>
    </section>
  );
};
