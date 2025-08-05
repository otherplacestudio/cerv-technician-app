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
import { CommercialOverviewStatsCard } from '@/components/cerv/CommercialOverviewStatsCard'
import { CommercialPropertyListCard } from '@/components/cerv/CommercialPropertyListCard'
import { CommercialScoreBreakdownCard } from '@/components/cerv/CommercialScoreBreakdownCard'
import { CommercialUpcomingVisitsCard } from '@/components/cerv/CommercialUpcomingVisitsCard'
import { CommercialQuickActionsCard } from '@/components/cerv/CommercialQuickActionsCard'
import { CommercialRecentActivityCard } from '@/components/cerv/CommercialRecentActivityCard'
import { CommercialActionGridCard } from '@/components/cerv/CommercialActionGridCard'
import { CommercialIssuesProgressCard } from '@/components/cerv/CommercialIssuesProgressCard'
import { CommercialRecentDocumentsCard } from '@/components/cerv/CommercialRecentDocumentsCard'
import { CommercialSettingsMenuCard } from '@/components/cerv/CommercialSettingsMenuCard'
import { CommercialBookingStatsCard } from '@/components/cerv/CommercialBookingStatsCard'
import { CommercialSearchFilterCard } from '@/components/cerv/CommercialSearchFilterCard'
import { BookingDetailQuickViewCard } from '@/components/cerv/BookingDetailQuickViewCard'
import { CommercialCalendarCard } from '@/components/cerv/CommercialCalendarCard'
import { CommercialDateHeaderCard } from '@/components/cerv/CommercialDateHeaderCard'
import { SwitcherToggle } from '@/components/cerv/SwitcherToggle'
import { VisitDetailsHeaderCard } from '@/components/cerv/VisitDetailsHeaderCard'
import { VisitInformationCard } from '@/components/cerv/VisitInformationCard'
import { DescriptionContentCard } from '@/components/cerv/DescriptionContentCard'
import { AddNewServiceStepper } from '@/components/cerv/AddNewServiceStepper'
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

// Component sections
type SectionType = 'universal' | 'technician' | 'commercial'

// Universal components
const universalComponents = [
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
    name: 'SwitcherToggle',
    description: 'Toggle/tab switcher with optional notification badges',
    githubPath: '/src/components/cerv/SwitcherToggle.tsx',
    code: `import { SwitcherToggle } from '@/components/cerv/SwitcherToggle'

// Default usage
<SwitcherToggle />

// Controlled component
<SwitcherToggle 
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
/>

// Without badges
<SwitcherToggle 
  options={[
    { id: 'customers', label: 'Customers' },
    { id: 'team', label: 'Team' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>

// With multiple badges
<SwitcherToggle 
  options={[
    { id: 'inbox', label: 'Inbox', badge: 12 },
    { id: 'sent', label: 'Sent', badge: 3 }
  ]}
  value="inbox"
/>

// Three options
<SwitcherToggle 
  options={[
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics', badge: 'New' },
    { id: 'reports', label: 'Reports' }
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>

// View mode switcher
<SwitcherToggle 
  options={[
    { id: 'list', label: 'List' },
    { id: 'grid', label: 'Grid' },
    { id: 'calendar', label: 'Calendar' }
  ]}
  value="list"
/>

// Styling & Customization
// Container:
// - bg-muted/30 background
// - rounded-lg with p-1 padding
// - Flex layout for equal width options

// Options:
// - flex-1 for equal width distribution
// - Smooth transitions (duration-200)
// - Focus ring for accessibility

// Active state:
// - bg-background with shadow-sm
// - text-foreground for contrast
// - Instant visual feedback

// Inactive state:
// - text-muted-foreground
// - Hover effect to text-foreground
// - No background

// Badges:
// - Absolute positioned
// - bg-primary with primary-foreground text
// - Minimum width for single digits
// - Supports numbers and strings

// Props:
// - options: Array of { id, label, badge? }
// - value: Currently selected option ID
// - onChange: Callback with selected ID
// - className: Additional CSS classes

// Use cases:
// - Tab navigation
// - View mode switching
// - Message/notification filters
// - Language selectors
// - Time period selection`
  }
]

// Technician UI Kit components
const technicianComponents = [
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

// Commercial UI Kit components
const commercialComponents = [
  {
    name: 'CommercialOverviewStatsCard',
    description: 'Overview statistics card with greeting and key metrics',
    githubPath: '/src/components/cerv/CommercialOverviewStatsCard.tsx',
    code: `import { CommercialOverviewStatsCard } from '@/components/cerv/CommercialOverviewStatsCard'

// Default usage
<CommercialOverviewStatsCard />

// Custom user and stats
<CommercialOverviewStatsCard 
  userName="Sarah"
  propertiesCount={15}
  issuesCount={3}
  visitsCount={28}
/>

// Custom greeting
<CommercialOverviewStatsCard 
  userName="Jennifer"
  greeting="Welcome back"
  propertiesCount={8}
  issuesCount={2}
  visitsCount={45}
/>

// Styling & Customization
// Card structure:
// - Greeting: text-2xl font-semibold with dynamic time-based greeting
// - Stats card: flex divide-x divide-border for three columns
// - Icons: Building2, AlertCircle, Calendar from lucide-react
// - Values: text-3xl font-bold for emphasis
// - Labels: text-sm text-muted-foreground

// Icon colors:
// - All icons: text-muted-foreground for subtle appearance
// - Consistent h-6 w-6 sizing

// Layout:
// - Equal width columns with flex-1
// - px-6 py-6 padding for each stat
// - Vertical dividers between stats
// - Centered content with flex-col items-center

// Dynamic greeting:
// - Morning: "Good morning" (before 12pm)
// - Afternoon: "Good afternoon" (12pm-5pm)
// - Evening: "Good evening" (after 5pm)
// - Custom greeting prop overrides time-based logic`
  },
  {
    name: 'CommercialPropertyListCard',
    description: 'Property listings with images, scores, and location info',
    githubPath: '/src/components/cerv/CommercialPropertyListCard.tsx',
    code: `import { CommercialPropertyListCard } from '@/components/cerv/CommercialPropertyListCard'

// Default usage - Horizontal scrolling
<CommercialPropertyListCard 
  onPropertyClick={(property) => console.log('Clicked:', property)}
/>

// With navigation buttons
<CommercialPropertyListCard 
  showNavButtons={true}
  onPropertyClick={(property) => console.log('Clicked:', property)}
/>

// Custom properties
<CommercialPropertyListCard 
  properties={[
    {
      id: '1',
      name: 'Downtown Business Tower',
      location: 'Downtown Austin, TX',
      score: 95,
      imageUrl: 'https://example.com/image1.jpg',
      scoreColor: 'green'
    },
    {
      id: '2',
      name: 'Riverside Office Park',
      location: 'Riverside, TX',
      score: 78,
      imageUrl: 'https://example.com/image2.jpg',
      scoreColor: 'yellow'
    },
    {
      id: '3',
      name: 'Tech Campus',
      location: 'North Austin, TX',
      score: 88,
      imageUrl: 'https://example.com/image3.jpg'
    }
  ]}
  showNavButtons={true}
  onPropertyClick={(property) => console.log('Selected:', property)}
/>

// Styling & Customization
// Layout:
// - Horizontal scrolling with flex layout
// - Card width: w-[280px] sm:w-[320px] (fixed width)
// - Gap between cards: gap-4
// - Snap scrolling: snap-x snap-mandatory
// - Hidden scrollbar for clean appearance

// Card dimensions:
// - Mobile: 280px wide, allows ~1.5 cards visible
// - Desktop: 320px wide for better readability
// - Image height: h-40 sm:h-48
// - Responsive padding: p-3 sm:p-4

// Score badge colors:
// - 90+: bg-green-500 (Excellent)
// - 75-89: bg-yellow-500 (Good)
// - 60-74: bg-orange-500 (Fair)
// - <60: bg-red-500 (Poor)
// - Custom colors via scoreColor prop

// Navigation (optional):
// - showNavButtons prop enables left/right arrows
// - Smooth scroll animation
// - Auto-hidden if less than 3 properties

// Interactive features:
// - Touch-friendly horizontal scrolling
// - Click handler for entire card
// - Hover shadow effect
// - Smooth scroll with navigation buttons
// - Snap points for better UX

// Mobile optimized:
// - WebKit overflow scrolling for smooth iOS experience
// - Touch gestures supported
// - Scrollbar hidden but functionality preserved`
  },
  {
    name: 'CommercialScoreBreakdownCard',
    description: 'Expandable score card with service breakdown and progress bars',
    githubPath: '/src/components/cerv/CommercialScoreBreakdownCard.tsx',
    code: `import { CommercialScoreBreakdownCard } from '@/components/cerv/CommercialScoreBreakdownCard'

// Default usage - Collapsed
<CommercialScoreBreakdownCard />

// Default expanded
<CommercialScoreBreakdownCard 
  defaultExpanded={true}
/>

// Custom score with positive trend
<CommercialScoreBreakdownCard 
  overallScore={95}
  trend={8}
  defaultExpanded={true}
  services={[
    { name: 'Exterior Maintenance', score: 98, color: 'bg-blue-500' },
    { name: 'Landscaping', score: 95, color: 'bg-green-500' },
    { name: 'Pool Maintenance', score: 96, color: 'bg-red-500' },
    { name: 'Pest Control', score: 99, color: 'bg-purple-500' },
    { name: 'Janitorial Services', score: 92, color: 'bg-blue-400' },
    { name: 'Tree Services', score: 94, color: 'bg-teal-500' },
    { name: 'Waste Management', score: 91, color: 'bg-orange-500' }
  ]}
/>

// Negative trend
<CommercialScoreBreakdownCard 
  overallScore={72}
  trend={-5}
  services={[
    { name: 'Service A', score: 65, color: 'bg-blue-500' },
    { name: 'Service B', score: 70, color: 'bg-green-500' },
    { name: 'Service C', score: 75, color: 'bg-red-500' }
  ]}
/>

// Styling & Customization
// Header:
// - Clickable area with hover:bg-muted/50
// - Overall score with text-xl font-semibold
// - Trend indicator with color coding
// - Chevron icon for expand/collapse state

// Trend indicators:
// - Positive: text-green-500 with TrendingUp icon
// - Negative: text-red-500 with TrendingDown icon
// - Neutral: text-muted-foreground with Minus icon
// - Format: (+3) or (-5) with parentheses

// Service breakdown:
// - Each service has name and score
// - Progress bar with custom color
// - Score displayed on right (text-lg font-semibold)
// - 4px spacing between services

// Progress bars:
// - Base: bg-muted h-2
// - Filled portion: custom color or bg-primary
// - Smooth width transition
// - Percentage based on score (0-100)

// Interactive features:
// - Click header to toggle expand/collapse
// - Smooth transition animations
// - defaultExpanded prop for initial state
// - Border separator between header and content

// Data structure:
// - overallScore: number (0-100)
// - trend: number (positive/negative/zero)
// - services: array of ServiceScore objects
// - ServiceScore: name, score, optional color`
  },
  {
    name: 'CommercialUpcomingVisitsCard',
    description: 'Upcoming visits list with service details and technician info',
    githubPath: '/src/components/cerv/CommercialUpcomingVisitsCard.tsx',
    code: `import { CommercialUpcomingVisitsCard } from '@/components/cerv/CommercialUpcomingVisitsCard'

// Default usage
<CommercialUpcomingVisitsCard 
  onViewAll={() => console.log('View all clicked')}
  onVisitClick={(visit) => console.log('Visit clicked:', visit)}
/>

// Custom visits
<CommercialUpcomingVisitsCard 
  visits={[
    {
      id: '1',
      serviceType: 'HVAC Maintenance',
      status: 'Scheduled',
      date: 'Today',
      timeSlot: '8:00 - 10:00 AM',
      technicianName: 'John Smith',
      backgroundColor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: '2',
      serviceType: 'Landscaping',
      status: 'In Progress',
      date: 'Tomorrow',
      timeSlot: '11:00 AM - 1:00 PM',
      technicianName: 'Maria Garcia',
      backgroundColor: 'bg-emerald-600',
      textColor: 'text-white'
    }
  ]}
  onViewAll={() => console.log('View all')}
  onVisitClick={(visit) => console.log('Clicked:', visit)}
/>

// No visits
<CommercialUpcomingVisitsCard 
  visits={[]}
  onViewAll={() => console.log('View all')}
/>

// Styling & Customization
// Header:
// - Title with visit count in parentheses
// - View All button with Calendar icon
// - Flex layout with justify-between

// Visit cards:
// - Full-width colored cards (customizable via backgroundColor)
// - No border (border-0) for cleaner look
// - Hover shadow effect (hover:shadow-lg)
// - Cursor pointer for clickable cards

// Card content:
// - Service type: text-xl font-semibold
// - Status badge: semi-transparent white (bg-white/20)
// - Date and time: separated by bullet (•)
// - Technician name below time
// - ChevronRight icon on the right

// Status badges:
// - Scheduled: secondary variant
// - In Progress: default variant
// - Completed: success variant
// - Cancelled: destructive variant

// Colors:
// - Default backgrounds via backgroundColor prop
// - Text color customizable via textColor prop
// - Semi-transparent elements for depth

// Interactive features:
// - onViewAll callback for header button
// - onVisitClick callback for each visit card
// - Hover effects on cards and buttons

// Empty state:
// - Displays message when no visits
// - Centered text in a card

// Data structure:
// - id: unique identifier
// - serviceType: string for service name
// - status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled'
// - date: string for date display
// - timeSlot: string for time range
// - technicianName: string for technician
// - backgroundColor: optional custom background
// - textColor: optional custom text color`
  },
  {
    name: 'CommercialQuickActionsCard',
    description: 'Quick action buttons grid for common tasks and requests',
    githubPath: '/src/components/cerv/CommercialQuickActionsCard.tsx',
    code: `import { CommercialQuickActionsCard } from '@/components/cerv/CommercialQuickActionsCard'
import { Plus, FileText, AlertTriangle } from 'lucide-react'

// Default usage
<CommercialQuickActionsCard />

// Custom actions
<CommercialQuickActionsCard 
  title="Quick Actions"
  subtitle="Common tasks and requests"
  actions={[
    {
      id: '1',
      icon: <Plus className="h-8 w-8" />,
      label: 'Add New Service',
      onClick: () => console.log('Add service')
    },
    {
      id: '2',
      icon: <FileText className="h-8 w-8" />,
      label: 'Monthly Billing',
      onClick: () => console.log('View billing')
    },
    {
      id: '3',
      icon: <AlertTriangle className="h-8 w-8" />,
      label: 'Report Issues',
      onClick: () => console.log('Report issue')
    }
  ]}
/>

// Different column layouts
<CommercialQuickActionsCard 
  columns={4} // 4 columns
  actions={[/* your actions */]}
/>

<CommercialQuickActionsCard 
  columns={2} // 2 columns
  actions={[/* your actions */]}
/>

// Styling & Customization
// Header:
// - Title: text-2xl font-semibold
// - Subtitle: text-base text-muted-foreground
// - Margin bottom for spacing

// Action cards:
// - Card with border-input bg-card
// - Hover effect: hover:bg-muted/50
// - Cursor pointer for clickable
// - Group class for hover states

// Icon container:
// - 20x20 size (w-20 h-20)
// - Rounded corners: rounded-2xl
// - Background: bg-muted
// - Hover background: group-hover:bg-muted-foreground/20

// Icons:
// - Size: h-8 w-8
// - Color: text-muted-foreground
// - Hover color: group-hover:text-foreground
// - Smooth transitions

// Label:
// - Font: text-sm font-medium
// - Centered text alignment
// - Below icon with spacing

// Grid layout:
// - Responsive columns (1-6 supported)
// - Gap between cards: gap-4
// - Adaptive based on columns prop

// Interactive features:
// - onClick handler for each action
// - Hover effects on cards and icons
// - Group hover for coordinated effects

// Data structure:
// - id: unique identifier
// - icon: React node (Lucide icon)
// - label: string for action name
// - onClick: optional callback function`
  },
  {
    name: 'CommercialRecentActivityCard',
    description: 'Recent activity feed with service completions and technician info',
    githubPath: '/src/components/cerv/CommercialRecentActivityCard.tsx',
    code: `import { CommercialRecentActivityCard } from '@/components/cerv/CommercialRecentActivityCard'
import { Bug, Scissors, Wrench } from 'lucide-react'

// Default usage
<CommercialRecentActivityCard 
  onActivityClick={(activity) => console.log('Activity clicked:', activity)}
/>

// Custom activities
<CommercialRecentActivityCard 
  title="Recent Activity"
  activities={[
    {
      id: '1',
      icon: <Bug className="h-6 w-6 text-white" />,
      title: 'Pest control completed',
      timeAgo: '2 hours ago',
      technicianName: 'Mike Johnson',
      iconBgColor: 'bg-purple-600'
    },
    {
      id: '2',
      icon: <Scissors className="h-6 w-6 text-white" />,
      title: 'Tree pruning completed',
      timeAgo: '4 hours ago',
      technicianName: 'Sarah Chen',
      iconBgColor: 'bg-teal-600'
    }
  ]}
  onActivityClick={(activity) => console.log('Clicked:', activity)}
/>

// No activities
<CommercialRecentActivityCard 
  activities={[]}
  onActivityClick={(activity) => console.log('Activity:', activity)}
/>

// Styling & Customization
// Header:
// - Title: text-2xl font-semibold
// - Margin bottom for spacing (mb-6)

// Activity cards:
// - Card with border-input bg-card
// - Hover effect: hover:bg-muted/50
// - Cursor pointer for clickable
// - Padding: p-6

// Icon container:
// - Size: w-14 h-14 (56x56px)
// - Rounded corners: rounded-2xl
// - Custom background colors
// - Centered icon display

// Icons:
// - Size: h-6 w-6
// - White color for contrast
// - Any Lucide icon supported

// Activity info:
// - Title: text-lg font-medium
// - Time format: "X hours ago • Technician Name"
// - Bullet separator between time and name
// - Muted color for timestamp

// Layout:
// - Flex layout with items-center
// - Gap between icon and text (gap-4)
// - ChevronRight icon on the right
// - justify-between for spacing

// Interactive features:
// - onActivityClick callback
// - Individual onClick per activity
// - Hover effects on cards
// - Smooth transitions

// Empty state:
// - Displays message when no activities
// - Centered text in a card

// Data structure:
// - id: unique identifier
// - icon: React node (Lucide icon)
// - title: string for activity name
// - timeAgo: string for relative time
// - technicianName: string for technician
// - iconBgColor: optional background color
// - onClick: optional callback function`
  },
  {
    name: 'CommercialActionGridCard',
    description: 'Action grid with icons, titles and subtitles in card layout',
    githubPath: '/src/components/cerv/CommercialActionGridCard.tsx',
    code: `import { CommercialActionGridCard } from '@/components/cerv/CommercialActionGridCard'
import { Wrench, FileText, AlertTriangle, History } from 'lucide-react'

// Default usage (2x2 grid)
<CommercialActionGridCard />

// Custom actions
<CommercialActionGridCard 
  actions={[
    {
      id: '1',
      icon: <Wrench className="h-7 w-7" />,
      title: 'Add New Service',
      subtitle: 'Start work order',
      onClick: () => console.log('Add service')
    },
    {
      id: '2',
      icon: <FileText className="h-7 w-7" />,
      title: 'Analytics',
      subtitle: 'View insights',
      onClick: () => console.log('Analytics')
    },
    {
      id: '3',
      icon: <AlertTriangle className="h-7 w-7" />,
      title: 'Report Issue',
      subtitle: 'Flag problems',
      onClick: () => console.log('Report issue')
    },
    {
      id: '4',
      icon: <History className="h-7 w-7" />,
      title: 'Booking History',
      subtitle: 'View past services',
      onClick: () => console.log('History')
    }
  ]}
/>

// Different column layouts
<CommercialActionGridCard 
  columns={3} // 3 column grid
  actions={[/* your actions */]}
/>

<CommercialActionGridCard 
  columns={1} // Single column
  actions={[/* your actions */]}
/>

// Styling & Customization
// Card container:
// - Card with border-input bg-card
// - Padding: p-6 for CardContent
// - Full card wrapper

// Grid layout:
// - Configurable columns (1-4)
// - Gap between items: gap-8
// - Responsive grid

// Action buttons:
// - Flex column with items-center
// - Text center alignment
// - Space between elements: space-y-3
// - Hover scale effect: hover:scale-105
// - Smooth transitions

// Icon circles:
// - Size: w-16 h-16 (64x64px)
// - Rounded full circle
// - Background: bg-muted
// - Hover: group-hover:bg-muted-foreground/20

// Icons:
// - Size: h-7 w-7
// - Color: text-muted-foreground
// - Hover: group-hover:text-foreground
// - Smooth color transitions

// Title:
// - Font: text-lg font-semibold
// - Color: text-foreground
// - Below icon with spacing

// Subtitle:
// - Font: text-sm
// - Color: text-muted-foreground
// - Below title

// Interactive features:
// - onClick handler for each action
// - Group hover effects
// - Scale animation on hover
// - Cursor pointer

// Data structure:
// - id: unique identifier
// - icon: React node (Lucide icon)
// - title: string for action name
// - subtitle: string for description
// - onClick: optional callback function`
  },
  {
    name: 'CommercialIssuesProgressCard',
    description: 'Progress tracking card for reported issues with technician assignments',
    githubPath: '/src/components/cerv/CommercialIssuesProgressCard.tsx',
    code: `import { CommercialIssuesProgressCard } from '@/components/cerv/CommercialIssuesProgressCard'

// Default usage
<CommercialIssuesProgressCard 
  onIssueClick={(issue) => console.log('Issue clicked:', issue)}
/>

// Custom issues
<CommercialIssuesProgressCard 
  title="Reported Issues - Progress"
  issues={[
    {
      id: '1',
      title: 'Pool Filter Replacement',
      technicianName: 'David Martinez',
      timeRemaining: '2 hours',
      progressPercentage: 75
    },
    {
      id: '2',
      title: 'Exterior Maintenance',
      technicianName: 'Mike Johnson',
      timeRemaining: '4 hours',
      progressPercentage: 45
    }
  ]}
  onIssueClick={(issue) => console.log('Clicked:', issue)}
/>

// No issues
<CommercialIssuesProgressCard 
  issues={[]}
  onIssueClick={(issue) => console.log('Issue:', issue)}
/>

// Styling & Customization
// Card container:
// - Card with border-input bg-card
// - Padding: p-6
// - Full card wrapper

// Header:
// - Title: text-xl font-semibold
// - Bottom border separator
// - Margin bottom: mb-6 pb-4

// Issue items:
// - Space between items: space-y-6
// - Bottom border between items
// - Padding bottom: pb-6
// - Clickable with cursor-pointer

// Issue title and time:
// - Flex layout with justify-between
// - Title: text-lg font-medium
// - Clock icon with time remaining
// - Time text: text-sm text-muted-foreground

// Progress bar:
// - Base: bg-muted h-2
// - Filled: bg-primary
// - Smooth transitions
// - Dynamic width based on percentage

// Technician info:
// - Text: "Technician: Name"
// - Color: text-muted-foreground
// - Size: text-sm

// Percentage display:
// - Position: right aligned
// - Font: text-lg font-semibold
// - Color: text-foreground

// Layout:
// - Title and time on top row
// - Progress bar in middle
// - Technician and percentage on bottom

// Interactive features:
// - onIssueClick callback
// - Hover effects available
// - Click on entire issue area

// Empty state:
// - Shows message when no issues
// - Centered text

// Data structure:
// - id: unique identifier
// - title: string for issue name
// - technicianName: string for technician
// - timeRemaining: string for time estimate
// - progressPercentage: number (0-100)`
  },
  {
    name: 'CommercialRecentDocumentsCard',
    description: 'Recent documents grid with document preview cards and add button',
    githubPath: '/src/components/cerv/CommercialRecentDocumentsCard.tsx',
    code: `import { CommercialRecentDocumentsCard } from '@/components/cerv/CommercialRecentDocumentsCard'

// Default usage
<CommercialRecentDocumentsCard 
  onViewAll={() => console.log('View all')}
  onAddDocument={() => console.log('Add document')}
  onDocumentClick={(doc) => console.log('Document clicked:', doc)}
/>

// Custom documents
<CommercialRecentDocumentsCard 
  title="Recent Documents"
  documents={[
    {
      id: '1',
      name: 'Landscaping Agreement',
      type: 'PDF',
      timeAgo: '2 days ago'
    },
    {
      id: '2',
      name: 'Pool Service Quote',
      type: 'DOC',
      timeAgo: '1 week ago'
    }
  ]}
  onViewAll={() => console.log('View all')}
  onAddDocument={() => console.log('Add')}
  onDocumentClick={(doc) => console.log('Clicked:', doc)}
/>

// Empty state
<CommercialRecentDocumentsCard 
  documents={[]}
  onViewAll={() => console.log('View all')}
  onAddDocument={() => console.log('Add document')}
/>

// Styling & Customization
// Card container:
// - Card with border-input bg-card
// - Padding: p-6
// - Full card wrapper

// Header:
// - Title: text-xl font-semibold
// - View All button with Eye icon
// - Flex layout with justify-between

// Document grid:
// - 3 column grid layout
// - Gap between items: gap-4
// - Responsive grid

// Document cards:
// - Aspect ratio: aspect-[3/4] (portrait)
// - Border: border-2 border-muted
// - Hover: hover:border-muted-foreground/50
// - Rounded corners: rounded-lg
// - Centered content layout

// Document icon:
// - FileText icon from lucide
// - Size: h-12 w-12
// - Color: text-muted-foreground

// Document info:
// - Name: text-sm font-medium, line-clamp-2
// - Time: text-xs text-muted-foreground
// - Type badge at bottom

// Type badges:
// - PDF: bg-red-600 text-white
// - DOC: bg-blue-600 text-white
// - XLS: bg-green-600 text-white
// - IMG: bg-purple-600 text-white
// - TXT: bg-gray-600 text-white

// Add document card:
// - Dashed border: border-dashed
// - Plus icon: h-12 w-12
// - "View More Documents" text
// - Same aspect ratio as documents

// Interactive features:
// - onViewAll callback for header button
// - onAddDocument for add card
// - onDocumentClick for each document
// - Hover effects on all cards

// Data structure:
// - id: unique identifier
// - name: string for document name
// - type: 'PDF' | 'DOC' | 'XLS' | 'IMG' | 'TXT'
// - timeAgo: string for relative time
// - onClick: optional callback`
  },
  {
    name: 'CommercialSettingsMenuCard',
    description: 'Settings menu with icon items and navigation chevrons',
    githubPath: '/src/components/cerv/CommercialSettingsMenuCard.tsx',
    code: `import { CommercialSettingsMenuCard } from '@/components/cerv/CommercialSettingsMenuCard'
import { Edit, Bell, Shield, HelpCircle } from 'lucide-react'

// Default usage
<CommercialSettingsMenuCard 
  onItemClick={(item) => console.log('Item clicked:', item)}
/>

// Custom settings items
<CommercialSettingsMenuCard 
  items={[
    {
      id: '1',
      icon: <Edit className="h-6 w-6" />,
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      onClick: () => console.log('Edit Profile')
    },
    {
      id: '2',
      icon: <Bell className="h-6 w-6" />,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      onClick: () => console.log('Notifications')
    },
    {
      id: '3',
      icon: <Shield className="h-6 w-6" />,
      title: 'Security & Privacy',
      subtitle: 'Password and privacy settings',
      onClick: () => console.log('Security')
    },
    {
      id: '4',
      icon: <HelpCircle className="h-6 w-6" />,
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      onClick: () => console.log('Help')
    }
  ]}
  onItemClick={(item) => console.log('Clicked:', item)}
/>

// Styling & Customization
// Card container:
// - Card with border-input bg-card
// - No padding on CardContent (p-0)
// - Overflow hidden

// Settings items:
// - Full width buttons
// - Padding: p-6
// - Hover effect: hover:bg-muted/50
// - Flex layout with justify-between
// - Text aligned left

// Dividers:
// - divide-y divide-border
// - Separates each settings item

// Icon circles:
// - Size: w-12 h-12
// - Rounded full circle
// - Background: bg-muted
// - Centered icon display

// Icons:
// - Size: h-6 w-6
// - Color: text-muted-foreground
// - Any Lucide icon supported

// Text content:
// - Title: text-lg font-medium
// - Subtitle: text-sm text-muted-foreground
// - Space between: space-y-1
// - Gap from icon: gap-4

// Chevron icon:
// - ChevronRight icon
// - Size: h-5 w-5
// - Color: text-muted-foreground
// - Right aligned

// Interactive features:
// - onItemClick callback
// - Individual onClick per item
// - Hover effects on buttons
// - Full row clickable

// Data structure:
// - id: unique identifier
// - icon: React node (Lucide icon)
// - title: string for item name
// - subtitle: string for description
// - onClick: optional callback`
  },
  {
    name: 'CommercialBookingStatsCard',
    description: 'Booking history statistics with back navigation',
    githubPath: '/src/components/cerv/CommercialBookingStatsCard.tsx',
    code: `import { CommercialBookingStatsCard } from '@/components/cerv/CommercialBookingStatsCard'

// Default usage
<CommercialBookingStatsCard 
  onBack={() => console.log('Back clicked')}
/>

// Custom stats
<CommercialBookingStatsCard 
  title="Booking History"
  subtitle="View all your past service bookings and issues"
  stats={[
    { 
      label: 'Upcoming', 
      value: 1,
      onClick: () => console.log('Upcoming clicked')
    },
    { 
      label: 'In Progress', 
      value: 0,
      onClick: () => console.log('In Progress clicked')
    },
    { 
      label: 'Completed', 
      value: 9,
      onClick: () => console.log('Completed clicked')
    },
    { 
      label: 'Cancelled', 
      value: 1,
      onClick: () => console.log('Cancelled clicked')
    }
  ]}
  onBack={() => console.log('Navigate back')}
/>

// Without back button
<CommercialBookingStatsCard 
  title="Service Stats"
  subtitle="Overview of all services"
  stats={[
    { label: 'Active', value: 5 },
    { label: 'Pending', value: 3 },
    { label: 'Complete', value: 27 }
  ]}
/>

// Styling & Customization
// Header:
// - Back button: ArrowLeft icon, optional
// - Title: text-3xl font-bold
// - Subtitle: text-lg text-muted-foreground
// - Spacing: space-y-4

// Back button:
// - Ghost variant button
// - Size: icon (square button)
// - ArrowLeft icon: h-6 w-6
// - Optional - controlled by onBack prop

// Stats card:
// - Card with border-input bg-card
// - Padding: p-6
// - Grid layout: grid-cols-4 (or dynamic)

// Stat items:
// - Divided by vertical lines: divide-x divide-border
// - Padding: px-6 py-4
// - Hover effect: hover:bg-muted/50
// - Clickable with cursor-pointer

// Stat values:
// - Number: text-4xl font-bold
// - Label: text-sm text-muted-foreground
// - Centered alignment
// - Space between: space-y-2

// Layout:
// - Main container: space-y-6
// - Header with optional back button
// - Subtitle with left margin when back button present
// - Stats in horizontal grid

// Interactive features:
// - onBack callback for navigation
// - onClick per stat (optional)
// - Hover effects on stats
// - Full stat area clickable

// Grid adaptation:
// - Automatically adjusts to number of stats
// - Works with 2-5 stats
// - Equal width distribution

// Data structure:
// - label: string for stat name
// - value: number to display
// - onClick: optional callback per stat`
  },
  {
    name: 'CommercialSearchFilterCard',
    description: 'Search bar with category and status filter buttons',
    githubPath: '/src/components/cerv/CommercialSearchFilterCard.tsx',
    code: `import { CommercialSearchFilterCard } from '@/components/cerv/CommercialSearchFilterCard'

// Default usage
<CommercialSearchFilterCard />

// Controlled component
<CommercialSearchFilterCard 
  selectedCategory={selectedCategory}
  selectedStatus={selectedStatus}
  onSearch={(query) => console.log('Search:', query)}
  onCategoryChange={(category) => setSelectedCategory(category)}
  onStatusChange={(status) => setSelectedStatus(status)}
/>

// Custom categories (Services)
<CommercialSearchFilterCard 
  categories={[
    { id: '1', label: 'All Services', value: 'all' },
    { id: '2', label: 'HVAC', value: 'hvac', color: 'text-blue-500' },
    { id: '3', label: 'Plumbing', value: 'plumbing', color: 'text-indigo-500' },
    { id: '4', label: 'Electrical', value: 'electrical', color: 'text-yellow-500' },
    { id: '5', label: 'Roofing', value: 'roofing', color: 'text-orange-500' }
  ]}
  onCategoryChange={(category) => console.log('Category:', category)}
/>

// Custom statuses
<CommercialSearchFilterCard 
  statuses={[
    { id: '1', label: 'All', value: 'all' },
    { id: '2', label: 'New', value: 'new' },
    { id: '3', label: 'Assigned', value: 'assigned' },
    { id: '4', label: 'Working', value: 'working' },
    { id: '5', label: 'Complete', value: 'complete' }
  ]}
  onStatusChange={(status) => console.log('Status:', status)}
/>

// Work orders theme
<CommercialSearchFilterCard 
  searchPlaceholder="Search work orders..."
  categories={[
    { id: '1', label: 'All Types', value: 'all' },
    { id: '2', label: 'Emergency', value: 'emergency', color: 'text-red-500' },
    { id: '3', label: 'Routine', value: 'routine', color: 'text-green-500' },
    { id: '4', label: 'Preventive', value: 'preventive', color: 'text-blue-500' }
  ]}
  statuses={[
    { id: '1', label: 'All Status', value: 'all' },
    { id: '2', label: 'Open', value: 'open' },
    { id: '3', label: 'In Progress', value: 'in_progress' },
    { id: '4', label: 'Closed', value: 'closed' }
  ]}
/>

// Styling & Customization
// Search bar:
// - Direct input with no card wrapper
// - Input with bg-background border-input
// - Search icon: text-muted-foreground
// - Theme-aware colors for light/dark mode

// Category buttons:
// - Horizontal scrolling: overflow-x-auto
// - Hidden scrollbar: scrollbar-hide
// - Selected: bg-muted text-foreground
// - Unselected: bg-transparent text-muted-foreground
// - Custom colors: Applied when selected (optional)

// Status buttons:
// - Same styling as category buttons
// - Independent selection state
// - Consistent hover effects

// Button states:
// - Default: outline variant, neutral colors
// - Selected: secondary variant, muted background
// - Hover: bg-muted/50 for unselected, bg-muted/80 for selected

// Layout:
// - Full width container
// - Sections with space-y-4
// - Horizontal scrolling for many filters
// - Responsive padding

// Scrolling:
// - Touch-friendly horizontal scroll
// - No visible scrollbar
// - Smooth scroll behavior
// - Works on mobile and desktop

// Props:
// - categories: Array of category filters
// - statuses: Array of status filters
// - onSearch: Search query callback
// - onCategoryChange: Category selection callback
// - onStatusChange: Status selection callback
// - selectedCategory: Controlled category value
// - selectedStatus: Controlled status value
// - searchPlaceholder: Custom placeholder text

// Use cases:
// - Booking search and filters
// - Work order management
// - Property filtering
// - Service request tracking
// - Any searchable list with filters`
  },
  {
    name: 'BookingDetailQuickViewCard',
    description: 'Booking detail card with service info, pricing, and technician details',
    githubPath: '/src/components/cerv/BookingDetailQuickViewCard.tsx',
    code: `import { BookingDetailQuickViewCard } from '@/components/cerv/BookingDetailQuickViewCard'

// Default usage
<BookingDetailQuickViewCard 
  onClick={() => console.log('Booking clicked')}
/>

// Custom booking details
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
  onClick={() => console.log('Navigate to booking')}
/>

// Different service types
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
  onClick={() => console.log('View details')}
/>

// Cancelled booking
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
  onClick={() => console.log('View cancellation')}
/>

// Styling & Customization
// Card structure:
// - Hover effect with shadow transition
// - Cursor pointer for clickability
// - Theme-aware colors (bg-card, border-input)

// Layout:
// - Four rows of information
// - Service type and price on top
// - Property name and date
// - Category and status badges
// - Technician info and time slot

// Price display:
// - Formatted as currency (USD)
// - Large font (text-2xl font-bold)
// - Right-aligned with chevron icon

// Badges:
// - Category: Custom color with white text
// - Status: Uses Badge variant prop
// - Consistent sizing and spacing

// Technician section:
// - Name with star rating
// - Yellow filled star icon
// - Rating displayed to 1 decimal

// Interactive:
// - Entire card is clickable
// - Hover shadow effect
// - onClick callback for navigation

// Typography:
// - Service: text-xl font-semibold
// - Property/Date: text-base text-muted-foreground
// - Price: text-2xl font-bold
// - Time/Tech: text-base

// Responsive:
// - Flexible layout adapts to content
// - Long names handled gracefully
// - Consistent spacing with p-6

// Props:
// - serviceType: Name of the service
// - price: Numeric price (formatted as currency)
// - propertyName: Location/property name
// - date: Service date
// - category: Category badge text
// - categoryColor: Tailwind color class for category
// - status: Status badge text
// - statusVariant: Badge variant
// - technicianName: Assigned technician
// - technicianRating: Numeric rating (0-5)
// - timeSlot: Service time window
// - onClick: Click handler callback`
  },
  {
    name: 'CommercialCalendarCard',
    description: 'Interactive calendar component with date selection',
    githubPath: '/src/components/cerv/CommercialCalendarCard.tsx',
    code: `import { CommercialCalendarCard } from '@/components/cerv/CommercialCalendarCard'

// Default usage
<CommercialCalendarCard />

// Controlled with callbacks
<CommercialCalendarCard 
  selectedDate={selectedDate}
  onDateSelect={(date) => console.log('Date selected:', date)}
  onMonthChange={(date) => console.log('Month changed:', date)}
/>

// Different starting month
<CommercialCalendarCard 
  selectedDate={new Date(2024, 0, 15)} // January 2024
  onDateSelect={(date) => setSelectedDate(date)}
/>

// December (year boundary)
<CommercialCalendarCard 
  selectedDate={new Date(2024, 11, 25)} // December 2024
  onDateSelect={(date) => handleDateSelect(date)}
  onMonthChange={(date) => handleMonthChange(date)}
/>

// Custom width container
<div className="max-w-sm">
  <CommercialCalendarCard 
    selectedDate={selectedDate}
    onDateSelect={(date) => setSelectedDate(date)}
  />
</div>

// Side by side calendars
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <CommercialCalendarCard 
    selectedDate={new Date()}
    onDateSelect={(date) => console.log('Calendar 1:', date)}
  />
  <CommercialCalendarCard 
    selectedDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)}
    onDateSelect={(date) => console.log('Calendar 2:', date)}
  />
</div>

// Styling & Customization
// Layout:
// - Card container with border-input bg-card
// - p-6 padding for content
// - Month navigation with chevron buttons
// - 7-column grid for calendar days

// Navigation:
// - Month/Year header centered
// - Ghost variant buttons for prev/next
// - Chevron icons (ChevronLeft, ChevronRight)
// - onMonthChange callback on navigation

// Calendar grid:
// - Day headers: Sun, Mon, Tue, etc.
// - 6 rows × 7 columns grid
// - Gap between cells for spacing
// - Previous/next month dates shown but disabled

// Date styling:
// - Current month: text-foreground
// - Other months: text-muted-foreground/50
// - Selected date: bg-primary text-primary-foreground
// - Today: bg-accent text-accent-foreground
// - Hover: bg-muted with transitions

// Interactive features:
// - Click to select date
// - Keyboard navigation support
// - Focus ring on tab navigation
// - Disabled state for other month dates

// Date calculations:
// - Handles month boundaries correctly
// - Leap year support
// - First day of week (Sunday)
// - 42 cells total (6 weeks)

// Responsive:
// - Works in containers of any width
// - Text scales appropriately
// - Touch-friendly tap targets

// Props:
// - selectedDate: Currently selected date
// - onDateSelect: Callback when date clicked
// - onMonthChange: Callback on month navigation
// - className: Additional CSS classes

// Use cases:
// - Booking date selection
// - Schedule viewing
// - Date range picking (with two calendars)
// - Event planning
// - Availability checking`
  },
  {
    name: 'CommercialDateHeaderCard',
    description: 'Date header with Add Service button and empty state',
    githubPath: '/src/components/cerv/CommercialDateHeaderCard.tsx',
    code: `import { CommercialDateHeaderCard } from '@/components/cerv/CommercialDateHeaderCard'

// Default usage
<CommercialDateHeaderCard />

// With Add Service button
<CommercialDateHeaderCard 
  onAddService={() => console.log('Add service')}
/>

// Custom date
<CommercialDateHeaderCard 
  date={new Date(2024, 11, 25)} // December 25, 2024
  onAddService={() => handleAddService()}
/>

// Custom empty state message
<CommercialDateHeaderCard 
  date={new Date(2024, 0, 1)}
  emptyStateMessage="No bookings available on New Year's Day"
  onAddService={() => console.log('Add service')}
/>

// Without empty state
<CommercialDateHeaderCard 
  showEmptyState={false}
  onAddService={() => console.log('Add service')}
/>

// Without Add button (view only)
<CommercialDateHeaderCard 
  date={selectedDate}
  emptyStateMessage="No services scheduled"
/>

// Different messages
<CommercialDateHeaderCard 
  emptyStateMessage="Loading services..."
  onAddService={() => console.log('Add service')}
/>

<CommercialDateHeaderCard 
  emptyStateMessage="All time slots are booked for this date"
  onAddService={() => console.log('Add service')}
/>

// Styling & Customization
// Layout:
// - Full width container with space-y-4
// - Flex header with date and button
// - Optional empty state card below

// Date header:
// - Format: "Monday, August 4"
// - text-2xl font-semibold
// - Uses Intl.DateTimeFormat for localization
// - Weekday, month, and day display

// Add Service button:
// - Primary color (bg-primary)
// - Plus icon with text
// - Optional - controlled by onAddService prop
// - Standard button hover states

// Empty state card:
// - Card with border-input bg-card
// - Centered content with p-6 padding
// - Calendar icon (16x16)
// - Customizable message text
// - py-12 for vertical spacing

// Props:
// - date: Date to display (defaults to today)
// - onAddService: Callback for Add Service button
// - emptyStateMessage: Custom empty state text
// - showEmptyState: Toggle empty state visibility
// - className: Additional CSS classes

// Use cases:
// - Daily schedule headers
// - Booking page headers
// - Service calendar views
// - Empty state displays
// - Date-based navigation`
  },
  {
    name: 'VisitDetailsHeaderCard',
    description: 'Visit details header with service info and status badge',
    githubPath: '/src/components/cerv/VisitDetailsHeaderCard.tsx',
    code: `import { VisitDetailsHeaderCard } from '@/components/cerv/VisitDetailsHeaderCard'

// Default usage
<VisitDetailsHeaderCard />

// With back button
<VisitDetailsHeaderCard 
  onBack={() => console.log('Navigate back')}
/>

// Different service types
<VisitDetailsHeaderCard 
  serviceType="Pool Maintenance"
  propertyName="Sunset Gardens Complex"
  status="In Progress"
  backgroundColor="bg-blue-600"
  onBack={() => handleBack()}
/>

<VisitDetailsHeaderCard 
  serviceType="Landscape Services"
  propertyName="Corporate Tower A"
  status="Completed"
  backgroundColor="bg-green-600"
  onBack={() => handleBack()}
/>

// Emergency service
<VisitDetailsHeaderCard 
  serviceType="Emergency Repair"
  propertyName="Downtown Plaza"
  status="Urgent"
  statusVariant="destructive"
  backgroundColor="bg-red-600"
  onBack={() => handleBack()}
/>

// Custom colors
<VisitDetailsHeaderCard 
  serviceType="Security Services"
  propertyName="Financial District"
  status="On Hold"
  backgroundColor="bg-orange-600"
  onBack={() => handleBack()}
/>

// Gradient background
<VisitDetailsHeaderCard 
  serviceType="Premium Service"
  propertyName="Luxury Estate"
  status="VIP"
  backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
  onBack={() => handleBack()}
/>

// Styling & Customization
// Layout:
// - Full width container with space-y-4
// - Header with back arrow and title
// - Colored card with service details

// Header:
// - Optional back arrow (ArrowLeft icon)
// - "Visit Details" title
// - White text on all backgrounds
// - Gap-3 spacing between elements

// Service card:
// - Customizable background color
// - No border (border-0)
// - Centered content layout
// - p-6 padding

// Typography:
// - Service type: text-3xl font-bold
// - Property name: text-xl text-white/90
// - All text in white for contrast

// Status badge:
// - Semi-transparent white background
// - White text with no border
// - Hover effect (bg-white/30)
// - Larger padding (px-6 py-1.5)
// - text-base font-medium

// Color options:
// - Default: Purple (bg-purple-600)
// - Blue for pool/water services
// - Green for landscape/eco
// - Red for emergency/urgent
// - Custom colors via backgroundColor prop
// - Gradient support

// Props:
// - serviceType: Main service name
// - propertyName: Location/property
// - status: Status text for badge
// - statusVariant: Badge variant (unused in design)
// - backgroundColor: Card background color
// - onBack: Callback for back navigation
// - className: Additional CSS classes

// Use cases:
// - Visit detail pages
// - Service overview headers
// - Booking confirmations
// - Status displays
// - Mobile navigation headers`
  },
  {
    name: 'VisitInformationCard',
    description: 'Visit details card with date, time, technician, and location info',
    githubPath: '/src/components/cerv/VisitInformationCard.tsx',
    code: `import { VisitInformationCard } from '@/components/cerv/VisitInformationCard'

// Default usage
<VisitInformationCard />

// Tomorrow's visit
<VisitInformationCard 
  date="Tomorrow"
  timeSlot="2:00 - 4:00 PM"
  duration="2 hours"
  technicianName="Sarah Chen"
  technicianRating={5.0}
  location="Sunset Gardens Complex"
/>

// Specific date
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

// Emergency visit
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

// Long duration
<VisitInformationCard 
  date="Wednesday, April 10"
  timeSlot="9:00 AM - 5:00 PM"
  duration="8 hours (full day)"
  technicianName="Installation Team"
  technicianRating={4.85}
  location="Tech Campus Building A"
/>

// Custom labels
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

// Styling & Customization
// Card:
// - Standard card with border-input bg-card
// - p-6 padding throughout
// - Clean, organized layout

// Header:
// - "Visit Information" title
// - text-xl font-semibold
// - mb-6 for spacing

// Content sections:
// - space-y-6 between items
// - Consistent icon + content pattern
// - Left-aligned icons (5x5)
// - Gap-4 between icon and content

// Icons:
// - Calendar for date
// - Clock for time
// - User for technician
// - MapPin for location
// - text-muted-foreground color
// - mt-0.5 for alignment

// Typography:
// - Primary info: text-base font-medium
// - Secondary info: text-sm text-muted-foreground
// - Clear hierarchy with labels

// Rating display:
// - Star icon (filled yellow)
// - Numeric rating with "rating" text
// - Supports decimal precision
// - Zero rating shows "0 rating"

// Props:
// - date: Primary date display
// - dateLabel: Secondary date label
// - timeSlot: Time range string
// - duration: Estimated duration
// - technicianName: Tech's name
// - technicianRating: Numeric rating
// - location: Location name
// - locationLabel: Location descriptor
// - className: Additional CSS classes

// Use cases:
// - Booking confirmations
// - Visit details pages
// - Service summaries
// - Technician assignments
// - Schedule displays`
  },
  {
    name: 'DescriptionContentCard',
    description: 'Simple card for displaying titles and text descriptions',
    githubPath: '/src/components/cerv/DescriptionContentCard.tsx',
    code: `import { DescriptionContentCard } from '@/components/cerv/DescriptionContentCard'

// Default usage
<DescriptionContentCard />

// Different services
<DescriptionContentCard 
  title="Pool Maintenance"
  description="Regular pool cleaning service including chemical balance testing, skimming debris, brushing walls, and equipment inspection"
/>

<DescriptionContentCard 
  title="Landscape Services"
  description="Professional landscaping including lawn mowing, hedge trimming, seasonal plantings, and irrigation system maintenance"
/>

// Long description
<DescriptionContentCard 
  title="Comprehensive Building Maintenance"
  description="Our comprehensive building maintenance service covers all aspects of property upkeep including regular inspections, preventive maintenance, emergency repairs, vendor management, and detailed reporting. We ensure your property remains in optimal condition while minimizing downtime and unexpected costs."
/>

// Custom titles
<DescriptionContentCard 
  title="About This Service"
  description="This service includes a comprehensive evaluation and treatment plan"
/>

<DescriptionContentCard 
  title="What's Included"
  description="Your service package includes all labor, materials, and follow-up visits"
/>

// Service benefits with formatting
<DescriptionContentCard 
  title="Service Benefits"
  description="✓ Eco-friendly products ✓ Licensed technicians ✓ Satisfaction guarantee ✓ Flexible scheduling ✓ Competitive pricing"
/>

// Instructions
<DescriptionContentCard 
  title="Preparation Required"
  description="Please clear all areas to be serviced. Remove any valuable or fragile items. Ensure all pets are in a safe location."
/>

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <DescriptionContentCard 
    title="Indoor Service"
    description="Complete interior treatment including all rooms"
  />
  <DescriptionContentCard 
    title="Outdoor Service"
    description="Perimeter treatment and lawn application"
  />
</div>

// Styling & Customization
// Card:
// - Standard card with border-input bg-card
// - Clean, minimal design
// - p-6 padding for content

// Typography:
// - Title: text-xl font-semibold
// - Description: text-base text-muted-foreground
// - mb-4 spacing between title and content
// - leading-relaxed for readability

// Layout:
// - Simple vertical structure
// - Supports any text length
// - Works in grid layouts
// - Responsive width

// Props:
// - title: Header text (default: "Service Description")
// - description: Main content text
// - className: Additional CSS classes

// Use cases:
// - Service descriptions
// - Instructions and notes
// - Terms and conditions
// - Product information
// - Any titled text content`
  },
  {
    name: 'AddNewServiceStepper',
    description: 'Multi-step form for adding new service requests',
    githubPath: '/src/components/cerv/AddNewServiceStepper.tsx',
    code: `import { AddNewServiceStepper } from '@/components/cerv/AddNewServiceStepper'

// Default usage
<AddNewServiceStepper 
  onSubmit={(data) => console.log('Service submitted:', data)}
/>

// Custom properties
<AddNewServiceStepper 
  properties={[
    { id: '1', name: 'Marina Bay Tower', address: '123 Marina Blvd' },
    { id: '2', name: 'Silicon Valley Office', address: '456 Tech Way' },
    { id: '3', name: 'Downtown Complex', address: '789 Market St' }
  ]}
  onSubmit={(data) => handleSubmit(data)}
/>

// Extended service options
<AddNewServiceStepper 
  serviceCategories={[
    'Pool Maintenance',
    'Landscape Services',
    'Pest Control',
    'HVAC Services',
    'Plumbing',
    'Electrical'
  ]}
  serviceTypes={{
    'Pool Maintenance': ['Regular Cleaning', 'Chemical Treatment', 'Equipment Repair'],
    'Landscape Services': ['Lawn Mowing', 'Tree Trimming', 'Irrigation'],
    'Pest Control': ['General Treatment', 'Termite Control', 'Rodent Control']
  }}
  onSubmit={(data) => handleSubmit(data)}
/>

// Pool-specific configuration
<AddNewServiceStepper 
  serviceCategories={['Pool Maintenance']}
  poolTypes={[
    'Kiddie Pool',
    'Lap Pool',
    'Infinity Pool',
    'Above Ground',
    'Olympic Size',
    'Hot Tub/Spa'
  ]}
  equipmentTypes={[
    'Heater',
    'Filter',
    'Pump',
    'Chlorinator',
    'Salt System',
    'UV System'
  ]}
  serviceFrequencies={[
    'Daily',
    'Weekly',
    'Bi-Weekly',
    'Monthly',
    'One-Time'
  ]}
  onSubmit={(data) => handleSubmit(data)}
/>

// Styling & Customization
// Step indicator:
// - Numbered circles with check marks
// - Active: bg-primary text-primary-foreground
// - Current: bg-muted text-foreground
// - Inactive: bg-muted/50 text-muted-foreground
// - Connected by horizontal lines

// Step cards:
// - Separate cards for each step
// - Check icon shows completion
// - Progressive disclosure (show completed steps)
// - p-6 padding throughout

// Form controls:
// - Custom styled selects with ChevronDown icon
// - bg-muted/50 with border-input
// - Full width layouts
// - Consistent spacing

// Step 1: Property selection
// - Dropdown with property list
// - Shows selected property details
// - Image placeholder with icon

// Step 2: Service category
// - Simple dropdown selection
// - Updates available service types

// Step 3: Service type
// - Dependent on category selection
// - Filters based on previous choice

// Step 4: Service details
// - Dynamic fields based on service
// - Pool-specific fields (pools, type, equipment)
// - Optional notes textarea
// - Service frequency selection

// Submit button:
// - Full width in card
// - Disabled until all required fields
// - Shows helper text when incomplete

// Navigation:
// - Continue button between steps
// - Only shown when step is complete
// - Automatic progression

// Props:
// - properties: Array of property objects
// - serviceCategories: Available categories
// - serviceTypes: Map of category to types
// - poolTypes: Pool type options
// - equipmentTypes: Equipment options
// - serviceFrequencies: Frequency options
// - onSubmit: Callback with form data
// - className: Additional CSS classes

// Use cases:
// - Service request forms
// - Multi-step bookings
// - Property service setup
// - Maintenance scheduling
// - Any multi-step process`
  }
]

export default function UIKitPage() {
  const [activeSection, setActiveSection] = useState<SectionType>('universal')
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

  // Get components based on active section
  const getActiveComponents = () => {
    switch (activeSection) {
      case 'universal':
        return universalComponents
      case 'technician':
        return technicianComponents
      case 'commercial':
        return commercialComponents
      default:
        return universalComponents
    }
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
          
          {/* Section Navigation */}
          <div className="flex gap-1 mt-4 pb-3">
            <button
              onClick={() => setActiveSection('universal')}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                activeSection === 'universal'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Universal
            </button>
            <button
              onClick={() => setActiveSection('technician')}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                activeSection === 'technician'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Technician UI Kit
            </button>
            <button
              onClick={() => setActiveSection('commercial')}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                activeSection === 'commercial'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Commercial UI Kit
            </button>
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="container max-w-6xl mx-auto p-4">
        <div className="space-y-8">
          {getActiveComponents().map((component, index) => (
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
                          {component.name === 'SwitcherToggle' && (
                            <SwitcherToggle 
                              value="customers"
                              onChange={(value) => console.log('Switched to:', value)}
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
                          {component.name === 'CommercialOverviewStatsCard' && (
                            <CommercialOverviewStatsCard 
                              userName="Robert"
                              propertiesCount={3}
                              issuesCount={7}
                              visitsCount={12}
                            />
                          )}
                          {component.name === 'CommercialPropertyListCard' && (
                            <CommercialPropertyListCard 
                              onPropertyClick={(property) => console.log('Property clicked:', property)}
                            />
                          )}
                          {component.name === 'CommercialScoreBreakdownCard' && (
                            <CommercialScoreBreakdownCard 
                              overallScore={87}
                              trend={3}
                            />
                          )}
                          {component.name === 'CommercialUpcomingVisitsCard' && (
                            <CommercialUpcomingVisitsCard 
                              onViewAll={() => console.log('View all visits')}
                              onVisitClick={(visit) => console.log('Visit clicked:', visit)}
                            />
                          )}
                          {component.name === 'CommercialQuickActionsCard' && (
                            <CommercialQuickActionsCard />
                          )}
                          {component.name === 'CommercialRecentActivityCard' && (
                            <CommercialRecentActivityCard 
                              onActivityClick={(activity) => console.log('Activity clicked:', activity)}
                            />
                          )}
                          {component.name === 'CommercialActionGridCard' && (
                            <CommercialActionGridCard />
                          )}
                          {component.name === 'CommercialIssuesProgressCard' && (
                            <CommercialIssuesProgressCard 
                              onIssueClick={(issue) => console.log('Issue clicked:', issue)}
                            />
                          )}
                          {component.name === 'CommercialRecentDocumentsCard' && (
                            <CommercialRecentDocumentsCard 
                              onViewAll={() => console.log('View all documents')}
                              onAddDocument={() => console.log('Add document')}
                              onDocumentClick={(doc) => console.log('Document clicked:', doc)}
                            />
                          )}
                          {component.name === 'CommercialSettingsMenuCard' && (
                            <CommercialSettingsMenuCard 
                              onItemClick={(item) => console.log('Settings item clicked:', item)}
                            />
                          )}
                          {component.name === 'CommercialBookingStatsCard' && (
                            <CommercialBookingStatsCard 
                              onBack={() => console.log('Back button clicked')}
                            />
                          )}
                          {component.name === 'CommercialSearchFilterCard' && (
                            <CommercialSearchFilterCard 
                              onSearch={(query) => console.log('Search:', query)}
                              onCategoryChange={(category) => console.log('Category changed:', category)}
                              onStatusChange={(status) => console.log('Status changed:', status)}
                            />
                          )}
                          {component.name === 'BookingDetailQuickViewCard' && (
                            <BookingDetailQuickViewCard 
                              onClick={() => console.log('Booking card clicked')}
                            />
                          )}
                          {component.name === 'CommercialCalendarCard' && (
                            <CommercialCalendarCard 
                              onDateSelect={(date) => console.log('Date selected:', date)}
                              onMonthChange={(date) => console.log('Month changed:', date)}
                            />
                          )}
                          {component.name === 'CommercialDateHeaderCard' && (
                            <CommercialDateHeaderCard 
                              onAddService={() => console.log('Add Service clicked')}
                            />
                          )}
                          {component.name === 'VisitDetailsHeaderCard' && (
                            <VisitDetailsHeaderCard 
                              onBack={() => console.log('Back button clicked')}
                            />
                          )}
                          {component.name === 'VisitInformationCard' && (
                            <VisitInformationCard />
                          )}
                          {component.name === 'DescriptionContentCard' && (
                            <DescriptionContentCard />
                          )}
                          {component.name === 'AddNewServiceStepper' && (
                            <AddNewServiceStepper 
                              onSubmit={(data) => console.log('Service submitted:', data)}
                            />
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