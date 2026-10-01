/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LabsSection } from './components/LabsSection';
import { Navbar } from './components/Navbar';
import { OpeningsSection } from './components/OpeningsSection';
import { ScrubbableVideoBackground } from './components/ScrubbableVideoBackground';
import { ShopSection } from './components/ShopSection';
import { StudioSection } from './components/StudioSection';
import { SITE_CONFIG } from './config/siteConfig';
import { InquiryType } from './types/agency';

export default function App() {
  const {
    brand,
    navItems,
    cta,
    video,
    hero,
    capabilities,
    caseStudies,
    labs,
    openings,
    shopEditions,
    locations,
  } = SITE_CONFIG;

  const [activeInquiryType, setActiveInquiryType] =
    useState<InquiryType>('pitch');
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');

  const scrollToContact = (type: InquiryType, subject = '') => {
    setActiveInquiryType(type);
    if (subject) {
      setPrefilledSubject(subject);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroActionSelect = (inquiryType?: InquiryType) => {
    if (inquiryType) {
      setActiveInquiryType(inquiryType);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Mouse-Scrubbed Background Video */}
      <ScrubbableVideoBackground {...video} />

      {/* Fixed Top Navigation */}
      <Navbar brand={brand} navItems={navItems} cta={cta} />

      {/* Full-Screen Interactive Hero Section */}
      <HeroSection {...hero} onActionSelect={handleHeroActionSelect} />

      {/* Studio Practice: Selected Case Studies & Core Capabilities */}
      <StudioSection
        capabilities={capabilities}
        caseStudies={caseStudies}
        onStartProject={(context) => scrollToContact('pitch', context)}
      />

      {/* Mainframe Labs: Applied R&D & Interactive Parameter Prototypes */}
      <LabsSection experiments={labs} />

      {/* Openings: Studio Culture & Live Positions */}
      <OpeningsSection
        openings={openings}
        onApplyForRole={(roleTitle) => scrollToContact('career', roleTitle)}
      />

      {/* Shop: Physical Editions & Studio Monographs */}
      <ShopSection
        editions={shopEditions}
        onReserveEdition={(editionTitle) =>
          scrollToContact('edition', editionTitle)
        }
      />

      {/* Interactive Brief Builder & Contact */}
      <ContactSection
        activeInquiryType={activeInquiryType}
        prefilledSubject={prefilledSubject}
        locations={locations}
        onSelectInquiryType={setActiveInquiryType}
      />

      {/* Quiet Editorial Footer */}
      <Footer brand={brand} navItems={navItems} />
    </div>
  );
}
