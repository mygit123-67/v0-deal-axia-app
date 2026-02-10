"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  Plus,
  Search,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MoreHorizontal,
  Sparkles,
  Eye,
  File,
  BookOpen,
} from "lucide-react"

type Document = {
  id: string
  name: string
  type: "CIM" | "Teaser" | "NDA" | "LOI" | "Financial Summary" | "Buyer List"
  deal: string
  status: "completed" | "generating" | "draft" | "pending"
  pages: number
  created: string
  lastModified: string
}

const documents: Document[] = [
  { id: "1", name: "Confidential Information Memorandum", type: "CIM", deal: "Acme Manufacturing Co.", status: "completed", pages: 24, created: "Feb 5, 2026", lastModified: "2h ago" },
  { id: "2", name: "Executive Teaser", type: "Teaser", deal: "Acme Manufacturing Co.", status: "completed", pages: 2, created: "Feb 3, 2026", lastModified: "1d ago" },
  { id: "3", name: "Confidential Information Memorandum", type: "CIM", deal: "Apex Digital Holdings", status: "generating", pages: 0, created: "Feb 8, 2026", lastModified: "5m ago" },
  { id: "4", name: "Non-Disclosure Agreement", type: "NDA", deal: "Nova Health Systems", status: "pending", pages: 4, created: "Jan 28, 2026", lastModified: "3d ago" },
  { id: "5", name: "Letter of Intent", type: "LOI", deal: "Nova Health Systems", status: "draft", pages: 3, created: "Feb 1, 2026", lastModified: "1d ago" },
  { id: "6", name: "Financial Summary Report", type: "Financial Summary", deal: "Summit Logistics Group", status: "completed", pages: 8, created: "Feb 6, 2026", lastModified: "6h ago" },
  { id: "7", name: "Executive Teaser", type: "Teaser", deal: "Summit Logistics Group", status: "completed", pages: 2, created: "Feb 4, 2026", lastModified: "2d ago" },
  { id: "8", name: "Qualified Buyer List", type: "Buyer List", deal: "Riverside Hospitality Inc.", status: "completed", pages: 6, created: "Jan 15, 2026", lastModified: "5d ago" },
]

const statusConfig = {
  completed: { icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10", label: "Completed" },
  generating: { icon: Loader2, color: "text-chart-4", bg: "bg-chart-4/10", label: "Generating..." },
  draft: { icon: File, color: "text-chart-2", bg: "bg-chart-2/10", label: "Draft" },
  pending: { icon: AlertCircle, color: "text-chart-3", bg: "bg-chart-3/10", label: "Pending" },
}

const typeIcons: Record<string, typeof FileText> = {
  CIM: BookOpen,
  Teaser: Sparkles,
  NDA: FileText,
  LOI: FileText,
  "Financial Summary": FileText,
  "Buyer List": FileText,
}

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeType, setActiveType] = useState("All")

  const types = ["All", "CIM", "Teaser", "NDA", "LOI", "Financial Summary", "Buyer List"]

  const filtered = documents.filter((doc) => {
    const matchSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.deal.toLowerCase().includes(searchQuery.toLowerCase())
    const matchType = activeType === "All" || doc.type === activeType
    return matchSearch && matchType
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Documents</h1>
          <p className="text-sm text-muted-foreground mt-1">
            AI-generated CIMs, Teasers, NDAs, and more
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <Sparkles className="h-4 w-4 text-primary" />
            Generate with AI
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Upload
          </button>
        </div>
      </div>

      {/* AI Generation Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Generate CIM", desc: "AI-powered 20+ page Confidential Information Memorandum", icon: BookOpen, color: "text-primary" },
          { title: "Generate Teaser", desc: "Professional blind executive teaser for buyer outreach", icon: Sparkles, color: "text-chart-4" },
          { title: "Financial Summary", desc: "Comprehensive financial analysis and projections report", icon: FileText, color: "text-chart-2" },
        ].map((card) => (
          <button
            key={card.title}
            className="flex items-start gap-4 rounded-xl border border-dashed border-border bg-card p-5 text-left transition-all hover:border-primary/30 hover:bg-secondary/20"
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary`}>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{card.title}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{card.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                activeType === type
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-52 rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Documents table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px] gap-4 border-b border-border bg-secondary/30 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>Document</span>
          <span>Deal</span>
          <span>Type</span>
          <span>Status</span>
          <span>Modified</span>
          <span>Actions</span>
        </div>
        <div className="divide-y divide-border">
          {filtered.map((doc) => {
            const status = statusConfig[doc.status]
            const TypeIcon = typeIcons[doc.type] || FileText
            return (
              <div
                key={doc.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_80px] gap-4 items-center px-5 py-4 transition-colors hover:bg-secondary/20"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <TypeIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{doc.name}</p>
                    {doc.pages > 0 && (
                      <p className="text-xs text-muted-foreground">{doc.pages} pages</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground truncate">{doc.deal}</p>
                <span className="text-sm text-muted-foreground">{doc.type}</span>
                <div className="flex items-center gap-1.5">
                  <status.icon className={`h-3.5 w-3.5 ${status.color} ${doc.status === "generating" ? "animate-spin" : ""}`} />
                  <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {doc.lastModified}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Preview"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
