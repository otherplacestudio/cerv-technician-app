'use client'

import React from 'react'
import { CheckCircle2, BarChart3, Clock, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface MetricCard {
  title: string
  value: string
  subValue?: string
  trend?: {
    value: string
    direction: 'up' | 'down'
  }
  icon: React.ReactNode
  iconColor: string
}

interface MetricsDashboardProps {
  metrics?: MetricCard[]
  className?: string
}

export function MetricsDashboard({
  metrics = [
    {
      title: 'Jobs Completed',
      value: '42/45',
      trend: { value: '2.5% increase', direction: 'up' },
      icon: <CheckCircle2 className="h-5 w-5" />,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Completion Rate',
      value: '93.3%',
      trend: { value: '1.2% increase', direction: 'up' },
      icon: <BarChart3 className="h-5 w-5" />,
      iconColor: 'text-blue-600'
    },
    {
      title: 'On-Time Arrival',
      value: '95.8%',
      trend: { value: '0.8% increase', direction: 'up' },
      icon: <Clock className="h-5 w-5" />,
      iconColor: 'text-purple-600'
    },
    {
      title: 'Avg. Service Duration',
      value: '58',
      subValue: 'minutes',
      trend: { value: '3.2% decrease', direction: 'down' },
      icon: <Clock className="h-5 w-5" />,
      iconColor: 'text-purple-600'
    }
  ],
  className
}: MetricsDashboardProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {metrics.map((metric, index) => (
        <Card key={index} className="border-input">
          <CardContent className="p-4">
            {/* Header with title and icon */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-medium text-muted-foreground leading-tight">
                {metric.title}
              </h3>
              <span className={metric.iconColor}>
                {metric.icon}
              </span>
            </div>

            {/* Value */}
            <div className="mb-2">
              <span className="text-2xl font-bold text-foreground">
                {metric.value}
              </span>
              {metric.subValue && (
                <span className="text-lg text-muted-foreground ml-1">
                  {metric.subValue}
                </span>
              )}
            </div>

            {/* Trend */}
            {metric.trend && (
              <div className="flex items-center gap-1">
                {metric.trend.direction === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={cn(
                  "text-sm",
                  metric.trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
                )}>
                  {metric.trend.value}
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MetricsDashboard 