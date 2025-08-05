'use client'

import React, { useState } from 'react'
import { CommercialSearchFilterCard } from '@/components/cerv/CommercialSearchFilterCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCommercialSearchFilterPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    console.log('Search query:', query)
    setSearchQuery(query)
  }

  const handleCategoryChange = (category: string) => {
    console.log('Category changed:', category)
    setSelectedCategory(category)
  }

  const handleStatusChange = (status: string) => {
    console.log('Status changed:', status)
    setSelectedStatus(status)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Commercial Search Filter Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <CommercialSearchFilterCard />
        </div>

        {/* Controlled Component */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Controlled Component</h2>
          <CommercialSearchFilterCard 
            selectedCategory={selectedCategory}
            selectedStatus={selectedStatus}
            onSearch={handleSearch}
            onCategoryChange={handleCategoryChange}
            onStatusChange={handleStatusChange}
          />
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Search Query:</strong> {searchQuery || 'None'}<br />
              <strong>Selected Category:</strong> {selectedCategory}<br />
              <strong>Selected Status:</strong> {selectedStatus}
            </p>
          </div>
        </div>

        {/* Custom Categories */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Service Categories</h2>
          <CommercialSearchFilterCard 
            categories={[
              { id: '1', label: 'All Services', value: 'all' },
              { id: '2', label: 'HVAC', value: 'hvac', color: 'text-blue-500' },
              { id: '3', label: 'Plumbing', value: 'plumbing', color: 'text-indigo-500' },
              { id: '4', label: 'Electrical', value: 'electrical', color: 'text-yellow-500' },
              { id: '5', label: 'Roofing', value: 'roofing', color: 'text-orange-500' },
              { id: '6', label: 'Painting', value: 'painting', color: 'text-pink-500' }
            ]}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Custom Statuses */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Status Options</h2>
          <CommercialSearchFilterCard 
            statuses={[
              { id: '1', label: 'All', value: 'all' },
              { id: '2', label: 'New', value: 'new' },
              { id: '3', label: 'Assigned', value: 'assigned' },
              { id: '4', label: 'Working', value: 'working' },
              { id: '5', label: 'Complete', value: 'complete' },
              { id: '6', label: 'Archived', value: 'archived' }
            ]}
            onStatusChange={handleStatusChange}
          />
        </div>

        {/* Work Orders Theme */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Work Orders</h2>
          <CommercialSearchFilterCard 
            searchPlaceholder="Search work orders..."
            categories={[
              { id: '1', label: 'All Types', value: 'all' },
              { id: '2', label: 'Emergency', value: 'emergency', color: 'text-red-500' },
              { id: '3', label: 'Routine', value: 'routine', color: 'text-green-500' },
              { id: '4', label: 'Preventive', value: 'preventive', color: 'text-blue-500' }
            ]}
            statuses={[
              { id: '1', label: 'All Status', value: 'all' },
              { id: '2', label: 'Open', value: 'open' },
              { id: '3', label: 'In Progress', value: 'in_progress' },
              { id: '4', label: 'Closed', value: 'closed' }
            ]}
          />
        </div>

        {/* Properties Theme */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Properties</h2>
          <CommercialSearchFilterCard 
            searchPlaceholder="Search properties..."
            categories={[
              { id: '1', label: 'All Properties', value: 'all' },
              { id: '2', label: 'Commercial', value: 'commercial', color: 'text-purple-500' },
              { id: '3', label: 'Residential', value: 'residential', color: 'text-green-500' },
              { id: '4', label: 'Industrial', value: 'industrial', color: 'text-orange-500' }
            ]}
            statuses={[
              { id: '1', label: 'All Status', value: 'all' },
              { id: '2', label: 'Active', value: 'active' },
              { id: '3', label: 'Inactive', value: 'inactive' },
              { id: '4', label: 'Pending', value: 'pending' }
            ]}
          />
        </div>

        {/* Minimal - Categories Only */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Categories Only</h2>
          <CommercialSearchFilterCard 
            statuses={[]}
          />
        </div>

        {/* Minimal - Status Only */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Status Only</h2>
          <CommercialSearchFilterCard 
            categories={[]}
          />
        </div>

        {/* Pre-selected Values */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Pre-selected Values</h2>
          <CommercialSearchFilterCard 
            selectedCategory="landscape"
            selectedStatus="upcoming"
          />
        </div>

        {/* Many Categories (Scrollable) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Many Categories (Scrollable)</h2>
          <CommercialSearchFilterCard 
            categories={[
              { id: '1', label: 'All', value: 'all' },
              { id: '2', label: 'Pool', value: 'pool' },
              { id: '3', label: 'Landscape', value: 'landscape' },
              { id: '4', label: 'Pest', value: 'pest' },
              { id: '5', label: 'Tree', value: 'tree' },
              { id: '6', label: 'HVAC', value: 'hvac' },
              { id: '7', label: 'Plumbing', value: 'plumbing' },
              { id: '8', label: 'Electrical', value: 'electrical' },
              { id: '9', label: 'Roofing', value: 'roofing' },
              { id: '10', label: 'Painting', value: 'painting' },
              { id: '11', label: 'Cleaning', value: 'cleaning' },
              { id: '12', label: 'Security', value: 'security' }
            ]}
          />
        </div>

        {/* Custom Search Placeholder */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Search Placeholder</h2>
          <CommercialSearchFilterCard 
            searchPlaceholder="Find services, properties, or work orders..."
          />
        </div>
      </div>
    </div>
  )
}