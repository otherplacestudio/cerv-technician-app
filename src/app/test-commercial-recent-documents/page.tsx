'use client'

import React from 'react'
import { CommercialRecentDocumentsCard } from '@/components/cerv/CommercialRecentDocumentsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialRecentDocumentsPage() {
  const handleViewAll = () => {
    console.log('View all documents clicked')
    alert('View all documents clicked')
  }

  const handleAddDocument = () => {
    console.log('Add document clicked')
    alert('Add/View more documents clicked')
  }

  const handleDocumentClick = (doc: any) => {
    console.log('Document clicked:', doc)
    alert(`Document clicked: ${doc.name} (${doc.type})`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Recent Documents Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialRecentDocumentsCard 
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Multiple Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Documents</h2>
          <CommercialRecentDocumentsCard 
            documents={[
              {
                id: '1',
                name: 'Service Agreement 2024',
                type: 'PDF',
                timeAgo: '1 hour ago'
              },
              {
                id: '2',
                name: 'Monthly Invoice',
                type: 'DOC',
                timeAgo: '3 days ago'
              },
              {
                id: '3',
                name: 'Property Report',
                type: 'PDF',
                timeAgo: '1 week ago'
              },
              {
                id: '4',
                name: 'Maintenance Schedule',
                type: 'XLS',
                timeAgo: '2 weeks ago'
              },
              {
                id: '5',
                name: 'Site Photos',
                type: 'IMG',
                timeAgo: '1 month ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Different Document Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Various Document Types</h2>
          <CommercialRecentDocumentsCard 
            title="All Document Types"
            documents={[
              {
                id: '1',
                name: 'Contract.pdf',
                type: 'PDF',
                timeAgo: 'Today'
              },
              {
                id: '2',
                name: 'Proposal.docx',
                type: 'DOC',
                timeAgo: 'Yesterday'
              },
              {
                id: '3',
                name: 'Budget_2024.xlsx',
                type: 'XLS',
                timeAgo: '2 days ago'
              },
              {
                id: '4',
                name: 'PropertyPhoto.jpg',
                type: 'IMG',
                timeAgo: '3 days ago'
              },
              {
                id: '5',
                name: 'Notes.txt',
                type: 'TXT',
                timeAgo: '4 days ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Recent Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Very Recent</h2>
          <CommercialRecentDocumentsCard 
            title="Today's Documents"
            documents={[
              {
                id: '1',
                name: 'Morning Report',
                type: 'PDF',
                timeAgo: 'Just now'
              },
              {
                id: '2',
                name: 'Updated Quote',
                type: 'DOC',
                timeAgo: '5 minutes ago'
              },
              {
                id: '3',
                name: 'Work Order',
                type: 'PDF',
                timeAgo: '30 minutes ago'
              },
              {
                id: '4',
                name: 'Inspection Form',
                type: 'PDF',
                timeAgo: '1 hour ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Single Document */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Document</h2>
          <CommercialRecentDocumentsCard 
            documents={[
              {
                id: '1',
                name: 'Annual Contract',
                type: 'PDF',
                timeAgo: '1 week ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Long Document Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names</h2>
          <CommercialRecentDocumentsCard 
            title="Complex Document Names"
            documents={[
              {
                id: '1',
                name: 'Comprehensive Annual Maintenance and Service Agreement for Commercial Properties 2024-2025',
                type: 'PDF',
                timeAgo: '2 days ago'
              },
              {
                id: '2',
                name: 'Q4 Financial Report and Budget Analysis with Projections',
                type: 'XLS',
                timeAgo: '1 week ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Older Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Older Documents</h2>
          <CommercialRecentDocumentsCard 
            title="Archive"
            documents={[
              {
                id: '1',
                name: 'Q1 Report',
                type: 'PDF',
                timeAgo: '3 months ago'
              },
              {
                id: '2',
                name: 'Old Contract',
                type: 'DOC',
                timeAgo: '6 months ago'
              },
              {
                id: '3',
                name: '2023 Summary',
                type: 'PDF',
                timeAgo: '1 year ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Empty State (No Documents) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Documents</h2>
          <CommercialRecentDocumentsCard 
            documents={[]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>

        {/* Grid with Many Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Full Grid</h2>
          <CommercialRecentDocumentsCard 
            documents={[
              {
                id: '1',
                name: 'Document 1',
                type: 'PDF',
                timeAgo: '1 day ago'
              },
              {
                id: '2',
                name: 'Document 2',
                type: 'DOC',
                timeAgo: '2 days ago'
              },
              {
                id: '3',
                name: 'Document 3',
                type: 'XLS',
                timeAgo: '3 days ago'
              },
              {
                id: '4',
                name: 'Document 4',
                type: 'IMG',
                timeAgo: '4 days ago'
              },
              {
                id: '5',
                name: 'Document 5',
                type: 'TXT',
                timeAgo: '5 days ago'
              },
              {
                id: '6',
                name: 'Document 6',
                type: 'PDF',
                timeAgo: '6 days ago'
              },
              {
                id: '7',
                name: 'Document 7',
                type: 'DOC',
                timeAgo: '1 week ago'
              },
              {
                id: '8',
                name: 'Document 8',
                type: 'PDF',
                timeAgo: '2 weeks ago'
              }
            ]}
            onViewAll={handleViewAll}
            onAddDocument={handleAddDocument}
            onDocumentClick={handleDocumentClick}
          />
        </div>
      </div>
    </div>
  )
}