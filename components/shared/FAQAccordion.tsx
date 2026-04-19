'use client'

import { useState, ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  className?: string
}

export default function FAQAccordion({ items, title, subtitle, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={`section ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {title && (
            <h2 className="text-center text-2xl font-bold text-text md:text-3xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-3 max-w-xl text-center text-text-light">{subtitle}</p>
          )}

          <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white shadow-sm">
            {items.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`
              return (
                <div key={item.question}>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <span className="text-base font-semibold text-text">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-text-light leading-relaxed">{item.answer}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
