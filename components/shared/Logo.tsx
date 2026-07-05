import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo-2.png"
      alt="قدرات أ. ريناد"
      width={100}
      height={100}
      priority
      className="h-15 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
    />
  );
}
