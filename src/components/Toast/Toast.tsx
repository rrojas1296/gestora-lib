import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import CheckIcon from "../Icons/CheckIcon";
import ErrorIcon from "../Icons/ErrorIcon";
import WarnIcon from "../Icons/WarnIcon";
import { LoaderIcon } from "lucide-react";

type Type = "success" | "error" | "warn" | "loading";

interface Props extends ComponentProps<"div"> {
  text: string;
  type: Type;
}

const iconVariants = {
  success: <CheckIcon className="w-6 h-6 text-green-500 stroke-current" />,
  error: <ErrorIcon className="w-6 h-6 text-red-500 stroke-current" />,
  warn: <WarnIcon className="w-6 h-6 text-yellow-500 stroke-current" />,
  loading: (
    <LoaderIcon className="w-6 h-6 animate-spin text-yellow-500 stroke-current" />
  ),
};

const Toast = ({ text, type, className, ...other }: Props) => {
  const Icon = iconVariants[type];
  return (
    <div
      className={cn(
        "rounded-md border border-border-2 flex items-center gap-2 py-3 px-4 bg-bg-1 text-sm min-w-xs text-text-1",
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
