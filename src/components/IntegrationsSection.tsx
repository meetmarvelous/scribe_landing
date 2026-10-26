import { useState } from 'react';
import { INTEGRATIONS } from '../data/mockData';
import { Lock } from 'lucide-react';

export const IntegrationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Publishing', 'Sourcing & Data', 'Commerce & Feeds', 'AI Providers'];

  const filteredIntegrations =
    selectedCategory === 'All'
      ? INTEGRATIONS
      : INTEGRATIONS.filter((item) => item.category === selectedCategory);

  return (
    <section id="integrations" className="py-24 bg-[#F7F8FA] border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Ecosystem Connectors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Connect the tools your commerce workflow depends on.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            SCRIBE communicates through modular, decoupled adapters that isolate provider-specific rate limits and schema differences. All API keys remain encrypted inside your Windows OS Credential Vault.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-sans whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF] ${
                selectedCategory === cat
                  ? 'bg-[#111A2E] text-white shadow-sm'
                  : 'bg-white text-[#667085] hover:text-[#111A2E] border border-[#E4E7EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-[#E4E7EC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#4F7DFF]/50 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-semibold text-[#111A2E] group-hover:text-[#4F7DFF] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                      item.status === 'Available'
                        ? 'bg-[#29C7B8]/10 text-[#0F766E] border border-[#29C7B8]/30'
                        : item.status === 'Beta'
                        ? 'bg-[#4F7DFF]/10 text-[#4F7DFF] border border-[#4F7DFF]/30'
                        : 'bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-[#667085] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Technical Security & Protocol Badges */}
              <div className="pt-4 border-t border-[#F1F5F9] space-y-2 text-[11px] font-mono">
                <div className="flex justify-between text-[#64748B]">
                  <span>Protocol:</span>
                  <span className="text-[#344054] font-medium">{item.protocol}</span>
                </div>
                <div className="flex justify-between text-[#64748B]">
                  <span>Auth Method:</span>
                  <span className="text-[#4F7DFF] font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>{item.authMethod}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
