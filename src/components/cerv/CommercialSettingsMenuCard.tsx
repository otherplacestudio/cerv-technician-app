'use client'

import React from 'react'
import { Edit, Bell, Shield, HelpCircle, ChevronRight, User, Settings, Lock, LogOut } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SettingsItem {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  onClick?: () => void
}

interface CommercialSettingsMenuCardProps {
  items?: SettingsItem[]
  className?: string
  onItemClick?: (item: SettingsItem) => void
}

export const CommercialSettingsMenuCard: React.FC<CommercialSettingsMenuCardProps> = ({
  items = [
    {
      id: '1',
      icon: <Edit className="h-6 w-6" />,
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      onClick: () => console.log('Edit Profile clicked')
    },
    {
      id: '2',
      icon: <Bell className="h-6 w-6" />,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      onClick: () => console.log('Notifications clicked')
    },
    {
      id: '3',
      icon: <Shield className="h-6 w-6" />,
      title: 'Security & Privacy',
      subtitle: 'Password and privacy settings',
      onClick: () => console.log('Security & Privacy clicked')
    },
    {
      id: '4',
      icon: <HelpCircle className="h-6 w-6" />,
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      onClick: () => console.log('Help & Support clicked')
    }
  ],
  className,
  onItemClick
}) => {
  const handleItemClick = (item: SettingsItem) => {
    if (item.onClick) {
      item.onClick()
    } else if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <Card className={cn("border-input bg-card overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {items.map((item) => (
            <button
              key={item.id}
              className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              onClick={() => handleItemClick(item)}
            >
              <div className="flex items-center gap-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground">
                    {item.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Chevron Icon */}
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CommercialSettingsMenuCard