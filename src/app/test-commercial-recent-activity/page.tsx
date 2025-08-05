'use client'

import React from 'react'
import { CommercialRecentActivityCard } from '@/components/cerv/CommercialRecentActivityCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Bug, 
  Scissors, 
  Wrench, 
  Droplets, 
  Trash2, 
  Trees, 
  Shield, 
  Sparkles,
  Home,
  Zap,
  Thermometer,
  Hammer,
  PaintBucket,
  Leaf,
  Camera,
  Lock,
  Wifi,
  Package
} from 'lucide-react'

export default function TestCommercialRecentActivityPage() {
  const handleActivityClick = (activity: any) => {
    console.log('Activity clicked:', activity)
    alert(`Activity clicked: ${activity.title}`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Recent Activity Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialRecentActivityCard 
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Multiple Activities */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Activities</h2>
          <CommercialRecentActivityCard 
            activities={[
              {
                id: '1',
                icon: <Wrench className="h-6 w-6 text-white" />,
                title: 'HVAC maintenance completed',
                timeAgo: '30 minutes ago',
                technicianName: 'John Smith',
                iconBgColor: 'bg-blue-600'
              },
              {
                id: '2',
                icon: <Droplets className="h-6 w-6 text-white" />,
                title: 'Pool cleaning completed',
                timeAgo: '1 hour ago',
                technicianName: 'Maria Garcia',
                iconBgColor: 'bg-cyan-600'
              },
              {
                id: '3',
                icon: <Trees className="h-6 w-6 text-white" />,
                title: 'Landscaping service completed',
                timeAgo: '3 hours ago',
                technicianName: 'David Lee',
                iconBgColor: 'bg-green-600'
              },
              {
                id: '4',
                icon: <Sparkles className="h-6 w-6 text-white" />,
                title: 'Janitorial service completed',
                timeAgo: '5 hours ago',
                technicianName: 'Team Alpha',
                iconBgColor: 'bg-pink-600'
              },
              {
                id: '5',
                icon: <Shield className="h-6 w-6 text-white" />,
                title: 'Security check completed',
                timeAgo: '1 day ago',
                technicianName: 'Alex Turner',
                iconBgColor: 'bg-red-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Recent Activities (Just Now) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Very Recent Activities</h2>
          <CommercialRecentActivityCard 
            title="Live Updates"
            activities={[
              {
                id: '1',
                icon: <Zap className="h-6 w-6 text-white" />,
                title: 'Electrical inspection started',
                timeAgo: 'Just now',
                technicianName: 'Robert Wilson',
                iconBgColor: 'bg-yellow-600'
              },
              {
                id: '2',
                icon: <Thermometer className="h-6 w-6 text-white" />,
                title: 'Temperature check in progress',
                timeAgo: '2 minutes ago',
                technicianName: 'Emily Davis',
                iconBgColor: 'bg-orange-600'
              },
              {
                id: '3',
                icon: <Hammer className="h-6 w-6 text-white" />,
                title: 'Repair work initiated',
                timeAgo: '5 minutes ago',
                technicianName: 'Michael Brown',
                iconBgColor: 'bg-indigo-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Different Time Formats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Various Time Formats</h2>
          <CommercialRecentActivityCard 
            activities={[
              {
                id: '1',
                icon: <Home className="h-6 w-6 text-white" />,
                title: 'Property inspection completed',
                timeAgo: 'Yesterday',
                technicianName: 'Jennifer White',
                iconBgColor: 'bg-purple-600'
              },
              {
                id: '2',
                icon: <PaintBucket className="h-6 w-6 text-white" />,
                title: 'Painting service completed',
                timeAgo: '2 days ago',
                technicianName: 'Chris Martinez',
                iconBgColor: 'bg-rose-600'
              },
              {
                id: '3',
                icon: <Leaf className="h-6 w-6 text-white" />,
                title: 'Garden maintenance completed',
                timeAgo: 'Last week',
                technicianName: 'Amy Johnson',
                iconBgColor: 'bg-emerald-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Icon Colors</h2>
          <CommercialRecentActivityCard 
            activities={[
              {
                id: '1',
                icon: <Camera className="h-6 w-6 text-white" />,
                title: 'Security cameras installed',
                timeAgo: '1 hour ago',
                technicianName: 'Tech Team',
                iconBgColor: 'bg-gradient-to-br from-purple-600 to-pink-600'
              },
              {
                id: '2',
                icon: <Lock className="h-6 w-6 text-white" />,
                title: 'Access control updated',
                timeAgo: '3 hours ago',
                technicianName: 'Security Team',
                iconBgColor: 'bg-gradient-to-br from-blue-600 to-cyan-600'
              },
              {
                id: '3',
                icon: <Wifi className="h-6 w-6 text-white" />,
                title: 'Network maintenance completed',
                timeAgo: '6 hours ago',
                technicianName: 'IT Support',
                iconBgColor: 'bg-gradient-to-br from-green-600 to-emerald-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Single Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Activity</h2>
          <CommercialRecentActivityCard 
            activities={[
              {
                id: '1',
                icon: <Package className="h-6 w-6 text-white" />,
                title: 'Supply delivery completed',
                timeAgo: '15 minutes ago',
                technicianName: 'Delivery Team',
                iconBgColor: 'bg-amber-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* No Activities */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Activities</h2>
          <CommercialRecentActivityCard 
            activities={[]}
            onActivityClick={handleActivityClick}
          />
        </div>

        {/* Long Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Text Content</h2>
          <CommercialRecentActivityCard 
            title="Extended Activity Log"
            activities={[
              {
                id: '1',
                icon: <Wrench className="h-6 w-6 text-white" />,
                title: 'Comprehensive HVAC system maintenance and filter replacement completed successfully',
                timeAgo: '45 minutes ago',
                technicianName: 'Christopher Alexander Thompson Jr.',
                iconBgColor: 'bg-slate-600'
              }
            ]}
            onActivityClick={handleActivityClick}
          />
        </div>
      </div>
    </div>
  )
}