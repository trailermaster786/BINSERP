"use client";

import { features } from "@/data/features";
import BorderGlow from "@/components/animations/BorderGlow";
import { Shield, Clock, BarChart3, Palette, Cloud, FileCheck } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  setup: <Clock className="h-8 w-8 text-[var(--primary)]" />,
  security: <Shield className="h-8 w-8 text-[var(--primary)]" />,
  reports: <BarChart3 className="h-8 w-8 text-[var(--primary)]" />,
  design: <Palette className="h-8 w-8 text-[var(--primary)]" />,
  cloud: <Cloud className="h-8 w-8 text-[var(--primary)]" />,
  fbr: <FileCheck className="h-8 w-8 text-[var(--primary)]" />,
};

export default function FeaturesSection() {
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
<h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
             Features Of Axon ERP
           </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Everything you need to manage your business operations efficiently
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <BorderGlow
              key={feature.title}
              backgroundColor="var(--card)"
              borderRadius={12}
              glowRadius={30}
              glowIntensity={0.8}
              coneSpread={25}
              colors={["#BACB00", "#000000", "#BACB00"]}
            >
              <div className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {feature.description}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
