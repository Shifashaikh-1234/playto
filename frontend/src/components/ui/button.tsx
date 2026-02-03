import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 shadow-lg shadow-black/30 focus-visible:ring-4 focus-visible:ring-pink-500 outline-none",
  {
    variants: {
      variant: {
        default: "bg-black text-black hover:bg-neutral-800 border-none",
        destructive:
          "bg-black text-black hover:bg-red-900 border-none",
        outline:
          "border-2 border-black bg-transparent text-black hover:bg-black hover:text-black",
        secondary:
          "bg-black text-black hover:bg-neutral-800 border-none",
        ghost:
          "bg-transparent text-black hover:bg-black hover:text-black border-none",
        link: "text-black underline-offset-4 hover:underline hover:text-neutral-800",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-5",
        xs: "h-7 gap-1 rounded-md px-3 text-xs has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-12 rounded-lg px-8 has-[>svg]:px-6 text-lg",
        icon: "size-10",
        "icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
