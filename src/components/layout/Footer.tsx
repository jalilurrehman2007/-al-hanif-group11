import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { services } from "@/data/services";
import SocialIcon from "@/components/ui/SocialIcon";

const socialIcons: { key: keyof typeof site.social; label: string }[] = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "youtube", label: "YouTube" },
];

export default function Footer() {
  const half = Math.ceil(services.length / 2);
  const colA = services.slice(0, half);
  const colB = services.slice(half);

  return (
    <footer className="bg-manifest text-ink/70 border-t border-sail-light">
      <div className="container-page section-pad grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width={220}
              height={120}
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">{site.tagline}</p>
          <div className="flex gap-3 mt-6">
            {socialIcons.map(({ key, label }) => (
              <a
                key={key}
                href={site.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-sail hover:border-signal hover:text-signal hover:-translate-y-0.5 transition-all"
              >
                <SocialIcon name={key} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-harbor mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {colA.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-signal transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-harbor mb-4 md:invisible">Services</h3>
          <ul className="space-y-2 text-sm">
            {colB.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-signal transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-harbor mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm font-mono">
            <li>{site.contact.addressLine}</li>
            <li>
              <a href={site.contact.phoneHref} className="hover:text-signal transition-colors">
                {site.contact.phoneDisplay}
              </a>
            </li>
            {site.contact.emails.map((email) => (
  <li key={email}>
    <a href={`mailto:${email}`} className="hover:text-signal transition-colors">
      {email}
    </a>
  </li>
))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sail-light">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs font-mono text-ink/50">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <Link href="/privacy-policy" className="hover:text-signal transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
