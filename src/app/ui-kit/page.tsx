'use client'

import React from 'react'
import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'
import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'
import { ThemeToggle } from '@/components/theme-toggle'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

export default function UIKitPage() {
  // Sample data for CustomerChatCard
  const sampleMessages: Message[] = [
    {
      id: 1,
      sender: 'technician',
      content: "Good morning Sarah, I'll be servicing your pool today. I should arrive around 8:30 AM.",
      timestamp: '08:05 AM'
    },
    {
      id: 2,
      sender: 'customer',
      content: 'Thanks for letting me know! The gate code is 1234 if you need it.',
      timestamp: '08:07 AM',
      customerInitials: 'SJ'
    },
    {
      id: 3,
      sender: 'technician',
      content: "Perfect, thank you! I'll make sure to secure the gate when I leave.",
      timestamp: '08:10 AM'
    }
  ]

  // Handler functions
  const handleCall = () => {
    console.log('Calling customer...')
  }

  const handleText = () => {
    console.log('Opening text conversation...')
  }

  const handleOpenMaps = () => {
    console.log('Opening in Maps app...')
  }

  const handleStartNavigation = () => {
    console.log('Starting navigation...')
  }

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message)
  }

  const handleAttachment = () => {
    console.log('Attachment clicked')
  }

  const handleJobClick = (job: any) => {
    console.log('Clicked on job:', job.customer?.name)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo and Title */}
      <div className="bg-card border-b border-input">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* CERV Logo */}
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">CERV Mobile App UI Kit</h1>
                <p className="text-sm text-muted-foreground">Component Library</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Components Stack */}
      <div className="max-w-md mx-auto p-4">
        <div className="flex flex-col gap-4">
          {/* 1. CustomerCardInfo */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">CustomerCardInfo</h2>
            <CustomerCardInfo
              customerFirstName="Sarah"
              customerLastName="Johnson"
              address="1234 Maple Avenue, San Francisco"
              serviceType="CERV POOL"
              status="Active"
              onCall={handleCall}
              onText={handleText}
            />
          </div>

          {/* 2. JobLocationMap */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">JobLocationMap</h2>
            <JobLocationMap
              customerFirstName="Sarah"
              address="1234 Maple Avenue, San Francisco"
              onOpenMaps={handleOpenMaps}
              onStartNavigation={handleStartNavigation}
            />
          </div>

          {/* 3. CustomerChatCard */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">CustomerChatCard</h2>
            <CustomerChatCard
              customerFirstName="Sarah"
              customerLastName="Johnson"
              messages={sampleMessages}
              onSendMessage={handleSendMessage}
              onAttachment={handleAttachment}
            />
          </div>

          {/* 4. JobScheduleCard */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-2">JobScheduleCard</h2>
            <JobScheduleCard
              date="Today"
              onJobClick={handleJobClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}