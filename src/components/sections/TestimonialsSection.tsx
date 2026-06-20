"use client";

import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="bg-[var(--muted)] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            What our users say
          </h2>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {duplicated.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="mx-3 w-[350px] shrink-0 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
