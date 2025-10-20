import { Home, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default function CTAButtons() {
  return (
    <section className="bg-[#F9F6F2] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#1A472A] mb-12">
          How can we help you build?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="text-[#1A472A]" size={28} />,
              title: "Find a Plot",
              description:
                "Discover the perfect location for your dream home with our verified listings.",
              link: "/plots",
              linkText: "Browse Plots",
            },
            {
              icon: <Home className="text-white" size={28} />,
              title: "Get a House Plan",
              description:
                "Choose from ready-made designs or request custom plans tailored to your needs.",
              link: "/designs",
              linkText: "Explore Designs",
            },
            {
              icon: <Users className="text-white" size={28} />,
              title: "Hire a Contractor",
              description:
                "Connect with trusted professionals for construction, plumbing, electrical, and more.",
              link: "/contractors",
              linkText: "Find Contractors",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-[#1A472A]/10"
            >
              <div className="w-14 h-14 bg-[#DAA520] rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A472A] mb-2">
                {item.title}
              </h3>
              <p className="text-[#2F2F2F] text-[15px] mb-4 leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="text-[#DAA520] font-medium group-hover:text-[#1A472A] transition-colors duration-200 inline-flex items-center"
              >
                {item.linkText} <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
