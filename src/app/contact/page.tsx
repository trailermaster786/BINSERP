"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setSubmitted(true);
      setFormState({ name: "", email: "", topic: "", message: "" });
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Contact With Us
            </h1>
<p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
               If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.
             </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--primary)]" />
                <span className="text-[var(--foreground)]">{contactInfo.email}</span>
              </div>

              <div className="space-y-8">
                {contactInfo.offices.map((office) => (
                  <div key={office.city}>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {office.country} - {office.city}
                    </h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                        <Phone className="h-4 w-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[var(--muted-foreground)]">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 rounded-xl border border-[var(--border)] bg-[var(--muted)]">
                <div className="flex h-full items-center justify-center text-sm text-[var(--muted-foreground)]">
                  Map placeholder
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              {submitted && (
                <div className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Thank you! Your message has been sent.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.topic}
                    onChange={(e) =>
                      setFormState({ ...formState, topic: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary)]/90 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
