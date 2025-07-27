import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "cursor-pointer text-sm px-4 rounded-md h-10 transition-colors flex gap-[10px] outline-none justify-center items-center",
  {
    variants: {
      variant: {
        filled: "bg-primary text-white hover:bg-primary/90",
        ghost: "bg-transparent text-text-1 hover:bg-bg-2",
        icon: "rounded-full text-text-1 p-0 h-10 w-10 bg-transparent hover:bg-bg-2",
        outlined:
          "bg-transparent hover:bg-bg-2 border border-border-1 text-text-1",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button = ({
  children,
  className,
  variant = "filled",
  type = "button",
  ...other
}: Props) => {
  return (
    <button
      className={cn(variants({ variant, className }))}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
