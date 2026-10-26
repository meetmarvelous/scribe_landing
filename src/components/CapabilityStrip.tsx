import { Search, Calculator, Send, TrendingUp } from 'lucide-react';

export const CapabilityStrip = () => {
  const capabilities = [
    {
      icon: Search,
      title: 'Discover',
      tagline: 'Product & Market Signals',
      desc: 'Ingest and evaluate product candidates across authorized supplier feeds, user imports, and search signals.',
      colorClasses: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: Calculator,
      title: 'Evaluate',
      tagline: 'Source Evidence & True Costs',
      desc: 'Model landed costs, supplier minimum orders, and net contribution margins before allocating capital.',
      colorClasses: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      icon: Send,
      title: 'Publish',
      tagline: 'Product & Editorial Content',
      desc: 'Draft structured specifications, comparison guides, and dispatch directly to configured WordPress endpoints.',
      colorClasses: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: TrendingUp,
      title: 'Optimise',
      tagline: 'Workflows & Performance',
      desc: 'Monitor real commercial outcomes with audited agent runs, approval gates, and decoupled attribution.',
      colorClasses: 'bg-amber-50 text-amber-600 border-amber-200',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border shadow-xs ${cap.colorClasses}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-bold text-slate-900 tracking-wide">{cap.title}</span>
                    <span className="text-slate-300 text-xs">/</span>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">{cap.tagline}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
