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
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[250px] bg-blue-300/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[200px] bg-emerald-300/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Desktop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Desktop Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight font-sans">
              A dedicated workspace for Windows.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              SCRIBE is engineered from the ground up as a native Windows desktop client using Tauri 2 and Rust. This delivers unmatched local data throughput, zero tab crashes, native OS credential security, and sub-10ms UI responsiveness for large SKU catalogs.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-600 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local-First Persistence</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Your catalog, confidential supplier notes, and financial models remain on your drive in local encrypted SQLite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Windows Credential Protection</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    External API tokens and publishing passwords are encrypted using native Windows DPAPI, never exposed in plaintext configs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Low Memory & CPU Overhead</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Unlike heavy Electron applications that consume gigabytes of RAM, SCRIBE idles under 85MB of memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEarlyAccess}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>Request Windows Beta Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Specification Matrix */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md shadow-slate-200/50">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">System Specification</h3>
                    <span className="text-[10px] font-mono text-slate-500">Baseline Target Requirements</span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Verified Compatible
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {specs.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-xs">
                    <span className="text-slate-600 font-medium">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-[11px] font-mono text-blue-800 font-medium">
                * Automated signed installers provided via Microsoft Authenticode certificates. Clean uninstallation guaranteed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
