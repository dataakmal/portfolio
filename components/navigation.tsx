"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Pill-shaped navigation container */}
          <div className="flex items-center gap-6 px-4 py-2 border border-[#e5e5e5] rounded-full bg-white shadow-sm">
            {/* Logo - circular outline */}
            <Link href="/" className="w-9 h-9 rounded-full border-2 border-[#111111] flex items-center justify-center hover:border-[#0F6E56] transition-colors flex-shrink-0">
              <span className="sr-only">Home</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0F6E56] ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#0F6E56]"
                      : "text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mail icon button */}
            <a
              href="#contact"
              className="hidden md:flex w-9 h-9 rounded-md border-2 border-[#111111] items-center justify-center hover:border-[#0F6E56] hover:text-[#0F6E56] transition-colors flex-shrink-0"
            >
              <Mail size={16} />
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#111111]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#e5e5e5] rounded-2xl py-4 px-6 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#0F6E56] ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#0F6E56]"
                      : "text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
