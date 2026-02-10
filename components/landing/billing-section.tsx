import {
  CreditCard,
  ShoppingCart,
  Settings,
  Webhook,
  ShieldCheck,
  Gauge,
  BarChart,
} from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Stripe Checkout",
    description: "Self-serve sign-up with Stripe Checkout. Secure, fast, and trusted by millions of businesses worldwide.",
  },
  {
    icon: Settings,
    title: "Customer Portal",
    description: "Upgrades, downgrades, payment method changes, and invoice downloads — all handled through Stripe's Customer Portal.",
  },
  {
    icon: Webhook,
    title: "Webhook Sync",
    description: "Real-time subscription sync via webhooks: created, updated, canceled, and payment_failed events keep entitlements current.",
  },
  {
    icon: ShieldCheck,
    title: "Plan Gating",
    description: "Pro, Platinum, and Enterprise tiers. Non-admin users must have an active paid plan or trial to create deals, documents, or data rooms.",
  },
  {
    icon: Gauge,
    title: "Feature Limits",
    description: "Plan-to-feature limit mapping: max deals, max data room size, AI credits, CIM/teaser quotas. Clear and enforceable.",
  },
  {
    icon: BarChart,
    title: "Usage Tracking",
    description: "Per-tenant usage dashboards show plan limits, remaining credits, and upgrade prompts when nearing capacity.",
  },
]

export function BillingSection() {
  return (
    <section id="billing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <CreditCard className="h-3.5 w-3.5" />
            {"Billing & Plans"}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Stripe-powered billing that just works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Self-serve checkout, customer portal, webhook-synced entitlements, and plan-level feature gating. Three tiers designed for every stage of your practice.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
