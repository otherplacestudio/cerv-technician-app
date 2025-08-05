'use client'

import React from 'react'
import { Plus, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CommercialDateHeaderCardProps {
  date?: Date
  onAddService?: () => void
  emptyStateMessage?: string
  showEmptyState?: boolean
  className?: string
}

export const CommercialDateHeaderCard: React.FC<CommercialDateHeaderCardProps> = ({
  date = new Date(),
  onAddService,
  emptyStateMessage = 'No services scheduled for this date',
  showEmptyState = true,
  className
}) => {
  // Format date to "Monday, August 4" format
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)
  }

  const formattedDate = formatDate(date)

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Date Header with Add Service Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          {formattedDate}
        </h2>
        
        {onAddService && (
          <Button
            onClick={onAddService}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        )}
      </div>

      {/* Empty State Card */}
      {showEmptyState && (
        <Card className="border-input bg-card">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">
                {emptyStateMessage}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CommercialDateHeaderCard