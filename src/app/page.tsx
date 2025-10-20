import ContactAndsupport from "./components/ContactAndSupport";
import CTAButtons from "./components/CTAButtons";
import FeaturedProjects from "./components/FeaturedProjects";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#1A472A] to-transparent opacity-90 z-0" />
      <div className="relative z-10">
        <HeroSection />
        <SearchBar />
        <CTAButtons />
        <FeaturedProjects />
        <Testimonials />
        <ContactAndsupport />
      </div>
    </main>
  );
}
