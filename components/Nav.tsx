"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Technology", path: "/technology" },
    { name: "Company", path: "/company" },
    { name: "REQUEST DEMO", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-deep/80 backdrop-blur-md border-b-[0.5px] border-border py-[22px] px-5 md:px-[36px]">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href="/" className="font-inter font-medium text-[20px] tracking-[-0.5px]">
          <span className="text-text-primary">Tr</span>
          <span className="text-accent">X</span>
          <span className="text-text-primary">on</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={
                link.name === "REQUEST DEMO"
                  ? "bg-accent text-text-primary px-5 py-2.5 rounded-[4px] text-[11px] font-plex font-medium tracking-[1.5px] hover:bg-accent/90 transition-colors duration-200"
                  : `text-[13px] font-normal transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep ${
                      pathname === link.path ? "text-text-primary" : "text-text-body hover:text-text-primary"
                    }`
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-text-primary text-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-deep"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-bg-deep border-b-[0.5px] border-border py-6 px-5 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={
                link.name === "REQUEST DEMO"
                  ? "bg-accent text-text-primary px-5 py-3 rounded-[4px] text-[12px] font-plex font-medium tracking-[1.5px] text-center"
                  : `text-[15px] font-normal transition-colors duration-200 ease-out py-2 ${
                      pathname === link.path ? "text-text-primary" : "text-text-body hover:text-text-primary"
                    }`
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
