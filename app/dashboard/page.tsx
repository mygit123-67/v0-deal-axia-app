"use client"

import {
  Briefcase,
  TrendingUp,
  DollarSign,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  MoreHorizontal,
  Plus,
  ChevronRight,
  Users,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    label: "Active Deals",
    value: "12",
    change: "+3",
    trend: "up" as const,
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Total Deal Value",
    value: "$47.2M",
    change: "+$8.4M",
    trend: "up" as const,
    icon: DollarSign,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    label: "Documents Generated",
    value: "34",
    change: "+12",
    trend: "up" as const,
    icon: FileText,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    label: "Active Buyers",
    value: "86",
    change: "+22",
    trend: "up" as const,
    icon: Users,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

const recentDeals = [
  {
    id: "1",
    name: "Acme Manufacturing Co.",
    stage: "Due Diligence",
    stageColor: "bg-chart-4/10 text-chart-4",
    value: "$4.2M",
    revenue: "$1.8M",
    industry: "Manufacturing",
    lastActivity: "2 hours ago",
    progress: 65,
  },
  {
    id: "2",
    name: "Apex Digital Holdings",
    stage: "Marketing",
    stageColor: "bg-primary/10 text-primary",
    value: "$8.7M",
    revenue: "$3.2M",
    industry: "Technology",
    lastActivity: "5 hours ago",
    progress: 35,
  },
  {
    id: "3",
    name: "Nova Health Systems",
    stage: "LOI Negotiation",
    stageColor: "bg-chart-3/10 text-chart-3",
    value: "$2.1M",
    revenue: "$890K",
    industry: "Healthcare",
    lastActivity: "1 day ago",
    progress: 80,
  },
  {
    id: "4",
    name: "Summit Logistics Group",
    stage: "Listing Prep",
    stageColor: "bg-chart-2/10 text-chart-2",
    value: "$12.5M",
    revenue: "$5.6M",
    industry: "Logistics",
    lastActivity: "2 days ago",
    progress: 15,
  },
  {
    id: "5",
    name: "Riverside Hospitality Inc.",
    stage: "Closing",
    stageColor: "bg-primary/10 text-primary",
    value: "$6.3M",
    revenue: "$2.4M",
    industry: "Hospitality",
    lastActivity: "3 hours ago",
    progress: 92,
  },
]

const pipelineStages = [
  { name: "Listing Prep", count: 3, value: "$18.2M", color: "bg-chart-2" },
  { name: "Marketing", count: 4, value: "$22.1M", color: "bg-primary" },
  { name: "Due Diligence", count: 2, value: "$6.3M", color: "bg-chart-4" },
  { name: "LOI / Negotiation", count: 2, value: "$4.8M", color: "bg-chart-3" },
  { name: "Closing", count: 1, value: "$6.3M", color: "bg-chart-5" },
]

const recentActivity = [
  { icon: FileText, text: "CIM generated for Acme Manufacturing Co.", time: "2h ago", type: "document" },
  { icon: Users, text: "3 new buyer inquiries for Apex Digital Holdings", time: "5h ago", type: "buyer" },
  { icon: CheckCircle2, text: "Due diligence checklist completed for Nova Health", time: "1d ago", type: "milestone" },
  { icon: AlertCircle, text: "NDA pending signature from buyer #42", time: "1d ago", type: "action" },
  { icon: DollarSign, text: "LOI received for Nova Health Systems - $2.1M", time: "2d ago", type: "deal" },
  { icon: FileText, text: "Teaser approved for Summit Logistics Group", time: "2d ago", type: "document" },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back, John. Here is your deal portfolio overview.
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-primary" : "text-destructive"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Deals - takes 2 cols */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <h2 className="text-base font-semibold text-foreground">Recent Deals</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Your active deal portfolio</p>
            </div>
            <Link
              href="/dashboard/deals"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
            >
              View All
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-border">
            {recentDeals.map((deal) => (
              <Link
                key={deal.id}
                href={`/dashboard/deals/${deal.id}`}
                className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground truncate">{deal.name}</p>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${deal.stageColor}`}>
                      {deal.stage}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">{deal.industry}</span>
                    <span className="text-xs text-muted-foreground">Rev: {deal.revenue}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {deal.lastActivity}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground">{deal.value}</p>
                  <div className="mt-1.5 h-1.5 w-20 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${deal.progress}%` }}
                    />
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Pipeline Summary */}
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-base font-semibold text-foreground">Pipeline</h2>
              <Link
                href="/dashboard/pipeline"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
              >
                View
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="p-5 space-y-3">
              {pipelineStages.map((stage) => (
                <div key={stage.name} className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${stage.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground truncate">{stage.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0 ml-2">{stage.count} deals</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stage.value}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Total Pipeline</span>
                  <span className="text-sm font-bold text-primary">$57.7M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-base font-semibold text-foreground">Activity</h2>
              <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="divide-y divide-border/50">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 px-5 py-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary mt-0.5">
                    <activity.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground leading-snug">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="text-base font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Generate CIM", icon: FileText, href: "/dashboard/documents" },
            { label: "Create Teaser", icon: FileText, href: "/dashboard/documents" },
            { label: "Run Valuation", icon: TrendingUp, href: "/dashboard/valuations" },
            { label: "Add Buyer", icon: Users, href: "/dashboard/buyers" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60 hover:border-primary/30"
            >
              <action.icon className="h-4 w-4 text-primary" />
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
