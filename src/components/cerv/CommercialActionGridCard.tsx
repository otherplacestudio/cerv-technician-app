'use client'

import React from 'react'
import { Wrench, FileText, AlertTriangle, History, Plus, BarChart3, Calendar, Settings } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ActionItem {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  onClick?: () => void
}

interface CommercialActionGridCardProps {
  actions?: ActionItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export const CommercialActionGridCard: React.FC<CommercialActionGridCardProps> = ({
  actions = [
    {
      id: '1',
      icon: <Wrench className="h-7 w-7" />,
      title: 'Add New Service',
      subtitle: 'Start work order',
      onClick: () => console.log('Add New Service clicked')
    },
    {
      id: '2',
      icon: <FileText className="h-7 w-7" />,
      title: 'Analytics',
      subtitle: 'View insights',
      onClick: () => console.log('Analytics clicked')
    },
    {
      id: '3',
      icon: <AlertTriangle className="h-7 w-7" />,
      title: 'Report Issue',
      subtitle: 'Flag problems',
      onClick: () => console.log('Report Issue clicked')
    },
    {
      id: '4',
      icon: <History className="h-7 w-7" />,
      title: 'Booking History',
      subtitle: 'View past services',
      onClick: () => console.log('Booking History clicked')
    }
  ],
  columns = 2,
  className
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        <div className={cn(
          "grid gap-8",
          gridCols[columns]
        )}>
          {actions.map((action) => (
            <button
              key={action.id}
              className="group flex flex-col items-center text-center space-y-3 cursor-pointer transition-all hover:scale-105"
              onClick={action.onClick}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-muted group-hover:bg-muted-foreground/20 flex items-center justify-center transition-colors">
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {action.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground">
                {action.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-sm text-muted-foreground">
                {action.subtitle}
              </p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CommercialActionGridCard