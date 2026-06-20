export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--muted)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
             About Us
           </h2>
<p className="mt-6 text-lg text-[var(--muted-foreground)]">
             Our mission is to provide businesses with intuitive, powerful tools that enhance decision-making and operational efficiency. Through our ERP platform, we help companies of all sizes optimize their processes, reduce costs, and unlock new opportunities for growth.
           </p>
           <p className="mt-4 text-lg text-[var(--muted-foreground)]">
             The platform supports both cloud and offline deployment models, with an accompanying mobile app (Axon Order Booking) for field operations.
           </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "500+", label: "Active Users" },
            { value: "200+", label: "Reviews" },
            { value: "300+", label: "Downloads" },
            { value: "5+", label: "Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[var(--muted-foreground)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
