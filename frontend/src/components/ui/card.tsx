import * as React from "react"
import { cn } from "@/lib/utils"

// Light, elegant color palette
const cardBg = "bg-gradient-to-br from-gray-50 via-blue-50 to-pink-50 text-gray-900";
const cardShadow = "shadow-md shadow-gray-200/40";
const cardBorder = "border border-gray-200";
const cardRadius = "rounded-xl";
const cardTransition = "transition-all duration-300 hover:scale-[1.01] hover:shadow-lg";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        `${cardBg} ${cardShadow} ${cardBorder} ${cardRadius} ${cardTransition} flex flex-col gap-6 py-8`,
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-8 has-data-[slot=card-action]:grid-cols-[1fr_auto] border-b border-gray-200 pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-bold text-xl tracking-tight text-gray-900", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-gray-600 text-base font-medium", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end", className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-8 py-2 text-gray-800", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-8 pt-6 border-t border-gray-200 text-gray-700", className)}
      {...props}
    />
  )
}
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
