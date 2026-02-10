import {
  Download,
  Presentation,
  FileSpreadsheet,
  FileText,
  Megaphone,
} from "lucide-react"

const features = [
  {
    icon: Presentation,
    title: "PowerPoint Generation",
    description: "Server-side template engine exports CIM sections and charts into professional slide decks. Ready for investor presentations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel / CSV Export",
    description: "Export financial models, valuation tables, buyer lists, and pipeline reports as structured spreadsheets.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description: "Print-ready PDFs of every document: CIMs, teasers, valuations, and data room indexes. Branded with your firm's identity.",
  },
  {
    icon: Megaphone,
    title: "AI Marketing Materials",
    description: "Generate platform-specific listing posts for LinkedIn, email campaigns, and listing sites. Branded image templates with financial highlights.",
  },
]

export function ExportSection() {
  return (
    <section id="export" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Download className="h-3.5 w-3.5" />
            {"Productivity & Export"}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Export anything, anywhere, in any format
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            PowerPoint decks for investor meetings, Excel models for due diligence, PDFs for distribution, and AI-generated marketing materials for every channel.
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
