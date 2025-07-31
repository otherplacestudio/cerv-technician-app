'use client'

import React from 'react'
import { HelpCircle, MessageCircle, Info, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface SupportItem {
  title: string
  action: string
  icon: React.ReactNode
  iconColor: string
  onClick: () => void
}

interface SupportSignOutCardProps {
  title?: string
  supportItems?: SupportItem[]
  signOutText?: string
  onSignOut?: () => void
  className?: string
}

export function SupportSignOutCard({
  title = "Support & Help",
  supportItems = [
    {
      title: "Help Center",
      action: "View",
      icon: <HelpCircle className="h-5 w-5" />,
      iconColor: "text-blue-600",
      onClick: () => console.log('Help Center clicked')
    },
    {
      title: "Contact Support",
      action: "Contact",
      icon: <MessageCircle className="h-5 w-5" />,
      iconColor: "text-blue-600",
      onClick: () => console.log('Contact Support clicked')
    },
    {
      title: "About",
      action: "Version 2.1.0",
      icon: <Info className="h-5 w-5" />,
      iconColor: "text-gray-600",
      onClick: () => console.log('About clicked')
    }
  ],
  signOutText = "Sign Out",
  onSignOut = () => console.log('Sign out clicked'),
  className
}: SupportSignOutCardProps) {
  return (
    <Card className={cn("w-full py-0 border-input", className)}>
      <CardContent className="px-3">
        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-base text-foreground mb-3">
            {title}
          </h3>
          
          <div className="space-y-0">
            {supportItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-full",
                      item.iconColor === "text-blue-600" && "bg-blue-500",
                      item.iconColor === "text-green-600" && "bg-green-500", 
                      item.iconColor === "text-purple-600" && "bg-purple-500",
                      item.iconColor === "text-orange-600" && "bg-orange-500",
                      item.iconColor === "text-gray-600" && "bg-gray-500"
                    )}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <span className="font-semibold text-sm text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    onClick={item.onClick}
                  >
                    {item.action}
                  </Button>
                </div>
                {index < supportItems.length - 1 && (
                  <div className="border-b border-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign Out Section */}
        <div className="mt-4">
          <Button
            className="w-full h-11 bg-red-600 hover:bg-red-700 text-white border-red-600"
            onClick={onSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            {signOutText}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SupportSignOutCard 