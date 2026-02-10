import {
  Building2,
  Briefcase,
  Users,
  Landmark,
  Wallet,
  Search,
} from "lucide-react"

const clientTypes = [
  {
    icon: Building2,
    title: "Business Owners",
    subtitle: "Preparing to sell your company?",
    description:
      "Build a professional, 20+ page CIM, get an accurate business valuation using 5 methods, and create marketing materials -- all without paying an advisory firm $15,000 or more. Present your business to buyers like a Fortune 500 company would.",
    bullets: [
      "Professional buyer-ready package",
      "Save $10-20K on advisory fees",
      "DIY sale preparation",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Brokers",
    subtitle: "Managing a portfolio of listings?",
    description:
      "Generate CIMs, blind teasers, valuations, and branded marketing posts for every listing in your portfolio in hours instead of weeks. Scale your practice without scaling your analyst headcount.",
    bullets: [
      "Multi-platform marketing",
      "Custom firm branding",
      "Batch document generation",
    ],
  },
  {
    icon: Users,
    title: "M&A Advisors & Firms",
    subtitle: "Running sell-side engagements?",
    description:
      "Deliver institutional-quality pitchbooks that match the standards of top-tier advisory firms. Complete with adjusted EBITDA schedules, ratio analysis, CAGR tables, and market research powered by AI.",
    bullets: [
      "Client-ready formatting",
      "Financial analysis depth",
      "Institutional-grade CIMs",
    ],
  },
  {
    icon: Landmark,
    title: "Investment Bankers",
    subtitle: "Need sell-side pitchbook quality?",
    description:
      "Every CIM is formatted with the depth and detail PE firms, family offices, and strategic acquirers expect. Five valuation methods with weighted adjustment factors, 11 risk categories, and full financial schedules.",
    bullets: [
      "11 risk adjustment sliders",
      "5 valuation methods",
      "PE-ready deliverables",
    ],
  },
  {
    icon: Wallet,
    title: "Family Offices",
    subtitle: "Evaluating acquisition targets?",
    description:
      "Use our valuation engine and financial analysis tools to quickly assess opportunities. Generate standardized CIMs for portfolio companies you are preparing for exit or recapitalization.",
    bullets: [
      "Standardized analysis",
      "Portfolio company CIMs",
      "Quick deal evaluation",
    ],
  },
  {
    icon: Search,
    title: "Search Fund Operators",
    subtitle: "Sourcing and evaluating deals?",
    description:
      "Rapidly document and analyze acquisition targets with rigorous financial modeling. Weighted risk assessments covering owner involvement, customer concentration, growth trajectory, and 8 other factors.",
    bullets: [
      "Financial due diligence",
      "Weighted risk scoring",
      "Rapid deal analysis",
    ],
  },
]

export function Clients() {
  return (
    <section id="clients" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Clients
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Purpose-Built for Everyone in the Deal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are a business owner preparing your exit, a broker managing 20 listings, or an investment banker running a sell-side process -- Dealaxia replaces weeks of work with hours of results.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((client) => (
            <div
              key={client.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <client.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {client.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {client.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {client.description}
              </p>
              <ul className="mt-4 space-y-2">
                {client.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
