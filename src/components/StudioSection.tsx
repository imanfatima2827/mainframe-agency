import { useState } from 'react';
import { CapabilityItem, CaseStudyItem } from '../types/agency';
import { ResilientImage } from './ResilientImage';

export interface StudioSectionProps {
  capabilities: CapabilityItem[];
  caseStudies: CaseStudyItem[];
  onStartProject: (context: string) => void;
}

export function StudioSection({
  capabilities,
  caseStudies,
  onStartProject,
}: StudioSectionProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(
    null
  );

  const featuredStudy = caseStudies.find((c) => c.featured) || caseStudies[0];
  const secondaryStudies = caseStudies.filter(
    (c) => c.id !== featuredStudy?.id
  );

  return (
    <section
      id="studio"
      className="relative z-[2] bg-[#e4e4e4] text-[#0a0a0a] border-t border-black/10 py-24 sm:py-32 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-black/10">
          <div className="lg:col-span-4">
            <p className="text-[13px] text-neutral-500">
              Studio Practice · Selected Works (2025–2026)
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2
              className="text-[28px] sm:text-[36px] leading-[1.15] tracking-tight text-black max-w-2xl"
              style={{
                fontFamily: 'var(--font-heading)',
                textWrap: 'balance',
              }}
            >
              We partner with engineering-led founders to turn complex hardware
              and adaptive software into unmistakable cultural objects.
            </h2>
          </div>
        </div>

        {/* Selected Case Studies — Asymmetric Showcase */}
        <div className="pt-16 pb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3
                className="text-[22px] sm:text-[26px] tracking-tight text-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Verified Client Outcomes
              </h3>
              <p className="text-[15px] text-neutral-600 mt-1">
                Every engagement is measured against commercial velocity and
                technical frame budgets.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onStartProject('Request Full Studio Credentials & Archive')
              }
              className="self-start sm:self-auto text-[14px] text-black underline underline-offset-4 hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
            >
              Request Full Archive Deck →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Flagship Featured Case Study (spans 7 cols on desktop) */}
            {featuredStudy && (
              <article
                onClick={() => setSelectedStudy(featuredStudy)}
                className="lg:col-span-7 group cursor-pointer border border-black/10 bg-white/70 transition-colors duration-200 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden bg-neutral-200">
                    <ResilientImage
                      src={featuredStudy.image}
                      alt={featuredStudy.title}
                      fallbackLabel={featuredStudy.client}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-neutral-500 mb-3 tabular-nums">
                      <span className="text-black font-medium">
                        {featuredStudy.client}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredStudy.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredStudy.year}</span>
                    </div>

                    <h4
                      className="text-[22px] sm:text-[26px] leading-[1.2] tracking-tight text-black mb-3"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        textWrap: 'balance',
                      }}
                    >
                      {featuredStudy.title}
                    </h4>

                    <p className="text-[15px] leading-[1.6] text-neutral-700 mb-6 max-w-[65ch]">
                      {featuredStudy.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-5 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f0f0f0]">
                  <div className="tabular-nums">
                    <p className="text-[12px] text-neutral-500">
                      Measured Impact
                    </p>
                    <p
                      className="text-[15px] text-black font-medium"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {featuredStudy.impactMetric}
                    </p>
                  </div>
                  <span className="text-[13px] text-black underline underline-offset-4 group-hover:opacity-60 transition-opacity whitespace-nowrap">
                    Read Case Study →
                  </span>
                </div>
              </article>
            )}

            {/* Secondary Case Studies Column (spans 5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {secondaryStudies.map((study) => (
                <article
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className="group cursor-pointer border border-black/10 bg-white/70 transition-colors duration-200 hover:bg-white flex flex-col justify-between flex-1"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                      <ResilientImage
                        src={study.image}
                        alt={study.title}
                        fallbackLabel={study.client}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-[12px] text-neutral-500 mb-2 tabular-nums">
                        <span className="text-black font-medium">
                          {study.client}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{study.sector}</span>
                        <span aria-hidden="true">·</span>
                        <span>{study.year}</span>
                      </div>
                      <h4
                        className="text-[19px] sm:text-[21px] leading-[1.25] tracking-tight text-black mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          textWrap: 'balance',
                        }}
                      >
                        {study.title}
                      </h4>
                      <p className="text-[14px] leading-[1.55] text-neutral-700">
                        {study.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-black/10 flex items-center justify-between gap-2 bg-[#f0f0f0] tabular-nums">
                    <span className="text-[13px] text-black font-medium">
                      {study.impactMetric}
                    </span>
                    <span className="text-[13px] text-black underline underline-offset-4 whitespace-nowrap shrink-0">
                      Inspect →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Core Capabilities — Editorial Numbered List */}
        <div className="pt-16 border-t border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <p className="text-[13px] text-neutral-500">
                How We Operate · Core Capabilities
              </p>
            </div>
            <div className="lg:col-span-8">
              <h3
                className="text-[24px] sm:text-[30px] leading-[1.2] tracking-tight text-black max-w-xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  textWrap: 'balance',
                }}
              >
                Senior-only multidisciplinary pods. Zero account layers between
                makers and decision-makers.
              </h3>
            </div>
          </div>

          <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {capabilities.map((cap) => (
              <div
                key={cap.index}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="text-[14px] text-neutral-500 tabular-nums">
                    {cap.index}.
                  </span>
                  <h4
                    className="text-[20px] sm:text-[22px] tracking-tight text-black"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {cap.title}
                  </h4>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[15px] leading-[1.6] text-neutral-700 max-w-[60ch]">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-500 mt-4">
                    {cap.deliverables.map((item, idx) => (
                      <span key={item} className="inline-flex items-center">
                        <span>{item}</span>
                        {idx < cap.deliverables.length - 1 && (
                          <span className="ml-2" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3 lg:text-right flex flex-col lg:items-end justify-between gap-3">
                  <p className="text-[13px] text-black font-medium tabular-nums">
                    {cap.outcomeMetric}
                  </p>
                  <button
                    type="button"
                    onClick={() => onStartProject(`Capability: ${cap.title}`)}
                    className="self-start lg:self-end text-[13px] text-black underline underline-offset-4 hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
                  >
                    Scope This Discipline →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Case Study Inspection Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-[#e4e4e4] text-[#0a0a0a] border border-black/15 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-black/10">
              <div className="flex flex-wrap items-center gap-2 text-[13px] text-neutral-600 tabular-nums">
                <span className="text-black font-medium">
                  {selectedStudy.client}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedStudy.sector}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedStudy.year}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="text-[14px] text-black underline underline-offset-4 hover:opacity-60 cursor-pointer whitespace-nowrap"
              >
                Close [ESC]
              </button>
            </div>

            <h3
              className="text-[24px] sm:text-[30px] leading-[1.2] tracking-tight text-black mt-6 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {selectedStudy.title}
            </h3>

            <div className="aspect-video w-full overflow-hidden bg-neutral-200 mb-6">
              <ResilientImage
                src={selectedStudy.image}
                alt={selectedStudy.title}
                fallbackLabel={selectedStudy.client}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 px-6 bg-white border border-black/10 mb-6 tabular-nums">
              <div>
                <p className="text-[12px] text-neutral-500">Primary Outcome</p>
                <p
                  className="text-[16px] text-black mt-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {selectedStudy.impactMetric}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-neutral-500">
                  Commercial & Technical Benchmark
                </p>
                <p
                  className="text-[16px] text-black mt-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {selectedStudy.secondaryMetric}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4
                  className="text-[15px] text-black mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  01. The Challenge
                </h4>
                <p className="text-[14px] leading-[1.6] text-neutral-700">
                  {selectedStudy.challenge}
                </p>
              </div>
              <div>
                <h4
                  className="text-[15px] text-black mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  02. Architectural Solution
                </h4>
                <p className="text-[14px] leading-[1.6] text-neutral-700">
                  {selectedStudy.solution}
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 border-black pl-5 py-1 mb-8">
              <p className="text-[15px] italic text-neutral-800 mb-2">
                &ldquo;{selectedStudy.testimonial.quote}&rdquo;
              </p>
              <footer className="text-[13px] text-neutral-600">
                {selectedStudy.testimonial.author} ·{' '}
                {selectedStudy.testimonial.role},{' '}
                {selectedStudy.testimonial.organization}
              </footer>
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10">
              <span className="text-[13px] text-neutral-500">
                Interested in a similar architectural engagement?
              </span>
              <button
                type="button"
                onClick={() => {
                  const title = selectedStudy.title;
                  setSelectedStudy(null);
                  onStartProject(`Similar to ${title}`);
                }}
                className="px-5 py-2.5 bg-black text-white text-[14px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
