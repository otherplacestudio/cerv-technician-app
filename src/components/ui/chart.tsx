"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

function ChartContainer({
  config,
  children,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

interface ChartTooltipProps {
  children?: React.ReactNode
  content?: React.ReactNode
  cursor?: boolean
}

function ChartTooltip({ children, content, cursor }: ChartTooltipProps) {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      content,
      cursor,
    } as any)
  }
  return children
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: string
  className?: string
  nameKey?: string
  labelFormatter?: (value: any) => string
  indicator?: string
  hideLabel?: boolean
}

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  nameKey,
  labelFormatter,
}: ChartTooltipContentProps) {
  if (!active || !payload) {
    return null
  }

  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 shadow-sm",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-muted-foreground">
            {labelFormatter ? labelFormatter(label) : label}
          </span>
          <span className="font-bold text-muted-foreground">
            {payload[0]?.value}
          </span>
        </div>
      </div>
    </div>
  )
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} 