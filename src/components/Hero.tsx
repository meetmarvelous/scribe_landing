import { useState } from 'react';
import {
  ArrowRight,
  Search,
  Layers,
  FileText,
  TrendingUp,
  Cpu,
  BarChart3,
  ChevronRight,
  Minimize2,
  Square,
  X,
  FolderOpen
} from 'lucide-react';
import { MOCK_OPPORTUNITIES, type ProductOpportunity } from '../data/mockData';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onExplore: () => void;
}

export const Hero = ({ onOpenEarlyAccess, onExplore }: HeroProps) => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<ProductOpportunity>(MOCK_OPPORTUNITIES[0]);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] text-slate-900 overflow-hidden">
      {/* Background Architectural Mesh & Vibrant Ambient Light Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-16 left-1/4 w-[500px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[300px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-indigo-400/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Copy Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/90 border border-blue-200/80 text-xs font-mono text-blue-700 uppercase tracking-wider mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Global Commerce · Content · AI Workflows</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-sans">
            Discover opportunities. Create commerce.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600">
              Grow with SCRIBE.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal max-w-2xl mx-auto">
            SCRIBE brings product discovery, supplier research, content publishing, commerce workflows, and AI-assisted revenue operations into one Windows workspace—so your team can move from an opportunity to an informed next action without juggling disconnected tools.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 rounded-xl shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Microcopy below CTAs */}
          <p className="text-xs text-slate-500 font-mono tracking-wide">
            Windows desktop app · Connected workflows · Human-controlled automation
          </p>
        </div>

        {/* Hero Product-Interface Mockup in Light Theme */}
        <div className="relative mx-auto max-w-6xl">
          {/* Subtle Ambient Border Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-teal-500/20 rounded-2xl blur-lg -z-10" />

          {/* Windows Desktop Shell Window (Fluent Light Theme) */}
          <div className="bg-white border border-slate-300/80 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden font-sans">
            {/* Windows System Title Bar (Light) */}
            <div className="h-9 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between px-3 select-none">
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                {/* SCRIBE App Icon */}
                <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center shadow-xs">
                  <span className="text-[10px] font-bold text-white leading-none">S</span>
                </div>
                <span className="font-semibold text-slate-800">SCRIBE</span>
                <span className="text-slate-400">—</span>
                <span className="text-slate-500 text-[11px] font-mono truncate max-w-[200px] sm:max-w-none">
                  Workspace: North American Specialty Catalog · Project #SC-2026
                </span>
              </div>

              {/* Windows Window Controls */}
              <div className="flex items-center space-x-2 text-slate-500">
                <button className="p-1 hover:text-slate-800 hover:bg-slate-200/80 rounded transition-colors" aria-label="Minimize">
                  <Minimize2 className="w-3 h-3" />
                </button>
                <button className="p-1 hover:text-slate-800 hover:bg-slate-200/80 rounded transition-colors" aria-label="Maximize">
                  <Square className="w-3 h-3" />
                </button>
                <button className="p-1 hover:text-red-600 hover:bg-red-100 rounded transition-colors" aria-label="Close">
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* App Internal Header Bar (Light) */}
            <div className="h-12 bg-white border-b border-slate-200 flex items-center justify-between px-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px]">
                  <FolderOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Opportunity Pipeline</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-blue-600 font-semibold">Active Evaluation</span>
                </div>

                <div className="hidden md:flex items-center gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    WP REST: Live
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                    SQLite: Encrypted
                  </span>
                </div>
              </div>

              {/* Search & Action Bar */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 text-[11px] font-mono">
                  <Search className="w-3 h-3" />
                  <span>Search opportunities (Ctrl+K)</span>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold text-blue-700">
                  14 tracked
                </div>
              </div>
            </div>

            {/* Main Application Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* App Left Navigation Sidebar */}
              <div className="hidden md:flex lg:col-span-2 bg-slate-50/80 border-r border-slate-200 flex-col justify-between p-3">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1 font-semibold">
                    Modules
                  </div>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-blue-100/70 text-blue-700 font-semibold text-xs border border-blue-200/60 text-left">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                    <span>Opportunities</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 text-xs transition-colors text-left">
                    <FileText className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Content Studio</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 text-xs transition-colors text-left">
                    <Layers className="w-3.5 h-3.5 text-amber-500" />
                    <span>Suppliers</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 text-xs transition-colors text-left">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Unit Economics</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 text-xs transition-colors text-left">
                    <Cpu className="w-3.5 h-3.5 text-sky-600" />
                    <span>Agent Control</span>
                  </button>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs text-[11px] font-mono text-slate-600">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-500">Agent Engine</span>
                    <span className="text-emerald-600 font-bold font-sans">Active</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full w-2/3"></div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Ready for review</div>
                </div>
              </div>

              {/* Central Opportunity Pipeline Table */}
              <div className="lg:col-span-6 bg-white border-r border-slate-200 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Opportunity Pipeline
                      </h3>
                      <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-[10px] font-mono text-blue-700 font-medium">
                        4 Active
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono">
                      Click row to inspect model
                    </div>
                  </div>

                  {/* Opportunities Table */}
                  <div className="space-y-2">
                    {MOCK_OPPORTUNITIES.map((opp) => {
                      const isSelected = selectedOpportunity.id === opp.id;
                      return (
                        <div
                          key={opp.id}
                          onClick={() => setSelectedOpportunity(opp)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                            isSelected
                              ? 'bg-blue-50/60 border-blue-400 shadow-sm ring-1 ring-blue-400/20'
                              : 'bg-white border-slate-200 hover:bg-slate-50/70 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-semibold text-blue-600">{opp.id}</span>
                                <span className="text-slate-300">·</span>
                                <span className="text-[11px] text-slate-500 font-medium">{opp.category}</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 line-clamp-1">
                                {opp.name}
                              </h4>
                            </div>

                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                                opp.status === 'Published'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : opp.status === 'Content Queued'
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}
                            >
                              {opp.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center justify-between text-[11px] pt-1.5 border-t border-slate-100 text-slate-600">
                            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono">
                              <span>Source: {opp.sourceType}</span>
                              <span>·</span>
                              <span>{opp.lastChecked}</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="font-mono text-slate-700 text-xs font-medium">
                                MSRP ${opp.msrp.toFixed(2)}
                              </span>
                              <span className="font-mono text-emerald-700 font-bold text-xs bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                Margin +{opp.netMargin}%
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Provenance: 100% verified sources</span>
                  <span className="text-emerald-600 font-medium">0 API rate issues</span>
                </div>
              </div>

              {/* Inspector Panel: Unit Economics & Agent Control */}
              <div className="lg:col-span-4 bg-slate-50/70 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                      Economics & Verification
                    </span>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      {selectedOpportunity.id}
                    </span>
                  </div>

                  {/* Selected Product Title */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-slate-900 mb-0.5">
                      {selectedOpportunity.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Signal: {selectedOpportunity.demandSignal}
                    </p>
                  </div>

                  {/* Financial Breakdown Card (Light) */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-2 mb-3 shadow-xs">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider mb-1">
                      Unit Economics Model
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Target Retail (MSRP)</span>
                      <span className="font-mono text-slate-900 font-bold">
                        ${selectedOpportunity.msrp.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Supplier FOB Cost</span>
                      <span className="font-mono text-rose-600 font-medium">
                        -${selectedOpportunity.cogs.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Freight & Processing</span>
                      <span className="font-mono text-rose-600 font-medium">-$2.10</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600">Est. Platform & Ad CAC</span>
                      <span className="font-mono text-rose-600 font-medium">-$5.40</span>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex justify-between text-xs">
                      <span className="text-emerald-700 font-bold">Net Contribution</span>
                      <span className="font-mono text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded">
                        ${(selectedOpportunity.msrp * (selectedOpportunity.netMargin / 100)).toFixed(2)}{' '}
                        ({selectedOpportunity.netMargin}%)
                      </span>
                    </div>
                  </div>

                  {/* Agent Human Approval Card (Light) */}
                  <div className="bg-white border border-blue-200 rounded-xl p-3 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-blue-700 font-bold mb-1">
                      <Cpu className="w-3.5 h-3.5 text-blue-600" />
                      <span>Approval Gate: Content Draft</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight mb-2.5">
                      Agent generated 1,450-word editorial review targeting high-intent search query.
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={onOpenEarlyAccess}
                        className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold rounded-lg shadow-xs transition-colors text-center"
                      >
                        Approve & Schedule
                      </button>
                      <button className="px-2.5 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-[11px] font-medium rounded-lg transition-colors">
                        Inspect Diff
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Source Verification Badge */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Confidence: <strong className="text-slate-700">{selectedOpportunity.confidenceScore}%</strong></span>
                  <span className="text-blue-700 font-medium">3 Verified Suppliers</span>
                </div>
              </div>
            </div>

            {/* Desktop Mockup Discreet Notice */}
            <div className="bg-slate-100/90 border-t border-slate-200 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Illustrative product preview · SCRIBE Windows Client v0.9.4</span>
              <span className="text-emerald-700 font-medium">Windows 10/11 x64 · 0 telemetry leakage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
