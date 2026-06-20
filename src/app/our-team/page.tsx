import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "M Waqas",
    role: "CEO & Director",
    image: "/Team/Waqas.png",
  },
  {
    name: "M Abbas",
    role: "Director of Technical",
    image: "/Team/Abbass.png",
  },
  {
    name: "M Shoaib",
    role: "Technical Team Lead",
    image: "/Team/Shoaib.png",
  },
  {
    name: "M Muzamil",
    role: "Sales Manager",
    image: "/Team/Muzamil.jpeg",
  },
  {
    name: "Awais Saeed",
    role: "ERP Support & Implementation",
    image: "/Team/Awais.png",
  },
  {
    name: "M Umar",
    role: "React Native APP Developer",
    image: "/Team/Umar.png",
  },
  {
    name: "Sajid Hameed",
    role: "Next JS Developer",
    image: "/Team/Sajid.png",
  },
  {
    name: "Abdullah",
    role: "Next JS Developer",
    image: "/Team/Abdullah.png",
  },
  {
    name: "Iram Naz",
    role: "Sales Executive",
    image: "/Team/girl.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-[var(--primary)]">
              Our Team
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Meet Our Leadership
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
              A dedicated team of professionals committed to delivering
              high-quality digital solutions and driving innovation forward.
            </p>
          </div>

<div className="mt-4 text-center">
             <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--foreground)]">
               Core Team
             </span>
           </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-[var(--muted)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--primary)]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
