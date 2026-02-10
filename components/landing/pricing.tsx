"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Pro",
    monthlyPrice: "$149",
    yearlyPrice: "$1,490",
    yearlySave: "save ~17%",
    description:
      "For business owners or solo brokers with 1-3 active deals per year.",
    features: [
      "1 AI-generated CIM per month",
      "1 AI-generated Teaser per month",
      "All 5 valuation methods + custom models",
      "3-year financial side-by-side",
      "20 AI marketing posts per month",
      "1 active deal room",
      "Team collaboration & permissions",
      "PDF export & standard storage",
      "Email support",
    ],
    annual: "12 CIMs & 12 Teasers per year",
    extra: "$79 per extra CIM + Teaser bundle",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Platinum",
    monthlyPrice: "$399",
    yearlyPrice: "$3,990",
    yearlySave: "save ~17%",
    description:
      "For active deal teams and boutique M&A firms running 6-12+ deals per year.",
    features: [
      "4 AI-generated CIMs per month",
      "4 AI-generated Teasers per month",
      "All 5 valuation methods + custom models",
      "5-year financials & scenario modeling",
      "Unlimited AI marketing posts",
      "Up to 5 concurrent deal rooms",
      "Custom firm branding on all docs",
      "Team collaboration & permissions",
      "Expanded data room storage",
      "Priority support",
    ],
    annual: "48 CIMs & 48 Teasers per year",
    extra: "$59 per extra CIM + Teaser bundle",
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "$10,000+",
    yearlySave: "",
    description:
      "For large firms and platforms with custom volume and workflow needs.",
    features: [
      "Custom CIM & Teaser limits",
      "All 5 valuation methods + custom models",
      "5-year financials & scenario modeling",
      "Unlimited AI marketing posts",
      "Unlimited concurrent deal rooms",
      "Custom firm branding on all docs",
      "Team collaboration & permissions",
      "API access for integrations",
      "SSO & dedicated environment",
      "Dedicated success manager",
      "Custom onboarding & training",
    ],
    annual: "Custom volume",
    extra: "Negotiated in contract",
    popular: false,
    cta: "Contact Sales",
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Pricing That Scales with Your Practice
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Transparent pricing. Cancel anytime. Try the interactive demo before you commit.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-6 w-11 rounded-full transition-colors ${annual ? "bg-primary" : "bg-border"}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-foreground transition-transform ${annual ? "translate-x-5.5" : "translate-x-0.5"}`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Annual
          </span>
          {annual && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Save ~17%
            </span>
          )}
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.name === "Enterprise"
                      ? "Custom"
                      : annual
                        ? plan.yearlyPrice
                        : plan.monthlyPrice}
                  </span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-sm text-muted-foreground">
                      {annual ? "/yr" : "/mo"}
                    </span>
                  )}
                </div>
                {annual && plan.yearlySave && plan.name !== "Enterprise" && (
                  <p className="mt-1 text-xs text-primary">
                    {plan.yearlyPrice}/yr billed annually ({plan.yearlySave})
                  </p>
                )}
                {plan.name === "Enterprise" && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Starting at {plan.yearlyPrice}/yr
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Annual output at full use</span>
                  <span className="font-medium text-foreground">{plan.annual}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Need more?</span>
                  <span className="font-medium text-foreground">{plan.extra}</span>
                </div>
              </div>

              <Link
                href={plan.cta === "Contact Sales" ? "#contact" : "/register"}
                className={`mt-6 flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
