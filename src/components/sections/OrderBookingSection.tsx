"use client";

import {
  Wifi,
  Users,
  ShoppingCart,
  CreditCard,
  MapPin,
  BarChart3,
  Smartphone,
  Link2,
} from "lucide-react";

const appFeatures = [
  { icon: <Wifi className="h-5 w-5" />, text: "Offline Data Storage" },
  { icon: <Users className="h-5 w-5" />, text: "Customer Management" },
  { icon: <ShoppingCart className="h-5 w-5" />, text: "Product & Order Management" },
  { icon: <CreditCard className="h-5 w-5" />, text: "Payment Recovery" },
  { icon: <MapPin className="h-5 w-5" />, text: "Live Location Tracking" },
  { icon: <BarChart3 className="h-5 w-5" />, text: "Activity Summary" },
  { icon: <Smartphone className="h-5 w-5" />, text: "Easy & Clean UI" },
  { icon: <Link2 className="h-5 w-5" />, text: "Link with AxonERP" },
];

const stats = [
  { value: "5K+", label: "Downloads" },
  { value: "500+", label: "Users" },
  { value: "1K+", label: "Daily Orders" },
  { value: "4.9", label: "Rating" },
];

export default function OrderBookingSection() {
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Phone Mockup Side */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary)]/20 to-yellow-600/20 blur-3xl" />
              <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl">
                <div className="h-[400px] w-[200px] rounded-2xl bg-[var(--muted)]" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
<h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
             Axon Order Booking
           </h2>
           <p className="mt-4 text-lg text-[var(--muted-foreground)]">
             A fast, reliable, and offline-friendly platform for managing customers, orders, payments, and field activities—helping sales teams and distributors track operations efficiently.
           </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {appFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 rounded-lg bg-[var(--accent)] px-4 py-3"
                >
                  <span className="text-[var(--primary)]">{feature.icon}</span>
                  <span className="text-sm font-medium text-[var(--foreground)]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

<a
             href="https://play.google.com/store/apps/details?id=com.axonerp.app&utm_source=opensearch"
             target="_blank"
             rel="noopener noreferrer"
             className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-6 py-3 text-sm font-medium transition-colors hover:opacity-90"
           >
             <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
               <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
             </svg>
             Download on Play Store
           </a>
          </div>
        </div>
      </div>
    </section>
  );
}
