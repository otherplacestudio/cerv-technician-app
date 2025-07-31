'use client'

import React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { ThemeToggle } from '@/components/theme-toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const testData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 500 },
  { month: 'Apr', value: 200 },
  { month: 'May', value: 600 },
  { month: 'Jun', value: 450 },
]

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function TestChartPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Chart Test</h1>
        
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Simple Area Chart</CardTitle>
            <CardDescription>Testing ShadCN UI Kit - Charts</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={testData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                <Area
                  dataKey="value"
                  type="linear"
                  fill="var(--color-value)"
                  fillOpacity={0.4}
                  stroke="var(--color-value)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Debug Info</CardTitle>
            <CardDescription>Chart data structure</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-2 rounded">
              {JSON.stringify(testData, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 