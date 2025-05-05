"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";



const HeroSection = () => {
  return (
<section id="home">
  <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-24 md:py-32 lg:py-36 xl:py-44 md:flex-row md:space-x-4 md:text-left">
    <div className="md:mt-2 md:w-1/2">
      <Image
        src="/headshot6.png"
        alt="Profile picture"
        width={325}
        height={325}
        className="rounded-full shadow-2xl"
      />
    </div>
    <div className="md:mt-2 md:w-3/5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 md:mt-0">
        Hi, I&#39;m Pravin!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-6">
        I&apos;m a{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          web developer
        </span>{" "}
        from India with a passion for building clean, user-friendly web applications.
      </p>

      <Link
        to="projects"
        className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        Projects
      </Link>
    </div>
  </div>

  <div className="flex flex-row items-center justify-center space-x-4">
    {/* Left FaCode */}
    <Link
      to="about"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <FaCode size={32} className="text-teal-600 dark:text-teal-400 animate-bounce" />
    </Link>

    {/* Center FaLaptopCode + ArrowDown vertically stacked */}
    <div className="flex flex-col items-center space-y-1">
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <FaLaptopCode size={35} className="text-teal-600 dark:text-teal-400 animate-bounce" />
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <HiArrowDown size={28} className="text-gray-600 dark:text-gray-300 animate-bounce" />
      </Link>
    </div>

    {/* Right FaCode */}
    <Link
      to="about"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <FaCode size={32} className="text-teal-600 dark:text-teal-400 animate-bounce" />
    </Link>
  </div>
</section>

  )
}

export default HeroSection
