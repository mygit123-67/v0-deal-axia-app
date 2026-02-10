import { Upload, Brain, SlidersHorizontal, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Create a Project",
    description:
      "Enter the company details, upload financials (P&Ls, tax returns, balance sheets), and set the deal parameters.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes Everything",
    description:
      "AI researches the industry, analyzes the financials, and generates institutional-quality content for every section of your CIM, teaser, and valuation.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Adjust & Refine",
    description:
      "Use the valuation sliders to adjust for owner involvement, customer concentration, market position, and 8 other factors. Edit any section of the CIM inline.",
  },
  {
    number: "04",
    icon: Send,
    title: "Export & Distribute",
    description:
      "Export print-ready PDFs, generate marketing materials for every platform, and share teasers with prospective buyers -- all from one dashboard.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            From Upload to Export in 4 Steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-border lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-primary bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
