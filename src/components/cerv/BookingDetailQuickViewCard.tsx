'use client'

import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface BookingDetailQuickViewCardProps {
  serviceType?: string
  price?: number
  propertyName?: string
  date?: string
  category?: string
  categoryColor?: string
  status?: string
  statusVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
  technicianName?: string
  technicianRating?: number
  timeSlot?: string
  onClick?: () => void
  className?: string
}

export const BookingDetailQuickViewCard: React.FC<BookingDetailQuickViewCardProps> = ({
  serviceType = 'Pool Maintenance',
  price = 95.00,
  propertyName = 'Sunset Gardens Complex',
  date = 'March 25, 2024',
  category = 'pool',
  categoryColor = 'bg-red-500',
  status = 'upcoming',
  statusVariant = 'secondary',
  technicianName = 'Mike Rodriguez',
  technicianRating = 4.9,
  timeSlot = '9:00 AM - 11:00 AM',
  onClick,
  className
}) => {
  // Format price to currency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price)

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-lg dark:hover:shadow-gray-900/50",
        "bg-card border-input",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Top Row: Service Type & Price */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">
                {serviceType}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">
                {formattedPrice}
              </span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Second Row: Property & Date */}
          <div className="flex items-center justify-between">
            <p className="text-base text-muted-foreground">
              {propertyName}
            </p>
            <p className="text-base text-muted-foreground">
              {date}
            </p>
          </div>

          {/* Third Row: Badges */}
          <div className="flex items-center gap-3">
            <Badge 
              variant="secondary"
              className={cn(
                "text-white border-0",
                categoryColor
              )}
            >
              {category}
            </Badge>
            <Badge variant={statusVariant}>
              {status}
            </Badge>
          </div>

          {/* Bottom Row: Technician & Time */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-base text-foreground">
                {technicianName}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-base font-medium text-foreground">
                  {technicianRating}
                </span>
              </div>
            </div>
            <p className="text-base text-foreground">
              {timeSlot}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingDetailQuickViewCard