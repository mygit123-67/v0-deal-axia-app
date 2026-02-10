import { Gauge, Check, Zap, BarChart } from "lucide-react"

const bullets = [
  "Track AI generation credits in real time",
  "Automatic upgrade prompts near limits",
  "Plan limits and remaining credits at a glance",
  "Per-account usage dashboard",
]

const usageItems = [
  { label: "CIMs Generated", current: 8, max: 12 },
  { label: "Teasers Generated", current: 6, max: 12 },
  { label: "Active Deals", current: 3, max: 5 },
  { label: "Data Rooms", current: 2, max: 5 },
]

export function UsageSection() {
  return (
    <section id="usage" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Mock UI */}
          <div className="order-2 lg:order-1 rounded-xl border border-border bg-card p-1">
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Usage Dashboard</h3>
                  <p className="text-xs text-muted-foreground">Platinum Plan</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                {usageItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.current} / {item.max}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${(item.current / item.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-border/50 bg-background/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">AI Credits Remaining</span>
                  </div>
                  <span className="text-lg font-bold text-primary">2,450</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Gauge className="h-3.5 w-3.5" />
              {"Usage & Credits"}
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Always know where you stand
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Track CIMs, teasers, and valuations generated. Monitor active deals and data room usage. Plan limits with remaining credits and automatic upgrade prompts when you are approaching your cap.
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
