'use client'

import React from 'react'
import { RouteEfficiencyCard } from '@/components/cerv/RouteEfficiencyCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestRouteEfficiencyPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Route Efficiency Examples</h1>
        
        {/* Default route efficiency chart */}
        <RouteEfficiencyCard />
        
        {/* Weekly efficiency performance */}
        <RouteEfficiencyCard 
          title="Weekly Efficiency"
          subtitle="Score out of 100"
          data={[
            { date: "Week 1", efficiency: 78.5, label: "W1" },
            { date: "Week 2", efficiency: 82.3, label: "W2" },
            { date: "Week 3", efficiency: 85.7, label: "W3" },
            { date: "Week 4", efficiency: 88.2, label: "W4" },
            { date: "Week 5", efficiency: 86.9, label: "W5" },
            { date: "Week 6", efficiency: 89.5, label: "W6" },
            { date: "Week 7", efficiency: 91.2, label: "W7" },
            { date: "Week 8", efficiency: 90.8, label: "W8" }
          ]}
        />
        
        {/* Monthly efficiency trend */}
        <RouteEfficiencyCard 
          title="Monthly Efficiency"
          subtitle="Score out of 100"
          data={[
            { date: "Jan", efficiency: 75.2, label: "Jan" },
            { date: "Feb", efficiency: 78.9, label: "Feb" },
            { date: "Mar", efficiency: 82.1, label: "Mar" },
            { date: "Apr", efficiency: 85.4, label: "Apr" },
            { date: "May", efficiency: 88.7, label: "May" },
            { date: "Jun", efficiency: 91.3, label: "Jun" }
          ]}
        />
        
        {/* Quarterly efficiency */}
        <RouteEfficiencyCard 
          title="Quarterly Efficiency"
          subtitle="Score out of 100"
          data={[
            { date: "Q1", efficiency: 78.5, label: "Q1" },
            { date: "Q2", efficiency: 84.2, label: "Q2" },
            { date: "Q3", efficiency: 89.1, label: "Q3" },
            { date: "Q4", efficiency: 92.8, label: "Q4" }
          ]}
        />
      </div>
    </div>
  )
} 