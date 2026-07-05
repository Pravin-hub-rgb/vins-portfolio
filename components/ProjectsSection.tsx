import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "BCA Notes Site",
    description:
      "It's a web application that provides well-organized study notes for every semester of the BCA course. Students can easily navigate through semesters, subjects, and units to find the content they need for revision or regular study.",
    image: "/bcanotesweb.jpg",
    github: "https://github.com/Pravin-hub-rgb/BCA",
    link: "https://pravin-hub-rgb.github.io/BCA/",
  },
  {
    name: "Find My Room",
    description: "Find My Room is a web application built with Next.js that helps users easily discover rental rooms in their local area. It features city-based listings, map integration, and user-friendly filters to make the room-search process smooth and convenient.",
    image: "/findmyroom.jpg",
    github: "https://github.com/Pravin-hub-rgb/find-my-room",
    link: "https://find-my-room-gold.vercel.app/",
  },
  {
    name: "TradeStack",
    description:
      "TradeStack is a web application that automatically analyzes stock market data to identify trading opportunities based on predefined rules. It streams live market prices, runs technical analysis across thousands of stocks, and simulates trades with risk management — all displayed on a dashboard so users don't have to monitor charts manually.",
    image: "/tradestack.png",
    github: "https://github.com/Pravin-hub-rgb/TradeStack",
    link: "https://github.com/Pravin-hub-rgb/TradeStack",
  },
  {
    name: "DukaanOS",
    description:
      "DukaanOS is a full-stack Point-of-Sale and shop management system built for Indian kirana stores, handling daily billing, inventory tracking, credit (khata) management, and business reporting. It features an AI-powered voice billing pipeline using Groq API that lets shopkeepers complete transactions entirely in Hindi/Hinglish through speech, along with an offline-first architecture that ensures uninterrupted billing even without internet connectivity.",
    image: "/shoppos.png",
    github: "https://github.com/Pravin-hub-rgb/DukaanOS",
    link: "https://dukaanos.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="relative md:w-1/2">
                    <Link 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                    <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-3xl lg:text-4xl font-bold text-white bg-black/40 px-4 py-2 rounded whitespace-nowrap">
                      {project.name}
                    </h1>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection