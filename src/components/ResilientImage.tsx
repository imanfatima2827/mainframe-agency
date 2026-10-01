import { useState } from 'react';

export interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackLabel,
  className = '',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 text-neutral-700 p-6 text-center ${className}`.trim()}
      >
        <span className="text-xs tracking-wide text-neutral-500 mb-1">
          Mainframe® Visual Archive
        </span>
        <span
          className="text-sm font-medium text-neutral-900"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
