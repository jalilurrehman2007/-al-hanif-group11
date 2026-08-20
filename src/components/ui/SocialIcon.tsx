type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.48-1.46H16.5V4.36C16.2 4.32 15.19 4.24 14 4.24c-2.42 0-4.08 1.48-4.08 4.2v2.06H7.4v3H9.92V21h3.58z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M7.5 10.5v6M7.5 8v.01M11 16.5v-3.5c0-1.1.9-2 2-2s2 .9 2 2v3.5M11 13v3.5" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SocialIcon({ name, className }: IconProps) {
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
      {paths[name] ?? null}
    </svg>
  );
}
