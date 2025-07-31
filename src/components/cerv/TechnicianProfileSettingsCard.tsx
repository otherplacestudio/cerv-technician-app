'use client'

import React from 'react'
import { Edit, Phone, Mail, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface TechnicianProfileSettingsCardProps {
  technicianName?: string
  technicianRole?: string
  phone?: string
  email?: string
  address?: string
  avatarUrl?: string
  onEdit?: () => void
  className?: string
}

export function TechnicianProfileSettingsCard({
  technicianName = "Alex Morgan",
  technicianRole = "Pool Technician",
  phone = "(415) 555-7890",
  email = "alex.morgan@cerv.com",
  address = "San Francisco, CA",
  avatarUrl,
  onEdit,
  className
}: TechnicianProfileSettingsCardProps) {
  const initials = technicianName.split(' ').map(name => name[0]).join('')

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-base text-foreground">Profile</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>

        {/* Profile Information */}
        <div className="flex items-start gap-3 mb-6">
          <Avatar className="h-12 w-12">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={technicianName} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-base text-foreground">
              {technicianName}
            </h4>
            <p className="text-sm text-muted-foreground">
              {technicianRole}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-3">
          {/* Phone */}
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Phone</span>
            </div>
            <span className="text-sm text-foreground">{phone}</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Email</span>
            </div>
            <span className="text-sm text-foreground">{email}</span>
          </div>

          {/* Address */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Address</span>
            </div>
            <span className="text-sm text-foreground">{address}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TechnicianProfileSettingsCard 