'use client'

import React from 'react'
import { Phone, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface CustomerCardInfoProps {
  customerFirstName?: string
  customerLastName?: string
  address?: string
  serviceType?: string
  status?: 'Pending' | 'Active' | 'Completed'
  avatarUrl?: string
  onCall?: () => void
  onText?: () => void
  className?: string
}

export function CustomerCardInfo({
  customerFirstName = "Sarah",
  customerLastName = "Johnson",
  address = "1234 Maple Avenue, San Francisco",
  serviceType = "CERV POOL",
  status = "Pending",
  avatarUrl,
  onCall,
  onText,
  className
}: CustomerCardInfoProps) {
  const initials = `${customerFirstName[0]}${customerLastName[0]}`
  
  // Status color mapping
  const statusVariant = {
    "Pending": "warning" as const,
    "Active": "outline" as const,
    "Completed": "secondary" as const
  }[status] || "outline" as const
  
  // Custom status badge styles
  const statusBadgeStyle = status === "Active" 
    ? "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-200 border-transparent"
    : ""
  
  // Service badge color (blue for all services)
  const serviceBadgeStyle = "bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-200 border-transparent"
  
  // Clean service type display (remove "CERV" prefix)
  const displayServiceType = serviceType.replace(/^CERV\s+/i, '')

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Main Content Row */}
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <Avatar className="h-12 w-12">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={`${customerFirstName} ${customerLastName}`} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          
          {/* Customer Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">
              {customerFirstName} {customerLastName}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {address}
            </p>
            
            {/* Service Badge */}
            <div className="flex gap-2 mt-4">
              <Badge className={serviceBadgeStyle}>
                {displayServiceType}
              </Badge>
              <Badge variant={statusVariant} className={statusBadgeStyle}>
                {status.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            className="flex-1 h-11"
            onClick={onCall}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-11"
            onClick={onText}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Text
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerCardInfo