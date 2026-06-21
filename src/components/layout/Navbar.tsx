"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Contact", href: "/contact" },
  { label: "Community", href: "/community" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]">
                Company
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isCompanyOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isCompanyOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-lg">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/docs"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
            >
              Docs
            </Link>
            <Link
              href="/community"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
            >
              Community
            </Link>
            <Link
              href="/our-clients"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
            >
              Our Clients
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/pricing"
              className="hidden rounded-lg border border-[var(--border)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10 sm:inline-flex"
            >
              Buy Now
            </Link>
            <Link
              href="/createdemo"
              className="hidden rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--primary)]/90 sm:inline-flex"
            >
              Get Demo
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent)] text-[var(--foreground)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-[var(--background)] p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/docs"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
              >
                Docs
              </Link>
              <Link
                href="/faqs"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
              >
                FAQs
              </Link>
              <Link
                href="/videos"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]"
              >
                Videos
              </Link>
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/pricing"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg border border-[var(--border)] bg-[var(--accent)] px-4 py-2.5 text-center text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10"
              >
                Buy Now
              </Link>
              <Link
                href="/createdemo"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-[var(--primary)]/90"
              >
                Get Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
