import { SiteConfig } from '../types/agency';

// Resolves files in /public correctly in dev, production, and sub-path deployments.
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const SITE_CONFIG: SiteConfig = {
  brand: {
    name: 'Mainframe®',
    symbol: '✳︎',
    href: '#top',
  },
  navItems: [
    { label: 'Labs', href: '#labs' },
    { label: 'Studio', href: '#studio' },
    { label: 'Openings', href: '#openings' },
    { label: 'Shop', href: '#shop' },
  ],
  cta: {
    label: 'Get in touch',
    href: '#contact',
  },
  video: {
    src: asset('kling_20260929_VIDEO_animate_na_670_0.mp4'),
    fallbackSrc:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4',
    sensitivity: 0.8,
    objectPosition: '70% center',
  },
  hero: {
    introLines: [
      'Hey there, meet A.R.I.A,',
      "Mainframe's Adaptive Response Interface Agent",
    ],
    typewriter: {
      text: 'Glad you stopped in. Good taste tends to find us. Now, what are we building?',
      speed: 38,
      startDelay: 600,
    },
    pillsRevealDelay: 400,
    actions: [
      {
        id: 'pitch',
        label: 'Pitch us an idea',
        variant: 'solid',
        href: '#contact',
        inquiryType: 'pitch',
      },
      {
        id: 'work',
        label: 'Come work here',
        variant: 'solid',
        href: '#openings',
      },
      {
        id: 'hello',
        label: 'Send a brief hello',
        variant: 'solid',
        href: '#contact',
        inquiryType: 'hello',
      },
      {
        id: 'operate',
        label: 'See how we operate',
        variant: 'solid',
        href: '#studio',
      },
      {
        id: 'reach-us',
        label: 'Reach us: ',
        underlinedText: 'hello@mainframe.co',
        copyText: 'hello@mainframe.co',
        variant: 'outline',
      },
    ],
  },
  capabilities: [
    {
      index: '01',
      title: 'Brand Architecture & Spatial Design',
      description:
        'We build cohesive visual systems, custom display typography, and physical-digital retail environments for category-defining hardware and software companies.',
      deliverables: [
        'Identity Systems',
        'Bespoke Typefaces',
        'Industrial Packaging',
        'Exhibition Design',
      ],
      outcomeMetric: '3.4x Average Brand Recall Lift in Post-Launch Audits',
    },
    {
      index: '02',
      title: 'Interactive WebGL & Kinetic Engineering',
      description:
        'Frame-accurate 60fps product viewports, scrubbable cinema pipelines, and tactile web applications engineered with custom shaders and zero-bloat architectures.',
      deliverables: [
        'WebGL / Three.js Viewports',
        'Real-Time Configurators',
        'Design Systems',
        'Full-Stack Commerce',
      ],
      outcomeMetric: '+148% Median Session Duration Across Flagship Launches',
    },
    {
      index: '03',
      title: 'Adaptive Response Interfaces (A.R.I.A.)',
      description:
        'Task-specific conversational and multimodal interfaces that replace static navigation trees with context-aware workflows and real-time voice/gesture feedback.',
      deliverables: [
        'Agentic UI Workflows',
        'Multimodal Audio/Visual Systems',
        'Embedded OS Interfaces',
        'Latency Optimization',
      ],
      outcomeMetric: '-42% Time-to-Task Completion Across 2.8M Monthly Users',
    },
    {
      index: '04',
      title: 'Hardware Prototyping & Tactile Objects',
      description:
        'Bridging industrial CAD and embedded software to ship physical controllers, acoustic instruments, and limited-run collector editions.',
      deliverables: [
        'CNC Enclosure Prototyping',
        'Haptic Firmware',
        'Embedded OLED UI',
        'Small-Batch Manufacturing',
      ],
      outcomeMetric: '14 International Industrial & Digital Design Awards',
    },
  ],
  caseStudies: [
    {
      id: 'krono-field-synth',
      client: 'Krono Acoustics',
      title: 'Field Synthesizer & Spatial Audio Workstation',
      sector: 'Industrial Hardware & Embedded UI',
      year: '2026',
      impactMetric: '+184% Direct-to-Consumer Conversion in 90 Days',
      secondaryMetric: '$14.2M Pre-Order Pipeline Filled in 48 Hours',
      summary:
        'Unified the physical anodized aluminum enclosure language, embedded high-contrast waveform OS, and interactive 3D web launch experience for Krono’s flagship portable workstation.',
      challenge:
        'Krono needed to explain a deeply technical 16-track spatial audio engine online without overwhelming musicians or sacrificing the tactile allure of the milled aluminum hardware.',
      solution:
        'We engineered a browser-based interactive acoustic sandbox synced to frame-scrubbed studio photography, letting visitors patch real audio nodes directly inside the product landing page.',
      image: asset('assets/images/case_study_krono_audio_1790625452687.jpg'),
      aspectRatio: '16:9',
      featured: true,
      testimonial: {
        quote:
          'Mainframe erased the boundary between our physical instrument and our digital flagship. Pre-orders surpassed our 12-month forecast in a single weekend.',
        author: 'Soren Lindqvist',
        role: 'VP of Industrial Design',
        organization: 'Krono Acoustics Stockholm',
      },
    },
    {
      id: 'velox-gt-configurator',
      client: 'Velox Mobility',
      title: 'Direct-to-Collector Electric Coupe Telemetry & Reservation Platform',
      sector: 'Automotive & Spatial Web',
      year: '2026',
      impactMetric: '+112% Completed Bespoke Vehicle Specifications',
      secondaryMetric: '60fps Real-Time Raytraced Material Swapping',
      summary:
        'Designed the in-cabin instrument cluster typography and the web-based bespoke specification studio for the limited-production Velox GT-01.',
      challenge:
        'Traditional automotive configurators suffer from laggy renders and cluttered option trees that cause high-intent buyers to abandon mid-specification.',
      solution:
        'We built a progressive stream-rendered viewport paired with an editorial specification ledger that updates weight, range, and delivery dates in real time.',
      image: asset('assets/images/case_study_velox_mobility_1790625467667.jpg'),
      aspectRatio: '4:3',
      testimonial: {
        quote:
          'Every collector who reserved a GT-01 cited the specification studio as the moment the vehicle felt real to them.',
        author: 'Elena Vance',
        role: 'Chief Brand Officer',
        organization: 'Velox Mobility Zurich',
      },
    },
    {
      id: 'aura-titanium-optics',
      client: 'Aura Laboratories',
      title: 'Ultralight Titanium Heads-Up Eyewear Identity & OS',
      sector: 'Wearable Computing & Brand System',
      year: '2025',
      impactMetric: '98.4% Optical Legibility Score Across Ambient Light Tests',
      secondaryMetric: '2.1M Organic Launch Film Views in Week One',
      summary:
        'Crafted the micro-typographic waveguide interface, prescription fitting flow, and global editorial campaign for Aura’s 34-gram smart eyewear.',
      challenge:
        'Smart eyewear interfaces often feel intrusive and nerdy. Aura required an ambient typographic system that disappears until summoned by subtle head motion.',
      solution:
        'Created a custom single-stroke optical font and a peripheral glance architecture, accompanied by a virtual Pupillary Distance calibration tool in the browser.',
      image: asset('assets/images/case_study_aura_optics_1790625479417.jpg'),
      aspectRatio: '4:3',
      testimonial: {
        quote:
          'Mainframe brought luxury eyewear restraint to spatial computing. Our return rate dropped by 37% thanks to their optical fitting flow.',
        author: 'Kenji Takahashi',
        role: 'Co-Founder & Head of Product',
        organization: 'Aura Laboratories Tokyo',
      },
    },
  ],
  labs: [
    {
      id: 'lab-01',
      code: 'EXP.01',
      title: 'Tactile Frame-Scrubbing Video Codec Pipeline',
      category: 'Kinetic Systems',
      releaseDate: ' August 2026',
      latencyMetric: '4.2ms Mean Seek Latency',
      description:
        'Zero-jank keyframe interpolation algorithm that maps cursor velocity and touch inertia directly to high-bitrate video timelines without buffer stalls.',
      interactiveParamLabel: 'Scrub Inertia Damping',
      defaultParamValue: 80,
      paramUnit: '%',
    },
    {
      id: 'lab-02',
      code: 'EXP.02',
      title: 'A.R.I.A. Acoustic Prosody Synthesizer',
      category: 'Spatial Audio',
      releaseDate: 'July 2026',
      latencyMetric: '18ms Voice-to-Phoneme Sync',
      description:
        'Real-time harmonic UI feedback engine that generates subtle binaural room tones in response to cursor proximity and typographic focus.',
      interactiveParamLabel: 'Harmonic Resonance',
      defaultParamValue: 432,
      paramUnit: 'Hz',
    },
    {
      id: 'lab-03',
      code: 'EXP.03',
      title: 'Variable Optical-Compensation Font Shader',
      category: 'Autonomous UI',
      releaseDate: 'May 2026',
      latencyMetric: '120Hz Subpixel Rendering',
      description:
        'Dynamic glyph weight and tracking modulation that reads ambient background luminance under live video frames to preserve WCAG AAA contrast.',
      interactiveParamLabel: 'Optical Weight Offset',
      defaultParamValue: 14,
      paramUnit: 'pt',
    },
    {
      id: 'lab-04',
      code: 'EXP.04',
      title: 'Magnetic Detent Rotary Encoder Module',
      category: 'Hardware',
      releaseDate: 'March 2026',
      latencyMetric: '0.05° Angular Resolution',
      description:
        'Brushless hall-effect dial with programmable haptic detents over WebUSB, allowing web interfaces to dynamically change physical knob resistance.',
      interactiveParamLabel: 'Detent Torque Steps',
      defaultParamValue: 24,
      paramUnit: 'steps',
    },
  ],
  openings: [
    {
      id: 'role-creative-tech',
      title: 'Staff Creative Technologist (WebGL & Shaders)',
      discipline: 'Engineering',
      location: 'New York / Hybrid',
      type: 'Full-Time',
      compensation: '$195,000 – $235,000 + Studio Profit Share',
      summary:
        'Lead the architecture of real-time 3D product viewports, custom GLSL post-processing pipelines, and tactile physics interactions for flagship client launches.',
      responsibilities: [
        'Architect 60fps WebGL / WebGPU scenes with graceful mobile fallbacks',
        'Collaborate directly with industrial and motion designers from day one',
        'Publish open-source experiments and tooling through Mainframe Labs',
      ],
    },
    {
      id: 'role-design-director',
      title: 'Associate Design Director — Interactive Systems',
      discipline: 'Design',
      location: 'New York or Zurich',
      type: 'Full-Time',
      compensation: '$180,000 – $215,000 + Studio Profit Share',
      summary:
        'Guide multidisciplinary pods of 3–4 designers and engineers delivering end-to-end brand systems, embedded hardware interfaces, and digital flagships.',
      responsibilities: [
        'Own typographic direction, motion choreography, and spatial layout systems',
        'Partner with founder-level clients across consumer hardware, robotics, and AI',
        'Mentor senior designers and uphold zero-slop craft standards',
      ],
    },
    {
      id: 'role-industrial-designer',
      title: 'Senior Industrial & Packaging Designer',
      discipline: 'Hardware & Objects',
      location: 'Tokyo / Hybrid',
      type: 'Full-Time',
      compensation: '¥16,500,000 – ¥21,000,000 + Studio Profit Share',
      summary:
        'Shape physical enclosures, bespoke unboxing rituals, and Mainframe Shop limited-edition studio artifacts from CAD through DFM.',
      responsibilities: [
        'Develop CNC aluminum, molded pulp, and glass hardware prototypes',
        'Coordinate directly with precision fabrication partners in Japan and Europe',
        'Bridge physical CMF (Color, Material, Finish) with digital twin shaders',
      ],
    },
  ],
  shopEditions: [
    {
      id: 'edition-monograph',
      editionNumber: 'Edition 01',
      title: 'Mainframe® Archive Monograph (2021–2026)',
      subtitle: '412-page Swiss-bound linen volume with debossed aluminum slipcase',
      price: '$145',
      availability: 'In Stock · 84 of 500 Remaining',
      specs: '240 × 320 mm · Munken Polar Rough 150gsm · Printed in Zurich',
      image: asset('assets/images/studio_monograph_object_1790625490421.jpg'),
    },
    {
      id: 'edition-rotary-dial',
      editionNumber: 'Edition 02',
      title: 'MF-01 Programmable Haptic Desk Dial',
      subtitle: 'Bead-blasted 6061 aluminum WebUSB controller for timeline scrubbing',
      price: '$290',
      availability: 'Batch 03 Open · Ships in 14 Days',
      specs: '68mm Diameter · 420g Solid Billet · USB-C Braided Cable Included',
      image: asset('assets/images/case_study_krono_audio_1790625452687.jpg'),
    },
  ],
  locations: [
    {
      city: 'New York',
      address: '414 Broadway, Floor 6, SoHo, NY 10013',
      timezone: 'EST (UTC-5)',
    },
    {
      city: 'Zurich',
      address: 'Limmatstrasse 214, 8005 Zürich',
      timezone: 'CET (UTC+1)',
    },
    {
      city: 'Tokyo',
      address: '5-7-21 Minami-Aoyama, Minato-ku, Tokyo',
      timezone: 'JST (UTC+9)',
    },
  ],
};
