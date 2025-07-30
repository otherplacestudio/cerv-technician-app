'use client'

import React from 'react'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { ThemeToggle } from '@/components/theme-toggle'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

export default function TestChatCardPage() {
  const [messages, setMessages] = React.useState<Message[]>([
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
    }
  ])

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'technician',
      content: message,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-sm mx-auto mt-8">
        <CustomerChatCard
          customerFirstName="Sarah"
          customerLastName="Johnson"
          messages={messages}
          onSendMessage={handleSendMessage}
          onAttachment={() => console.log('Attachment clicked')}
        />
      </div>
    </div>
  )
}