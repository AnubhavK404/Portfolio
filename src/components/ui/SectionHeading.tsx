import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title?: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="section-label mb-4">{label}</p>
      {title && (
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-secondary/80">{description}</p>
      )}
    </div>
  );
}
