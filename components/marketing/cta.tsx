import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const trustSignals = [
  "No Credit Card Required",
  "Setup in Under 2 Minutes",
  "Cancel Anytime",
]

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="animate-gradient-pan relative isolate overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-16 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_40px_100px_-20px_rgba(99,21,255,0.6)] sm:px-12 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-96 animate-pulse rounded-full bg-white/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-96 animate-pulse rounded-full bg-white/15 blur-3xl [animation-delay:1s]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_white_0%,_transparent_60%)] opacity-[0.12]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Ready To 10x Your Content Output?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Join hundreds of SEO teams already ranking faster with
            AI-generated, fully optimized content — built to scale with you.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              asChild
              className="group/cta h-16 border-0 bg-white px-12 text-lg font-semibold text-indigo-700 shadow-[0_8px_40px_-8px_rgba(255,255,255,0.7)] transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-[0_16px_60px_-8px_rgba(255,255,255,0.9)]"
            >
              <Link href="/signup" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="size-5 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-sm"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-white/25">
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
