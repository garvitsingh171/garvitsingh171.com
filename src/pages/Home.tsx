import {
  FeaturedProjectsSection,
  HeroSection,
  StatsSection,
} from "../components/home";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <HeroSection />
      <StatsSection />
      <FeaturedProjectsSection />
    </div>
  );
}
