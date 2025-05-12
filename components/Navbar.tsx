'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Link } from "react-scroll";

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
]

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handler to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 shadow dark:shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">Pravin Kumar</div>
        
        {/* Desktop Menu - visible on md and up */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link
                key={idx}
                to={item.page}
                className="text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer transition duration-300"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.label}
              </Link>
            )
          })}
          
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition ml-4"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Hamburger Button - shown on screens below md */}
        <div className="md:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="relative z-50 p-2 flex flex-col justify-center items-center h-10 w-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <div className="flex flex-col justify-between h-6 w-8">
              <div className={`w-8 h-1 bg-gray-800 dark:bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <div className={`w-8 h-1 bg-gray-800 dark:bg-white rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-8 h-1 bg-gray-800 dark:bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - only visible below md */}
        {isOpen && (
          <div 
            ref={menuRef} 
            className="md:hidden absolute top-16 right-4 bg-white dark:bg-gray-800 p-4 shadow-md rounded-md w-40 z-40"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 cursor-pointer transition duration-300"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition text-neutral-900 dark:text-neutral-100"
                aria-label="Toggle theme"
              >
                {mounted && resolvedTheme === 'dark' ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-800 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}