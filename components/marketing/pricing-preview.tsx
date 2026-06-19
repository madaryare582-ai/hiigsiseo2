import Link from "next/link"
import { Check } from "lucide-react"

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
  price: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$5",
    features: ["2 Articles Per Day", "Up To 2,000 Words", "SEO Optimized"],
  },
  {
    name: "Growth",
    price: "$12",
    features: [
      "5 Articles Per Day",
      "E-E-A-T Optimization",
      "Topical Authority Optimization",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$20",
    features: ["10 Articles Per Day", "GEO Optimization", "AEO Optimization"],
  },
]

export function PricingPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Simple Pricing
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative border border-white/10 bg-white/5 ring-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1",
              plan.featured &&
                "border-indigo-400/40 bg-gradient-to-b from-indigo-500/10 to-purple-600/10 sm:scale-105"
            )}
          >
            {plan.featured && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                {plan.name}
              </CardTitle>
              <CardDescription>
                <span className="text-3xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground"> /month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
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
