'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface MessageListItemProps {
  customerName: string
  customerAvatar?: string
  message: string
  timestamp: string
  isUnread?: boolean
  onClick?: () => void
  className?: string
}

export function MessageListItem({
  customerName = "Jennifer Wilson",
  customerAvatar,
  message = "Perfect! You can leave the materials on the pati...",
  timestamp = "almost 2 years ago",
  isUnread = false,
  onClick,
  className
}: MessageListItemProps) {
  const initials = customerName.split(' ').map(n => n[0]).join('')

  return (
    <div className="border-b border-input">
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left",
          className
        )}
      >
        {/* Avatar */}
        <Avatar className="h-10 w-10 mt-0.5">
          {customerAvatar ? (
            <AvatarImage src={customerAvatar} alt={customerName} />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>

        {/* Message Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className={cn(
              "text-sm font-semibold truncate",
              isUnread ? "text-foreground" : "text-foreground"
            )}>
              {customerName}
            </h3>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {timestamp}
            </span>
          </div>
          <p className={cn(
            "text-sm truncate",
            isUnread 
              ? "text-foreground font-medium" 
              : "text-muted-foreground"
          )}>
            {message}
          </p>
        </div>

        {/* Unread indicator */}
        {isUnread && (
          <div className="flex-shrink-0 mt-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
          </div>
        )}
      </button>
    </div>
  )
}

export default MessageListItem