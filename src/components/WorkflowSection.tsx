import { useState } from 'react';
import {
  Search,
  ShieldCheck,
  Calculator,
  FileEdit,
  UserCheck,
  Send,
  BarChart2,
  Check,
  ArrowRight,
  Terminal,
  Clock
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/mockData';

export const WorkflowSection = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = WORKFLOW_STAGES[activeStepIndex];

  const icons = [Search, ShieldCheck, Calculator, FileEdit, UserCheck, Send, BarChart2];

  return (
    <section id="workflow" className="py-24 bg-white border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29C7B8]"></span>
            <span>The Connected Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            From product signal to publish-ready opportunity.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Seven disciplined steps inside one desktop application. No fragile copy-pasting, disconnected spreadsheets, or unmonitored scripts.
          </p>
        </div>

        {/* 7-Step Horizontal Stepper on Desktop / Scrollable on Tablet */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="min-w-[800px] flex items-center justify-between relative">
            {/* Connecting Baseline */}
            <div className="absolute top-5 left-6 right-6 h-[2px] bg-[#E4E7EC] -z-0" />

            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = icons[idx];
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF] rounded-lg p-2"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-semibold transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#4F7DFF] text-white border-[#4F7DFF] shadow-md shadow-[#4F7DFF]/25 scale-110'
                        : isPast
                        ? 'bg-[#111A2E] text-[#29C7B8] border-[#111A2E]'
                        : 'bg-white text-[#667085] border-[#E4E7EC] group-hover:border-[#94A3B8]'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4 text-[#29C7B8]" /> : <Icon className="w-4 h-4" />}
                  </div>

                  {/* Step Name */}
                  <div className="mt-2 text-center">
                    <span
                      className={`block text-xs font-semibold ${
                        isActive ? 'text-[#4F7DFF]' : 'text-[#344054] group-hover:text-[#111A2E]'
                      }`}
                    >
                      {stage.name}
                    </span>
                    <span className="text-[10px] text-[#667085] font-mono block">
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card for Selected Stage */}
        <div className="bg-[#0B1020] border border-[#1E283D] rounded-2xl overflow-hidden shadow-xl text-white">
          {/* Header of Detail Card */}
          <div className="bg-[#111A2E] border-b border-[#1E283D] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#4F7DFF]/20 text-[#4F7DFF] border border-[#4F7DFF]/40">
                STAGE 0{currentStage.step} OF 07
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                {currentStage.name} — {currentStage.subtitle}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#29C7B8]"></span>
              <span>{currentStage.actionLabel}</span>
            </div>
          </div>

          {/* Body of Detail Card */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description & System Logic */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                <div className="bg-[#141C30] border border-[#1E283D] rounded-xl p-4 mb-6">
                  <div className="text-[11px] font-mono uppercase text-[#4F7DFF] tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Workspace Orchestration</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    {currentStage.systemAction}
                  </p>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1E283D]">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 text-xs font-mono rounded-lg bg-[#111A2E] border border-[#1E283D] text-[#94A3B8] hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === WORKFLOW_STAGES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                  className="px-3.5 py-2 text-xs font-mono rounded-lg bg-[#4F7DFF] text-white hover:bg-[#3D6BEB] disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Data Execution Panel */}
            <div className="lg:col-span-7 bg-[#0F172A] border border-[#1E283D] rounded-xl p-5 space-y-4 font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E283D] text-xs">
                <span className="text-[#64748B] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#4F7DFF]" />
                  <span>Execution Snapshot</span>
                </span>
                <span className="text-[#29C7B8] text-[11px]">Audit Policy: Enforced</span>
              </div>

              {/* Sample Input */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#64748B] mb-1">
                  Step Input
                </div>
                <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg text-xs text-[#94A3B8]">
                  {currentStage.sampleInput}
                </div>
              </div>

              {/* Sample Output */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#64748B] mb-1">
                  Validated Output
                </div>
                <div className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-lg text-xs text-white">
                  {currentStage.sampleOutput}
                </div>
              </div>

              {/* Audit Proof Trail */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#64748B] mb-1">
                  Cryptographic Provenance & Evidence Record
                </div>
                <div className="p-2.5 bg-[#111A2E]/80 border border-[#23314F] rounded-lg text-[11px] text-[#29C7B8]/90">
                  {currentStage.auditEvidence}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
