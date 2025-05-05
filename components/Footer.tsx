import React from "react"
import { AiOutlineGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-12">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 rounded dark:bg-neutral-700" />
      
      <div className="mx-auto p-4 flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-neutral-500 dark:text-neutral-400">
          © 2025 Pravin Kumar
        </div>
        
        <div className="flex mt-4 md:mt-0">
          <a
            href="https://github.com/Pravin-hub-rgb"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <AiOutlineGithub size={28} className="text-neutral-600 dark:text-neutral-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer