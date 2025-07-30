'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Map } from 'lucide-react'

// Stat data structure
interface Stat {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}

interface DailyStatsCardProps {
  stats?: Stat[]
  className?: string
}

export function DailyStatsCard({
  stats = [
    {
      id: 'drive-time',
      icon: Clock,
      label: 'Drive time',
      value: '2h 5m'
    },
    {
      id: 'on-site-time',
      icon: Clock,
      label: 'On-site time',
      value: '5h'
    },
    {
      id: 'distance',
      icon: Map,
      label: 'Distance',
      value: '28.5 mi'
    }
  ],
  className
}: DailyStatsCardProps) {
  return (
    <Card className={cn("w-full py-3 border-input", className)}>
      <CardContent className="px-3">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            
            return (
              <div key={stat.id} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="text-muted-foreground mb-1">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Value */}
                <div className="font-semibold text-base">
                  {stat.value}
                </div>
                
                {/* Label */}
                <h4 className="text-[10px] font-medium text-muted-foreground mt-0.5">
                  {stat.label}
                </h4>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default DailyStatsCard