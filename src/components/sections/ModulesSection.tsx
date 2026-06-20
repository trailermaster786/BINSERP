"use client";

import dynamic from "next/dynamic";
import { modules } from "@/data/modules";
import {
  BookOpen,
  ShoppingCart,
  TrendingUp,
  Package,
  FolderKanban,
  Users,
  Factory,
  Monitor,
} from "lucide-react";

const TiltedCard = dynamic(
  () => import("@/components/animations/TiltedCard"),
  { ssr: false }
);

const moduleIcons: Record<string, React.ReactNode> = {
  accounts: <BookOpen className="h-8 w-8 text-[var(--primary)]" />,
  purchase: <ShoppingCart className="h-8 w-8 text-[var(--primary)]" />,
  sales: <TrendingUp className="h-8 w-8 text-[var(--primary)]" />,
  inventory: <Package className="h-8 w-8 text-[var(--primary)]" />,
  project: <FolderKanban className="h-8 w-8 text-[var(--primary)]" />,
  hr: <Users className="h-8 w-8 text-[var(--primary)]" />,
  manufacturing: <Factory className="h-8 w-8 text-[var(--primary)]" />,
  pos: <Monitor className="h-8 w-8 text-[var(--primary)]" />,
};

export default function ModulesSection() {
  return (
    <section className="bg-[var(--muted)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
<h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
             Modules of AxonERP
           </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Comprehensive modules covering every aspect of your business
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mx-auto mt-12 max-w-3xl">
          <TiltedCard
            imageSrc="/dashboard.webp"
altText="AxonERP Dashboard"
             captionText="AxonERP - Dashboard View"
            containerHeight="400px"
            containerWidth="100%"
            imageHeight="400px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>

        {/* Module Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((mod) => (
            <div
              key={mod.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]">
                {moduleIcons[mod.icon]}
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
