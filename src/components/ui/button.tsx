import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hero-gradient text-primary-foreground hover:shadow-strong hover:scale-105 transform",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-soft",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:shadow-soft",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-soft",
        ghost: "text-primary hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "hero-gradient text-primary-foreground hover:shadow-strong hover:scale-105 transform text-lg font-bold",
        professional: "bg-card text-card-foreground border border-border hover:shadow-soft hover:bg-accent/50 transition-smooth",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
