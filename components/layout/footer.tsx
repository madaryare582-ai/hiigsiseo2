import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              HiigsiSEO
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © 2026 HiigsiSEO. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
