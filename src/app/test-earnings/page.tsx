'use client'

import React from 'react'
import { EarningsCard } from '@/components/cerv/EarningsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestEarningsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Earnings Examples</h1>
        
        {/* Default earnings chart with realistic data */}
        <EarningsCard />
        
        {/* Revenue performance with weekly data */}
        <EarningsCard 
          title="Revenue Performance"
          subtitle="Weekly revenue trends"
          data={[
            { date: "Week 1", value: 850, label: "W1" },
            { date: "Week 2", value: 920, label: "W2" },
            { date: "Week 3", value: 880, label: "W3" },
            { date: "Week 4", value: 950, label: "W4" },
            { date: "Week 5", value: 890, label: "W5" },
            { date: "Week 6", value: 970, label: "W6" },
            { date: "Week 7", value: 1020, label: "W7" },
            { date: "Week 8", value: 980, label: "W8" }
          ]}
        />
        
        {/* Monthly performance with quarterly trends */}
        <EarningsCard 
          title="Monthly Performance"
          subtitle="Monthly revenue growth"
          data={[
            { date: "Jan", value: 3200, label: "Jan" },
            { date: "Feb", value: 3800, label: "Feb" },
            { date: "Mar", value: 4200, label: "Mar" },
            { date: "Apr", value: 3900, label: "Apr" },
            { date: "May", value: 4500, label: "May" },
            { date: "Jun", value: 4800, label: "Jun" },
            { date: "Jul", value: 5200, label: "Jul" },
            { date: "Aug", value: 4900, label: "Aug" },
            { date: "Sep", value: 5500, label: "Sep" },
            { date: "Oct", value: 5800, label: "Oct" },
            { date: "Nov", value: 6200, label: "Nov" },
            { date: "Dec", value: 6500, label: "Dec" }
          ]}
        />
        
        {/* Quarterly performance with seasonal trends */}
        <EarningsCard 
          title="Quarterly Performance"
          subtitle="Quarterly revenue trends"
          data={[
            { date: "Q1", value: 11200, label: "Q1" },
            { date: "Q2", value: 13200, label: "Q2" },
            { date: "Q3", value: 15600, label: "Q3" },
            { date: "Q4", value: 18700, label: "Q4" }
          ]}
        />
        
        {/* Customer satisfaction trend */}
        <EarningsCard 
          title="Customer Satisfaction"
          subtitle="Monthly satisfaction scores"
          data={[
            { date: "Jan", value: 4.2, label: "Jan" },
            { date: "Feb", value: 4.3, label: "Feb" },
            { date: "Mar", value: 4.5, label: "Mar" },
            { date: "Apr", value: 4.4, label: "Apr" },
            { date: "May", value: 4.6, label: "May" },
            { date: "Jun", value: 4.7, label: "Jun" }
          ]}
        />
      </div>
    </div>
  )
} 