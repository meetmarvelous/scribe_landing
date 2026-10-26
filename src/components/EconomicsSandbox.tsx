import { useState } from 'react';

export const EconomicsSandbox = () => {
  const [msrp, setMsrp] = useState<number>(36.00);
  const [fob, setFob] = useState<number>(6.50);
  const [freight, setFreight] = useState<number>(2.20);
  const [feeRate, setFeeRate] = useState<number>(12); // percent
  const [targetCac, setTargetCac] = useState<number>(7.00);
  const [returnsRate, setReturnsRate] = useState<number>(4); // percent

  // Computations
  const platformFee = msrp * (feeRate / 100);
  const returnAllowance = msrp * (returnsRate / 100);
  const totalVariableCosts = fob + freight + platformFee + targetCac + returnAllowance;
  const netContribution = msrp - totalVariableCosts;
  const netContributionPercent = ((netContribution / msrp) * 100);
  const breakEvenRoas = targetCac > 0 ? (msrp / targetCac) : 0;

  const isHealthy = netContributionPercent >= 40;
  const isModerate = netContributionPercent >= 20 && netContributionPercent < 40;

  return (
    <section id="economics" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 uppercase tracking-wider mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Commercial Realism</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5 font-sans">
            Measure the economics behind the activity.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Revenue figures mean nothing if variable fulfillment and acquisition costs wipe out the margin. Test SCRIBE’s contribution modeling below.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                  Variable Cost Inputs
                </h3>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Currency: USD ($)
                </span>
              </div>

              {/* Slider 1: Target MSRP */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Target Retail Price (MSRP)</span>
                  <span className="font-mono text-blue-700 font-bold text-sm">${msrp.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="1"
                  value={msrp}
                  onChange={(e) => setMsrp(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Slider 2: Supplier FOB */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Supplier FOB / Factory Unit Cost</span>
                  <span className="font-mono text-slate-900 font-bold">${fob.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="0.5"
                  value={fob}
                  onChange={(e) => setFob(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Slider 3: Sea/Air Freight */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Estimated Freight, Duty & Customs</span>
                  <span className="font-mono text-slate-900 font-bold">${freight.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.1"
                  value={freight}
                  onChange={(e) => setFreight(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Slider 4: Marketing / CAC Allowance */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-700">Estimated Customer Acquisition Cost (CAC)</span>
                  <span className="font-mono text-slate-900 font-bold">${targetCac.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  step="0.5"
                  value={targetCac}
                  onChange={(e) => setTargetCac(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* Quick Options */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600 font-medium text-[11px]">Platform & Fees</span>
                    <span className="font-mono font-bold text-slate-900">{feeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={feeRate}
                    onChange={(e) => setFeeRate(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-slate-500 mt-1 block">(${platformFee.toFixed(2)} / unit)</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-600 font-medium text-[11px]">Returns Buffer</span>
                    <span className="font-mono font-bold text-slate-900">{returnsRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={returnsRate}
                    onChange={(e) => setReturnsRate(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-slate-500 mt-1 block">(${returnAllowance.toFixed(2)} / unit)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Card in Vibrant Light Theme */}
            <div className="lg:col-span-6 bg-gradient-to-br from-blue-50/70 via-teal-50/50 to-slate-50 text-slate-900 rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-blue-200/80 shadow-md shadow-blue-500/5">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-blue-200/60 mb-5">
                  <span className="text-xs font-mono uppercase text-blue-800 font-bold tracking-wider">
                    Model Calculation Result
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-md font-bold ${
                      isHealthy
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : isModerate
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {isHealthy ? 'High Contribution' : isModerate ? 'Moderate Margin' : 'Thin / Diluted Margin'}
                  </span>
                </div>

                {/* Primary Contribution Stat */}
                <div className="mb-6 bg-white p-4 rounded-xl border border-blue-200/70 shadow-xs">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Net Unit Contribution</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">
                      ${netContribution.toFixed(2)}
                    </span>
                    <span className="text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      +{netContributionPercent.toFixed(1)}% of MSRP
                    </span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2.5 text-xs font-mono border-t border-blue-200/60 pt-4">
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Total Landed COGS (FOB + Freight):</span>
                    <span className="text-slate-900 font-bold">${(fob + freight).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Operating & Platform Surcharges:</span>
                    <span className="text-slate-900 font-bold">${(platformFee + returnAllowance).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Allocated Acquisition Spend:</span>
                    <span className="text-slate-900 font-bold">${targetCac.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-700 pt-2 border-t border-blue-200/60">
                    <span className="text-blue-700 font-bold">Break-Even Minimum ROAS:</span>
                    <span className="text-blue-700 font-extrabold bg-blue-100/70 px-2 py-0.5 rounded border border-blue-300">{breakEvenRoas.toFixed(2)}x</span>
                  </div>
                </div>
              </div>

              {/* Commercial Rule Note */}
              <div className="mt-6 pt-4 border-t border-blue-200/60 text-[11px] text-slate-500 font-mono leading-relaxed">
                * Models adhere to GAAP contribution margin standards. All variable costs are deducted before projecting campaign scalability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
