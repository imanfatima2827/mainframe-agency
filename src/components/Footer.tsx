import { BrandConfig, NavItem } from '../types/agency';

export interface FooterProps {
  brand: BrandConfig;
  navItems: NavItem[];
}

export function Footer({ brand, navItems }: FooterProps) {
  return (
    <footer className="relative z-[2] bg-[#0a0a0a] text-[#f5f5f0] border-t border-white/15 py-12 px-5 sm:px-8 md:px-12">
      <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <a
            href={brand.href || '#top'}
            className="text-[19px] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {brand.name}
          </a>
          <span className="text-neutral-500">·</span>
          <span className="text-[13px] text-neutral-400">
            All Rights Reserved © 2026
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[14px] text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Get in touch
          </a>
        </div>
      </div>
    </footer>
  );
}
