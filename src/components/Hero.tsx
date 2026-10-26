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
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-[#0B1020] text-white overflow-hidden">
      {/* Background Architectural Grid and Radial Light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E283D08_1px,transparent_1px),linear-gradient(to_bottom,#1E283D08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4F7DFF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#29C7B8]/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Copy Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111A2E] border border-[#1E283D] text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Global Commerce · Content · AI Workflows</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 font-sans">
            Discover opportunities. Create commerce.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DFF] via-[#7B9FFF] to-[#29C7B8]">
              Grow with SCRIBE.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 font-normal max-w-2xl mx-auto">
            SCRIBE brings product discovery, supplier research, content publishing, commerce workflows, and AI-assisted revenue operations into one Windows workspace—so your team can move from an opportunity to an informed next action without juggling disconnected tools.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-white bg-[#4F7DFF] hover:bg-[#3D6BEB] rounded-xl shadow-lg shadow-[#4F7DFF]/25 hover:shadow-[#4F7DFF]/40 transition-all active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF]"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#94A3B8] hover:text-white bg-[#111A2E] hover:bg-[#162038] border border-[#1E283D] hover:border-[#2D3C5C] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF]"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-[#667085]" />
            </button>
          </div>

          {/* Microcopy below CTAs */}
          <p className="text-xs text-[#667085] font-mono tracking-wide">
            Windows desktop app · Connected workflows · Human-controlled automation
          </p>
        </div>

        {/* Hero Product-Interface Mockup */}
        <div className="relative mx-auto max-w-6xl">
          {/* Subtle Ambient Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-[#4F7DFF]/20 via-[#1E283D]/40 to-transparent rounded-2xl blur-sm -z-10" />

          {/* Windows Desktop Shell Window */}
          <div className="bg-[#0F172A] border border-[#1E283D] rounded-xl shadow-2xl overflow-hidden font-sans">
            {/* Windows System Title Bar */}
            <div className="h-9 bg-[#0B1020] border-b border-[#1E283D] flex items-center justify-between px-3 select-none">
              <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                {/* Custom SCRIBE App Icon */}
                <div className="w-4 h-4 rounded bg-[#111A2E] border border-[#1E283D] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#4F7DFF]">S</span>
                </div>
                <span className="font-medium text-white/90">SCRIBE</span>
                <span className="text-[#475569]">—</span>
                <span className="text-[#64748B] text-[11px] font-mono truncate max-w-[200px] sm:max-w-none">
                  Workspace: North American Specialty Catalog · Project #SC-2026
                </span>
              </div>

              {/* Windows Window Controls */}
              <div className="flex items-center space-x-2 text-[#64748B]">
                <button className="p-1 hover:text-white hover:bg-white/10 rounded transition-colors" aria-label="Minimize">
                  <Minimize2 className="w-3 h-3" />
                </button>
                <button className="p-1 hover:text-white hover:bg-white/10 rounded transition-colors" aria-label="Maximize">
                  <Square className="w-3 h-3" />
                </button>
                <button className="p-1 hover:text-red-400 hover:bg-red-500/20 rounded transition-colors" aria-label="Close">
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* App Internal Header Bar */}
            <div className="h-12 bg-[#111A2E] border-b border-[#1E283D] flex items-center justify-between px-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B1020] border border-[#1E283D] text-[#94A3B8] font-mono text-[11px]">
                  <FolderOpen className="w-3.5 h-3.5 text-[#4F7DFF]" />
                  <span>Opportunity Pipeline</span>
                  <span className="text-[#475569]">/</span>
                  <span className="text-white">Active Evaluation</span>
                </div>

                <div className="hidden md:flex items-center gap-2 text-[11px] text-[#64748B]">
                  <span className="inline-flex items-center gap-1 text-[#29C7B8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29C7B8]"></span>
                    WP REST: Live
                  </span>
                  <span className="text-[#334155]">·</span>
                  <span>SQLite: Local Encrypted</span>
                </div>
              </div>

              {/* Search & Action Bar */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1020] border border-[#1E283D] text-[#64748B] text-[11px] font-mono">
                  <Search className="w-3 h-3" />
                  <span>Search opportunities (Ctrl+K)</span>
                </div>
                <div className="px-2 py-1 rounded bg-[#162038] border border-[#23314F] text-[11px] font-mono text-[#4F7DFF]">
                  14 tracked
                </div>
              </div>
            </div>

            {/* Main Application Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
              {/* App Left Navigation Sidebar */}
              <div className="hidden md:flex lg:col-span-2 bg-[#0B1020]/90 border-r border-[#1E283D] flex-col justify-between p-3">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] px-2 py-1">
                    Modules
                  </div>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-[#4F7DFF]/10 text-[#4F7DFF] font-medium text-xs border border-[#4F7DFF]/20 text-left">
                    <TrendingUp className="w-3.5 h-3.5 text-[#4F7DFF]" />
                    <span>Opportunities</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.04] text-xs transition-colors text-left">
                    <FileText className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>Content Studio</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.04] text-xs transition-colors text-left">
                    <Layers className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>Supplier Intelligence</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.04] text-xs transition-colors text-left">
                    <BarChart3 className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>Unit Economics</span>
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.04] text-xs transition-colors text-left">
                    <Cpu className="w-3.5 h-3.5 text-[#8B7CFF]" />
                    <span>Agent Control</span>
                  </button>
                </div>

                <div className="p-2.5 rounded-lg bg-[#111A2E] border border-[#1E283D] text-[11px] font-mono text-[#94A3B8]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#64748B]">Agent Engine</span>
                    <span className="text-[#29C7B8] font-sans">Active</span>
                  </div>
                  <div className="w-full bg-[#1E283D] h-1 rounded-full overflow-hidden">
                    <div className="bg-[#4F7DFF] h-full w-2/3"></div>
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-1">Ready for review</div>
                </div>
              </div>

              {/* Central Opportunity Pipeline Table */}
              <div className="lg:col-span-6 bg-[#0F172A] border-r border-[#1E283D] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                        Opportunity Pipeline
                      </h3>
                      <span className="px-1.5 py-0.5 rounded bg-[#162038] text-[10px] font-mono text-[#94A3B8]">
                        4 Active
                      </span>
                    </div>

                    <div className="text-[11px] text-[#64748B] font-mono">
                      Click row to inspect unit model
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
                          className={`p-3 rounded-lg border transition-all cursor-pointer text-left ${
                            isSelected
                              ? 'bg-[#162038] border-[#4F7DFF]/50 shadow-sm'
                              : 'bg-[#111A2E]/70 border-[#1E283D] hover:bg-[#141F36] hover:border-[#28385A]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-[#4F7DFF]">{opp.id}</span>
                                <span className="text-[10px] font-mono text-[#64748B]">·</span>
                                <span className="text-[11px] text-[#94A3B8]">{opp.category}</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-medium text-white mt-0.5 line-clamp-1">
                                {opp.name}
                              </h4>
                            </div>

                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                                opp.status === 'Published'
                                  ? 'bg-[#29C7B8]/10 text-[#29C7B8] border border-[#29C7B8]/30'
                                  : opp.status === 'Content Queued'
                                  ? 'bg-[#4F7DFF]/10 text-[#4F7DFF] border border-[#4F7DFF]/30'
                                  : 'bg-white/[0.06] text-[#94A3B8] border border-white/10'
                              }`}
                            >
                              {opp.status}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center justify-between text-[11px] pt-1.5 border-t border-[#1E283D]/80 text-[#94A3B8]">
                            <div className="flex items-center gap-1.5 text-[#64748B] text-[10px] font-mono">
                              <span>Source: {opp.sourceType}</span>
                              <span>·</span>
                              <span>{opp.lastChecked}</span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="font-mono text-white text-xs">
                                MSRP ${opp.msrp.toFixed(2)}
                              </span>
                              <span className="font-mono text-[#29C7B8] font-semibold text-xs">
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
                <div className="mt-3 pt-3 border-t border-[#1E283D] flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                  <span>Provenance: 100% verified sources</span>
                  <span className="text-[#29C7B8]">0 API rate issues</span>
                </div>
              </div>

              {/* Inspector Panel: Unit Economics & Agent Control */}
              <div className="lg:col-span-4 bg-[#0B1020]/95 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1E283D]">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Economics & Verification
                    </span>
                    <span className="text-[10px] font-mono text-[#4F7DFF]">
                      {selectedOpportunity.id}
                    </span>
                  </div>

                  {/* Selected Product Title */}
                  <div className="mb-3">
                    <h4 className="text-xs font-medium text-white mb-1">
                      {selectedOpportunity.name}
                    </h4>
                    <p className="text-[11px] text-[#94A3B8] font-mono">
                      Signal: {selectedOpportunity.demandSignal}
                    </p>
                  </div>

                  {/* Financial Breakdown Card */}
                  <div className="bg-[#111A2E] border border-[#1E283D] rounded-lg p-3 space-y-2 mb-3">
                    <div className="text-[10px] font-mono uppercase text-[#64748B] tracking-wider mb-1">
                      Unit Economics Model
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#94A3B8]">Target Retail (MSRP)</span>
                      <span className="font-mono text-white font-medium">
                        ${selectedOpportunity.msrp.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#94A3B8]">Supplier FOB Cost</span>
                      <span className="font-mono text-red-300">
                        -${selectedOpportunity.cogs.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#94A3B8]">Freight & Processing</span>
                      <span className="font-mono text-red-300">-$2.10</span>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-[#94A3B8]">Est. Platform & Ad CAC</span>
                      <span className="font-mono text-red-300">-$5.40</span>
                    </div>

                    <div className="pt-2 border-t border-[#1E283D] flex justify-between text-xs">
                      <span className="text-[#29C7B8] font-medium">Net Contribution</span>
                      <span className="font-mono text-[#29C7B8] font-bold">
                        ${(selectedOpportunity.msrp * (selectedOpportunity.netMargin / 100)).toFixed(2)}{' '}
                        ({selectedOpportunity.netMargin}%)
                      </span>
                    </div>
                  </div>

                  {/* Agent Human Approval Card */}
                  <div className="bg-[#141C30] border border-[#8B7CFF]/30 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#8B7CFF] font-medium mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Approval Gate: Content Draft</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-tight mb-2.5">
                      Agent generated 1,450-word editorial review targeting high-intent search query.
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={onOpenEarlyAccess}
                        className="flex-1 py-1.5 bg-[#4F7DFF] hover:bg-[#3D6BEB] text-white text-[11px] font-medium rounded transition-colors text-center"
                      >
                        Approve & Schedule
                      </button>
                      <button className="px-2.5 py-1.5 bg-[#1E283D] text-[#94A3B8] hover:text-white text-[11px] rounded transition-colors">
                        Inspect Diff
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Source Verification Badge */}
                <div className="pt-3 border-t border-[#1E283D] flex items-center justify-between text-[10px] text-[#64748B] font-mono">
                  <span>Confidence: {selectedOpportunity.confidenceScore}%</span>
                  <span className="text-[#94A3B8]">3 Verified Suppliers</span>
                </div>
              </div>
            </div>

            {/* Desktop Mockup Discreet Notice */}
            <div className="bg-[#0B1020] border-t border-[#1E283D] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
              <span>Illustrative product preview · SCRIBE Windows Client v0.9.4</span>
              <span>Windows 10/11 x64 · 0 telemetry leakage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
