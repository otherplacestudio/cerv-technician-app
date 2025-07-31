'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Time slot data structure
interface TimeSlot {
  id: string
  time: string
  type: 'travel' | 'job'
  duration?: string
  customer?: {
    name: string
    address: string
    serviceType: string
  }
  status?: 'done' | 'active' | 'pending'
}

interface JobScheduleCardProps {
  date?: string
  slots?: TimeSlot[]
  onJobClick?: (job: TimeSlot) => void
  className?: string
}

export function JobScheduleCard({
  date = "Today",
  slots = [
    {
      id: '1',
      time: '8:00',
      type: 'travel',
      duration: '25 min'
    },
    {
      id: '2',
      time: '8:30',
      type: 'job',
      duration: '1h',
      customer: {
        name: 'Sarah Johnson',
        address: '1234 Maple Avenue, San Francisco',
        serviceType: 'CERV POOL'
      },
      status: 'done'
    },
    {
      id: '3',
      time: '9:30',
      type: 'travel',
      duration: '15 min'
    },
    {
      id: '4',
      time: '10:00',
      type: 'job',
      duration: '1h',
      customer: {
        name: 'Michael Chen',
        address: '567 Oak Street, San Francisco',
        serviceType: 'CERV POOL'
      },
      status: 'done'
    },
    {
      id: '5',
      time: '10:30',
      type: 'travel',
      duration: '30 min'
    },
    {
      id: '6',
      time: '11:00',
      type: 'job',
      duration: '1h',
      customer: {
        name: 'Emily Rodriguez',
        address: '890 Pine Road, San Francisco',
        serviceType: 'CERV POOL'
      },
      status: 'active'
    }
  ],
  onJobClick,
  className
}: JobScheduleCardProps) {
  // Helper function to get status variant
  const getStatusVariant = (status?: string) => {
    switch(status) {
      case 'done':
        return 'secondary' as const
      case 'active':
        return 'default' as const
      default:
        return 'secondary' as const
    }
  }

  // Helper function to get the end time
  const getEndTime = (startTime: string, index: number) => {
    if (index < slots.length - 1) {
      return slots[index + 1].time
    }
    // For the last slot, calculate based on duration
    if (slots[index].duration) {
      const [hours, minutes] = startTime.split(':').map(Number)
      const durationHours = slots[index].duration.includes('h') ? parseInt(slots[index].duration) : 0
      const endHours = hours + durationHours + 1 // Adding 1 for buffer
      return `${endHours}:${minutes.toString().padStart(2, '0')}`
    }
    return ''
  }

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Optional Header */}
        <div className="mb-3">
          <h3 className="font-semibold text-base">{date}&apos;s Schedule</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - positioned between time and content */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-muted" />
          
          {/* Time slots */}
          <div className="space-y-0">
            {slots.map((slot, index) => (
              <div key={slot.id} className="relative flex">
                {/* Time column */}
                <div className="w-16 flex-shrink-0 py-2 pr-3">
                  <div className="text-sm font-medium text-muted-foreground">
                    {slot.time}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-3 pl-4">
                  {slot.type === 'travel' ? (
                    // Travel card
                    <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Travel • {slot.duration}</span>
                    </div>
                  ) : (
                    // Job card
                    <div 
                      className={cn(
                        "bg-card text-card-foreground rounded-lg p-4 cursor-pointer transition-all hover:shadow-md border border-input",
                        slot.status === 'active' && "ring-2 ring-primary"
                      )}
                      onClick={() => onJobClick && onJobClick(slot)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-base">{slot.customer?.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {slot.customer?.address}
                          </p>
                        </div>
                        {slot.status && (
                          <Badge 
                            variant={getStatusVariant(slot.status)} 
                            className={cn(
                              "ml-2",
                              slot.status === 'done' && "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
                              slot.status === 'active' && "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                            )}
                          >
                            {slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-200 border-transparent">
                          {slot.customer?.serviceType?.replace(/^CERV\s+/i, '')}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {slot.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default JobScheduleCard