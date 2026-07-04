import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RegisterPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="w-full grow pt-24 flex items-center justify-center">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
