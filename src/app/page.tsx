import { ThemeToggle } from '@/components/theme-toggle'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* CERV Logo */}
      <div className="flex flex-col items-center gap-4">
        <div className="h-24 w-24 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold shadow-lg">
          C
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">CERV</h1>
          <p className="text-muted-foreground">Technician Portal</p>
        </div>
      </div>
    </div>
  )
}