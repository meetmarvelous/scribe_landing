import { useState, useEffect, type FormEvent } from 'react';
import { X, ArrowRight, CheckCircle2, Monitor } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('E-commerce Operator');
  const [catalogSize, setCatalogSize] = useState('500 - 5,000 SKUs');
  const [channel, setChannel] = useState('WordPress / WooCommerce');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0B1020] border border-[#1E283D] rounded-2xl shadow-2xl overflow-hidden text-white font-sans"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="bg-[#111A2E] border-b border-[#1E283D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#162038] border border-[#23314F] flex items-center justify-center text-[#4F7DFF]">
              <Monitor className="w-3.5 h-3.5" />
            </div>
            <h3 id="modal-title" className="text-sm font-semibold text-white">
              Request Windows Beta Access
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Join our private beta cohort for the SCRIBE Windows Desktop workspace. We evaluate applications to match relevant commerce workflows with current connector stages.
              </p>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-3.5 py-2.5 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#4F7DFF] focus:ring-1 focus:ring-[#4F7DFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@mercercommerce.com"
                  className="w-full px-3.5 py-2.5 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#4F7DFF] focus:ring-1 focus:ring-[#4F7DFF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono">
                    Primary Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs text-white focus:outline-none focus:border-[#4F7DFF]"
                  >
                    <option>E-commerce Operator</option>
                    <option>Editorial Commerce Publisher</option>
                    <option>Product Sourcing Lead</option>
                    <option>Brand DTC Founder</option>
                    <option>Agency / Consultant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono">
                    Current Catalog Size
                  </label>
                  <select
                    value={catalogSize}
                    onChange={(e) => setCatalogSize(e.target.value)}
                    className="w-full px-3 py-2 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs text-white focus:outline-none focus:border-[#4F7DFF]"
                  >
                    <option>&lt; 500 SKUs</option>
                    <option>500 - 5,000 SKUs</option>
                    <option>5,000 - 25,000 SKUs</option>
                    <option>25,000+ SKUs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono">
                  Primary Publishing Destination
                </label>
                <select
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="w-full px-3 py-2 bg-[#111A2E] border border-[#1E283D] rounded-xl text-xs text-white focus:outline-none focus:border-[#4F7DFF]"
                >
                  <option>WordPress / Pressable (REST API)</option>
                  <option>Shopify Admin API</option>
                  <option>WooCommerce</option>
                  <option>Custom Headless CMS</option>
                  <option>CSV Feeds Only</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#4F7DFF] hover:bg-[#3D6BEB] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4F7DFF]/25 active:scale-[0.99]"
                >
                  <span>Submit Early Access Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-[#64748B] font-mono text-center">
                Your email is used only for private beta onboarding and Windows release notification.
              </p>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#29C7B8]/20 border border-[#29C7B8]/40 flex items-center justify-center mx-auto text-[#29C7B8]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Application Received</h4>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. We have logged your request for the <strong className="text-white">{channel}</strong> cohort. You will receive private beta release credentials via <span className="text-[#4F7DFF]">{email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#111A2E] border border-[#1E283D] hover:bg-[#162038] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
