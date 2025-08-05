'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  label: string
  value: string
  color?: string
}

interface Status {
  id: string
  label: string
  value: string
}

interface CommercialSearchFilterCardProps {
  categories?: Category[]
  statuses?: Status[]
  onSearch?: (query: string) => void
  onCategoryChange?: (category: string) => void
  onStatusChange?: (status: string) => void
  selectedCategory?: string
  selectedStatus?: string
  searchPlaceholder?: string
  className?: string
}

export const CommercialSearchFilterCard: React.FC<CommercialSearchFilterCardProps> = ({
  categories = [
    { id: '1', label: 'All Categories', value: 'all' },
    { id: '2', label: 'Pool', value: 'pool', color: 'text-red-500' },
    { id: '3', label: 'Landscape', value: 'landscape', color: 'text-green-500' },
    { id: '4', label: 'Pest', value: 'pest', color: 'text-purple-500' },
    { id: '5', label: 'Tree', value: 'tree', color: 'text-teal-500' }
  ],
  statuses = [
    { id: '1', label: 'All Status', value: 'all' },
    { id: '2', label: 'Upcoming', value: 'upcoming' },
    { id: '3', label: 'In Progress', value: 'in_progress' },
    { id: '4', label: 'Cancelled', value: 'cancelled' }
  ],
  onSearch,
  onCategoryChange,
  onStatusChange,
  selectedCategory = 'all',
  selectedStatus = 'all',
  searchPlaceholder = 'Search bookings...',
  className
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch?.(query)
  }

  const handleCategoryClick = (value: string) => {
    onCategoryChange?.(value)
  }

  const handleStatusClick = (value: string) => {
    onStatusChange?.(value)
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 bg-background border-input text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.value ? "secondary" : "outline"}
            onClick={() => handleCategoryClick(category.value)}
            className={cn(
              "flex-shrink-0",
              selectedCategory === category.value
                ? "bg-muted text-foreground hover:bg-muted/80"
                : "bg-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              category.color && selectedCategory === category.value && category.color
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Status Filters */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {statuses.map((status) => (
          <Button
            key={status.id}
            variant={selectedStatus === status.value ? "secondary" : "outline"}
            onClick={() => handleStatusClick(status.value)}
            className={cn(
              "flex-shrink-0",
              selectedStatus === status.value
                ? "bg-muted text-foreground hover:bg-muted/80"
                : "bg-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {status.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default CommercialSearchFilterCard