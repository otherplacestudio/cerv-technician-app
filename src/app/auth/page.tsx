'use client'

import React, { useState } from 'react'
import { Sun, Moon, Loader2 } from 'lucide-react'

// Exact shadcn/ui Button component
const Button = ({ className = "", variant = "default", size = "default", type = "button", disabled = false, children, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  }
  
  const sizes: Record<string, string> = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      type={type}
      disabled={disabled}
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

// Card components
const Card = ({ className = "", children, ...props }: any) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ className = "", children, ...props }: any) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Tabs components
const Tabs = ({ value, onValueChange, className = "", children, ...props }: any) => (
  <div className={`w-full ${className}`} {...props}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab: value, setActiveTab: onValueChange })
    )}
  </div>
)

const TabsList = ({ className = "", children, activeTab, setActiveTab, ...props }: any) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full ${className}`} {...props}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
)

const TabsTrigger = ({ value, className = "", children, activeTab, setActiveTab, ...props }: any) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex-1 ${
      activeTab === value 
        ? 'bg-background text-foreground shadow-sm' 
        : 'hover:bg-background/50'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
)

const TabsContent = ({ value, className = "", children, activeTab, ...props }: any) => {
  if (activeTab !== value) return null
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function AuthTestPage() {
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleSignup = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setActiveTab("login")
    }, 2000)
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <style>{`
        :root {
          --radius: 0.65rem;
          --background: oklch(1 0 0);
          --foreground: oklch(0.145 0 0);
          --card: oklch(1 0 0);
          --card-foreground: oklch(0.145 0 0);
          --primary: oklch(0.205 0 0);
          --primary-foreground: oklch(0.985 0 0);
          --secondary: oklch(0.97 0 0);
          --secondary-foreground: oklch(0.205 0 0);
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
          --card: oklch(0.205 0 0);
          --card-foreground: oklch(0.985 0 0);
          --primary: oklch(0.922 0 0);
          --primary-foreground: oklch(0.205 0 0);
          --secondary: oklch(0.269 0 0);
          --secondary-foreground: oklch(0.985 0 0);
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
        .bg-card { background-color: var(--card); }
        .text-card-foreground { color: var(--card-foreground); }
        .bg-primary { background-color: var(--primary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .bg-secondary { background-color: var(--secondary); }
        .text-secondary-foreground { color: var(--secondary-foreground); }
        .bg-muted { background-color: var(--muted); }
        .text-muted-foreground { color: var(--muted-foreground); }
        .border { border-color: var(--border); }
        .border-input { border-color: var(--input); }
        .hover\\:bg-accent:hover { background-color: var(--accent); }
        .hover\\:text-accent-foreground:hover { color: var(--accent-foreground); }
        .hover\\:bg-background\\/50:hover { background-color: color-mix(in oklch, var(--background), transparent 50%); }
        .hover\\:opacity-90:hover { opacity: 0.9; }
        .focus-visible\\:ring-ring:focus-visible { outline: 2px solid var(--ring); }
        .rounded-md { border-radius: var(--radius); }
        .rounded-lg { border-radius: calc(var(--radius) + 2px); }
        .rounded-sm { border-radius: calc(var(--radius) - 2px); }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
      `}</style>
      
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
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

        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                C
              </div>
            </div>
            <h1 className="text-2xl font-bold">CERV Technician Portal</h1>
            <p className="text-muted-foreground mt-2">Professional field service management</p>
          </div>

          {/* Auth Forms */}
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2 text-center">
                    <h2 className="text-xl font-semibold">Welcome back</h2>
                    <p className="text-sm text-muted-foreground">Sign in to your technician dashboard</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        placeholder="technician@cerv.com"
                        type="email"
                        autoComplete="email"
                      />
                    </div>

                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        placeholder="Enter your password"
                        type="password"
                        autoComplete="current-password"
                      />
                    </div>

                    <Button
                      onClick={handleLogin}
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Sign In
                    </Button>
                  </div>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2 text-center">
                    <h2 className="text-xl font-semibold">Join CERV</h2>
                    <p className="text-sm text-muted-foreground">Create your technician account</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        placeholder="John Smith"
                        autoComplete="name"
                      />
                    </div>

                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        placeholder="technician@cerv.com"
                        type="email"
                        autoComplete="email"
                      />
                    </div>

                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="signup-phone">Phone Number</Label>
                      <Input
                        id="signup-phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        placeholder="Create a password"
                        type="password"
                        autoComplete="new-password"
                      />
                    </div>

                    <div className="grid w-full items-center gap-3">
                      <Label htmlFor="signup-confirm">Confirm Password</Label>
                      <Input
                        id="signup-confirm"
                        placeholder="Confirm your password"
                        type="password"
                        autoComplete="new-password"
                      />
                    </div>

                    <Button
                      onClick={handleSignup}
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Create Account
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By using CERV, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}