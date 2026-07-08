import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import VideoExplanation from "@/components/VideoExplanation";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MiniFAQ from "@/components/MiniFAQ";
import CTA from "@/components/shared/CTA";
import ScrollFade from "@/components/ui/ScrollFade";
import AboutSummary from "@/components/AboutSummary";

export default function Home() {
  return (
    <div className="transition-all duration-300 relative w-full min-h-screen flex flex-col bg-white antialiased">
      <main className="w-full grow">
        <Hero />

        <ScrollFade>
          <FeaturedCourses />
        </ScrollFade>

        {/* <ScrollFade>
          <VideoExplanation />
        </ScrollFade> */}

        <ScrollFade>
          <AboutSummary />
        </ScrollFade>

        <ScrollFade>
          <Tracks />
        </ScrollFade>

        <ScrollFade>
          <TestimonialsCarousel />
        </ScrollFade>

        <ScrollFade>
          <CTA />
        </ScrollFade>

        <ScrollFade>
          <MiniFAQ />
        </ScrollFade>
      </main>
    </div>
  );
}
