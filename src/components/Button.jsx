import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-red-500 text-primary-foreground shadow hover:bg-primary/90",
        destructive:
        "bg-white text-destructive-foreground shadow-sm hover:bg-[#e12454] rounded-full",
        outline:
          "text-white bg-[#e12454] text-center py-[24px] text-[14px] font-[500] font-rubik tracking-wide transition-all duration-300 hover:bg-[#8fb569]",
        secondary:
          "bg-[#e12454] text-white shadow-[0 8px 16px 0 rgb(225 36 84 / 20%)] rounded-[30px] shadow-sm hover:bg-[#8fb569]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "bg-[#8fb569] text-white shadow-[0 8px 16px 0 rgb(225 36 84 / 20%)] rounded-[30px] shadow-sm hover:bg-[#e12454]",
      },
      size: {
        default: "h-20 px-8 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        btns: "h-16 w-[300px]",
        play: "h-20 w-20 p-16",
        subm: "rounded-0"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

