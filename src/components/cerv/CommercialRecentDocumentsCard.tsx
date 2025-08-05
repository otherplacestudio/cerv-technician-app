'use client'

import React from 'react'
import { Eye, FileText, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Document {
  id: string
  name: string
  type: 'PDF' | 'DOC' | 'XLS' | 'IMG' | 'TXT'
  timeAgo: string
  onClick?: () => void
}

interface CommercialRecentDocumentsCardProps {
  title?: string
  documents?: Document[]
  onViewAll?: () => void
  onAddDocument?: () => void
  onDocumentClick?: (doc: Document) => void
  className?: string
}

export const CommercialRecentDocumentsCard: React.FC<CommercialRecentDocumentsCardProps> = ({
  title = 'Recent Documents',
  documents = [
    {
      id: '1',
      name: 'Landscaping Agreement',
      type: 'PDF',
      timeAgo: '2 days ago'
    },
    {
      id: '2',
      name: 'Pool Service Quote',
      type: 'PDF',
      timeAgo: '1 week ago'
    }
  ],
  onViewAll,
  onAddDocument,
  onDocumentClick,
  className
}) => {
  const handleDocumentClick = (doc: Document) => {
    if (doc.onClick) {
      doc.onClick()
    } else if (onDocumentClick) {
      onDocumentClick(doc)
    }
  }

  const getDocumentTypeColor = (type: Document['type']) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-600 text-white'
      case 'DOC':
        return 'bg-blue-600 text-white'
      case 'XLS':
        return 'bg-green-600 text-white'
      case 'IMG':
        return 'bg-purple-600 text-white'
      case 'TXT':
        return 'bg-gray-600 text-white'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <Card className={cn("border-input bg-card", className)}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            {title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            onClick={onViewAll}
          >
            <Eye className="h-4 w-4" />
            <span>View All</span>
          </Button>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Document Cards */}
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="relative group cursor-pointer"
              onClick={() => handleDocumentClick(doc)}
            >
              <div className="aspect-[3/4] rounded-lg border-2 border-muted bg-card hover:border-muted-foreground/50 transition-all">
                <div className="flex flex-col items-center justify-center h-full p-4">
                  {/* Document Icon */}
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-muted-foreground" />
                  </div>
                  
                  {/* Document Name */}
                  <h3 className="text-sm font-medium text-foreground text-center mb-2 line-clamp-2">
                    {doc.name}
                  </h3>
                  
                  {/* Time */}
                  <p className="text-xs text-muted-foreground mb-3">
                    {doc.timeAgo}
                  </p>
                  
                  {/* Type Badge */}
                  <Badge 
                    className={cn(
                      "text-xs font-bold",
                      getDocumentTypeColor(doc.type)
                    )}
                  >
                    {doc.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* Add Document Card */}
          <div
            className="relative group cursor-pointer"
            onClick={onAddDocument}
          >
            <div className="aspect-[3/4] rounded-lg border-2 border-dashed border-muted hover:border-muted-foreground/50 transition-all">
              <div className="flex flex-col items-center justify-center h-full p-4">
                <Plus className="h-12 w-12 text-muted-foreground mb-3" />
                <span className="text-sm font-medium text-muted-foreground text-center">
                  View More<br />Documents
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CommercialRecentDocumentsCard