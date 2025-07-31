'use client'

import React from 'react'
import { DollarSign, TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface DataPoint {
  date: string
  value: number
  label: string
}

interface EarningsCardProps {
  title?: string
  subtitle?: string
  data?: DataPoint[]
  trendPercentage?: number
  className?: string
}

export function EarningsCard({
  title = "Earnings",
  subtitle = "Monthly revenue performance",
  data = [
    { date: "Jan", value: 420, label: "Jan" },
    { date: "Feb", value: 580, label: "Feb" },
    { date: "Mar", value: 480, label: "Mar" },
    { date: "Apr", value: 320, label: "Apr" },
    { date: "May", value: 450, label: "May" },
    { date: "Jun", value: 520, label: "Jun" }
  ],
  trendPercentage = 5.2,
  className
}: EarningsCardProps) {
  // Ensure data is valid
  const validData = data.filter(item => typeof item.value === 'number' && !isNaN(item.value))
  
  const total = validData.reduce((acc, curr) => acc + curr.value, 0)
  const average = Math.round(total / validData.length)
  const currentValue = validData[validData.length - 1]?.value || 0
  const previousValue = validData[validData.length - 2]?.value || currentValue
  const calculatedTrend = previousValue > 0 ? Math.round(((currentValue - previousValue) / previousValue) * 100) : 0

  // Don't render if no valid data
  if (validData.length === 0) {
    return (
      <Card className={cn("w-full py-0 border-input", className)}>
        <CardContent className="px-3">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base">{title}</h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <div className="h-[200px] w-full flex items-center justify-center text-muted-foreground">
            No data available
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-4 w-full" style={{ height: '200px' }}>
          <AreaChart
            data={validData}
            margin={{
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            }}
            width={350}
            height={180}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="label" 
              tickMargin={12}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tickMargin={12}
              axisLine={false}
              tickLine={false}
            />
            <Area
              type="monotone"
              dataKey="value"
              fill="#3b82f6"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={0.3}
            />
          </AreaChart>
        </div>

        {/* Trend Information */}
        <div className="flex justify-center items-center gap-2 text-sm border-t border-input pt-3">
          <span className="text-muted-foreground">
            Trending up by {calculatedTrend}% this month
          </span>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
      </CardContent>
    </Card>
  )
}

export default EarningsCard 