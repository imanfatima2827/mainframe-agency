import { useState } from 'react';
import { LabExperiment } from '../types/agency';

export interface LabsSectionProps {
  experiments: LabExperiment[];
}

const CATEGORIES = [
  'All',
  'Kinetic Systems',
  'Spatial Audio',
  'Autonomous UI',
  'Hardware',
] as const;

export function LabsSection({ experiments }: LabsSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>('All');
  const [paramValues, setParamValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      experiments.map((exp) => [exp.id, exp.defaultParamValue])
    )
  );

  const filteredExperiments =
    activeCategory === 'All'
      ? experiments
      : experiments.filter((exp) => exp.category === activeCategory);

  const handleSliderChange = (id: string, value: number) => {
    setParamValues((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section
      id="labs"
      className="relative z-[2] bg-[#0a0a0a] text-[#f5f5f0] py-24 sm:py-32 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/15">
          <div>
            <p className="text-[13px] text-neutral-400 mb-3">
              Mainframe® Labs · Applied Research & Internal Tooling
            </p>
            <h2
              className="text-[28px] sm:text-[36px] leading-[1.15] tracking-tight text-white max-w-xl"
              style={{
                fontFamily: 'var(--font-heading)',
                textWrap: 'balance',
              }}
            >
              Prototyping the next decade of tactile computing and low-latency
              interfaces.
            </h2>
          </div>

          {/* Interactive Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter lab experiments"
            className="flex flex-wrap items-center gap-1 p-1 bg-white/10 rounded-lg self-start lg:self-end"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-[13px] rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-white text-black font-medium'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {filteredExperiments.map((exp) => {
            const currentVal = paramValues[exp.id] ?? exp.defaultParamValue;
            return (
              <div
                key={exp.id}
                className="border border-white/15 bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-neutral-400 mb-4 tabular-nums">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{exp.code}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.releaseDate}</span>
                    </div>
                    <span className="text-neutral-300">
                      {exp.latencyMetric}
                    </span>
                  </div>

                  <h3
                    className="text-[20px] sm:text-[23px] leading-[1.25] tracking-tight text-white mb-3"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      textWrap: 'balance',
                    }}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-neutral-300 tracking-[0.01em] mb-8">
                    {exp.description}
                  </p>
                </div>

                {/* Live Interactive Parameter Control */}
                <div className="pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between text-[13px] mb-2 tabular-nums">
                    <label
                      htmlFor={`slider-${exp.id}`}
                      className="text-neutral-400"
                    >
                      {exp.interactiveParamLabel}
                    </label>
                    <span className="text-white font-medium">
                      {currentVal} {exp.paramUnit}
                    </span>
                  </div>
                  <input
                    id={`slider-${exp.id}`}
                    type="range"
                    min={Math.max(
                      1,
                      Math.round(exp.defaultParamValue * 0.25)
                    )}
                    max={Math.round(exp.defaultParamValue * 2)}
                    value={currentVal}
                    onChange={(e) =>
                      handleSliderChange(exp.id, Number(e.target.value))
                    }
                    className="w-full accent-white cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
