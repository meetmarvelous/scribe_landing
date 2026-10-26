import { Monitor, ArrowRight, Check } from 'lucide-react';

interface WindowsFirstProps {
  onOpenEarlyAccess: () => void;
}

export const WindowsFirst = ({ onOpenEarlyAccess }: WindowsFirstProps) => {
  const specs = [
    { label: 'Supported OS', val: 'Windows 10 (2004+) & Windows 11 (64-bit)' },
    { label: 'Architecture', val: 'x86_64 / Native AMD64 / ARM64 via emulation' },
    { label: 'Memory Footprint', val: '4 GB RAM minimum (8 GB recommended for 10k+ SKUs)' },
    { label: 'Installer Footprint', val: '< 45 MB MSI / NSIS Signed Installer' },
    { label: 'Local Persistence', val: 'SQLite 3 with AES-256 local database encryption' },
    { label: 'Credential Security', val: 'Windows Credential Manager (DPAPI Vault)' },
  ];

  return (
    <section className="py-24 bg-[#0B1020] text-white border-b border-[#1E283D] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#4F7DFF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Desktop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#111A2E] border border-[#1E283D] text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DFF]"></span>
              <span>Desktop Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-sans">
              A dedicated workspace for Windows.
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              SCRIBE is engineered from the ground up as a native Windows desktop client using Tauri 2 and Rust. This delivers unmatched local data throughput, zero tab crashes, native OS credential security, and sub-10ms UI responsiveness for large SKU catalogs.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[#4F7DFF]/20 border border-[#4F7DFF]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#4F7DFF]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Local-First Persistence</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Your catalog, confidential supplier notes, and financial models remain on your drive in local encrypted SQLite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[#4F7DFF]/20 border border-[#4F7DFF]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#4F7DFF]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Windows Credential Protection</h4>
                  <p className="text-xs text-[#94A3B8]">
                    External API tokens and publishing passwords are encrypted using native Windows DPAPI, never exposed in plaintext configs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[#4F7DFF]/20 border border-[#4F7DFF]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#4F7DFF]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Low Memory & CPU Overhead</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Unlike heavy Electron applications that consume gigabytes of RAM, SCRIBE idles under 85MB of memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEarlyAccess}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#4F7DFF] hover:bg-[#3D6BEB] rounded-xl shadow-md transition-all"
              >
                <span>Request Windows Beta Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Specification Matrix */}
          <div className="lg:col-span-6">
            <div className="bg-[#111A2E] border border-[#1E283D] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E283D]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1020] border border-[#1E283D] flex items-center justify-center text-[#4F7DFF]">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">System Specification</h3>
                    <span className="text-[10px] font-mono text-[#94A3B8]">Baseline Target Requirements</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#29C7B8]/20 text-[#29C7B8] border border-[#29C7B8]/30">
                  Verified Compatible
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {specs.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#0B1020] border border-[#1E283D] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#94A3B8]">{item.label}</span>
                    <span className="text-white font-medium">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#162038] border border-[#23314F] rounded-xl text-[11px] font-mono text-[#94A3B8]">
                * Automated signed installers provided via Microsoft Authenticode certificates. Clean uninstallation guaranteed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
