'use client'

import React from 'react'
import { Trophy, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

// Ranking entry data structure
interface RankingEntry {
  id: string
  rank: number
  name: string
  completion: number
  avatarUrl?: string
  isCurrentUser?: boolean
}

// Tab data structure
interface RankingTab {
  id: 'branch' | 'region' | 'company'
  label: string
}

interface StackRankingCardProps {
  activeTab?: 'branch' | 'region' | 'company'
  onTabChange?: (tab: 'branch' | 'region' | 'company') => void
  rankings?: RankingEntry[]
  className?: string
}

export function StackRankingCard({
  activeTab = 'branch',
  onTabChange,
  rankings = [
    {
      id: '1',
      rank: 1,
      name: 'Marcus Johnson',
      completion: 98.5,
      avatarUrl: undefined
    },
    {
      id: '2',
      rank: 2,
      name: 'Alex Morgan',
      completion: 93.3,
      avatarUrl: undefined,
      isCurrentUser: true
    },
    {
      id: '3',
      rank: 3,
      name: 'Sarah Chen',
      completion: 91.2,
      avatarUrl: undefined
    },
    {
      id: '4',
      rank: 4,
      name: 'David Wilson',
      completion: 89.8,
      avatarUrl: undefined
    },
    {
      id: '5',
      rank: 5,
      name: 'Emily Rodriguez',
      completion: 87.4,
      avatarUrl: undefined
    }
  ],
  className
}: StackRankingCardProps) {
  const tabs: RankingTab[] = [
    { id: 'branch', label: 'Branch' },
    { id: 'region', label: 'Region' },
    { id: 'company', label: 'Company' }
  ]

  // Get rank display (trophy icons for top 3, number for others)
  const getRankDisplay = (rank: number) => {
    if (rank === 1) {
      return <Trophy className="h-4 w-4 text-yellow-500 fill-yellow-500" />
    } else if (rank === 2) {
      return <Trophy className="h-4 w-4 text-gray-400 fill-gray-400" />
    } else if (rank === 3) {
      return <Trophy className="h-4 w-4 text-amber-600 fill-amber-600" />
    } else {
      return <span className="text-sm font-medium text-foreground">#{rank}</span>
    }
  }

  // Get user initials for avatar
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base">Stack Ranking</h3>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-4 bg-muted rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={cn(
                "flex-1 h-8 px-3 text-sm font-medium rounded-md transition-all",
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rankings Table */}
        <div className="space-y-0">
          {/* Table Header */}
          <div className="flex items-center gap-3 px-2 py-2 border-b border-input">
            <div className="w-12 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Rank
            </div>
            <div className="flex-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Name
            </div>
            <div className="w-20 text-xs font-medium text-muted-foreground uppercase tracking-wider text-right">
              Completion
            </div>
          </div>

          {/* Ranking Rows */}
          <div className="space-y-0">
            {rankings.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center gap-3 px-2 py-3 hover:bg-muted/50 transition-colors"
              >
                {/* Rank */}
                <div className="w-12 flex items-center justify-center">
                  {getRankDisplay(entry.rank)}
                </div>

                {/* Name and Avatar */}
                <div className="flex-1 flex items-center gap-3 min-w-0">
                  <Avatar className="h-8 w-8">
                    {entry.avatarUrl ? (
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium">
                        {getInitials(entry.name)}
                      </AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium">
                        {getInitials(entry.name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className={cn(
                    "text-sm font-semibold truncate",
                    entry.isCurrentUser 
                      ? "text-primary" 
                      : "text-foreground"
                  )}>
                    {entry.name}
                    {entry.isCurrentUser && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        You
                      </Badge>
                    )}
                  </span>
                </div>

                {/* Completion */}
                <div className="w-20 flex items-center justify-end gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-foreground">
                    {entry.completion}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-input">
          <p className="text-xs text-muted-foreground text-center">
            Rankings based on last 30 days performance data
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default StackRankingCard 