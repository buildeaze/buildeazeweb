// import SearchBar from "@/components/SearchBar";
// import CTAButtons from "@/components/CTAButtons";
// import Testimonials from "@/components/Testimonials";

import ContactAndsupport from "./components/ContactAndSupport";
import CTAButtons from "./components/CTAButtons";
// import { FeaturedProjects } from "./components/FeaturedProjects";
import FeaturedProjects from "./components/FeaturedProjects";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen">
      <HeroSection />
      <SearchBar />
      <CTAButtons />
      <FeaturedProjects/>
      <Testimonials />
      <ContactAndsupport/>
    </div>
  );
}
