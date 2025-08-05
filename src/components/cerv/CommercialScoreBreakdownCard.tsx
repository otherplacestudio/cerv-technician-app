'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface ServiceScore {
  name: string
  score: number
  color?: string
}

interface CommercialScoreBreakdownCardProps {
  overallScore?: number
  trend?: number
  services?: ServiceScore[]
  defaultExpanded?: boolean
  className?: string
}

export const CommercialScoreBreakdownCard: React.FC<CommercialScoreBreakdownCardProps> = ({
  overallScore = 87,
  trend = 3,
  services = [
    { name: 'Exterior Maintenance', score: 92, color: 'bg-blue-500' },
    { name: 'Landscaping', score: 85, color: 'bg-green-500' },
    { name: 'Pool Maintenance', score: 88, color: 'bg-red-500' },
    { name: 'Pest Control', score: 94, color: 'bg-purple-500' },
    { name: 'Janitorial Services', score: 83, color: 'bg-blue-400' },
    { name: 'Tree Services', score: 89, color: 'bg-teal-500' },
    { name: 'Waste Management', score: 86, color: 'bg-orange-500' }
  ],
  defaultExpanded = false,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const getTrendIcon = () => {
    if (trend > 0) {
      return <TrendingUp className="h-4 w-4" />
    } else if (trend < 0) {
      return <TrendingDown className="h-4 w-4" />
    }
    return <Minus className="h-4 w-4" />
  }

  const getTrendColor = () => {
    if (trend > 0) return 'text-green-500'
    if (trend < 0) return 'text-red-500'
    return 'text-muted-foreground'
  }

  const formatTrend = () => {
    if (trend > 0) return `+${trend}`
    return trend.toString()
  }

  return (
    <Card className={cn("border-input bg-card overflow-hidden", className)}>
      <CardContent className="p-0">
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold text-foreground">
              Overall Score {overallScore}
            </span>
            {trend !== 0 && (
              <div className={cn("flex items-center gap-1", getTrendColor())}>
                <span className="text-lg font-medium">({formatTrend()})</span>
                {getTrendIcon()}
              </div>
            )}
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="px-6 pb-6 space-y-4 border-t border-border">
            {services.map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {service.name}
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {service.score}
                  </span>
                </div>
                <div className="relative">
                  <Progress 
                    value={service.score} 
                    className="h-2 bg-muted"
                  />
                  {/* Custom colored progress bar overlay */}
                  <div 
                    className={cn(
                      "absolute top-0 left-0 h-2 rounded-full transition-all",
                      service.color || 'bg-primary'
                    )}
                    style={{ width: `${service.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default CommercialScoreBreakdownCard