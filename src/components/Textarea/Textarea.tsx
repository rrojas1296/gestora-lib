import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

type Props = ComponentProps<"textarea">;

const Textarea = ({ className, ...other }: Props) => {
  return (
    <textarea
      className={cn(
        "h-32 text-text-1 placeholder:text-text-2 rounded-md px-4 py-2 text-sm placeholder:text-sm border-border-1 border outline-none bg-transparent resize-none",
        className,
      )}
      {...other}
    ></textarea>
  );
};

export default Textarea;
