'use client'

import React from 'react'
import { CommercialPropertyListCard } from '@/components/cerv/CommercialPropertyListCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialPropertyListPage() {
  const handlePropertyClick = (property: any) => {
    console.log('Property clicked:', property)
    alert(`Clicked on: ${property.name}`)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Property List Card Test
        </h1>

        {/* Default Props - Horizontal Scroll */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props - Horizontal Scroll (Mobile View)</h2>
          <p className="text-sm text-muted-foreground">Swipe left/right to see more properties</p>
          <CommercialPropertyListCard onPropertyClick={handlePropertyClick} />
        </div>

        {/* With Navigation Buttons */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">With Navigation Buttons</h2>
          <CommercialPropertyListCard 
            showNavButtons={true}
            onPropertyClick={handlePropertyClick} 
          />
        </div>

        {/* Custom Properties */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Properties</h2>
          <CommercialPropertyListCard 
            properties={[
              {
                id: '1',
                name: 'Downtown Business Tower',
                location: 'Downtown Austin, TX',
                score: 95,
                imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop',
                scoreColor: 'green'
              },
              {
                id: '2',
                name: 'Riverside Office Park',
                location: 'Riverside, TX',
                score: 78,
                imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
                scoreColor: 'yellow'
              },
              {
                id: '3',
                name: 'North Tech Campus',
                location: 'North Austin, TX',
                score: 88,
                imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
                scoreColor: 'green'
              },
              {
                id: '4',
                name: 'West End Shopping Center',
                location: 'West Austin, TX',
                score: 72,
                imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
                scoreColor: 'orange'
              }
            ]}
            onPropertyClick={handlePropertyClick}
          />
        </div>

        {/* Properties with Different Scores */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Score Variations</h2>
          <CommercialPropertyListCard 
            properties={[
              {
                id: '1',
                name: 'High Performance Building',
                location: 'Central Austin, TX',
                score: 98,
                imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop'
              },
              {
                id: '2',
                name: 'Average Performance Complex',
                location: 'East Austin, TX',
                score: 65,
                imageUrl: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop'
              },
              {
                id: '3',
                name: 'Low Performance Site',
                location: 'Industrial District, TX',
                score: 45,
                imageUrl: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=600&h=400&fit=crop'
              }
            ]}
            onPropertyClick={handlePropertyClick}
          />
        </div>

        {/* Single Property */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Single Property</h2>
          <CommercialPropertyListCard 
            properties={[
              {
                id: '1',
                name: 'Lone Star Business Center',
                location: 'Cedar Park, TX',
                score: 91,
                imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop',
                scoreColor: 'green'
              }
            ]}
            onPropertyClick={handlePropertyClick}
          />
        </div>

        {/* Properties without Images */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Images</h2>
          <CommercialPropertyListCard 
            properties={[
              {
                id: '1',
                name: 'Property Without Image 1',
                location: 'Location A, TX',
                score: 85
              },
              {
                id: '2',
                name: 'Property Without Image 2',
                location: 'Location B, TX',
                score: 73
              }
            ]}
            onPropertyClick={handlePropertyClick}
          />
        </div>

        {/* Long Names Test */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names</h2>
          <CommercialPropertyListCard 
            properties={[
              {
                id: '1',
                name: 'Very Long Commercial Property Name That Should Be Truncated',
                location: 'Very Long Location Name, Austin Metropolitan Area, Texas',
                score: 88,
                imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop'
              },
              {
                id: '2',
                name: 'Another Extremely Long Property Name for Testing Truncation',
                location: 'Another Long Location in Greater Austin Area, TX',
                score: 92,
                imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop'
              }
            ]}
            onPropertyClick={handlePropertyClick}
          />
        </div>
      </div>
    </div>
  )
}