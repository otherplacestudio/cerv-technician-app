'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

// SignupForm component
function SignupForm({ className, ...props }: any) {
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
          <h1 className="text-xl font-bold">Join CERV</h1>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
              Sign in
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="John Smith" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create password" required />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm password" required />
          </div>
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-input">
          <span className="relative z-10 px-2 bg-background text-muted-foreground">
            Or
          </span>
        </div>
        <Button variant="outline" type="button" className="w-full">
          Sign in instead
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
export default function SignupPage() {
  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}