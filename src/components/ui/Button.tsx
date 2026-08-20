import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const variantClass =
    variant === "outline" ? "btn-outline" : variant === "dark" ? "btn-dark" : "btn-primary";

  return (
    <Link href={href} className={cn(variantClass, className)}>
      {children}
    </Link>
  );
}
