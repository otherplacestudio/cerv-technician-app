'use client'

import React from 'react'
import { VisitInformationCard } from '@/components/cerv/VisitInformationCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestVisitInformationPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Visit Information Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <VisitInformationCard />
        </div>

        {/* Tomorrow's Visit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Tomorrow&apos;s Visit</h2>
          <VisitInformationCard 
            date="Tomorrow"
            timeSlot="2:00 - 4:00 PM"
            duration="2 hours"
            technicianName="Sarah Chen"
            technicianRating={5.0}
            location="Sunset Gardens Complex"
          />
        </div>

        {/* Specific Date */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Specific Date</h2>
          <VisitInformationCard 
            date="Monday, March 25"
            dateLabel="Scheduled Date"
            timeSlot="8:00 - 10:30 AM"
            duration="2.5 hours"
            technicianName="John Martinez"
            technicianRating={4.7}
            location="Downtown Business Tower"
            locationLabel="Property Address"
          />
        </div>

        {/* Emergency Visit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Emergency Visit</h2>
          <VisitInformationCard 
            date="ASAP"
            dateLabel="Emergency Service"
            timeSlot="Within 2 hours"
            duration="1-3 hours"
            technicianName="Emergency Team"
            technicianRating={4.9}
            location="123 Main Street, Suite 400"
            locationLabel="Emergency Location"
          />
        </div>

        {/* Long Duration */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Duration Service</h2>
          <VisitInformationCard 
            date="Wednesday, April 10"
            timeSlot="9:00 AM - 5:00 PM"
            duration="8 hours (full day)"
            technicianName="Installation Team"
            technicianRating={4.85}
            location="Tech Campus Building A"
          />
        </div>

        {/* Multiple Locations */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Multiple Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <VisitInformationCard 
              date="Today"
              timeSlot="9:00 - 10:00 AM"
              duration="1 hour"
              technicianName="Mike Rodriguez"
              technicianRating={4.9}
              location="Property A - East Wing"
            />
            <VisitInformationCard 
              date="Today"
              timeSlot="10:30 - 11:30 AM"
              duration="1 hour"
              technicianName="Mike Rodriguez"
              technicianRating={4.9}
              location="Property A - West Wing"
            />
          </div>
        </div>

        {/* Different Ratings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Rating Variations</h2>
          
          <VisitInformationCard 
            technicianName="Top Rated Tech"
            technicianRating={5.0}
          />

          <VisitInformationCard 
            technicianName="New Technician"
            technicianRating={3.5}
          />

          <VisitInformationCard 
            technicianName="Experienced Pro"
            technicianRating={4.95}
          />
        </div>

        {/* Custom Labels */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Labels</h2>
          <VisitInformationCard 
            date="Next Week"
            dateLabel="Tentative Schedule"
            timeSlot="Morning Slot"
            duration="Approximately 3 hours"
            technicianName="To Be Assigned"
            technicianRating={0}
            location="Your Office"
            locationLabel="Service will be performed at"
          />
        </div>

        {/* Long Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names and Text</h2>
          <VisitInformationCard 
            date="Thursday, December 31, 2024"
            dateLabel="End of Year Service"
            timeSlot="12:00 PM - 11:59 PM"
            duration="12 hours (extended service window)"
            technicianName="Christopher Montgomery-Richardson III"
            technicianRating={4.87654321}
            location="The Wellington Commercial Business Complex and Shopping Center, Building C, Floor 15"
            locationLabel="Complete Service Address and Location Details"
          />
        </div>

        {/* Compact Width */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Compact Container</h2>
          <div className="max-w-sm">
            <VisitInformationCard 
              date="Today"
              timeSlot="3:00 - 4:00 PM"
              duration="1 hour"
              technicianName="Quick Service"
              technicianRating={4.8}
              location="Local Office"
            />
          </div>
        </div>

        {/* No Rating */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Unrated Technician</h2>
          <VisitInformationCard 
            technicianName="New Team Member"
            technicianRating={0}
          />
        </div>

        {/* Weekend Service */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Weekend Service</h2>
          <VisitInformationCard 
            date="Saturday, June 15"
            dateLabel="Weekend Appointment"
            timeSlot="10:00 AM - 12:00 PM"
            duration="2 hours"
            technicianName="Weekend Crew"
            technicianRating={4.6}
            location="Residential Complex"
            locationLabel="Weekend Service Location"
          />
        </div>
      </div>
    </div>
  )
}