'use client'

import React from 'react'
import { Paperclip, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

interface CustomerChatCardProps {
  customerFirstName?: string
  customerLastName?: string
  messages?: Message[]
  onSendMessage?: (message: string) => void
  onAttachment?: () => void
  className?: string
}

export function CustomerChatCard({
  customerFirstName = "Sarah",
  customerLastName = "Johnson",
  messages = [
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
  ],
  onSendMessage,
  onAttachment,
  className
}: CustomerChatCardProps) {
  const [inputValue, setInputValue] = React.useState('')
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className={cn("w-full flex flex-col py-3 border-input", className)}>
      {/* Chat Header */}
      <CardContent className="border-b border-input flex-shrink-0 px-3 py-0">
        <h3 className="font-semibold text-base py-3">
          Chat with {customerFirstName} {customerLastName}
        </h3>
      </CardContent>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <CardContent className="py-4 px-3">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${
                  message.sender === 'technician' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar for customer messages only */}
                {message.sender === 'customer' && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback>{message.customerInitials || customerFirstName[0] + customerLastName[0]}</AvatarFallback>
                  </Avatar>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 break-words ${
                    message.sender === 'technician'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'technician'
                        ? 'text-gray-300 dark:text-gray-600'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            {/* Invisible div to scroll to bottom */}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </div>

              {/* Input Area */}
        <CardContent className="border-t border-input py-3 flex-shrink-0 px-3">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onAttachment}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSend}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerChatCard