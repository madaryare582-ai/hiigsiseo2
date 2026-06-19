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
    description: "Discover low-competition, high-value keywords.",
  },
  {
    icon: SquareCheckBig,
    title: "Content Planner",
    description: "Build complete SEO content strategies.",
  },
  {
    icon: Network,
    title: "Topical Authority Builder",
    description: "Strengthen niche relevance with content clusters.",
  },
  {
    icon: FileText,
    title: "AI Article Generator",
    description: "Generate long-form SEO content in minutes.",
  },
  {
    icon: ShieldCheck,
    title: "E-E-A-T Optimization",
    description: "Improve trust and content quality.",
  },
  {
    icon: Sparkles,
    title: "Semantic SEO Optimization",
    description: "Optimize for entities, context, and relevance.",
  },
]

export function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything You Need To Scale SEO Content
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group border border-white/10 bg-white/5 ring-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/10"
          >
            <CardHeader>
              <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="size-5 text-white" />
              </span>
              <CardTitle className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
