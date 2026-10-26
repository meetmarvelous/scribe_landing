import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { ProblemSection } from './components/ProblemSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FeatureModules } from './components/FeatureModules';
import { ProductShowcase } from './components/ProductShowcase';
import { AgentGovernance } from './components/AgentGovernance';
import { EconomicsSandbox } from './components/EconomicsSandbox';
import { UseCases } from './components/UseCases';
import { IntegrationsSection } from './components/IntegrationsSection';
import { WindowsFirst } from './components/WindowsFirst';
import { RoadmapSection } from './components/RoadmapSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';

export function App() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  const handleOpenEarlyAccess = () => {
    setIsEarlyAccessOpen(true);
  };

  const handleCloseEarlyAccess = () => {
    setIsEarlyAccessOpen(false);
  };

  const handleExplore = () => {
    const el = document.querySelector('#overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111A2E] font-sans antialiased flex flex-col selection:bg-[#4F7DFF]/20 selection:text-[#4F7DFF]">
      {/* Top Header / Navigation */}
      <Navbar onOpenEarlyAccess={handleOpenEarlyAccess} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section (with realistic Windows Desktop Mockup) */}
        <Hero onOpenEarlyAccess={handleOpenEarlyAccess} onExplore={handleExplore} />

        {/* 2. Trust and Capability Strip */}
        <CapabilityStrip />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. One Connected Workflow (Interactive 7-Step Pipeline) */}
        <WorkflowSection />

        {/* 5. Core Feature Modules Grid */}
        <FeatureModules />

        {/* 6. Product Showcase (5-Tab UI Walkthrough) */}
        <ProductShowcase />

        {/* 7. AI Agent Governance & Human Control (with Interactive Approval Gate) */}
        <AgentGovernance />

        {/* 8. Revenue & Margin Sandbox (Interactive Unit Economics Calculator) */}
        <EconomicsSandbox />

        {/* 9. Target Use Cases */}
        <UseCases />

        {/* 10. Integrations & Extensibility */}
        <IntegrationsSection />

        {/* 11. Windows-First Architecture & Specifications */}
        <WindowsFirst onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* 12. Transparent Roadmap & Status */}
        <RoadmapSection />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Final Call to Action */}
        <FinalCta onOpenEarlyAccess={handleOpenEarlyAccess} onExplore={handleExplore} />
      </main>

      {/* Footer */}
      <Footer onOpenEarlyAccess={handleOpenEarlyAccess} />

      {/* Early Access / Private Beta Request Modal */}
      <EarlyAccessModal isOpen={isEarlyAccessOpen} onClose={handleCloseEarlyAccess} />
    </div>
  );
}

export default App;
