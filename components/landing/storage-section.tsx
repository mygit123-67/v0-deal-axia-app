import {
  HardDrive,
  Cloud,
  PenTool,
  Activity,
  Workflow,
} from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "All document uploads stored securely in S3/Supabase storage, tied to tenant and deal IDs. Versioning and access controls included.",
  },
  {
    icon: PenTool,
    title: "E-Signature Integration",
    description: "DocuSign (or similar) for NDAs, LOIs, and closing documents. Send, track, and manage signatures without leaving the platform.",
  },
  {
    icon: Activity,
    title: "Status Tracking",
    description: "Real-time signature status: sent, viewed, signed. Automated reminders and audit trail for every document requiring execution.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Trigger signature requests from deal milestones. Auto-file executed documents back into the data room upon completion.",
  },
]

export function StorageSection() {
  return (
    <section id="storage" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <HardDrive className="h-3.5 w-3.5" />
            {"Storage & E-Signature"}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Secure storage and electronic signatures, built in
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Enterprise-grade cloud storage tied to every tenant and deal. Integrated e-signature workflows for NDAs, LOIs, and closing docs — with full status tracking from sent to signed.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
