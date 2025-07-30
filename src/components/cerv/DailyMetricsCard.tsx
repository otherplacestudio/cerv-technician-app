'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, Star, DollarSign } from 'lucide-react'

// Metric data structure
interface Metric {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string | number
  total?: string | number
  rating?: number
  progress?: number
}

interface DailyMetricsCardProps {
  metrics?: Metric[]
  className?: string
}

export function DailyMetricsCard({
  metrics = [
    {
      id: 'jobs',
      icon: CheckCircle2,
      title: 'JOBS COMPLETED',
      value: 2,
      total: 5,
      progress: 40
    },
    {
      id: 'rating',
      icon: Star,
      title: 'RATING',
      value: 4.8,
      total: 5.0,
      rating: 4.8
    },
    {
      id: 'earnings',
      icon: DollarSign,
      title: 'EARNINGS TODAY',
      value: '$245',
      progress: 46
    }
  ],
  className
}: DailyMetricsCardProps) {
  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-3.5 w-3.5 fill-primary text-primary" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="h-3.5 w-3.5 text-muted-foreground/30" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-3.5 w-3.5 text-muted-foreground/30" />
        ))}
      </div>
    )
  }

  return (
    <Card className={cn("w-full py-3 border-input", className)}>
      <CardContent className="px-3">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            
            return (
              <div key={metric.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-2 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Title */}
                <h4 className="text-[10px] font-medium text-muted-foreground mb-1 tracking-wider">
                  {metric.title}
                </h4>
                
                {/* Value */}
                <div className="font-semibold text-lg mb-1">
                  {metric.value}
                  {metric.total && metric.id !== 'earnings' && (
                    <span className="text-sm text-muted-foreground">
                      {' / '}{metric.total}
                    </span>
                  )}
                </div>
                
                {/* Progress or Rating */}
                {metric.progress !== undefined ? (
                  <div className="w-full px-2">
                    <Progress 
                      value={metric.progress} 
                      className="h-1.5"
                    />
                  </div>
                ) : metric.rating ? (
                  <div className="flex justify-center">
                    {renderStars(metric.rating)}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default DailyMetricsCard