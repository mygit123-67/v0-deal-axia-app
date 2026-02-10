import { Brain, Calculator, Clock, Layers } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "AI That Actually Understands M&A",
    description:
      "Not a generic AI chatbot. Dealaxia uses specialized prompts trained on real CIM structures from top advisory firms.",
  },
  {
    icon: Calculator,
    title: "SDE Add-Backs Built In",
    description:
      "The only platform with a dedicated SDE add-back schedule. Owner salary, personal expenses, one-time costs -- all accounted for in the valuation.",
  },
  {
    icon: Clock,
    title: "Hours, Not Weeks",
    description:
      "What used to take 2-3 weeks of analyst time now takes under 2 hours. Generate, refine, export -- all in one session.",
  },
  {
    icon: Layers,
    title: "Everything in One Platform",
    description:
      "CIM, teaser, valuation, marketing, and data room. No more juggling Word docs, Excel models, Canva, and email separately.",
  },
]

export function WhyDealaxia() {
  return (
    <section className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why Dealaxia
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Built Different from Generic Document Tools
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
