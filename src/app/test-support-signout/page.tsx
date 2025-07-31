'use client'

import React from 'react'
import { SupportSignOutCard } from '@/components/cerv/SupportSignOutCard'
import { ThemeToggle } from '@/components/theme-toggle'
import { HelpCircle, MessageCircle, Info, LogOut, FileText, Phone, Mail } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function TestSupportSignOutPage() {
  const { theme, resolvedTheme } = useTheme()
  
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>



      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold mb-6">Support & Sign Out</h1>

        {/* Default SupportSignOutCard */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Default</h2>
          <SupportSignOutCard />
        </div>

        {/* Custom Support Items */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Custom Support Items</h2>
          <SupportSignOutCard 
            title="Help & Support"
            supportItems={[
              {
                title: "Documentation",
                action: "Read",
                icon: <FileText className="h-5 w-5" />,
                iconColor: "text-green-600",
                onClick: () => console.log('Documentation clicked')
              },
              {
                title: "Phone Support",
                action: "Call",
                icon: <Phone className="h-5 w-5" />,
                iconColor: "text-blue-600",
                onClick: () => console.log('Phone Support clicked')
              },
              {
                title: "Email Support",
                action: "Send",
                icon: <Mail className="h-5 w-5" />,
                iconColor: "text-purple-600",
                onClick: () => console.log('Email Support clicked')
              },
              {
                title: "About App",
                action: "v3.0.1",
                icon: <Info className="h-5 w-5" />,
                iconColor: "text-gray-600",
                onClick: () => console.log('About App clicked')
              }
            ]}
            signOutText="Logout"
            onSignOut={() => console.log('Custom logout clicked')}
          />
        </div>

        {/* Minimal Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Minimal Support</h2>
          <SupportSignOutCard 
            title="Quick Help"
            supportItems={[
              {
                title: "Help Center",
                action: "Browse",
                icon: <HelpCircle className="h-5 w-5" />,
                iconColor: "text-blue-600",
                onClick: () => console.log('Help Center clicked')
              },
              {
                title: "Contact Us",
                action: "Message",
                icon: <MessageCircle className="h-5 w-5" />,
                iconColor: "text-blue-600",
                onClick: () => console.log('Contact Us clicked')
              }
            ]}
            onSignOut={() => console.log('Minimal logout clicked')}
          />
        </div>

        {/* Extended Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Extended Support</h2>
          <SupportSignOutCard 
            title="Customer Support"
            supportItems={[
              {
                title: "Help Center",
                action: "View",
                icon: <HelpCircle className="h-5 w-5" />,
                iconColor: "text-blue-600",
                onClick: () => console.log('Help Center clicked')
              },
              {
                title: "Live Chat",
                action: "Start",
                icon: <MessageCircle className="h-5 w-5" />,
                iconColor: "text-green-600",
                onClick: () => console.log('Live Chat clicked')
              },
              {
                title: "Phone Support",
                action: "Call",
                icon: <Phone className="h-5 w-5" />,
                iconColor: "text-purple-600",
                onClick: () => console.log('Phone Support clicked')
              },
              {
                title: "Email Support",
                action: "Send",
                icon: <Mail className="h-5 w-5" />,
                iconColor: "text-orange-600",
                onClick: () => console.log('Email Support clicked')
              },
              {
                title: "About",
                action: "v2.1.0",
                icon: <Info className="h-5 w-5" />,
                iconColor: "text-gray-600",
                onClick: () => console.log('About clicked')
              }
            ]}
            signOutText="Sign Out"
            onSignOut={() => console.log('Extended logout clicked')}
          />
        </div>
      </div>
    </div>
  )
} 