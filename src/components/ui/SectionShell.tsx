import { cn } from "@/lib/cn";

interface SectionShellProps {
  id?: string;
  label: string;
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  align?: "left" | "center";
}

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
  headerClassName,
  align = "left",
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-shell relative w-full", className)}>
      <div className="section-divider" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header
          className={cn(
            "mb-12 md:mb-16",
            align === "center" && "text-center",
            headerClassName
          )}
        >
          <div
            className={cn(
              "mb-5 flex items-center gap-4",
              align === "center" && "justify-center"
            )}
          >
            <span className="section-label">{label}</span>
            <span className="section-line hidden sm:block" aria-hidden />
          </div>
          {title && (
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
