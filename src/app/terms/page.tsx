import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Terms &amp; Conditions
          </h1>
          <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-[var(--muted-foreground)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Acceptance of Terms
              </h2>
<p className="text-sm leading-relaxed">
                 By accessing and using AxonERP, you accept and agree to be bound
                 by the terms and provision of this agreement. If you do not agree
                 to these terms, please do not use our service.
               </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Description of Services
              </h2>
<p className="text-sm leading-relaxed">
                 AxonERP provides a cloud-based Enterprise Resource Planning (ERP)
                 platform that includes financial management, HR, sales, inventory,
                 project management, and other business modules. The service is
                 provided &quot;as is&quot; and &quot;as available&quot; without
                 warranties of any kind.
               </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                User Responsibilities
              </h2>
              <p className="text-sm leading-relaxed">
                Users are responsible for maintaining the confidentiality of their
                account credentials, for all activities that occur under their
                account, and for ensuring that their use of the service complies
                with all applicable laws and regulations.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Intellectual Property
              </h2>
<p className="text-sm leading-relaxed">
                 All content, features, and functionality of AxonERP are owned by
                 AxonERP and are protected by international copyright, trademark,
                 patent, trade secret, and other intellectual property laws.
               </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Limitation of Liability
              </h2>
<p className="text-sm leading-relaxed">
                 In no event shall AxonERP be liable for any indirect, incidental,
                 special, consequential, or punitive damages resulting from your
                 use of or inability to use the service.
               </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
