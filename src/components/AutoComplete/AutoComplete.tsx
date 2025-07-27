import { cn } from "@/lib/utils";
import { useRef, useState, type ComponentProps } from "react";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

export interface AutoCompleteOption {
  label: string;
  value: string;
}

interface Props extends ComponentProps<"input"> {
  options: AutoCompleteOption[];
  handleSelect: (option: AutoCompleteOption) => void;
  triggerClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
}

const AutoComplete = ({
  placeholder,
  triggerClassName,
  inputClassName,
  containerClassName,
  options,
  handleSelect,
  ...other
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);
  const [opts, setOpts] = useState(options);

  const handleChange = (value: string) => {
    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().includes(value.toLowerCase()),
    );
    handleSelect({
      value: value.toLowerCase(),
      label: value,
    });
    setOpts(filtered.length > 0 ? filtered : [{ value, label: value }]);
  };
  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "fixed inset-0 top-0 left-0",
          open ? "pointer-events-auto z-10" : "pointer-events-none",
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "border border-border-1 px-4 h-10 flex items-center rounded-md",
          triggerClassName,
          open && "z-10 relative",
        )}
      >
        <input
          type="text"
          onFocus={() => setOpen(true)}
          onChange={(e) => handleChange(e.target.value)}
          ref={inputRef}
          className={cn(
            "text-sm placeholder:text-text-2 flex-1 outline-none",
            inputClassName,
          )}
          placeholder={placeholder}
          {...other}
        />
        <ArrowDownIcon className="text-text-2 h-4 w-4 stroke-current" />
      </div>
      <ul
        className={cn(
          "absolute top-full w-full max-h-80 bg-bg-2 transition-all overflow-y-auto popover-scroll rounded-md border border-border-2",
          open
            ? "pointer-events-auto opacity-100 scale-100 translate-y-2 z-10"
            : "pointer-events-none opacity-0 scale-95 translate-y-0",
        )}
      >
        {opts.map((opt) => {
          return (
            <li
              key={opt.value}
              className="text-sm px-4 h-10 flex items-center hover:bg-bg-1 cursor-pointer"
              onClick={() => {
                handleSelect(opt);
                if (inputRef.current) inputRef.current.value = opt.label;
                const filtered = options.filter((opt) =>
                  opt.label
                    .toLowerCase()
                    .includes(inputRef.current!.value.toLowerCase()),
                );
                setOpts(filtered);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoComplete;
