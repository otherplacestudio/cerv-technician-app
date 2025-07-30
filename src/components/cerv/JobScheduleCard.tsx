'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
        return 'secondary' // Will style this green with className
      case 'active':
        return 'default' // Will style this blue with className
      default:
        return 'secondary'
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
    <Card className={cn("w-full py-3 border-input", className)}>
      <CardContent className="px-6">
        {/* Optional Header */}
        <div className="mb-4">
          <h3 className="font-semibold text-base">{date}&apos;s Schedule</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
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
          {/* Vertical line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white/15" />
          
          {/* Time slots */}
          <div className="space-y-0">
            {slots.map((slot, index) => (
              <div key={slot.id} className="relative flex">
                {/* Time column */}
                <div className="w-24 flex-shrink-0 py-2">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {slot.time}
                  </div>
                  {index < slots.length - 1 && (
                    <div className="text-sm text-gray-400 dark:text-gray-500 mt-8">
                      {getEndTime(slot.time, index)}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-5">
                  {slot.type === 'travel' ? (
                    // Travel card
                    <div className="bg-gray-100 dark:!bg-[#2E2E2E] rounded-lg p-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 dark:!text-white" />
                      <span className="text-sm font-medium text-gray-700 dark:!text-white">Travel • {slot.duration}</span>
                    </div>
                  ) : (
                    // Job card
                    <div 
                      className={cn(
                        "bg-[#C3D6FD] dark:bg-[#000] text-black dark:text-white rounded-lg p-4 cursor-pointer transition-all hover:shadow-md",
                        slot.status === 'active' && "ring-2 ring-blue-500"
                      )}
                      onClick={() => onJobClick && onJobClick(slot)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-base text-black dark:text-white">{slot.customer?.name}</h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {slot.customer?.address}
                          </p>
                        </div>
                        {slot.status && (
                          <Badge 
                            variant={getStatusVariant(slot.status)} 
                            className={cn(
                              "ml-2",
                              slot.status === 'done' && "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 hover:bg-green-100",
                              slot.status === 'active' && "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100"
                            )}
                          >
                            {slot.status.charAt(0).toUpperCase() + slot.status.slice(1)}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-200 border-transparent">
                          {slot.customer?.serviceType}
                        </Badge>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
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