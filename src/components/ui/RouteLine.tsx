type RouteLineProps = { className?: string; dark?: boolean };

/**
 * The site's signature motif: a dashed trade-route line that draws itself in,
 * echoing the sweep of the logo's crescent sail. Reused in the hero and as a
 * quiet section divider elsewhere.
 */
export default function RouteLine({ className, dark = false }: RouteLineProps) {
  return (
    <svg
      viewBox="0 0 1400 80"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 0 40 C 200 -10, 400 90, 700 40 S 1100 -10, 1400 40"
        fill="none"
        stroke={dark ? "#B8BCC2" : "#C97A3D"}
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
        className="route-line-path"
      />
      <circle r="5" fill="#C97A3D" className="route-marker" />
    </svg>
  );
}
