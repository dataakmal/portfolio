"use client"

import { useEffect, useRef } from "react"
import { Award, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Pancaran Inland Group",
    role: "Report Management Specialist – Business Control",
    period: "Oct 2025 – Present",
    techStack: ["Python", "SQL", "Apache Airflow", "Pentaho PDI", "Pentaho PSW", "PostgreSQL", "Excel XMLA", "Google Sheets"],
    highlights: [
      "Built company-wide reporting automation across multiple business units — reduced latency ~95% (monthly → near real-time daily)",
      "Designed Direct Margin reporting architecture by customer & business unit using PostgreSQL, Pentaho PDI/PSW, OLAP Cube, Excel XMLA",
      "Automated GPS & fuel data collection from 5 vendors (Transtrack, Cartrack, UD Trucks, Renault Trucks, Hino) via Python & Airflow",
    ],
    award: "Most PDCA Awards 2025 (GPS Automation System)",
  },
  {
    company: "Pancaran Inland Group",
    role: "Operational Controller",
    period: "Aug 2025 – Oct 2025",
    techStack: ["Python", "SQL", "Excel", "Looker Studio"],
    highlights: [
      "Reduced manual validation workload ~80% via automated anomaly detection system (Python) flagging excessive operational expenses",
      "Built end-to-end automated unbilled monitoring system replacing manual Excel, integrated with Looker Studio",
    ],
    award: "Most PDCA Awards 2025 (Unbilled Monitoring Automation)",
  },
  {
    company: "Komunitas Excel Indonesia (KEI)",
    role: "Data Analyst Mentor",
    period: "Feb 2026 – Present",
    techStack: ["Python", "Excel (Power Query, Power Pivot)"],
    highlights: [
      "Delivered bootcamps, webinars, and hands-on training covering Excel, Python, and business data analytics",
      "Developed practical learning materials on reporting automation, data processing, and real-world problem-solving",
    ],
  },
  {
    company: "Thinkmatch",
    role: "Data Analyst",
    period: "Jun 2023 – Jul 2025",
    techStack: ["Python", "SQL", "Power BI", "Qlik Sense", "PostgreSQL", "Apache Airflow"],
    highlights: [
      "Built 20+ automated operational dashboards across 4 mining sites (Bengalon, Asam-Asam, West Kintap, Kintap Coal) under Darma Henwa",
      "Owned full development of PLM reporting: Oil/Grease/Coolant, Maintenance Scheduling, Fuel Monitoring, PA, MTBF, MTTR, HO reports",
      "3-month on-site business requirement assignment in Kalimantan",
    ],
    location: "Kalimantan (On-site)",
  },
  {
    company: "BPS Republic of Indonesia",
    role: "Intern Data Administrator – SHPed",
    period: "Jan 2021 – Feb 2021",
    techStack: ["Tableau", "Excel", "EViews"],
    highlights: [
      "Processed national agricultural datasets; created Tableau infographics for Farmer Exchange Rate (NTP) publications",
      "Conducted price volatility analysis between traditional and modern markets using ARCH/GARCH models",
    ],
  },
]

export function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#e5e5e5]" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="fade-in visible relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-[#0F6E56] rounded-full" />

                <div className="bg-white rounded-xl p-6 border border-[#e5e5e5]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#111111]">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-[#0F6E56] font-medium">
                        <Briefcase size={16} />
                        {exp.role}
                      </div>
                    </div>
                    <div className="text-sm text-[#666666]">{exp.period}</div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1 text-sm text-[#666666] mb-4">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0F6E56]/10 text-[#0F6E56] text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-[#666666] flex items-start gap-2">
                        <span className="text-[#0F6E56] mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {exp.award && (
                    <div className="flex items-center gap-2 pt-4 border-t border-[#e5e5e5]">
                      <Award className="text-[#0F6E56] shrink-0" size={16} />
                      <span className="text-sm font-medium text-[#111111]">{exp.award}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
