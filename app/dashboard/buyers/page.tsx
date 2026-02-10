"use client"

import { useState } from "react"
import {
  Users,
  Search,
  Plus,
  Mail,
  Phone,
  Building2,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  MoreHorizontal,
  Send,
  Eye,
  Filter,
} from "lucide-react"

type Buyer = {
  id: string
  name: string
  company: string
  email: string
  phone: string
  type: "Strategic" | "Financial" | "Individual" | "PE Firm"
  status: "Active" | "NDA Signed" | "NDA Pending" | "Declined" | "LOI Submitted"
  interestedIn: string[]
  lastContact: string
  notes: string
}

const buyers: Buyer[] = [
  { id: "1", name: "Michael Chen", company: "Horizon Capital Partners", email: "mchen@horizoncap.com", phone: "(555) 012-3456", type: "PE Firm", status: "NDA Signed", interestedIn: ["Acme Manufacturing", "Summit Logistics"], lastContact: "1h ago", notes: "Strong interest, requested financials" },
  { id: "2", name: "Sarah Williams", company: "TechVentures Group", email: "swilliams@techventures.com", phone: "(555) 234-5678", type: "Strategic", status: "Active", interestedIn: ["Apex Digital Holdings"], lastContact: "3h ago", notes: "Synergy with existing portfolio" },
  { id: "3", name: "Robert Johnson", company: "Individual Buyer", email: "rjohnson@gmail.com", phone: "(555) 345-6789", type: "Individual", status: "NDA Pending", interestedIn: ["Metro Dental Group"], lastContact: "1d ago", notes: "First-time buyer, SBA pre-qualified" },
  { id: "4", name: "Lisa Park", company: "MedAcquisitions LLC", email: "lpark@medacq.com", phone: "(555) 456-7890", type: "Strategic", status: "LOI Submitted", interestedIn: ["Nova Health Systems"], lastContact: "2h ago", notes: "LOI at $2.1M, favorable terms" },
  { id: "5", name: "James Morrison", company: "Pacific Growth Equity", email: "jmorrison@pacificgrowth.com", phone: "(555) 567-8901", type: "PE Firm", status: "NDA Signed", interestedIn: ["Acme Manufacturing", "Riverside Hospitality"], lastContact: "4h ago", notes: "Platform acquisition strategy" },
  { id: "6", name: "Emily Davis", company: "Davis Family Office", email: "emily@davisfamilyoffice.com", phone: "(555) 678-9012", type: "Financial", status: "Active", interestedIn: ["Summit Logistics"], lastContact: "2d ago", notes: "Passive investor, seeking cash flow" },
  { id: "7", name: "Thomas Wright", company: "Global Hospitality Inc.", email: "twright@globalhosp.com", phone: "(555) 789-0123", type: "Strategic", status: "Declined", interestedIn: ["Riverside Hospitality"], lastContact: "5d ago", notes: "Geographic mismatch" },
  { id: "8", name: "Amanda Foster", company: "FosterBridge Partners", email: "afoster@fosterbridge.com", phone: "(555) 890-1234", type: "PE Firm", status: "NDA Signed", interestedIn: ["Apex Digital Holdings", "Pacific Coast Distributors"], lastContact: "6h ago", notes: "Roll-up strategy in distribution" },
]

const statusConfig: Record<string, { icon: typeof CheckCircle2; color: string; bg: string }> = {
  "Active": { icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10" },
  "NDA Signed": { icon: CheckCircle2, color: "text-chart-2", bg: "bg-chart-2/10" },
  "NDA Pending": { icon: Clock, color: "text-chart-4", bg: "bg-chart-4/10" },
  "LOI Submitted": { icon: CheckCircle2, color: "text-chart-3", bg: "bg-chart-3/10" },
  "Declined": { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" },
}

const typeColors: Record<string, string> = {
  "Strategic": "bg-primary/10 text-primary",
  "Financial": "bg-chart-2/10 text-chart-2",
  "Individual": "bg-chart-4/10 text-chart-4",
  "PE Firm": "bg-chart-3/10 text-chart-3",
}

export default function BuyersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeStatus, setActiveStatus] = useState("All")

  const statuses = ["All", "Active", "NDA Signed", "NDA Pending", "LOI Submitted", "Declined"]

  const filtered = buyers.filter((b) => {
    const matchSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = activeStatus === "All" || b.status === activeStatus
    return matchSearch && matchStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Buyer Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage buyer interactions across all deals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <Send className="h-4 w-4 text-primary" />
            Bulk Email
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Add Buyer
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {[
          { label: "Total Buyers", value: buyers.length.toString(), color: "text-foreground" },
          { label: "Active", value: buyers.filter(b => b.status === "Active").length.toString(), color: "text-primary" },
          { label: "NDA Signed", value: buyers.filter(b => b.status === "NDA Signed").length.toString(), color: "text-chart-2" },
          { label: "LOI Submitted", value: buyers.filter(b => b.status === "LOI Submitted").length.toString(), color: "text-chart-3" },
          { label: "Pending NDA", value: buyers.filter(b => b.status === "NDA Pending").length.toString(), color: "text-chart-4" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                activeStatus === status
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search buyers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-52 rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Buyer cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filtered.map((buyer) => {
          const status = statusConfig[buyer.status]
          return (
            <div
              key={buyer.id}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {buyer.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{buyer.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Building2 className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{buyer.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${typeColors[buyer.type]}`}>
                    {buyer.type}
                  </span>
                  <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <div className={`flex items-center gap-1 rounded-full px-2 py-0.5 ${status.bg}`}>
                  <status.icon className={`h-3 w-3 ${status.color}`} />
                  <span className={`text-[11px] font-medium ${status.color}`}>{buyer.status}</span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {buyer.lastContact}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {buyer.interestedIn.map((deal) => (
                  <span key={deal} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                    {deal}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{buyer.notes}</p>

              <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
                <a
                  href={`mailto:${buyer.email}`}
                  className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  <Mail className="h-3 w-3" />
                  Email
                </a>
                <a
                  href={`tel:${buyer.phone}`}
                  className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  <Phone className="h-3 w-3" />
                  Call
                </a>
                <button className="flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80">
                  <Eye className="h-3 w-3" />
                  View Profile
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
