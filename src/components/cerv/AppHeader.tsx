'use client'

import React from 'react'
import Image from 'next/image'
import { Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface AppHeaderProps {
  userName?: string
  userAvatar?: string
  notificationCount?: number
  onNotificationClick?: () => void
  onProfileClick?: () => void
  className?: string
}

export function AppHeader({
  userName = "Alex Morgan",
  userAvatar,
  notificationCount = 4,
  onNotificationClick,
  onProfileClick,
  className
}: AppHeaderProps) {
  const firstName = userName.split(' ')[0]
  const initials = userName.split(' ').map(n => n[0]).join('')

  return (
    <header className={cn("w-full bg-background border-b border-input", className)}>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Profile */}
          <button
            onClick={onProfileClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Avatar className="h-10 w-10">
              {userAvatar ? (
                <AvatarImage src={userAvatar} alt={userName} />
              ) : (
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <span className="font-semibold text-base">{firstName}</span>
          </button>

          {/* Center - CERV Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image 
              src="/cerv-logo.svg" 
              alt="CERV" 
              width={70} 
              height={20} 
              className="dark:invert"
            />
          </div>

          {/* Right side - Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onNotificationClick}
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold text-black bg-red-500">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default AppHeader