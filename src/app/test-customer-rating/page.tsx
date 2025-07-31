'use client'

import React from 'react'
import { CustomerRatingCard } from '@/components/cerv/CustomerRatingCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCustomerRatingPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Customer Rating Examples</h1>
        
        {/* Default customer rating chart */}
        <CustomerRatingCard />
        
        {/* Weekly performance rating */}
        <CustomerRatingCard 
          title="Weekly Performance"
          subtitle="Last 8 weeks"
          data={[
            { date: "Week 1", rating: 4.6, label: "W1" },
            { date: "Week 2", rating: 4.7, label: "W2" },
            { date: "Week 3", rating: 4.8, label: "W3" },
            { date: "Week 4", rating: 4.9, label: "W4" },
            { date: "Week 5", rating: 4.85, label: "W5" },
            { date: "Week 6", rating: 4.9, label: "W6" },
            { date: "Week 7", rating: 4.95, label: "W7" },
            { date: "Week 8", rating: 4.9, label: "W8" }
          ]}
        />
        
        {/* Monthly satisfaction trend */}
        <CustomerRatingCard 
          title="Monthly Satisfaction"
          subtitle="Last 6 months"
          data={[
            { date: "Jan", rating: 4.5, label: "Jan" },
            { date: "Feb", rating: 4.6, label: "Feb" },
            { date: "Mar", rating: 4.7, label: "Mar" },
            { date: "Apr", rating: 4.8, label: "Apr" },
            { date: "May", rating: 4.9, label: "May" },
            { date: "Jun", rating: 4.85, label: "Jun" }
          ]}
        />
        
        {/* Quarterly performance */}
        <CustomerRatingCard 
          title="Quarterly Performance"
          subtitle="Last 4 quarters"
          data={[
            { date: "Q1", rating: 4.6, label: "Q1" },
            { date: "Q2", rating: 4.7, label: "Q2" },
            { date: "Q3", rating: 4.8, label: "Q3" },
            { date: "Q4", rating: 4.9, label: "Q4" }
          ]}
        />
      </div>
    </div>
  )
} 