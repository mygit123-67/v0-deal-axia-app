"use client"

import { useState } from "react"
import Link from "next/link"
import { HardDrive, Eye, EyeOff, ArrowRight, Check } from "lucide-react"

const benefits = [
  "Generate institutional-quality CIMs in hours",
  "5 valuation methods with weighted risk adjustments",
  "Secure virtual data rooms with audit trails",
  "AI-powered blind teasers and marketing materials",
  "Deal pipeline and buyer management",
]

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left - Visual */}
      <div className="hidden flex-1 flex-col justify-center border-r border-border bg-card/50 px-12 lg:flex">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <HardDrive className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dealaxia</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance">
            The AI-powered M&A workspace built for professionals
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Join business owners and M&A professionals who are generating investment-bank quality documents in hours instead of weeks.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-border bg-card p-5">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-1 flex-1 rounded-full bg-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              {"\"Dealaxia cut our CIM production time from 3 weeks to 2 hours. The quality rivals what we used to pay $15,000 for from outsourced writers.\""}
            </p>
            <p className="mt-3 text-xs font-semibold text-foreground">
              Managing Director
            </p>
            <p className="text-xs text-muted-foreground">
              Middle Market Advisory Firm
            </p>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <HardDrive className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Dealaxia</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Start generating investment-grade documents today
          </p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-foreground mb-1.5">
                Work Email
              </label>
              <input
                id="reg-email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                Company / Firm Name
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => updateField("company", e.target.value)}
                className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="Acme Advisory Group"
              />
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className="flex h-10 w-full rounded-lg border border-border bg-secondary/50 px-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Min 8 characters"
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
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-primary hover:text-primary/80">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>.
            </p>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
