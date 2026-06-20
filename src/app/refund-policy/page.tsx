import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Refund Policy
          </h1>
          <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-[var(--muted-foreground)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                General Policy
              </h2>
              <p className="text-sm leading-relaxed">
                We want you to be satisfied with our service. If you are not
                completely satisfied, please contact us to discuss your concerns.
                Refund eligibility depends on the nature of the subscription and
                the timing of the request.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Refund Eligibility
              </h2>
              <p className="text-sm leading-relaxed">
                Cloud subscriptions may be eligible for a refund within 7 days of
                purchase if the service has not been materially used. The offline
                plan is non-refundable once the license key has been activated.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Non-Refundable Conditions
              </h2>
              <p className="text-sm leading-relaxed">
                Refunds are not available for: used subscription periods, offline
                licenses after activation, custom development work, or third-party
                integration fees.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Refund Process
              </h2>
              <p className="text-sm leading-relaxed">
                To request a refund, contact our support team at
                admin@binserp.com with your account details and reason for the
                refund request. We will review your request within 5 business
                days and notify you of the decision.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Dispute Resolution
              </h2>
              <p className="text-sm leading-relaxed">
                Any disputes arising from refund requests will be resolved through
                good-faith negotiation. If resolution cannot be reached, disputes
                will be subject to the laws of Pakistan.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
