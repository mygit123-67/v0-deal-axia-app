import {
  Shield,
  Crown,
  UserCog,
  User,
  Lock,
  UserPlus,
  ToggleRight,
} from "lucide-react"

const roles = [
  {
    badge: "Platform",
    icon: Crown,
    title: "Dealaxia Admin",
    description: "Platform-wide controls and support tools. Manage all tenants, monitor system health, and provide customer support.",
  },
  {
    badge: "Tenant",
    icon: UserCog,
    title: "Account Admin",
    description: "Manages your firm's users, billing, settings, and deal permissions. Full control over your organization.",
  },
  {
    badge: "Tenant",
    icon: User,
    title: "Member",
    description: "Works on deals per assigned permissions. Access to workspaces, documents, and data rooms as granted by admins.",
  },
]

const securityFeatures = [
  {
    icon: Lock,
    title: "Row-Level Security",
    description: "Every record tied to a tenant/org ID. RLS ensures tenants only see their own data at the database level.",
  },
  {
    icon: UserPlus,
    title: "External Guest Access",
    description: "Invite outside users (buyers, attorneys) into a single deal without exposing your entire tenant or firm data.",
  },
  {
    icon: ToggleRight,
    title: "Feature-Level Gating",
    description: "Role-based access control on deals, folders, documents, and platform features. Granular and enforceable.",
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="border-t border-border/50 py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Shield className="h-3.5 w-3.5" />
            {"Roles & Permissions"}
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Enterprise-grade access control at every layer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three-tier role system with complete tenant isolation. Row-level security, guest invitations, and feature-level gating ensure your firm's data stays protected.
          </p>
        </div>

        {/* Role Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <role.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {role.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
