import {
  AboutPreviewSection,
  ContactCtaSection,
  EngineeringStrengthsSection,
  FeaturedProjectsSection,
  HeroSection,
  OpenSourcePreviewSection,
  StatsSection,
} from "../components/home";

export default function Home() {
  return (
    <div className="space-y-14 sm:space-y-20">
      <HeroSection />
      <FeaturedProjectsSection />
      <StatsSection />
      <AboutPreviewSection />
      <EngineeringStrengthsSection />
      <OpenSourcePreviewSection />
      <ContactCtaSection />
    </div>
  );
}
