'use client'

import React from 'react'
import { MetricsDashboard } from '@/components/cerv/MetricsDashboard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestMetricsDashboardPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-4">Weekly Performance</h1>
        <MetricsDashboard />
      </div>
    </div>
  )
} 