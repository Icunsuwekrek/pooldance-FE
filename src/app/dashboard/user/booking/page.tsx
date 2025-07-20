"use client";

import Image from "next/image";
import Footer from "@/app/dashboard/user/Footer";
import Navbar from "@/app/dashboard/user/Navbar";

export default function BookingPage() {
  return (
    <main className="min-h-screen">
    <Navbar />
    <div className="px-6 py-10 md:px-20 md:py-14">
      {/* Gambar + Judul */}
      <div className="overflow-hidden rounded-xl w-full h-[300px] mb-6">
        <Image
          src="/images/detailclass.png" // pastikan gambar ada di public/images
          alt="Middle Class"
          width={1200}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Judul */}
      <h1 className="mb-6 text-4xl font-bold text-center text-neutral-800">
        Middle Class
      </h1>

      {/* Deskripsi */}
      <p className="mb-4 text-justify text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* Do and Don't */}
      <h3 className="mb-2 text-lg font-semibold">Do and Don’t</h3>
      <ul className="pl-6 mb-6 text-gray-700 list-disc">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Ut enim ad minim veniam</li>
        <li>Duis aute irure dolor in reprehenderit</li>
        <li>Excepteur sint occaecat cupidatat</li>
        <li>Sun in culpa qui officia deserunt</li>
      </ul>

      {/* Stock & Time */}
      <div className="mb-6 text-sm font-semibold">
        <p className="text-purple-600">Stock Class: 10/15</p>
        <p className="text-purple-600">Time: 20.00 WIB</p>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-2">
        <div>
          <label className="text-sm">Nama</label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 border rounded-md"
            placeholder="Nama"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 mt-1 border rounded-md"
            placeholder="testing@gmail.com"
          />
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 border rounded-md"
            placeholder="082131231"
          />
        </div>
        <div>
          <label className="text-sm">Date</label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 border rounded-md"
            placeholder="Tanggal"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Booking
          </button>
        </div>
      </form>

      {/* Penjelasan Panjang */}
      <div className="p-6 text-justify text-gray-700 bg-gray-100 rounded-xl">
        <h3 className="mb-2 text-xl font-semibold">Tentang Middle Class</h3>
        <p>
          Kelas ini dirancang untuk peserta yang sudah memiliki dasar-dasar pole dance. Dalam kelas
          ini kamu akan mempelajari teknik lanjutan, kontrol otot yang lebih dalam, dan ekspresi
          artistik. Tujuannya adalah membantu peserta mengembangkan kekuatan tubuh bagian atas,
          fleksibilitas, dan teknik transisi yang elegan dari satu gerakan ke gerakan lainnya.
        </p>
        <br />
        <p>
          Materi dalam kelas Middle Class sudah dikurasi secara profesional agar dapat disesuaikan
          dengan kemampuan individu. Tidak hanya itu, peserta juga akan diberikan tips untuk
          menghindari cedera serta mendapatkan pembinaan dari instruktur berpengalaman.
        </p>
        <br />
        <p>
          Jangan lewatkan kesempatan ini untuk meningkatkan skill-mu! Booking sekarang dan mulai
          perjalanan barumu menuju performa yang luar biasa!
        </p>
      </div>
    </div>
     <Footer />
    </main>
  );
}
