'use client'

import React from 'react'
import { Building2, AlertCircle, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CommercialOverviewStatsCardProps {
  userName?: string
  greeting?: string
  propertiesCount?: number
  issuesCount?: number
  visitsCount?: number
  className?: string
}

export const CommercialOverviewStatsCard: React.FC<CommercialOverviewStatsCardProps> = ({
  userName = 'Robert',
  greeting,
  propertiesCount = 3,
  issuesCount = 7,
  visitsCount = 12,
  className
}) => {
  // Generate greeting based on time of day if not provided
  const getGreeting = () => {
    if (greeting) return greeting
    
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const stats = [
    {
      icon: Building2,
      value: propertiesCount,
      label: 'Properties',
      borderRight: true
    },
    {
      icon: AlertCircle,
      value: issuesCount,
      label: 'Issues',
      borderRight: true
    },
    {
      icon: Calendar,
      value: visitsCount,
      label: 'Visits',
      borderRight: false
    }
  ]

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Greeting */}
      <h2 className="text-2xl font-semibold text-foreground">
        {getGreeting()}, {userName}.
      </h2>

      {/* Stats Card */}
      <Card className="border-input bg-card">
        <CardContent className="p-0">
          <div className="flex divide-x divide-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={cn(
                    "flex-1 px-6 py-6 flex flex-col items-center justify-center text-center",
                    stat.borderRight && index < stats.length - 1 && "border-r border-border"
                  )}
                >
                  <Icon className="h-6 w-6 text-muted-foreground mb-2" />
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CommercialOverviewStatsCard