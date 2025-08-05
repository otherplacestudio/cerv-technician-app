'use client'

import React from 'react'
import { CommercialOverviewStatsCard } from '@/components/cerv/CommercialOverviewStatsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialOverviewStatsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Overview Stats Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialOverviewStatsCard />
        </div>

        {/* Custom User Name */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom User Name</h2>
          <CommercialOverviewStatsCard 
            userName="Sarah"
          />
        </div>

        {/* Custom Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Stats</h2>
          <CommercialOverviewStatsCard 
            userName="Michael"
            propertiesCount={15}
            issuesCount={3}
            visitsCount={28}
          />
        </div>

        {/* Custom Greeting */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Greeting</h2>
          <CommercialOverviewStatsCard 
            userName="Jennifer"
            greeting="Welcome back"
            propertiesCount={8}
            issuesCount={2}
            visitsCount={45}
          />
        </div>

        {/* Zero Values */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Zero Values</h2>
          <CommercialOverviewStatsCard 
            userName="Alex"
            propertiesCount={0}
            issuesCount={0}
            visitsCount={0}
          />
        </div>

        {/* Large Numbers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Large Numbers</h2>
          <CommercialOverviewStatsCard 
            userName="David"
            propertiesCount={127}
            issuesCount={89}
            visitsCount={456}
          />
        </div>
      </div>
    </div>
  )
}