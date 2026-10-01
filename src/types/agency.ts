import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BrandConfig {
  name: string;
  symbol?: string;
  href?: string;
}

export interface VideoScrubConfig {
  src: string;
  fallbackSrc?: string;
  sensitivity?: number;
  objectPosition?: string;
}

export type InquiryType = 'pitch' | 'hello' | 'career' | 'edition';

export interface ActionPillItem {
  id: string;
  label: string;
  variant?: 'solid' | 'outline';
  href?: string;
  copyText?: string;
  underlinedText?: string;
  inquiryType?: InquiryType;
  onClick?: () => void;
}

export interface TypewriterConfig {
  text: string;
  speed?: number;
  startDelay?: number;
}

export interface HeroContentConfig {
  introLines: [string, string] | string[];
  typewriter: TypewriterConfig;
  pillsRevealDelay?: number;
  actions: ActionPillItem[];
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  outcomeMetric: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  impactMetric: string;
  secondaryMetric: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  aspectRatio: '16:9' | '4:3';
  featured?: boolean;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
}

export interface LabExperiment {
  id: string;
  code: string;
  title: string;
  category: 'Spatial Audio' | 'Kinetic Systems' | 'Autonomous UI' | 'Hardware';
  releaseDate: string;
  latencyMetric: string;
  description: string;
  interactiveParamLabel: string;
  defaultParamValue: number;
  paramUnit: string;
}

export interface JobOpening {
  id: string;
  title: string;
  discipline: string;
  location: string;
  type: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
}

export interface ShopEditionItem {
  id: string;
  editionNumber: string;
  title: string;
  subtitle: string;
  price: string;
  availability: string;
  specs: string;
  image: string;
}

export interface StudioLocation {
  city: string;
  address: string;
  timezone: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  navItems: NavItem[];
  cta: NavItem;
  video: VideoScrubConfig;
  hero: HeroContentConfig;
  capabilities: CapabilityItem[];
  caseStudies: CaseStudyItem[];
  labs: LabExperiment[];
  openings: JobOpening[];
  shopEditions: ShopEditionItem[];
  locations: StudioLocation[];
}

export interface ActionPillProps {
  variant?: 'solid' | 'outline';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
