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
    <section id="workflow" className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-xs font-mono text-teal-800 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <span>The Connected Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            From product signal to publish-ready opportunity.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Seven disciplined steps inside one desktop application. No fragile copy-pasting, disconnected spreadsheets, or unmonitored scripts.
          </p>
        </div>

        {/* 7-Step Horizontal Stepper */}
        <div className="mb-10 overflow-x-auto pb-4 pt-2">
          <div className="min-w-[800px] flex items-center justify-between relative">
            {/* Connecting Baseline */}
            <div className="absolute top-5 left-6 right-6 h-[2px] bg-slate-200 -z-0" />

            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = icons[idx];
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl p-2 cursor-pointer"
                >
                  {/* Step Node Circle */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 border ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30 scale-110'
                        : isPast
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-300 group-hover:border-slate-400 group-hover:bg-slate-50'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 text-white" /> : <Icon className="w-5 h-5" />}
                  </div>

                  {/* Step Name */}
                  <div className="mt-2 text-center">
                    <span
                      className={`block text-xs font-bold ${
                        isActive ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'
                      }`}
                    >
                      {stage.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono block">
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card in Vibrant Light Theme */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 text-slate-900">
          {/* Header of Detail Card */}
          <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-600 text-white font-bold">
                STAGE 0{currentStage.step} OF 07
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-wide">
                {currentStage.name} — {currentStage.subtitle}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{currentStage.actionLabel}</span>
            </div>
          </div>

          {/* Body of Detail Card */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description & System Logic */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="text-[11px] font-mono uppercase text-blue-800 font-bold tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>Workspace Orchestration</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {currentStage.systemAction}
                  </p>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 text-xs font-mono font-semibold rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === WORKFLOW_STAGES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-mono font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-500/20"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Data Execution Panel */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="text-slate-600 font-semibold flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Execution Snapshot</span>
                </span>
                <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Audit Policy: Enforced
                </span>
              </div>

              {/* Sample Input */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Step Input
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 shadow-xs">
                  {currentStage.sampleInput}
                </div>
              </div>

              {/* Sample Output */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Validated Output
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-blue-900 font-semibold shadow-xs">
                  {currentStage.sampleOutput}
                </div>
              </div>

              {/* Audit Proof Trail */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Cryptographic Provenance & Evidence Record
                </div>
                <div className="p-2.5 bg-emerald-50/90 border border-emerald-200 rounded-lg text-[11px] text-emerald-900 font-medium">
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
