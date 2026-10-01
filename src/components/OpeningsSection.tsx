import { useState } from 'react';
import { JobOpening } from '../types/agency';

export interface OpeningsSectionProps {
  openings: JobOpening[];
  onApplyForRole: (roleTitle: string) => void;
}

export function OpeningsSection({
  openings,
  onApplyForRole,
}: OpeningsSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    openings[0]?.id ?? null
  );

  return (
    <section
      id="openings"
      className="relative z-[2] bg-[#e4e4e4] text-[#0a0a0a] border-t border-black/10 py-24 sm:py-32 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/10">
          <div className="lg:col-span-4">
            <p className="text-[13px] text-neutral-500">
              Openings · Join the Collective
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
              Small teams, high autonomy, and transparent profit sharing across
              New York, Zurich, and Tokyo.
            </h2>
          </div>
        </div>

        <div className="divide-y divide-black/10 border-b border-black/10">
          {openings.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div key={job.id} className="py-8">
                <div
                  onClick={() =>
                    setExpandedId(isExpanded ? null : job.id)
                  }
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-neutral-500 mb-1.5 tabular-nums">
                      <span>{job.discipline}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{job.type}</span>
                    </div>
                    <h3
                      className="text-[21px] sm:text-[24px] tracking-tight text-black group-hover:opacity-70 transition-opacity"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 tabular-nums">
                    <span className="text-[14px] text-neutral-700">
                      {job.compensation}
                    </span>
                    <button
                      type="button"
                      className="text-[13px] text-black underline underline-offset-4 whitespace-nowrap cursor-pointer"
                    >
                      {isExpanded ? 'Hide Details' : 'Inspect Role'}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-6">
                      <p className="text-[15px] leading-[1.6] text-neutral-700 max-w-[60ch]">
                        {job.summary}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <p className="text-[12px] text-neutral-500 mb-2">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-1.5 text-[14px] text-neutral-800">
                        {job.responsibilities.map((item) => (
                          <li key={item}>— {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-2 lg:text-right">
                      <button
                        type="button"
                        onClick={() => onApplyForRole(job.title)}
                        className="px-5 py-2.5 bg-black text-white text-[13px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Apply for Role →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
