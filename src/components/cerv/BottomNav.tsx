'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Calendar, MessageSquare, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  icon: React.ReactNode
  href: string
}

const navItems: NavItem[] = [
  {
    label: 'Jobs',
    icon: <Calendar className="h-6 w-6" />,
    href: '/preview/jobs'
  },
  {
    label: 'Messages',
    icon: <MessageSquare className="h-6 w-6" />,
    href: '/preview/messages'
  },
  {
    label: 'Performance',
    icon: <BarChart3 className="h-6 w-6" />,
    href: '/preview/performance'
  },
  {
    label: 'Settings',
    icon: <Settings className="h-6 w-6" />,
    href: '/preview/settings'
  }
]

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-input">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors",
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BottomNav