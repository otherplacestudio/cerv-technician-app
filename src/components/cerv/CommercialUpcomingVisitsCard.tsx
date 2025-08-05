'use client'

import React from 'react'
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Visit {
  id: string
  serviceType: string
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled'
  date: string
  timeSlot: string
  technicianName: string
  backgroundColor?: string
  textColor?: string
}

interface CommercialUpcomingVisitsCardProps {
  visits?: Visit[]
  onViewAll?: () => void
  onVisitClick?: (visit: Visit) => void
  className?: string
}

export const CommercialUpcomingVisitsCard: React.FC<CommercialUpcomingVisitsCardProps> = ({
  visits = [
    {
      id: '1',
      serviceType: 'Pest Control',
      status: 'Scheduled',
      date: 'Today',
      timeSlot: '9:00 - 11:00 AM',
      technicianName: 'Mike Johnson',
      backgroundColor: 'bg-purple-600',
      textColor: 'text-white'
    },
    {
      id: '2',
      serviceType: 'Exterior Maintenance',
      status: 'Scheduled',
      date: 'Tomorrow',
      timeSlot: '2:00 - 4:00 PM',
      technicianName: 'Sarah Chen',
      backgroundColor: 'bg-blue-600',
      textColor: 'text-white'
    }
  ],
  onViewAll,
  onVisitClick,
  className
}) => {
  const getStatusBadgeVariant = (status: Visit['status']) => {
    switch (status) {
      case 'Scheduled':
        return 'secondary'
      case 'In Progress':
        return 'default'
      case 'Completed':
        return 'success'
      case 'Cancelled':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  const getBackgroundColor = (backgroundColor?: string) => {
    return backgroundColor || 'bg-primary'
  }

  const getTextColor = (textColor?: string) => {
    return textColor || 'text-primary-foreground'
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-foreground">
            Upcoming Visits
          </h2>
          <span className="text-2xl text-muted-foreground">
            ({visits.length})
          </span>
        </div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-foreground hover:text-primary"
          onClick={onViewAll}
        >
          <Calendar className="h-5 w-5" />
          <span className="font-medium">View All</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Visits List */}
      <div className="space-y-4">
        {visits.length === 0 ? (
          <Card className="border-input bg-card">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                No upcoming visits scheduled
              </p>
            </CardContent>
          </Card>
        ) : (
          visits.map((visit) => (
            <Card
              key={visit.id}
              className={cn(
                "border-0 overflow-hidden cursor-pointer transition-all hover:shadow-lg",
                getBackgroundColor(visit.backgroundColor)
              )}
              onClick={() => onVisitClick?.(visit)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    {/* Service Type and Status */}
                    <div className="flex items-center gap-3">
                      <h3 className={cn(
                        "text-xl font-semibold",
                        getTextColor(visit.textColor)
                      )}>
                        {visit.serviceType}
                      </h3>
                      <Badge
                        variant={getStatusBadgeVariant(visit.status)}
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        {visit.status}
                      </Badge>
                    </div>

                    {/* Date and Time */}
                    <div className={cn(
                      "text-lg",
                      getTextColor(visit.textColor),
                      "opacity-90"
                    )}>
                      {visit.date} • {visit.timeSlot}
                    </div>

                    {/* Technician Name */}
                    <div className={cn(
                      "text-lg",
                      getTextColor(visit.textColor),
                      "opacity-90"
                    )}>
                      {visit.technicianName}
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronRight className={cn(
                    "h-6 w-6 mt-1",
                    getTextColor(visit.textColor),
                    "opacity-70"
                  )} />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default CommercialUpcomingVisitsCard