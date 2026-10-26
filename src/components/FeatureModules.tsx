import type { ComponentType } from 'react';
import {
  Globe,
  Users,
  FileText,
  Calculator,
  Workflow,
  ShieldCheck,
  Cpu,
  BarChart3
} from 'lucide-react';

interface FeatureModule {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  category: string;
  status: 'Available in MVP' | 'In Development' | 'Planned';
  description: string;
  metricsLabel: string;
  colorClass: string;
}

export const FeatureModules = () => {
  const modules: FeatureModule[] = [
    {
      id: 'discovery',
      icon: Globe,
      title: 'Global Product Discovery',
      category: 'Intelligence',
      status: 'Available in MVP',
      description: 'Discover product candidates through permitted sources, catalogue feeds, CSV imports, and customs records. Organise evidence and identify which opportunities deserve further review.',
      metricsLabel: 'Deduplicated indexing with confidence scores',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
    },
    {
      id: 'suppliers',
      icon: Users,
      title: 'Supplier Intelligence',
      category: 'Sourcing',
      status: 'Available in MVP',
      description: 'Record supplier leads, quotations, minimum order quantities (MOQ), lead times, verification checklists, and audit documentation in one permanent desktop registry.',
      metricsLabel: 'Full vendor provenance & risk audit tracking',
      colorClass: 'bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Catalogue & Content Studio',
      category: 'Publishing',
      status: 'Available in MVP',
      description: 'Manage structured product schemas and generate editable product descriptions, buyer guides, and technical breakdowns with direct WordPress REST API dispatch.',
      metricsLabel: 'Markdown, JSON-LD & remote ID sync',
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white',
    },
    {
      id: 'pricing',
      icon: Calculator,
      title: 'Profitability & Pricing',
      category: 'Economics',
      status: 'Available in MVP',
      description: 'Model FOB landed costs, freight, customs duties, payment fees, fulfillment surcharges, and return allowances before allocating capital or launching campaigns.',
      metricsLabel: 'Contribution margin & break-even ROAS',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
    },
    {
      id: 'revenue',
      icon: Workflow,
      title: 'Revenue Workflows',
      category: 'Operations',
      status: 'In Development',
      description: 'Coordinate approved workflows for campaign preparation, affiliate operations, customer retention, and multi-channel catalog syncing as connectors become available.',
      metricsLabel: 'Staged release candidate for Q1 2027',
      colorClass: 'bg-teal-50 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white',
    },
    {
      id: 'governance',
      icon: ShieldCheck,
      title: 'AI Agent Control Centre',
      category: 'Governance',
      status: 'Available in MVP',
      description: 'Inspect agent runs, tool invocations, token costs, and structured outputs. Enforce mandatory human approval gates for high-impact actions like publishing or pricing.',
      metricsLabel: 'Zero black-box autonomy; full audit trail',
      colorClass: 'bg-sky-50 text-sky-600 border-sky-200 group-hover:bg-sky-600 group-hover:text-white',
    },
    {
      id: 'integrations',
      icon: Cpu,
      title: 'Commerce Integrations',
      category: 'Connectors',
      status: 'Available in MVP',
      description: 'Connect supported publishing platforms, supplier directories, and commerce systems via isolated modular adapters that protect credentials inside Windows Credential Vault.',
      metricsLabel: 'WordPress REST, Shopify Admin & CSV feeds',
      colorClass: 'bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-700 group-hover:text-white',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Performance Analytics',
      category: 'Telemetry',
      status: 'Available in MVP',
      description: 'Bring workflow health and commercial performance metrics into one clean view. Decouple attributed revenue from true incremental profit to prevent vanity scaling.',
      metricsLabel: 'Incremental contribution vs gross volume',
      colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-700 group-hover:text-white',
    },
  ];

  return (
    <section id="modules" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Desktop Workspace Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Eight integrated operational modules.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SCRIBE is built as a unified workspace rather than a directory of standalone bots. Every module shares canonical product records, evidence logs, and permission policies.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
              >
                <div>
                  {/* Card Header with Icon & Status Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${mod.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                        mod.status === 'Available in MVP'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : mod.status === 'In Development'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      {mod.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {mod.description}
                  </p>
                </div>

                {/* Footer Metric Note */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{mod.metricsLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
