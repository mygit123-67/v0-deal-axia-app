"use client"

const clients = [
  "Business Owners",
  "Business Brokers",
  "M&A Advisors",
  "Investment Bankers",
  "Family Offices",
  "PE Firms",
  "Search Fund Operators",
  "Corporate Development",
]

export function TrustMarquee() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted by professionals and business owners across every industry
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="mx-8 inline-flex items-center text-sm font-medium text-muted-foreground"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/50" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
