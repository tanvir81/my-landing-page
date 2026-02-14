"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-primary text-background border border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
        outline:
          "border border-white/20 bg-transparent hover:bg-white/5 hover:text-foreground hover:border-accent/50",
        ghost: "hover:bg-white/5 hover:text-foreground",
        accent: "bg-accent text-accent-foreground border border-white/10 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.5)] hover:bg-accent/90",
        glass: "glass text-foreground border border-white/10 hover:bg-white/10",
      },
      size: {
        default: "h-9 !px-[40px] !min-w-fit",
        sm: "h-8 px-6 text-xs",
        lg: "h-10 !px-[100px] !min-w-fit text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

const MotionButton = motion.create(Button);

export { Button, MotionButton, buttonVariants };
