import Link from "next/link";
import Logo from "@/components/shared/Logo";

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "FAQs", href: "/faqs" },
];

const pageLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
  { label: "Videos", href: "/videos" },
  { label: "Community", href: "/community" },
  { label: "Our Clients", href: "/our-clients" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Pakistan&apos;s Best Enterprise Resource Planning Solution
            </p>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Powered by Usefulls
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Page Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
<p className="text-xs text-[var(--muted-foreground)]">
               © {new Date().getFullYear()} AxonERP. All rights reserved.
             </p>
        </div>
      </div>
    </footer>
  );
}
