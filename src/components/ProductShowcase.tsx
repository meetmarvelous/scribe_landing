import { useState } from 'react';
import {
  TrendingUp,
  FileText,
  Users,
  Cpu,
  BarChart3,
  Clock,
  ShieldAlert,
  Send
} from 'lucide-react';

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<
    'opportunity' | 'content' | 'supplier' | 'agent' | 'revenue'
  >('opportunity');

  const tabs = [
    { id: 'opportunity', label: 'Opportunity Workspace', icon: TrendingUp },
    { id: 'content', label: 'Content Studio', icon: FileText },
    { id: 'supplier', label: 'Supplier Review', icon: Users },
    { id: 'agent', label: 'Agent Control', icon: Cpu },
    { id: 'revenue', label: 'Revenue Analytics', icon: BarChart3 },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#0B1020] text-white border-b border-[#1E283D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[#4F7DFF]/08 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#29C7B8]/05 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#111A2E] border border-[#1E283D] text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Interactive Windows Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-5 font-sans">
            Inspect the interface before you install.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            SCRIBE provides a high-density, native desktop environment engineered for speed, deep analytical focus, and traceable execution. Explore the five primary operational views.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#1E283D]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium font-sans whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF] ${
                  isActive
                    ? 'bg-[#4F7DFF] text-white shadow-md shadow-[#4F7DFF]/25'
                    : 'bg-[#111A2E] text-[#94A3B8] hover:text-white hover:bg-[#162038] border border-[#1E283D]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive UI Preview Canvas */}
        <div className="bg-[#0F172A] border border-[#1E283D] rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Window Bar */}
          <div className="h-10 bg-[#0B1020] border-b border-[#1E283D] px-4 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-3 text-white font-medium">SCRIBE v0.9.4</span>
              <span className="text-[#64748B]">/</span>
              <span className="text-[#64748B]">
                {activeTab === 'opportunity' && 'Opportunities / Active Pipeline'}
                {activeTab === 'content' && 'Content Studio / WordPress Integration'}
                {activeTab === 'supplier' && 'Sourcing / Verified Factory Directory'}
                {activeTab === 'agent' && 'Agent Control Centre / Human Approval Queue'}
                {activeTab === 'revenue' && 'Revenue & Contribution Economics'}
              </span>
            </div>

            <span className="text-[11px] text-[#29C7B8] hidden sm:inline">
              SQLite Encryption: AES-256 Enabled
            </span>
          </div>

          {/* TAB 1: OPPORTUNITY WORKSPACE */}
          {activeTab === 'opportunity' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">Evaluated Opportunities (Q4 Ingestion)</h4>
                  <span className="text-xs font-mono text-[#94A3B8]">Deduplication: Active</span>
                </div>

                <div className="border border-[#1E283D] rounded-xl overflow-hidden bg-[#0B1020]">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#111A2E] text-[#94A3B8] border-b border-[#1E283D]">
                      <tr>
                        <th className="p-3">Product Name & SKU</th>
                        <th className="p-3">Verified Source</th>
                        <th className="p-3">COGS / MSRP</th>
                        <th className="p-3">Net Margin</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E283D] text-[#94A3B8]">
                      <tr className="hover:bg-[#141C30] transition-colors">
                        <td className="p-3 text-white font-sans font-medium">
                          AeroFold Dual-Pivot Laptop Stand
                          <span className="block font-mono text-[10px] text-[#4F7DFF]">SKU-AF-8921</span>
                        </td>
                        <td className="p-3">API Feed (Port 883)</td>
                        <td className="p-3 text-white">$8.40 / $38.00</td>
                        <td className="p-3 text-[#29C7B8] font-bold">+46.8%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded bg-[#4F7DFF]/20 text-[#4F7DFF] text-[10px] cursor-pointer">
                            Draft Content
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#141C30] transition-colors">
                        <td className="p-3 text-white font-sans font-medium">
                          Nordic Matte Ceramic Dripper
                          <span className="block font-mono text-[10px] text-[#4F7DFF]">SKU-ND-8924</span>
                        </td>
                        <td className="p-3">Verified 1688 Direct</td>
                        <td className="p-3 text-white">$4.10 / $26.50</td>
                        <td className="p-3 text-[#29C7B8] font-bold">+53.2%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded bg-[#29C7B8]/20 text-[#29C7B8] text-[10px] cursor-pointer">
                            Ready to Pub
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#141C30] transition-colors">
                        <td className="p-3 text-white font-sans font-medium">
                          Grade 5 Titanium EDC Carabiner
                          <span className="block font-mono text-[10px] text-[#4F7DFF]">SKU-TC-8930</span>
                        </td>
                        <td className="p-3">Customs Manifest</td>
                        <td className="p-3 text-white">$5.80 / $32.00</td>
                        <td className="p-3 text-[#29C7B8] font-bold">+49.5%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded bg-white/10 text-white text-[10px] cursor-pointer">
                            Published
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Opportunity Sidebar Diagnostics */}
              <div className="lg:col-span-4 bg-[#111A2E] border border-[#1E283D] rounded-xl p-5 space-y-4">
                <div className="text-xs font-mono uppercase text-[#4F7DFF] tracking-wider">
                  Opportunity Telemetry
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">Deduplication Index</span>
                    <span className="text-white font-mono">0 Duplicates found</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">Supplier Verification</span>
                    <span className="text-[#29C7B8] font-mono">100% Validated</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">Margin Confidence</span>
                    <span className="text-[#4F7DFF] font-mono">High (3.5% buffer)</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0B1020] border border-[#1E283D] text-[11px] text-[#94A3B8] leading-relaxed">
                  <strong className="text-white block mb-1">Traceability Guarantee:</strong>
                  Every opportunity retains cryptographic timestamps of origin and provider response payloads.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTENT STUDIO */}
          {activeTab === 'content' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#4F7DFF]/20 text-[#4F7DFF] font-mono text-[10px]">
                      Markdown Editor
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium text-white">
                      The 2026 Comprehensive Pour-Over Hardware Evaluation
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[#29C7B8]">Target: WordPress Post #1042</span>
                </div>

                <div className="p-4 bg-[#0B1020] border border-[#1E283D] rounded-xl font-mono text-xs text-[#94A3B8] space-y-2 h-[260px] overflow-y-auto">
                  <div className="text-[#4F7DFF]">---</div>
                  <div>title: "Nordic Cast Matte Ceramic Dripper: Laboratory Flow Rate & Heat Retention Review"</div>
                  <div>category: "Specialty Coffee Gear"</div>
                  <div>author_id: "editorial_lead_01"</div>
                  <div>verified_sku: "SKU-ND-8924"</div>
                  <div>cogs_fob: 4.10</div>
                  <div>retail_msrp: 26.50</div>
                  <div className="text-[#4F7DFF]">---</div>
                  <div className="text-white pt-2">## 1. Thermal Equilibrium in Ceramic Extraction</div>
                  <p className="text-[#94A3B8]">
                    In our temperature-decay trials, the 320g dense stoneware wall maintained slurry temperatures within 1.2°C of target brew temperature across a standard 3:30 extraction window...
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#111A2E] border border-[#1E283D] rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#1E283D]">
                  <span className="text-xs font-mono uppercase text-[#29C7B8] tracking-wider">
                    WP REST API Connector
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">Application Passwords</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Endpoint URL:</span>
                    <span className="font-mono text-white text-[11px] truncate max-w-[180px]">
                      https://editorial-store.internal
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">Sync State:</span>
                    <span className="font-mono text-[#29C7B8]">Draft Scheduled (09:00 EST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94A3B8]">SEO Schema:</span>
                    <span className="font-mono text-[#4F7DFF]">Article + Product JSON-LD</span>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-lg bg-[#4F7DFF] hover:bg-[#3D6BEB] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-3.5 h-3.5" />
                  <span>Push Staging Update to WordPress</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SUPPLIER REVIEW */}
          {activeTab === 'supplier' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">Chaozhou Jinxi Ceramics Co., Ltd.</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#29C7B8]/20 text-[#29C7B8] border border-[#29C7B8]/30">
                    Verified Factory (SUP-771)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Location & Port</span>
                    <span className="text-white font-medium">Chaozhou, Guangdong (FOB Shenzhen)</span>
                  </div>
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Minimum Order Quantity</span>
                    <span className="text-white font-medium">300 Units / Tier 1 Quote</span>
                  </div>
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Lead Production Time</span>
                    <span className="text-white font-medium">18 Days + 14 Days Sea Freight</span>
                  </div>
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Inspection Audit Status</span>
                    <span className="text-[#29C7B8] font-medium">Passed (ISO 9001:2015)</span>
                  </div>
                </div>

                <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg text-xs text-[#94A3B8]">
                  <span className="text-white font-medium block mb-1">Verification Checklist:</span>
                  Official business registration confirmed; export tariff code verified against harmonized schedule #6912.00.
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#111A2E] border border-[#1E283D] rounded-xl p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#4F7DFF] tracking-wider block">
                  Quote History & Price Bands
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#0B1020] border border-[#1E283D] flex justify-between">
                    <span className="text-[#94A3B8]">300 - 999 units</span>
                    <span className="text-white">$4.10 / unit</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#0B1020] border border-[#1E283D] flex justify-between">
                    <span className="text-[#94A3B8]">1,000 - 4,999 units</span>
                    <span className="text-white">$3.65 / unit</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#0B1020] border border-[#1E283D] flex justify-between">
                    <span className="text-[#94A3B8]">5,000+ units (Custom mold)</span>
                    <span className="text-[#29C7B8]">$3.10 / unit</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AGENT CONTROL */}
          {activeTab === 'agent' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">Live Agent Run Trace (#RUN-4902)</h4>
                  <span className="text-xs font-mono text-[#8B7CFF]">Engine: Model-Agnostic Adapter</span>
                </div>

                <div className="p-4 bg-[#0B1020] border border-[#1E283D] rounded-xl font-mono text-xs space-y-2 h-[260px] overflow-y-auto">
                  <div className="flex items-center gap-2 text-[#29C7B8]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>[14:20:01] Workflow 'SEO Content Synthesis' initialized.</span>
                  </div>
                  <div className="text-[#94A3B8]">
                    [14:20:03] Tool invoked: `query_supplier_records` (Supplier: SUP-771) &rarr; 200 OK
                  </div>
                  <div className="text-[#94A3B8]">
                    [14:20:06] Tool invoked: `calculate_unit_margin` (FOB: 4.10, MSRP: 26.50) &rarr; 53.2%
                  </div>
                  <div className="text-[#94A3B8]">
                    [14:20:09] Structured output created: 1,450 words Markdown + Schema tags.
                  </div>
                  <div className="p-2.5 bg-[#8B7CFF]/10 border border-[#8B7CFF]/40 rounded text-[#8B7CFF]">
                    [14:20:12] Approval Gate Triggered: High impact action `wp_dispatch_post` requires explicit operator sign-off. Pausing engine...
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#141C30] border border-[#8B7CFF]/40 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#8B7CFF] tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Mandatory Human Approval</span>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  The agent cannot alter public web surfaces or commit capital without human consent.
                </p>

                <div className="space-y-1.5 text-xs font-mono bg-[#0B1020] p-3 rounded-lg border border-[#1E283D]">
                  <div className="text-[#64748B]">Payload Diff:</div>
                  <div className="text-[#29C7B8]">+ POST /wp/v2/posts (ID: #1042)</div>
                  <div className="text-[#94A3B8]">Estimated Token Cost: $0.024</div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-[#4F7DFF] text-white text-xs font-medium hover:bg-[#3D6BEB] transition-colors">
                    Confirm Approval
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-[#1E283D] text-[#94A3B8] hover:text-white text-xs font-medium transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: REVENUE ANALYTICS */}
          {activeTab === 'revenue' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">Commercial Economics: Decoupled Telemetry</h4>
                  <span className="text-xs font-mono text-[#29C7B8]">Policy: Profit Before Vanity</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Gross Attributed Volume</span>
                    <span className="text-white text-base font-bold">$18,450.00</span>
                    <span className="text-[10px] text-[#94A3B8]">Across 4 live posts</span>
                  </div>
                  <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg">
                    <span className="text-[#64748B] block text-[10px]">Total Variable Costs</span>
                    <span className="text-red-300 text-base font-bold">-$8,910.00</span>
                    <span className="text-[10px] text-[#94A3B8]">COGS, Freight, Returns</span>
                  </div>
                  <div className="p-3 bg-[#0B1020] border border-[#29C7B8]/40 rounded-lg">
                    <span className="text-[#29C7B8] block text-[10px]">Net Contribution Margin</span>
                    <span className="text-[#29C7B8] text-base font-bold">+$9,540.00</span>
                    <span className="text-[10px] text-[#29C7B8]">51.7% True Margin</span>
                  </div>
                </div>

                <div className="p-4 bg-[#0B1020] border border-[#1E283D] rounded-xl text-xs text-[#94A3B8] leading-relaxed">
                  <strong className="text-white block mb-1">Analytical Transparency:</strong>
                  Unlike advertising channels that claim 100% of revenue touches, SCRIBE calculates marginal profit after all physical fulfillment costs and refund allowances have cleared.
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#111A2E] border border-[#1E283D] rounded-xl p-5 space-y-3">
                <span className="text-xs font-mono uppercase text-[#4F7DFF] tracking-wider block">
                  Channel Efficiency Status
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">WordPress Organic</span>
                    <span className="text-[#29C7B8]">ROAS 4.8x (Healthy)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">Affiliate Outbound</span>
                    <span className="text-[#29C7B8]">ROAS 3.2x (Healthy)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#1E283D]">
                    <span className="text-[#94A3B8]">Paid Discovery Test</span>
                    <span className="text-yellow-400">ROAS 1.9x (Monitor)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
