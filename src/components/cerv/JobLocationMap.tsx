'use client'

import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface JobLocationMapProps {
  customerFirstName?: string
  address?: string
  onOpenMaps?: () => void
  onStartNavigation?: () => void
  className?: string
}

export function JobLocationMap({
  customerFirstName = "Sarah",
  address = "One Apple Park Way, Cupertino, CA 95014",
  onOpenMaps,
  onStartNavigation,
  className
}: JobLocationMapProps) {
  // Apple Park Map View with real screenshot
  const MapView = () => (
    <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden">
      {/* Apple Park aerial view background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjUwIiB5PSI0MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEwMCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE0MCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjIyMCIgY3k9IjE0MCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTVFNSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2NjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkFwcGxlIFBhcms8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2NjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPk9uZSBBcHBsZSBQYXJrIFdheTwvdGV4dD4KPHN2Zz4=')`
        }}
      />
      
      {/* Location pin for Apple Park */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      
      {/* Apple Park label */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-2 py-1 rounded text-xs font-medium">
        Apple Park
      </div>
      
      {/* Open Maps button */}
      <Button
        variant="secondary"
        size="default"
        className="absolute top-2 right-2 bg-white hover:bg-gray-100"
        onClick={onOpenMaps}
      >
        <ExternalLink className="h-3 w-3 mr-1" />
        Open Maps
      </Button>
    </div>
  )

  return (
    <Card className={cn("w-full py-3 border-input", className)}>
      <CardContent className="px-3">
        {/* Map View */}
        <MapView />
        
        {/* Address Information */}
        <div className="mt-4 space-y-1">
          <h3 className="font-semibold text-base">
            {customerFirstName}&apos;s Home
          </h3>
          <p className="text-sm text-muted-foreground">
            {address}
          </p>
        </div>
        
        {/* On My Way Button */}
        <Button
          className="w-full mt-4 h-12 bg-black hover:bg-gray-800 text-white"
          onClick={onStartNavigation}
        >
          <MapPin className="h-4 w-4 mr-2" />
          On My Way
        </Button>
      </CardContent>
    </Card>
  )
}

export default JobLocationMap