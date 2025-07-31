'use client'

import React from 'react'
import { BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface DataPoint {
  date: string
  value: number
  label: string
}

interface ServiceDurationCardProps {
  title?: string
  subtitle?: string
  data?: DataPoint[]
  maxValue?: number
  className?: string
}

export function ServiceDurationCard({
  title = "Service Duration",
  subtitle = "Minutes per service (last 7 weeks)",
  data = [
    { date: "Sep 30", value: 62, label: "Sep 30" },
    { date: "Oct 7", value: 58, label: "Oct 7" },
    { date: "Oct 14", value: 55, label: "Oct 14" },
    { date: "Oct 21", value: 57, label: "Oct 21" },
    { date: "Oct 28", value: 56, label: "Oct 28" },
    { date: "Nov 4", value: 54, label: "Nov 4" },
    { date: "Nov 11", value: 54, label: "Nov 11" }
  ],
  maxValue = 80,
  className
}: ServiceDurationCardProps) {
  const total = data.reduce((acc, curr) => acc + curr.value, 0)
  const average = Math.round(total / data.length)
  const trend = data[data.length - 1].value - data[0].value

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative mb-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground">
            <span>{maxValue}</span>
            <span>{Math.round(maxValue * 0.75)}</span>
            <span>{Math.round(maxValue * 0.5)}</span>
            <span>{Math.round(maxValue * 0.25)}</span>
            <span>0</span>
          </div>

          {/* Chart area */}
          <div className="ml-8 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-full border-t",
                    ratio === 1 ? "border-input" : "border-muted/30"
                  )}
                />
              ))}
            </div>

            {/* Bars */}
            <div className="relative h-32 flex items-end justify-between gap-1 pt-4">
              {data.map((point, index) => {
                const height = (point.value / maxValue) * 100
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    {/* Bar */}
                    <div
                      className="w-full bg-foreground rounded-sm transition-all hover:opacity-80 cursor-pointer min-h-[4px]"
                      style={{ 
                        height: `${Math.max(height, 2)}%`,
                        minHeight: '4px'
                      }}
                      title={`${point.date}: ${point.value} ${title.toLowerCase().includes('minutes') ? 'minutes' : title.toLowerCase().includes('hours') ? 'hours' : 'points'}`}
                    />
                    {/* X-axis label */}
                    <span className="text-xs text-muted-foreground mt-2 text-center leading-tight">
                      {point.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm border-t border-input pt-3">
          <span className="text-muted-foreground">
            Average: {average} {title.toLowerCase().includes('minutes') ? 'min' : title.toLowerCase().includes('hours') ? 'hrs' : 'pts'}
          </span>
          <span className="text-muted-foreground">
            Trend: {trend > 0 ? '↑' : '↓'} {Math.abs(trend)} {title.toLowerCase().includes('minutes') ? 'min' : title.toLowerCase().includes('hours') ? 'hrs' : 'pts'}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceDurationCard 