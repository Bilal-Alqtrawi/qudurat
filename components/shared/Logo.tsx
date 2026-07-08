import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="قدرات أ. ريناد"
      width={100}
      height={100}
      priority
      className="aspect-auto h-15 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
    />
  );
}
