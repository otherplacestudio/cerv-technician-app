'use client'

import React from 'react'
import { Star, TrendingUp, TrendingDown } from 'lucide-react'
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

interface DataPoint {
  date: string
  rating: number
  label: string
}

interface CustomerRatingCardProps {
  title?: string
  subtitle?: string
  data?: DataPoint[]
  className?: string
}

export function CustomerRatingCard({
  title = "Customer Rating",
  subtitle = "Last 7 weeks",
  data = [
    { date: "Sep 30", rating: 4.7, label: "Sep 30" },
    { date: "Oct 7", rating: 4.8, label: "Oct 7" },
    { date: "Oct 14", rating: 4.9, label: "Oct 14" },
    { date: "Oct 21", rating: 4.75, label: "Oct 21" },
    { date: "Oct 28", rating: 4.8, label: "Oct 28" },
    { date: "Nov 4", rating: 4.85, label: "Nov 4" },
    { date: "Nov 11", rating: 4.8, label: "Nov 11" }
  ],
  className
}: CustomerRatingCardProps) {
  // Ensure data is valid
  const validData = data.filter(item => typeof item.rating === 'number' && !isNaN(item.rating))
  
  const averageRating = validData.length > 0 
    ? (validData.reduce((acc, curr) => acc + curr.rating, 0) / validData.length).toFixed(1)
    : '0.0'
  
  const currentRating = validData[validData.length - 1]?.rating || 0
  const previousRating = validData[validData.length - 2]?.rating || currentRating
  const ratingChange = currentRating - previousRating
  const trendDirection = ratingChange > 0 ? 'up' : ratingChange < 0 ? 'down' : 'stable'
  const trendPercentage = Math.abs(ratingChange * 100).toFixed(1)

  // Don't render if no valid data
  if (validData.length === 0) {
    return (
      <Card className={cn("w-full py-0 border-input", className)}>
        <CardContent className="px-3">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
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
            <Star className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-4 w-full" style={{ height: '200px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={validData}
              margin={{
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="label" 
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[4.5, 5.0]}
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value.toFixed(1)}
              />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats and Trend */}
        <div className="flex justify-between items-center text-sm border-t border-input pt-3">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Avg Rating:</span>
            <span className="font-semibold">{averageRating}</span>
          </div>
          <div className="flex items-center gap-1">
            {trendDirection === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
            {trendDirection === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
            <span className={cn(
              "text-sm",
              trendDirection === 'up' ? 'text-green-600' : 
              trendDirection === 'down' ? 'text-red-600' : 'text-muted-foreground'
            )}>
              {trendDirection === 'stable' ? 'No change' : `${trendPercentage}% ${trendDirection}`}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerRatingCard 