"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    title: "Lorem ipsum",
    image: "/images/event1.png", // ganti dengan gambar sesuai
    date: "20/08/2025",
    studio: "Studio M",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Lorem ipsum",
    image: "/images/event2.png",
    date: "20/08/2025",
    studio: "Studio M",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Lorem ipsum",
    image: "/images/event3.png",
    date: "20/08/2025",
    studio: "Studio M",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function EventSection() {
  return (
    <section className="px-8 py-16 text-center bg-white">
      <h2 className="mb-10 text-3xl font-bold">Event</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {events.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-[250px]"
            />
            <div className="p-5 text-left">
              <p className="mb-1 text-xs text-purple-600">
                {item.studio} | {item.date}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <Link
                href="#"
                className="text-sm font-medium text-purple-600 underline hover:text-purple-800"
              >
                More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
