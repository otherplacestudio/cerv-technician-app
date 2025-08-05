'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface VisitDetailsHeaderCardProps {
  serviceType?: string
  propertyName?: string
  status?: string
  statusVariant?: 'default' | 'secondary' | 'destructive' | 'outline'
  backgroundColor?: string
  onBack?: () => void
  className?: string
}

export const VisitDetailsHeaderCard: React.FC<VisitDetailsHeaderCardProps> = ({
  serviceType = 'Pest Control',
  propertyName = 'Meridian Plaza',
  status = 'Scheduled',
  statusVariant = 'secondary',
  backgroundColor = 'bg-purple-600',
  onBack,
  className
}) => {
  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Header with Back Button */}
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="h-8 w-8" strokeWidth={2.5} />
          </button>
        )}
        <h1 className="text-2xl font-semibold text-white">
          Visit Details
        </h1>
      </div>

      {/* Service Details Card */}
      <Card className={cn(
        "border-0 overflow-hidden",
        backgroundColor
      )}>
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">
              {serviceType}
            </h2>
            
            <p className="text-xl text-white/90">
              {propertyName}
            </p>
            
            <Badge 
              variant={statusVariant}
              className="bg-white/20 text-white border-0 hover:bg-white/30 px-6 py-1.5 text-base font-medium"
            >
              {status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VisitDetailsHeaderCard