'use client'

import React from 'react'
import { JobCard } from '@/components/job/job-card'
import { ThemeToggle } from '@/components/theme-toggle'
import type { Job } from '@/lib/types'

export default function TestPage() {
  // Sample job data showcasing different configurations
  const sampleJobs: Job[] = [
    {
      id: '1',
      customer: {
        id: 'cust1',
        name: 'Sarah Johnson',
        phone: '(555) 123-4567',
        email: 'sarah.johnson@email.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
      },
      serviceType: 'pool',
      priority: 'high',
      status: 'pending',
      scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      earnings: 125.00,
      address: '123 Sunset Boulevard, Beverly Hills, CA 90210',
      coordinates: { lat: 34.0736, lng: -118.4004 },
      serviceRequirements: [
        {
          id: 'req1',
          type: 'pool',
          description: 'Weekly pool cleaning and chemical balance',
          estimatedDuration: 60
        }
      ],
      notes: 'Gate code: 1234. Dogs in backyard - friendly.'
    },
    {
      id: '2',
      customer: {
        id: 'cust2',
        name: 'Michael Chen',
        phone: '(555) 987-6543',
        email: 'mchen@email.com'
      },
      serviceType: 'lawn',
      priority: 'medium',
      status: 'in-progress',
      scheduledTime: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      earnings: 85.50,
      address: '456 Oak Street, Pasadena, CA 91101',
      coordinates: { lat: 34.1478, lng: -118.1445 },
      serviceRequirements: [
        {
          id: 'req2',
          type: 'lawn',
          description: 'Lawn mowing and edge trimming',
          estimatedDuration: 45
        },
        {
          id: 'req3',
          type: 'lawn',
          description: 'Leaf blowing and cleanup',
          estimatedDuration: 15
        }
      ],
      startedAt: new Date(Date.now() - 30 * 60 * 1000)
    },
    {
      id: '3',
      customer: {
        id: 'cust3',
        name: 'Emma Rodriguez',
        phone: '(555) 456-7890',
        email: 'emma.r@email.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
      },
      serviceType: 'exterior',
      priority: 'low',
      status: 'completed',
      scheduledTime: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      earnings: 200.00,
      address: '789 Mountain View Drive, Glendale, CA 91201',
      coordinates: { lat: 34.1425, lng: -118.2551 },
      serviceRequirements: [
        {
          id: 'req4',
          type: 'exterior',
          description: 'Pressure washing driveway and walkways',
          estimatedDuration: 90
        },
        {
          id: 'req5',
          type: 'exterior',
          description: 'Window cleaning (exterior only)',
          estimatedDuration: 30
        }
      ],
      startedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      completedAt: new Date(Date.now() - 1 * 60 * 60 * 1000)
    },
    {
      id: '4',
      customer: {
        id: 'cust4',
        name: 'Robert Thompson Jr.',
        phone: '(555) 321-0987',
        email: 'rthompson@email.com'
      },
      serviceType: 'pool',
      priority: 'high',
      status: 'en-route',
      scheduledTime: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
      earnings: 150.00,
      address: '321 Pacific Coast Highway, Extremely Long Address That Should Be Truncated, Malibu, CA 90265',
      coordinates: { lat: 34.0259, lng: -118.7798 },
      serviceRequirements: [
        {
          id: 'req6',
          type: 'pool',
          description: 'Emergency pool cleaning - algae treatment',
          estimatedDuration: 120
        }
      ],
      notes: 'Urgent: Pool party tomorrow. Customer will pay extra for thorough cleaning.'
    }
  ]

  // Handler functions for demonstration
  const handleCall = (phoneNumber: string) => {
    console.log('Calling:', phoneNumber)
    alert(`Calling ${phoneNumber}`)
  }

  const handleNavigate = (address: string, coordinates?: { lat: number; lng: number }) => {
    console.log('Navigating to:', address, coordinates)
    if (coordinates) {
      window.open(`https://maps.google.com/?q=${coordinates.lat},${coordinates.lng}`, '_blank')
    }
  }

  const handleViewDetails = (jobId: string) => {
    console.log('Viewing details for job:', jobId)
    alert(`Viewing details for job ${jobId}`)
  }

  const handleStartJob = (jobId: string) => {
    console.log('Starting job:', jobId)
    alert(`Starting job ${jobId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-input">
        <div className="px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-foreground">JobCard Component Test</h1>
            <p className="text-sm text-muted-foreground mt-1">Testing different states and configurations</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Cards container with mobile-responsive padding */}
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-md mx-auto space-y-4">
          {sampleJobs.map((job) => (
            <div key={job.id}>
              {/* Label for each card */}
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                {job.serviceType.charAt(0).toUpperCase() + job.serviceType.slice(1)} Service - 
                {' '}{job.status.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')} - 
                {' '}{job.priority.charAt(0).toUpperCase() + job.priority.slice(1)} Priority
              </p>
              
              <JobCard
                job={job}
                onCall={handleCall}
                onNavigate={handleNavigate}
                onViewDetails={handleViewDetails}
                onStartJob={handleStartJob}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="px-4 pb-8 pt-4">
        <div className="max-w-md mx-auto text-center text-sm text-muted-foreground">
          <p>Test page showing various JobCard states</p>
          <p className="mt-1">Click buttons to see console logs and alerts</p>
        </div>
      </div>
    </div>
  )
}