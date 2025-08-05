'use client'

import React, { useState } from 'react'
import { ShaderOrbLogo } from '@/components/cerv/ShaderOrbLogo'
import { AppHeader } from '@/components/cerv/AppHeader'
import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'
import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { CustomerRatingCard } from '@/components/cerv/CustomerRatingCard'
import { DailyMetricsCard } from '@/components/cerv/DailyMetricsCard'
import { DailyStatsCard } from '@/components/cerv/DailyStatsCard'
import { EarningsCard } from '@/components/cerv/EarningsCard'
import { EarningsMetric2Bloc } from '@/components/cerv/EarningsMetric2Bloc'
import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'
import { MessageListItem } from '@/components/cerv/MessageListItem'
import { MessageTabs } from '@/components/cerv/MessageTabs'
import { MetricsDashboard } from '@/components/cerv/MetricsDashboard'
import { PerformanceSummaryCard } from '@/components/cerv/PerformanceSummaryCard'
import { RewardsCard } from '@/components/cerv/RewardsCard'
import { RouteEfficiencyCard } from '@/components/cerv/RouteEfficiencyCard'
import { ServiceDurationCard } from '@/components/cerv/ServiceDurationCard'
import { StackRankingCard } from '@/components/cerv/StackRankingCard'
import { AppSettingsCard } from '@/components/cerv/AppSettingsCard'
import { SupportSignOutCard } from '@/components/cerv/SupportSignOutCard'
import { TechnicianProfileSettingsCard } from '@/components/cerv/TechnicianProfileSettingsCard'
import { BottomNav } from '@/components/cerv/BottomNav'
import { cn } from '@/lib/utils'

type Section = 'universal' | 'technician' | 'commercial'

export default function UIKitPage() {
  const [activeSection, setActiveSection] = useState<Section>('universal')
  const [messages] = useState([
    {
      id: 1,
      sender: 'technician' as const,
      content: "Good morning Sarah, I'll be servicing your pool today.",
      timestamp: '08:05 AM'
    },
    {
      id: 2,
      sender: 'customer' as const,
      content: 'Thanks for letting me know! The gate code is 1234.',
      timestamp: '08:07 AM',
      customerInitials: 'SJ'
    }
  ])

  const navItems = [
    { id: 'universal', label: 'Universal' },
    { id: 'technician', label: 'Technician UI Kit' },
    { id: 'commercial', label: 'Commercial UI Kit' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-4">CERV UI Kit</h1>
          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeSection === 'universal' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">CERV Logo</h2>
              <div className="bg-card rounded-lg p-8 flex items-center justify-center">
                <ShaderOrbLogo size={120} />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">App Header</h2>
              <div className="bg-card rounded-lg overflow-hidden">
                <AppHeader
                  userName="Alex Morgan"
                  notificationCount={4}
                  onProfileClick={() => console.log('Profile clicked')}
                  onNotificationClick={() => console.log('Notifications clicked')}
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'technician' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Card Info</h2>
              <CustomerCardInfo
                customerFirstName="Sarah"
                customerLastName="Johnson"
                address="1234 Maple Avenue, San Francisco"
                serviceType="CERV POOL"
                status="Active"
                onCall={() => console.log('Calling customer...')}
                onText={() => console.log('Opening text conversation...')}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Location Map</h2>
              <JobLocationMap
                customerFirstName="Sarah"
                address="1234 Maple Avenue, San Francisco"
                onOpenMaps={() => console.log('Opening in Maps app...')}
                onStartNavigation={() => console.log('Starting navigation...')}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Chat Card</h2>
              <CustomerChatCard
                customerFirstName="Sarah"
                customerLastName="Johnson"
                messages={messages}
                onSendMessage={(msg) => console.log('Message sent:', msg)}
                onAttachment={() => console.log('Attachment clicked')}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Schedule Card</h2>
              <JobScheduleCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Daily Stats Card</h2>
              <DailyStatsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Daily Metrics Card</h2>
              <DailyMetricsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Earnings Card</h2>
              <EarningsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Earnings Metric Bloc</h2>
              <EarningsMetric2Bloc />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Performance Summary Card</h2>
              <PerformanceSummaryCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Route Efficiency Card</h2>
              <RouteEfficiencyCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Service Duration Card</h2>
              <ServiceDurationCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Stack Ranking Card</h2>
              <StackRankingCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Rating Card</h2>
              <CustomerRatingCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Rewards Card</h2>
              <RewardsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Metrics Dashboard</h2>
              <MetricsDashboard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Message Tabs</h2>
              <MessageTabs />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Message List Item</h2>
              <MessageListItem
                customerName="John Doe"
                lastMessage="Thanks for servicing the pool!"
                timestamp="2:30 PM"
                isUnread={true}
                onClick={() => console.log('Message clicked')}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">App Settings Card</h2>
              <AppSettingsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Technician Profile Settings</h2>
              <TechnicianProfileSettingsCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Support & Sign Out Card</h2>
              <SupportSignOutCard />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Bottom Navigation</h2>
              <div className="relative h-20 bg-card rounded-lg overflow-hidden">
                <BottomNav />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'commercial' && (
          <div className="space-y-8">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                Commercial UI Kit
              </h2>
              <p className="text-muted-foreground mt-2">
                Components for commercial features coming soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}