import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import VideoExplanation from "@/components/VideoExplanation";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MiniFAQ from "@/components/MiniFAQ";
import CTA from "@/components/shared/CTA";
import ScrollFade from "@/components/ui/ScrollFade";

export default function Home() {
  return (
    <div className="transition-all duration-300 relative w-full min-h-screen flex flex-col bg-white antialiased">
      <main className="w-full grow">
        <ScrollFade>
          <Hero />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <FeaturedCourses />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <VideoExplanation />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <About />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <Features />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <TestimonialsCarousel />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <MiniFAQ />
        </ScrollFade>

        <ScrollFade duration="duration-1000">
          <CTA />
        </ScrollFade>
      </main>
    </div>
  );
}
