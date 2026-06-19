import Link from "next/link"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6 py-16 text-center shadow-2xl shadow-purple-900/30 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-72 animate-pulse rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 animate-pulse rounded-full bg-white/10 blur-3xl [animation-delay:1s]"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start Growing Your Organic Traffic Today
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Generate SEO content faster and scale your rankings with AI.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              asChild
              className="h-12 border-0 bg-white px-8 text-base text-indigo-700 shadow-lg shadow-black/20 hover:bg-white/90"
            >
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
