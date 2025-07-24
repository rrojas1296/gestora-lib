import { cn } from "@/lib/utils";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import { useState } from "react";
import Check2Icon from "../Icons/Check2Icon";

export type SelectOption = {
  label: string;
  value: string;
};

interface Props {
  placeholder: string;
  options: SelectOption[];
  optionsContainerClassName?: string;
  optionItemClassName?: string;
  triggerClassName?: string;
  onChange: (value: SelectOption) => void;
  value?: SelectOption;
  className?: string;
}
const Select = ({
  placeholder,
  className,
  triggerClassName,
  optionItemClassName,
  optionsContainerClassName,
  options,
  onChange,
  value,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("w-full max-w-2xl relative", className)}>
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full",
          open ? "pointer-events-auto z-10" : "pointer-events-none",
        )}
        onClick={() => setOpen(false)}
      />
      <button
        className={cn(
          "border-border-1 w-full border text-sm rounded-md h-10 px-4 outline-none flex justify-between items-center cursor-pointer text-text-2 hover:bg-border-1/20",
          triggerClassName,
          value ? "text-text-1" : "text-text-2",
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        {value?.label || placeholder}
        <ArrowDownIcon className="w-4 h-4 stroke-current text-text-2" />
      </button>
      <div
        className={cn(
          "rounded-md border-border-1 max-h-80 overflow-y-auto popover-scroll border absolute transition-all top-full left-0 w-full bg-bg-2",
          optionsContainerClassName,
          open
            ? "pointer-events-auto opacity-100 scale-100 translate-y-2 z-10"
            : "pointer-events-none opacity-0 scale-95 translate-y-0",
        )}
      >
        {options.map((opt) => {
          const selected = value?.value === opt.value;
          return (
            <div
              key={opt.value}
              className={cn(
                "h-10 flex justify-between px-4 items-center text-text-1 text-sm hover:bg-bg-1 cursor-pointer",
                optionItemClassName,
                selected && "bg-bg-1",
              )}
              onClick={() => {
                setOpen(false);
                onChange(opt);
              }}
            >
              {opt.label}
              {selected && (
                <Check2Icon className="w-4 h-4 stroke-current text-text-1" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
