'use client'

import React from 'react'
import { Bell, Monitor, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface SettingsSection {
  title: string
  description: string
  action: string
  icon: React.ReactNode
  iconColor: string
  onClick?: () => void
}

interface AppSettingsCardProps {
  title?: string
  sections?: SettingsSection[]
  className?: string
}

export function AppSettingsCard({
  title = "App Settings",
  sections = [
    {
      title: "Notifications",
      description: "Manage your alert preferences",
      action: "Configure",
      icon: <Bell className="h-5 w-5" />,
      iconColor: "text-blue-600",
      onClick: () => console.log('Configure notifications')
    },
    {
      title: "Display",
      description: "Adjust appearance settings",
      action: "Configure",
      icon: <Monitor className="h-5 w-5" />,
      iconColor: "text-purple-600",
      onClick: () => console.log('Configure display')
    },
    {
      title: "Language",
      description: "English (US)",
      action: "Change",
      icon: <Globe className="h-5 w-5" />,
      iconColor: "text-green-600",
      onClick: () => console.log('Change language')
    }
  ],
  className
}: AppSettingsCardProps) {
  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-semibold text-base text-foreground">{title}</h3>
        </div>

        {/* Settings Sections */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center justify-between py-3">
                {/* Left side with icon and content */}
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg bg-gray-100 dark:bg-gray-800", section.iconColor)}>
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground">
                      {section.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                {/* Right side with action button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={section.onClick}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {section.action}
                </Button>
              </div>
              
              {/* Separator line (except for last item) */}
              {index < sections.length - 1 && (
                <div className="border-b border-border/50"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default AppSettingsCard 