type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  plane: (
    <path d="M2 12l19-8-6 8 6 8-19-8zm7 0h5" />
  ),
  ship: (
    <path d="M3 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M5 17l1-8h12l1 8M9 9V4h4v5" />
  ),
  truck: (
    <path d="M2 8h11v8H2zM13 11h4l3 3v2h-7zM6 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  "truck-front": (
    <path d="M2 8h11v8H2zM13 11h4l3 3v2h-7zM6 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 5l-2 3" />
  ),
  route: (
    <path d="M4 19c3 0 3-14 6-14s3 14 6 14 3-14 6-14" />
  ),
  warehouse: (
    <path d="M3 21V10l9-6 9 6v11M8 21v-6h8v6" />
  ),
  stamp: (
    <path d="M8 13a4 4 0 118 0c0 2-2 3-2 5H10c0-2-2-3-2-5zM7 21h10M9 18h6" />
  ),
  search: (
    <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
  ),
  file: (
    <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />
  ),
  transfer: (
    <path d="M4 8h13l-3-3M20 16H7l3 3" />
  ),
  box: (
    <path d="M3 8l9-5 9 5-9 5-9-5zM3 8v9l9 5 9-5V8M12 13v9" />
  ),
  parcel: (
    <path d="M4 8h16v12H4zM4 8l3-4h10l3 4M9 12h6" />
  ),
};

export default function ServiceIcon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.box}
    </svg>
  );
}
