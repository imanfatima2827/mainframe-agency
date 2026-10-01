import { FormEvent, useEffect, useState } from 'react';
import { InquiryType, StudioLocation } from '../types/agency';

export interface ContactSectionProps {
  activeInquiryType: InquiryType;
  prefilledSubject: string;
  locations: StudioLocation[];
  onSelectInquiryType: (type: InquiryType) => void;
}

const INQUIRY_TABS: { id: InquiryType; label: string }[] = [
  { id: 'pitch', label: 'Pitch a Project' },
  { id: 'hello', label: 'Brief Hello' },
  { id: 'career', label: 'Role Application' },
  { id: 'edition', label: 'Reserve Edition' },
];

export function ContactSection({
  activeInquiryType,
  prefilledSubject,
  locations,
  onSelectInquiryType,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [budget, setBudget] = useState('$150k – $300k');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setMessage((prev) =>
        prev.includes(prefilledSubject)
          ? prev
          : `Regarding: ${prefilledSubject}\n\n${prev}`.trim()
      );
      setSubmitted(false);
    }
  }, [prefilledSubject]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid work or personal email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please include a brief note or project overview.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative z-[2] bg-[#e4e4e4] text-[#0a0a0a] border-t border-black/10 py-24 sm:py-32 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact & Studio Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <p className="text-[13px] text-neutral-500 mb-3">
              Initiate Dialogue · Direct Response within 24 Hours
            </p>
            <h2
              className="text-[28px] sm:text-[36px] leading-[1.15] tracking-tight text-black mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                textWrap: 'balance',
              }}
            >
              Tell A.R.I.A. and our partners what we are building together.
            </h2>
            <p className="text-[15px] leading-[1.6] text-neutral-700 max-w-[50ch]">
              We take on four new foundational partnerships per quarter. Direct
              electronic mail is always welcome at{' '}
              <a
                href="mailto:hello@mainframe.co"
                className="text-black underline underline-offset-4"
              >
                hello@mainframe.co
              </a>
              .
            </p>
          </div>

          <div className="space-y-6 border-t border-black/10 pt-8">
            <p className="text-[12px] text-neutral-500">Studio Coordinates</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
              {locations.map((loc) => (
                <div key={loc.city} className="text-[14px]">
                  <div className="flex items-center gap-2 text-black font-medium">
                    <span>{loc.city}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-[12px] text-neutral-500 tabular-nums">
                      {loc.timezone}
                    </span>
                  </div>
                  <p className="text-neutral-600 mt-0.5">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Validated Brief Builder */}
        <div className="lg:col-span-7 bg-white border border-black/10 p-6 sm:p-10">
          {/* Segmented Inquiry Mode Selector */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-100 rounded-lg mb-8">
            {INQUIRY_TABS.map((tab) => {
              const active = activeInquiryType === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onSelectInquiryType(tab.id);
                    setSubmitted(false);
                  }}
                  className={`px-3.5 py-2 text-[13px] rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-black text-white font-medium'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {submitted ? (
            <div className="py-12 px-6 border border-black/10 bg-[#f0f0f0]">
              <p className="text-[12px] text-neutral-500 mb-2">
                Transmission Confirmed · Reference #MF-2026
              </p>
              <h3
                className="text-[24px] tracking-tight text-black mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Thank you, {name}. Your brief is with our partners.
              </h3>
              <p className="text-[15px] text-neutral-700 mb-6 max-w-[55ch]">
                A managing partner in New York or Zurich will respond to{' '}
                <span className="text-black underline">{email}</span> within one
                business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="px-5 py-2.5 bg-black text-white text-[13px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[13px] text-neutral-600 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 bg-[#f0f0f0] border border-black/15 text-[15px] text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] text-neutral-600 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@analytical.engine"
                    className="w-full px-4 py-3 bg-[#f0f0f0] border border-black/15 text-[15px] text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {activeInquiryType === 'pitch' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-org"
                      className="block text-[13px] text-neutral-600 mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Acme Robotics"
                      className="w-full px-4 py-3 bg-[#f0f0f0] border border-black/15 text-[15px] text-black focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-[13px] text-neutral-600 mb-2"
                    >
                      Estimated Allocation (USD)
                    </label>
                    <select
                      id="contact-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 bg-[#f0f0f0] border border-black/15 text-[15px] text-black focus:outline-none focus:border-black tabular-nums"
                    >
                      <option value="$75k – $150k">$75k – $150k</option>
                      <option value="$150k – $300k">$150k – $300k</option>
                      <option value="$300k – $500k+">$300k – $500k+</option>
                      <option value="Multi-Quarter Retainer">
                        Multi-Quarter Retainer
                      </option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[13px] text-neutral-600 mb-2"
                >
                  {activeInquiryType === 'pitch'
                    ? 'Project Scope, Timeline & Objectives *'
                    : activeInquiryType === 'career'
                      ? 'Portfolio URL & Role Interest *'
                      : activeInquiryType === 'edition'
                        ? 'Edition Selection & Shipping Destination *'
                        : 'Your Message *'}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share context, target launch dates, or links..."
                  className="w-full px-4 py-3 bg-[#f0f0f0] border border-black/15 text-[15px] text-black focus:outline-none focus:border-black resize-y"
                />
              </div>

              {error && (
                <p role="alert" className="text-[13px] text-red-700">
                  {error}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="text-[12px] text-neutral-500">
                  Protected under mutual NDA upon request.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white text-[14px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {activeInquiryType === 'pitch'
                    ? 'Schedule Discovery Call'
                    : 'Transmit Dispatch →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
