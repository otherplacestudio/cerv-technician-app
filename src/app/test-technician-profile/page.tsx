'use client'

import React from 'react'
import { TechnicianProfileSettingsCard } from '@/components/cerv/TechnicianProfileSettingsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestTechnicianProfilePage() {
  const handleEdit = () => {
    console.log('Edit profile clicked')
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-md mx-auto space-y-4 pt-16">
        <h1 className="text-2xl font-bold text-foreground mb-6">Technician Profile Examples</h1>
        
        {/* Default technician profile */}
        <TechnicianProfileSettingsCard onEdit={handleEdit} />
        
        {/* Custom technician profile */}
        <TechnicianProfileSettingsCard 
          technicianName="Sarah Johnson"
          technicianRole="Senior Pool Technician"
          phone="(555) 123-4567"
          email="sarah.johnson@cerv.com"
          address="Los Angeles, CA"
          onEdit={handleEdit}
        />
        
        {/* Another technician profile */}
        <TechnicianProfileSettingsCard 
          technicianName="Michael Chen"
          technicianRole="Equipment Specialist"
          phone="(555) 987-6543"
          email="michael.chen@cerv.com"
          address="San Diego, CA"
          onEdit={handleEdit}
        />
        
        {/* Technician with avatar URL */}
        <TechnicianProfileSettingsCard 
          technicianName="Jennifer Wilson"
          technicianRole="Lead Technician"
          phone="(555) 456-7890"
          email="jennifer.wilson@cerv.com"
          address="Sacramento, CA"
          avatarUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          onEdit={handleEdit}
        />
      </div>
    </div>
  )
} 