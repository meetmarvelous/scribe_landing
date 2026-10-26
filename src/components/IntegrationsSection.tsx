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
    <section id="integrations" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Ecosystem Connectors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Connect the tools your commerce workflow depends on.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SCRIBE communicates through modular, decoupled adapters that isolate provider-specific rate limits and schema differences. All API keys remain encrypted inside your Windows OS Credential Vault.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
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
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                      item.status === 'Available'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : item.status === 'Beta'
                        ? 'bg-blue-50 text-blue-800 border border-blue-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>
              </div>

              {/* Technical Security & Protocol Badges */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] font-mono">
                <div className="flex justify-between text-slate-600">
                  <span>Protocol:</span>
                  <span className="text-slate-900 font-semibold">{item.protocol}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Auth Method:</span>
                  <span className="text-blue-700 font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-blue-600" />
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
