import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const trustSignals = [
  "No Credit Card Required",
  "Setup in Under 2 Minutes",
  "Cancel Anytime",
]

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6 py-24 text-center shadow-2xl shadow-purple-900/30 sm:px-12 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-80 animate-pulse rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-80 animate-pulse rounded-full bg-white/10 blur-3xl [animation-delay:1s]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_white_0%,_transparent_60%)] opacity-[0.07]"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Growing Your Organic Traffic Today
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Generate SEO content faster and scale your rankings with AI.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              asChild
              className="h-14 border-0 bg-white px-10 text-lg font-semibold text-indigo-700 shadow-xl shadow-black/20 transition-all hover:scale-105 hover:bg-white/90"
            >
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-white/15">
                  <Check className="size-3 text-white" />
                </span>
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
