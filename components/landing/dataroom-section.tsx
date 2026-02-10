import {
  Database,
  FolderTree,
  ShieldCheck,
  FileSearch,
  MessageSquare,
} from "lucide-react"

const features = [
  {
    icon: FolderTree,
    title: "Folder Structure & Upload",
    description:
      "Nested folders, bulk upload, and drag-and-drop organization. Automated indexing and numbering of every folder and file.",
  },
  {
    icon: ShieldCheck,
    title: "Granular Permissions",
    description:
      "Per-user and per-group access controls on every folder. View, download, and print restrictions with document watermarking and expiry.",
  },
  {
    icon: FileSearch,
    title: "Full Audit Trail",
    description:
      "Track every action: who viewed, downloaded, or printed each file, with timestamps, session duration, and IP logging.",
  },
  {
    icon: MessageSquare,
    title: "Built-in Q&A",
    description:
      "Role-based Q&A workflows tied to individual documents or the entire deal. Ask, answer, approve — all tracked in-line.",
  },
]

export function DataroomSection() {
  return (
    <section id="dataroom" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Database className="h-3.5 w-3.5" />
            Secure Virtual Data Room
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            One secure room for every document in the deal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nested folders, bulk uploads, drag-and-drop organization, and automated indexing — with the permission controls and audit logging your deal demands.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
