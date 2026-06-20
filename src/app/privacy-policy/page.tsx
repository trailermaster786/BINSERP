import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Privacy Policy
          </h1>
          <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-[var(--muted-foreground)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Information Collection
              </h2>
              <p className="text-sm leading-relaxed">
                We collect personal information you provide directly, such as your
                name, email, phone number, and company details when you register
                for an account or contact us. We also collect usage data
                automatically, including IP address, browser type, and usage
                patterns.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                We use cookies and similar tracking technologies to maintain your
                session, remember preferences, and analyze usage patterns. You can
                control cookies through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Data Usage
              </h2>
              <p className="text-sm leading-relaxed">
                Your information is used to provide and improve our services,
                send transactional communications, and comply with legal
                obligations. We do not sell your personal information to third
                parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Data Sharing
              </h2>
              <p className="text-sm leading-relaxed">
                We may share your information with service providers who assist
                in operating our platform, when required by law, or with your
                explicit consent.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                International Data Transfers
              </h2>
              <p className="text-sm leading-relaxed">
                Your data may be transferred to and processed in countries other
                than your own. We ensure appropriate safeguards are in place for
                such transfers.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Location &amp; Background Tracking
              </h2>
<p className="text-sm leading-relaxed">
                 The AxonERP Order Booking App collects location data for live
                 tracking of field sales teams. Background location tracking
                 requires explicit user permission and can be disabled at any
                 time.
               </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Data Security
              </h2>
              <p className="text-sm leading-relaxed">
                We implement industry-standard security measures to protect your
                data, including encryption, access controls, and regular security
                audits.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
