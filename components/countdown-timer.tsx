"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-4 justify-center">
      <div className="countdown-item">
        <span className="text-2xl">{timeLeft.days}</span>
        <span className="text-xs">DAYS</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl">{timeLeft.hours}</span>
        <span className="text-xs">HOURS</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl">{timeLeft.minutes}</span>
        <span className="text-xs">MINS</span>
      </div>
      <div className="countdown-item">
        <span className="text-2xl">{timeLeft.seconds}</span>
        <span className="text-xs">SECS</span>
      </div>
    </div>
  )
}

