import { useState } from 'react';
import {
  ShieldCheck,
  Eye,
  KeyRound,
  CheckCircle2,
  XCircle,
  Clock,
  Terminal,
  RotateCcw
} from 'lucide-react';

export const AgentGovernance = () => {
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const principles = [
    {
      icon: Eye,
      title: 'Visible Activity',
      desc: 'Inspect deterministic run logs, parameters, token expenses, execution duration, and intermediate tool responses at any point in the pipeline.',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: KeyRound,
      title: 'Defined Tool Permissions',
      desc: 'Lock agent capabilities via scoped security profiles. Agents can never invoke arbitrary shell commands or access undisclosed network addresses.',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      icon: ShieldCheck,
      title: 'Human Approval Gates',
      desc: 'Consequential actions—including live CMS publishing, price alterations, supplier orders, and ad budget allocations—require explicit operator consent.',
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
  ];

  return (
    <section id="governance" className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Principles & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Controlled Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
                Automation you can inspect and control.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                SCRIBE is designed to coordinate specialised workflows while keeping the operator in control of important decisions. Review the evidence, inspect what an agent did, and set approval rules for consequential actions.
              </p>
            </div>

            {/* 3 Principles */}
            <div className="space-y-4">
              {principles.map((pr) => {
                const Icon = pr.icon;
                return (
                  <div
                    key={pr.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 shadow-xs ${pr.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {pr.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive Approval Gate Simulator (Light Theme) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 text-slate-900">
              {/* Simulator Header */}
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-900 font-bold">Policy Engine: Action Gate #GATE-881</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                  Windows Local Isolation
                </span>
              </div>

              {/* Action Details */}
              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
                      High Impact Operation Paused
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Publish 12 Enriched SKU Records to WordPress
                    </h4>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 font-mono text-[11px] font-bold shrink-0">
                    Risk Tier: Consequential
                  </span>
                </div>

                {/* Audit Diff Payload Preview */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-slate-500 text-[11px] pb-1 border-b border-slate-200 flex justify-between font-medium">
                    <span>Target Endpoint: /wp-json/wp/v2/posts</span>
                    <span className="text-blue-700 font-bold">Tokens: 3,420 ($0.034)</span>
                  </div>
                  <div className="text-emerald-700 font-bold text-[11px]">
                    + Action: Batch Create & Schedule
                  </div>
                  <div className="text-slate-700 text-[11px] font-medium">
                    + Target Sourced SKUs: SKU-AF-8921, SKU-ND-8924, SKU-TC-8930...
                  </div>
                  <div className="text-slate-700 text-[11px] font-medium">
                    + Supplier Proof: Verified FOB Quotes Attached
                  </div>
                </div>

                {/* Interactive Status Display */}
                {approvalStatus === 'pending' && (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Engine paused awaiting explicit operator authorization:</span>
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setApprovalStatus('approved')}
                        className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Authorize & Dispatch</span>
                      </button>

                      <button
                        onClick={() => setApprovalStatus('rejected')}
                        className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] border border-slate-200 cursor-pointer"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject Action</span>
                      </button>
                    </div>
                  </div>
                )}

                {approvalStatus === 'approved' && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Action Authorized by Operator</span>
                      </div>
                      <button
                        onClick={() => setApprovalStatus('pending')}
                        className="text-[11px] font-mono font-bold text-slate-600 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Gate</span>
                      </button>
                    </div>
                    <p className="text-xs text-emerald-900 font-mono">
                      Cryptographic audit hash #AUD-9912 generated. 12 posts pushed to WordPress staging queue.
                    </p>
                  </div>
                )}

                {approvalStatus === 'rejected' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-rose-700">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Action Blocked & Terminated</span>
                      </div>
                      <button
                        onClick={() => setApprovalStatus('pending')}
                        className="text-[11px] font-mono font-bold text-slate-600 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Gate</span>
                      </button>
                    </div>
                    <p className="text-xs text-rose-800 font-mono">
                      Operation halted without external API communication. Incident logged to SQLite audit table.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Notice */}
              <div className="bg-slate-50 border-t border-slate-200 px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>Enforced at Windows OS boundary</span>
                <span className="text-emerald-700 font-bold">Zero telemetry sent to model vendor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
