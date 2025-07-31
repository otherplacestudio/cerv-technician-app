'use client'

import React, { useState } from 'react'
import { CustomerCardInfo } from '@/components/cerv/CustomerCardInfo'
import { JobLocationMap } from '@/components/cerv/JobLocationMap'
import { CustomerChatCard } from '@/components/cerv/CustomerChatCard'
import { JobScheduleCard } from '@/components/cerv/JobScheduleCard'
import { AppHeader } from '@/components/cerv/AppHeader'
import { DailyMetricsCard } from '@/components/cerv/DailyMetricsCard'
import { DailyStatsCard } from '@/components/cerv/DailyStatsCard'
import { MessageTabs } from '@/components/cerv/MessageTabs'
import { MessageListItem } from '@/components/cerv/MessageListItem'
import { PerformanceSummaryCard } from '@/components/cerv/PerformanceSummaryCard'
import { StackRankingCard } from '@/components/cerv/StackRankingCard'
import { MetricsDashboard } from '@/components/cerv/MetricsDashboard'
import { ServiceDurationCard } from '@/components/cerv/ServiceDurationCard'
import { EarningsCard } from '@/components/cerv/EarningsCard'
import { CustomerRatingCard } from '@/components/cerv/CustomerRatingCard'
import { TechnicianProfileSettingsCard } from '@/components/cerv/TechnicianProfileSettingsCard'
import { RewardsCard } from '@/components/cerv/RewardsCard'
import { AppSettingsCard } from '@/components/cerv/AppSettingsCard'
import { SupportSignOutCard } from '@/components/cerv/SupportSignOutCard'
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
  },
  {
    name: 'MessageTabs',
    description: 'Message center with tab switching between customers and team',
    githubPath: '/src/components/cerv/MessageTabs.tsx',
    code: `import { MessageTabs } from '@/components/cerv/MessageTabs'

<MessageTabs
  activeTab="customers"
  onTabChange={(tab) => console.log('Switched to:', tab)}
  searchValue=""
  onSearchChange={(value) => console.log('Searching:', value)}
  teamNotificationCount={4}
/>

// Styling & Customization
// Tab switcher:
// - bg-muted rounded container
// - Active tab: bg-background with shadow-sm
// - Inactive: text-muted-foreground
// - Smooth transition-all animation

// Notification badge:
// - bg-blue-600 with white text
// - Shows 9+ for counts over 9
// - h-5 w-5 rounded-full

// Search input:
// - h-11 height matching other inputs
// - Search icon positioned left
// - Dynamic placeholder based on active tab`
  },
  {
    name: 'MessageListItem',
    description: 'Individual message item for message lists with read/unread states',
    githubPath: '/src/components/cerv/MessageListItem.tsx',
    code: `import { MessageListItem } from '@/components/cerv/MessageListItem'

// Unread message
<MessageListItem
  customerName="Jennifer Wilson"
  message="Perfect! You can leave the materials on the patio. Thanks!"
  timestamp="2 min ago"
  isUnread={true}
  onClick={() => console.log('Clicked message')}
/>

// Read message
<MessageListItem
  customerName="Michael Chen"
  message="Thanks for servicing the pool today. Everything looks great!"
  timestamp="1 hour ago"
  isUnread={false}
  onClick={() => console.log('Clicked message')}
/>

// Styling & Customization
// Layout:
// - Self-contained with border-b border-input
// - Full width button with hover:bg-muted/50
// - gap-3 spacing between avatar and content

// Avatar:
// - h-10 w-10 size
// - Fallback: bg-primary/10 text-primary
// - Auto-generated initials from name

// Typography:
// - Name: text-sm font-semibold
// - Message: text-sm with truncate
// - Timestamp: text-xs text-muted-foreground

// Unread state:
// - Blue dot indicator (h-2 w-2)
// - Bolder text (font-medium)
// - text-foreground for higher contrast`
  },
  {
    name: 'PerformanceSummaryCard',
    description: 'Performance metrics display with dynamic status badges',
    githubPath: '/src/components/cerv/PerformanceSummaryCard.tsx',
    code: `import { PerformanceSummaryCard } from '@/components/cerv/PerformanceSummaryCard'

// Default metrics
<PerformanceSummaryCard />

// Custom metrics with high performance
<PerformanceSummaryCard 
  completionRate={98.5}
  onTimeArrival={92.0}
  customerRating={4.9}
  routeEfficiency={94}
/>

// Lower performance example
<PerformanceSummaryCard 
  completionRate={85.0}
  onTimeArrival={88.5}
  customerRating={4.2}
  routeEfficiency={75}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-start gap-3 with icon and title
// - Grid layout: grid-cols-2 gap-4 for metrics

// Status badges:
// - Excellent (90+ avg): green theme
// - Good (80-89 avg): blue theme  
// - Needs Improvement (<80): orange theme

// Star ratings:
// - Filled stars: text-yellow-500
// - Empty stars: text-gray-300 dark:text-gray-600
// - Half stars: layered with overflow

// Typography:
// - Labels: text-sm text-muted-foreground
// - Values: text-xl font-semibold text-foreground
// - Title: font-semibold text-base`
  },
  {
    name: 'StackRankingCard',
    description: 'Performance ranking display with tab navigation and trophy icons',
    githubPath: '/src/components/cerv/StackRankingCard.tsx',
    code: `import { StackRankingCard } from '@/components/cerv/StackRankingCard'

// Default rankings
<StackRankingCard />

// Custom rankings with current user
<StackRankingCard 
  activeTab="region"
  onTabChange={(tab) => console.log('Switched to:', tab)}
  rankings={[
    {
      id: '1',
      rank: 1,
      name: 'Jennifer Wilson',
      completion: 99.2,
      isCurrentUser: true
    },
    {
      id: '2',
      rank: 2,
      name: 'Michael Chen',
      completion: 95.8
    },
    {
      id: '3',
      rank: 3,
      name: 'Sarah Johnson',
      completion: 92.1
    }
  ]}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-start gap-3 with trophy icon
// - Tab navigation: bg-muted rounded-lg p-1

// Trophy icons:
// - 1st place: text-yellow-500 fill-yellow-500
// - 2nd place: text-gray-400 fill-gray-400
// - 3rd place: text-amber-600 fill-amber-600
// - 4th+: #rank number

// Current user highlighting:
// - Blue text (text-primary) for current user
// - "You" badge with secondary variant

// Tab states:
// - Active: bg-background text-foreground shadow-sm
// - Inactive: text-muted-foreground hover:text-foreground

// Typography:
// - Headers: font-semibold text-base
// - Names: text-sm font-semibold
// - Labels: text-xs uppercase tracking-wider`
  },
  {
    name: 'MetricsDashboard',
    description: 'Grid-based metrics display with trend indicators and icons',
    githubPath: '/src/components/cerv/MetricsDashboard.tsx',
    code: `import { MetricsDashboard } from '@/components/cerv/MetricsDashboard'
import { CheckCircle2, BarChart3, Clock, TrendingUp, TrendingDown } from 'lucide-react'

// Default metrics
<MetricsDashboard />

// Custom metrics with different data
<MetricsDashboard 
  metrics={[
    {
      title: 'Revenue',
      value: '$12,450',
      trend: { value: '8.2% increase', direction: 'up' },
      icon: <BarChart3 className="h-5 w-5" />,
      iconColor: 'text-green-600'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      trend: { value: '0.3% increase', direction: 'up' },
      icon: <CheckCircle2 className="h-5 w-5" />,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Response Time',
      value: '2.3',
      subValue: 'hours',
      trend: { value: '12% decrease', direction: 'down' },
      icon: <Clock className="h-5 w-5" />,
      iconColor: 'text-purple-600'
    },
    {
      title: 'Efficiency Score',
      value: '94.2%',
      trend: { value: '1.8% increase', direction: 'up' },
      icon: <TrendingUp className="h-5 w-5" />,
      iconColor: 'text-green-600'
    }
  ]}
/>

// Styling & Customization
// Grid layout:
// - grid grid-cols-2 gap-4 for responsive 2-column layout
// - Cards use border-input for consistent borders

// Card structure:
// - Card with CardContent and p-4 padding
// - Header: flex items-start justify-between
// - Value section with main value and optional sub-value
// - Trend section with direction indicators

// Typography:
// - Titles: text-sm font-medium text-muted-foreground
// - Values: text-2xl font-bold text-foreground
// - Sub-values: text-lg text-muted-foreground
// - Trends: text-sm with color coding

// Trend indicators:
// - Up: TrendingUp icon with text-green-500/600
// - Down: TrendingDown icon with text-red-500/600
// - Icons: h-4 w-4 size for trend indicators

// Icon customization:
// - Custom iconColor prop for flexible theming
// - Standard h-5 w-5 size for metric icons
// - Lucide React icons for consistency`
  },
  {
    name: 'ServiceDurationCard',
    description: 'Bar chart component with service duration data and trend analysis',
    githubPath: '/src/components/cerv/ServiceDurationCard.tsx',
    code: `import { ServiceDurationCard } from '@/components/cerv/ServiceDurationCard'

// Default service duration chart
<ServiceDurationCard />

// Custom chart with different data
<ServiceDurationCard 
  title="Response Time"
  subtitle="Average response time in hours (last 6 weeks)"
  data={[
    { date: "Week 1", value: 2.5, label: "W1" },
    { date: "Week 2", value: 2.1, label: "W2" },
    { date: "Week 3", value: 1.8, label: "W3" },
    { date: "Week 4", value: 1.9, label: "W4" },
    { date: "Week 5", value: 1.6, label: "W5" },
    { date: "Week 6", value: 1.4, label: "W6" }
  ]}
  maxValue={3}
/>

// Customer satisfaction chart
<ServiceDurationCard 
  title="Customer Satisfaction"
  subtitle="Rating score (last 8 weeks)"
  data={[
    { date: "Week 1", value: 4.2, label: "W1" },
    { date: "Week 2", value: 4.3, label: "W2" },
    { date: "Week 3", value: 4.5, label: "W3" },
    { date: "Week 4", value: 4.4, label: "W4" },
    { date: "Week 5", value: 4.6, label: "W5" },
    { date: "Week 6", value: 4.7, label: "W6" },
    { date: "Week 7", value: 4.8, label: "W7" },
    { date: "Week 8", value: 4.9, label: "W8" }
  ]}
  maxValue={5}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-start gap-3 with BarChart3 icon
// - Chart area: relative positioning with Y-axis labels

// Chart features:
// - Y-axis: 0, 20, 40, 60, 80 scale (customizable)
// - Grid lines: border-muted/30 for subtle guides
// - Bars: bg-foreground with rounded-sm and hover effects
// - X-axis labels: text-xs text-muted-foreground

// Data structure:
// - date: string for internal reference
// - value: number for bar height calculation
// - label: string for X-axis display

// Interactive features:
// - Hover effects: opacity-80 on bar hover
// - Tooltips: title attribute with value details
// - Minimum height: 4px to ensure visibility

// Statistics footer:
// - Average calculation from data values
// - Trend calculation (first vs last value)
// - Dynamic units based on title (min/hr/pts)`
  },
  {
    name: 'EarningsCard',
    description: 'Area chart component with earnings data and trend analysis',
    githubPath: '/src/components/cerv/EarningsCard.tsx',
    code: `import { EarningsCard } from '@/components/cerv/EarningsCard'

// Default earnings chart
<EarningsCard />

// Custom chart with different data
<EarningsCard 
  title="Revenue Performance"
  subtitle="Weekly revenue trends"
  data={[
    { date: "Week 1", value: 850, label: "W1" },
    { date: "Week 2", value: 920, label: "W2" },
    { date: "Week 3", value: 880, label: "W3" },
    { date: "Week 4", value: 950, label: "W4" },
    { date: "Week 5", value: 890, label: "W5" },
    { date: "Week 6", value: 970, label: "W6" },
    { date: "Week 7", value: 1020, label: "W7" },
    { date: "Week 8", value: 980, label: "W8" }
  ]}
/>

// Monthly performance chart
<EarningsCard 
  title="Monthly Performance"
  subtitle="Monthly revenue growth"
  data={[
    { date: "Jan", value: 3200, label: "Jan" },
    { date: "Feb", value: 3800, label: "Feb" },
    { date: "Mar", value: 4200, label: "Mar" },
    { date: "Apr", value: 3900, label: "Apr" },
    { date: "May", value: 4500, label: "May" },
    { date: "Jun", value: 4800, label: "Jun" },
    { date: "Jul", value: 5200, label: "Jul" },
    { date: "Aug", value: 4900, label: "Aug" },
    { date: "Sep", value: 5500, label: "Sep" },
    { date: "Oct", value: 5800, label: "Oct" },
    { date: "Nov", value: 6200, label: "Nov" },
    { date: "Dec", value: 6500, label: "Dec" }
  ]}
/>

// Customer satisfaction trend
<EarningsCard 
  title="Customer Satisfaction"
  subtitle="Monthly satisfaction scores"
  data={[
    { date: "Jan", value: 4.2, label: "Jan" },
    { date: "Feb", value: 4.3, label: "Feb" },
    { date: "Mar", value: 4.5, label: "Mar" },
    { date: "Apr", value: 4.4, label: "Apr" },
    { date: "May", value: 4.6, label: "May" },
    { date: "Jun", value: 4.7, label: "Jun" }
  ]}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-start gap-3 with DollarSign icon
// - Chart area: 200px height with proper margins

// Chart features:
// - Area chart with smooth monotone curves
// - Blue color scheme (#3b82f6) with 30% opacity fill
// - Grid lines: strokeDasharray="3 3" for subtle guides
// - Proper spacing: 20px margins, 12px tick margins
// - Clean axes: axisLine={false} and tickLine={false}

// Data structure:
// - date: string for internal reference
// - value: number for chart data points
// - label: string for X-axis display

// Interactive features:
// - Responsive chart with fixed dimensions (350x180)
// - Trend calculation: automatic percentage change
// - Hover effects and smooth animations

// Trend footer:
// - Dynamic trend calculation (current vs previous value)
// - TrendingUp icon with green color
// - Border separator with proper spacing`
  },
  {
    name: 'CustomerRatingCard',
    description: 'Line chart component with customer rating data and trend analysis',
    githubPath: '/src/components/cerv/CustomerRatingCard.tsx',
    code: `import { CustomerRatingCard } from '@/components/cerv/CustomerRatingCard'

// Default customer rating chart
<CustomerRatingCard />

// Weekly performance rating
<CustomerRatingCard 
  title="Weekly Performance"
  subtitle="Last 8 weeks"
  data={[
    { date: "Week 1", rating: 4.6, label: "W1" },
    { date: "Week 2", rating: 4.7, label: "W2" },
    { date: "Week 3", rating: 4.8, label: "W3" },
    { date: "Week 4", rating: 4.9, label: "W4" },
    { date: "Week 5", rating: 4.85, label: "W5" },
    { date: "Week 6", rating: 4.9, label: "W6" },
    { date: "Week 7", rating: 4.95, label: "W7" },
    { date: "Week 8", rating: 4.9, label: "W8" }
  ]}
/>

// Monthly satisfaction trend
<CustomerRatingCard 
  title="Monthly Satisfaction"
  subtitle="Last 6 months"
  data={[
    { date: "Jan", rating: 4.5, label: "Jan" },
    { date: "Feb", rating: 4.6, label: "Feb" },
    { date: "Mar", rating: 4.7, label: "Mar" },
    { date: "Apr", rating: 4.8, label: "Apr" },
    { date: "May", rating: 4.9, label: "May" },
    { date: "Jun", rating: 4.85, label: "Jun" }
  ]}
/>

// Quarterly performance
<CustomerRatingCard 
  title="Quarterly Performance"
  subtitle="Last 4 quarters"
  data={[
    { date: "Q1", rating: 4.6, label: "Q1" },
    { date: "Q2", rating: 4.7, label: "Q2" },
    { date: "Q3", rating: 4.8, label: "Q3" },
    { date: "Q4", rating: 4.9, label: "Q4" }
  ]}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-start gap-3 with Star icon
// - Chart area: 200px height with ResponsiveContainer

// Chart features:
// - Line chart with smooth monotone curves
// - Blue color scheme (#3b82f6) with 2px stroke width
// - Data points: blue circles (r: 4) with active dots (r: 6)
// - Grid lines: strokeDasharray="3 3" for subtle guides
// - Y-axis domain: [4.5, 5.0] for rating scale
// - Proper spacing: 20px margins, 12px tick margins

// Data structure:
// - date: string for internal reference
// - rating: number for chart data points (4.0-5.0 scale)
// - label: string for X-axis display

// Interactive features:
// - Responsive chart that adapts to container width
// - Hover effects with larger active dots
// - Smooth animations and transitions

// Analysis features:
// - Average rating calculation from all data points
// - Trend detection (up/down/stable)
// - Percentage change calculation
// - Color-coded trend indicators (green/red)

// Stats footer:
// - Average rating display with proper formatting
// - Trend direction with appropriate icons
// - Border separator with proper spacing`
  },
  {
    name: 'TechnicianProfileSettingsCard',
    description: 'Profile settings card with technician information and contact details',
    githubPath: '/src/components/cerv/TechnicianProfileSettingsCard.tsx',
    code: `import { TechnicianProfileSettingsCard } from '@/components/cerv/TechnicianProfileSettingsCard'

// Default technician profile
<TechnicianProfileSettingsCard onEdit={() => console.log('Edit clicked')} />

// Custom technician profile
<TechnicianProfileSettingsCard 
  technicianName="Sarah Johnson"
  technicianRole="Senior Pool Technician"
  phone="(555) 123-4567"
  email="sarah.johnson@cerv.com"
  address="Los Angeles, CA"
  onEdit={() => console.log('Edit clicked')}
/>

// Technician with avatar URL
<TechnicianProfileSettingsCard 
  technicianName="Jennifer Wilson"
  technicianRole="Lead Technician"
  phone="(555) 456-7890"
  email="jennifer.wilson@cerv.com"
  address="Sacramento, CA"
  avatarUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  onEdit={() => console.log('Edit clicked')}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: flex items-center justify-between with Profile title and Edit button
// - Profile section: flex items-start gap-3 with Avatar and name/role

// Header features:
// - "Profile" title in font-semibold text-base
// - Edit button with blue color (text-blue-600) and hover effects
// - Ghost variant button with Edit icon from Lucide React

// Profile section features:
// - Avatar component with 12x12 size (h-12 w-12)
// - AvatarFallback with initials when no image provided
// - Name in font-semibold text-base
// - Role in text-sm text-muted-foreground

// Contact details features:
// - Space-y-3 for consistent vertical spacing
// - Each contact item: flex items-center justify-between
// - Icons: Phone, Mail, MapPin from Lucide React
// - Border separators: border-b border-border/50
// - Labels in text-sm text-muted-foreground
// - Values in text-sm text-foreground

// Interactive features:
// - Edit button with onClick callback
// - Hover effects on edit button
// - Avatar with fallback initials
// - Responsive layout with proper spacing

// Data structure:
// - technicianName: string for display name
// - technicianRole: string for job title
// - phone: string for phone number
// - email: string for email address
// - address: string for location
// - avatarUrl: optional string for profile image
// - onEdit: callback function for edit action`
  },
  {
    name: 'RewardsCard',
    description: 'Rewards and referrals card with points system and achievements',
    githubPath: '/src/components/cerv/RewardsCard.tsx',
    code: `import { RewardsCard } from '@/components/cerv/RewardsCard'

// Default rewards card
<RewardsCard />

// Custom rewards with multiple items
<RewardsCard 
  title="Achievements & Rewards"
  rewards={[
    {
      title: "First Job",
      description: "Complete your first service",
      points: 100,
      icon: <Star className="h-5 w-5" />,
      iconColor: "text-yellow-600",
      badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
    },
    {
      title: "Perfect Week",
      description: "5-star rating all week",
      points: 500,
      icon: <Trophy className="h-5 w-5" />,
      iconColor: "text-orange-600",
      badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300"
    },
    {
      title: "Referral Bonus",
      description: "Bring in new customers",
      points: 1000,
      icon: <Gift className="h-5 w-5" />,
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
    }
  ]}
/>

// QR Code rewards
<RewardsCard 
  title="Service Rewards"
  rewards={[
    {
      title: "QR Code Scan",
      description: "Complete service verification",
      points: 250,
      icon: <QrCode className="h-5 w-5" />,
      iconColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
    }
  ]}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: title with border separator
// - Rewards list: space-y-3 for consistent spacing

// Header features:
// - Title in font-semibold text-base
// - Border separator: border-b border-border/50

// Reward item features:
// - Flex layout: flex items-center gap-3
// - Icon container: p-2 rounded-lg with colored background
// - Content: flex-1 min-w-0 with title and description
// - Points badge: Badge component with color-coded styling

// Icon styling:
// - Colored backgrounds: bg-blue-100 dark:bg-blue-900/20
// - Icon colors: text-blue-600, text-green-600, etc.
// - Consistent sizing: h-5 w-5 for all icons

// Badge styling:
// - Color-coded backgrounds: bg-blue-100 text-blue-700
// - Dark mode support: dark:bg-blue-900/20 dark:text-blue-300
// - Points formatting: toLocaleString() for number formatting

// Interactive features:
// - Hover effects on reward items
// - Responsive layout with proper spacing
// - Flexible reward system with custom icons and colors

// Data structure:
// - title: string for card title
// - rewards: array of RewardItem objects
// - RewardItem: title, description, points, icon, iconColor, badgeColor`
  },
  {
    name: 'AppSettingsCard',
    description: 'App settings card with configuration sections and action buttons',
    githubPath: '/src/components/cerv/AppSettingsCard.tsx',
    code: `import { AppSettingsCard } from '@/components/cerv/AppSettingsCard'

// Default app settings
<AppSettingsCard />

// Custom settings with different actions
<AppSettingsCard 
  title="Account Settings"
  sections={[
    {
      title: "Profile",
      description: "Update your personal information",
      action: "Edit",
      icon: <User className="h-5 w-5" />,
      iconColor: "text-blue-600",
      onClick: () => console.log('Edit profile')
    },
    {
      title: "Privacy",
      description: "Manage data and permissions",
      action: "Configure",
      icon: <Shield className="h-5 w-5" />,
      iconColor: "text-green-600",
      onClick: () => console.log('Configure privacy')
    },
    {
      title: "Theme",
      description: "Light mode",
      action: "Change",
      icon: <Palette className="h-5 w-5" />,
      iconColor: "text-purple-600",
      onClick: () => console.log('Change theme')
    }
  ]}
/>

// Notification settings
<AppSettingsCard 
  title="Notification Preferences"
  sections={[
    {
      title: "Push Notifications",
      description: "Job alerts and updates",
      action: "Configure",
      icon: <Bell className="h-5 w-5" />,
      iconColor: "text-blue-600",
      onClick: () => console.log('Configure notifications')
    },
    {
      title: "Email Notifications",
      description: "Weekly reports and summaries",
      action: "Manage",
      icon: <Bell className="h-5 w-5" />,
      iconColor: "text-orange-600",
      onClick: () => console.log('Manage email notifications')
    }
  ]}
/>

// Styling & Customization
// Card structure:
// - py-0 border-input with px-3 padding
// - Header: title in font-semibold text-base
// - Settings sections: space-y-0 with border separators

// Section layout:
// - Flex container: flex items-center justify-between py-3
// - Left side: flex items-center gap-3 with icon and content
// - Right side: Button component with ghost variant

// Icon styling:
// - Container: p-2 rounded-lg bg-gray-100 dark:bg-gray-800
// - Icon colors: text-blue-600, text-purple-600, text-green-600
// - Consistent sizing: h-5 w-5 for all icons

// Content styling:
// - Title: font-semibold text-sm text-foreground
// - Description: text-xs text-muted-foreground
// - Action button: text-blue-600 with hover effects

// Separator styling:
// - Border line: border-b border-border/50
// - Applied between sections (not after last item)

// Interactive features:
// - Action buttons with onClick callbacks
// - Hover effects on buttons
// - Responsive layout with proper spacing

// Data structure:
// - title: string for card title
// - sections: array of SettingsSection objects
// - SettingsSection: title, description, action, icon, iconColor, onClick`
  },
  {
    name: 'SupportSignOutCard',
    description: 'Support options and sign out functionality with customizable items',
    githubPath: '/src/components/cerv/SupportSignOutCard.tsx',
    code: `import { SupportSignOutCard } from '@/components/cerv/SupportSignOutCard'

// Default support and sign out card
<SupportSignOutCard />

// Custom support items with different icons
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

// Minimal support options
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

// Styling & Customization
// Card structure:
// - w-full py-0 border-input with px-3 padding
// - Support section: title with space-y-0 for items
// - Sign out section: mt-4 spacing with full-width button

// Support items features:
// - Flex layout: flex items-center justify-between py-3
// - Icon containers: p-2 rounded-full with colored backgrounds
// - Action buttons: Button with ghost variant and blue text
// - Border separators: border-b border-border/50 between items

// Icon styling:
// - Circular backgrounds: bg-blue-500, bg-green-500, bg-purple-500, etc.
// - White icons: text-white wrapper for proper contrast
// - Consistent sizing: h-5 w-5 for all icons

// Sign out button styling:
// - Full width: w-full h-11
// - Red background: bg-red-600 hover:bg-red-700
// - White text: text-white with red border
// - Logout icon: LogOut from Lucide React

// Interactive features:
// - Clickable action buttons with onClick callbacks
// - Sign out button with onSignOut callback
// - Theme-aware styling with proper dark/light mode support

// Data structure:
// - title: string for card title
// - supportItems: array of SupportItem objects
// - signOutText: string for button text
// - onSignOut: callback function for sign out action
// - SupportItem: title, action, icon, iconColor, onClick`
  }
]

export default function UIKitPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({})
  const [messageTabState, setMessageTabState] = useState<'customers' | 'team'>('customers')
  const [messageSearchValue, setMessageSearchValue] = useState('')
  const [stackRankingTab, setStackRankingTab] = useState<'branch' | 'region' | 'company'>('branch')
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
  
  // Handle MessageTabs tab change without triggering scroll prevention
  const handleMessageTabChange = React.useCallback((tab: 'customers' | 'team') => {
    // Store scroll position before any state update
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop
    
    // Temporarily disable scroll behavior
    document.documentElement.style.scrollBehavior = 'auto'
    document.body.style.scrollBehavior = 'auto'
    
    // Update state
    setMessageTabState(tab)
    
    // Restore scroll position after React renders
    setTimeout(() => {
      window.scrollTo({ top: scrollPos, behavior: 'instant' })
      // Re-enable smooth scrolling after position is restored
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = ''
        document.body.style.scrollBehavior = ''
      }, 50)
    }, 0)
  }, [])

  // Handle StackRankingCard tab change
  const handleStackRankingTabChange = React.useCallback((tab: 'branch' | 'region' | 'company') => {
    setStackRankingTab(tab)
    console.log('Stack ranking tab changed to:', tab)
  }, [])

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
                          {component.name === 'MessageTabs' && (
                            <div 
                              onScroll={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                              }}
                              style={{ overflow: 'visible' }}
                            >
                              <MessageTabs
                                activeTab={messageTabState}
                                onTabChange={handleMessageTabChange}
                                searchValue={messageSearchValue}
                                onSearchChange={setMessageSearchValue}
                                teamNotificationCount={4}
                              />
                            </div>
                          )}
                          {component.name === 'MessageListItem' && (
                            <div className="space-y-0 border border-input rounded-lg overflow-hidden">
                              <MessageListItem
                                customerName="Jennifer Wilson"
                                message="Perfect! You can leave the materials on the patio. Thanks!"
                                timestamp="2 min ago"
                                isUnread={true}
                                onClick={() => console.log('Clicked unread message')}
                              />
                              <MessageListItem
                                customerName="Michael Chen"
                                message="Thanks for servicing the pool today. Everything looks great!"
                                timestamp="1 hour ago"
                                isUnread={false}
                                onClick={() => console.log('Clicked read message')}
                              />
                              <MessageListItem
                                customerName="Sarah Johnson"
                                message="The gate code is 1234 if you need it."
                                timestamp="3 hours ago"
                                isUnread={false}
                                onClick={() => console.log('Clicked message')}
                              />
                            </div>
                          )}
                          {component.name === 'PerformanceSummaryCard' && (
                            <PerformanceSummaryCard 
                              completionRate={98.5}
                              onTimeArrival={92.0}
                              customerRating={4.9}
                              routeEfficiency={94}
                            />
                          )}
                          {component.name === 'StackRankingCard' && (
                            <StackRankingCard 
                              activeTab={stackRankingTab}
                              onTabChange={handleStackRankingTabChange}
                            />
                          )}
                          {component.name === 'MetricsDashboard' && (
                            <MetricsDashboard />
                          )}
                          {component.name === 'ServiceDurationCard' && (
                            <ServiceDurationCard />
                          )}
                          {component.name === 'EarningsCard' && (
                            <EarningsCard />
                          )}
                          {component.name === 'CustomerRatingCard' && (
                            <CustomerRatingCard />
                          )}
                          {component.name === 'TechnicianProfileSettingsCard' && (
                            <TechnicianProfileSettingsCard onEdit={() => console.log('Edit clicked')} />
                          )}
                          {component.name === 'RewardsCard' && (
                            <RewardsCard />
                          )}
                          {component.name === 'AppSettingsCard' && (
                            <AppSettingsCard />
                          )}
                          {component.name === 'SupportSignOutCard' && (
                            <SupportSignOutCard />
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