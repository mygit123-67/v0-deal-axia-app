"use client"

import { useState } from "react"
import {
  FolderOpen,
  File,
  FileText,
  Image,
  Table2,
  Upload,
  Plus,
  Search,
  Lock,
  Eye,
  Download,
  Clock,
  ChevronRight,
  Shield,
  Users,
  MoreHorizontal,
  FolderPlus,
  ArrowUpRight,
} from "lucide-react"

type DataRoomItem = {
  id: string
  name: string
  type: "folder" | "pdf" | "doc" | "spreadsheet" | "image"
  size?: string
  items?: number
  lastModified: string
  accessLevel: "All Buyers" | "NDA Only" | "Restricted"
  deal: string
}

const dataRoomItems: DataRoomItem[] = [
  { id: "1", name: "Financial Statements", type: "folder", items: 12, lastModified: "2h ago", accessLevel: "NDA Only", deal: "Acme Manufacturing" },
  { id: "2", name: "Tax Returns (3 years)", type: "folder", items: 9, lastModified: "1d ago", accessLevel: "NDA Only", deal: "Acme Manufacturing" },
  { id: "3", name: "Customer Contracts", type: "folder", items: 24, lastModified: "3d ago", accessLevel: "Restricted", deal: "Acme Manufacturing" },
  { id: "4", name: "Employee Roster & Benefits", type: "folder", items: 6, lastModified: "5d ago", accessLevel: "Restricted", deal: "Acme Manufacturing" },
  { id: "5", name: "2025 P&L Statement.pdf", type: "pdf", size: "1.2 MB", lastModified: "2h ago", accessLevel: "NDA Only", deal: "Acme Manufacturing" },
  { id: "6", name: "Quality-of-Earnings.xlsx", type: "spreadsheet", size: "4.8 MB", lastModified: "1d ago", accessLevel: "Restricted", deal: "Acme Manufacturing" },
  { id: "7", name: "Lease Agreement.pdf", type: "pdf", size: "890 KB", lastModified: "1w ago", accessLevel: "All Buyers", deal: "Acme Manufacturing" },
  { id: "8", name: "Equipment List.xlsx", type: "spreadsheet", size: "340 KB", lastModified: "2d ago", accessLevel: "NDA Only", deal: "Acme Manufacturing" },
  { id: "9", name: "Property Photos", type: "folder", items: 18, lastModified: "1w ago", accessLevel: "All Buyers", deal: "Acme Manufacturing" },
  { id: "10", name: "CIM - Acme Manufacturing.pdf", type: "pdf", size: "8.2 MB", lastModified: "3d ago", accessLevel: "NDA Only", deal: "Acme Manufacturing" },
]

const accessColors: Record<string, { bg: string; text: string; icon: typeof Shield }> = {
  "All Buyers": { bg: "bg-primary/10", text: "text-primary", icon: Users },
  "NDA Only": { bg: "bg-chart-4/10", text: "text-chart-4", icon: Lock },
  "Restricted": { bg: "bg-destructive/10", text: "text-destructive", icon: Shield },
}

const typeIcons: Record<string, { icon: typeof File; color: string }> = {
  folder: { icon: FolderOpen, color: "text-chart-4" },
  pdf: { icon: FileText, color: "text-destructive" },
  doc: { icon: File, color: "text-chart-2" },
  spreadsheet: { icon: Table2, color: "text-primary" },
  image: { icon: Image, color: "text-chart-3" },
}

export default function DataRoomPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDeal, setSelectedDeal] = useState("Acme Manufacturing")

  const deals = ["Acme Manufacturing", "Apex Digital Holdings", "Nova Health Systems", "Summit Logistics"]

  const filtered = dataRoomItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Virtual Data Room</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Secure document sharing with access controls
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <FolderPlus className="h-4 w-4 text-primary" />
            New Folder
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Upload className="h-4 w-4" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total Files", value: "156", icon: File },
          { label: "Folders", value: "24", icon: FolderOpen },
          { label: "Storage Used", value: "2.4 GB", icon: Shield },
          { label: "Active Viewers", value: "8", icon: Eye },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Deal selector & search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {deals.map((deal) => (
            <button
              key={deal}
              onClick={() => setSelectedDeal(deal)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedDeal === deal
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {deal}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-52 rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <button className="hover:text-foreground transition-colors">Data Room</button>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{selectedDeal}</span>
      </div>

      {/* Files list */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_80px] gap-4 border-b border-border bg-secondary/30 px-5 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>Name</span>
          <span>Access Level</span>
          <span>Size / Items</span>
          <span>Modified</span>
          <span>Actions</span>
        </div>
        <div className="divide-y divide-border">
          {filtered.map((item) => {
            const typeConfig = typeIcons[item.type]
            const access = accessColors[item.accessLevel]
            return (
              <div
                key={item.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_80px] gap-4 items-center px-5 py-3.5 transition-colors hover:bg-secondary/20 cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <typeConfig.icon className={`h-5 w-5 shrink-0 ${typeConfig.color}`} />
                  <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
                </div>
                <div>
                  <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${access.bg}`}>
                    <access.icon className={`h-3 w-3 ${access.text}`} />
                    <span className={`text-[11px] font-medium ${access.text}`}>{item.accessLevel}</span>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.type === "folder" ? `${item.items} items` : item.size}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.lastModified}
                </span>
                <div className="flex items-center gap-1">
                  {item.type !== "folder" && (
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      aria-label="Download"
                    >
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="More options"
                  >
                    <MoreHorizontal className="h-3.5 w-3.5" />
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
