import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const variants = cva("bg-bg-2 fixed", {
  variants: {
    position: {
      left: "left-0 top-0 border-r border-r-border-2 h-screen p-4",
      right: "right-0 top-0  border-l-border-2 h-screen p-4",
      bottom: "bottom-0 right-0 left-0 border-t-border-2 p-4",
    },
    open: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      position: "left",
      open: false,
      className: "-translate-x-full",
    },
    {
      position: "left",
      open: true,
      className: "translate-x-0",
    },
    {
      position: "right",
      open: false,
      className: "translate-x-full",
    },
    {
      position: "right",
      open: true,
      className: "translate-x-0",
    },

    {
      position: "bottom",
      open: false,
      className: "translate-y-full",
    },
    {
      position: "bottom",
      open: true,
      className: "translate-y-0",
    },
  ],
});

interface Props extends VariantProps<typeof variants>, ComponentProps<"div"> {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Sidebar = ({ position, open, setOpen, children, className }: Props) => {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 inset-0 bg-black transition-opacity ease-out",
          open
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={cn(
          variants({ position, open }),
          "transition-transform ease-out",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
