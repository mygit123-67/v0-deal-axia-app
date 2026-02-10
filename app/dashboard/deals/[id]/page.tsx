"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Building2,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  Database,
  Settings,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  Download,
  Eye,
  Plus,
  MoreHorizontal,
  ChevronRight,
  Lock,
  Shield,
  ExternalLink,
  Edit3,
  BarChart3,
  BookOpen,
  FolderOpen,
  Table2,
  Image,
  Upload,
  CalendarDays,
  Globe,
  MapPin,
  User2,
  Target,
  Percent,
} from "lucide-react"

const dealData: Record<string, {
  name: string
  industry: string
  stage: string
  stageColor: string
  value: string
  revenue: string
  sde: string
  ebitda: string
  location: string
  employees: string
  founded: string
  website: string
  description: string
  progress: number
  lastActivity: string
}> = {
  "1": {
    name: "Acme Manufacturing Co.",
    industry: "Manufacturing",
    stage: "Due Diligence",
    stageColor: "bg-chart-4/10 text-chart-4",
    value: "$4.2M",
    revenue: "$1.8M",
    sde: "$620K",
    ebitda: "$540K",
    location: "Austin, TX",
    employees: "42",
    founded: "2008",
    website: "acmemfg.com",
    description: "Leading regional manufacturer of precision metal components serving aerospace and automotive industries. Strong customer relationships with 15+ year contracts. ISO 9001:2015 certified with proprietary tooling and processes.",
    progress: 65,
    lastActivity: "2 hours ago",
  },
  "2": {
    name: "Apex Digital Holdings",
    industry: "Technology",
    stage: "Marketing",
    stageColor: "bg-primary/10 text-primary",
    value: "$8.7M",
    revenue: "$3.2M",
    sde: "$1.1M",
    ebitda: "$980K",
    location: "San Francisco, CA",
    employees: "28",
    founded: "2015",
    website: "apexdigital.io",
    description: "SaaS platform providing digital marketing automation for mid-market enterprises. Recurring revenue model with 94% customer retention rate. Scalable cloud infrastructure with significant growth potential.",
    progress: 35,
    lastActivity: "5 hours ago",
  },
}

const defaultDeal = {
  name: "Business Listing",
  industry: "General",
  stage: "Listing Prep",
  stageColor: "bg-chart-2/10 text-chart-2",
  value: "$2.5M",
  revenue: "$1.2M",
  sde: "$450K",
  ebitda: "$380K",
  location: "New York, NY",
  employees: "15",
  founded: "2012",
  website: "example.com",
  description: "A well-established business with strong fundamentals and growth potential. Detailed information available upon NDA execution.",
  progress: 20,
  lastActivity: "1 day ago",
}

const tabs = [
  { id: "overview", label: "Overview", icon: Building2 },
  { id: "financials", label: "Financials", icon: DollarSign },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "buyers", label: "Buyers", icon: Users },
  { id: "dataroom", label: "Data Room", icon: Database },
  { id: "valuation", label: "Valuation", icon: TrendingUp },
]

const dealDocuments = [
  { id: "1", name: "Confidential Information Memorandum", type: "CIM", status: "completed", pages: 24, modified: "2h ago" },
  { id: "2", name: "Executive Teaser", type: "Teaser", status: "completed", pages: 2, modified: "1d ago" },
  { id: "3", name: "Non-Disclosure Agreement", type: "NDA", status: "completed", pages: 4, modified: "3d ago" },
  { id: "4", name: "Financial Summary Report", type: "Financial", status: "draft", pages: 8, modified: "6h ago" },
]

const dealBuyers = [
  { id: "1", name: "Michael Chen", company: "Horizon Capital Partners", type: "PE Firm", status: "NDA Signed", lastContact: "1h ago" },
  { id: "2", name: "Amanda Foster", company: "FosterBridge Partners", type: "PE Firm", status: "NDA Signed", lastContact: "6h ago" },
  { id: "3", name: "James Morrison", company: "Pacific Growth Equity", type: "PE Firm", status: "NDA Signed", lastContact: "4h ago" },
]

const dataroomFiles = [
  { id: "1", name: "Financial Statements", type: "folder", items: 12, access: "NDA Only", modified: "2h ago" },
  { id: "2", name: "Tax Returns (3 years)", type: "folder", items: 9, access: "NDA Only", modified: "1d ago" },
  { id: "3", name: "2025 P&L Statement.pdf", type: "pdf", size: "1.2 MB", access: "NDA Only", modified: "2h ago" },
  { id: "4", name: "Equipment List.xlsx", type: "spreadsheet", size: "340 KB", access: "NDA Only", modified: "2d ago" },
  { id: "5", name: "Lease Agreement.pdf", type: "pdf", size: "890 KB", access: "All Buyers", modified: "1w ago" },
]

const financialData = {
  annual: [
    { year: "2023", revenue: "$1.42M", cogs: "$710K", grossProfit: "$710K", opex: "$280K", netIncome: "$430K", sde: "$520K", ebitda: "$460K" },
    { year: "2024", revenue: "$1.62M", cogs: "$778K", grossProfit: "$842K", opex: "$310K", netIncome: "$532K", sde: "$580K", ebitda: "$510K" },
    { year: "2025", revenue: "$1.80M", cogs: "$828K", grossProfit: "$972K", opex: "$340K", netIncome: "$632K", sde: "$620K", ebitda: "$540K" },
  ],
  kpis: [
    { label: "Gross Margin", value: "54%", trend: "+2%" },
    { label: "EBITDA Margin", value: "30%", trend: "+1.5%" },
    { label: "Revenue Growth", value: "11.1%", trend: "+3.2%" },
    { label: "Customer Retention", value: "96%", trend: "+1%" },
    { label: "Debt/EBITDA", value: "0.8x", trend: "-0.2x" },
    { label: "Working Capital", value: "$320K", trend: "+$40K" },
  ],
}

const valuationMethods = [
  { method: "SDE Multiple", multiple: "6.8x", basis: "$620K SDE", value: "$4.22M", confidence: "High" },
  { method: "EBITDA Multiple", multiple: "7.8x", basis: "$540K EBITDA", value: "$4.21M", confidence: "High" },
  { method: "Revenue Multiple", multiple: "2.3x", basis: "$1.8M Revenue", value: "$4.14M", confidence: "Medium" },
  { method: "DCF Analysis", multiple: "N/A", basis: "10yr projection", value: "$4.35M", confidence: "Medium" },
]

export default function DealDetailPage() {
  const params = useParams()
  const id = params.id as string
  const deal = dealData[id] || defaultDeal
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="border-b border-border bg-card px-6 py-5">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/dashboard/deals"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Back to deals"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/dashboard/deals" className="hover:text-foreground transition-colors">Deals</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{deal.name}</span>
          </nav>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <Building2 className="h-7 w-7 text-muted-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">{deal.name}</h1>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${deal.stageColor}`}>
                  {deal.stage}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-1.5">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {deal.location}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Globe className="h-3.5 w-3.5" />
                  {deal.website}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <User2 className="h-3.5 w-3.5" />
                  {deal.employees} employees
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Founded {deal.founded}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              <Edit3 className="h-4 w-4" />
              Edit
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <Sparkles className="h-4 w-4" />
              Generate CIM
            </button>
          </div>
        </div>

        {/* Key metrics bar */}
        <div className="grid grid-cols-5 gap-4 mt-5">
          {[
            { label: "Asking Price", value: deal.value, icon: Target },
            { label: "Revenue", value: deal.revenue, icon: DollarSign },
            { label: "SDE", value: deal.sde, icon: TrendingUp },
            { label: "EBITDA", value: deal.ebitda, icon: BarChart3 },
            { label: "Progress", value: `${deal.progress}%`, icon: Percent },
          ].map((metric) => (
            <div key={metric.label} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
              <metric.icon className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-sm font-bold text-foreground">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mt-5 -mb-[1px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-t-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-border border-b-background bg-background text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? "text-primary" : ""}`} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-3">Business Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{deal.description}</p>
                </div>

                {/* Timeline */}
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-4">Deal Timeline</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Deal Created", date: "Jan 15, 2026", status: "done" },
                      { label: "Financials Uploaded", date: "Jan 18, 2026", status: "done" },
                      { label: "CIM Generated", date: "Feb 3, 2026", status: "done" },
                      { label: "Teaser Distributed", date: "Feb 5, 2026", status: "done" },
                      { label: "Due Diligence Started", date: "Feb 7, 2026", status: "current" },
                      { label: "LOI Expected", date: "Feb 28, 2026", status: "upcoming" },
                      { label: "Target Close", date: "Apr 15, 2026", status: "upcoming" },
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          step.status === "done"
                            ? "bg-primary/10"
                            : step.status === "current"
                              ? "bg-chart-4/10"
                              : "bg-secondary"
                        }`}>
                          {step.status === "done" ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          ) : step.status === "current" ? (
                            <Clock className="h-3.5 w-3.5 text-chart-4" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"} font-medium`}>
                            {step.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    {[
                      { label: "Generate CIM", icon: BookOpen, color: "text-primary" },
                      { label: "Generate Teaser", icon: Sparkles, color: "text-chart-4" },
                      { label: "Run Valuation", icon: TrendingUp, color: "text-chart-2" },
                      { label: "Share Data Room", icon: ExternalLink, color: "text-chart-3" },
                    ].map((action) => (
                      <button
                        key={action.label}
                        className="flex w-full items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
                      >
                        <action.icon className={`h-4 w-4 ${action.color}`} />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { text: "CIM generated successfully", time: "2h ago", icon: CheckCircle2, color: "text-primary" },
                      { text: "3 new buyer inquiries", time: "5h ago", icon: Users, color: "text-chart-2" },
                      { text: "Financials updated", time: "1d ago", icon: DollarSign, color: "text-chart-4" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <item.icon className={`h-4 w-4 mt-0.5 shrink-0 ${item.color}`} />
                        <div>
                          <p className="text-sm text-foreground">{item.text}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === "financials" && (
          <div className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {financialData.kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs text-muted-foreground">{kpi.label}</p>
                  <p className="text-xl font-bold text-foreground mt-1">{kpi.value}</p>
                  <p className="text-xs text-primary mt-0.5">{kpi.trend}</p>
                </div>
              ))}
            </div>

            {/* Financial table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h3 className="text-base font-semibold text-foreground">Income Statement Summary</h3>
                <button className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80">
                  <Download className="h-4 w-4" />
                  Export
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Metric</th>
                      {financialData.annual.map((year) => (
                        <th key={year.year} className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {year.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {["revenue", "cogs", "grossProfit", "opex", "netIncome", "sde", "ebitda"].map((key) => (
                      <tr key={key} className={`${key === "grossProfit" || key === "netIncome" || key === "ebitda" ? "bg-secondary/10 font-semibold" : ""}`}>
                        <td className="px-5 py-3 text-sm text-foreground capitalize">
                          {key === "cogs" ? "COGS" : key === "grossProfit" ? "Gross Profit" : key === "opex" ? "Operating Expenses" : key === "netIncome" ? "Net Income" : key === "sde" ? "SDE" : key === "ebitda" ? "EBITDA" : "Revenue"}
                        </td>
                        {financialData.annual.map((year) => (
                          <td key={year.year} className="px-5 py-3 text-right text-sm text-foreground">
                            {year[key as keyof typeof year]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === "documents" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Deal Documents</h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Generate with AI
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Upload
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
              {dealDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between px-5 py-4 hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type} -- {doc.pages} pages -- {doc.modified}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      doc.status === "completed" ? "bg-primary/10 text-primary" : "bg-chart-2/10 text-chart-2"
                    }`}>
                      {doc.status === "completed" ? <CheckCircle2 className="h-3 w-3" /> : <Edit3 className="h-3 w-3" />}
                      {doc.status === "completed" ? "Completed" : "Draft"}
                    </span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary" aria-label="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary" aria-label="Download">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Buyers Tab */}
        {activeTab === "buyers" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Interested Buyers ({dealBuyers.length})</h3>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Buyer
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {dealBuyers.map((buyer) => (
                <div key={buyer.id} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {buyer.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{buyer.name}</p>
                        <p className="text-xs text-muted-foreground">{buyer.company}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-chart-2/10 px-2.5 py-0.5 text-[11px] font-medium text-chart-2">
                      {buyer.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{buyer.type}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {buyer.lastContact}
                    </span>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary" aria-label="Email">
                        <Mail className="h-3.5 w-3.5" />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary" aria-label="Call">
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Room Tab */}
        {activeTab === "dataroom" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Data Room Files</h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                  <FolderOpen className="h-4 w-4 text-primary" />
                  New Folder
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  <Upload className="h-4 w-4" />
                  Upload
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
              {dataroomFiles.map((file) => {
                const isFolder = file.type === "folder"
                const accessColor = file.access === "NDA Only"
                  ? "bg-chart-4/10 text-chart-4"
                  : "bg-primary/10 text-primary"
                return (
                  <div key={file.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-secondary/20 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      {isFolder ? (
                        <FolderOpen className="h-5 w-5 text-chart-4" />
                      ) : file.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-destructive" />
                      ) : (
                        <Table2 className="h-5 w-5 text-primary" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {isFolder ? `${file.items} items` : file.size} -- {file.modified}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${accessColor}`}>
                        <Lock className="h-3 w-3" />
                        {file.access}
                      </span>
                      <button className="text-muted-foreground hover:text-foreground" aria-label="More options">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Valuation Tab */}
        {activeTab === "valuation" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Valuation Analysis</h3>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <Sparkles className="h-4 w-4" />
                Run AI Valuation
              </button>
            </div>

            {/* Valuation summary */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Fair Market Value</p>
                  <p className="text-3xl font-bold text-foreground">$4.23M</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on a weighted average of multiple valuation methodologies. The asking price of {deal.value} represents a fair valuation relative to industry benchmarks and comparable transactions.
              </p>
            </div>

            {/* Methods */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valuationMethods.map((v) => (
                <div key={v.method} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-foreground">{v.method}</h4>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      v.confidence === "High" ? "bg-primary/10 text-primary" : "bg-chart-4/10 text-chart-4"
                    }`}>
                      {v.confidence} Confidence
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{v.value}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    {v.multiple !== "N/A" && <span>Multiple: {v.multiple}</span>}
                    <span>Basis: {v.basis}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
