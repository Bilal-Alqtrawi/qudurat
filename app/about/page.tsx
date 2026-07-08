import AboutPage from "@/components/about/AboutPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "عن المدربة والاعتمادات | قدرات أ. ريناد",
  description:
    "تعرف على السيرة الذاتية والاعتمادات الأكاديمية للأستاذة ريناد ناصر في تدريب القدرات والتحصيلي.",
};

export default function Page() {
  return <AboutPage />;
}
