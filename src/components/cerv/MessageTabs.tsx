'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface MessageTabsProps {
  activeTab?: 'customers' | 'team'
  onTabChange?: (tab: 'customers' | 'team') => void
  searchValue?: string
  onSearchChange?: (value: string) => void
  teamNotificationCount?: number
  className?: string
}

export function MessageTabs({
  activeTab = 'customers',
  onTabChange,
  searchValue = '',
  onSearchChange,
  teamNotificationCount = 4,
  className
}: MessageTabsProps) {
  const searchPlaceholder = activeTab === 'customers' 
    ? 'Search customers or messages...' 
    : 'Search team or messages...'

  return (
    <Card className={cn("w-full border-0 rounded-none shadow-none bg-background", className)}>
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      {/* Tab Switcher - Clean pill style */}
      <div className="px-4">
        <div className="bg-muted rounded-lg p-1 flex gap-1">
          <button
            type="button"
            onClick={() => onTabChange?.('customers')}
            className={cn(
              "flex-1 h-9 px-4 text-sm font-medium rounded-md transition-all",
              activeTab === 'customers'
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Customers
          </button>
          <button
            type="button"
            onClick={() => onTabChange?.('team')}
            className={cn(
              "flex-1 h-9 px-4 text-sm font-medium rounded-md transition-all inline-flex items-center justify-center gap-2",
              activeTab === 'team'
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Team
            {teamNotificationCount > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 inline-flex items-center justify-center font-semibold">
                {teamNotificationCount > 9 ? '9+' : teamNotificationCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pt-1.5 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="pl-10 h-11 bg-background"
          />
        </div>
      </div>
    </Card>
  )
}

export default MessageTabs