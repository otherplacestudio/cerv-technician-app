'use client'

import React from 'react'
import { Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface Issue {
  id: string
  title: string
  technicianName: string
  timeRemaining: string
  progressPercentage: number
}

interface CommercialIssuesProgressCardProps {
  title?: string
  issues?: Issue[]
  className?: string
  onIssueClick?: (issue: Issue) => void
}

export const CommercialIssuesProgressCard: React.FC<CommercialIssuesProgressCardProps> = ({
  title = 'Reported Issues - Progress',
  issues = [
    {
      id: '1',
      title: 'Pool Filter Replacement',
      technicianName: 'David Martinez',
      timeRemaining: '2 hours',
      progressPercentage: 75
    },
    {
      id: '2',
      title: 'Exterior Maintenance',
      technicianName: 'Mike Johnson',
      timeRemaining: '4 hours',
      progressPercentage: 45
    }
  ],
  className,
  onIssueClick
}) => {
  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
          {title}
        </h2>

        {/* Issues List */}
        <div className="space-y-6">
          {issues.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No issues in progress
            </p>
          ) : (
            issues.map((issue, index) => (
              <div
                key={issue.id}
                className={cn(
                  "space-y-3 cursor-pointer",
                  index < issues.length - 1 && "pb-6 border-b border-border"
                )}
                onClick={() => onIssueClick?.(issue)}
              >
                {/* Issue Title and Time */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {issue.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{issue.timeRemaining}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <Progress 
                    value={issue.progressPercentage} 
                    className="h-2 bg-muted"
                  />
                  <div 
                    className="absolute top-0 left-0 h-2 rounded-full bg-primary transition-all"
                    style={{ width: `${issue.progressPercentage}%` }}
                  />
                </div>

                {/* Technician and Percentage */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Technician: {issue.technicianName}
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {issue.progressPercentage}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CommercialIssuesProgressCard