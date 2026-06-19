import {
  FileText,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  SquareCheckBig,
  type LucideIcon,
} from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Discover low-competition, high-value keywords your competitors haven't found yet.",
  },
  {
    icon: SquareCheckBig,
    title: "Content Planner",
    description:
      "Build complete SEO content strategies with structured calendars and clusters.",
  },
  {
    icon: Network,
    title: "Topical Authority Builder",
    description:
      "Strengthen niche relevance by mapping content into authoritative topic clusters.",
  },
  {
    icon: FileText,
    title: "AI Article Generator",
    description:
      "Generate long-form, SEO-optimized content in minutes, not days.",
  },
  {
    icon: ShieldCheck,
    title: "E-E-A-T Optimization",
    description:
      "Improve trust, expertise, and content quality signals search engines reward.",
  },
  {
    icon: Sparkles,
    title: "Semantic SEO Optimization",
    description:
      "Optimize for entities, context, and relevance beyond simple keyword matching.",
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">
          Platform
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Everything You Need To Scale SEO Content
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A complete toolkit that takes you from a single niche to a fully
          ranked content library.
        </p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            className="group relative overflow-hidden border border-white/10 bg-white/5 [--card-spacing:--spacing(8)] ring-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:bg-white/8 hover:shadow-2xl hover:shadow-indigo-950/40"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-gradient-to-br from-indigo-500/0 to-purple-600/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:from-indigo-500/20 group-hover:to-purple-600/20 group-hover:opacity-100"
            />
            <CardHeader className="relative gap-0">
              <div className="flex items-center justify-between">
                <span className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-950/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="size-8 text-white" />
                </span>
                <span className="font-mono text-sm text-white/10">
                  0{index + 1}
                </span>
              </div>
              <CardTitle className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </CardTitle>
              <CardDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
