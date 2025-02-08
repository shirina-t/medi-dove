import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#8fb569] text-white shadow hover:bg-[#e12454] shadow-[0px_2px_8px_#e12454] hover:shadow-[0px_2px_8px_#8fb569] transition-all duration-300 ease-in-out",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground ",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3 py-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        custom: "h-[62px] w-[285px] hover:bg-[#e12454] shadow-[0px_2px_8px_#8fb569] hover:shadow-[0px_2px_8px_#e12454] transition-all duration-300 ease-in-out", 
        submitCustom: "h-[60px] w-[100%] sm:w-[450px] md:w-[450px] bg-[#e12454] hover:bg-[#8fb569] rounded-none flex mx-auto",
        contactCustom: "h-[62px] w-[230px] hover:bg-[#e12454] shadow-[0px_2px_8px_#8fb569] hover:shadow-[0px_2px_8px_#e12454] transition-all duration-300 ease-in-out",
        colorpink:" bg-[#e12454] hover:bg-[#8fb569] h-[62px] w-[230px]",
        differentSize:"h-[62px] w-[275px] hover:bg-[#8fb569] bg-[#e12454]",
        errorSize:"h-[62px] w-[245px] hover:bg-[#8fb569] bg-[#e12454]"

        
        // Different size for "Submit Selection"

      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, showPlus = true, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}>
      
      {showPlus && (
        <span className="flex items-center justify-center pb-1 w-14 h-14 rounded-full bg-white text-[#0a0a0a] text-2xl ml-[-48px] mr-5">+</span>
      )}
      
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
