'use client'

import React from 'react'
import { MessageTabs } from '@/components/cerv/MessageTabs'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestMessageTabsPage() {
  const [activeTab, setActiveTab] = React.useState<'customers' | 'team'>('customers')
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Message Tabs */}
      <MessageTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        teamNotificationCount={4}
      />
      
      {/* Demo content area */}
      <div className="px-4 py-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            Message list would appear here...
          </p>
          {searchValue && (
            <p className="text-sm text-muted-foreground mt-2">
              Filtering by: "{searchValue}"
            </p>
          )}
        </div>
      </div>
    </div>
  )
}