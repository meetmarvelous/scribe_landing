import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenEarlyAccess: () => void;
}

export const Footer = ({ onOpenEarlyAccess }: FooterProps) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1020] border-t border-[#1E283D] text-[#94A3B8] font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111A2E] border border-[#1E283D] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 7C6 5.89543 6.89543 5 8 5H15L18 8V11C18 12.1046 17.1046 13 16 13H10C8.89543 13 8 13.8954 8 15V17C8 18.1046 8.89543 19 10 19H17"
                    stroke="#4F7DFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 5V9H18" stroke="#29C7B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-wider">SCRIBE</span>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              SCRIBE is a Windows desktop workspace engineered to connect product discovery, supplier research, content publishing, commerce workflows, and controlled AI operations into one cohesive operating environment.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748B] pt-2">
              <span className="w-2 h-2 rounded-full bg-[#29C7B8]"></span>
              <span>Windows 10/11 Architecture · Version 0.9.4 Beta</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li>
                <button onClick={() => scrollTo('#overview')} className="hover:text-white transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#workflow')} className="hover:text-white transition-colors">
                  Connected Workflow
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#modules')} className="hover:text-white transition-colors">
                  Core Modules
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#showcase')} className="hover:text-white transition-colors">
                  Interface Tour
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#economics')} className="hover:text-white transition-colors">
                  Margin Sandbox
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Connectors */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li>
                <button onClick={() => scrollTo('#governance')} className="hover:text-white transition-colors">
                  Agent Safety Gates
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#integrations')} className="hover:text-white transition-colors">
                  Connectors Directory
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#roadmap')} className="hover:text-white transition-colors">
                  Development Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#faq')} className="hover:text-white transition-colors">
                  Technical FAQ
                </button>
              </li>
              <li>
                <button onClick={onOpenEarlyAccess} className="text-[#4F7DFF] hover:underline transition-colors">
                  Early Access Request
                </button>
              </li>
            </ul>
          </div>

          {/* Security & System */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#29C7B8]" />
                <span>Local SQLite Encryption</span>
              </li>
              <li>DPAPI Credential Storage</li>
              <li>Zero-Lock-in Data Export</li>
              <li>Air-gapped Mode Supported</li>
              <li>Privacy & Audit Logs</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-[#1E283D] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B] font-mono">
          <p>© 2026 SCRIBE Commerce Platform. All rights reserved.</p>
          <p className="text-center md:text-right max-w-lg">
            Notice: All metrics, connectors, and interface previews reflect actual release status or are labeled as early concepts. No sales or profit guarantees are implied.
          </p>
        </div>
      </div>
    </footer>
  );
};
