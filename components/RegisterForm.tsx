"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // حالات تخزين بيانات النموذج
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("individual");

  // خريطة لعناوين المسارات التدريبية لتظهر بشكل مفهوم في رسالة الواتساب
  const courseLabels: { [key: string]: string } = {
    individual: "البث المباشر الفردي",
    group: "البث المباشر الجماعي",
    recorded: "الدورات المسجلة",
    consulting: "استشارة وتحديد مستوى",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // تجهيز نص الرسالة الاحترافي للواتساب
    const message =
      `مرحباً أستاذة ريناد، أود تأكيد حجز مقعدي في المنصة:\n\n` +
      `👤 *اسم الطالبة:* ${studentName}\n` +
      `📱 *رقم التواصل:* ${studentPhone}\n` +
      `📚 *المسار التدريبي:* ${courseLabels[selectedCourse] || selectedCourse}\n\n` +
      `تمنياتي بالتوفيق ✨`;

    // ترميز الرسالة لتناسب روابط الإنترنت
    const encodedMessage = encodeURIComponent(message);

    // رقم الواتساب المعتمد للمنصة
    const whatsappNumber = "966547477545";

    // إنشاء رابط الواتساب المباشر
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح الرابط في نافذة جديدة بعد تأخير بسيط لإعطاء تجربة مستخدم سلسة
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(false);
      // إعادة تعيين الحقول
      setStudentName("");
      setStudentPhone("");
      setSelectedCourse("individual");
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.04)] border border-slate-100/80 my-8">
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl font-black text-brand-navy tracking-tight">
          تأكيد حجز المقعد
        </h2>
        <p className="text-brand-gray text-sm font-medium">
          املئي البيانات التالية بدقة ليتم تحويلكِ لتأكيد الحجز الفوري
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-12 text-center space-y-4 animate-fade-up">
          <div className="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-4xl mb-4 shadow-xs border border-emerald-100">
            ✓
          </div>
          <h3 className="text-2xl font-black text-brand-navy">
            جاري تحويلكِ إلى الواتساب...
          </h3>
          <p className="text-brand-gray text-sm max-w-xs mx-auto">
            ستفتح نافذة المحادثة الآن لإرسال تفاصيل بياناتكِ للأستاذة ريناد
            مباشرة.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-brand-navy mb-2">
              الاسم الكامل للطالب
            </label>
            <input
              type="text"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="مثال: سارة أحمد"
              className="w-full px-5 py-4 rounded-xl bg-brand-light border border-slate-100 focus:border-brand-gold focus:bg-white focus:outline-hidden transition-all text-brand-navy font-medium text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-brand-navy mb-2">
              رقم الواتساب للتواصل
            </label>
            <input
              type="tel"
              dir="rtl"
              required
              value={studentPhone}
              onChange={(e) => setStudentPhone(e.target.value)}
              placeholder="05XXXXXXXX"
              className="w-full px-5 py-4 rounded-xl bg-brand-light border border-slate-100 focus:border-brand-gold focus:bg-white focus:outline-hidden transition-all text-brand-navy font-medium text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-brand-navy mb-2">
              المسار التدريبي المفضل
            </label>
            <div className="relative">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-brand-light border border-slate-100 focus:border-brand-gold focus:bg-white focus:outline-hidden transition-all text-brand-navy font-bold text-sm appearance-none cursor-pointer"
              >
                <option value="individual">البث المباشر الفردي</option>
                <option value="group">البث المباشر الجماعي</option>
                <option value="recorded">الدورات المسجلة</option>
                <option value="consulting">استشارة وتحديد مستوى</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-brand-navy">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4.5 mt-4 rounded-xl bg-brand-navy text-white font-black text-base hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-xl shadow-brand-navy/10 hover:shadow-brand-gold/20 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>تأكيد الحجز والإرسال عبر الواتساب</span>
            <ChevronLeftIcon />
          </button>
        </form>
      )}
    </div>
  );
}
