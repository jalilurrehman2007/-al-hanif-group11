"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";

const announcements = [
  "Free quote within 24 hours",
  "logistics all over world",
  "One team — sourcing to final delivery",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marqueeItems = [...announcements, ...announcements];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b transition-shadow duration-300 ${
        scrolled ? "shadow-md border-transparent" : "border-sail-light"
      }`}
    >
      {/* Announcement bar */}
      <div className="hidden md:flex items-center bg-signal text-white text-xs font-mono overflow-hidden">
        <div className="flex-1 overflow-hidden py-1.5">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((msg, i) => (
              <span key={i} className="flex items-center px-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 mr-2" />
                {msg}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 pl-6 pr-6 border-l border-white/20 py-1.5 shrink-0">
          <a href={site.contact.phoneHref} className="hover:text-white/80 transition-colors">
            {site.contact.phoneDisplay}
          </a>
          <a href={`mailto:${site.contact.emails[0]}`} className="hover:text-white/80 transition-colors">
              {site.contact.emails.join(" / ")}
            </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={220}
            height={120}
            className="h-14 sm:h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium py-2 transition-colors ${
                    active ? "text-harbor" : "text-ink/65 hover:text-harbor"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-signal transition-all duration-200 ${
                      servicesOpen || active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-3 w-72 animate-fade-in">
                    <div className="bg-white rounded-sm shadow-xl border border-sail-light py-2 max-h-96 overflow-y-auto">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-harbor hover:bg-manifest hover:text-signal transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium py-2 transition-colors ${
                  active ? "text-harbor" : "text-ink/65 hover:text-harbor"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-signal transition-all duration-200 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact-us" className="hidden md:inline-flex btn-primary">
            Get a Quote
          </Link>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="lg:hidden text-harbor p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-sail-light bg-white animate-fade-in">
          <nav className="container-page py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-ink/70 hover:text-harbor text-sm font-medium border-b border-sail-light"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 justify-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
