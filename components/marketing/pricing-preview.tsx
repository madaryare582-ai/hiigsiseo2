import Link from "next/link"
import { Check, Crown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  tagline: string
  price: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For solo creators getting started",
    price: "$5",
    features: [
      "2 Articles Per Day",
      "Up To 2,000 Words Per Article",
      "SEO Optimized Content",
      "Keyword Research Tool",
      "Basic Content Planner",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    tagline: "For teams scaling content output",
    price: "$12",
    features: [
      "5 Articles Per Day",
      "Up To 4,000 Words Per Article",
      "E-E-A-T Optimization",
      "Topical Authority Optimization",
      "Advanced Keyword Research",
      "Content Calendar & Clusters",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    tagline: "For agencies and high-volume sites",
    price: "$20",
    features: [
      "10 Articles Per Day",
      "Unlimited Word Count",
      "GEO Optimization",
      "AEO Optimization",
      "Full Topical Authority Suite",
      "API Access",
      "Dedicated Support",
    ],
  },
]

export function PricingPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold tracking-wide text-indigo-400 uppercase">
          Pricing
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free, upgrade as you scale. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "group relative flex flex-col overflow-hidden border border-white/10 bg-white/5 [--card-spacing:--spacing(8)] ring-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2",
              plan.featured
                ? "border-indigo-400/40 bg-gradient-to-b from-indigo-500/15 via-purple-600/10 to-transparent shadow-2xl shadow-indigo-950/50 sm:-translate-y-4 sm:scale-105 hover:shadow-indigo-900/60"
                : "hover:border-white/20 hover:bg-white/8 hover:shadow-xl hover:shadow-black/30"
            )}
          >
            {plan.featured && (
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl"
              />
            )}

            {plan.featured && (
              <Badge className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 border-0 bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 text-white shadow-lg shadow-indigo-950/50">
                <Crown className="size-3" />
                Most Popular
              </Badge>
            )}

            <CardHeader className="relative gap-0">
              <CardTitle className="text-lg font-semibold text-foreground">
                {plan.name}
              </CardTitle>
              <CardDescription className="mt-1 text-sm text-muted-foreground">
                {plan.tagline}
              </CardDescription>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="text-base text-muted-foreground">
                  /month
                </span>
              </div>
            </CardHeader>

            <CardContent className="relative flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                        plan.featured ? "bg-emerald-400/20" : "bg-white/10"
                      )}
                    >
                      <Check className="size-2.5 text-emerald-400" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                asChild
                className={cn(
                  "mt-8 h-12 w-full text-base",
                  plan.featured
                    ? "border-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-400 hover:to-purple-500"
                    : "border border-white/15 bg-white/5 text-foreground hover:bg-white/10"
                )}
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="relative mt-12 flex justify-center">
        <Button
          size="lg"
          variant="outline"
          asChild
          className="h-12 border-white/15 bg-white/5 px-8 text-base text-foreground hover:bg-white/10"
        >
          <Link href="/pricing">View Full Pricing</Link>
        </Button>
      </div>
    </section>
  )
}
