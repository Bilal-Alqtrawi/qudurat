import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetails from "@/components/courses/CourseDetails";
import {
  INITIAL_COURSES,
  INITIAL_REVIEWS,
  getAverageRating,
  getCourseById,
} from "@/data/courses-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

// توليد الصفحات مسبقاً (Static Generation) لأفضل أداء وسرعة تحميل
export function generateStaticParams() {
  return INITIAL_COURSES.map((course) => ({ id: String(course.id) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(Number(id));

  if (!course) {
    return { title: "الدورة غير موجودة" };
  }

  const description = course.seoDescription || course.shortDesc;

  return {
    title: course.title,
    description,
    alternates: {
      canonical: `/courses/${course.id}`,
    },
    openGraph: {
      title: course.title,
      description,
      url: `/courses/${course.id}`,
      type: "website",
      images: [
        { url: course.image, width: 800, height: 600, alt: course.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description,
      images: [course.image],
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(Number(id));

  if (!course) {
    notFound();
  }

  const reviews = INITIAL_REVIEWS[course.id] || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.seoDescription || course.shortDesc,
    provider: {
      "@type": "Organization",
      name: "منصة أ. ريناد ناصر",
    },
    offers: {
      "@type": "Offer",
      price: course.price.replace(/[^\d.]/g, ""),
      priceCurrency: "SAR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getAverageRating(reviews),
      reviewCount: reviews.length || 1,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetails course={course} initialReviews={reviews} />
    </>
  );
}
