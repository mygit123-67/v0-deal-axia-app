import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I was about to pay a broker $20,000 to prepare my sale package. Dealaxia let me build a professional CIM and valuation myself in a weekend. My buyer said it was better than most they receive from advisory firms.",
    role: "Business Owner",
    company: "Commercial Services Company, Sold for $2.4M",
  },
  {
    quote:
      "Dealaxia cut our CIM production time from 3 weeks to 2 hours. The quality rivals what we used to pay $15,000 for from outsourced writers.",
    role: "Managing Director",
    company: "Middle Market Advisory Firm",
  },
  {
    quote:
      "The valuation engine with weighted adjustment sliders is exactly what we needed. It accounts for all the qualitative factors that affect multiples.",
    role: "Senior Broker",
    company: "Business Brokerage",
  },
  {
    quote:
      "Being able to generate branded marketing materials for LinkedIn, email, and listing sites from one platform is a game-changer for our deal flow.",
    role: "VP of Business Development",
    company: "PE-Backed Advisory",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Trusted by Owners & Professionals
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            {"What Business Owners & M&A Professionals Are Saying"}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
