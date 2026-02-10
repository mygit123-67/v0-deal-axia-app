import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-12 lg:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="relative text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Stop Spending Weeks on CIMs. Start Closing Deals.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Join business owners and M&A professionals who are generating investment-bank quality documents in hours instead of weeks. See it in action with our interactive demo.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}
