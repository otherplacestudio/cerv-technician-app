'use client'

import { AppHeader } from '@/components/cerv/AppHeader'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestHeaderPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Theme Toggle - Top Right Corner */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Mobile Container */}
      <div className="max-w-md w-full">
        <AppHeader 
          userName="Alex Morgan"
          notificationCount={4}
          onProfileClick={() => console.log('Profile clicked')}
          onNotificationClick={() => console.log('Notifications clicked')}
        />
      </div>
    </div>
  )
}