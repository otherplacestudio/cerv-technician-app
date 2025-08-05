'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CommercialCalendarCardProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  onMonthChange?: (date: Date) => void
  className?: string
}

export const CommercialCalendarCard: React.FC<CommercialCalendarCardProps> = ({
  selectedDate = new Date(),
  onDateSelect,
  onMonthChange,
  className
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate))
  const [selectedDay, setSelectedDay] = useState(selectedDate)

  // Get month and year
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const monthName = monthNames[currentMonth.getMonth()]
  const year = currentMonth.getFullYear()

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  // Get first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Previous month days
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0)
    const daysInPrevMonth = getDaysInMonth(prevMonth)
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysInPrevMonth - i)
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isPrevMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      })
    }

    // Next month days to fill the grid
    const remainingDays = 42 - days.length // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isPrevMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i)
      })
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  // Navigation handlers
  const handlePrevMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    setCurrentMonth(newMonth)
    onMonthChange?.(newMonth)
  }

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    setCurrentMonth(newMonth)
    onMonthChange?.(newMonth)
  }

  const handleDateClick = (date: Date) => {
    setSelectedDay(date)
    onDateSelect?.(date)
  }

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear()
  }

  // Check if date is today
  const isToday = (date: Date) => {
    const today = new Date()
    return isSameDay(date, today)
  }

  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevMonth}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <h3 className="text-xl font-semibold text-foreground">
            {monthName} {year}
          </h3>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextMonth}
            className="h-8 w-8"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-2">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="py-2 text-sm font-medium text-muted-foreground"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              const isSelected = isSameDay(day.date, selectedDay)
              const isTodayDate = isToday(day.date)

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(day.date)}
                  className={cn(
                    "h-10 w-full rounded-md text-sm font-medium transition-colors",
                    "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    day.isCurrentMonth
                      ? "text-foreground"
                      : "text-muted-foreground/50",
                    isSelected && "bg-primary text-primary-foreground hover:bg-primary/90",
                    isTodayDate && !isSelected && "bg-accent text-accent-foreground",
                    !day.isCurrentMonth && !isSelected && "hover:bg-muted/50"
                  )}
                  disabled={!day.isCurrentMonth}
                >
                  {day.day}
                </button>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CommercialCalendarCard