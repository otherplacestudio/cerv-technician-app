'use client'

import React, { useState } from 'react'
import { StackRankingCard } from '@/components/cerv/StackRankingCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestStackRankingPage() {
  const [activeTab, setActiveTab] = useState<'branch' | 'region' | 'company'>('branch')

  const handleTabChange = (tab: 'branch' | 'region' | 'company') => {
    setActiveTab(tab)
    console.log('Switched to:', tab)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-sm mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Stack Ranking Examples</h1>
        
        {/* Default rankings */}
        <StackRankingCard 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        {/* Custom rankings with different data */}
        <StackRankingCard 
          activeTab="region"
          onTabChange={handleTabChange}
          rankings={[
            {
              id: '1',
              rank: 1,
              name: 'Jennifer Wilson',
              completion: 99.2,
              isCurrentUser: true
            },
            {
              id: '2',
              rank: 2,
              name: 'Michael Chen',
              completion: 95.8
            },
            {
              id: '3',
              rank: 3,
              name: 'Sarah Johnson',
              completion: 92.1
            },
            {
              id: '4',
              rank: 4,
              name: 'David Rodriguez',
              completion: 88.7
            },
            {
              id: '5',
              rank: 5,
              name: 'Emily Davis',
              completion: 85.3
            }
          ]}
        />
      </div>
    </div>
  )
} 