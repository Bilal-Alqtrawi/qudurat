import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import AboutSummary from "@/components/AboutSummary";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ScrollFade from "@/components/ui/ScrollFade";

const Tracks = dynamic(() => import("@/components/Tracks"), {
  loading: () => (
    <div className="min-h-75 bg-brand-navy opacity-50 animate-pulse" />
  ),
  ssr: true,
});

/* const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
  {
    ssr: false,
  },
); */

const MiniFAQ = dynamic(() => import("@/components/MiniFAQ"), {
  ssr: true,
});

const CTA = dynamic(() => import("@/components/shared/CTA"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="transition-all duration-300 relative w-full min-h-screen flex flex-col bg-white antialiased">
      <main className="w-full grow">
        <Hero />

        <FeaturedCourses />

        <AboutSummary />

        <ScrollFade>
          <Tracks />
        </ScrollFade>

        <ScrollFade>
          <TestimonialsCarousel />
        </ScrollFade>

        <ScrollFade>
          <MiniFAQ />
        </ScrollFade>

        <ScrollFade>
          <CTA />
        </ScrollFade>
      </main>
    </div>
  );
}
