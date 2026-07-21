import {
  AboutPreviewSection,
  ContactCtaSection,
  EngineeringStrengthsSection,
  FeaturedProjectsSection,
  HeroSection,
  OpenSourcePreviewSection,
  StatsSection,
} from "../components/home";
import { SEO } from "../components/seo";
import { staticRouteSeo } from "../data/seo";

export default function Home() {
  return (
    <>
      <SEO {...staticRouteSeo.home} />
      <div className="space-y-14 sm:space-y-20">
        <HeroSection />
        <FeaturedProjectsSection />
        <StatsSection />
        <AboutPreviewSection />
        <EngineeringStrengthsSection />
        <OpenSourcePreviewSection />
        <ContactCtaSection />
      </div>
    </>
  );
}
