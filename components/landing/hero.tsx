"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

const stats = [
  { value: "20+", label: "Page CIMs" },
  { value: "5", label: "Valuation Methods" },
  { value: "11", label: "Risk Adjustment Factors" },
  { value: "6", label: "Marketing Platforms" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Purpose-built for business owners & M&A professionals
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Run a professional-grade M&A process{" "}
          <span className="text-primary">without a full investment bank</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground text-pretty">
          Dealaxia is an AI-powered deal execution workspace that packages your business, manages buyers, and organizes diligence from first teaser to closing, so you stop losing value to a broken process.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/register"
            className="group flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Try Interactive Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#how-it-works"
            className="group flex h-12 items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Play className="h-4 w-4 text-primary" />
            Book a Live Demo
          </a>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Explore a fully loaded demo account instantly. No signup required.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
            >
              <span className="text-3xl font-bold text-primary lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
