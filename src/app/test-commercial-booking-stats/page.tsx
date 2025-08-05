'use client'

import React from 'react'
import { CommercialBookingStatsCard } from '@/components/cerv/CommercialBookingStatsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialBookingStatsPage() {
  const handleBack = () => {
    console.log('Back button clicked')
    alert('Back button clicked')
  }

  const handleStatClick = (stat: string) => {
    console.log(`${stat} clicked`)
    alert(`${stat} clicked`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Booking Stats Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialBookingStatsCard 
            onBack={handleBack}
          />
        </div>

        {/* Without Back Button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Back Button</h2>
          <CommercialBookingStatsCard />
        </div>

        {/* Custom Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Stats</h2>
          <CommercialBookingStatsCard 
            title="Service Overview"
            subtitle="Track your service requests and their status"
            stats={[
              { 
                label: 'Pending', 
                value: 5,
                onClick: () => handleStatClick('Pending')
              },
              { 
                label: 'Active', 
                value: 3,
                onClick: () => handleStatClick('Active')
              },
              { 
                label: 'Completed', 
                value: 27,
                onClick: () => handleStatClick('Completed')
              },
              { 
                label: 'Rejected', 
                value: 2,
                onClick: () => handleStatClick('Rejected')
              }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* High Numbers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">High Numbers</h2>
          <CommercialBookingStatsCard 
            title="Annual Summary"
            subtitle="Total bookings for the year"
            stats={[
              { label: 'Q1', value: 156 },
              { label: 'Q2', value: 243 },
              { label: 'Q3', value: 198 },
              { label: 'Q4', value: 312 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Zero Values */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Zero Values</h2>
          <CommercialBookingStatsCard 
            title="New Account"
            subtitle="Start booking services to see your history"
            stats={[
              { label: 'Upcoming', value: 0 },
              { label: 'In Progress', value: 0 },
              { label: 'Completed', value: 0 },
              { label: 'Cancelled', value: 0 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Three Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Three Stats</h2>
          <CommercialBookingStatsCard 
            title="Quick Stats"
            subtitle="Overview of current status"
            stats={[
              { label: 'Active', value: 7 },
              { label: 'Pending', value: 3 },
              { label: 'Completed', value: 45 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Five Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Five Stats</h2>
          <CommercialBookingStatsCard 
            title="Detailed Breakdown"
            subtitle="All booking categories"
            stats={[
              { label: 'New', value: 4 },
              { label: 'Processing', value: 8 },
              { label: 'Active', value: 12 },
              { label: 'Complete', value: 67 },
              { label: 'Archived', value: 234 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* No Subtitle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Subtitle</h2>
          <CommercialBookingStatsCard 
            title="Bookings"
            subtitle=""
            stats={[
              { label: 'Upcoming', value: 2 },
              { label: 'In Progress', value: 1 },
              { label: 'Completed', value: 15 },
              { label: 'Cancelled', value: 0 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Work Order Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Work Orders</h2>
          <CommercialBookingStatsCard 
            title="Work Order Status"
            subtitle="Current work order distribution"
            stats={[
              { label: 'Open', value: 14 },
              { label: 'Assigned', value: 8 },
              { label: 'Closed', value: 112 },
              { label: 'On Hold', value: 3 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Property Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Properties</h2>
          <CommercialBookingStatsCard 
            title="Property Services"
            subtitle="Services across all properties"
            stats={[
              { label: 'Scheduled', value: 6 },
              { label: 'Today', value: 2 },
              { label: 'This Week', value: 18 },
              { label: 'This Month', value: 54 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Two Stats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Two Stats Only</h2>
          <CommercialBookingStatsCard 
            title="Simple View"
            subtitle="Basic status overview"
            stats={[
              { label: 'Active', value: 3 },
              { label: 'Completed', value: 21 }
            ]}
            onBack={handleBack}
          />
        </div>

        {/* Long Labels */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Labels</h2>
          <CommercialBookingStatsCard 
            title="Comprehensive Service Booking History and Analytics"
            subtitle="View detailed breakdown of all your past service bookings, requests, and maintenance issues"
            stats={[
              { label: 'Awaiting Approval', value: 3 },
              { label: 'Currently Processing', value: 7 },
              { label: 'Successfully Completed', value: 156 },
              { label: 'Permanently Cancelled', value: 12 }
            ]}
            onBack={handleBack}
          />
        </div>
      </div>
    </div>
  )
}