'use client'

import React from 'react'
import { CommercialIssuesProgressCard } from '@/components/cerv/CommercialIssuesProgressCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialIssuesProgressPage() {
  const handleIssueClick = (issue: any) => {
    console.log('Issue clicked:', issue)
    alert(`Issue clicked: ${issue.title} - ${issue.progressPercentage}% complete`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Issues Progress Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialIssuesProgressCard 
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Multiple Issues */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Issues</h2>
          <CommercialIssuesProgressCard 
            issues={[
              {
                id: '1',
                title: 'HVAC System Repair',
                technicianName: 'John Smith',
                timeRemaining: '30 minutes',
                progressPercentage: 90
              },
              {
                id: '2',
                title: 'Plumbing Leak Fix',
                technicianName: 'Sarah Chen',
                timeRemaining: '1 hour',
                progressPercentage: 65
              },
              {
                id: '3',
                title: 'Electrical Panel Upgrade',
                technicianName: 'Robert Wilson',
                timeRemaining: '3 hours',
                progressPercentage: 35
              },
              {
                id: '4',
                title: 'Roof Inspection',
                technicianName: 'Emily Davis',
                timeRemaining: '2 hours',
                progressPercentage: 50
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Near Completion */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Near Completion</h2>
          <CommercialIssuesProgressCard 
            title="Almost Done"
            issues={[
              {
                id: '1',
                title: 'Window Cleaning',
                technicianName: 'Team Alpha',
                timeRemaining: '10 minutes',
                progressPercentage: 95
              },
              {
                id: '2',
                title: 'Floor Polishing',
                technicianName: 'Team Beta',
                timeRemaining: '15 minutes',
                progressPercentage: 92
              },
              {
                id: '3',
                title: 'Carpet Cleaning',
                technicianName: 'Team Gamma',
                timeRemaining: '5 minutes',
                progressPercentage: 98
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Just Started */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Just Started</h2>
          <CommercialIssuesProgressCard 
            title="Recently Assigned"
            issues={[
              {
                id: '1',
                title: 'Landscaping Service',
                technicianName: 'Michael Brown',
                timeRemaining: '8 hours',
                progressPercentage: 5
              },
              {
                id: '2',
                title: 'Pest Control Treatment',
                technicianName: 'Jennifer White',
                timeRemaining: '6 hours',
                progressPercentage: 10
              },
              {
                id: '3',
                title: 'Security System Installation',
                technicianName: 'Alex Turner',
                timeRemaining: '10 hours',
                progressPercentage: 2
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Critical Issues */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Critical Issues</h2>
          <CommercialIssuesProgressCard 
            title="Urgent - Priority Issues"
            issues={[
              {
                id: '1',
                title: 'Emergency Power Restoration',
                technicianName: 'Emergency Team',
                timeRemaining: '45 minutes',
                progressPercentage: 60
              },
              {
                id: '2',
                title: 'Water Main Break Repair',
                technicianName: 'Rapid Response',
                timeRemaining: '1.5 hours',
                progressPercentage: 40
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Single Issue */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Issue</h2>
          <CommercialIssuesProgressCard 
            issues={[
              {
                id: '1',
                title: 'Monthly Maintenance Check',
                technicianName: 'David Lee',
                timeRemaining: '3 hours',
                progressPercentage: 55
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* No Issues */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">No Issues</h2>
          <CommercialIssuesProgressCard 
            issues={[]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Different Time Formats */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Various Time Formats</h2>
          <CommercialIssuesProgressCard 
            issues={[
              {
                id: '1',
                title: 'Quick Fix',
                technicianName: 'Chris Martinez',
                timeRemaining: '5 minutes',
                progressPercentage: 85
              },
              {
                id: '2',
                title: 'Standard Service',
                technicianName: 'Amy Johnson',
                timeRemaining: '2.5 hours',
                progressPercentage: 50
              },
              {
                id: '3',
                title: 'Extended Project',
                technicianName: 'Project Team',
                timeRemaining: '2 days',
                progressPercentage: 20
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Long Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Content</h2>
          <CommercialIssuesProgressCard 
            title="Comprehensive Building Maintenance and Repair Progress Tracking"
            issues={[
              {
                id: '1',
                title: 'Complete HVAC System Overhaul and Ductwork Replacement',
                technicianName: 'Christopher Alexander Thompson Jr.',
                timeRemaining: '12 hours remaining',
                progressPercentage: 33
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>

        {/* Various Progress States */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Progress Variations</h2>
          <CommercialIssuesProgressCard 
            issues={[
              {
                id: '1',
                title: 'Not Started',
                technicianName: 'Pending Assignment',
                timeRemaining: 'TBD',
                progressPercentage: 0
              },
              {
                id: '2',
                title: 'Quarter Complete',
                technicianName: 'Tech Team A',
                timeRemaining: '6 hours',
                progressPercentage: 25
              },
              {
                id: '3',
                title: 'Half Way There',
                technicianName: 'Tech Team B',
                timeRemaining: '4 hours',
                progressPercentage: 50
              },
              {
                id: '4',
                title: 'Three Quarters Done',
                technicianName: 'Tech Team C',
                timeRemaining: '2 hours',
                progressPercentage: 75
              },
              {
                id: '5',
                title: 'Completed',
                technicianName: 'Tech Team D',
                timeRemaining: 'Done',
                progressPercentage: 100
              }
            ]}
            onIssueClick={handleIssueClick}
          />
        </div>
      </div>
    </div>
  )
}