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
    <section id="economics" className="py-24 bg-[#F7F8FA] border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29C7B8]"></span>
            <span>Commercial Realism</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Measure the economics behind the activity.
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Revenue figures mean nothing if variable fulfillment and acquisition costs wipe out the margin. Test SCRIBE’s contribution modeling below.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div className="bg-white border border-[#E4E7EC] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4E7EC]">
                <h3 className="text-sm font-semibold text-[#111A2E] uppercase font-mono tracking-wider">
                  Variable Cost Inputs
                </h3>
                <span className="text-xs font-mono text-[#667085]">Currency: USD ($)</span>
              </div>

              {/* Slider 1: Target MSRP */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#344054]">Target Retail Price (MSRP)</span>
                  <span className="font-mono text-[#111A2E] font-bold">${msrp.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="1"
                  value={msrp}
                  onChange={(e) => setMsrp(parseFloat(e.target.value))}
                  className="w-full accent-[#4F7DFF] cursor-pointer"
                />
              </div>

              {/* Slider 2: Supplier FOB */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#344054]">Supplier FOB / Factory Unit Cost</span>
                  <span className="font-mono text-[#111A2E] font-bold">${fob.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="0.5"
                  value={fob}
                  onChange={(e) => setFob(parseFloat(e.target.value))}
                  className="w-full accent-[#4F7DFF] cursor-pointer"
                />
              </div>

              {/* Slider 3: Sea/Air Freight */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#344054]">Estimated Freight, Duty & Customs</span>
                  <span className="font-mono text-[#111A2E] font-bold">${freight.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.1"
                  value={freight}
                  onChange={(e) => setFreight(parseFloat(e.target.value))}
                  className="w-full accent-[#4F7DFF] cursor-pointer"
                />
              </div>

              {/* Slider 4: Marketing / CAC Allowance */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-[#344054]">Estimated Customer Acquisition Cost (CAC)</span>
                  <span className="font-mono text-[#111A2E] font-bold">${targetCac.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  step="0.5"
                  value={targetCac}
                  onChange={(e) => setTargetCac(parseFloat(e.target.value))}
                  className="w-full accent-[#4F7DFF] cursor-pointer"
                />
              </div>

              {/* Quick Options */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#F7F8FA] border border-[#E4E7EC] rounded-xl text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#667085] text-[11px]">Platform & Fees</span>
                    <span className="font-mono font-bold text-[#111A2E]">{feeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={feeRate}
                    onChange={(e) => setFeeRate(parseFloat(e.target.value))}
                    className="w-full accent-[#4F7DFF] cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-[#667085] mt-1 block">(${platformFee.toFixed(2)} / unit)</span>
                </div>
                <div className="p-3 bg-[#F7F8FA] border border-[#E4E7EC] rounded-xl text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#667085] text-[11px]">Returns Buffer</span>
                    <span className="font-mono font-bold text-[#111A2E]">{returnsRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={returnsRate}
                    onChange={(e) => setReturnsRate(parseFloat(e.target.value))}
                    className="w-full accent-[#4F7DFF] cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-[#667085] mt-1 block">(${returnAllowance.toFixed(2)} / unit)</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-6 bg-[#0B1020] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-[#1E283D]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1E283D] mb-5">
                  <span className="text-xs font-mono uppercase text-[#94A3B8] tracking-wider">
                    Model Calculation Result
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded font-semibold ${
                      isHealthy
                        ? 'bg-[#29C7B8]/20 text-[#29C7B8] border border-[#29C7B8]/40'
                        : isModerate
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                        : 'bg-red-500/20 text-red-400 border border-red-500/40'
                    }`}
                  >
                    {isHealthy ? 'High Contribution' : isModerate ? 'Moderate Margin' : 'Thin / Diluted Margin'}
                  </span>
                </div>

                {/* Primary Contribution Stat */}
                <div className="mb-6">
                  <span className="text-xs text-[#94A3B8] block mb-1">Net Unit Contribution</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-[#29C7B8]">
                      ${netContribution.toFixed(2)}
                    </span>
                    <span className="text-sm font-mono text-[#94A3B8]">
                      ({netContributionPercent.toFixed(1)}% of MSRP)
                    </span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-2 text-xs font-mono border-t border-[#1E283D] pt-4">
                  <div className="flex justify-between text-[#94A3B8]">
                    <span>Total Landed COGS (FOB + Freight):</span>
                    <span className="text-white">${(fob + freight).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#94A3B8]">
                    <span>Operating & Platform Surcharges:</span>
                    <span className="text-white">${(platformFee + returnAllowance).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#94A3B8]">
                    <span>Allocated Acquisition Spend:</span>
                    <span className="text-white">${targetCac.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#94A3B8] pt-2 border-t border-[#1E283D]">
                    <span className="text-[#4F7DFF] font-semibold">Break-Even Minimum ROAS:</span>
                    <span className="text-[#4F7DFF] font-bold">{breakEvenRoas.toFixed(2)}x</span>
                  </div>
                </div>
              </div>

              {/* Commercial Rule Note */}
              <div className="mt-6 pt-4 border-t border-[#1E283D] text-[11px] text-[#64748B] font-mono leading-relaxed">
                * Models adhere to GAAP contribution margin standards. All variable costs are deducted before projecting campaign scalability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
