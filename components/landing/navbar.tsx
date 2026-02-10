"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  Shield,
  BarChart3,
  Briefcase,
  Database,
  CreditCard,
  LineChart,
  Download,
  PenTool,
  HardDrive,
} from "lucide-react"

const features = [
  { name: "Per-Deal Workspaces", href: "#workspaces", icon: Briefcase },
  { name: "AI Document Engine", href: "#documents", icon: FileText },
  { name: "Virtual Data Room", href: "#dataroom", icon: Database },
  { name: "Deal Pipeline", href: "#pipeline", icon: BarChart3 },
  { name: "Usage & Credits", href: "#usage", icon: LineChart },
  { name: "Roles & Permissions", href: "#roles", icon: Shield },
  { name: "Billing & Plans", href: "#billing", icon: CreditCard },
  { name: "Valuation & Market Data", href: "#valuation", icon: LineChart },
  { name: "Export & Productivity", href: "#export", icon: Download },
  { name: "Storage & E-Signature", href: "#storage", icon: PenTool },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <HardDrive className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Dealaxia
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
            </button>
            {featuresOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                <div className="grid w-[480px] grid-cols-2 gap-1 rounded-xl border border-border bg-card p-3 shadow-2xl">
                  {features.map((f) => (
                    <a
                      key={f.name}
                      href={f.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <f.icon className="h-4 w-4 text-primary" />
                      {f.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#pricing" className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#clients" className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            Clients
          </a>
          <a href="#how-it-works" className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Features
            </p>
            {features.map((f) => (
              <a
                key={f.name}
                href={f.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                <f.icon className="h-4 w-4 text-primary" />
                {f.name}
              </a>
            ))}
            <div className="my-2 border-t border-border" />
            <a href="#pricing" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <a href="#how-it-works" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              How It Works
            </a>
            <div className="my-2 border-t border-border" />
            <Link href="/login" className="px-3 py-2 text-sm text-foreground font-medium" onClick={() => setMobileOpen(false)}>
              Sign In
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
