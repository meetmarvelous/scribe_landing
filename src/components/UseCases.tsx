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
    },
    {
      icon: Compass,
      title: 'Product Sourcing Teams',
      audience: 'Merchants & Category Managers',
      desc: 'Aggregate supplier leads, maintain factory verification dossiers, compare landed FOB quotes, and evaluate net contribution margin before issuing POs.',
      outcome: 'Eliminate lost supplier provenance and unverified vendor quotes.',
      status: 'Live in MVP',
    },
    {
      icon: Layers,
      title: 'Multi-Channel Operations',
      audience: 'E-commerce Operators',
      desc: 'Normalize product schemas, manage attribute variations, and dispatch canonical product records across supported commerce channels from one desktop dashboard.',
      outcome: 'Maintain a single canonical source of truth for all SKU data.',
      status: 'Beta Connectors',
    },
    {
      icon: LineChart,
      title: 'Growth & Revenue Operations',
      audience: 'Acquisition & Retention Leads',
      desc: 'Coordinate approved marketing copy, track outbound affiliate links, and evaluate campaign health using contribution margin rather than inflated ad ROAS.',
      outcome: 'Base capital allocation on audited contribution margins.',
      status: 'Planned Integration',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Target Profiles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Engineered for disciplined commerce operators.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
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
                className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#4F7DFF]/50 hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E7EC] flex items-center justify-center text-[#4F7DFF] group-hover:bg-[#4F7DFF]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E4E7EC] text-[#64748B]">
                      {cs.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
                    {cs.audience}
                  </span>
                  <h3 className="text-base font-semibold text-[#111A2E] mb-2 group-hover:text-[#4F7DFF] transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-[#667085] leading-relaxed mb-6">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] text-xs font-medium text-[#111A2E] flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#4F7DFF] shrink-0 mt-0.5" />
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
