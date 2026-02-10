"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Plus,
  Search,
  Filter,
  ChevronRight,
  Clock,
  MoreHorizontal,
  Building2,
  ArrowUpDown,
  Grid3X3,
  List,
} from "lucide-react"

type Deal = {
  id: string
  name: string
  industry: string
  stage: string
  stageColor: string
  value: string
  revenue: string
  sde: string
  lastActivity: string
  progress: number
  created: string
}

const deals: Deal[] = [
  { id: "1", name: "Acme Manufacturing Co.", industry: "Manufacturing", stage: "Due Diligence", stageColor: "bg-chart-4/10 text-chart-4", value: "$4.2M", revenue: "$1.8M", sde: "$620K", lastActivity: "2h ago", progress: 65, created: "Jan 15, 2026" },
  { id: "2", name: "Apex Digital Holdings", industry: "Technology", stage: "Marketing", stageColor: "bg-primary/10 text-primary", value: "$8.7M", revenue: "$3.2M", sde: "$1.1M", lastActivity: "5h ago", progress: 35, created: "Dec 28, 2025" },
  { id: "3", name: "Nova Health Systems", industry: "Healthcare", stage: "LOI Negotiation", stageColor: "bg-chart-3/10 text-chart-3", value: "$2.1M", revenue: "$890K", sde: "$340K", lastActivity: "1d ago", progress: 80, created: "Nov 10, 2025" },
  { id: "4", name: "Summit Logistics Group", industry: "Logistics", stage: "Listing Prep", stageColor: "bg-chart-2/10 text-chart-2", value: "$12.5M", revenue: "$5.6M", sde: "$2.3M", lastActivity: "2d ago", progress: 15, created: "Feb 1, 2026" },
  { id: "5", name: "Riverside Hospitality Inc.", industry: "Hospitality", stage: "Closing", stageColor: "bg-primary/10 text-primary", value: "$6.3M", revenue: "$2.4M", sde: "$890K", lastActivity: "3h ago", progress: 92, created: "Aug 22, 2025" },
  { id: "6", name: "Pacific Coast Distributors", industry: "Distribution", stage: "Marketing", stageColor: "bg-primary/10 text-primary", value: "$3.8M", revenue: "$1.5M", sde: "$480K", lastActivity: "4h ago", progress: 40, created: "Jan 5, 2026" },
  { id: "7", name: "Greenfield Agriculture LLC", industry: "Agriculture", stage: "Listing Prep", stageColor: "bg-chart-2/10 text-chart-2", value: "$5.1M", revenue: "$2.1M", sde: "$720K", lastActivity: "1d ago", progress: 10, created: "Feb 5, 2026" },
  { id: "8", name: "Metro Dental Group", industry: "Healthcare", stage: "Due Diligence", stageColor: "bg-chart-4/10 text-chart-4", value: "$1.9M", revenue: "$780K", sde: "$310K", lastActivity: "6h ago", progress: 55, created: "Dec 1, 2025" },
]

const stages = ["All", "Listing Prep", "Marketing", "Due Diligence", "LOI Negotiation", "Closing"]

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeStage, setActiveStage] = useState("All")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  const filteredDeals = deals.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.industry.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStage = activeStage === "All" || d.stage === activeStage
    return matchSearch && matchStage
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Deals</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your active deal portfolio
          </p>
        </div>
        <Link
          href="/dashboard/deals/new"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          New Deal
        </Link>
      </div>

      {/* Filters bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                activeStage === stage
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {stage}
              {stage !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  {deals.filter(d => d.stage === stage).length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-52 rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="flex items-center rounded-lg border border-border">
            <button
              onClick={() => setViewMode("list")}
              className={`flex h-9 w-9 items-center justify-center rounded-l-lg transition-colors ${
                viewMode === "list" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex h-9 w-9 items-center justify-center rounded-r-lg border-l border-border transition-colors ${
                viewMode === "grid" ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Deals list */}
      {viewMode === "list" ? (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_40px] gap-4 border-b border-border bg-secondary/30 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>Deal</span>
            <span>Stage</span>
            <span>Asking Price</span>
            <span>Revenue / SDE</span>
            <span>Progress</span>
            <span />
          </div>
          {/* Rows */}
          <div className="divide-y divide-border">
            {filteredDeals.map((deal) => (
              <Link
                key={deal.id}
                href={`/dashboard/deals/${deal.id}`}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_40px] gap-4 items-center px-5 py-4 transition-colors hover:bg-secondary/20"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{deal.name}</p>
                      <p className="text-xs text-muted-foreground">{deal.industry}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${deal.stageColor}`}>
                    {deal.stage}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{deal.value}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground">{deal.revenue}</p>
                  <p className="text-xs text-muted-foreground">SDE: {deal.sde}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${deal.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{deal.progress}%</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5" />
                    {deal.lastActivity}
                  </p>
                </div>
                <div className="flex justify-end">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.map((deal) => (
            <Link
              key={deal.id}
              href={`/dashboard/deals/${deal.id}`}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{deal.name}</p>
                    <p className="text-xs text-muted-foreground">{deal.industry}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="More options"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${deal.stageColor}`}>
                  {deal.stage}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-sm font-semibold text-foreground">{deal.value}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-sm font-semibold text-foreground">{deal.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">SDE</p>
                  <p className="text-sm font-semibold text-foreground">{deal.sde}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span>Progress</span>
                  <span>{deal.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${deal.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {deal.lastActivity}
                </span>
                <span>{deal.created}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
