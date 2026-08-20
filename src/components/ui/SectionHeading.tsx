import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-10 md:mb-14",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span className="manifest-eyebrow mb-4">{eyebrow}</span>
      <h2
        className={cn(
          "mt-4 text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-display",
          dark ? "text-white" : "text-harbor"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg", dark ? "text-sail-light" : "text-ink/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
