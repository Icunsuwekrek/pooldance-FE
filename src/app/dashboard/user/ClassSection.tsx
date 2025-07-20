"use client"; // jika kamu pakai App Router dan ada interaktivitas

import Image from "next/image";
import { Button } from "@/components/ui/button"; // sesuaikan jika pakai button custom
import React from "react";
import Link from "next/link";

const classes = [
  {
    title: "Beginner",
    image: "/images/class1.png", // ganti sesuai path kamu
    stock: "10/20",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Middle",
    image: "/images/class2.png",
    stock: "10/20",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Experts",
    image: "/images/class3.png",
    stock: "10/20",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function ClassSection() {
  return (
    <section className="px-8 py-16 text-center bg-white">
      <h2 className="mb-10 text-3xl font-bold">Class</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {classes.map((item, idx) => (
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
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mb-2 text-sm text-purple-600">
                Stock Class: {item.stock}
              </p>
              <p className="mb-4 text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <Link href="/dashboard/user/booking">
              <Button className="w-full text-white bg-purple-600 hover:bg-purple-700">
                Booking
              </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
