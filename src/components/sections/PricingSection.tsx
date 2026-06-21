"use client";

import Link from "next/link";
import { pricingPlans } from "@/data/pricing";
import BorderGlow from "@/components/animations/BorderGlow";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Pricing Based on Your Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
<BorderGlow
               key={plan.name}
               backgroundColor="var(--card)"
               borderRadius={16}
               glowRadius={35}
               glowIntensity={plan.highlighted ? 1.0 : 0.6}
               coneSpread={25}
               colors={["#BACB00", "#000000", "#BACB00"]}
             >
              <div className="flex flex-col p-6">
                {plan.discount && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                    {plan.discount}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {" "}
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-[var(--primary)] text-black hover:bg-[var(--primary)]/90"
                      : "border border-[var(--border)] bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-foreground)]/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
