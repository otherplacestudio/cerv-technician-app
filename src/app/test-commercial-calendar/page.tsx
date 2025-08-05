'use client'

import React, { useState } from 'react'
import { CommercialCalendarCard } from '@/components/cerv/CommercialCalendarCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialCalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [lastAction, setLastAction] = useState('')

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setLastAction(`Date selected: ${formattedDate}`)
    console.log('Date selected:', date)
  }

  const handleMonthChange = (date: Date) => {
    const monthYear = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
    setLastAction(`Month changed to: ${monthYear}`)
    console.log('Month changed:', date)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Calendar Card Test
        </h1>

        {/* Default Calendar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Calendar</h2>
          <CommercialCalendarCard />
        </div>

        {/* Controlled Calendar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Controlled Calendar</h2>
          <CommercialCalendarCard 
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            onMonthChange={handleMonthChange}
          />
          {lastAction && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">{lastAction}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Selected Date: {selectedDate.toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        {/* Different Starting Dates */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Starting Dates</h2>
          
          {/* January 2024 */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">January 2024</h3>
            <CommercialCalendarCard 
              selectedDate={new Date(2024, 0, 15)}
              onDateSelect={handleDateSelect}
            />
          </div>

          {/* December 2024 */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">December 2024</h3>
            <CommercialCalendarCard 
              selectedDate={new Date(2024, 11, 25)}
              onDateSelect={handleDateSelect}
            />
          </div>

          {/* February 2024 (Leap Year) */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">February 2024 (Leap Year)</h3>
            <CommercialCalendarCard 
              selectedDate={new Date(2024, 1, 29)}
              onDateSelect={handleDateSelect}
            />
          </div>
        </div>

        {/* Multiple Calendars Side by Side */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Side by Side Calendars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Current Month</h3>
              <CommercialCalendarCard 
                selectedDate={new Date()}
                onDateSelect={handleDateSelect}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Next Month</h3>
              <CommercialCalendarCard 
                selectedDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)}
                onDateSelect={handleDateSelect}
              />
            </div>
          </div>
        </div>

        {/* Custom Width */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Width</h2>
          <div className="max-w-sm">
            <CommercialCalendarCard 
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </div>
        </div>

        {/* Year Navigation Test */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Year Boundaries</h2>
          
          {/* December to January */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Navigate from December 2023 to January 2024
            </h3>
            <CommercialCalendarCard 
              selectedDate={new Date(2023, 11, 31)}
              onDateSelect={handleDateSelect}
              onMonthChange={handleMonthChange}
            />
          </div>
        </div>

        {/* Today Highlight */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Today Highlight</h2>
          <p className="text-sm text-muted-foreground">
            Today's date is automatically highlighted with an accent background
          </p>
          <CommercialCalendarCard 
            selectedDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
            onDateSelect={handleDateSelect}
          />
        </div>

        {/* Disabled Previous/Next Month Dates */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Month Boundaries</h2>
          <p className="text-sm text-muted-foreground">
            Previous and next month dates are shown but not selectable
          </p>
          <CommercialCalendarCard 
            onDateSelect={handleDateSelect}
          />
        </div>
      </div>
    </div>
  )
}