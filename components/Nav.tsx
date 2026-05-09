"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Overview", path: "/" },
    { name: "Technology", path: "/technology" },
    { name: "Applications", path: "/#applications" },
    { name: "Company", path: "/company" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-deep/80 backdrop-blur-md border-b-[0.5px] border-border py-[18px] px-5 md:px-[36px]">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href="/" className="font-inter font-medium text-[20px] tracking-[-0.5px] flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-accent rounded-full" />
          <span className="text-text-primary">TrXon</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[13px] font-normal transition-colors duration-200 ease-out ${
                pathname === link.path ? "text-text-primary" : "text-text-body hover:text-text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-[16px] bg-border mx-2" />
          <Link
            href="/contact"
            className="bg-accent text-text-primary px-5 py-2 rounded-[4px] text-[12px] font-medium hover:bg-accent/90 transition-all duration-200"
          >
            Request demo
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-text-primary text-2xl focus:outline-none"
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
              className={`text-[15px] font-normal py-2 ${
                pathname === link.path ? "text-text-primary" : "text-text-body"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-accent text-text-primary px-5 py-3 rounded-[4px] text-[15px] font-medium text-center mt-2"
          >
            Request demo
          </Link>
        </nav>
      )}
    </header>
  );
}
