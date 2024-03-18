import React from "react"
import { ButtonProps, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "hover:bg-blue-200")}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomButton.displayName = "CustomButton"

export {CustomButton}