export const RoadmapSection = () => {
  const roadmapStages = [
    {
      phase: 'Phase 01',
      title: 'MVP Foundation',
      timeline: 'Current Release · Q4 2026',
      badge: 'Available / Beta',
      badgeColor: 'bg-[#29C7B8]/10 text-[#0F766E] border-[#29C7B8]/30',
      items: [
        'Native Windows desktop shell (Tauri 2 + Rust backend)',
        'Local encrypted SQLite catalog & supplier registry',
        'CSV import/export with schema validation & deduplication',
        'WordPress REST API publishing integration (Application Passwords)',
        'Structured unit economics calculator (FOB, freight, margin, CAC)',
        'AI content studio for Markdown guides & JSON-LD schema',
        'Agent control centre with mandatory Human Approval Gates',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Connectors & Intelligence',
      timeline: 'Staged Rollout · Q1-Q2 2027',
      badge: 'In Development',
      badgeColor: 'bg-[#4F7DFF]/10 text-[#4F7DFF] border-[#4F7DFF]/30',
      items: [
        'Shopify Admin API two-way sync for products & tags',
        'Pressable & headless CMS auto-deployment pipelines',
        'Authorized customs bill of lading import adapters',
        'Supplier RFQ quote request drafting & price band tracking',
        'Decoupled multi-channel attribution analytics',
        'Local LLM runner support via ONNX / llama.cpp',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Autonomous Operations',
      timeline: 'Strategic Target · 2027+',
      badge: 'Planned Roadmap',
      badgeColor: 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]',
      items: [
        'Amazon SP-API & Walmart Marketplace adapters',
        'Multi-user team permissions & audit log synchronization',
        'Automated repricing rules with strict margin safety bounds',
        'Inventory replenishment forecasting across warehouses',
        'Wholesale purchase order drafting & vendor settlement',
        'Long-term multi-vendor marketplace infrastructure',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-white border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Transparent Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Deliberate milestones. Honest release status.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            We distinguish tested, functioning software from roadmap aspirations. Review what is shipping in the current release versus future releases.
          </p>
        </div>

        {/* 3 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapStages.map((stg) => (
            <div
              key={stg.phase}
              className="bg-[#F7F8FA] border border-[#E4E7EC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#4F7DFF]/50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#4F7DFF] px-2.5 py-1 rounded bg-white border border-[#E4E7EC]">
                    {stg.phase}
                  </span>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-medium ${stg.badgeColor}`}>
                    {stg.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111A2E] mb-1">
                  {stg.title}
                </h3>

                <span className="text-xs font-mono text-[#667085] block mb-6">
                  {stg.timeline}
                </span>

                {/* Items */}
                <ul className="space-y-3 text-xs text-[#344054]">
                  {stg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF] mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E4E7EC] text-[11px] font-mono text-[#64748B]">
                {stg.phase === 'Phase 01' ? 'Ready for private testing' : 'Subject to technical discovery'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
