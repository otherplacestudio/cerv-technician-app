'use client'

import React from 'react'
import { AppSettingsCard } from '@/components/cerv/AppSettingsCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { Bell, Monitor, Globe, Shield, User, Palette } from 'lucide-react'

export default function TestAppSettingsPage() {
  const handleNotificationSettings = () => {
    console.log('Opening notification settings')
  }

  const handleDisplaySettings = () => {
    console.log('Opening display settings')
  }

  const handleLanguageSettings = () => {
    console.log('Opening language settings')
  }

  const handlePrivacySettings = () => {
    console.log('Opening privacy settings')
  }

  const handleAccountSettings = () => {
    console.log('Opening account settings')
  }

  const handleThemeSettings = () => {
    console.log('Opening theme settings')
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">App Settings Examples</h1>
        
        {/* Default app settings */}
        <AppSettingsCard />
        
        {/* Custom settings with different actions */}
        <AppSettingsCard 
          title="Account Settings"
          sections={[
            {
              title: "Profile",
              description: "Update your personal information",
              action: "Edit",
              icon: <User className="h-5 w-5" />,
              iconColor: "text-blue-600",
              onClick: handleAccountSettings
            },
            {
              title: "Privacy",
              description: "Manage data and permissions",
              action: "Configure",
              icon: <Shield className="h-5 w-5" />,
              iconColor: "text-green-600",
              onClick: handlePrivacySettings
            },
            {
              title: "Theme",
              description: "Light mode",
              action: "Change",
              icon: <Palette className="h-5 w-5" />,
              iconColor: "text-purple-600",
              onClick: handleThemeSettings
            }
          ]}
        />
        
        {/* Notification settings */}
        <AppSettingsCard 
          title="Notification Preferences"
          sections={[
            {
              title: "Push Notifications",
              description: "Job alerts and updates",
              action: "Configure",
              icon: <Bell className="h-5 w-5" />,
              iconColor: "text-blue-600",
              onClick: handleNotificationSettings
            },
            {
              title: "Email Notifications",
              description: "Weekly reports and summaries",
              action: "Manage",
              icon: <Bell className="h-5 w-5" />,
              iconColor: "text-orange-600",
              onClick: handleNotificationSettings
            }
          ]}
        />
        
        {/* Display and language settings */}
        <AppSettingsCard 
          title="Appearance & Language"
          sections={[
            {
              title: "Display Settings",
              description: "Font size and layout",
              action: "Configure",
              icon: <Monitor className="h-5 w-5" />,
              iconColor: "text-purple-600",
              onClick: handleDisplaySettings
            },
            {
              title: "Language",
              description: "English (US)",
              action: "Change",
              icon: <Globe className="h-5 w-5" />,
              iconColor: "text-green-600",
              onClick: handleLanguageSettings
            }
          ]}
        />
      </div>
    </div>
  )
} 