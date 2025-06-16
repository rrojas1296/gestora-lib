import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "cursor-pointer text-sm px-4 rounded-md h-10 transition-colors flex gap-[10px] items-center justify-center outline-none",
  {
    variants: {
      variant: {
        filled: "bg-gray-500 text-white hover:bg-gray-400",
        ghost: "bg-transparent text-black hover:bg-gray-100",
        icon: "rounded-full h-10 w-10 bg-transparent text-black hover:bg-gray-100",
        outlined:
          "bg-transparent border-[1px] border-gray-300 hover:bg-gray-100",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button = ({ children, className, variant, ...other }: Props) => {
  return (
    <button className={cn(variants({ variant, className }))} {...other}>
      {children}
    </button>
  );
};

export default Button;
