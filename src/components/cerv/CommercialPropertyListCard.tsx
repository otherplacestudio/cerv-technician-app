'use client'

import React, { useRef } from 'react'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Property {
  id: string
  name: string
  location: string
  score: number
  imageUrl?: string
  scoreColor?: 'green' | 'yellow' | 'orange' | 'red'
}

interface CommercialPropertyListCardProps {
  properties?: Property[]
  onPropertyClick?: (property: Property) => void
  showNavButtons?: boolean
  className?: string
}

export const CommercialPropertyListCard: React.FC<CommercialPropertyListCardProps> = ({
  properties = [
    {
      id: '1',
      name: 'Austin Lakefront Complex',
      location: 'Lake Austin, TX',
      score: 92,
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      scoreColor: 'green'
    },
    {
      id: '2',
      name: 'Austin Tech Center',
      location: 'South Austin, TX',
      score: 85,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      scoreColor: 'yellow'
    },
    {
      id: '3',
      name: 'Riverside Business Park',
      location: 'Riverside, TX',
      score: 78,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      scoreColor: 'yellow'
    },
    {
      id: '4',
      name: 'Downtown Tower',
      location: 'Downtown Austin, TX',
      score: 95,
      imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop',
      scoreColor: 'green'
    }
  ],
  onPropertyClick,
  showNavButtons = false,
  className
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const getScoreColorClasses = (score: number, customColor?: string) => {
    if (customColor) {
      switch (customColor) {
        case 'green':
          return 'bg-green-500 text-white'
        case 'yellow':
          return 'bg-yellow-500 text-white'
        case 'orange':
          return 'bg-orange-500 text-white'
        case 'red':
          return 'bg-red-500 text-white'
        default:
          return 'bg-green-500 text-white'
      }
    }
    
    // Auto determine color based on score
    if (score >= 90) return 'bg-green-500 text-white'
    if (score >= 75) return 'bg-yellow-500 text-white'
    if (score >= 60) return 'bg-orange-500 text-white'
    return 'bg-red-500 text-white'
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320 // Approximate width of one card
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={cn("w-full relative", className)}>
      {/* Navigation Buttons (optional) */}
      {showNavButtons && properties.length > 2 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm shadow-md"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {properties.map((property) => (
          <Card 
            key={property.id}
            className="flex-none w-[280px] sm:w-[320px] snap-start border-input bg-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onPropertyClick?.(property)}
          >
            <CardContent className="p-0">
              <div className="relative">
                {/* Property Image */}
                <div className="relative h-40 sm:h-48 bg-muted">
                  {property.imageUrl ? (
                    <Image
                      src={property.imageUrl}
                      alt={property.name}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                  )}
                  
                  {/* Score Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={cn(
                      "px-3 py-1.5 rounded-full font-bold text-base shadow-lg",
                      getScoreColorClasses(property.score, property.scoreColor)
                    )}>
                      {property.score}
                    </div>
                  </div>
                </div>

                {/* Property Info */}
                <div className="p-3 sm:p-4 space-y-1">
                  <h3 className="font-semibold text-base sm:text-lg text-foreground truncate">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{property.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default CommercialPropertyListCard