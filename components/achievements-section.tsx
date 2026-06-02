"use client"

import { useEffect, useRef } from "react"
import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    title: "Most PDCA Awards 2025",
    issuer: "Pancaran Inland Group",
    description: "Awarded as employee with the highest number of PDCA initiatives in 2025. Initiatives: Unbilled Monitoring Automation & GPS Automation System.",
    issuedBy: "SPI (Strategic, Planning, and Improvement) Department",
  },
  {
    title: "Beasiswa Berprestasi & Beasiswa Penggerak Kepemimpinan (2021)",
    issuer: "FMIPA UII",
    description: "Awarded academic and leadership scholarships for outstanding achievements in organizational leadership and academic performance.",
    issuedBy: "FMIPA UII",
  },
]

const certifications = [
  { name: "Harnessing the Power of Data with Power BI", issuer: "Microsoft", year: "2025" },
  { name: "Extract, Transform and Load Data in Power BI", issuer: "Microsoft", year: "2025" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google", year: "2025" },
  { name: "AI Agents and Agentic AI with Python & Generative AI", issuer: "Vanderbilt University", year: "2025" },
  { name: "Data Visualization with Looker Data Studio", issuer: "MySkill", year: "2025" },
]

export function AchievementsSection() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Achievements */}
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          Achievements
        </h2>

        <div className="space-y-6 mb-20">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="fade-in visible bg-[#f5f5f5] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0F6E56]/10 rounded-lg shrink-0">
                  <Trophy className="text-[#0F6E56]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-1">{achievement.title}</h3>
                  <p className="text-sm text-[#0F6E56] font-medium mb-3">{achievement.issuer}</p>
                  <p className="text-sm text-[#666666] leading-relaxed mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-[#666666]">
                    Issued by: {achievement.issuedBy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="fade-in visible flex items-start gap-3 bg-[#f5f5f5] rounded-lg p-4"
            >
              <Award className="text-[#0F6E56] shrink-0 mt-0.5" size={18} />
              <div>
                <div className="text-sm font-medium text-[#111111]">{cert.name}</div>
                <div className="text-xs text-[#666666]">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
