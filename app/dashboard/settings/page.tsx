"use client"

import { useState } from "react"
import {
  User2,
  Building2,
  Bell,
  Shield,
  Key,
  Mail,
  Phone,
  Globe,
  Camera,
  Save,
  AlertCircle,
} from "lucide-react"

const tabs = [
  { id: "profile", label: "Profile", icon: User2 },
  { id: "company", label: "Company", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-48 shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              }`}
            >
              <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? "text-primary" : ""}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground mb-5">Personal Information</h3>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    JD
                  </div>
                  <div>
                    <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                      <Camera className="h-4 w-4" />
                      Change Photo
                    </button>
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG. Max 5MB.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                      <input id="firstName" type="text" defaultValue="John" className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                      <input id="lastName" type="text" defaultValue="Doe" className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input id="email" type="email" defaultValue="john@example.com" className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input id="phone" type="tel" defaultValue="(555) 123-4567" className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "company" && (
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h3 className="text-base font-semibold text-foreground mb-2">Company Details</h3>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                <input id="companyName" type="text" defaultValue="Doe Advisory Group" className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="companyWebsite" className="block text-sm font-medium text-foreground mb-1.5">Website</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input id="companyWebsite" type="text" defaultValue="doeadvisory.com" className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Save className="h-4 w-4" />
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h3 className="text-base font-semibold text-foreground">Notification Preferences</h3>
              {[
                { label: "New buyer inquiries", desc: "Get notified when a buyer expresses interest in your deal" },
                { label: "Document completions", desc: "When AI finishes generating CIMs, teasers, or reports" },
                { label: "Deal stage changes", desc: "When a deal moves to a new pipeline stage" },
                { label: "NDA signatures", desc: "When a buyer signs or requests an NDA" },
                { label: "Weekly deal summary", desc: "Receive a weekly digest of portfolio activity" },
              ].map((pref) => (
                <div key={pref.label} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{pref.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{pref.desc}</p>
                  </div>
                  <button
                    className="relative h-6 w-11 rounded-full bg-primary transition-colors"
                    role="switch"
                    aria-checked="true"
                    aria-label={pref.label}
                  >
                    <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-primary-foreground shadow translate-x-5 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <h3 className="text-base font-semibold text-foreground">Change Password</h3>
                <div>
                  <label htmlFor="currentPass" className="block text-sm font-medium text-foreground mb-1.5">Current Password</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input id="currentPass" type="password" className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="newPass" className="block text-sm font-medium text-foreground mb-1.5">New Password</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input id="newPass" type="password" className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Danger Zone</p>
                    <p className="text-xs text-muted-foreground mt-1">Once you delete your account, there is no going back.</p>
                    <button className="mt-3 rounded-lg border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
