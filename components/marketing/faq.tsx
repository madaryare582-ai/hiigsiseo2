import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does article generation work?",
    answer:
      "Our AI analyzes your target keyword, researches top-ranking content, and generates a fully structured, SEO-optimized article in minutes — including headings, meta data, and internal linking suggestions.",
  },
  {
    question: "Is content SEO optimized?",
    answer:
      "Yes. Every article is optimized for on-page SEO, semantic relevance, and search intent, including keyword placement, headings, and readability.",
  },
  {
    question: "Can I upgrade anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your plan at any time directly from your account dashboard — no contracts required.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Unused article credits roll over to the next month as long as your subscription remains active.",
  },
  {
    question: "Is the content human readable?",
    answer:
      "Yes. Our AI is trained to produce natural, engaging, human-quality writing that reads naturally — not robotic or repetitive.",
  },
]

export function FAQ() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
