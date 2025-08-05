'use client'

import React from 'react'
import { DescriptionContentCard } from '@/components/cerv/DescriptionContentCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestDescriptionContentPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Description Content Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <DescriptionContentCard />
        </div>

        {/* Different Service Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Services</h2>
          
          <DescriptionContentCard 
            title="Pool Maintenance"
            description="Regular pool cleaning service including chemical balance testing, skimming debris, brushing walls, and equipment inspection"
          />

          <DescriptionContentCard 
            title="Landscape Services"
            description="Professional landscaping including lawn mowing, hedge trimming, seasonal plantings, and irrigation system maintenance"
          />

          <DescriptionContentCard 
            title="HVAC Maintenance"
            description="Complete heating and cooling system inspection, filter replacement, coil cleaning, and performance optimization"
          />
        </div>

        {/* Long Descriptions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Descriptions</h2>
          
          <DescriptionContentCard 
            title="Comprehensive Building Maintenance"
            description="Our comprehensive building maintenance service covers all aspects of property upkeep including regular inspections, preventive maintenance, emergency repairs, vendor management, and detailed reporting. We ensure your property remains in optimal condition while minimizing downtime and unexpected costs. Our experienced team is available 24/7 for emergency situations and follows industry best practices for all maintenance procedures."
          />

          <DescriptionContentCard 
            title="Emergency Response Protocol"
            description="In the event of an emergency, our rapid response team will be dispatched immediately. This includes initial assessment, containment of the issue, temporary solutions to minimize damage, coordination with specialized contractors if needed, detailed documentation for insurance purposes, and follow-up services to ensure complete resolution. All emergency services are available 24/7 with guaranteed response times based on severity levels."
          />
        </div>

        {/* Custom Titles */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Titles</h2>
          
          <DescriptionContentCard 
            title="About This Service"
            description="This service includes a comprehensive evaluation and treatment plan"
          />

          <DescriptionContentCard 
            title="What's Included"
            description="Your service package includes all labor, materials, and follow-up visits"
          />

          <DescriptionContentCard 
            title="Important Notes"
            description="Please ensure all areas are accessible and pets are secured during service"
          />
        </div>

        {/* Different Content Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Content Types</h2>
          
          <DescriptionContentCard 
            title="Service Benefits"
            description="✓ Eco-friendly products ✓ Licensed technicians ✓ Satisfaction guarantee ✓ Flexible scheduling ✓ Competitive pricing"
          />

          <DescriptionContentCard 
            title="Service Schedule"
            description="Week 1: Initial inspection and assessment. Week 2: Primary treatment application. Week 3: Follow-up evaluation. Week 4: Final treatment and preventive measures."
          />

          <DescriptionContentCard 
            title="Pricing Information"
            description="Base service: $150. Additional treatments: $75 each. Monthly maintenance: $100. Annual contract: $1000 (includes 12 visits)."
          />
        </div>

        {/* Short Descriptions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Short Descriptions</h2>
          
          <DescriptionContentCard 
            title="Quick Service"
            description="15-minute inspection"
          />

          <DescriptionContentCard 
            title="Standard Service"
            description="Complete treatment in under 2 hours"
          />
        </div>

        {/* Special Instructions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Special Instructions</h2>
          
          <DescriptionContentCard 
            title="Preparation Required"
            description="Please clear all areas to be serviced. Remove any valuable or fragile items. Ensure all pets are in a safe location. Provide access to water and electrical outlets if needed."
          />

          <DescriptionContentCard 
            title="Post-Service Care"
            description="Allow treated areas to dry completely (2-4 hours). Keep pets and children away from treated surfaces. Ventilate the area if recommended. Follow any specific instructions provided by the technician."
          />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Terms and Conditions</h2>
          
          <DescriptionContentCard 
            title="Service Agreement"
            description="By scheduling this service, you agree to our terms and conditions. Services are subject to availability. Cancellations must be made 24 hours in advance. Payment is due upon completion unless other arrangements have been made."
          />

          <DescriptionContentCard 
            title="Warranty Information"
            description="All services come with a 30-day warranty. If issues persist after treatment, we will return at no additional charge. Warranty is void if treated areas are altered or if non-approved products are applied."
          />
        </div>

        {/* Multiple Cards in Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Grid Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DescriptionContentCard 
              title="Indoor Service"
              description="Complete interior treatment including all rooms, closets, and storage areas"
            />
            <DescriptionContentCard 
              title="Outdoor Service"
              description="Perimeter treatment, lawn application, and exterior structure protection"
            />
            <DescriptionContentCard 
              title="Garage Service"
              description="Special attention to garage areas including storage and entry points"
            />
            <DescriptionContentCard 
              title="Attic/Basement"
              description="Thorough inspection and treatment of attic and basement areas"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Empty Description</h2>
          <DescriptionContentCard 
            title="No Description Available"
            description=""
          />
        </div>

        {/* Compact Width */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Compact Container</h2>
          <div className="max-w-sm">
            <DescriptionContentCard 
              title="Service Info"
              description="Quick overview of the service details and requirements"
            />
          </div>
        </div>
      </div>
    </div>
  )
}