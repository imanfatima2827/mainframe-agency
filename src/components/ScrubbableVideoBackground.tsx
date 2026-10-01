import { useEffect, useState } from 'react';
import { useVideoScrub } from '../hooks/useVideoScrub';
import { VideoScrubConfig } from '../types/agency';

export interface ScrubbableVideoBackgroundProps extends VideoScrubConfig {
  className?: string;
}

export function ScrubbableVideoBackground({
  src,
  fallbackSrc,
  sensitivity = 0.8,
  objectPosition = '70% center',
  className = '',
}: ScrubbableVideoBackgroundProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const { videoRef, handleLoadedMetadata, handleSeeked, resetScrub } =
    useVideoScrub({ sensitivity });

  useEffect(() => {
    setActiveSrc(src);
    resetScrub();
  }, [src, resetScrub]);

  const handleVideoError = () => {
    if (fallbackSrc && activeSrc !== fallbackSrc) {
      setActiveSrc(fallbackSrc);
      resetScrub();
    }
  };

  return (
    <video
      ref={videoRef}
      src={activeSrc}
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={handleLoadedMetadata}
      onSeeked={handleSeeked}
      onError={handleVideoError}
      className={`fixed inset-0 z-0 h-full w-full object-cover ${className}`.trim()}
      style={{ objectPosition }}
    />
  );
}
