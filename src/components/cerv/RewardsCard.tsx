'use client'

import React from 'react'
import { Gift, QrCode } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface RewardItem {
  title: string
  description: string
  points: number
  icon: React.ReactNode
  iconColor: string
  badgeColor: string
}

interface RewardsCardProps {
  title?: string
  rewards?: RewardItem[]
  className?: string
}

export function RewardsCard({
  title = "Rewards & Referrals",
  rewards = [
    {
      title: "Refer & Earn",
      description: "Share a QR code",
      points: 1450,
      icon: <Gift className="h-5 w-5" />,
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    }
  ],
  className
}: RewardsCardProps) {
  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
          <div className="border-b border-border/50 mt-2"></div>
        </div>

        {/* Rewards List */}
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Icon */}
              <div className={cn("p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20", reward.iconColor)}>
                {reward.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground">
                  {reward.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {reward.description}
                </p>
              </div>
              
              {/* Points Badge */}
              <Badge className={reward.badgeColor}>
                {reward.points.toLocaleString()} pts
              </Badge>
            </div>
          ))}
        </div>

        {/* Additional Rewards Examples */}
        {rewards.length === 1 && (
          <div className="space-y-3 mt-4 pt-4 border-t border-border/50">
            {/* QR Code Reward */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600">
                <QrCode className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground">
                  Scan QR Code
                </h4>
                <p className="text-xs text-muted-foreground">
                  Complete service tasks
                </p>
              </div>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
                250 pts
              </Badge>
            </div>

            {/* Weekly Bonus */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600">
                <Gift className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground">
                  Weekly Bonus
                </h4>
                <p className="text-xs text-muted-foreground">
                  Complete 5 jobs this week
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                500 pts
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default RewardsCard 