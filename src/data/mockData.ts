export interface ProductOpportunity {
  id: string;
  name: string;
  category: string;
  source: string;
  sourceType: 'API Feed' | 'Verified 1688' | 'Customs Import' | 'Direct Catalog';
  lastChecked: string;
  demandSignal: string;
  cogs: number;
  msrp: number;
  netMargin: number;
  status: 'Discovered' | 'Reviewed' | 'Content Queued' | 'Published';
  supplierCount: number;
  confidenceScore: number;
  riskFlag?: string;
}

export const MOCK_OPPORTUNITIES: ProductOpportunity[] = [
  {
    id: 'OPP-8921',
    name: 'AeroFold Ergonomic Dual-Pivot Laptop Stand',
    category: 'Workplace Hardware',
    source: 'Shenzhen Tech Feeds / Port 883',
    sourceType: 'API Feed',
    lastChecked: '42 mins ago',
    demandSignal: '+24% YoY search volume · Low SKU competition',
    cogs: 8.40,
    msrp: 38.00,
    netMargin: 46.8,
    status: 'Reviewed',
    supplierCount: 3,
    confidenceScore: 92,
  },
  {
    id: 'OPP-8924',
    name: 'Nordic Cast Matte Ceramic Pour-Over Dripper',
    category: 'Home & Kitchenware',
    source: 'Chaozhou Verified Supplier Directory',
    sourceType: 'Verified 1688',
    lastChecked: '2 hrs ago',
    demandSignal: '+18% MoM specialty coffee search index',
    cogs: 4.10,
    msrp: 26.50,
    netMargin: 53.2,
    status: 'Content Queued',
    supplierCount: 2,
    confidenceScore: 89,
    riskFlag: 'Supplier MOQ quote update pending',
  },
  {
    id: 'OPP-8930',
    name: 'Grade 5 Titanium Modular EDC Carabiner',
    category: 'Outdoor & Tactical Accessories',
    source: 'Baoji Precision Metals Manifest',
    sourceType: 'Customs Import',
    lastChecked: '5 hrs ago',
    demandSignal: 'Breakout trend · Minimal DTC brand saturation',
    cogs: 5.80,
    msrp: 32.00,
    netMargin: 49.5,
    status: 'Published',
    supplierCount: 4,
    confidenceScore: 95,
  },
  {
    id: 'OPP-8935',
    name: 'Anodized Mechanical Desk Cable Manager',
    category: 'Desk Organization',
    source: 'Dongguan CNC Fabricators Group',
    sourceType: 'Direct Catalog',
    lastChecked: '8 hrs ago',
    demandSignal: '+31% TikTok organic search mentions',
    cogs: 3.20,
    msrp: 19.99,
    netMargin: 44.0,
    status: 'Discovered',
    supplierCount: 1,
    confidenceScore: 78,
  },
];

export interface WorkflowStage {
  step: number;
  id: string;
  name: string;
  subtitle: string;
  description: string;
  actionLabel: string;
  systemAction: string;
  sampleInput: string;
  sampleOutput: string;
  auditEvidence: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    id: 'discover',
    name: 'Discover',
    subtitle: 'Permitted Ingestion',
    description: 'Ingest product candidates from authorized API feeds, supplier catalogs, and user CSV uploads with strict deduplication.',
    actionLabel: 'Input Ingested',
    systemAction: 'Normalizing SKU attributes and indexing origin timestamps.',
    sampleInput: 'CSV Import: 1,200 records from verified European supplier manifest #EU-4402.',
    sampleOutput: '38 unique opportunities parsed; 4 potential duplicates merged; 0 rate violations.',
    auditEvidence: 'Source URL: api.supplier.de/v2/catalog · Hash: SHA-256 e8f3...a9b2',
  },
  {
    step: 2,
    id: 'verify',
    name: 'Verify',
    subtitle: 'Evidence & Provenance',
    description: 'Bind each opportunity to explicit supplier credentials, factory audits, MOQ data, and timestamped source evidence.',
    actionLabel: 'Evidence Bound',
    systemAction: 'Checking business license status, ISO compliance tags, and quote lead times.',
    sampleInput: 'Supplier: Chaozhou Jinxi Ceramics Co. (ID: SUP-771)',
    sampleOutput: 'Factory audit attached (Nov 2025); MOQ: 300 units; FOB Shenzhen: $4.10/unit.',
    auditEvidence: 'Verified by operator via official customs export registration check.',
  },
  {
    step: 3,
    id: 'evaluate',
    name: 'Evaluate',
    subtitle: 'Unit Economics Sandbox',
    description: 'Model true landed cost, shipping, payment processing, platform fees, returns reserve, and contribution margin.',
    actionLabel: 'Margin Computed',
    systemAction: 'Running margin sensitivity analysis against fluctuating shipping & CPC tiers.',
    sampleInput: 'MSRP: $26.50 · COGS: $4.10 · Sea Freight: $1.20 · Platform: 15% · Target CAC: $6.00',
    sampleOutput: 'Net contribution margin: 53.2% ($14.10/unit) · Break-even ROAS: 1.88x',
    auditEvidence: 'Scenario model: Baseline v1.3 with 3.5% return allowance buffer.',
  },
  {
    step: 4,
    id: 'create',
    name: 'Create',
    subtitle: 'Content & Copy Studio',
    description: 'Generate publication-ready product guides, editorial comparisons, technical specifications, and structured schema.',
    actionLabel: 'Draft Rendered',
    systemAction: 'Synthesizing verified specifications into editorial-grade Markdown & JSON-LD.',
    sampleInput: 'Prompt template: Editorial Product Breakdown (Style: Minimal Architectural)',
    sampleOutput: '1,450-word in-depth guide + comparison matrix + 8 high-intent FAQ items generated.',
    auditEvidence: 'Generated via structured schema provider; all factual claims matched to SUP-771.',
  },
  {
    step: 5,
    id: 'review',
    name: 'Review',
    subtitle: 'Human Approval Gate',
    description: 'Inspect the evidence trail, claims checklist, SEO metadata, and unit economics before authorising public publication.',
    actionLabel: 'Operator Sign-off',
    systemAction: 'Enforcing mandatory operator sign-off before API dispatch.',
    sampleInput: 'Approval request #APR-9902: 1 Content Item + 1 Remote Price Rule ($26.50).',
    sampleOutput: 'Signed by Operator (ID: admin-local) at 2026-10-26T14:22:10Z. Diff reviewed.',
    auditEvidence: 'Audit Log ID: AUD-29184 · Signature verification: Passed',
  },
  {
    step: 6,
    id: 'publish',
    name: 'Publish',
    subtitle: 'Configured CMS Dispatch',
    description: 'Send approved content directly to your configured WordPress REST API or commerce endpoint with remote ID tracking.',
    actionLabel: 'Remote Synchronized',
    systemAction: 'Dispatching encrypted payload via WordPress REST API application password.',
    sampleInput: 'Endpoint: https://editorial-store.internal/wp-json/wp/v2/posts (Post ID: #1042)',
    sampleOutput: 'HTTP 201 Created · Status: Draft Scheduled for 09:00 EST · Remote permalink bound.',
    auditEvidence: 'Remote response 201 verified; zero plaintext credentials recorded.',
  },
  {
    step: 7,
    id: 'measure',
    name: 'Measure',
    subtitle: 'Commercial Telemetry',
    description: 'Track post-publication search impressions, referral conversions, real supplier lead times, and contribution margin.',
    actionLabel: 'Telemetry Active',
    systemAction: 'Aggregating incremental revenue attribution against ad & production spend.',
    sampleInput: 'Post #1042 · Live telemetry window: 14 days active',
    sampleOutput: 'Attributed gross sales: $4,240 · Est. contribution margin: $2,255 · 0 delivery errors.',
    auditEvidence: 'Performance dashboard: Attributed vs Incremental telemetry decoupled.',
  },
];

export interface IntegrationItem {
  name: string;
  category: 'Publishing' | 'Sourcing & Data' | 'Commerce & Feeds' | 'AI Providers';
  status: 'Available' | 'Beta' | 'Planned';
  description: string;
  protocol: string;
  authMethod: string;
}

export const INTEGRATIONS: IntegrationItem[] = [
  {
    name: 'WordPress REST API',
    category: 'Publishing',
    status: 'Available',
    description: 'Direct publishing of articles, product breakdowns, category hubs, and custom post types.',
    protocol: 'REST / JSON',
    authMethod: 'Application Passwords',
  },
  {
    name: 'CSV & Tabular Feeds',
    category: 'Sourcing & Data',
    status: 'Available',
    description: 'Deterministic bulk import/export for product opportunities, quotes, and SKU catalogs.',
    protocol: 'RFC 4180 CSV / TSV',
    authMethod: 'Local File / UTF-8',
  },
  {
    name: 'OpenAI API Adapter',
    category: 'AI Providers',
    status: 'Available',
    description: 'Model-agnostic engine adapter for structured synthesis, SEO copy, and evidence extraction.',
    protocol: 'Secure TLS Proxy',
    authMethod: 'OS Credential Vault',
  },
  {
    name: 'Pressable & Headless WP',
    category: 'Publishing',
    status: 'Beta',
    description: 'High-availability enterprise WordPress hosting integration with automated staging.',
    protocol: 'Managed REST API',
    authMethod: 'OAuth2 / API Key',
  },
  {
    name: 'Shopify Admin API',
    category: 'Commerce & Feeds',
    status: 'Beta',
    description: 'Sync reviewed product records, meta-fields, and pricing to Shopify stores.',
    protocol: 'GraphQL / REST',
    authMethod: 'Custom App Access Token',
  },
  {
    name: 'Customs Import Manifests',
    category: 'Sourcing & Data',
    status: 'Beta',
    description: 'Verified bill of lading imports to trace supplier volume and manufacturing origins.',
    protocol: 'Batch Sync',
    authMethod: 'Encrypted Token',
  },
  {
    name: 'Amazon SP-API',
    category: 'Commerce & Feeds',
    status: 'Planned',
    description: 'Authorized Selling Partner API integration for catalog and pricing observation.',
    protocol: 'SP-API / IAM Role',
    authMethod: 'AWS LWA Credentials',
  },
  {
    name: 'WooCommerce API',
    category: 'Commerce & Feeds',
    status: 'Planned',
    description: 'Two-way sync of variable products, inventory tiers, and product category metadata.',
    protocol: 'REST v3',
    authMethod: 'Consumer Key / Secret',
  },
  {
    name: 'Anthropic Claude Engine',
    category: 'AI Providers',
    status: 'Planned',
    description: 'Alternative reasoning provider for multi-source supplier contract analysis.',
    protocol: 'Direct TLS API',
    authMethod: 'Local Key Vault',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'What is SCRIBE and how is it different from an AI chatbot or scraper?',
    answer: 'SCRIBE is an installable Windows desktop workspace built specifically for professional commerce operators. Rather than a generic chat prompt or a brittle web scraper, SCRIBE unifies product discovery, supplier verification, content publishing (starting with WordPress REST API), unit economics calculation, and human-in-the-loop AI orchestration into one cohesive, auditable operating environment.',
  },
  {
    question: 'Is SCRIBE an open marketplace or an operator workspace?',
    answer: 'In its MVP release, SCRIBE is strictly an operator workspace designed for private teams, merchants, and sourcing researchers. It helps you manage your own catalog, research suppliers, generate publication-grade content, and measure real contribution margins. A broader multi-vendor marketplace is part of our long-term strategic roadmap, not a prerequisite for the desktop application.',
  },
  {
    question: 'Does SCRIBE automatically generate sales or guarantee profits?',
    answer: 'No software can guarantee commercial sales. We explicitly reject exaggerated claims: SCRIBE provides the rigorous workflow, transparent unit economics modeling, and automated publishing pipelines needed to make evidence-based commercial moves. All margin calculations model true variable costs (freight, platform fees, return reserves) rather than superficial ad ROAS.',
  },
  {
    question: 'How does SCRIBE enforce human control and agent governance?',
    answer: 'Every AI agent in SCRIBE operates within strict permission boundaries defined in the desktop configuration. High-impact operations—such as publishing content publicly, altering live prices, or spending advertising budget—are halted at explicit Human Approval Gates. You can inspect the complete step trace, payload diff, and estimated API token cost before confirming or rejecting the action.',
  },
  {
    question: 'What are the system requirements for the Windows desktop application?',
    answer: 'SCRIBE is engineered with Tauri 2 and a native Rust backend wrapper, resulting in a lightweight installer (<45MB) with negligible idle CPU overhead. It officially supports Windows 10 (64-bit, version 2004+) and Windows 11. Minimum hardware: 4GB RAM (8GB recommended for datasets over 10,000 product records) and 200MB free disk space.',
  },
  {
    question: 'Where is my commercial data and API keys stored?',
    answer: 'SCRIBE follows a local-first privacy architecture. Your product catalogs, supplier notes, and financial models are persisted in an encrypted local SQLite database. Sensitive API secrets (such as WordPress application passwords and LLM provider keys) are stored in the native Windows Credential Manager (DPAPI), never in plaintext files or client-side telemetry.',
  },
  {
    question: 'Can I export my data if I decide to migrate?',
    answer: 'Yes. SCRIBE has a zero-lock-in philosophy. You can export your full product catalog, supplier dossiers, content drafts, and historical run logs at any time in standard RFC-compliant CSV, Markdown, or JSON formats.',
  },
  {
    question: 'How do I access the Early Access / Private Beta program?',
    answer: 'We are currently accepting qualified commerce operators, sourcing teams, and content publishers into our private beta cohort. Submit your details through the Early Access modal on this page to receive the signed Windows installer, setup guide, and private release notes.',
  },
];

