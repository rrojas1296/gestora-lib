import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import CheckIcon from "../Icons/CheckIcon";
import ErrorIcon from "../Icons/ErrorIcon";
import WarnIcon from "../Icons/WarnIcon";

type Type = "success" | "error" | "warn";

interface Props extends ComponentProps<"div"> {
  text: string;
  type: Type;
}

const Toast = ({ text, type, className, ...other }: Props) => {
  const Icon = {
    success: <CheckIcon className="w-6 h-6 text-green-500 stroke-current" />,
    error: <ErrorIcon className="w-6 h-6 text-red-500 stroke-current" />,
    warn: <WarnIcon className="w-6 h-6 text-yellow-500 stroke-current" />,
  }[type];
  return (
    <div
      className={cn(
        "bg-gray-100 shadow-md flex gap-4 items-center py-3 px-5 border-slate-300 border-[1px] text-gray-700 text-sm w-sm rounded-md",
        className,
      )}
      {...other}
    >
      {Icon}
      {text}
    </div>
  );
};

export default Toast;
