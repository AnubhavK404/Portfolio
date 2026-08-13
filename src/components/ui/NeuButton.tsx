import { cn } from "@/lib/cn";

interface NeuButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-[11px] uppercase tracking-[0.12em]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function NeuButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: NeuButtonProps) {
  return (
    <a
      className={cn(
        "neu-btn",
        variant === "accent" && "neu-btn-accent",
        variant === "primary" && "neu-btn-primary",
        variant === "ghost" && "neu-btn-ghost",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
