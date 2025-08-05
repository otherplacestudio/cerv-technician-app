'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface DescriptionContentCardProps {
  title?: string
  description?: string
  className?: string
}

export const DescriptionContentCard: React.FC<DescriptionContentCardProps> = ({
  title = 'Service Description',
  description = 'Comprehensive pest control treatment including inspection, treatment application, and preventive measures',
  className
}) => {
  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          {title}
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

export default DescriptionContentCard