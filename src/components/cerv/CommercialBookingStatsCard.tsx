'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BookingStat {
  label: string
  value: number
  onClick?: () => void
}

interface CommercialBookingStatsCardProps {
  title?: string
  subtitle?: string
  stats?: BookingStat[]
  onBack?: () => void
  className?: string
}

export const CommercialBookingStatsCard: React.FC<CommercialBookingStatsCardProps> = ({
  title = 'Booking History',
  subtitle = 'View all your past service bookings and issues',
  stats = [
    { label: 'Upcoming', value: 1 },
    { label: 'In Progress', value: 0 },
    { label: 'Completed', value: 9 },
    { label: 'Cancelled', value: 1 }
  ],
  onBack,
  className
}) => {
  const gridCols = stats.length <= 2 ? 'grid-cols-2' : 
                   stats.length === 3 ? 'grid-cols-3' : 
                   stats.length === 5 ? 'grid-cols-5' : 'grid-cols-4'

  return (
    <div className={cn("w-full space-y-6", className)}>
      {/* Header with Back Button */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="mt-1 text-white hover:text-white/80 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="h-8 w-8" strokeWidth={2.5} />
            </button>
          )}
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <Card className="border-gray-700 bg-gray-800">
        <CardContent className="p-0">
          <div className={cn(
            "grid divide-x divide-gray-700",
            gridCols
          )}>
            {stats.map((stat, index) => (
              <button
                key={index}
                className="px-6 py-8 text-center hover:bg-gray-700/50 transition-colors cursor-pointer"
                onClick={stat.onClick}
                disabled={!stat.onClick}
              >
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommercialBookingStatsCard