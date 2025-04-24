import Image from "next/image"

interface SponsorLogoProps {
  name: string
  logo: string
  tier: "platinum" | "gold" | "silver" | "bronze"
}

export default function SponsorLogo({ name, logo, tier }: SponsorLogoProps) {
  const tierClasses = {
    platinum: "border-tech-accent/70 shadow-lg shadow-tech-accent/20",
    gold: "border-yellow-500/70",
    silver: "border-gray-400/70",
    bronze: "border-amber-700/70",
  }

  const tierSizes = {
    platinum: { width: 180, height: 100 },
    gold: { width: 150, height: 80 },
    silver: { width: 120, height: 60 },
    bronze: { width: 100, height: 50 },
  }

  return (
    <div
      className={`bg-tech-dark border ${tierClasses[tier]} rounded-lg p-4 flex items-center justify-center transition-transform hover:scale-105`}
    >
      <Image
        src={logo || "/placeholder.svg"}
        alt={`${name} logo`}
        width={tierSizes[tier].width}
        height={tierSizes[tier].height}
        className="object-contain"
      />
    </div>
  )
}

