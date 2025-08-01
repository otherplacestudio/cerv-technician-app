'use client'

import React from 'react'
import { BottomNav } from '@/components/cerv/BottomNav'

export default function PerformanceScreen() {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* AppHeader placeholder */}
      {/* TODO: Add AppHeader component here */}
      
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-foreground mb-4">Performance</h1>
          
          {/* Placeholder content */}
          <div className="bg-card rounded-lg p-6 shadow-sm border border-input">
            <p className="text-muted-foreground">Performance Screen Content Goes Here</p>
          </div>
        </div>
      </div>
      
      {/* Fixed bottom navigation */}
      <BottomNav />
    </div>
  )
}