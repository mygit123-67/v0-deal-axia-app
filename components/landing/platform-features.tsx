import {
  FileText,
  Eye,
  Calculator,
  BarChart3,
  Megaphone,
  Database,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "AI-Powered CIM Builder",
    subtitle: "20+ page institutional-quality CIMs",
    description:
      "Generate 20+ page, investment-bank quality Confidential Information Memorandums with AI. Complete with executive summaries, financial analysis, adjusted EBITDA schedules, market research, and professional formatting -- ready for PE firms and strategic acquirers.",
  },
  {
    icon: Eye,
    title: "Blind Teaser Generator",
    subtitle: "Professional blind profiles in 30 seconds",
    description:
      "Create anonymized deal fact sheets in seconds. Project code names, regional-only location, financial snapshots, and investment highlights -- formatted like they came from a top-tier advisory firm.",
  },
  {
    icon: Calculator,
    title: "M&A Valuation Engine",
    subtitle: "5 valuation methods with weighted adjustments",
    description:
      "Five institutional-grade valuation methods: SDE Multiples, EBITDA Multiples, DCF Analysis, Market Comps, and Asset-Based. Weighted adjustment factors with sliding scales for 11 risk categories including owner involvement, customer concentration, and growth trajectory.",
  },
  {
    icon: BarChart3,
    title: "3-Year Financial Analysis",
    subtitle: "Automated extraction & SDE add-backs",
    description:
      "Upload tax returns and P&Ls -- the platform extracts and presents 3 years of financials side-by-side. Editable SDE add-back schedules with 8 categories, auto-calculated EBITDA, margins, CAGR, and ratio analysis.",
  },
  {
    icon: Megaphone,
    title: "AI Marketing Material",
    subtitle: "Branded listing posts for every platform",
    description:
      "Generate platform-specific listing posts for LinkedIn, Facebook, email campaigns, and more. Each post includes branded image templates with financial highlights, short and long captions, hashtags, and CTAs -- all pulling from your firm's branding automatically.",
  },
  {
    icon: Database,
    title: "Secure Data Room",
    subtitle: "Organized & permission-controlled",
    description:
      "Organize all deal documents in a structured, permission-controlled data room. Upload tax returns, financials, legal documents, and due diligence materials with full version tracking and audit trails.",
  },
]

export function PlatformFeatures() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Platform Features
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Everything You Need to Close Deals Faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are a business owner preparing to sell or an M&A professional managing a portfolio of deals -- every tool you need to create investor-ready documents, powered by AI.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {feature.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
