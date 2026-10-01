import { ShopEditionItem } from '../types/agency';
import { ResilientImage } from './ResilientImage';

export interface ShopSectionProps {
  editions: ShopEditionItem[];
  onReserveEdition: (editionTitle: string) => void;
}

export function ShopSection({
  editions,
  onReserveEdition,
}: ShopSectionProps) {
  return (
    <section
      id="shop"
      className="relative z-[2] bg-[#ececec] text-[#0a0a0a] border-t border-black/10 py-24 sm:py-32 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/10">
          <div className="lg:col-span-4">
            <p className="text-[13px] text-neutral-500">
              Mainframe® Shop · Physical Editions & Objects
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
              Small-batch hardware instruments and printed monographs produced
              in-house.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {editions.map((item) => (
            <article
              key={item.id}
              className="border border-black/10 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <ResilientImage
                    src={item.image}
                    alt={item.title}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-neutral-500 mb-2 tabular-nums">
                    <span>{item.editionNumber}</span>
                    <span>{item.availability}</span>
                  </div>
                  <h3
                    className="text-[21px] sm:text-[24px] tracking-tight text-black mb-1.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-neutral-700 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-[13px] text-neutral-500 tabular-nums">
                    {item.specs}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-5 border-t border-black/10 flex items-center justify-between gap-4 bg-[#e4e4e4] tabular-nums">
                <span
                  className="text-[18px] text-black"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.price}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onReserveEdition(`${item.title} (${item.price})`)
                  }
                  className="px-5 py-2.5 bg-black text-white text-[13px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Reserve Edition →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
