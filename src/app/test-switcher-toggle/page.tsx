'use client'

import React, { useState } from 'react'
import { SwitcherToggle } from '@/components/cerv/SwitcherToggle'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestSwitcherTogglePage() {
  const [selectedValue, setSelectedValue] = useState('customers')
  const [selectedTab, setSelectedTab] = useState('overview')
  const [selectedView, setSelectedView] = useState('list')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const handleChange = (value: string) => {
    console.log('Selected:', value)
    setSelectedValue(value)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Switcher Toggle Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <SwitcherToggle />
        </div>

        {/* Controlled Component */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Controlled Component</h2>
          <SwitcherToggle 
            value={selectedValue}
            onChange={handleChange}
          />
          <p className="text-sm text-muted-foreground">
            Selected: {selectedValue}
          </p>
        </div>

        {/* Without Badge */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Badge</h2>
          <SwitcherToggle 
            options={[
              { id: 'customers', label: 'Customers' },
              { id: 'team', label: 'Team' }
            ]}
            value={selectedValue}
            onChange={setSelectedValue}
          />
        </div>

        {/* Multiple Badges */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Badges</h2>
          <SwitcherToggle 
            options={[
              { id: 'inbox', label: 'Inbox', badge: 12 },
              { id: 'sent', label: 'Sent', badge: 3 }
            ]}
            value="inbox"
          />
        </div>

        {/* Three Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Three Options</h2>
          <SwitcherToggle 
            options={[
              { id: 'overview', label: 'Overview' },
              { id: 'analytics', label: 'Analytics', badge: 'New' },
              { id: 'reports', label: 'Reports' }
            ]}
            value={selectedTab}
            onChange={setSelectedTab}
          />
        </div>

        {/* Four Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Four Options</h2>
          <SwitcherToggle 
            options={[
              { id: 'all', label: 'All', badge: 99 },
              { id: 'active', label: 'Active', badge: 45 },
              { id: 'pending', label: 'Pending', badge: 12 },
              { id: 'archived', label: 'Archived' }
            ]}
            value={selectedFilter}
            onChange={setSelectedFilter}
          />
        </div>

        {/* View Modes */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">View Modes</h2>
          <SwitcherToggle 
            options={[
              { id: 'list', label: 'List' },
              { id: 'grid', label: 'Grid' },
              { id: 'calendar', label: 'Calendar' }
            ]}
            value={selectedView}
            onChange={setSelectedView}
          />
        </div>

        {/* Large Numbers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Large Badge Numbers</h2>
          <SwitcherToggle 
            options={[
              { id: 'messages', label: 'Messages', badge: 999 },
              { id: 'notifications', label: 'Notifications', badge: '99+' }
            ]}
            value="messages"
          />
        </div>

        {/* Long Labels */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Labels</h2>
          <SwitcherToggle 
            options={[
              { id: 'personal', label: 'Personal Workspace' },
              { id: 'team', label: 'Team Collaboration', badge: 7 }
            ]}
            value="personal"
          />
        </div>

        {/* Status Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Status Options</h2>
          <SwitcherToggle 
            options={[
              { id: 'online', label: 'Online', badge: '●' },
              { id: 'offline', label: 'Offline' }
            ]}
            value="online"
          />
        </div>

        {/* In Different Containers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Widths</h2>
          
          <div className="max-w-xs">
            <h3 className="text-sm text-muted-foreground mb-2">Small Container</h3>
            <SwitcherToggle />
          </div>

          <div className="max-w-md">
            <h3 className="text-sm text-muted-foreground mb-2">Medium Container</h3>
            <SwitcherToggle />
          </div>

          <div className="max-w-2xl">
            <h3 className="text-sm text-muted-foreground mb-2">Large Container</h3>
            <SwitcherToggle />
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Interactive Demo</h2>
          <div className="space-y-4">
            <SwitcherToggle 
              options={[
                { id: 'customers', label: 'Customers', badge: Math.floor(Math.random() * 20) },
                { id: 'team', label: 'Team', badge: Math.floor(Math.random() * 10) }
              ]}
              value={selectedValue}
              onChange={(value) => {
                setSelectedValue(value)
                alert(`Switched to: ${value}`)
              }}
            />
          </div>
        </div>

        {/* Language Switcher */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Language Switcher</h2>
          <SwitcherToggle 
            options={[
              { id: 'en', label: 'EN' },
              { id: 'es', label: 'ES' },
              { id: 'fr', label: 'FR' }
            ]}
            value="en"
          />
        </div>

        {/* Time Period Selector */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Time Period</h2>
          <SwitcherToggle 
            options={[
              { id: 'day', label: 'Day' },
              { id: 'week', label: 'Week' },
              { id: 'month', label: 'Month' },
              { id: 'year', label: 'Year' }
            ]}
            value="week"
          />
        </div>
      </div>
    </div>
  )
}