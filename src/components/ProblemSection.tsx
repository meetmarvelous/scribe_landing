import { AlertCircle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      step: '01',
      title: 'Fragmented discovery & lost provenance',
      tag: 'Disconnected Signals',
      desc: 'Product ideas, trend signals, and supplier quotes are scattered across dozens of browser tabs, PDFs, and ephemeral chat channels. By the time an opportunity is surfaced, original supplier pricing, minimum order quantities, and factory evidence have vanished.',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      cropDetail: {
        label: 'Current Friction',
        items: ['Unverified vendor claims', 'Lost customs/FOB quotes', 'Duplicate product records'],
      },
    },
    {
      step: '02',
      title: 'Manual content operations & duplication',
      tag: 'Workflow Bottleneck',
      desc: 'Teams repeatedly rewrite specifications, category descriptions, and comparison articles from scratch for every publishing channel. Without a shared canonical product record, revisions drift out of sync and critical attribute data is lost.',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      cropDetail: {
        label: 'Current Friction',
        items: ['Repetitive drafting loops', 'Out-of-sync SKU attributes', 'Manual copy-paste errors'],
      },
    },
    {
      step: '03',
      title: 'Unclear economics & deceptive vanity metrics',
      tag: 'Capital Inefficiency',
      desc: 'Advertising dashboards and analytics platforms highlight gross sales and top-line ROAS, hiding the true erosion caused by freight surcharges, marketplace commissions, payment fees, and return allowances.',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      cropDetail: {
        label: 'Current Friction',
        items: ['Gross ROAS masking losses', 'Unaccounted freight & fees', 'No true contribution model'],
      },
    },
  ];

  return (
    <section id="overview" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>The Operational Problem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Commerce work is scattered across too many tools.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Product research happens in one place, supplier details in another, content in a publishing tool, and marketing performance somewhere else. SCRIBE is designed to connect these tasks through shared product records, traceable evidence, and coordinated workflows.
          </p>
        </div>

        {/* 3 Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => (
            <div
              key={prob.step}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${prob.tagColor}`}>
                    PHASE {prob.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {prob.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {prob.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {prob.desc}
                </p>
              </div>

              {/* UI Diagnostic Preview Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 font-bold mb-2.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  <span>{prob.cropDetail.label}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                  {prob.cropDetail.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
