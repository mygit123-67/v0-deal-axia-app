"use client"

import { useState } from "react"
import Link from "next/link"
import {
  TrendingUp,
  Sparkles,
  Building2,
  DollarSign,
  BarChart3,
  ChevronRight,
  Clock,
  CheckCircle2,
  Plus,
  Download,
  ArrowUpRight,
  Search,
  Target,
  Calculator,
  AlertCircle,
} from "lucide-react"

type Valuation = {
  id: string
  dealName: string
  industry: string
  askingPrice: string
  estimatedValue: string
  sdeMultiple: string
  ebitdaMultiple: string
  confidence: "High" | "Medium" | "Low"
  status: "completed" | "running" | "draft"
  lastRun: string
  methods: number
}

const valuations: Valuation[] = [
  { id: "1", dealName: "Acme Manufacturing Co.", industry: "Manufacturing", askingPrice: "$4.2M", estimatedValue: "$4.23M", sdeMultiple: "6.8x", ebitdaMultiple: "7.8x", confidence: "High", status: "completed", lastRun: "2h ago", methods: 4 },
  { id: "2", dealName: "Apex Digital Holdings", industry: "Technology", askingPrice: "$8.7M", estimatedValue: "$9.1M", sdeMultiple: "8.3x", ebitdaMultiple: "9.3x", confidence: "High", status: "completed", lastRun: "5h ago", methods: 4 },
  { id: "3", dealName: "Nova Health Systems", industry: "Healthcare", askingPrice: "$2.1M", estimatedValue: "$2.05M", sdeMultiple: "6.0x", ebitdaMultiple: "7.2x", confidence: "Medium", status: "completed", lastRun: "1d ago", methods: 3 },
  { id: "4", dealName: "Summit Logistics Group", industry: "Logistics", askingPrice: "$12.5M", estimatedValue: "Pending", sdeMultiple: "--", ebitdaMultiple: "--", confidence: "Low", status: "running", lastRun: "Just now", methods: 0 },
  { id: "5", dealName: "Riverside Hospitality Inc.", industry: "Hospitality", askingPrice: "$6.3M", estimatedValue: "$6.15M", sdeMultiple: "6.9x", ebitdaMultiple: "8.1x", confidence: "High", status: "completed", lastRun: "3h ago", methods: 4 },
  { id: "6", dealName: "Pacific Coast Distributors", industry: "Distribution", askingPrice: "$3.8M", estimatedValue: "$3.5M", sdeMultiple: "7.3x", ebitdaMultiple: "8.0x", confidence: "Medium", status: "completed", lastRun: "4h ago", methods: 3 },
]

const confidenceConfig = {
  High: { color: "text-primary", bg: "bg-primary/10" },
  Medium: { color: "text-chart-4", bg: "bg-chart-4/10" },
  Low: { color: "text-destructive", bg: "bg-destructive/10" },
}

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-primary", label: "Completed" },
  running: { icon: Sparkles, color: "text-chart-4", label: "Running..." },
  draft: { icon: AlertCircle, color: "text-muted-foreground", label: "Draft" },
}

export default function ValuationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = valuations.filter((v) =>
    v.dealName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.industry.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const completedCount = valuations.filter(v => v.status === "completed").length
  const avgMultiple = "7.3x"
  const totalValue = "$25.0M"

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Valuations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            AI-powered business valuations with multiple methodologies
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          <Sparkles className="h-4 w-4" />
          New Valuation
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Valuations Run", value: completedCount.toString(), icon: Calculator, color: "text-primary", bgColor: "bg-primary/10" },
          { label: "Avg SDE Multiple", value: avgMultiple, icon: TrendingUp, color: "text-chart-2", bgColor: "bg-chart-2/10" },
          { label: "Total Portfolio Value", value: totalValue, icon: DollarSign, color: "text-chart-4", bgColor: "bg-chart-4/10" },
          { label: "High Confidence", value: `${valuations.filter(v => v.confidence === "High").length}`, icon: Target, color: "text-chart-3", bgColor: "bg-chart-3/10" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Methodology overview */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-base font-semibold text-foreground mb-4">Valuation Methodologies</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "SDE Multiple", desc: "Seller's Discretionary Earnings multiplied by industry-specific multiples" },
            { name: "EBITDA Multiple", desc: "Earnings before interest, taxes, depreciation, and amortization approach" },
            { name: "Revenue Multiple", desc: "Top-line revenue multiplied by industry and growth-adjusted multiples" },
            { name: "DCF Analysis", desc: "Discounted cash flow model with 10-year projected free cash flows" },
          ].map((method) => (
            <div key={method.name} className="rounded-lg border border-border bg-background p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">{method.name}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">All Valuations</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search valuations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-52 rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Valuations table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_40px] gap-4 border-b border-border bg-secondary/30 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>Deal</span>
          <span>Asking Price</span>
          <span>Est. Value</span>
          <span>SDE / EBITDA</span>
          <span>Confidence</span>
          <span>Status</span>
          <span />
        </div>
        <div className="divide-y divide-border">
          {filtered.map((val) => {
            const conf = confidenceConfig[val.confidence]
            const status = statusConfig[val.status]
            return (
              <Link
                key={val.id}
                href={`/dashboard/deals/${val.id}`}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_40px] gap-4 items-center px-5 py-4 transition-colors hover:bg-secondary/20"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{val.dealName}</p>
                    <p className="text-xs text-muted-foreground">{val.industry}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">{val.askingPrice}</p>
                <p className={`text-sm font-bold ${val.status === "running" ? "text-muted-foreground" : "text-primary"}`}>
                  {val.estimatedValue}
                </p>
                <div>
                  <p className="text-sm text-foreground">{val.sdeMultiple}</p>
                  <p className="text-xs text-muted-foreground">{val.ebitdaMultiple}</p>
                </div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${conf.bg} ${conf.color}`}>
                  {val.confidence}
                </span>
                <div className="flex items-center gap-1.5">
                  <status.icon className={`h-3.5 w-3.5 ${status.color} ${val.status === "running" ? "animate-spin" : ""}`} />
                  <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
                </div>
                <div className="flex justify-end">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
