import { RefObject, useCallback, useEffect, useRef } from 'react';

export interface UseVideoScrubOptions {
  sensitivity?: number;
  initialTime?: number;
}

export interface UseVideoScrubResult {
  videoRef: RefObject<HTMLVideoElement | null>;
  handleLoadedMetadata: () => void;
  handleSeeked: () => void;
  resetScrub: () => void;
}

export function useVideoScrub({
  sensitivity = 0.8,
  initialTime = 0.001,
}: UseVideoScrubOptions = {}): UseVideoScrubResult {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  const resetScrub = useCallback(() => {
    prevXRef.current = null;
    targetTimeRef.current = 0;
    isSeekingRef.current = false;
  }, []);

  useEffect(() => {
    const scrubByClientX = (currentX: number) => {
      const video = videoRef.current;
      if (!video) return;

      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) return;

      const timeOffset = (delta / window.innerWidth) * sensitivity * duration;
      const nextTime = Math.min(
        Math.max(0, targetTimeRef.current + timeOffset),
        duration
      );
      targetTimeRef.current = nextTime;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      scrubByClientX(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        scrubByClientX(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sensitivity]);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    targetTimeRef.current = 0;
    isSeekingRef.current = false;
    video.currentTime = initialTime;
  }, [initialTime]);

  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      isSeekingRef.current = false;
      return;
    }

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  }, []);

  return {
    videoRef,
    handleLoadedMetadata,
    handleSeeked,
    resetScrub,
  };
}
