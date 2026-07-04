import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function PrivacyView() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-brand-light">
      <Header />
      <main className="w-full grow pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-10 text-right">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 shadow-xs space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <h1 className="text-3xl font-black text-brand-navy">
              سياسة الخصوصية وشروط الاستخدام
            </h1>
            <p className="text-brand-gray text-xs mt-2 font-bold">
              آخر تحديث: {new Date().getFullYear()} مـ
            </p>
          </div>

          <div className="space-y-6 text-brand-navy font-medium text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-black text-brand-navy">
                1. جمع المعلومات وبيانات التسجيل
              </h2>
              <p className="text-brand-gray">
                نحن في منصة الأستاذة ريناد ناصر نلتزم تماماً بحماية بيانات
                الطلبة. نجمع فقط البيانات الأساسية اللازمة للتواصل وإتمام
                الحجز (مثل الاسم الكامل ورقم الواتساب والمسار التدريبي) لضمان
                تقديم تجربة تعليمية مخصصة.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-black text-brand-navy">
                2. حماية وحفظ البيانات الشخصية
              </h2>
              <p className="text-brand-gray">
                يتم تشفير وتأمين معلوماتكِ بالكامل ولن يتم مشاركتها، بيعها، أو
                تسريبها لأي طرف ثالث خارج النطاق التشغيلي للتواصل الرسمي الخاص
                بالمنصة ومتابعة أدائكِ الأكاديمي.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-black text-brand-navy">
                3. حقوق الملكية الفكرية للمواد التعليمية
              </h2>
              <p className="text-brand-gray">
                جميع الحقائب التدريبية والملفات التوضيحية والبثوث المباشرة هي
                ملك فكري حصري للأستاذة ريناد ناصر، ويمنع تماماً إعادة نشرها أو
                استخدامها لأغراض تجارية خارج إطار المنصة.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
