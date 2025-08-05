'use client'

import React from 'react'
import { CommercialSettingsMenuCard } from '@/components/cerv/CommercialSettingsMenuCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Edit, 
  Bell, 
  Shield, 
  HelpCircle,
  User,
  Settings,
  Lock,
  LogOut,
  CreditCard,
  Globe,
  Smartphone,
  Palette,
  Download,
  Upload,
  Database,
  Key,
  Mail,
  MessageSquare,
  FileText,
  BarChart3
} from 'lucide-react'

export default function TestCommercialSettingsMenuPage() {
  const handleItemClick = (item: any) => {
    console.log('Settings item clicked:', item)
    alert(`Settings item clicked: ${item.title}`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Settings Menu Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialSettingsMenuCard 
            onItemClick={handleItemClick}
          />
        </div>

        {/* Account Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Account Settings</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <User className="h-6 w-6" />,
                title: 'Personal Information',
                subtitle: 'Name, email, and contact details',
                onClick: () => handleItemClick({ title: 'Personal Information' })
              },
              {
                id: '2',
                icon: <CreditCard className="h-6 w-6" />,
                title: 'Billing & Payments',
                subtitle: 'Payment methods and billing history',
                onClick: () => handleItemClick({ title: 'Billing & Payments' })
              },
              {
                id: '3',
                icon: <Globe className="h-6 w-6" />,
                title: 'Language & Region',
                subtitle: 'Set your preferred language',
                onClick: () => handleItemClick({ title: 'Language & Region' })
              },
              {
                id: '4',
                icon: <LogOut className="h-6 w-6" />,
                title: 'Sign Out',
                subtitle: 'Sign out of your account',
                onClick: () => handleItemClick({ title: 'Sign Out' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* App Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">App Settings</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Palette className="h-6 w-6" />,
                title: 'Appearance',
                subtitle: 'Theme and display settings',
                onClick: () => handleItemClick({ title: 'Appearance' })
              },
              {
                id: '2',
                icon: <Smartphone className="h-6 w-6" />,
                title: 'Mobile App',
                subtitle: 'Sync and mobile preferences',
                onClick: () => handleItemClick({ title: 'Mobile App' })
              },
              {
                id: '3',
                icon: <Bell className="h-6 w-6" />,
                title: 'Push Notifications',
                subtitle: 'Control push notification settings',
                onClick: () => handleItemClick({ title: 'Push Notifications' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Data Management */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Data Management</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Download className="h-6 w-6" />,
                title: 'Export Data',
                subtitle: 'Download your data',
                onClick: () => handleItemClick({ title: 'Export Data' })
              },
              {
                id: '2',
                icon: <Upload className="h-6 w-6" />,
                title: 'Import Data',
                subtitle: 'Upload data from other sources',
                onClick: () => handleItemClick({ title: 'Import Data' })
              },
              {
                id: '3',
                icon: <Database className="h-6 w-6" />,
                title: 'Backup & Restore',
                subtitle: 'Manage your data backups',
                onClick: () => handleItemClick({ title: 'Backup & Restore' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Security Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Security</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Lock className="h-6 w-6" />,
                title: 'Change Password',
                subtitle: 'Update your account password',
                onClick: () => handleItemClick({ title: 'Change Password' })
              },
              {
                id: '2',
                icon: <Key className="h-6 w-6" />,
                title: 'Two-Factor Authentication',
                subtitle: 'Add an extra layer of security',
                onClick: () => handleItemClick({ title: 'Two-Factor Authentication' })
              },
              {
                id: '3',
                icon: <Shield className="h-6 w-6" />,
                title: 'Privacy Settings',
                subtitle: 'Control your privacy preferences',
                onClick: () => handleItemClick({ title: 'Privacy Settings' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Communication */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Communication</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Mail className="h-6 w-6" />,
                title: 'Email Preferences',
                subtitle: 'Manage email notifications',
                onClick: () => handleItemClick({ title: 'Email Preferences' })
              },
              {
                id: '2',
                icon: <MessageSquare className="h-6 w-6" />,
                title: 'SMS Settings',
                subtitle: 'Text message preferences',
                onClick: () => handleItemClick({ title: 'SMS Settings' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Single Item */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Item</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Settings className="h-6 w-6" />,
                title: 'General Settings',
                subtitle: 'Basic app configuration',
                onClick: () => handleItemClick({ title: 'General Settings' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* More Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">More Options</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <FileText className="h-6 w-6" />,
                title: 'Terms of Service',
                subtitle: 'Read our terms and conditions',
                onClick: () => handleItemClick({ title: 'Terms of Service' })
              },
              {
                id: '2',
                icon: <Shield className="h-6 w-6" />,
                title: 'Privacy Policy',
                subtitle: 'How we handle your data',
                onClick: () => handleItemClick({ title: 'Privacy Policy' })
              },
              {
                id: '3',
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Usage Analytics',
                subtitle: 'View your usage statistics',
                onClick: () => handleItemClick({ title: 'Usage Analytics' })
              },
              {
                id: '4',
                icon: <HelpCircle className="h-6 w-6" />,
                title: 'FAQ',
                subtitle: 'Frequently asked questions',
                onClick: () => handleItemClick({ title: 'FAQ' })
              },
              {
                id: '5',
                icon: <MessageSquare className="h-6 w-6" />,
                title: 'Contact Support',
                subtitle: 'Get in touch with our team',
                onClick: () => handleItemClick({ title: 'Contact Support' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Long Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Text Content</h2>
          <CommercialSettingsMenuCard 
            items={[
              {
                id: '1',
                icon: <Settings className="h-6 w-6" />,
                title: 'Advanced Configuration and System Preferences',
                subtitle: 'Comprehensive settings for power users including detailed system configurations and advanced options',
                onClick: () => handleItemClick({ title: 'Advanced Settings' })
              }
            ]}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </div>
  )
}