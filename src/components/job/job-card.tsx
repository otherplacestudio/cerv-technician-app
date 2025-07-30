'use client'

import React from 'react'
import { format } from 'date-fns'
import { Phone, Navigation, Eye, Play, Clock, MapPin, DollarSign } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Job } from '@/lib/types'

interface JobCardProps {
  job: Job
  onCall?: (phoneNumber: string) => void
  onNavigate?: (address: string, coordinates?: { lat: number; lng: number }) => void
  onViewDetails?: (jobId: string) => void
  onStartJob?: (jobId: string) => void
}

/**
 * JobCard component for displaying job information in a mobile-friendly format
 * Designed for field technicians with large touch targets and clear visual hierarchy
 */
export function JobCard({ 
  job, 
  onCall, 
  onNavigate, 
  onViewDetails, 
  onStartJob 
}: JobCardProps) {
  // Service type color mapping
  const serviceTypeColors = {
    pool: 'bg-blue-500 dark:bg-blue-600',
    lawn: 'bg-green-500 dark:bg-green-600',
    exterior: 'bg-amber-500 dark:bg-amber-600'
  }

  // Priority variant mapping for badges
  const priorityVariants = {
    high: 'destructive' as const,
    medium: 'default' as const,
    low: 'secondary' as const
  }

  // Status color mapping
  const statusColors = {
    'pending': 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800',
    'en-route': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
    'in-progress': 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800',
    'completed': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
  }

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Truncate address if too long
  const truncateAddress = (address: string, maxLength: number = 30) => {
    if (address.length <= maxLength) return address
    return `${address.slice(0, maxLength)}...`
  }

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          {/* Customer info section */}
          <div className="flex items-center gap-3 flex-1">
            <Avatar className="h-12 w-12">
              <AvatarImage src={job.customer.avatar} alt={job.customer.name} />
              <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                {getInitials(job.customer.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base truncate">{job.customer.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {format(job.scheduledTime, 'h:mm a')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Service type badge */}
          <Badge 
            className={`${serviceTypeColors[job.serviceType]} text-white border-0 px-6`}
          >
            {job.serviceType.charAt(0).toUpperCase() + job.serviceType.slice(1)}
          </Badge>
        </div>

        {/* Status and priority row */}
        <div className="flex items-center gap-2 mt-3">
          <Badge 
            variant="outline" 
            className={`${statusColors[job.status]} font-medium`}
          >
            {job.status.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </Badge>
          <Badge variant={priorityVariants[job.priority]}>
            {job.priority.charAt(0).toUpperCase() + job.priority.slice(1)} Priority
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        {/* Earnings display */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${job.earnings.toFixed(2)}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            Est. {Math.round(job.serviceRequirements.reduce((acc, req) => 
              acc + req.estimatedDuration, 0
            ) / 60)}h job
          </span>
        </div>

        <Separator className="my-3" />

        {/* Address section */}
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            {truncateAddress(job.address, 40)}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-3 pb-4 gap-2 flex-wrap">
        {/* Action buttons with proper touch targets (min 44px) */}
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            size="default"
            className="h-11 px-6"
            onClick={() => onCall?.(job.customer.phone)}
          >
            <Phone className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="default"
            className="h-11 px-6"
            onClick={() => onNavigate?.(job.address, job.coordinates)}
          >
            <Navigation className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="default"
            className="h-11 px-6"
            onClick={() => onViewDetails?.(job.id)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          
          {/* Start job button - prominent styling */}
          {job.status !== 'completed' && (
            <Button
              size="default"
              className="h-11 flex-1 font-semibold"
              onClick={() => onStartJob?.(job.id)}
              disabled={job.status === 'in-progress'}
            >
              <Play className="h-4 w-4 mr-2" />
              {job.status === 'in-progress' ? 'In Progress' : 'Start Job'}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}