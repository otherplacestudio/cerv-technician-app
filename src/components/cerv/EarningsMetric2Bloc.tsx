'use client'

import React from 'react'
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface EarningsMetric {
  title: string
  value: string
  trend: {
    percentage: number
    direction: 'up' | 'down'
  }
  iconColor: string
  trendColor: string
}

interface EarningsMetric2BlocProps {
  earnings?: EarningsMetric
  missedEarnings?: EarningsMetric
  className?: string
}

export function EarningsMetric2Bloc({
  earnings = {
    title: "Earnings",
    value: "$3245",
    trend: {
      percentage: 4.5,
      direction: 'up'
    },
    iconColor: "text-green-600",
    trendColor: "text-green-600"
  },
  missedEarnings = {
    title: "Missed Earnings",
    value: "$290",
    trend: {
      percentage: 1.8,
      direction: 'down'
    },
    iconColor: "text-red-600",
    trendColor: "text-red-600"
  },
  className
}: EarningsMetric2BlocProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {/* Earnings Card */}
      <Card className="w-full py-0 border-input">
        <CardContent className="px-3">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-base text-foreground">
              {earnings.title}
            </h3>
            <div className={cn("p-2 rounded-lg bg-green-100 dark:bg-green-900/20", earnings.iconColor)}>
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          
          {/* Value */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-foreground">
              {earnings.value}
            </span>
          </div>
          
          {/* Trend */}
          <div className="flex items-center gap-1">
            {earnings.trend.direction === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span className={cn("text-sm font-medium", earnings.trendColor)}>
              {earnings.trend.percentage}% {earnings.trend.direction === 'up' ? 'increase' : 'decrease'}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Missed Earnings Card */}
      <Card className="w-full py-0 border-input">
        <CardContent className="px-3">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-base text-foreground">
              {missedEarnings.title}
            </h3>
            <div className={cn("p-2 rounded-lg bg-red-100 dark:bg-red-900/20", missedEarnings.iconColor)}>
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          
          {/* Value */}
          <div className="mb-2">
            <span className="text-2xl font-bold text-foreground">
              {missedEarnings.value}
            </span>
          </div>
          
          {/* Trend */}
          <div className="flex items-center gap-1">
            {missedEarnings.trend.direction === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span className={cn("text-sm font-medium", missedEarnings.trendColor)}>
              {missedEarnings.trend.percentage}% {missedEarnings.trend.direction === 'up' ? 'increase' : 'decrease'}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EarningsMetric2Bloc 