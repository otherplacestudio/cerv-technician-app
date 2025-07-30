'use client'

import React from 'react'
import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestScheduleCardPage() {
  const handleJobClick = (job: any) => {
    console.log('Clicked on job:', job.customer?.name)
    // In production, this would navigate to job details
    // router.push(`/job-detail/${job.id}`)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-sm mx-auto mt-8">
        <JobScheduleCard 
          date="Today"
          onJobClick={handleJobClick} 
        />
      </div>
    </div>
  )
}