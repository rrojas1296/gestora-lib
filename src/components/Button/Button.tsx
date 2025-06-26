import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva(
  "cursor-pointer text-sm px-4 rounded-md h-10 transition-colors flex gap-[10px] place-items-center outline-none",
  {
    variants: {
      variant: {
        filled:
          "bg-gray-500 text-white hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600",
        ghost:
          "bg-transparent text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
        icon: "rounded-full justify-center items-center p-0 h-10 w-10 bg-transparent text-black hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white",
        outlined:
          "bg-transparent border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 dark:text-white",
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
