'use client'

import React from 'react'
import { CommercialScoreBreakdownCard } from '@/components/cerv/CommercialScoreBreakdownCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialScoreBreakdownPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Score Breakdown Card Test
        </h1>

        {/* Default Props - Closed */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props - Closed</h2>
          <CommercialScoreBreakdownCard />
        </div>

        {/* Default Expanded */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Expanded</h2>
          <CommercialScoreBreakdownCard defaultExpanded={true} />
        </div>

        {/* Custom Score with Positive Trend */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">High Score with Positive Trend</h2>
          <CommercialScoreBreakdownCard 
            overallScore={95}
            trend={8}
            defaultExpanded={true}
            services={[
              { name: 'Exterior Maintenance', score: 98, color: 'bg-blue-500' },
              { name: 'Landscaping', score: 95, color: 'bg-green-500' },
              { name: 'Pool Maintenance', score: 96, color: 'bg-red-500' },
              { name: 'Pest Control', score: 99, color: 'bg-purple-500' },
              { name: 'Janitorial Services', score: 92, color: 'bg-blue-400' },
              { name: 'Tree Services', score: 94, color: 'bg-teal-500' },
              { name: 'Waste Management', score: 91, color: 'bg-orange-500' }
            ]}
          />
        </div>

        {/* Low Score with Negative Trend */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Low Score with Negative Trend</h2>
          <CommercialScoreBreakdownCard 
            overallScore={72}
            trend={-5}
            services={[
              { name: 'Exterior Maintenance', score: 65, color: 'bg-blue-500' },
              { name: 'Landscaping', score: 70, color: 'bg-green-500' },
              { name: 'Pool Maintenance', score: 68, color: 'bg-red-500' },
              { name: 'Pest Control', score: 75, color: 'bg-purple-500' },
              { name: 'Janitorial Services', score: 72, color: 'bg-blue-400' },
              { name: 'Tree Services', score: 78, color: 'bg-teal-500' },
              { name: 'Waste Management', score: 76, color: 'bg-orange-500' }
            ]}
          />
        </div>

        {/* No Trend */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Trend Change</h2>
          <CommercialScoreBreakdownCard 
            overallScore={80}
            trend={0}
            services={[
              { name: 'Exterior Maintenance', score: 80, color: 'bg-blue-500' },
              { name: 'Landscaping', score: 80, color: 'bg-green-500' },
              { name: 'Pool Maintenance', score: 80, color: 'bg-red-500' },
              { name: 'Pest Control', score: 80, color: 'bg-purple-500' },
              { name: 'Janitorial Services', score: 80, color: 'bg-blue-400' },
              { name: 'Tree Services', score: 80, color: 'bg-teal-500' },
              { name: 'Waste Management', score: 80, color: 'bg-orange-500' }
            ]}
          />
        </div>

        {/* Fewer Services */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Fewer Services</h2>
          <CommercialScoreBreakdownCard 
            overallScore={91}
            trend={2}
            defaultExpanded={true}
            services={[
              { name: 'Property Management', score: 95, color: 'bg-indigo-500' },
              { name: 'Security Services', score: 88, color: 'bg-red-600' },
              { name: 'HVAC Maintenance', score: 90, color: 'bg-blue-600' }
            ]}
          />
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Service Categories</h2>
          <CommercialScoreBreakdownCard 
            overallScore={84}
            trend={1}
            defaultExpanded={true}
            services={[
              { name: 'Customer Satisfaction', score: 92, color: 'bg-emerald-500' },
              { name: 'Response Time', score: 78, color: 'bg-amber-500' },
              { name: 'Quality of Service', score: 85, color: 'bg-cyan-500' },
              { name: 'Cost Efficiency', score: 81, color: 'bg-rose-500' },
              { name: 'Communication', score: 88, color: 'bg-violet-500' }
            ]}
          />
        </div>
      </div>
    </div>
  )
}