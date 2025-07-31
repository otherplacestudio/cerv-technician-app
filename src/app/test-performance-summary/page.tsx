'use client'

import React from 'react'
import { PerformanceSummaryCard } from '@/components/cerv/PerformanceSummaryCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestPerformanceSummaryPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-sm mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Performance Summary Examples</h1>
        
        {/* Default metrics */}
        <PerformanceSummaryCard />
        
        {/* Custom metrics example */}
        <PerformanceSummaryCard 
          completionRate={98.5}
          onTimeArrival={92.0}
          customerRating={4.9}
          routeEfficiency={94}
        />
        
        {/* Lower performance example */}
        <PerformanceSummaryCard 
          completionRate={85.0}
          onTimeArrival={88.5}
          customerRating={4.2}
          routeEfficiency={75}
        />
      </div>
    </div>
  )
}