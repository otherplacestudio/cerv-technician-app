'use client'

import React from 'react'
import { RewardsCard } from '@/components/cerv/RewardsCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { Gift, QrCode, Star, Trophy } from 'lucide-react'

export default function TestRewardsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Rewards Examples</h1>
        
        {/* Default rewards card */}
        <RewardsCard />
        
        {/* Custom rewards with multiple items */}
        <RewardsCard 
          title="Achievements & Rewards"
          rewards={[
            {
              title: "First Job",
              description: "Complete your first service",
              points: 100,
              icon: <Star className="h-5 w-5" />,
              iconColor: "text-yellow-600",
              badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
            },
            {
              title: "Perfect Week",
              description: "5-star rating all week",
              points: 500,
              icon: <Trophy className="h-5 w-5" />,
              iconColor: "text-orange-600",
              badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300"
            },
            {
              title: "Referral Bonus",
              description: "Bring in new customers",
              points: 1000,
              icon: <Gift className="h-5 w-5" />,
              iconColor: "text-blue-600",
              badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
            }
          ]}
        />
        
        {/* QR Code rewards */}
        <RewardsCard 
          title="Service Rewards"
          rewards={[
            {
              title: "QR Code Scan",
              description: "Complete service verification",
              points: 250,
              icon: <QrCode className="h-5 w-5" />,
              iconColor: "text-green-600",
              badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
            }
          ]}
        />
        
        {/* Weekly challenges */}
        <RewardsCard 
          title="Weekly Challenges"
          rewards={[
            {
              title: "Speed Demon",
              description: "Complete 10 jobs in 5 days",
              points: 750,
              icon: <Trophy className="h-5 w-5" />,
              iconColor: "text-purple-600",
              badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
            }
          ]}
        />
      </div>
    </div>
  )
} 