import { useState } from 'react';
import { BrandConfig, NavItem } from '../types/agency';

export interface NavbarProps {
  brand: BrandConfig;
  navItems: NavItem[];
  cta: NavItem;
}

export function Navbar({ brand, navItems, cta }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* NAVBAR (fixed, z-index: 10) */}
      <nav className="fixed top-0 left-0 z-10 flex w-full items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        {/* Logo (left) */}
        <a
          href={brand.href || '#'}
          className="flex items-center gap-2.5"
          aria-label={`${brand.name} home`}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {brand.name}
          </span>
          {brand.symbol && (
            <span
              className="text-[25px] sm:text-[30px] text-black select-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              {brand.symbol}
            </span>
          )}
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <div className="hidden md:flex items-center text-[23px] text-black">
          {navItems.map((item, index) => (
            <span key={item.label} className="inline-flex items-center">
              <a
                href={item.href}
                className="hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA (right, hidden below md) */}
        <a
          href={cta.href}
          className="hidden md:inline-block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          {cta.label}
        </a>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay (z-index: 9) */}
      <div
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMobileMenu}
            className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
          >
            {item.label}
          </a>
        ))}
        <a
          href={cta.href}
          onClick={closeMobileMenu}
          className="text-[32px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          {cta.label}
        </a>
      </div>
    </>
  );
}
