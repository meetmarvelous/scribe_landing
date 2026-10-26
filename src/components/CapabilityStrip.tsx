import { Search, Calculator, Send, TrendingUp } from 'lucide-react';

export const CapabilityStrip = () => {
  const capabilities = [
    {
      icon: Search,
      title: 'Discover',
      tagline: 'Product & Market Opportunities',
      desc: 'Ingest and evaluate product candidates across authorized supplier feeds, user imports, and search signals.',
    },
    {
      icon: Calculator,
      title: 'Evaluate',
      tagline: 'Source Evidence & True Costs',
      desc: 'Model landed costs, supplier minimum orders, and net contribution margins before allocating capital.',
    },
    {
      icon: Send,
      title: 'Publish',
      tagline: 'Product & Editorial Content',
      desc: 'Draft structured specifications, comparison guides, and dispatch directly to configured WordPress endpoints.',
    },
    {
      icon: TrendingUp,
      title: 'Optimise',
      tagline: 'Workflows & Performance',
      desc: 'Monitor real commercial outcomes with audited agent runs, approval gates, and decoupled attribution.',
    },
  ];

  return (
    <section className="bg-[#111A2E] border-y border-[#1E283D] py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1020]/50 border border-[#1E283D]/80 hover:border-[#4F7DFF]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#162038] border border-[#23314F] flex items-center justify-center shrink-0 text-[#4F7DFF]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white tracking-wide">{cap.title}</span>
                    <span className="text-[#64748B] text-xs">/</span>
                    <span className="text-xs font-mono text-[#94A3B8]">{cap.tagline}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
