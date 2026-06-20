"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cloudMonthlyPrice, cloudYearlyPrice, originalMonthlyPrice, originalYearlyPrice, userPresets } from "@/data/pricing";
import { Check } from "lucide-react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [users, setUsers] = useState(1);
  const [customUsers, setCustomUsers] = useState("");

  const pricePerUser = billing === "monthly" ? cloudMonthlyPrice : cloudYearlyPrice;
  const originalPrice = billing === "monthly" ? originalMonthlyPrice : originalYearlyPrice;
  const totalOriginal = originalPrice * users;
  const totalPrice = pricePerUser * users;
  const savings = totalOriginal - totalPrice;
  const discountPercent = Math.round((1 - pricePerUser / originalPrice) * 100);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
             <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
               Flexible Pricing Plans
             </h1>
             <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
               Choose the number of users and billing cycle that works best for your business
             </p>
           </div>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--muted)] p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  billing === "monthly"
                    ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  billing === "yearly"
                    ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                Yearly <span className="text-[var(--primary)]">Save 54%</span>
              </button>
            </div>
          </div>

          {/* User Count Selector */}
          <div className="mx-auto mt-8 max-w-md">
            <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Number of Users
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {userPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => { setUsers(preset.users); setCustomUsers(""); }}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    users === preset.users && !customUsers
                      ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)]/50"
                  }`}
                >
                  {preset.label}
                  <span className="block text-xs opacity-70">{preset.users} users</span>
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Custom number"
              value={customUsers}
              onChange={(e) => {
                setCustomUsers(e.target.value);
                const val = parseInt(e.target.value);
                if (val > 0) setUsers(val);
              }}
              className="mt-3 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
            />
          </div>

          {/* Pricing Summary */}
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted-foreground)]">Original price per user</span>
              <span className="text-[var(--muted-foreground)] line-through">Rs {originalPrice.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-[var(--foreground)] font-medium">Discounted price per user</span>
              <span className="text-[var(--foreground)] font-semibold">Rs {pricePerUser.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-[var(--muted-foreground)]">Discount</span>
              <span className="text-[var(--primary)] font-medium">{discountPercent}% OFF</span>
            </div>
            <div className="mt-4 border-t border-[var(--border)] pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Original total ({users} users)</span>
                <span className="text-[var(--muted-foreground)] line-through">Rs {totalOriginal.toLocaleString()}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[var(--foreground)] font-semibold">Your total</span>
                <span className="text-2xl font-bold text-[var(--foreground)]">Rs {totalPrice.toLocaleString()}</span>
              </div>
              {savings > 0 && (
                <div className="mt-2 text-right text-sm text-[var(--primary)]">
                  You save Rs {savings.toLocaleString()}
                </div>
              )}
            </div>
            <Link
              href="/signup"
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary)]/90"
            >
              Get Started Now
            </Link>
          </div>

          {/* Offline Plan */}
          <div className="mx-auto mt-12 max-w-md rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Offline Plan</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[var(--foreground)]">Rs 54,999</span>
              <span className="text-sm text-[var(--muted-foreground)]"> lifetime</span>
            </div>
            <ul className="mt-6 space-y-3">
              {["Accounts", "Sales", "Purchase", "Inventory", "Manufacturing", "POS", "Project Management", "Backups", "FBR Integration", "Multi-User Support"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <span className="text-sm text-[var(--muted-foreground)]">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/download"
              className="mt-6 flex w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10"
            >
              Download Now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
