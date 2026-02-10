"use client"

import {
  CreditCard,
  Check,
  Sparkles,
  Zap,
  Crown,
  FileText,
  Download,
  ArrowUpRight,
  Calendar,
} from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For independent brokers getting started",
    features: [
      "Up to 5 active deals",
      "AI CIM & Teaser generation",
      "Basic valuation tools",
      "1 GB storage",
      "Email support",
    ],
    current: false,
    icon: Zap,
  },
  {
    name: "Professional",
    price: "$249",
    period: "/month",
    description: "For growing M&A advisory practices",
    features: [
      "Up to 25 active deals",
      "Advanced AI document engine",
      "Full valuation suite (4 methods)",
      "Virtual data room",
      "Buyer CRM & pipeline",
      "10 GB storage",
      "Priority support",
    ],
    current: true,
    icon: Sparkles,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "/month",
    description: "For teams and established firms",
    features: [
      "Unlimited active deals",
      "Custom branded documents",
      "White-label data rooms",
      "Multi-user team access",
      "API access",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom integrations",
    ],
    current: false,
    icon: Crown,
  },
]

const invoices = [
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$249.00", status: "Paid" },
  { id: "INV-2025-011", date: "Nov 1, 2025", amount: "$249.00", status: "Paid" },
  { id: "INV-2025-010", date: "Oct 1, 2025", amount: "$99.00", status: "Paid" },
]

export default function BillingPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Billing</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your subscription and payment methods</p>
      </div>

      {/* Current Plan Banner */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-foreground">Professional Plan</p>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">$249/month -- Next billing date: March 1, 2026</p>
            </div>
          </div>
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Usage */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Active Deals", used: "12", total: "25", percent: 48 },
          { label: "Storage Used", used: "3.2 GB", total: "10 GB", percent: 32 },
          { label: "AI Generations", used: "34", total: "100", percent: 34 },
          { label: "Team Members", used: "1", total: "1", percent: 100 },
        ].map((usage) => (
          <div key={usage.label} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground">{usage.label}</p>
              <p className="text-xs text-muted-foreground">{usage.used} / {usage.total}</p>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div
                className={`h-full rounded-full transition-all ${usage.percent > 80 ? "bg-chart-4" : "bg-primary"}`}
                style={{ width: `${usage.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Plans */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4">Available Plans</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.current
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <plan.icon className={`h-5 w-5 ${plan.current ? "text-primary" : "text-muted-foreground"}`} />
                  <h4 className="text-base font-semibold text-foreground">{plan.name}</h4>
                </div>
                {plan.current && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Current
                  </span>
                )}
                {plan.popular && !plan.current && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Popular
                  </span>
                )}
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                  plan.current
                    ? "border border-primary/30 text-primary cursor-default"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-foreground">Payment Method</h3>
          <button className="text-sm text-primary font-medium hover:text-primary/80">Update</button>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Visa ending in 4242</p>
            <p className="text-xs text-muted-foreground">Expires 12/2027</p>
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-base font-semibold text-foreground">Invoice History</h3>
          <button className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80">
            <Download className="h-4 w-4" />
            Download All
          </button>
        </div>
        <div className="divide-y divide-border">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">{inv.id}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {inv.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">{inv.amount}</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                  {inv.status}
                </span>
                <button className="text-muted-foreground hover:text-foreground" aria-label="Download invoice">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
