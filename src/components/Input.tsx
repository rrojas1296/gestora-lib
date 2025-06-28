import type { ComponentProps, JSX } from "react";
import { cn } from "../utils/cn";

interface Props extends ComponentProps<"input"> {
  Icon?: JSX.Element;
  containerClassName?: string;
  inputClassName?: string;
}
const Input = ({
  Icon,
  type,
  containerClassName,
  inputClassName,
  ...other
}: Props) => {
  return (
    <div
      className={cn(
        "flex gap-4 justify-between h-10 items-center rounded-md max-w-md px-4 border-border-1 border outline-none bg-transparent",
        containerClassName,
      )}
    >
      <input
        type={type}
        className={cn(
          "flex-1 text-sm outline-none text-text-1 placeholder:text-text-2 w-full",
          inputClassName,
        )}
        {...other}
      />
      {Icon && Icon}
    </div>
  );
};

export default Input;
