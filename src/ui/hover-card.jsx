import * as React from "react";
import { cn } from "@/lib/utils";

const TextComponent = React.forwardRef(({ className, children, type = "default", ...props }, ref) => {
  // Define two types of text styles
  const textStyles = {
    heading: "text-3xl sm:text-4xl lg:text-6xl font-semibold sm:mt-3 text-[#223545]", 
    default: "text-xs sm:text-sm lg:text-base leading-relaxed text-gray-500", 
    // #223545
  };

  const textStyle = textStyles[type] || textStyles.default;

  return (
    <div
      ref={ref}
      className={cn(textStyle, className)} // Apply the selected style and any custom className
      {...props}
    >
      {children}
    </div>
  );
});

TextComponent.displayName = "TextComponent";

export { TextComponent };
