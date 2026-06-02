"use client"

import Image from "next/image"
import { Mail, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6">
              {"I'm "}
              <span className="relative inline-block">
                <span className="relative z-10">Akmal Fauzan</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#FF6B6B] -z-0 opacity-80"></span>
              </span>
              {", "}
              <br />
              a Data Analyst
              <br />
              from{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-2">Indonesia</span>
                <span className="absolute inset-0 bg-[#0F6E56] -z-0"></span>
              </span>
            </h1>

            <p className="text-[#666666] text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Senior Data Analyst with 3+ years of experience building end-to-end automated reporting systems across logistics, mining, and palm oil industries.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-sm font-medium rounded-lg hover:bg-[#333333] transition-colors"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#111111] text-[#111111] text-sm font-medium rounded-lg hover:bg-[#f5f5f5] transition-colors"
              >
                <ArrowUpRight size={16} />
                View portfolio
              </a>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[460px] rounded-2xl overflow-hidden bg-[#F5C542] shadow-lg">
              <Image
                src="/images/avatar-illustration.png"
                alt="Akmal Fauzan - Data Analyst illustration"
                fill
                className="object-cover object-top"
                priority
              />
              {/* View Details overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#111111] opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                View Details
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
