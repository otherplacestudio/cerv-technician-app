'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SwitcherOption {
  id: string
  label: string
  badge?: number | string
}

interface SwitcherToggleProps {
  options?: SwitcherOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const SwitcherToggle: React.FC<SwitcherToggleProps> = ({
  options = [
    { id: 'customers', label: 'Customers' },
    { id: 'team', label: 'Team', badge: 4 }
  ],
  value = 'customers',
  onChange,
  className
}) => {
  const handleOptionClick = (optionId: string) => {
    if (optionId !== value) {
      onChange?.(optionId)
    }
  }

  return (
    <div className={cn(
      "flex p-1 bg-muted/30 rounded-lg",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionClick(option.id)}
          className={cn(
            "flex-1 relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            value === option.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="relative">
            {option.label}
            {option.badge !== undefined && (
              <span 
                className={cn(
                  "absolute -top-1 -right-6 min-w-[20px] h-5 px-1.5 rounded-full text-xs font-medium",
                  "flex items-center justify-center",
                  value === option.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {option.badge}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  )
}

export default SwitcherToggle