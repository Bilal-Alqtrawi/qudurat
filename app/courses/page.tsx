import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 pb-20">
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
}
