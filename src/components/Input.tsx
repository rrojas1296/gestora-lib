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
        "flex gap-4 justify-between h-10 items-center rounded-md w-[350px] px-4 border-gray-300 border-[1px] outline-none bg-transparent",
        containerClassName,
      )}
    >
      <input
        type={type}
        className={cn("flex-1 text-sm outline-none", inputClassName)}
        {...other}
      />
      <div>🚀</div>
      {Icon && Icon}
    </div>
  );
};

export default Input;
