'use client'

import CustomerCardInfo from '@/components/cerv/CustomerCardInfo'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestCustomerCardPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Fixed to top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-sm mx-auto mt-8">
        {/* Customer Card Info */}
        <CustomerCardInfo
          customerFirstName="Sarah"
          customerLastName="Johnson"
          address="1234 Maple Avenue, San Francisco"
          serviceType="CERV POOL"
          status="Pending"
          onCall={() => console.log('Calling Sarah Johnson...')}
          onText={() => console.log('Texting Sarah Johnson...')}
        />
      </div>
    </div>
  )
}