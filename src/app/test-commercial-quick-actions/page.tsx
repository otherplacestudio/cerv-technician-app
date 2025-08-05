'use client'

import React from 'react'
import { CommercialQuickActionsCard } from '@/components/cerv/CommercialQuickActionsCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Plus, 
  FileText, 
  AlertTriangle, 
  Settings, 
  Users, 
  BarChart3, 
  Calendar, 
  Mail, 
  Phone,
  Wrench,
  ClipboardList,
  DollarSign,
  Shield,
  Bell,
  MapPin,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'

export default function TestCommercialQuickActionsPage() {
  const handleAction = (action: string) => {
    console.log(`Action clicked: ${action}`)
    alert(`Action clicked: ${action}`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Quick Actions Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props (3 Actions)</h2>
          <CommercialQuickActionsCard />
        </div>

        {/* Six Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Six Actions (2 Rows)</h2>
          <CommercialQuickActionsCard 
            actions={[
              {
                id: '1',
                icon: <Plus className="h-8 w-8" />,
                label: 'Add Service',
                onClick: () => handleAction('Add Service')
              },
              {
                id: '2',
                icon: <FileText className="h-8 w-8" />,
                label: 'View Reports',
                onClick: () => handleAction('View Reports')
              },
              {
                id: '3',
                icon: <Users className="h-8 w-8" />,
                label: 'Manage Team',
                onClick: () => handleAction('Manage Team')
              },
              {
                id: '4',
                icon: <Settings className="h-8 w-8" />,
                label: 'Settings',
                onClick: () => handleAction('Settings')
              },
              {
                id: '5',
                icon: <BarChart3 className="h-8 w-8" />,
                label: 'Analytics',
                onClick: () => handleAction('Analytics')
              },
              {
                id: '6',
                icon: <Calendar className="h-8 w-8" />,
                label: 'Schedule',
                onClick: () => handleAction('Schedule')
              }
            ]}
          />
        </div>

        {/* Four Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Four Actions</h2>
          <CommercialQuickActionsCard 
            title="Maintenance Actions"
            subtitle="Quick access to maintenance tasks"
            columns={4}
            actions={[
              {
                id: '1',
                icon: <Wrench className="h-8 w-8" />,
                label: 'Request Service',
                onClick: () => handleAction('Request Service')
              },
              {
                id: '2',
                icon: <ClipboardList className="h-8 w-8" />,
                label: 'Inspection',
                onClick: () => handleAction('Inspection')
              },
              {
                id: '3',
                icon: <AlertTriangle className="h-8 w-8" />,
                label: 'Report Issue',
                onClick: () => handleAction('Report Issue')
              },
              {
                id: '4',
                icon: <CheckCircle className="h-8 w-8" />,
                label: 'Approve Work',
                onClick: () => handleAction('Approve Work')
              }
            ]}
          />
        </div>

        {/* Two Columns */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Two Column Layout</h2>
          <CommercialQuickActionsCard 
            title="Billing & Communication"
            subtitle="Manage payments and messages"
            columns={2}
            actions={[
              {
                id: '1',
                icon: <DollarSign className="h-8 w-8" />,
                label: 'Make Payment',
                onClick: () => handleAction('Make Payment')
              },
              {
                id: '2',
                icon: <Mail className="h-8 w-8" />,
                label: 'Send Message',
                onClick: () => handleAction('Send Message')
              },
              {
                id: '3',
                icon: <Phone className="h-8 w-8" />,
                label: 'Call Support',
                onClick: () => handleAction('Call Support')
              },
              {
                id: '4',
                icon: <Bell className="h-8 w-8" />,
                label: 'Notifications',
                onClick: () => handleAction('Notifications')
              }
            ]}
          />
        </div>

        {/* Single Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Column Layout</h2>
          <div className="max-w-xs">
            <CommercialQuickActionsCard 
              title="Emergency"
              subtitle="Urgent actions"
              columns={1}
              actions={[
                {
                  id: '1',
                  icon: <Shield className="h-8 w-8" />,
                  label: 'Emergency Contact',
                  onClick: () => handleAction('Emergency Contact')
                },
                {
                  id: '2',
                  icon: <XCircle className="h-8 w-8" />,
                  label: 'Cancel Service',
                  onClick: () => handleAction('Cancel Service')
                }
              ]}
            />
          </div>
        </div>

        {/* Custom Title and Subtitle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Title and Subtitle</h2>
          <CommercialQuickActionsCard 
            title="Property Management"
            subtitle="Manage your properties efficiently"
            actions={[
              {
                id: '1',
                icon: <MapPin className="h-8 w-8" />,
                label: 'View Properties',
                onClick: () => handleAction('View Properties')
              },
              {
                id: '2',
                icon: <Clock className="h-8 w-8" />,
                label: 'Schedule Visit',
                onClick: () => handleAction('Schedule Visit')
              },
              {
                id: '3',
                icon: <FileText className="h-8 w-8" />,
                label: 'Documents',
                onClick: () => handleAction('Documents')
              }
            ]}
          />
        </div>

        {/* Many Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Many Actions (Grid)</h2>
          <CommercialQuickActionsCard 
            title="All Services"
            subtitle="Complete list of available actions"
            columns={4}
            actions={[
              { id: '1', icon: <Plus className="h-8 w-8" />, label: 'Add New', onClick: () => handleAction('Add New') },
              { id: '2', icon: <FileText className="h-8 w-8" />, label: 'Reports', onClick: () => handleAction('Reports') },
              { id: '3', icon: <Users className="h-8 w-8" />, label: 'Team', onClick: () => handleAction('Team') },
              { id: '4', icon: <Settings className="h-8 w-8" />, label: 'Settings', onClick: () => handleAction('Settings') },
              { id: '5', icon: <BarChart3 className="h-8 w-8" />, label: 'Analytics', onClick: () => handleAction('Analytics') },
              { id: '6', icon: <Calendar className="h-8 w-8" />, label: 'Schedule', onClick: () => handleAction('Schedule') },
              { id: '7', icon: <Mail className="h-8 w-8" />, label: 'Messages', onClick: () => handleAction('Messages') },
              { id: '8', icon: <Phone className="h-8 w-8" />, label: 'Contact', onClick: () => handleAction('Contact') }
            ]}
          />
        </div>

        {/* No Subtitle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Subtitle</h2>
          <CommercialQuickActionsCard 
            title="Quick Actions"
            subtitle=""
            actions={[
              {
                id: '1',
                icon: <Plus className="h-8 w-8" />,
                label: 'Create',
                onClick: () => handleAction('Create')
              },
              {
                id: '2',
                icon: <FileText className="h-8 w-8" />,
                label: 'View',
                onClick: () => handleAction('View')
              },
              {
                id: '3',
                icon: <Settings className="h-8 w-8" />,
                label: 'Edit',
                onClick: () => handleAction('Edit')
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}