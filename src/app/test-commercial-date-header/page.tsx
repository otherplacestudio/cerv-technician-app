'use client'

import React, { useState } from 'react'
import { CommercialDateHeaderCard } from '@/components/cerv/CommercialDateHeaderCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialDateHeaderPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleAddService = () => {
    console.log('Add Service clicked')
    alert('Add Service clicked')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Date Header Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialDateHeaderCard />
        </div>

        {/* With Add Service Button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">With Add Service Button</h2>
          <CommercialDateHeaderCard 
            onAddService={handleAddService}
          />
        </div>

        {/* Custom Date */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Date</h2>
          <CommercialDateHeaderCard 
            date={new Date(2024, 11, 25)} // December 25, 2024
            onAddService={handleAddService}
          />
        </div>

        {/* Custom Empty State Message */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Empty State Message</h2>
          <CommercialDateHeaderCard 
            date={new Date(2024, 0, 1)} // January 1, 2024
            emptyStateMessage="No bookings available on New Year's Day"
            onAddService={handleAddService}
          />
        </div>

        {/* Without Empty State */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Empty State</h2>
          <CommercialDateHeaderCard 
            showEmptyState={false}
            onAddService={handleAddService}
          />
        </div>

        {/* Without Add Button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Add Button</h2>
          <CommercialDateHeaderCard />
        </div>

        {/* Different Dates */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Dates</h2>
          
          {/* Today */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Today</h3>
            <CommercialDateHeaderCard 
              date={new Date()}
              onAddService={handleAddService}
            />
          </div>

          {/* Tomorrow */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Tomorrow</h3>
            <CommercialDateHeaderCard 
              date={new Date(Date.now() + 86400000)}
              onAddService={handleAddService}
            />
          </div>

          {/* Next Week */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Next Week</h3>
            <CommercialDateHeaderCard 
              date={new Date(Date.now() + 7 * 86400000)}
              onAddService={handleAddService}
            />
          </div>
        </div>

        {/* Special Messages */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Special Messages</h2>
          
          <CommercialDateHeaderCard 
            date={new Date(2024, 5, 15)} // June 15, 2024
            emptyStateMessage="Enjoy your summer break! No services today."
            onAddService={handleAddService}
          />

          <CommercialDateHeaderCard 
            date={new Date(2024, 9, 31)} // October 31, 2024
            emptyStateMessage="Happy Halloween! 🎃 No services scheduled."
            onAddService={handleAddService}
          />
        </div>

        {/* In a Container */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">In a Container</h2>
          <div className="max-w-2xl mx-auto bg-muted/20 p-6 rounded-lg">
            <CommercialDateHeaderCard 
              date={selectedDate}
              onAddService={handleAddService}
            />
          </div>
        </div>

        {/* Combined with Calendar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Interactive Date Selection</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Today
              </button>
              <button
                onClick={() => setSelectedDate(new Date(2024, 7, 15))}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                August 15
              </button>
              <button
                onClick={() => setSelectedDate(new Date(2024, 11, 31))}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                December 31
              </button>
            </div>
            <CommercialDateHeaderCard 
              date={selectedDate}
              onAddService={handleAddService}
            />
          </div>
        </div>

        {/* Loading State Simulation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Empty States</h2>
          
          <CommercialDateHeaderCard 
            emptyStateMessage="Loading services..."
            onAddService={handleAddService}
          />

          <CommercialDateHeaderCard 
            emptyStateMessage="No services found in your area"
            onAddService={handleAddService}
          />

          <CommercialDateHeaderCard 
            emptyStateMessage="All time slots are booked for this date"
            onAddService={handleAddService}
          />
        </div>

        {/* Minimal Version */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Minimal Version</h2>
          <CommercialDateHeaderCard 
            showEmptyState={false}
          />
        </div>
      </div>
    </div>
  )
}