'use client'

import React from 'react'
import { BookingDetailQuickViewCard } from '@/components/cerv/BookingDetailQuickViewCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestBookingDetailQuickViewPage() {
  const handleCardClick = () => {
    console.log('Booking card clicked')
    alert('Booking card clicked')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Booking Detail Quick View Card Test
        </h1>

        {/* Default Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Default Props</h2>
          <BookingDetailQuickViewCard onClick={handleCardClick} />
        </div>

        {/* Different Service Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Services</h2>
          
          <BookingDetailQuickViewCard 
            serviceType="Landscape Maintenance"
            price={150.00}
            propertyName="Riverside Office Park"
            date="March 26, 2024"
            category="landscape"
            categoryColor="bg-green-500"
            status="in progress"
            statusVariant="default"
            technicianName="Sarah Chen"
            technicianRating={5.0}
            timeSlot="10:00 AM - 12:00 PM"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            serviceType="Pest Control"
            price={89.99}
            propertyName="Downtown Business Tower"
            date="March 27, 2024"
            category="pest"
            categoryColor="bg-purple-500"
            status="completed"
            statusVariant="secondary"
            technicianName="John Martinez"
            technicianRating={4.7}
            timeSlot="2:00 PM - 3:30 PM"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            serviceType="Tree Services"
            price={275.00}
            propertyName="Tech Campus North"
            date="March 28, 2024"
            category="tree"
            categoryColor="bg-teal-500"
            status="cancelled"
            statusVariant="destructive"
            technicianName="Emily Johnson"
            technicianRating={4.8}
            timeSlot="8:00 AM - 10:00 AM"
            onClick={handleCardClick}
          />
        </div>

        {/* Long Names */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Long Names</h2>
          <BookingDetailQuickViewCard 
            serviceType="Comprehensive Pool Maintenance and Chemical Treatment"
            price={1250.50}
            propertyName="The Wellington Commercial Business Complex and Shopping Center"
            date="December 31, 2024"
            category="pool"
            categoryColor="bg-red-500"
            status="upcoming"
            statusVariant="secondary"
            technicianName="Christopher Montgomery-Richardson III"
            technicianRating={4.95}
            timeSlot="6:00 AM - 11:59 PM"
            onClick={handleCardClick}
          />
        </div>

        {/* Different Price Points */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Different Prices</h2>
          
          <BookingDetailQuickViewCard 
            serviceType="Basic Inspection"
            price={0}
            propertyName="Sample Property"
            date="March 29, 2024"
            category="inspection"
            categoryColor="bg-blue-500"
            status="scheduled"
            statusVariant="outline"
            technicianName="Alex Morgan"
            technicianRating={4.6}
            timeSlot="3:00 PM - 3:30 PM"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            serviceType="Premium Service Package"
            price={9999.99}
            propertyName="Luxury Estate"
            date="April 1, 2024"
            category="premium"
            categoryColor="bg-yellow-500"
            status="confirmed"
            statusVariant="default"
            technicianName="Elite Team"
            technicianRating={5.0}
            timeSlot="All Day"
            onClick={handleCardClick}
          />
        </div>

        {/* Different Status Types */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Status Variations</h2>
          
          <BookingDetailQuickViewCard 
            serviceType="Emergency Repair"
            price={199.00}
            propertyName="Office Building A"
            status="urgent"
            statusVariant="destructive"
            category="emergency"
            categoryColor="bg-red-600"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            serviceType="Routine Check"
            price={75.00}
            propertyName="Retail Center"
            status="pending approval"
            statusVariant="outline"
            category="routine"
            categoryColor="bg-gray-500"
            onClick={handleCardClick}
          />
        </div>

        {/* Perfect Ratings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Rating Variations</h2>
          
          <BookingDetailQuickViewCard 
            serviceType="5-Star Service"
            technicianName="Top Technician"
            technicianRating={5.0}
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            serviceType="New Technician"
            technicianName="Rookie Tech"
            technicianRating={3.5}
            onClick={handleCardClick}
          />
        </div>

        {/* Today's Date */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Today&apos;s Booking</h2>
          <BookingDetailQuickViewCard 
            serviceType="HVAC Maintenance"
            price={125.00}
            propertyName="Current Building"
            date="Today"
            category="hvac"
            categoryColor="bg-blue-500"
            status="in progress"
            statusVariant="default"
            technicianName="Current Tech"
            technicianRating={4.8}
            timeSlot="Now"
            onClick={handleCardClick}
          />
        </div>

        {/* Multiple Cards (List View) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">List View</h2>
          <div className="space-y-3">
            <BookingDetailQuickViewCard 
              serviceType="Morning Service"
              price={95.00}
              timeSlot="8:00 AM - 9:00 AM"
              onClick={handleCardClick}
            />
            <BookingDetailQuickViewCard 
              serviceType="Afternoon Service"
              price={110.00}
              timeSlot="1:00 PM - 2:30 PM"
              onClick={handleCardClick}
            />
            <BookingDetailQuickViewCard 
              serviceType="Evening Service"
              price={125.00}
              timeSlot="5:00 PM - 6:30 PM"
              onClick={handleCardClick}
            />
          </div>
        </div>

        {/* Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Custom Category Colors</h2>
          
          <BookingDetailQuickViewCard 
            category="fire"
            categoryColor="bg-orange-500"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            category="water"
            categoryColor="bg-cyan-500"
            onClick={handleCardClick}
          />

          <BookingDetailQuickViewCard 
            category="electric"
            categoryColor="bg-yellow-400"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </div>
  )
}