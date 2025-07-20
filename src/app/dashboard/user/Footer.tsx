"use client";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-white bg-purple-600 md:px-20">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        {/* Kiri */}
        <div>
          <h1 className="mb-4 text-2xl font-bold">Logo</h1>
          <p className="mb-2">Committed to People Committed to the Future</p>
          <p className="mb-1">
            Thamrin City - Business Center 6th Floor No 608B
            <br />
            Jl. Thamrin Boulevard - Jakarta Pusat 10240
          </p>
          <p className="mt-3">Email: sales@testing.co.id</p>
          <p>Phone: 021 - 29263684 / 081311459830</p>
        </div>

        {/* Kanan (Sosial Media) */}
        <div className="flex gap-5 mt-2 text-2xl md:mt-0">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Garis dan copyright */}
      <div className="pt-4 mt-10 text-sm text-center border-t border-white">
        Copyright © 2025 LOGO
      </div>
    </footer>
  );
}
