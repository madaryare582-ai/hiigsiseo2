import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <Sparkles className="size-4 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                HiigsiSEO
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI-powered keyword research, content planning, and article
              generation for SEO teams that want to scale without the
              overhead.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <p className="text-center text-sm text-muted-foreground">
          © 2026 HiigsiSEO. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
