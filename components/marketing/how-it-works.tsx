import { FileText, Search, SquareCheckBig, Target, type LucideIcon } from "lucide-react"

import { Card, CardDescription, CardTitle } from "@/components/ui/card"

type Step = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: "01",
    icon: Target,
    title: "Enter Your Niche",
    description: "Tell us your industry and target audience.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Keywords",
    description: "AI finds high-value, low-competition keywords.",
  },
  {
    number: "03",
    icon: SquareCheckBig,
    title: "Build Content Plan",
    description: "Get a structured content calendar and clusters.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Generate Articles",
    description: "Publish SEO-optimized, ready-to-rank content.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From Keyword To Published Content
        </h2>
      </div>

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute top-12 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative border border-white/10 bg-white/5 ring-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30"
            >
              <div className="px-(--card-spacing)">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                    <step.icon className="size-5 text-white" />
                  </span>
                  <span className="text-3xl font-semibold text-white/10">
                    {step.number}
                  </span>
                </div>
                <CardTitle className="mt-4 text-base font-semibold text-foreground">
                  {step.title}
                </CardTitle>
                <CardDescription className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
