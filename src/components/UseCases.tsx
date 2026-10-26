import { BookOpen, Compass, Layers, LineChart, ArrowRight } from 'lucide-react';

export const UseCases = () => {
  const cases = [
    {
      icon: BookOpen,
      title: 'Content-Led Commerce',
      audience: 'Publishers & Editorial Brands',
      desc: 'Research emerging physical products, verify specifications, generate rich buying guides, and publish directly to WordPress and headless CMS environments.',
      outcome: 'Move from product signal to reviewed editorial draft in under 30 minutes.',
      status: 'Live in MVP',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: Compass,
      title: 'Product Sourcing Teams',
      audience: 'Merchants & Category Managers',
      desc: 'Aggregate supplier leads, maintain factory verification dossiers, compare landed FOB quotes, and evaluate net contribution margin before issuing POs.',
      outcome: 'Eliminate lost supplier provenance and unverified vendor quotes.',
      status: 'Live in MVP',
      colorClass: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: Layers,
      title: 'Multi-Channel Operations',
      audience: 'E-commerce Operators',
      desc: 'Normalize product schemas, manage attribute variations, and dispatch canonical product records across supported commerce channels from one desktop dashboard.',
      outcome: 'Maintain a single canonical source of truth for all SKU data.',
      status: 'Beta Connectors',
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: LineChart,
      title: 'Growth & Revenue Operations',
      audience: 'Acquisition & Retention Leads',
      desc: 'Coordinate approved marketing copy, track outbound affiliate links, and evaluate campaign health using contribution margin rather than inflated ad ROAS.',
      outcome: 'Base capital allocation on audited contribution margins.',
      status: 'Planned Integration',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Target Profiles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Engineered for disciplined commerce operators.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether running an editorial publishing network or managing high-volume product sourcing, SCRIBE eliminates disconnected tool sprawl.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-xs ${cs.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 font-semibold">
                      {cs.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    {cs.audience}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 text-xs font-bold text-slate-900 flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{cs.outcome}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
