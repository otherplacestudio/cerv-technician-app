'use client'

import React from 'react'
import { ChevronRight, Bug, Scissors, Wrench, Droplets, Trash2, Trees, Shield, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Activity {
  id: string
  icon: React.ReactNode
  title: string
  timeAgo: string
  technicianName: string
  iconBgColor?: string
  onClick?: () => void
}

interface CommercialRecentActivityCardProps {
  title?: string
  activities?: Activity[]
  onActivityClick?: (activity: Activity) => void
  className?: string
}

export const CommercialRecentActivityCard: React.FC<CommercialRecentActivityCardProps> = ({
  title = 'Recent Activity',
  activities = [
    {
      id: '1',
      icon: <Bug className="h-6 w-6 text-white" />,
      title: 'Pest control completed',
      timeAgo: '2 hours ago',
      technicianName: 'Mike Johnson',
      iconBgColor: 'bg-purple-600'
    },
    {
      id: '2',
      icon: <Scissors className="h-6 w-6 text-white" />,
      title: 'Tree pruning completed',
      timeAgo: '4 hours ago',
      technicianName: 'Sarah Chen',
      iconBgColor: 'bg-teal-600'
    }
  ],
  onActivityClick,
  className
}) => {
  const handleActivityClick = (activity: Activity) => {
    if (activity.onClick) {
      activity.onClick()
    } else if (onActivityClick) {
      onActivityClick(activity)
    }
  }

  const formatTimeAndTechnician = (timeAgo: string, technicianName: string) => {
    return `${timeAgo} • ${technicianName}`
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        {title}
      </h2>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.length === 0 ? (
          <Card className="border-input bg-card">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">
                No recent activity to display
              </p>
            </CardContent>
          </Card>
        ) : (
          activities.map((activity) => (
            <Card
              key={activity.id}
              className="border-input bg-card hover:bg-muted/50 transition-all cursor-pointer"
              onClick={() => handleActivityClick(activity)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      activity.iconBgColor || 'bg-primary'
                    )}>
                      {activity.icon}
                    </div>

                    {/* Activity Info */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium text-foreground">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formatTimeAndTechnician(activity.timeAgo, activity.technicianName)}
                      </p>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default CommercialRecentActivityCard