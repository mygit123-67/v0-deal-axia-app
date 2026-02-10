"use client"

import { useState } from "react"
import Link from "next/link"
import { HardDrive, Eye, EyeOff, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <HardDrive className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dealaxia</span>
          </Link>

          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your Dealaxia account
          </p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <a href="#" className="text-xs text-primary hover:text-primary/80">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-sm text-muted-foreground">
              New to Dealaxia?
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Create a free account to start generating investment-grade CIMs and Teasers.
            </p>
            <Link
              href="/register"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
            >
              Create an Account
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden flex-1 items-center justify-center border-l border-border bg-card/50 lg:flex">
        <div className="max-w-md px-12">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <HardDrive className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Deal Workspace</p>
                <p className="text-xs text-muted-foreground">3 active deals</p>
              </div>
            </div>
            {[
              { name: "Acme Corp", stage: "Due Diligence", value: "$4.2M" },
              { name: "Apex Holdings", stage: "Marketing", value: "$8.7M" },
              { name: "Nova Systems", stage: "LOI Negotiation", value: "$2.1M" },
            ].map((deal) => (
              <div
                key={deal.name}
                className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 mb-2 last:mb-0"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{deal.name}</p>
                  <p className="text-xs text-muted-foreground">{deal.stage}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{deal.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
