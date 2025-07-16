import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  dialogClassName?: string;
  overlayClassName?: string;
};

const Dialog = ({
  open,
  children,
  setOpen,
  dialogClassName,
  overlayClassName,
}: Props) => {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "inset-0 fixed transition-opacity top-0 left-0 bg-black/50 z-50",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
          overlayClassName,
        )}
      ></div>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all z-50 border-border-2 rounded-md border p-4 bg-bg-2",
          open
            ? "pointer-events-auto opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-80",
          dialogClassName,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Dialog;
