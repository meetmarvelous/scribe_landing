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
    },
    {
      id: 'suppliers',
      icon: Users,
      title: 'Supplier Intelligence',
      category: 'Sourcing',
      status: 'Available in MVP',
      description: 'Record supplier leads, quotations, minimum order quantities (MOQ), lead times, verification checklists, and audit documentation in one permanent desktop registry.',
      metricsLabel: 'Full vendor provenance & risk audit tracking',
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Catalogue & Content Studio',
      category: 'Publishing',
      status: 'Available in MVP',
      description: 'Manage structured product schemas and generate editable product descriptions, buyer guides, and technical breakdowns with direct WordPress REST API dispatch.',
      metricsLabel: 'Markdown, JSON-LD & remote ID sync',
    },
    {
      id: 'pricing',
      icon: Calculator,
      title: 'Profitability & Pricing',
      category: 'Economics',
      status: 'Available in MVP',
      description: 'Model FOB landed costs, freight, customs duties, payment fees, fulfillment surcharges, and return allowances before allocating capital or launching campaigns.',
      metricsLabel: 'Contribution margin & break-even ROAS',
    },
    {
      id: 'revenue',
      icon: Workflow,
      title: 'Revenue Workflows',
      category: 'Operations',
      status: 'In Development',
      description: 'Coordinate approved workflows for campaign preparation, affiliate operations, customer retention, and multi-channel catalog syncing as connectors become available.',
      metricsLabel: 'Staged release candidate for Q1 2027',
    },
    {
      id: 'governance',
      icon: ShieldCheck,
      title: 'AI Agent Control Centre',
      category: 'Governance',
      status: 'Available in MVP',
      description: 'Inspect agent runs, tool invocations, token costs, and structured outputs. Enforce mandatory human approval gates for high-impact actions like publishing or pricing.',
      metricsLabel: 'Zero black-box autonomy; full audit trail',
    },
    {
      id: 'integrations',
      icon: Cpu,
      title: 'Commerce Integrations',
      category: 'Connectors',
      status: 'Available in MVP',
      description: 'Connect supported publishing platforms, supplier directories, and commerce systems via isolated modular adapters that protect credentials inside Windows Credential Vault.',
      metricsLabel: 'WordPress REST, Shopify Admin & CSV feeds',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Performance Analytics',
      category: 'Telemetry',
      status: 'Available in MVP',
      description: 'Bring workflow health and commercial performance metrics into one clean view. Decouple attributed revenue from true incremental profit to prevent vanity scaling.',
      metricsLabel: 'Incremental contribution vs gross volume',
    },
  ];

  return (
    <section id="modules" className="py-24 bg-[#F7F8FA] border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Desktop Workspace Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Eight integrated operational modules.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
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
                className="bg-white border border-[#E4E7EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#4F7DFF]/50 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Card Header with Icon & Status Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] flex items-center justify-center text-[#4F7DFF] group-hover:bg-[#4F7DFF]/10 group-hover:border-[#4F7DFF]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                        mod.status === 'Available in MVP'
                          ? 'bg-[#29C7B8]/10 text-[#0F766E] border border-[#29C7B8]/30'
                          : mod.status === 'In Development'
                          ? 'bg-[#4F7DFF]/10 text-[#4F7DFF] border border-[#4F7DFF]/30'
                          : 'bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]'
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
                      {mod.category}
                    </span>
                    <h3 className="text-base font-semibold text-[#111A2E] group-hover:text-[#4F7DFF] transition-colors">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#667085] leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                {/* Footer Metric Note */}
                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
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
