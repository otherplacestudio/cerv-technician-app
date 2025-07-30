'use client'

import CustomerChatCard from '@/components/cerv/CustomerChatCard'
import { ThemeToggle } from '@/components/theme-toggle'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

export default function TestChatPage() {
  const sampleMessages: Message[] = [
    {
      id: 1,
      sender: 'technician' as const,
      content: "Good morning Sarah, I'll be servicing your pool today. I should arrive around 8:30 AM. I'll need to check the chlorine levels and clean the filter system.",
      timestamp: '08:05 AM'
    },
    {
      id: 2,
      sender: 'customer' as const,
      content: 'Thanks for letting me know! The gate code is 1234 if you need it. Please let me know if you need anything else.',
      timestamp: '08:07 AM',
      customerInitials: 'SJ'
    },
    {
      id: 3,
      sender: 'technician' as const,
      content: "Perfect, thank you! I'll make sure to secure the gate when I leave. I'll also check the pool equipment and let you know if anything needs attention.",
      timestamp: '08:10 AM'
    },
    {
      id: 4,
      sender: 'customer' as const,
      content: 'That sounds great. I\'ll be working from home today, so feel free to knock if you need anything.',
      timestamp: '08:12 AM',
      customerInitials: 'SJ'
    },
    {
      id: 5,
      sender: 'technician' as const,
      content: "Will do! I'm on my way now. Should be there in about 15 minutes. I'll send you a message when I arrive.",
      timestamp: '08:15 AM'
    }
  ]

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message)
  }

  const handleAttachment = () => {
    console.log('Attachment clicked')
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Fixed to top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-md mx-auto mt-8">
        <CustomerChatCard
          customerFirstName="Sarah"
          customerLastName="Johnson"
          messages={sampleMessages}
          onSendMessage={handleSendMessage}
          onAttachment={handleAttachment}
          className="h-[600px]"
        />
      </div>
    </div>
  )
} 