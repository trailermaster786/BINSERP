"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  {
    name: "Manufacturing Companies",
    description:
      "Revolutionize manufacturing with AxonERP solutions. Streamline operations, boost efficiency, and optimize supply chains with real-time visibility across production lines.",
  },
  {
    name: "Project Services",
    description:
      "AxonERP elevates project-based businesses with real-time project management, smart resource allocation, and cost control.",
  },
  {
    name: "Trading & Distribution",
    description:
      "Stay ahead in trading with seamless inventory, order fulfillment, and synchronized supply chain management.",
  },
  {
    name: "Services Sector",
    description:
      "Enhance client satisfaction, optimize resources, and ensure timely delivery with precision-focused ERP tools.",
  },
  {
    name: "Food & Restaurants",
    description:
      "From inventory tracking to billing and order management, AxonERP empowers food businesses to operate efficiently.",
  },
];

const filterTabs = ["All", "Trading", "Distributor", "Construction", "Manufacturing"];

const clients = [
  { name: "Samtek", image: "/clients/samtek.png", industry: "Trading" },
  { name: "ASK", image: "/clients/ASK.png", industry: "Manufacturing" },
  { name: "Mehak Food", image: "/clients/mehak-food.png", industry: "Distributor" },
  { name: "Safa", image: "/clients/safa.png", industry: "Construction" },
  { name: "NORPAK", image: "/clients/NORPAK.png", industry: "Trading" },
  { name: "Shercon", image: "/clients/Shercon.png", industry: "Manufacturing" },
  { name: "ITPK", image: "/clients/ITPK.png", industry: "Distributor" },
  { name: "Siduque and Son", image: "/clients/siduque-and-son.png", industry: "Construction" },
  { name: "LB", image: "/clients/lb.png", industry: "Trading" },
  { name: "Al-Asr", image: "/clients/Al-asr.png", industry: "Manufacturing" },
  { name: "Law", image: "/clients/law.png", industry: "Distributor" },
  { name: "Parle", image: "/clients/parle.png", industry: "Construction" },
  { name: "Amina", image: "/clients/amina.jpeg", industry: "Trading" },
  { name: "AR", image: "/clients/AR.png", industry: "Manufacturing" },
  { name: "Alhadeed Tech", image: "/clients/alhadeed-tech.png", industry: "Distributor" },
  { name: "Autonic", image: "/clients/autonic.jpeg", industry: "Construction" },
  { name: "Takmeel", image: "/clients/takmeel.jpeg", industry: "Trading" },
  { name: "Rukhsar", image: "/clients/rukhsar.png", industry: "Manufacturing" },
  { name: "Dar-ul-Ehsan", image: "/clients/dar-ul-ehsan.jpeg", industry: "Distributor" },
  { name: "ZRA", image: "/clients/zra.jpeg", industry: "Construction" },
  { name: "Hydrotech", image: "/clients/hydrotech.jpeg", industry: "Trading" },
];

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredClients =
    activeFilter === "All"
      ? clients
      : clients.filter((c) => c.industry === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-[var(--primary)]">
              Customers & Partners
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Our Clients
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
              Trusted by businesses across industries to streamline their operations and drive growth.
            </p>
          </div>

          {/* Industries We Serve */}
<div className="mt-12">
             <h2 className="text-2xl font-bold text-[var(--foreground)]">
               Trusted Across Multiple Business Sectors
             </h2>
             <p className="mt-2 text-lg text-[var(--muted-foreground)]">
               We help companies streamline operations, improve productivity, and achieve digital transformation no matter their industry.
             </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="mt-12 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Our Customers</h2>
            <span className="text-[var(--muted-foreground)]">|</span>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Our Partners</h2>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === tab
                    ? "bg-[var(--primary)] text-white"
                    : "border border-[var(--border)] bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Client Grid */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {filteredClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-32 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:shadow-lg overflow-hidden"
              >
                {client.image ? (
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center text-sm font-medium text-[var(--muted-foreground)]">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10">
              See More
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
