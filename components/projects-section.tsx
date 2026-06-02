"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Automated GPS Asset Reporting",
    company: "Pancaran Inland Group",
    tools: ["Python", "Apache Airflow", "PostgreSQL", "Google Sheets", "API Integration"],
    description: "End-to-end GPS data automation integrating 5 vendor platforms — transforming monthly manual reporting into near real-time daily monitoring.",
    impact: "Reduced reporting latency by ~95%",
  },
  {
    title: "Unbilled Monitoring Automation",
    company: "Pancaran Inland Group",
    tools: ["Python", "SQL", "Looker Studio", "Excel"],
    description: "Automated unbilled monitoring system replacing manual Excel-based reporting, improving billing visibility and operational speed.",
    impact: "Reduced manual workload by ~80%",
  },
  {
    title: "Direct Margin Reporting Architecture",
    company: "Pancaran Inland Group",
    tools: ["PostgreSQL", "Pentaho PDI", "Pentaho PSW", "OLAP Cube", "Excel XMLA"],
    description: "Scalable Direct Margin reporting architecture by customer and business unit enabling centralized profitability analysis.",
    impact: "Enabled near real-time profitability monitoring across business units",
  },
  {
    title: "Plant Maintenance Operational Dashboard",
    company: "Thinkmatch",
    tools: ["Qlik Sense", "SQL", "PostgreSQL", "Apache Airflow", "Python"],
    description: "20+ automated PLM dashboards across 4 mining sites covering Oil/Grease/Coolant, Fuel Monitoring, PA, MTBF, MTTR, and HO reporting.",
    impact: "Eliminated manual Excel compilation for entire PLM teams",
  },
  {
    title: "System Anomaly Detection",
    company: "Internal Project",
    tools: ["Python", "Excel Power Pivot", "Statistical Modeling"],
    description: "Automated Budget vs. Actual validation tool detecting excessive operational expenses per transaction and customer in real-time.",
    impact: "Prevented budget overruns before escalation",
  },
  {
    title: "Adidas Sales Dashboard",
    company: "Personal Project",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    description: "Sales dashboard visualizing product performance, regional trends, and monthly revenue to support inventory and strategy decisions.",
    impact: "Comprehensive sales analytics for decision-making",
    link: "#",
  },
]

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-in visible text-3xl md:text-4xl font-semibold text-[#111111] mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="fade-in visible bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#0F6E56] transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[#111111] group-hover:text-[#0F6E56] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{project.company}</p>
                </div>
                {project.link && (
                  <a href={project.link} className="p-1 hover:bg-[#f5f5f5] rounded transition-colors">
                    <ArrowUpRight size={18} className="text-[#666666]" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-[#0F6E56]/10 text-[#0F6E56] text-xs font-medium rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 border-t border-[#e5e5e5]">
                <div className="text-xs text-[#666666] mb-1">Impact</div>
                <div className="text-sm font-medium text-[#0F6E56]">{project.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
