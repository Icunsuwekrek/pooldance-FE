"use client";

import React from "react";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-20">
      <h1 className="text-xl font-bold text-purple-600">Logo</h1>

      <nav className="hidden gap-6 font-semibold text-purple-600 md:flex">
        <button onClick={() => scrollToSection("about")} className="hover:underline">
          About Us
        </button>
        <button onClick={() => scrollToSection("booking")} className="hover:underline">
          Booking
        </button>
        <button onClick={() => scrollToSection("event")} className="hover:underline">
          Event
        </button>
      </nav>

      <FaUser className="text-xl text-purple-600 cursor-pointer" />
    </header>
  );
}
