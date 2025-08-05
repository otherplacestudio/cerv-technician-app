'use client'

import React from 'react'
import { CommercialActionGridCard } from '@/components/cerv/CommercialActionGridCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { 
  Wrench, 
  FileText, 
  AlertTriangle, 
  History,
  Plus,
  BarChart3,
  Calendar,
  Settings,
  Users,
  Mail,
  Phone,
  Shield,
  DollarSign,
  Home,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Package,
  Truck,
  Clipboard
} from 'lucide-react'

export default function TestCommercialActionGridPage() {
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
          Commercial Action Grid Card Test
        </h1>

        {/* Default Props (2x2 Grid) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props (2x2 Grid)</h2>
          <CommercialActionGridCard />
        </div>

        {/* Custom Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Actions</h2>
          <CommercialActionGridCard 
            actions={[
              {
                id: '1',
                icon: <Plus className="h-7 w-7" />,
                title: 'Create Request',
                subtitle: 'Submit new ticket',
                onClick: () => handleAction('Create Request')
              },
              {
                id: '2',
                icon: <BarChart3 className="h-7 w-7" />,
                title: 'View Reports',
                subtitle: 'Analytics dashboard',
                onClick: () => handleAction('View Reports')
              },
              {
                id: '3',
                icon: <Calendar className="h-7 w-7" />,
                title: 'Schedule',
                subtitle: 'Manage appointments',
                onClick: () => handleAction('Schedule')
              },
              {
                id: '4',
                icon: <Settings className="h-7 w-7" />,
                title: 'Settings',
                subtitle: 'Configure options',
                onClick: () => handleAction('Settings')
              }
            ]}
          />
        </div>

        {/* 3 Column Layout */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">3 Column Layout</h2>
          <CommercialActionGridCard 
            columns={3}
            actions={[
              {
                id: '1',
                icon: <Users className="h-7 w-7" />,
                title: 'Team',
                subtitle: 'Manage staff',
                onClick: () => handleAction('Team')
              },
              {
                id: '2',
                icon: <Mail className="h-7 w-7" />,
                title: 'Messages',
                subtitle: 'View inbox',
                onClick: () => handleAction('Messages')
              },
              {
                id: '3',
                icon: <Phone className="h-7 w-7" />,
                title: 'Contact',
                subtitle: 'Get support',
                onClick: () => handleAction('Contact')
              },
              {
                id: '4',
                icon: <Shield className="h-7 w-7" />,
                title: 'Security',
                subtitle: 'Safety protocols',
                onClick: () => handleAction('Security')
              },
              {
                id: '5',
                icon: <DollarSign className="h-7 w-7" />,
                title: 'Billing',
                subtitle: 'Payment info',
                onClick: () => handleAction('Billing')
              },
              {
                id: '6',
                icon: <Home className="h-7 w-7" />,
                title: 'Properties',
                subtitle: 'View locations',
                onClick: () => handleAction('Properties')
              }
            ]}
          />
        </div>

        {/* 4 Column Layout */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">4 Column Layout</h2>
          <CommercialActionGridCard 
            columns={4}
            actions={[
              {
                id: '1',
                icon: <MapPin className="h-7 w-7" />,
                title: 'Locations',
                subtitle: 'All sites',
                onClick: () => handleAction('Locations')
              },
              {
                id: '2',
                icon: <Clock className="h-7 w-7" />,
                title: 'Time Tracking',
                subtitle: 'Hours logged',
                onClick: () => handleAction('Time Tracking')
              },
              {
                id: '3',
                icon: <CheckCircle className="h-7 w-7" />,
                title: 'Approvals',
                subtitle: 'Pending items',
                onClick: () => handleAction('Approvals')
              },
              {
                id: '4',
                icon: <XCircle className="h-7 w-7" />,
                title: 'Cancellations',
                subtitle: 'Cancel service',
                onClick: () => handleAction('Cancellations')
              },
              {
                id: '5',
                icon: <Package className="h-7 w-7" />,
                title: 'Inventory',
                subtitle: 'Stock levels',
                onClick: () => handleAction('Inventory')
              },
              {
                id: '6',
                icon: <Truck className="h-7 w-7" />,
                title: 'Deliveries',
                subtitle: 'Track shipments',
                onClick: () => handleAction('Deliveries')
              },
              {
                id: '7',
                icon: <Wrench className="h-7 w-7" />,
                title: 'Maintenance',
                subtitle: 'Service log',
                onClick: () => handleAction('Maintenance')
              },
              {
                id: '8',
                icon: <Clipboard className="h-7 w-7" />,
                title: 'Inspections',
                subtitle: 'Review checklist',
                onClick: () => handleAction('Inspections')
              }
            ]}
          />
        </div>

        {/* Single Column Layout */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Column Layout</h2>
          <div className="max-w-md">
            <CommercialActionGridCard 
              columns={1}
              actions={[
                {
                  id: '1',
                  icon: <Wrench className="h-7 w-7" />,
                  title: 'Emergency Service',
                  subtitle: 'Request urgent help',
                  onClick: () => handleAction('Emergency Service')
                },
                {
                  id: '2',
                  icon: <AlertTriangle className="h-7 w-7" />,
                  title: 'Report Problem',
                  subtitle: 'Submit issue ticket',
                  onClick: () => handleAction('Report Problem')
                }
              ]}
            />
          </div>
        </div>

        {/* Two Actions Only */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Two Actions</h2>
          <CommercialActionGridCard 
            columns={2}
            actions={[
              {
                id: '1',
                icon: <Plus className="h-7 w-7" />,
                title: 'New',
                subtitle: 'Create item',
                onClick: () => handleAction('New')
              },
              {
                id: '2',
                icon: <History className="h-7 w-7" />,
                title: 'History',
                subtitle: 'View past',
                onClick: () => handleAction('History')
              }
            ]}
          />
        </div>

        {/* Six Actions (2x3 Grid) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Six Actions (2x3 Grid)</h2>
          <CommercialActionGridCard 
            columns={2}
            actions={[
              {
                id: '1',
                icon: <Wrench className="h-7 w-7" />,
                title: 'Service Request',
                subtitle: 'New work order',
                onClick: () => handleAction('Service Request')
              },
              {
                id: '2',
                icon: <FileText className="h-7 w-7" />,
                title: 'Documents',
                subtitle: 'View files',
                onClick: () => handleAction('Documents')
              },
              {
                id: '3',
                icon: <BarChart3 className="h-7 w-7" />,
                title: 'Performance',
                subtitle: 'View metrics',
                onClick: () => handleAction('Performance')
              },
              {
                id: '4',
                icon: <Calendar className="h-7 w-7" />,
                title: 'Calendar',
                subtitle: 'Schedule view',
                onClick: () => handleAction('Calendar')
              },
              {
                id: '5',
                icon: <Users className="h-7 w-7" />,
                title: 'Contacts',
                subtitle: 'Directory',
                onClick: () => handleAction('Contacts')
              },
              {
                id: '6',
                icon: <Settings className="h-7 w-7" />,
                title: 'Preferences',
                subtitle: 'Customize app',
                onClick: () => handleAction('Preferences')
              }
            ]}
          />
        </div>

        {/* Long Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Text Content</h2>
          <CommercialActionGridCard 
            columns={2}
            actions={[
              {
                id: '1',
                icon: <Wrench className="h-7 w-7" />,
                title: 'Comprehensive Service Management',
                subtitle: 'Start a new detailed work order request',
                onClick: () => handleAction('Long Service')
              },
              {
                id: '2',
                icon: <FileText className="h-7 w-7" />,
                title: 'Advanced Analytics Dashboard',
                subtitle: 'View detailed insights and performance metrics',
                onClick: () => handleAction('Long Analytics')
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}