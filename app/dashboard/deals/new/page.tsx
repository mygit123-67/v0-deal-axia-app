"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronRight,
  Building2,
  DollarSign,
  MapPin,
  Globe,
  Users,
  CalendarDays,
  FileText,
  Sparkles,
  Upload,
  Plus,
  X,
} from "lucide-react"

const industries = [
  "Manufacturing", "Technology", "Healthcare", "Hospitality", "Logistics",
  "Distribution", "Retail", "Construction", "Professional Services", "Food & Beverage",
  "Real Estate", "Agriculture", "Automotive", "Education", "Financial Services",
]

export default function NewDealPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    description: "",
    askingPrice: "",
    revenue: "",
    sde: "",
    ebitda: "",
    location: "",
    website: "",
    employees: "",
    founded: "",
    reason: "",
  })

  const totalSteps = 3

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
            <span className="text-foreground font-medium">New Deal</span>
          </nav>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Create New Deal</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Enter business details to start the M&A process
        </p>

        {/* Progress */}
        <div className="flex items-center gap-3 mt-5">
          {[
            { num: 1, label: "Business Info" },
            { num: 2, label: "Financials" },
            { num: 3, label: "Additional Details" },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                step >= s.num
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}>
                {s.num}
              </div>
              <span className={`text-sm ${step >= s.num ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {s.num < totalSteps && (
                <div className={`h-px w-12 ${step > s.num ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {/* Step 1: Business Info */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h3 className="text-base font-semibold text-foreground">Business Information</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Business Name <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Acme Manufacturing Co."
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-1.5">
                    Industry <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  >
                    <option value="">Select industry</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
                    Business Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Brief description of the business, its products/services, and competitive advantages..."
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="location"
                        type="text"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={(e) => updateField("location", e.target.value)}
                        className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-foreground mb-1.5">
                      Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="website"
                        type="text"
                        placeholder="example.com"
                        value={formData.website}
                        onChange={(e) => updateField("website", e.target.value)}
                        className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Link
                href="/dashboard/deals"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Cancel
              </Link>
              <button
                onClick={() => setStep(2)}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Financials */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h3 className="text-base font-semibold text-foreground">Financial Details</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "askingPrice", label: "Asking Price", placeholder: "$0", icon: DollarSign },
                  { id: "revenue", label: "Annual Revenue", placeholder: "$0", icon: DollarSign },
                  { id: "sde", label: "SDE (Seller Discretionary Earnings)", placeholder: "$0", icon: DollarSign },
                  { id: "ebitda", label: "EBITDA", placeholder: "$0", icon: DollarSign },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-1.5">
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id={field.id}
                        type="text"
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => updateField(field.id, e.target.value)}
                        className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Upload financials */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Upload Financial Documents</p>
                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-background py-10 transition-colors hover:border-primary/30">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-foreground font-medium">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, Excel, CSV -- up to 50MB each
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h3 className="text-base font-semibold text-foreground">Additional Details</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-1.5">
                    Number of Employees
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="employees"
                      type="text"
                      placeholder="e.g. 25"
                      value={formData.employees}
                      onChange={(e) => updateField("employees", e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="founded" className="block text-sm font-medium text-foreground mb-1.5">
                    Year Founded
                  </label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="founded"
                      type="text"
                      placeholder="e.g. 2008"
                      value={formData.founded}
                      onChange={(e) => updateField("founded", e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-1.5">
                  Reason for Selling
                </label>
                <textarea
                  id="reason"
                  rows={3}
                  placeholder="Why is the owner looking to sell?"
                  value={formData.reason}
                  onChange={(e) => updateField("reason", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* AI Generation option */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Auto-generate documents after creation?</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Dealaxia can automatically generate a CIM, Executive Teaser, and Financial Summary using AI based on the information you provide.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                      <Sparkles className="h-4 w-4" />
                      Yes, generate all
                    </button>
                    <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                      Skip for now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Back
              </button>
              <Link
                href="/dashboard/deals"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Create Deal
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
