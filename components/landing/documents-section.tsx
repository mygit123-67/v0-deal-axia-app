import { FileText, Check, Loader2 } from "lucide-react"

const features = [
  "PowerPoint and PDF export in one click",
  "Weighted risk adjustments across 11 categories including owner involvement and customer concentration",
  "Multi-method valuations: SDE Multiples, EBITDA, DCF, Market Comps, Asset-Based",
  "IOI / LOI templates pre-filled from deal data",
  "Blind teasers with code names, anonymized geography, and financial snapshots",
  "CIMs with executive summary, financials, market research, and add-back schedules",
]

const steps = [
  { name: "Executive Summary", status: "complete" },
  { name: "Financial Analysis", status: "complete" },
  { name: "Market Research", status: "complete" },
  { name: "Adjusted EBITDA", status: "complete" },
  { name: "Valuation (5 methods)", status: "complete" },
  { name: "Risk Factors", status: "review" },
]

export function DocumentsSection() {
  return (
    <section id="documents" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Mock UI */}
          <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-1">
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">CIM Generation</h3>
                  <p className="text-xs text-muted-foreground">AI-powered, section-by-section</p>
                </div>
              </div>

              <div className="space-y-2">
                {steps.map((step) => (
                  <div
                    key={step.name}
                    className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 px-4 py-3"
                  >
                    <span className="text-sm text-foreground">{step.name}</span>
                    {step.status === "complete" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        <Check className="h-3.5 w-3.5" />
                        Complete
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400">
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        In Review
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[85%] rounded-full bg-primary transition-all" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground text-right">
                5 of 6 sections complete
              </p>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <FileText className="h-3.5 w-3.5" />
              AI Document Engine
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Generate investor-ready documents in hours, not weeks
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"Dealaxia's AI agents draft institutional-quality CIMs, blind teasers, valuations, and IOI/LOI templates from your uploaded financials and company data — structured like deliverables from a top advisory firm."}
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
