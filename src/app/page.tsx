"use client";

import Navbar from "./dashboard/user/Navbar";
import Hero from "./dashboard/user/hero";
import Profile from "./dashboard/user/profile";
import ClassSection from "./dashboard/user/ClassSection";
import EventSection from "./dashboard/user/EventSection";
import GallerySection from "./dashboard/user/GallerySection";
import Footer from "./dashboard/user/Footer";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      {/* Navbar with scroll buttons */}
      <Navbar />

      {/* Sections with matching IDs */}
      <section id="about">
        <Hero />
        <Profile />
      </section>

      <section id="booking">
        <ClassSection />
      </section>

      <section id="event">
        <EventSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <Footer />
    </main>
  );
}
