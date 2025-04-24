import type { ReactNode } from "react"

interface TechCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="bg-tech-dark border border-tech-accent/30 p-6 rounded-lg hover:border-tech-accent transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-tech-muted flex items-center justify-center mb-4 group-hover:bg-tech-accent/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-tech-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

