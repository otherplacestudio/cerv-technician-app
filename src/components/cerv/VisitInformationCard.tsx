'use client'

import React from 'react'
import { Calendar, Clock, User, MapPin, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface VisitInformationCardProps {
  date?: string
  dateLabel?: string
  timeSlot?: string
  duration?: string
  technicianName?: string
  technicianRating?: number
  location?: string
  locationLabel?: string
  className?: string
}

export const VisitInformationCard: React.FC<VisitInformationCardProps> = ({
  date = 'Today',
  dateLabel = 'Date',
  timeSlot = '9:00 - 11:00 AM',
  duration = '2 hours',
  technicianName = 'Mike Johnson',
  technicianRating = 4.88918437391028,
  location = 'Meridian Plaza',
  locationLabel = 'Service Location',
  className
}) => {
  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Visit Information
        </h3>

        <div className="space-y-6">
          {/* Date */}
          <div className="flex items-start gap-4">
            <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-base font-medium text-foreground">
                {date}
              </p>
              <p className="text-sm text-muted-foreground">
                {dateLabel}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-base font-medium text-foreground">
                {timeSlot}
              </p>
              <p className="text-sm text-muted-foreground">
                Estimated Duration: {duration}
              </p>
            </div>
          </div>

          {/* Technician */}
          <div className="flex items-start gap-4">
            <User className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-base font-medium text-foreground">
                {technicianName}
              </p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm text-muted-foreground">
                  {technicianRating} rating
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1 space-y-1">
              <p className="text-base font-medium text-foreground">
                {location}
              </p>
              <p className="text-sm text-muted-foreground">
                {locationLabel}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default VisitInformationCard