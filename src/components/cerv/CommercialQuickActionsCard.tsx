'use client'

import React from 'react'
import { Plus, FileText, AlertTriangle, Settings, Users, BarChart3, Calendar, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface QuickAction {
  id: string
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

interface CommercialQuickActionsCardProps {
  title?: string
  subtitle?: string
  actions?: QuickAction[]
  columns?: number
  className?: string
}

export const CommercialQuickActionsCard: React.FC<CommercialQuickActionsCardProps> = ({
  title = 'Quick Actions',
  subtitle = 'Common tasks and requests',
  actions = [
    {
      id: '1',
      icon: <Plus className="h-8 w-8" />,
      label: 'Add New Service',
      onClick: () => console.log('Add New Service clicked')
    },
    {
      id: '2',
      icon: <FileText className="h-8 w-8" />,
      label: 'Monthly Billing',
      onClick: () => console.log('Monthly Billing clicked')
    },
    {
      id: '3',
      icon: <AlertTriangle className="h-8 w-8" />,
      label: 'Report Issues',
      onClick: () => console.log('Report Issues clicked')
    }
  ],
  columns = 3,
  className
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
    6: 'grid-cols-3 md:grid-cols-6'
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      {/* Action Grid */}
      <div className={cn(
        "grid gap-4",
        gridCols[columns as keyof typeof gridCols] || gridCols[3]
      )}>
        {actions.map((action) => (
          <Card
            key={action.id}
            className="border-input bg-card hover:bg-muted/50 transition-all cursor-pointer group"
            onClick={action.onClick}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-muted group-hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {action.icon}
                  </div>
                </div>
                
                {/* Label */}
                <span className="text-sm font-medium text-center text-foreground">
                  {action.label}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CommercialQuickActionsCard