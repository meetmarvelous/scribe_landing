export const RoadmapSection = () => {
  const roadmapStages = [
    {
      phase: 'Phase 01',
      title: 'MVP Foundation',
      timeline: 'Current Release · Q4 2026',
      badge: 'Available / Beta',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-500',
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
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      dotColor: 'bg-blue-500',
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
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      dotColor: 'bg-slate-400',
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
    <section id="roadmap" className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Transparent Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Deliberate milestones. Honest release status.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We distinguish tested, functioning software from roadmap aspirations. Review what is shipping in the current release versus future releases.
          </p>
        </div>

        {/* 3 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapStages.map((stg) => (
            <div
              key={stg.phase}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-blue-700 px-2.5 py-1 rounded-md bg-white border border-slate-200">
                    {stg.phase}
                  </span>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-bold ${stg.badgeColor}`}>
                    {stg.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {stg.title}
                </h3>

                <span className="text-xs font-mono text-slate-500 block mb-6">
                  {stg.timeline}
                </span>

                {/* Items */}
                <ul className="space-y-3 text-xs text-slate-700 font-medium">
                  {stg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${stg.dotColor} mt-1.5 shrink-0`}></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                {stg.phase === 'Phase 01' ? 'Ready for private testing' : 'Subject to technical discovery'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
