'use client'

import React from 'react'
import { VisitDetailsHeaderCard } from '@/components/cerv/VisitDetailsHeaderCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestVisitDetailsHeaderPage() {
  const handleBack = () => {
    console.log('Back button clicked')
    alert('Back button clicked')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Visit Details Header Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <VisitDetailsHeaderCard />
        </div>

        {/* With Back Button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">With Back Button</h2>
          <VisitDetailsHeaderCard 
            onBack={handleBack}
          />
        </div>

        {/* Different Service Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Services</h2>
          
          <VisitDetailsHeaderCard 
            serviceType="Pool Maintenance"
            propertyName="Sunset Gardens Complex"
            status="In Progress"
            backgroundColor="bg-blue-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="Landscape Services"
            propertyName="Corporate Tower A"
            status="Completed"
            backgroundColor="bg-green-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="Tree Services"
            propertyName="Oakwood Business Park"
            status="Pending"
            backgroundColor="bg-teal-600"
            onBack={handleBack}
          />
        </div>

        {/* Different Status Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Status Variations</h2>
          
          <VisitDetailsHeaderCard 
            serviceType="Emergency Repair"
            propertyName="Downtown Plaza"
            status="Urgent"
            statusVariant="destructive"
            backgroundColor="bg-red-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="HVAC Maintenance"
            propertyName="Tech Campus"
            status="Cancelled"
            statusVariant="outline"
            backgroundColor="bg-gray-600"
            onBack={handleBack}
          />
        </div>

        {/* Long Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names</h2>
          <VisitDetailsHeaderCard 
            serviceType="Comprehensive Building Maintenance & Repair Services"
            propertyName="The Wellington Commercial Business Complex and Shopping Center"
            status="Awaiting Approval"
            backgroundColor="bg-indigo-600"
            onBack={handleBack}
          />
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Colors</h2>
          
          <VisitDetailsHeaderCard 
            serviceType="Cleaning Services"
            propertyName="Marina Bay Office"
            status="Active"
            backgroundColor="bg-pink-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="Security Services"
            propertyName="Financial District"
            status="On Hold"
            backgroundColor="bg-orange-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="Waste Management"
            propertyName="Industrial Park B"
            status="Scheduled"
            backgroundColor="bg-yellow-600"
            onBack={handleBack}
          />
        </div>

        {/* Without Back Button */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Without Back Button</h2>
          <VisitDetailsHeaderCard 
            serviceType="Electrical Services"
            propertyName="Retail Center"
            status="Today"
            backgroundColor="bg-blue-700"
          />
        </div>

        {/* Gradient Backgrounds */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Gradient Backgrounds</h2>
          
          <VisitDetailsHeaderCard 
            serviceType="Premium Service"
            propertyName="Luxury Estate"
            status="VIP"
            backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            serviceType="Eco Services"
            propertyName="Green Building"
            status="Certified"
            backgroundColor="bg-gradient-to-r from-green-600 to-teal-600"
            onBack={handleBack}
          />
        </div>

        {/* Multiple Statuses */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Status Messages</h2>
          
          <VisitDetailsHeaderCard 
            status="Starting Soon"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            status="In Transit"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            status="Delayed"
            statusVariant="destructive"
            onBack={handleBack}
          />

          <VisitDetailsHeaderCard 
            status="Rescheduled"
            statusVariant="outline"
            onBack={handleBack}
          />
        </div>

        {/* Compact Version */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">In Container</h2>
          <div className="max-w-md mx-auto">
            <VisitDetailsHeaderCard 
              serviceType="Quick Service"
              propertyName="Small Office"
              status="15 min"
              backgroundColor="bg-purple-600"
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    </div>
  )
}