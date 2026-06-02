"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-6">
          Get in Touch
        </h2>

        <p className="fade-in visible text-[#666666] text-lg mb-12 max-w-2xl mx-auto">
          Open for new opportunities, collaborations, and mentoring. Let&apos;s build something meaningful from data.
        </p>

        <div className="fade-in visible grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <a
            href="mailto:akmalfauzan2910@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#0F6E56] transition-colors group"
          >
            <div className="p-3 bg-[#0F6E56]/10 rounded-full group-hover:bg-[#0F6E56]/20 transition-colors">
              <Mail className="text-[#0F6E56]" size={24} />
            </div>
            <div>
              <div className="text-sm font-medium text-[#111111]">Email</div>
              <div className="text-xs text-[#666666]">akmalfauzan2910@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+6281779052788"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#0F6E56] transition-colors group"
          >
            <div className="p-3 bg-[#0F6E56]/10 rounded-full group-hover:bg-[#0F6E56]/20 transition-colors">
              <Phone className="text-[#0F6E56]" size={24} />
            </div>
            <div>
              <div className="text-sm font-medium text-[#111111]">Phone</div>
              <div className="text-xs text-[#666666]">+62 817 7905 2788</div>
            </div>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#0F6E56] transition-colors group"
          >
            <div className="p-3 bg-[#0F6E56]/10 rounded-full group-hover:bg-[#0F6E56]/20 transition-colors">
              <Linkedin className="text-[#0F6E56]" size={24} />
            </div>
            <div>
              <div className="text-sm font-medium text-[#111111]">LinkedIn</div>
              <div className="text-xs text-[#666666]">Connect with me</div>
            </div>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#0F6E56] transition-colors group"
          >
            <div className="p-3 bg-[#0F6E56]/10 rounded-full group-hover:bg-[#0F6E56]/20 transition-colors">
              <Github className="text-[#0F6E56]" size={24} />
            </div>
            <div>
              <div className="text-sm font-medium text-[#111111]">GitHub</div>
              <div className="text-xs text-[#666666]">View my code</div>
            </div>
          </a>
        </div>

        <div className="fade-in visible">
          <a
            href="mailto:akmalfauzan2910@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F6E56] text-white font-medium rounded-lg hover:bg-[#0d5c48] transition-colors"
          >
            <Mail size={20} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  )
}
