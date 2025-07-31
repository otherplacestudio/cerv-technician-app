'use client'

import React from 'react'
import { ServiceDurationCard } from '@/components/cerv/ServiceDurationCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestServiceDurationPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Service Duration Examples</h1>
        
        {/* Default chart with realistic data */}
        <ServiceDurationCard />
        
        {/* Response time example */}
        <ServiceDurationCard 
          title="Response Time"
          subtitle="Average response time in hours (last 6 weeks)"
          data={[
            { date: "Week 1", value: 2.5, label: "W1" },
            { date: "Week 2", value: 2.1, label: "W2" },
            { date: "Week 3", value: 1.8, label: "W3" },
            { date: "Week 4", value: 1.9, label: "W4" },
            { date: "Week 5", value: 1.6, label: "W5" },
            { date: "Week 6", value: 1.4, label: "W6" }
          ]}
          maxValue={3}
        />
        
        {/* Customer satisfaction example */}
        <ServiceDurationCard 
          title="Customer Satisfaction"
          subtitle="Rating score (last 8 weeks)"
          data={[
            { date: "Week 1", value: 4.2, label: "W1" },
            { date: "Week 2", value: 4.3, label: "W2" },
            { date: "Week 3", value: 4.5, label: "W3" },
            { date: "Week 4", value: 4.4, label: "W4" },
            { date: "Week 5", value: 4.6, label: "W5" },
            { date: "Week 6", value: 4.7, label: "W6" },
            { date: "Week 7", value: 4.8, label: "W7" },
            { date: "Week 8", value: 4.9, label: "W8" }
          ]}
          maxValue={5}
        />
      </div>
    </div>
  )
} 