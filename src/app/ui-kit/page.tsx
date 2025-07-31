'use client'

import React, { useState } from 'react'
import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'
import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'
import { AppHeader } from '@/components/cerv/AppHeader'
import { DailyMetricsCard } from '@/components/cerv/DailyMetricsCard'
import { DailyStatsCard } from '@/components/cerv/DailyStatsCard'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'
import { Copy, Check, Code2, Eye, Github } from 'lucide-react'
import { ShaderOrbLogo } from '@/components/cerv/ShaderOrbLogo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Message {
  id: number
  sender: 'technician' | 'customer'
  content: string
  timestamp: string
  customerInitials?: string
}

// GitHub repository base URL
const GITHUB_REPO_URL = 'https://github.com/otherplacestudio/cerv-technician-app'
const GITHUB_BRANCH = 'main' // Update this if you use a different default branch

// Component showcase data
const componentShowcase = [
  {
    name: 'CERV Logo',
    description: 'Brand logo with automatic dark mode support',
    githubPath: '/public/cerv-logo.svg',
    code: `import Image from 'next/image'

// Light mode (default)
<Image 
  src="/cerv-logo.svg" 
  alt="CERV" 
  width={120} 
  height={35}
/>

// Dark mode (inverted)
<Image 
  src="/cerv-logo.svg" 
  alt="CERV" 
  width={120} 
  height={35}
  className="dark:invert"
/>

// Usage in AppHeader (responsive sizing)
<Image 
  src="/cerv-logo.svg" 
  alt="CERV" 
  width={70} 
  height={20}
  className="dark:invert"
/>

// SVG Details:
// - Original: Black logo on transparent background
// - Dark mode: CSS invert filter for white logo
// - Dimensions: 121x35 (original aspect ratio)
// - Location: /public/cerv-logo.svg`
  },
  {
    name: 'AppHeader',
    description: 'Main app header with user info and notifications',
    githubPath: '/src/components/cerv/AppHeader.tsx',
    code: `import { AppHeader } from '@/components/cerv/AppHeader'

<AppHeader
  userName="Alex Morgan"
  notificationCount={4}
  onProfileClick={() => console.log('Profile clicked')}
  onNotificationClick={() => console.log('Notifications clicked')}
/>

// Styling & Customization
// The component uses these key classes:
// - border-input: Consistent border color
// - bg-background: Theme-aware background
// - text-primary: Theme-aware text color
// - Notification badge: oklch(0.72 0.01 56) custom color

// To customize:
// 1. Pass className prop to override styles
// 2. Override CSS variables in your globals.css
// 3. Fork the component for deeper customization`
  },
  {
    name: 'CustomerCardInfo',
    description: 'Customer information card with contact actions',
    githubPath: '/src/components/cerv/CustomerCardInfo.tsx',
    code: `import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'

<CustomerCardInfo
  customerFirstName="Sarah"
  customerLastName="Johnson"
  address="1234 Maple Avenue, San Francisco"
  serviceType="CERV POOL"
  status="Active"
  onCall={() => console.log('Calling customer...')}
  onText={() => console.log('Opening text conversation...')}
/>

// Styling & Customization
// Key styling elements:
// - Card: border-input, py-3 padding
// - Avatar: bg-primary/10 with primary text
// - Service Badge (POOL): bg-red-100 text-red-900
// - Status Badge (Active): bg-green-100 text-green-900
// - Buttons: variant="outline" with h-11 height

// Badge color mappings:
// - Pending: "warning" variant
// - Active: green custom colors
// - Completed: "secondary" variant
// - POOL services: red/coral theme
// - Other services: blue theme`
  },
  {
    name: 'JobLocationMap',
    description: 'Interactive map showing job location with navigation',
    githubPath: '/src/components/cerv/JobLocationMap.tsx',
    code: `import { JobLocationMap } from '@/components/cerv/JobLocationMap'

<JobLocationMap
  customerFirstName="Sarah"
  address="1234 Maple Avenue, San Francisco"
  onOpenMaps={() => console.log('Opening in Maps app...')}
  onStartNavigation={() => console.log('Starting navigation...')}
/>

// Styling & Customization
// Map placeholder styling:
// - bg-muted: Theme-aware muted background
// - aspect-[4/3]: 4:3 aspect ratio
// - MapPin icon: text-muted-foreground
// - Buttons: "default" and "outline" variants

// The map area uses these Tailwind classes:
// - rounded-lg for border radius
// - border-input for consistent borders
// - p-8 for inner spacing`
  },
  {
    name: 'CustomerChatCard',
    description: 'Real-time chat interface with customers',
    githubPath: '/src/components/cerv/CustomerChatCard.tsx',
    code: `import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'

const messages = [
  {
    id: 1,
    sender: 'technician',
    content: "Good morning Sarah, I'll be servicing your pool today.",
    timestamp: '08:05 AM'
  },
  {
    id: 2,
    sender: 'customer',
    content: 'Thanks! The gate code is 1234.',
    timestamp: '08:07 AM',
    customerInitials: 'SJ'
  }
]

<CustomerChatCard
  customerFirstName="Sarah"
  customerLastName="Johnson"
  messages={messages}
  onSendMessage={(msg) => console.log('Sending:', msg)}
  onAttachment={() => console.log('Attachment clicked')}
/>

// Styling & Customization
// Message bubbles:
// - Technician: bg-black text-white (inverts in dark mode)
// - Customer: oklch(0.37 0.00 0) with white text
// - Avatar: bg-neutral-100/800 theme
// - Timestamps: 70% opacity for subtle appearance

// Layout features:
// - max-w-[70%] for message bubbles
// - Smooth scroll to bottom on new messages
// - Input area with attachment button`
  },
  {
    name: 'JobScheduleCard',
    description: 'Daily schedule timeline with job slots',
    githubPath: '/src/components/cerv/JobScheduleCard.tsx',
    code: `import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'

<JobScheduleCard
  date="Today"
  onJobClick={(job) => console.log('Clicked on job:', job.customer?.name)}
/>

// Styling & Customization
// Timeline design:
// - Travel slots: bg-gray-100 with dashed borders
// - Job slots: white background with solid borders
// - Active indicator: 4px green border on left
// - Status badges: Done (green), Active (yellow)

// Visual elements:
// - Vertical timeline: 2px gray line
// - Time dots: 6x6 circles
// - MapPin icons for addresses
// - Clock icons for duration`
  },
  {
    name: 'DailyMetricsCard',
    description: 'Daily performance metrics display',
    githubPath: '/src/components/cerv/DailyMetricsCard.tsx',
    code: `import { DailyMetricsCard } from '@/components/cerv/DailyMetricsCard'

<DailyMetricsCard />

// Styling & Customization
// Layout: 3-column grid with centered content
// Icon colors: text-primary (theme-aware)
// Progress bars: default Progress component styling
// Star ratings: filled stars use fill-primary
// Typography: 
// - Titles: text-[10px] uppercase tracking-wider
// - Values: text-lg font-semibold
// - Subtotals: text-sm text-muted-foreground

// To customize metrics:
// Pass custom metrics array with icon, title, value, progress/rating`
  },
  {
    name: 'DailyStatsCard',
    description: 'Daily activity statistics',
    githubPath: '/src/components/cerv/DailyStatsCard.tsx',
    code: `import { DailyStatsCard } from '@/components/cerv/DailyStatsCard'

<DailyStatsCard />

// Styling & Customization
// Minimal design with 3-column layout
// Icons: text-muted-foreground for subtle appearance
// Values: text-base font-semibold
// Labels: text-[10px] for compact display
// Card padding: py-3 for tight vertical spacing

// Color scheme:
// - Uses muted colors throughout
// - No bright accents for clean look
// - Consistent with system theme`
  }
]

export default function UIKitPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({})
  const isChangingTab = React.useRef(false)

  // Prevent scroll on tab change
  const handleTabChange = (component: string, value: string, event: React.MouseEvent) => {
    // Prevent default behavior
    event.preventDefault()
    event.stopPropagation()
    
    // Store current scroll position
    const scrollY = window.scrollY
    
    // Update state
    isChangingTab.current = true
    setActiveTab({ ...activeTab, [component]: value })
    
    // Force maintain scroll position
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY)
      setTimeout(() => {
        window.scrollTo(0, scrollY)
        isChangingTab.current = false
      }, 0)
    })
  }

  // Prevent all scrolling during tab changes
  React.useEffect(() => {
    let scrollY = window.scrollY
    
    const preventScroll = (e: Event) => {
      if (isChangingTab.current) {
        window.scrollTo(0, scrollY)
        e.preventDefault()
        e.stopPropagation()
      } else {
        scrollY = window.scrollY
      }
    }
    
    const lockScroll = () => {
      if (isChangingTab.current) {
        window.scrollTo(0, scrollY)
      }
    }
    
    // Listen to all possible scroll events
    window.addEventListener('scroll', lockScroll, true)
    window.addEventListener('focus', preventScroll, true)
    window.addEventListener('focusin', preventScroll, true)
    document.addEventListener('scroll', lockScroll, true)
    
    return () => {
      window.removeEventListener('scroll', lockScroll, true)
      window.removeEventListener('focus', preventScroll, true)
      window.removeEventListener('focusin', preventScroll, true)
      document.removeEventListener('scroll', lockScroll, true)
    }
  }, [])

  // Prevent scroll restoration on page load
  React.useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    // Force scroll to top on mount
    window.scrollTo(0, 0)
    
    // Double-check after a short delay to catch any async scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    
    return () => {
      clearTimeout(timer)
      // Re-enable scroll restoration when leaving the page
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }, [])

  // Sample data
  const sampleMessages: Message[] = [
    {
      id: 1,
      sender: 'technician',
      content: "Good morning Sarah, I'll be servicing your pool today. I should arrive around 8:30 AM.",
      timestamp: '08:05 AM'
    },
    {
      id: 2,
      sender: 'customer',
      content: 'Thanks for letting me know! The gate code is 1234 if you need it.',
      timestamp: '08:07 AM',
      customerInitials: 'SJ'
    },
    {
      id: 3,
      sender: 'technician',
      content: "Perfect, thank you! I'll make sure to secure the gate when I leave.",
      timestamp: '08:10 AM'
    }
  ]

  // Handler functions
  const handleCall = () => console.log('Calling customer...')
  const handleText = () => console.log('Opening text conversation...')
  const handleOpenMaps = () => console.log('Opening in Maps app...')
  const handleStartNavigation = () => console.log('Starting navigation...')
  const handleSendMessage = (message: string) => console.log('Sending message:', message)
  const handleAttachment = () => console.log('Attachment clicked')
  const handleJobClick = (job: any) => console.log('Clicked on job:', job.customer?.name)
  const handleProfileClick = () => console.log('Profile clicked')
  const handleNotificationClick = () => console.log('Notifications clicked')

  const copyToClipboard = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-input sticky top-0 z-40">
        <div className="container max-w-6xl mx-auto px-4 py-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShaderOrbLogo size={100} className="rounded-lg overflow-hidden" />
              <div>
                <h1 className="text-xl font-bold">CERV Mobile App UI Kit</h1>
                <p className="text-sm text-muted-foreground">
                  Production-ready components built with shadcn/ui
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/otherplacestudio/cerv-technician-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="container max-w-6xl mx-auto p-4">
        <div className="space-y-8">
          {componentShowcase.map((component, index) => (
            <Card key={component.name} className="overflow-hidden border-input">
              <div className="border-b border-input px-6 pt-3 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{component.name}</h2>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                  </div>
                  {component.githubPath && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="ml-4"
                    >
                      <a
                        href={`${GITHUB_REPO_URL}/blob/${GITHUB_BRANCH}${component.githubPath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                {/* Custom tab implementation without Radix focus management */}
                <div className="w-full">
                  <div className="grid w-full grid-cols-2 bg-muted rounded-lg p-[3px]">
                    <button
                      onClick={(e) => handleTabChange(component.name, 'preview', e)}
                      onMouseDown={(e) => e.preventDefault()}
                      className={cn(
                        "inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-all hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black",
                        activeTab[component.name] !== 'code' && "bg-background shadow-sm"
                      )}
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button
                      onClick={(e) => handleTabChange(component.name, 'code', e)}
                      onMouseDown={(e) => e.preventDefault()}
                      className={cn(
                        "inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium transition-all hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black",
                        activeTab[component.name] === 'code' && "bg-background shadow-sm"
                      )}
                    >
                      <Code2 className="h-4 w-4" />
                      Code
                    </button>
                  </div>
                  
                  {/* Content */}
                  {activeTab[component.name] !== 'code' ? (
                    <div className="mt-6" key={`preview-${component.name}`}>
                      <div className="bg-muted/50 rounded-lg p-8 flex justify-center">
                        <div className="w-full max-w-md">
                          {/* Render component based on name */}
                          {component.name === 'CERV Logo' && (
                            <div className="flex flex-col items-center gap-8">
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground mb-2">Light Mode</p>
                                <div className="bg-white p-4 rounded-lg">
                                  <Image 
                                    src="/cerv-logo.svg" 
                                    alt="CERV" 
                                    width={120} 
                                    height={35}
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground mb-2">Dark Mode</p>
                                <div className="bg-black p-4 rounded-lg">
                                  <Image 
                                    src="/cerv-logo.svg" 
                                    alt="CERV" 
                                    width={120} 
                                    height={35}
                                    className="invert"
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-muted-foreground mb-2">Auto Theme (Current)</p>
                                <div className="p-4">
                                  <Image 
                                    src="/cerv-logo.svg" 
                                    alt="CERV" 
                                    width={120} 
                                    height={35}
                                    className="dark:invert"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                          {component.name === 'AppHeader' && (
                            <AppHeader
                              userName="Alex Morgan"
                              notificationCount={4}
                              onProfileClick={handleProfileClick}
                              onNotificationClick={handleNotificationClick}
                            />
                          )}
                          {component.name === 'CustomerCardInfo' && (
                            <CustomerCardInfo
                              customerFirstName="Sarah"
                              customerLastName="Johnson"
                              address="1234 Maple Avenue, San Francisco"
                              serviceType="CERV POOL"
                              status="Active"
                              onCall={handleCall}
                              onText={handleText}
                            />
                          )}
                          {component.name === 'JobLocationMap' && (
                            <JobLocationMap
                              customerFirstName="Sarah"
                              address="1234 Maple Avenue, San Francisco"
                              onOpenMaps={handleOpenMaps}
                              onStartNavigation={handleStartNavigation}
                            />
                          )}
                          {component.name === 'CustomerChatCard' && (
                            <CustomerChatCard
                              customerFirstName="Sarah"
                              customerLastName="Johnson"
                              messages={sampleMessages}
                              onSendMessage={handleSendMessage}
                              onAttachment={handleAttachment}
                            />
                          )}
                          {component.name === 'JobScheduleCard' && (
                            <JobScheduleCard
                              date="Today"
                              onJobClick={handleJobClick}
                            />
                          )}
                          {component.name === 'DailyMetricsCard' && (
                            <DailyMetricsCard />
                          )}
                          {component.name === 'DailyStatsCard' && (
                            <DailyStatsCard />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6" key={`code-${component.name}`}>
                      <div className="relative">
                        <pre className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto">
                          <code className="text-sm text-neutral-100">{component.code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                          onClick={() => copyToClipboard(component.code, index)}
                        >
                          {copiedIndex === index ? (
                            <><Check className="h-3 w-3 mr-1" /> Copied</>
                          ) : (
                            <><Copy className="h-3 w-3 mr-1" /> Copy</>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}