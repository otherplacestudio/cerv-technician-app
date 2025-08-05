'use client'

import React, { useState } from 'react'
import { AddNewServiceStepper } from '@/components/cerv/AddNewServiceStepper'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestAddNewServiceStepperPage() {
  const [submittedData, setSubmittedData] = useState<any>(null)

  const handleSubmit = (data: any) => {
    console.log('Service Request Submitted:', data)
    setSubmittedData(data)
    alert('Service Request Submitted! Check console for details.')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Add New Service Stepper Test
        </h1>

        {/* Default Stepper */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Stepper</h2>
          <AddNewServiceStepper 
            onSubmit={handleSubmit}
          />
        </div>

        {/* Custom Properties */}
        <div className="space-y-4 mt-16">
          <h2 className="text-xl font-semibold text-foreground">Custom Properties</h2>
          <AddNewServiceStepper 
            properties={[
              { id: '1', name: 'Marina Bay Tower', address: '123 Marina Blvd, San Francisco, CA' },
              { id: '2', name: 'Silicon Valley Office', address: '456 Tech Way, Palo Alto, CA' },
              { id: '3', name: 'Downtown Complex', address: '789 Market St, San Francisco, CA' },
              { id: '4', name: 'Waterfront Plaza', address: '321 Embarcadero, San Francisco, CA' }
            ]}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Different Service Categories */}
        <div className="space-y-4 mt-16">
          <h2 className="text-xl font-semibold text-foreground">Extended Service Options</h2>
          <AddNewServiceStepper 
            serviceCategories={[
              'Pool Maintenance',
              'Landscape Services',
              'Pest Control',
              'HVAC Services',
              'Plumbing',
              'Electrical',
              'Cleaning Services',
              'Security Services'
            ]}
            serviceTypes={{
              'Pool Maintenance': ['Regular Cleaning', 'Chemical Treatment', 'Equipment Repair', 'Deep Clean', 'Winterization'],
              'Landscape Services': ['Lawn Mowing', 'Tree Trimming', 'Irrigation', 'Seasonal Planting', 'Hardscape'],
              'Pest Control': ['General Treatment', 'Termite Control', 'Rodent Control', 'Mosquito Control', 'Bee Removal'],
              'HVAC Services': ['AC Repair', 'Heating Repair', 'Maintenance', 'Installation', 'Duct Cleaning'],
              'Plumbing': ['Leak Repair', 'Drain Cleaning', 'Water Heater', 'Pipe Installation', 'Emergency Service'],
              'Electrical': ['Outlet Repair', 'Panel Upgrade', 'Lighting', 'Wiring', 'Generator Service'],
              'Cleaning Services': ['Office Cleaning', 'Deep Clean', 'Window Washing', 'Carpet Cleaning', 'Pressure Washing'],
              'Security Services': ['Camera Installation', 'Access Control', 'Alarm Systems', 'Monitoring', 'Patrol Service']
            }}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Pool-Specific Options */}
        <div className="space-y-4 mt-16">
          <h2 className="text-xl font-semibold text-foreground">Pool Service Specific</h2>
          <AddNewServiceStepper 
            properties={[
              { id: '1', name: 'Aqua Resort', address: 'Pool Complex A' },
              { id: '2', name: 'Splash Center', address: 'Pool Complex B' }
            ]}
            serviceCategories={['Pool Maintenance']}
            poolTypes={[
              'Kiddie Pool',
              'Lap Pool',
              'Infinity Pool',
              'Above Ground',
              'Olympic Size',
              'Hot Tub/Spa',
              'Saltwater Pool',
              'Natural Pool'
            ]}
            equipmentTypes={[
              'Heater',
              'Filter',
              'Pump',
              'Chlorinator',
              'Salt System',
              'UV System',
              'Automatic Cleaner',
              'Cover System'
            ]}
            serviceFrequencies={[
              'Daily',
              'Twice Weekly',
              'Weekly',
              'Bi-Weekly',
              'Monthly',
              'Quarterly',
              'Seasonal',
              'One-Time'
            ]}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Minimal Options */}
        <div className="space-y-4 mt-16">
          <h2 className="text-xl font-semibold text-foreground">Minimal Options</h2>
          <AddNewServiceStepper 
            properties={[
              { id: '1', name: 'Main Office', address: 'Downtown' },
              { id: '2', name: 'Branch Office', address: 'Uptown' }
            ]}
            serviceCategories={['Cleaning', 'Maintenance']}
            serviceTypes={{
              'Cleaning': ['Basic', 'Deep Clean'],
              'Maintenance': ['Routine', 'Emergency']
            }}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Submitted Data Display */}
        {submittedData && (
          <div className="space-y-4 mt-16">
            <h2 className="text-xl font-semibold text-foreground">Last Submitted Data</h2>
            <Card className="border-input bg-card">
              <CardContent className="p-6">
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

// Import Card components since they're used in the test page
import { Card, CardContent } from '@/components/ui/card'