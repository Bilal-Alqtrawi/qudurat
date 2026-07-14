import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="قدرات أ. ريناد"
      width={250}
      height={80}
      quality={100}
      priority
      className="aspect-auto h-15 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
    />
  );
}
