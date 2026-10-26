import { AlertCircle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      step: '01',
      title: 'Fragmented discovery & lost provenance',
      tag: 'Disconnected Signals',
      desc: 'Product ideas, trend signals, and supplier quotes are scattered across dozens of browser tabs, PDFs, and ephemeral chat channels. By the time an opportunity is surfaced, original supplier pricing, minimum order quantities, and factory evidence have vanished.',
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
      cropDetail: {
        label: 'Current Friction',
        items: ['Gross ROAS masking losses', 'Unaccounted freight & fees', 'No true contribution model'],
      },
    },
  ];

  return (
    <section id="overview" className="py-24 bg-[#F7F8FA] border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>The Operational Problem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Commerce work is scattered across too many tools.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Product research happens in one place, supplier details in another, content in a publishing tool, and marketing performance somewhere else. SCRIBE is designed to connect these tasks through shared product records, traceable evidence, and coordinated workflows.
          </p>
        </div>

        {/* 3 Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob) => (
            <div
              key={prob.step}
              className="bg-white border border-[#E4E7EC] rounded-2xl p-7 flex flex-col justify-between hover:border-[#4F7DFF]/50 hover:shadow-lg hover:shadow-black/5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-[#4F7DFF] px-2.5 py-1 rounded bg-[#4F7DFF]/10 border border-[#4F7DFF]/20">
                    PHASE {prob.step}
                  </span>
                  <span className="text-[11px] font-mono text-[#667085]">
                    {prob.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#111A2E] mb-3 leading-snug">
                  {prob.title}
                </h3>

                <p className="text-sm text-[#667085] leading-relaxed mb-6">
                  {prob.desc}
                </p>
              </div>

              {/* UI Diagnostic Preview Box */}
              <div className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-xl p-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#344054] font-medium mb-2.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>{prob.cropDetail.label}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-[#667085]">
                  {prob.cropDetail.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#94A3B8]"></span>
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
