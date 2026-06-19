import { FileText, Search, SquareCheckBig, Target, type LucideIcon } from "lucide-react"

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
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold tracking-wide text-purple-400 uppercase">
          Process
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          From Keyword To Published Content
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A guided, four-step workflow that turns a niche into a fully ranked
          content library.
        </p>
      </div>

      {/* Desktop / tablet timeline */}
      <div className="relative mt-20 hidden lg:block">
        <div
          aria-hidden
          className="absolute top-9 right-[12.5%] left-[12.5%] h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
        />
        <div className="grid grid-cols-4 gap-x-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex size-[4.5rem] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-950/50 ring-4 ring-background transition-transform duration-500 group-hover:scale-110">
                <step.icon className="size-7 text-white" />
              </span>
              <span className="mt-4 font-mono text-xs font-semibold tracking-widest text-indigo-400/70">
                STEP {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 px-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile timeline */}
      <div className="relative mt-16 lg:hidden">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-9 w-px bg-gradient-to-b from-indigo-500/70 via-purple-500/40 to-transparent"
        />
        <div className="flex flex-col gap-10">
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-6">
              <span className="relative z-10 flex size-[4.5rem] shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-950/50 ring-4 ring-background">
                <step.icon className="size-7 text-white" />
              </span>
              <div className="pt-2">
                <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400/70">
                  STEP {step.number}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
