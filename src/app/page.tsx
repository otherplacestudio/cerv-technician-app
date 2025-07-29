'use client'

import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

// Simple Button component for theme toggle
const Button = ({ className = "", variant = "outline", size = "icon", children, ...props }: any) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <style>{`
        :root {
          --background: oklch(1 0 0);
          --foreground: oklch(0.145 0 0);
          --primary: oklch(0.205 0 0);
          --primary-foreground: oklch(0.985 0 0);
          --muted-foreground: oklch(0.556 0 0);
          --accent: oklch(0.97 0 0);
          --accent-foreground: oklch(0.205 0 0);
          --border: oklch(0.922 0 0);
          --input: oklch(0.922 0 0);
          --ring: oklch(0.708 0 0);
        }
        .dark {
          --background: oklch(0.145 0 0);
          --foreground: oklch(0.985 0 0);
          --primary: oklch(0.922 0 0);
          --primary-foreground: oklch(0.205 0 0);
          --muted-foreground: oklch(0.708 0 0);
          --accent: oklch(0.269 0 0);
          --accent-foreground: oklch(0.985 0 0);
          --border: oklch(1 0 0 / 10%);
          --input: oklch(1 0 0 / 15%);
          --ring: oklch(0.556 0 0);
        }
        .bg-background { background-color: var(--background); }
        .text-foreground { color: var(--foreground); }
        .bg-primary { background-color: var(--primary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .text-muted-foreground { color: var(--muted-foreground); }
        .border-input { border-color: var(--input); }
        .hover\\:bg-accent:hover { background-color: var(--accent); }
        .hover\\:text-accent-foreground:hover { color: var(--accent-foreground); }
        .focus-visible\\:ring-ring:focus-visible { outline: 2px solid var(--ring); }
        .rounded-md { border-radius: 0.375rem; }
      `}</style>
      
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <Button onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
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
    </div>
  )
}