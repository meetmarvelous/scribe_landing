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

export const AgentGovernance: React.FC = () => {
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  const principles = [
    {
      icon: Eye,
      title: 'Visible Activity',
      desc: 'Inspect deterministic run logs, parameters, token expenses, execution duration, and intermediate tool responses at any point in the pipeline.',
    },
    {
      icon: KeyRound,
      title: 'Defined Tool Permissions',
      desc: 'Lock agent capabilities via scoped security profiles. Agents can never invoke arbitrary shell commands or access undisclosed network addresses.',
    },
    {
      icon: ShieldCheck,
      title: 'Human Approval Gates',
      desc: 'Consequential actions—including live CMS publishing, price alterations, supplier orders, and ad budget allocations—require explicit operator consent.',
    },
  ];

  return (
    <section id="governance" className="py-24 bg-white border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Principles & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF]"></span>
                <span>Controlled Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
                Automation you can inspect and control.
              </h2>

              <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
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
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F8FA] border border-[#E4E7EC] hover:border-[#4F7DFF]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E7EC] flex items-center justify-center shrink-0 text-[#4F7DFF] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111A2E] mb-1">
                        {pr.title}
                      </h3>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive Approval Gate Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B1020] border border-[#1E283D] rounded-2xl overflow-hidden shadow-2xl text-white">
              {/* Simulator Header */}
              <div className="bg-[#111A2E] border-b border-[#1E283D] px-5 py-3.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#8B7CFF]" />
                  <span className="text-white font-medium">Policy Engine: Action Gate #GATE-881</span>
                </div>
                <span className="text-[10px] text-[#94A3B8]">Windows Local Isolation</span>
              </div>

              {/* Action Details */}
              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B7CFF] block mb-1">
                      High Impact Operation Paused
                    </span>
                    <h4 className="text-base font-semibold text-white">
                      Publish 12 Enriched SKU Records to WordPress
                    </h4>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] shrink-0">
                    Risk Tier: Consequential
                  </span>
                </div>

                {/* Audit Diff Payload Preview */}
                <div className="bg-[#0F172A] border border-[#1E283D] rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-[#64748B] text-[11px] pb-1 border-b border-[#1E283D] flex justify-between">
                    <span>Target Endpoint: /wp-json/wp/v2/posts</span>
                    <span>Tokens: 3,420 ($0.034)</span>
                  </div>
                  <div className="text-[#29C7B8] text-[11px]">
                    + Action: Batch Create & Schedule
                  </div>
                  <div className="text-[#94A3B8] text-[11px]">
                    + Target Sourced SKUs: SKU-AF-8921, SKU-ND-8924, SKU-TC-8930...
                  </div>
                  <div className="text-[#94A3B8] text-[11px]">
                    + Supplier Proof: Verified FOB Quotes Attached
                  </div>
                </div>

                {/* Interactive Status Display */}
                {approvalStatus === 'pending' && (
                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-[#94A3B8] flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Engine paused awaiting explicit operator authorization:</span>
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setApprovalStatus('approved')}
                        className="flex-1 py-2.5 px-4 bg-[#4F7DFF] hover:bg-[#3D6BEB] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4F7DFF]/20 active:scale-[0.98]"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Authorize & Dispatch</span>
                      </button>

                      <button
                        onClick={() => setApprovalStatus('rejected')}
                        className="py-2.5 px-4 bg-[#1E283D] hover:bg-[#28385A] text-[#94A3B8] hover:text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject Action</span>
                      </button>
                    </div>
                  </div>
                )}

                {approvalStatus === 'approved' && (
                  <div className="p-4 rounded-xl bg-[#29C7B8]/10 border border-[#29C7B8]/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#29C7B8]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Action Authorized by Operator</span>
                      </div>
                      <button
                        onClick={() => setApprovalStatus('pending')}
                        className="text-[11px] font-mono text-[#94A3B8] hover:text-white flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Gate</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      Cryptographic audit hash #AUD-9912 generated. 12 posts pushed to WordPress staging queue.
                    </p>
                  </div>
                )}

                {approvalStatus === 'rejected' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                        <XCircle className="w-4 h-4" />
                        <span>Action Blocked & Terminated</span>
                      </div>
                      <button
                        onClick={() => setApprovalStatus('pending')}
                        className="text-[11px] font-mono text-[#94A3B8] hover:text-white flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset Gate</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-mono">
                      Operation halted without external API communication. Incident logged to SQLite audit table.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Notice */}
              <div className="bg-[#111A2E] border-t border-[#1E283D] px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>Enforced at Windows OS boundary</span>
                <span>Zero telemetry sent to model vendor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
