'use client'

import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestLocationMapPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-sm mx-auto mt-8">
        <JobLocationMap
          customerFirstName="Sarah"
          address="1234 Maple Avenue, San Francisco"
          onOpenMaps={() => console.log('Opening in Maps app...')}
          onStartNavigation={() => console.log('Starting navigation...')}
        />
      </div>
    </div>
  )
}