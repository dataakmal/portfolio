"use client"

import { useEffect, useRef } from "react"
import { Database, BarChart3, Workflow, Briefcase, Calculator } from "lucide-react"

const skillGroups = [
  {
    title: "Data & Programming",
    icon: Database,
    skills: [
      { name: "Python (Pandas, NumPy, Matplotlib)", highlight: true },
      { name: "SQL (PostgreSQL, MySQL, Oracle)", highlight: false },
      { name: "ETL Development", highlight: false },
      { name: "Data Cleaning & Transformation", highlight: false },
      { name: "Data Validation & Auditing", highlight: false },
    ],
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: [
      { name: "Power BI", highlight: true },
      { name: "Qlik Sense", highlight: false },
      { name: "Tableau", highlight: false },
      { name: "Looker Studio", highlight: false },
      { name: "Microsoft Excel (Advanced)", highlight: false },
      { name: "Metabase", highlight: false },
    ],
  },
  {
    title: "Data Engineering & Automation",
    icon: Workflow,
    skills: [
      { name: "Apache Airflow", highlight: true },
      { name: "Pentaho PDI", highlight: false },
      { name: "Pentaho PSW", highlight: false },
      { name: "OLAP Cube Development", highlight: false },
      { name: "Workflow Automation", highlight: false },
      { name: "Data Pipeline Orchestration", highlight: false },
      { name: "API Integration", highlight: false },
      { name: "Docker", highlight: false },
      { name: "Git", highlight: false },
    ],
  },
  {
    title: "Business & Operational Analysis",
    icon: Briefcase,
    skills: [
      { name: "Cost Analysis", highlight: false },
      { name: "Operational Monitoring", highlight: false },
      { name: "Financial Performance Reporting", highlight: false },
      { name: "Process Optimization", highlight: false },
      { name: "Anomaly Detection", highlight: true },
      { name: "Reporting Automation", highlight: false },
    ],
  },
  {
    title: "Statistical & Analytical Tools",
    icon: Calculator,
    skills: [
      { name: "SPSS", highlight: false },
      { name: "RStudio", highlight: false },
    ],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="fade-in visible bg-[#f5f5f5] rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0F6E56]/10 rounded-lg">
                  <group.icon className="text-[#0F6E56]" size={20} />
                </div>
                <h3 className="font-semibold text-[#111111]">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm rounded-full ${
                      skill.highlight
                        ? "bg-[#0F6E56] text-white font-medium"
                        : "bg-white text-[#666666] border border-[#e5e5e5]"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
