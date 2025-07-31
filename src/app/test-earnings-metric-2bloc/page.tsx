'use client'

import React from 'react'
import { EarningsMetric2Bloc } from '@/components/cerv/EarningsMetric2Bloc'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestEarningsMetric2BlocPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Earnings Metrics Examples</h1>
        
        {/* Default earnings metrics */}
        <EarningsMetric2Bloc />
        
        {/* Custom earnings metrics */}
        <EarningsMetric2Bloc 
          earnings={{
            title: "Weekly Revenue",
            value: "$8,420",
            trend: {
              percentage: 12.3,
              direction: 'up'
            },
            iconColor: "text-green-600",
            trendColor: "text-green-600"
          }}
          missedEarnings={{
            title: "Lost Revenue",
            value: "$1,150",
            trend: {
              percentage: 5.2,
              direction: 'down'
            },
            iconColor: "text-red-600",
            trendColor: "text-red-600"
          }}
        />
        
        {/* Monthly performance metrics */}
        <EarningsMetric2Bloc 
          earnings={{
            title: "Monthly Earnings",
            value: "$24,800",
            trend: {
              percentage: 8.7,
              direction: 'up'
            },
            iconColor: "text-green-600",
            trendColor: "text-green-600"
          }}
          missedEarnings={{
            title: "Cancellations",
            value: "$3,200",
            trend: {
              percentage: 2.1,
              direction: 'down'
            },
            iconColor: "text-red-600",
            trendColor: "text-red-600"
          }}
        />
      </div>
    </div>
  )
} 