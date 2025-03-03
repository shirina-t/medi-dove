import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 text-white border-2 border-violet-600 hover:bg-white hover:text-violet-600 duration-500",
        destructive:
          "bg-rose-500 text-white border-2 hover:bg-dirty-green duration-700 border-none",
        outline:
          "bg-dirty-green text-white hover:bg-white hover:bg-rose-500 duration-500 rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "bg-gray-600 text-white border-2 border-gray-600 hover:bg-white hover:text-gray-600 duration-500",
        link: "bg-orange-600 text-white border-2 border-orange-600 hover:bg-white hover:text-orange-600 duration-500",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "text-5xl py-4",
        lg: "h-10 w-auto rounded-full pr-10 pl-2 py-8 text-xl",
        icon: "text-2xl px-2 py-2 bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
