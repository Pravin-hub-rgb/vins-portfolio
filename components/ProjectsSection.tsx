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
  }
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
                  <div className="md:w-1/2">
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
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
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