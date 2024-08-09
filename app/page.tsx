import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full px-[20px] md:px-[46px] lg:px-[120px]">
        <Hero />
      </div>
    </main>
  );
}
