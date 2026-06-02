"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award } from "lucide-react"

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          About Me
        </h2>

        <div className="space-y-6 mb-16">
          <p className="fade-in visible text-[#666666] text-lg leading-relaxed">
            I specialize in bridging the gap between complex operational data and financial strategy. With deep experience as a Senior Data Analyst and Operational Controller, I&apos;ve built a track record of safeguarding company margins through automated anomaly detection and historical-based budgeting.
          </p>
          <p className="fade-in visible text-[#666666] text-lg leading-relaxed">
            From architecting ETL pipelines with Apache Airflow and Pentaho to delivering executive-level dashboards across logistics, mining, and palm oil industries — my focus is always on driving efficiency and ensuring a single source of truth for decision-making.
          </p>
        </div>

        <div className="fade-in visible bg-[#f5f5f5] rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#0F6E56]/10 rounded-lg">
              <GraduationCap className="text-[#0F6E56]" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#111111]">Universitas Islam Indonesia</h3>
              <p className="text-[#666666]">Bachelor of Statistics</p>
              <p className="text-sm text-[#666666]">Sep 2018 – Feb 2023</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-medium text-[#111111] mb-2">GPA</div>
              <div className="text-2xl font-semibold text-[#0F6E56]">3.68 / 4.00</div>
            </div>
            <div>
              <div className="text-sm font-medium text-[#111111] mb-2">Key Coursework</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Statistical Methods",
                  "Machine Learning",
                  "Time Series",
                  "Programming for Data Science",
                  "Data Visualization",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-1 bg-white text-[#666666] text-xs rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
            <div className="flex items-start gap-3">
              <Award className="text-[#0F6E56] shrink-0 mt-0.5" size={18} />
              <div>
                <div className="text-sm font-medium text-[#111111]">Beasiswa Berprestasi & Beasiswa Penggerak Kepemimpinan (2021)</div>
                <div className="text-sm text-[#666666]">Awarded for outstanding achievements in organizational leadership and academic performance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
