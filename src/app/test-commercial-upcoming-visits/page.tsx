'use client'

import React from 'react'
import { CommercialUpcomingVisitsCard } from '@/components/cerv/CommercialUpcomingVisitsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialUpcomingVisitsPage() {
  const handleViewAll = () => {
    console.log('View all visits clicked')
    alert('View all visits clicked')
  }

  const handleVisitClick = (visit: any) => {
    console.log('Visit clicked:', visit)
    alert(`Visit clicked: ${visit.serviceType} - ${visit.technicianName}`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Upcoming Visits Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialUpcomingVisitsCard 
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* Multiple Visits */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Visits</h2>
          <CommercialUpcomingVisitsCard 
            visits={[
              {
                id: '1',
                serviceType: 'HVAC Maintenance',
                status: 'Scheduled',
                date: 'Today',
                timeSlot: '8:00 - 10:00 AM',
                technicianName: 'John Smith',
                backgroundColor: 'bg-green-600',
                textColor: 'text-white'
              },
              {
                id: '2',
                serviceType: 'Landscaping',
                status: 'Scheduled',
                date: 'Today',
                timeSlot: '11:00 AM - 1:00 PM',
                technicianName: 'Maria Garcia',
                backgroundColor: 'bg-emerald-600',
                textColor: 'text-white'
              },
              {
                id: '3',
                serviceType: 'Pool Maintenance',
                status: 'In Progress',
                date: 'Tomorrow',
                timeSlot: '9:00 - 11:00 AM',
                technicianName: 'David Lee',
                backgroundColor: 'bg-cyan-600',
                textColor: 'text-white'
              },
              {
                id: '4',
                serviceType: 'Security Check',
                status: 'Scheduled',
                date: 'Wed, Dec 6',
                timeSlot: '3:00 - 5:00 PM',
                technicianName: 'Alex Turner',
                backgroundColor: 'bg-red-600',
                textColor: 'text-white'
              }
            ]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* Different Statuses */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Statuses</h2>
          <CommercialUpcomingVisitsCard 
            visits={[
              {
                id: '1',
                serviceType: 'Janitorial Services',
                status: 'In Progress',
                date: 'Now',
                timeSlot: '2:00 - 6:00 PM',
                technicianName: 'Team Alpha',
                backgroundColor: 'bg-orange-600',
                textColor: 'text-white'
              },
              {
                id: '2',
                serviceType: 'Electrical Inspection',
                status: 'Completed',
                date: 'Today',
                timeSlot: '10:00 AM - 12:00 PM',
                technicianName: 'Robert Wilson',
                backgroundColor: 'bg-gray-600',
                textColor: 'text-white'
              },
              {
                id: '3',
                serviceType: 'Plumbing Repair',
                status: 'Cancelled',
                date: 'Tomorrow',
                timeSlot: '1:00 - 3:00 PM',
                technicianName: 'James Brown',
                backgroundColor: 'bg-slate-600',
                textColor: 'text-white'
              }
            ]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Colors</h2>
          <CommercialUpcomingVisitsCard 
            visits={[
              {
                id: '1',
                serviceType: 'Emergency Response',
                status: 'Scheduled',
                date: 'Today',
                timeSlot: 'On Call',
                technicianName: 'Emergency Team',
                backgroundColor: 'bg-gradient-to-r from-red-600 to-orange-600',
                textColor: 'text-white'
              },
              {
                id: '2',
                serviceType: 'Premium Service',
                status: 'Scheduled',
                date: 'Tomorrow',
                timeSlot: '10:00 AM - 2:00 PM',
                technicianName: 'VIP Team',
                backgroundColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
                textColor: 'text-white'
              }
            ]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* Single Visit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Visit</h2>
          <CommercialUpcomingVisitsCard 
            visits={[
              {
                id: '1',
                serviceType: 'Monthly Inspection',
                status: 'Scheduled',
                date: 'Next Monday',
                timeSlot: '9:00 AM - 12:00 PM',
                technicianName: 'Jennifer White',
                backgroundColor: 'bg-indigo-600',
                textColor: 'text-white'
              }
            ]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* No Visits */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Visits</h2>
          <CommercialUpcomingVisitsCard 
            visits={[]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>

        {/* Long Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names</h2>
          <CommercialUpcomingVisitsCard 
            visits={[
              {
                id: '1',
                serviceType: 'Comprehensive Building Maintenance and Inspection',
                status: 'Scheduled',
                date: 'Monday, December 5th, 2024',
                timeSlot: '8:00 AM - 5:00 PM',
                technicianName: 'Christopher Alexander Thompson Jr.',
                backgroundColor: 'bg-teal-600',
                textColor: 'text-white'
              }
            ]}
            onViewAll={handleViewAll}
            onVisitClick={handleVisitClick}
          />
        </div>
      </div>
    </div>
  )
}