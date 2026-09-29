import React from 'react';

/**
 * WhatsApp Contact Configuration
 * Phone number in international format without '+', spaces, or hyphens.
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: '923415766705',
  defaultMessage: 'Hi Muneeb, I found your portfolio and would like to discuss a project.',
};

/**
 * SVG WhatsApp Icon Component
 */
function WhatsAppIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.11 19.76 7.84 19.01L7.53 18.83L4.41 19.65L5.24 16.61L5.05 16.3C4.22 14.99 3.79 13.47 3.79 11.91C3.79 7.37 7.5 3.66 12.05 3.66C14.25 3.66 16.32 4.52 17.88 6.07C19.43 7.63 20.29 9.7 20.29 11.91C20.29 16.45 16.59 20.16 12.05 20.16ZM16.57 14.44C16.32 14.32 15.1 13.72 14.87 13.64C14.65 13.56 14.48 13.52 14.32 13.76C14.15 14.01 13.68 14.56 13.54 14.73C13.39 14.89 13.25 14.91 13 14.79C12.75 14.66 11.95 14.4 11 13.55C10.26 12.89 9.76 12.08 9.61 11.83C9.47 11.58 9.6 11.45 9.72 11.32C9.83 11.21 9.97 11.03 10.09 10.89C10.22 10.74 10.26 10.64 10.34 10.47C10.43 10.31 10.38 10.16 10.32 10.04C10.26 9.92 9.76 8.7 9.56 8.2C9.36 7.72 9.16 7.78 9.01 7.77C8.87 7.76 8.7 7.76 8.54 7.76C8.37 7.76 8.1 7.82 7.87 8.07C7.65 8.32 7.02 8.91 7.02 10.11C7.02 11.32 7.9 12.48 8.02 12.65C8.15 12.81 9.75 15.29 12.2 16.35C12.79 16.6 13.24 16.75 13.6 16.86C14.19 17.05 14.73 17.02 15.15 16.96C15.63 16.89 16.62 16.36 16.82 15.78C17.03 15.21 17.03 14.72 16.97 14.62C16.91 14.51 16.74 14.45 16.57 14.44Z"
      />
    </svg>
  );
}

/**
 * High-performance Floating WhatsApp Action Button.
 * Uses lightweight pure CSS transitions for zero scroll stutter on mobile devices.
 */
export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(
    WHATSAPP_CONFIG.defaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      >
        {/* Desktop Tooltip */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900/90 dark:bg-slate-800/95 px-3 py-1.5 text-xs font-medium text-white shadow-md border border-white/10 backdrop-blur-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block select-none"
        >
          Chat on WhatsApp
        </span>

        {/* Official WhatsApp Icon */}
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-200 group-hover:scale-110" />
      </a>
    </aside>
  );
}

export default WhatsAppButton;
