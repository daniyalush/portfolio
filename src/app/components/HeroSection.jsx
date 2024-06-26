"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-black mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Daniyal",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#000000] font-medium text-base sm:text-lg lg:text-xl mb-6">
            THIS IS A DUMMY PARAGRAPH WHICH WILL BE UPDATED SOON
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500  hover:bg-slate-200 text-black font-semibold">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 text-ellipsis text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="/Syed Daniyal Ali Shah.pdf" target="_blank">
                  Download Resume
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-3 place-self-center mt-2 lg:mt-4">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative animate-pulse">
            <Image
              src={"/images/hero-image.png"}
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
