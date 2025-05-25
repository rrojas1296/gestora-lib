import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../utils/cn";

const variants = cva(
  "cursor-pointer text-sm px-4 rounded-md h-10 transition-colors flex gap-[10px] items-center justify-center",
  {
    variants: {
      variant: {
        filled: "bg-gray-500 text-white hover:bg-gray-400",
        ghost: "bg-transparent text-black hover:bg-gray-100",
        icon: "rounded-full h-10 w-10 bg-transparent text-black hover:bg-gray-100",
      },
    },
  },
);

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {}

const Button = ({ children, className, variant }: Props) => {
  return (
    <button className={cn(variants({ variant, className }))}>{children}</button>
  );
};

export default Button;
