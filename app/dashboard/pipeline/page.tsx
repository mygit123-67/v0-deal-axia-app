"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Building2,
  DollarSign,
  Clock,
  GripVertical,
  Plus,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react"

type PipelineDeal = {
  id: string
  name: string
  industry: string
  value: string
  lastActivity: string
}

type PipelineStage = {
  id: string
  name: string
  color: string
  dotColor: string
  deals: PipelineDeal[]
  totalValue: string
}

const pipelineData: PipelineStage[] = [
  {
    id: "listing-prep",
    name: "Listing Prep",
    color: "border-t-chart-2",
    dotColor: "bg-chart-2",
    totalValue: "$17.6M",
    deals: [
      { id: "4", name: "Summit Logistics Group", industry: "Logistics", value: "$12.5M", lastActivity: "2d ago" },
      { id: "7", name: "Greenfield Agriculture", industry: "Agriculture", value: "$5.1M", lastActivity: "1d ago" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    color: "border-t-primary",
    dotColor: "bg-primary",
    totalValue: "$12.5M",
    deals: [
      { id: "2", name: "Apex Digital Holdings", industry: "Technology", value: "$8.7M", lastActivity: "5h ago" },
      { id: "6", name: "Pacific Coast Distributors", industry: "Distribution", value: "$3.8M", lastActivity: "4h ago" },
    ],
  },
  {
    id: "due-diligence",
    name: "Due Diligence",
    color: "border-t-chart-4",
    dotColor: "bg-chart-4",
    totalValue: "$6.1M",
    deals: [
      { id: "1", name: "Acme Manufacturing Co.", industry: "Manufacturing", value: "$4.2M", lastActivity: "2h ago" },
      { id: "8", name: "Metro Dental Group", industry: "Healthcare", value: "$1.9M", lastActivity: "6h ago" },
    ],
  },
  {
    id: "loi-negotiation",
    name: "LOI / Negotiation",
    color: "border-t-chart-3",
    dotColor: "bg-chart-3",
    totalValue: "$2.1M",
    deals: [
      { id: "3", name: "Nova Health Systems", industry: "Healthcare", value: "$2.1M", lastActivity: "1d ago" },
    ],
  },
  {
    id: "closing",
    name: "Closing",
    color: "border-t-chart-5",
    dotColor: "bg-chart-5",
    totalValue: "$6.3M",
    deals: [
      { id: "5", name: "Riverside Hospitality", industry: "Hospitality", value: "$6.3M", lastActivity: "3h ago" },
    ],
  },
]

export default function PipelinePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Deal Pipeline</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Kanban view of your deal stages
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Total Pipeline:</span>
            <span className="text-sm font-bold text-foreground">$44.6M</span>
          </div>
          <Link
            href="/dashboard/deals/new"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            New Deal
          </Link>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {pipelineData.map((stage) => (
          <div
            key={stage.id}
            className={`flex w-72 shrink-0 flex-col rounded-xl border border-border border-t-2 bg-card ${stage.color}`}
          >
            {/* Stage header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${stage.dotColor}`} />
                <h3 className="text-sm font-semibold text-foreground">{stage.name}</h3>
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1.5 text-[10px] font-medium text-muted-foreground">
                  {stage.deals.length}
                </span>
              </div>
              <button className="text-muted-foreground hover:text-foreground" aria-label="Stage options">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            {/* Stage total */}
            <div className="px-4 py-2 border-b border-border/50">
              <p className="text-xs text-muted-foreground">
                Total: <span className="font-semibold text-foreground">{stage.totalValue}</span>
              </p>
            </div>

            {/* Deal cards */}
            <div className="flex-1 p-3 space-y-2">
              {stage.deals.map((deal) => (
                <Link
                  key={deal.id}
                  href={`/dashboard/deals/${deal.id}`}
                  className="group block rounded-lg border border-border bg-background p-3 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary">
                        <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{deal.name}</p>
                        <p className="text-[11px] text-muted-foreground">{deal.industry}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">{deal.value}</span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Clock className="h-2.5 w-2.5" />
                      {deal.lastActivity}
                    </span>
                  </div>
                </Link>
              ))}

              {/* Add deal button */}
              <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-border py-2.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                <Plus className="h-3.5 w-3.5" />
                Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
