import {
  Briefcase,
  CheckCircle2,
  LayoutDashboard,
  ListChecks,
  Users,
  FileText,
  Database,
  Activity,
} from "lucide-react"

const capabilities = [
  "Create deals",
  "Close deals",
  "Archive deals",
  "Assign owners & team members",
]

const tabs = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Tasks (12 open)", icon: ListChecks },
  { name: "Contacts (8)", icon: Users },
  { name: "Documents", icon: FileText },
  { name: "Data Room", icon: Database },
  { name: "Activity", icon: Activity },
]

export function WorkspacesSection() {
  return (
    <section id="workspaces" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Briefcase className="h-3.5 w-3.5" />
              Per-Deal Workspaces
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Everything for every deal, in one place
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Each deal gets its own dedicated workspace with an overview dashboard, task management, buyer contacts, document artifacts, data room access, and a full activity timeline — so nothing gets lost between emails and spreadsheets.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="h-3 w-3 text-primary" />
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Mock UI */}
          <div className="rounded-xl border border-border bg-card p-1">
            <div className="rounded-lg border border-border/50 bg-secondary/30 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Acme Corp Acquisition</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Stage: Due Diligence
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Active
                </span>
              </div>

              <div className="mt-6 flex gap-1 overflow-x-auto">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.name}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      i === 0
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <tab.icon className="h-3.5 w-3.5" />
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Pipeline Stage", value: "Due Diligence" },
                  { label: "Deal Value", value: "$4.2M" },
                  { label: "Open Tasks", value: "12" },
                  { label: "Active Buyers", value: "3" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-border/50 bg-background/50 p-3"
                  >
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
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
