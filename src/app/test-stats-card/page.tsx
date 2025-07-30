import { DailyStatsCard } from '@/components/cerv/DailyStatsCard'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestStatsCardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Centered Card */}
      <div className="max-w-md w-full px-4">
        <DailyStatsCard />
      </div>
    </div>
  )
}