import { cn } from "@/lib/cn";

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  size?: "sm" | "md" | "lg";
}

export function NeuCard({
  inset = false,
  size = "md",
  className,
  children,
  ...props
}: NeuCardProps) {
  return (
    <div
      className={cn(
        inset ? "neu-inset" : "neu-card",
        size === "sm" && !inset && "neu-raised-sm rounded-xl",
        size === "lg" && !inset && "neu-raised-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
