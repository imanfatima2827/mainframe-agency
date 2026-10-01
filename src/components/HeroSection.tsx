import { Fragment, ReactNode, useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { HeroContentConfig, InquiryType } from '../types/agency';
import { ActionPill } from './ActionPill';

export interface HeroSectionProps extends HeroContentConfig {
  onActionSelect?: (inquiryType?: InquiryType, label?: string) => void;
  extraActions?: ReactNode;
}

export function HeroSection({
  introLines,
  typewriter,
  pillsRevealDelay = 400,
  actions,
  onActionSelect,
  extraActions,
}: HeroSectionProps) {
  const [pillsVisible, setPillsVisible] = useState(false);

  const { displayed, done } = useTypewriter(
    typewriter.text,
    typewriter.speed ?? 38,
    typewriter.startDelay ?? 600
  );

  // Show action pills after pillsRevealDelay (default 400ms), independent of typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, pillsRevealDelay);
    return () => clearTimeout(timer);
  }, [pillsRevealDelay]);

  return (
    <section
      id="top"
      className="relative z-[1] h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div className="max-w-xl relative z-10">
        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
        >
          {introLines.map((line, idx) => (
            <Fragment key={idx}>
              {line}
              {idx < introLines.length - 1 && <br />}
            </Fragment>
          ))}
        </div>

        {/* 2. Typewriter text */}
        <p
          className="text-black mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-cursor-blink" />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {actions.map((action) => (
            <ActionPill
              key={action.id}
              item={action}
              onActionSelect={onActionSelect}
            />
          ))}
          {extraActions}
        </div>
      </div>
    </section>
  );
}
