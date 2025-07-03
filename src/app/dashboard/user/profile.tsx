"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="text-black body-font">
      <div className="container mx-auto flex px-24 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/profile.jpg"
            width={720}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mb-8 text-gray-500 text-xl leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sint
            suscipit eius, omnis doloribus esse aut. Aut, possimus molestiae
            esse veritatis dolores similique consequatur nemo eum blanditiis?
            Fugit sit veritatis aspernatur ipsam.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="inline-flex text-purple-600 outline-purple-600 py-2 px-6 focus:outline-none">
              Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
