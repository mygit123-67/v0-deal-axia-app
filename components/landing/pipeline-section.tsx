import {
  BarChart3,
  Kanban,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: Kanban,
    title: "Kanban & List Views",
    description: "Drag-and-drop deals between customizable stages. Visualize your entire pipeline at a glance.",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    description: "Filter by owner, stage, sector, or deal size. Find any deal instantly across your portfolio.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Analytics",
    description: "Track time in stage, win rate, total pipeline value, and closing probability per deal.",
  },
  {
    icon: Users,
    title: "Buyer Management",
    description: "Manage contacts, NDAs, and engagement status for every prospective buyer. Track outreach and response rates.",
  },
]

const stages = [
  { name: "Sourcing", count: 4, color: "bg-blue-500" },
  { name: "Marketing", count: 7, color: "bg-primary" },
  { name: "LOI", count: 3, color: "bg-amber-500" },
  { name: "Diligence", count: 2, color: "bg-cyan-500" },
  { name: "Closing", count: 1, color: "bg-emerald-400" },
]

export function PipelineSection() {
  return (
    <section id="pipeline" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <BarChart3 className="h-3.5 w-3.5" />
              Deal Pipeline
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              See every deal at a glance, from sourcing to close
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A global pipeline view across all your active engagements. Customizable stages, key metrics per deal, and buyer management — so nothing falls through the cracks.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mock UI */}
          <div className="rounded-xl border border-border bg-card p-1">
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Pipeline Overview</h3>
                  <p className="text-xs text-muted-foreground">17 Active Deals</p>
                </div>
              </div>

              {/* Pipeline stages */}
              <div className="flex gap-2 mb-6">
                {stages.map((stage) => (
                  <div key={stage.name} className="flex-1">
                    <div className={`h-2 rounded-full ${stage.color} mb-2`} />
                    <p className="text-xs text-muted-foreground">{stage.name}</p>
                    <p className="text-lg font-bold text-foreground">{stage.count}</p>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: DollarSign, label: "Pipeline Value", value: "$47M" },
                  { icon: Target, label: "Win Rate", value: "68%" },
                  { icon: Clock, label: "Avg. Time", value: "34d" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-border/50 bg-background/50 p-3 text-center"
                  >
                    <metric.icon className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
