import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/bg-hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover brightness-[0.6]"
        priority
      />
      <div className="relative z-10 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins">
          Lorem Ipsum Dolor
        </h1>
        <h2 className="text-white text-xl sm:text-4xl mt-2 font-semibold font-poppins">
          Lorem Ipsum
        </h2>
      </div>
    </section>
  );
}
