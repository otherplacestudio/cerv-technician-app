'use client'

import React, { useState } from 'react'
import { BottomNav } from '@/components/cerv/BottomNav'
import { AppHeader } from '@/components/cerv/AppHeader'
import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'
import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from 'next-themes'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

export default function JobsScreen() {
  const { theme, resolvedTheme } = useTheme()
  const [messages, setMessages] = useState<Message[]>([
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
  ])

  const handleSendMessage = (newMessage: string) => {
    const message: Message = {
      id: messages.length + 1,
      sender: 'technician',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })
    }
    setMessages([...messages, message])
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* AppHeader */}
      <AppHeader
        userName="Alex Morgan"
        notificationCount={4}
        onProfileClick={() => console.log('Profile clicked')}
        onNotificationClick={() => console.log('Notifications clicked')}
      />
      
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="space-y-6 p-6 pt-4">
          {/* CustomerCardInfo */}
          <CustomerCardInfo
            customerFirstName="Sarah"
            customerLastName="Johnson"
            address="1234 Maple Avenue, San Francisco"
            serviceType="CERV POOL"
            status="Active"
            onCall={() => console.log('Calling customer...')}
            onText={() => console.log('Opening text conversation...')}
          />
          
          {/* JobLocationMap */}
          <JobLocationMap
            customerFirstName="Sarah"
            address="1234 Maple Avenue, San Francisco"
            onOpenMaps={() => console.log('Opening in Maps app...')}
            onStartNavigation={() => console.log('Starting navigation...')}
          />
          
          {/* CustomerChatCard */}
          <CustomerChatCard
            customerFirstName="Sarah"
            customerLastName="Johnson"
            messages={messages}
            onSendMessage={handleSendMessage}
            onAttachment={() => console.log('Attachment clicked')}
          />
        </div>
      </div>
      
      {/* Fixed bottom navigation */}
      <BottomNav />
    </div>
  )
}