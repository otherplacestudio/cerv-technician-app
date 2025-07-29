'use client'

import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

// Exact shadcn/ui Button component
const Button = ({ className = "", variant = "default", size = "default", type = "button", children, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Exact shadcn/ui Input component
const Input = ({ className = "", type = "text", ...props }: any) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

// Exact shadcn/ui Label component
const Label = ({ className = "", ...props }: any) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  />
)

// Utility function (like shadcn/ui cn)
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ')

// LoginForm component following exact shadcn/ui structure
function LoginForm({ className, ...props }: any) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a
            href="#"
            className="flex flex-col items-center gap-2 font-medium"
          >
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              C
            </div>
          </a>
          <h1 className="text-xl font-bold">Welcome to CERV</h1>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm underline underline-offset-4 hover:text-primary"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 px-2 bg-background text-muted-foreground">
            Or
          </span>
        </div>
        <Button variant="outline" type="button" className="w-full">
          Create an account
        </Button>
      </div>
      <div className="text-center text-xs text-balance text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  )
}

// Main page component
export default function LoginPage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? "dark" : ""}>
      <style>{`
        :root {
          --radius: 0.65rem;
          --background: oklch(1 0 0);
          --foreground: oklch(0.145 0 0);
          --primary: oklch(0.205 0 0);
          --primary-foreground: oklch(0.985 0 0);
          --muted: oklch(0.97 0 0);
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
          --muted: oklch(0.269 0 0);
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
        .border-border { border-color: var(--border); }
        .hover\\:bg-accent:hover { background-color: var(--accent); }
        .hover\\:text-accent-foreground:hover { color: var(--accent-foreground); }
        .hover\\:opacity-90:hover { opacity: 0.9; }
        .focus-visible\\:ring-ring:focus-visible { outline: 2px solid var(--ring); }
        .hover\\:text-primary:hover { color: var(--primary); }
        .rounded-md { border-radius: var(--radius); }
      `}</style>
      <div className="bg-background text-foreground flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}