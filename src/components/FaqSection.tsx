import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F7F8FA] border-b border-[#E4E7EC] text-[#111A2E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4E7EC] text-[11px] font-mono text-[#344054] uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
            <span>Frequently Answered Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111A2E] leading-tight mb-5 font-sans">
            Technical & operational clarity.
          </h2>

          <p className="text-base text-[#667085] leading-relaxed">
            Straightforward answers regarding architecture, security, automation limits, and data ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E4E7EC] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 hover:bg-[#F7F8FA]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7DFF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#111A2E]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#667085] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#4F7DFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#667085] leading-relaxed border-t border-[#F1F5F9]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
