import {
  LineChart,
  Calculator,
  TrendingUp,
  Building2,
  Plug,
} from "lucide-react"

const features = [
  {
    icon: Calculator,
    title: "Equidam / Equitest",
    description: "API-driven valuations and benchmark ranges. Institutional methodology applied to your deal data automatically.",
  },
  {
    icon: TrendingUp,
    title: "Financial Modeling Prep",
    description: "Public comps and historical financials by ticker. Pull comparable company data to strengthen your valuation thesis.",
  },
  {
    icon: Building2,
    title: "PrivCo / Comparables.ai / Grata",
    description: "Enrich buyer and deal data with private company intelligence, comparable transactions, and buyer universe research.",
  },
  {
    icon: Plug,
    title: "Custom Data Sources",
    description: "Enterprise plans support custom API integrations for proprietary deal data, industry databases, and internal benchmarks.",
  },
]

export function ValuationSection() {
  return (
    <section id="valuation" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <LineChart className="h-3.5 w-3.5" />
            {"Valuation & Market Data"}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Data-driven valuations backed by real market intelligence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pull in benchmark valuations, public comps, and private company intelligence from leading data providers. Enrich every deal with the market context buyers and investors expect.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
