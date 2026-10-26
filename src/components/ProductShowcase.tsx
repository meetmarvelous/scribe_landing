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
    <section id="showcase" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[250px] bg-blue-300/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[250px] bg-emerald-300/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Interactive Windows Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Inspect the interface before you install.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SCRIBE provides a high-density, native desktop environment engineered for speed, deep analytical focus, and traceable execution. Explore the five primary operational views.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-sans whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive UI Preview Canvas (Light Theme) */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60">
          {/* Top Window Bar */}
          <div className="h-10 bg-slate-100 border-b border-slate-200 px-4 flex items-center justify-between text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="ml-3 text-slate-900 font-bold">SCRIBE v0.9.4</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-600 font-medium">
                {activeTab === 'opportunity' && 'Opportunities / Active Pipeline'}
                {activeTab === 'content' && 'Content Studio / WordPress Integration'}
                {activeTab === 'supplier' && 'Sourcing / Verified Factory Directory'}
                {activeTab === 'agent' && 'Agent Control Centre / Human Approval Queue'}
                {activeTab === 'revenue' && 'Revenue & Contribution Economics'}
              </span>
            </div>

            <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline">
              SQLite Encryption: AES-256 Enabled
            </span>
          </div>

          {/* TAB 1: OPPORTUNITY WORKSPACE */}
          {activeTab === 'opportunity' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Evaluated Opportunities (Q4 Ingestion)</h4>
                  <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Deduplication: Active
                  </span>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Product Name & SKU</th>
                        <th className="p-3">Verified Source</th>
                        <th className="p-3">COGS / MSRP</th>
                        <th className="p-3">Net Margin</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3 text-slate-900 font-sans font-semibold">
                          AeroFold Dual-Pivot Laptop Stand
                          <span className="block font-mono text-[10px] text-blue-600 font-bold">SKU-AF-8921</span>
                        </td>
                        <td className="p-3">API Feed (Port 883)</td>
                        <td className="p-3 text-slate-900 font-semibold">$8.40 / $38.00</td>
                        <td className="p-3 text-emerald-700 font-bold">+46.8%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                            Draft Content
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3 text-slate-900 font-sans font-semibold">
                          Nordic Matte Ceramic Dripper
                          <span className="block font-mono text-[10px] text-blue-600 font-bold">SKU-ND-8924</span>
                        </td>
                        <td className="p-3">Verified 1688 Direct</td>
                        <td className="p-3 text-slate-900 font-semibold">$4.10 / $26.50</td>
                        <td className="p-3 text-emerald-700 font-bold">+53.2%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold cursor-pointer hover:bg-emerald-600 hover:text-white transition-colors">
                            Ready to Pub
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3 text-slate-900 font-sans font-semibold">
                          Grade 5 Titanium EDC Carabiner
                          <span className="block font-mono text-[10px] text-blue-600 font-bold">SKU-TC-8930</span>
                        </td>
                        <td className="p-3">Customs Manifest</td>
                        <td className="p-3 text-slate-900 font-semibold">$5.80 / $32.00</td>
                        <td className="p-3 text-emerald-700 font-bold">+49.5%</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-semibold">
                            Published
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Opportunity Sidebar Diagnostics */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                <div className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider">
                  Opportunity Telemetry
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Deduplication Index</span>
                    <span className="text-slate-900 font-mono font-bold">0 Duplicates found</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Supplier Verification</span>
                    <span className="text-emerald-700 font-mono font-bold">100% Validated</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Margin Confidence</span>
                    <span className="text-blue-700 font-mono font-bold">High (3.5% buffer)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-[11px] text-slate-700 leading-relaxed font-medium">
                  <strong className="text-blue-900 block mb-1">Traceability Guarantee:</strong>
                  Every opportunity retains cryptographic timestamps of origin and provider response payloads.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTENT STUDIO */}
          {activeTab === 'content' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold">
                      Markdown Editor
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      The 2026 Comprehensive Pour-Over Hardware Evaluation
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Target: WP Post #1042
                  </span>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-600 space-y-2 h-[260px] overflow-y-auto shadow-xs">
                  <div className="text-blue-600 font-bold">---</div>
                  <div>title: "Nordic Cast Matte Ceramic Dripper: Flow Rate Review"</div>
                  <div>category: "Specialty Coffee Gear"</div>
                  <div>verified_sku: "SKU-ND-8924"</div>
                  <div>cogs_fob: 4.10</div>
                  <div>retail_msrp: 26.50</div>
                  <div className="text-blue-600 font-bold">---</div>
                  <div className="text-slate-900 font-bold pt-2">## 1. Thermal Equilibrium in Ceramic Extraction</div>
                  <p className="text-slate-600">
                    In our temperature-decay trials, the 320g dense stoneware wall maintained slurry temperatures within 1.2°C of target brew temperature across a standard 3:30 extraction window...
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono uppercase text-emerald-700 font-bold tracking-wider">
                    WP REST API Connector
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Application Passwords</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Endpoint URL:</span>
                    <span className="font-mono text-slate-900 font-medium text-[11px] truncate max-w-[180px]">
                      https://editorial-store.internal
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sync State:</span>
                    <span className="font-mono text-emerald-700 font-bold">Draft Scheduled (09:00 EST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">SEO Schema:</span>
                    <span className="font-mono text-blue-700 font-bold">Article + Product JSON-LD</span>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 cursor-pointer">
                  <Send className="w-3.5 h-3.5" />
                  <span>Push Staging Update to WordPress</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SUPPLIER REVIEW */}
          {activeTab === 'supplier' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Chaozhou Jinxi Ceramics Co., Ltd.</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                    Verified Factory (SUP-771)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-400 block text-[10px] font-semibold">Location & Port</span>
                    <span className="text-slate-900 font-bold">Chaozhou, Guangdong (FOB Shenzhen)</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-400 block text-[10px] font-semibold">Minimum Order Quantity</span>
                    <span className="text-slate-900 font-bold">300 Units / Tier 1 Quote</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-400 block text-[10px] font-semibold">Lead Production Time</span>
                    <span className="text-slate-900 font-bold">18 Days + 14 Days Sea Freight</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-400 block text-[10px] font-semibold">Inspection Audit Status</span>
                    <span className="text-emerald-700 font-bold">Passed (ISO 9001:2015)</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 shadow-xs">
                  <span className="text-slate-900 font-bold block mb-1">Verification Checklist:</span>
                  Official business registration confirmed; export tariff code verified against harmonized schedule #6912.00.
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider block">
                  Quote History & Price Bands
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                    <span className="text-slate-600">300 - 999 units</span>
                    <span className="text-slate-900 font-bold">$4.10 / unit</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                    <span className="text-slate-600">1,000 - 4,999 units</span>
                    <span className="text-slate-900 font-bold">$3.65 / unit</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                    <span className="text-slate-600">5,000+ units (Custom mold)</span>
                    <span className="text-emerald-700 font-bold">$3.10 / unit</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AGENT CONTROL */}
          {activeTab === 'agent' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Live Agent Run Trace (#RUN-4902)</h4>
                  <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Engine: Model-Agnostic Adapter
                  </span>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl font-mono text-xs space-y-2 h-[260px] overflow-y-auto shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>[14:20:01] Workflow 'SEO Content Synthesis' initialized.</span>
                  </div>
                  <div className="text-slate-600">
                    [14:20:03] Tool invoked: `query_supplier_records` (Supplier: SUP-771) &rarr; 200 OK
                  </div>
                  <div className="text-slate-600">
                    [14:20:06] Tool invoked: `calculate_unit_margin` (FOB: 4.10, MSRP: 26.50) &rarr; 53.2%
                  </div>
                  <div className="text-slate-600">
                    [14:20:09] Structured output created: 1,450 words Markdown + Schema tags.
                  </div>
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 font-semibold">
                    [14:20:12] Approval Gate Triggered: High impact action `wp_dispatch_post` requires explicit operator sign-off. Pausing engine...
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-blue-200 rounded-xl p-5 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-blue-700 font-bold tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  <span>Mandatory Human Approval</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  The agent cannot alter public web surfaces or commit capital without human consent.
                </p>

                <div className="space-y-1.5 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-slate-400 font-semibold">Payload Diff:</div>
                  <div className="text-emerald-700 font-bold">+ POST /wp/v2/posts (ID: #1042)</div>
                  <div className="text-slate-600">Estimated Token Cost: $0.024</div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 cursor-pointer">
                    Confirm Approval
                  </button>
                  <button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors cursor-pointer">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: REVENUE ANALYTICS */}
          {activeTab === 'revenue' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/50">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Commercial Economics: Decoupled Telemetry</h4>
                  <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Policy: Profit Before Vanity
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-500 block text-[10px] font-semibold">Gross Attributed Volume</span>
                    <span className="text-slate-900 text-base font-extrabold">$18,450.00</span>
                    <span className="text-[10px] text-slate-500">Across 4 live posts</span>
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="text-slate-500 block text-[10px] font-semibold">Total Variable Costs</span>
                    <span className="text-rose-600 text-base font-extrabold">-$8,910.00</span>
                    <span className="text-[10px] text-slate-500">COGS, Freight, Returns</span>
                  </div>
                  <div className="p-3.5 bg-white border border-emerald-300 rounded-xl shadow-xs ring-1 ring-emerald-300/40">
                    <span className="text-emerald-700 block text-[10px] font-bold">Net Contribution Margin</span>
                    <span className="text-emerald-700 text-base font-extrabold">+$9,540.00</span>
                    <span className="text-[10px] text-emerald-700 font-bold">51.7% True Margin</span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed shadow-xs">
                  <strong className="text-slate-900 block mb-1">Analytical Transparency:</strong>
                  Unlike advertising channels that claim 100% of revenue touches, SCRIBE calculates marginal profit after all physical fulfillment costs and refund allowances have cleared.
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider block">
                  Channel Efficiency Status
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">WordPress Organic</span>
                    <span className="text-emerald-700 font-bold">ROAS 4.8x (Healthy)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Affiliate Outbound</span>
                    <span className="text-emerald-700 font-bold">ROAS 3.2x (Healthy)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">Paid Discovery Test</span>
                    <span className="text-amber-700 font-bold">ROAS 1.9x (Monitor)</span>
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
