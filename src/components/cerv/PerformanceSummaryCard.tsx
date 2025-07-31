'use client'

import React from 'react'
import { BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Star icon component
const StarIcon = ({ filled = false, className = "", style }: { filled?: boolean; className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

interface PerformanceSummaryCardProps {
  completionRate?: number
  onTimeArrival?: number
  customerRating?: number
  routeEfficiency?: number
  className?: string
}

export function PerformanceSummaryCard({
  completionRate = 93.3,
  onTimeArrival = 95.8,
  customerRating = 4.8,
  routeEfficiency = 87,
  className
}: PerformanceSummaryCardProps) {
  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} filled={true} className="h-4 w-4 text-yellow-500" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <StarIcon className="h-4 w-4 text-gray-300 dark:text-gray-600" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <StarIcon filled={true} className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300 dark:text-gray-600" />
        ))}
      </div>
    )
  }

  // Performance status based on metrics
  const getPerformanceStatus = () => {
    const avgScore = (completionRate + onTimeArrival + (customerRating * 20) + routeEfficiency) / 4
    if (avgScore >= 90) return { status: "Excellent", variant: "secondary" as const, color: "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-200" }
    if (avgScore >= 80) return { status: "Good", variant: "outline" as const, color: "bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-200" }
    return { status: "Needs Improvement", variant: "warning" as const, color: "bg-orange-100 text-orange-900 dark:bg-orange-900/20 dark:text-orange-200" }
  }

  const performanceStatus = getPerformanceStatus()

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">Performance Summary</h3>
            <Badge variant={performanceStatus.variant} className={performanceStatus.color}>
              {performanceStatus.status}
            </Badge>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Completion Rate */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
            <p className="text-xl font-semibold text-foreground">
              {completionRate}%
            </p>
          </div>

          {/* On-Time Arrival */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">On-Time Arrival</p>
            <p className="text-xl font-semibold text-foreground">
              {onTimeArrival}%
            </p>
          </div>

          {/* Customer Rating */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">Customer Rating</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-foreground">
                {customerRating}
              </span>
              {renderStars(customerRating)}
            </div>
          </div>

          {/* Route Efficiency */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">Route Efficiency</p>
            <p className="text-xl font-semibold text-foreground">
              {routeEfficiency}/100
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PerformanceSummaryCard