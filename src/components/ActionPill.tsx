import { useState } from 'react';
import { ActionPillItem, InquiryType } from '../types/agency';

export interface ActionPillProps {
  item: ActionPillItem;
  onActionSelect?: (inquiryType?: InquiryType, label?: string) => void;
  className?: string;
}

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="4"
        y="4"
        width="6.5"
        height="6.5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 2.5V2C8 1.44772 7.55228 1 7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H2.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ActionPill({
  item,
  onActionSelect,
  className = '',
}: ActionPillProps) {
  const [copied, setCopied] = useState(false);
  const isOutline = item.variant === 'outline';

  const baseClasses =
    'inline-flex items-center justify-center rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-colors duration-200 cursor-pointer';

  const variantClasses = isOutline
    ? 'gap-2 sm:gap-3 text-white bg-transparent border border-white hover:bg-white hover:text-black'
    : 'bg-white text-black border border-black/10 hover:bg-black hover:text-white';

  const handleClick = () => {
    if (item.copyText && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(item.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    if (item.href) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onActionSelect?.(item.inquiryType, item.label);
    item.onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`.trim()}
    >
      <span>
        {copied && item.copyText ? (
          `Copied: ${item.copyText}`
        ) : (
          <>
            {item.label}
            {item.underlinedText && (
              <span className="underline underline-offset-1">
                {item.underlinedText}
              </span>
            )}
          </>
        )}
      </span>
      {item.copyText && <CopyIcon />}
    </button>
  );
}
