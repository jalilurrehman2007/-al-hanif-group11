import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 group-hover:opacity-60" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200">
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.65 4.47 1.78 6.31L4 29l7.86-1.75A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm0 21.9a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-4.66 1.04 1.02-4.54-.24-.37A9.87 9.87 0 0 1 5.1 15c0-6.02 4.9-10.9 10.9-10.9S26.9 8.98 26.9 15 22 24.9 16.004 24.9Zm5.42-8.15c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35Z" />
        </svg>
      </span>
    </a>
  );
}
