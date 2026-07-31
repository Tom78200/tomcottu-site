import Link from "next/link";

type Props = {
  href: string;
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export function CtaButton({ href, children, size = "md", className = "" }: Props) {
  const sizing =
    size === "lg"
      ? "px-7 py-4 text-[15px]"
      : "px-5 py-2.5 text-[14px]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-foreground text-background font-medium transition-opacity hover:opacity-90 ${sizing} ${className}`}
    >
      {children ?? "Diagnostic gratuit (20 min)"}
    </Link>
  );
}
