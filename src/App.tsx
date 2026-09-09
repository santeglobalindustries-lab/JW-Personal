import { useEffect, useState, type ReactNode } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  Facebook,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  X,
  Youtube,
} from 'lucide-react';
import { Router as WouterRouter, Route, Switch, useLocation } from 'wouter';

import doctorPortrait from '@/assets/WhatsApp_Image_2026-09-08_at_15.19.02_1788877913019.jpeg';
import doctorAtClinic from '@/assets/WhatsApp_Image_2026-09-08_at_15.18.55_1788877913019.jpeg';

const PHONE_DISPLAY = '+91 94227 37498';
const PHONE_LINK = '+919422737498';
const EMAIL = 'drjidnyasawani@gmail.com';
const CLINIC_EMAIL = 'govindhosptialdhule@gmail.com';
const ADDRESS = 'Govind Hospital, Shree Baba (Appa) Varade Doctor House, First Floor, 80 Feet Road, Parola Rd, opposite Parchi Medical, Dhule, Maharashtra 424001';
const DIRECTIONS_URL = 'https://maps.app.goo.gl/HUKWMfr4UUKZGCLA8';
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Govind+Hospital,+Parola+Rd,+Dhule,+Maharashtra+424001&ll=20.9010103,74.782386&z=17&output=embed';
const WHATSAPP_URL = `https://wa.me/${PHONE_LINK}?text=Hello%20Dr.%20Jidnyasa%2C%20I%20would%20like%20to%20know%20more%20about%20a%20consultation.`;
const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/drjidnyasawani/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593732345799', icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com/@Dr.JidnyasaWani', icon: Youtube },
];

const expertise = [
  { title: 'Diabetes & thyroid care', copy: 'Clear, practical plans for everyday control and long-term health.', icon: Activity },
  { title: 'Fever & infections', copy: 'Thoughtful assessment when symptoms are new, persistent or worrying.', icon: ShieldCheck },
  { title: 'Blood pressure & heart health', copy: 'Steady monitoring that helps families feel in control.', icon: HeartPulse },
  { title: 'Respiratory concerns', copy: 'Support for cough, asthma, breathlessness and seasonal illness.', icon: Sparkles },
  { title: 'Digestive health', copy: 'Kind, unhurried care for acidity, pain and changing digestion.', icon: Stethoscope },
  { title: 'Preventive medicine', copy: 'Health reviews designed around your life, not just a report.', icon: Check },
];

const facilities = [
  'Private consultation with time to listen',
  'Blood pressure, oxygen and vitals monitoring',
  'Nebulisation and first-line clinical support',
  'Guidance for investigations and specialist referrals',
  'Follow-up planning for chronic conditions',
  'A calm, family-friendly clinic environment',
];

const testimonials = [
  {
    quote: 'Dr. Jidnyasa listens without rushing. We left with a plan we could actually follow at home.',
    author: 'A patient’s family',
    detail: 'Consultation in Dhule',
  },
  {
    quote: 'Her explanations made my mother feel safe. The care was clinical, but always personal.',
    author: 'A grateful daughter',
    detail: 'Care for an older adult',
  },
  {
    quote: 'I finally understood what my reports meant and what to do next. That clarity made a big difference.',
    author: 'A patient',
    detail: 'Medicine consultation',
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${light ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--primary))]'}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </div>
  );
}

function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2" aria-label="Dr. Jidnyasa on social media">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Dr. Jidnyasa on ${label}`}
          className={`grid h-10 w-10 place-items-center rounded-full border transition-all hover:-translate-y-1 ${light ? 'border-[hsl(var(--primary-foreground)/.2)] text-[hsl(var(--primary-foreground)/.78)] hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]' : 'border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))]'}`}
          data-testid={`link-social-${label.toLowerCase()}`}
        >
          <Icon size={17} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell min-h-[100dvh] bg-[hsl(var(--background))]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10 lg:py-7">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--accent))] shadow-sm">
              <span className="font-display text-lg">J</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg text-[hsl(var(--primary))]">Dr. Jidnyasa</span>
              <span className="eyebrow mt-1 block text-[hsl(var(--muted-foreground))]">General Medicine</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {[
              ['about', 'About'],
              ['care', 'Expertise'],
              ['approach', 'Approach'],
              ['visit', 'Visit the clinic'],
            ].map(([href, label]) => (
              <a key={href} href={`#${href}`} className="nav-link text-sm font-medium text-[hsl(var(--foreground)/.76)] transition-colors hover:text-[hsl(var(--primary))]" data-testid={`link-nav-${href}`}>
                {label}
              </a>
            ))}
            <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-[0_12px_30px_hsl(var(--primary)/.16)] transition-transform hover:-translate-y-0.5" data-testid="link-nav-call">
              <Phone size={15} strokeWidth={2.5} /> Call the clinic
            </a>
          </nav>

          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-11 w-11 place-items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.72)] text-[hsl(var(--primary))] lg:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 shadow-[0_18px_60px_hsl(var(--primary)/.13)] lg:hidden" aria-label="Mobile navigation">
            {[
              ['about', 'About'],
              ['care', 'What I treat'],
              ['approach', 'My approach'],
              ['visit', 'Clinic details'],
            ].map(([href, label]) => (
              <a key={href} href={`#${href}`} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]" data-testid={`link-mobile-${href}`}>
                {label}<ArrowUpRight size={15} className="text-[hsl(var(--primary))]" />
              </a>
            ))}
            <a href={`tel:${PHONE_LINK}`} onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-4 py-3.5 text-sm font-bold text-[hsl(var(--primary-foreground))]" data-testid="link-mobile-call">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-20 pt-36 lg:min-h-[780px] lg:px-10 lg:pb-24 lg:pt-48">
          <div className="pointer-events-none absolute -right-24 -top-28 h-[520px] w-[520px] rounded-full border border-[hsl(var(--secondary))] opacity-70 lg:h-[760px] lg:w-[760px]" />
          <div className="pointer-events-none absolute right-24 top-28 h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_0_12px_hsl(var(--accent)/.12)]" />
          <div className="pointer-events-none absolute bottom-20 left-[9%] h-24 w-24 rounded-full border border-[hsl(var(--accent)/.28)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_470px] lg:gap-20">
            <div className="relative z-10">
              <div className="reveal">
                <SectionLabel>Care that starts with listening</SectionLabel>
              </div>
              <h1 className="reveal reveal-delay-1 text-balance mt-7 max-w-[720px] font-display text-[clamp(3.5rem,8vw,7rem)] leading-[.94] tracking-[-.055em] text-[hsl(var(--primary))]">
                Medicine, made <em className="font-display text-[hsl(var(--accent-foreground))]">human.</em>
              </h1>
               <p className="reveal reveal-delay-2 mt-7 max-w-[560px] text-lg leading-8 text-[hsl(var(--muted-foreground))] lg:text-xl">
                 Dr. Jidnyasa Joshi Wani is a General Medicine Specialist and the Owner &amp; Managing Physician of Govind Hospital, Dhule, offering thoughtful, evidence-led care for every stage of adult life.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-4 text-sm font-bold text-[hsl(var(--primary-foreground))] shadow-[0_16px_34px_hsl(var(--primary)/.18)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_hsl(var(--primary)/.24)]" data-testid="button-hero-call">
                  <Phone size={17} /> Call for an appointment
                </a>
                <a href="#visit" className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--primary)/.24)] bg-[hsl(var(--card)/.48)] px-6 py-4 text-sm font-bold text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--secondary))]" data-testid="link-hero-visit">
                  Find the clinic <ArrowDown size={17} />
                </a>
              </div>
              <div className="reveal reveal-delay-3 mt-10 flex items-center gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                <span className="flex -space-x-2" aria-hidden="true">
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[hsl(var(--background))] bg-[hsl(var(--secondary))] text-xs font-bold text-[hsl(var(--primary))]">P</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[hsl(var(--background))] bg-[hsl(var(--accent))] text-xs font-bold text-[hsl(var(--primary))]">F</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[hsl(var(--background))] bg-[hsl(var(--primary))] text-xs font-bold text-[hsl(var(--primary-foreground))]">C</span>
                </span>
                <span>Trusted by patients and families across Dhule</span>
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-[470px] lg:mt-4">
              <div className="portrait-breathe relative aspect-[.82] overflow-hidden rounded-[10rem_10rem_2rem_2rem] bg-[hsl(var(--primary))] shadow-[0_30px_80px_hsl(var(--primary)/.18)]">
                <div className="absolute inset-5 rounded-[9rem_9rem_1.25rem_1.25rem] border border-[hsl(var(--accent)/.4)]" />
                <div className="absolute -right-16 top-16 h-64 w-64 rounded-full bg-[hsl(var(--secondary)/.2)]" />
                <div className="absolute -left-28 bottom-10 h-72 w-72 rounded-full border border-[hsl(var(--accent)/.25)]" />
                <img src={doctorPortrait} alt="Dr. Jidnyasa Joshi Wani in her clinic" className="absolute inset-0 h-full w-full object-cover object-[center_22%] opacity-95" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[hsl(var(--primary)/.88)] via-[hsl(var(--primary)/.18)] to-transparent" />
                <div className="absolute inset-x-0 bottom-10 text-center text-[hsl(var(--primary-foreground))]">
                  <div className="font-display text-3xl">Dr. Jidnyasa Joshi Wani</div>
                  <div className="mt-2 text-xs uppercase tracking-[.24em] text-[hsl(var(--accent))]">MBBS · MD (Medicine)</div>
                </div>
                <div className="portrait-orbit absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[hsl(var(--accent)/.28)]" />
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 shadow-[0_16px_36px_hsl(var(--primary)/.12)] lg:-left-12">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"><ShieldCheck size={19} /></span>
                <span><span className="block text-xs font-bold text-[hsl(var(--primary))]">Evidence-led</span><span className="block text-xs text-[hsl(var(--muted-foreground))]">Personal attention</span></span>
              </div>
              <div className="absolute -right-2 top-10 grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--accent))] text-center text-[hsl(var(--accent-foreground))] shadow-[0_12px_30px_hsl(var(--accent)/.26)] lg:-right-7" aria-label="Specialist in General Medicine">
                <span className="font-mono-custom text-[9px] font-bold uppercase leading-3 tracking-tight">General<br />Medicine</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--card)/.62)]" aria-label="Practice highlights">
          <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-3 lg:px-10">
            {[
              ['01', 'MBBS · MD (Medicine)', 'Specialist training'],
              ['02', 'Dhule, Maharashtra', 'Care close to home'],
               ['03', 'Govind Hospital, Dhule', 'Owned & led by Dr. Jidnyasa'],
            ].map(([number, title, detail], index) => (
              <div key={number} className={`reveal flex items-center gap-4 border-[hsl(var(--border))] py-6 sm:py-7 ${index > 0 ? 'sm:border-l sm:pl-8 lg:pl-12' : ''} ${index < 2 ? 'border-b sm:border-b-0' : ''}`} data-testid={`text-highlight-${number}`}>
                <span className="font-mono-custom text-xs text-[hsl(var(--accent-foreground)/.72)]">{number}</span>
                <span><span className="block text-sm font-bold text-[hsl(var(--primary))]">{title}</span><span className="mt-1 block text-xs text-[hsl(var(--muted-foreground))]">{detail}</span></span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-20 px-5 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
            <div className="reveal">
              <SectionLabel>The physician behind the practice</SectionLabel>
              <h2 className="mt-6 max-w-md font-display text-5xl leading-[1.02] tracking-[-.045em] text-[hsl(var(--primary))] lg:text-6xl">Good medicine begins with a good conversation.</h2>
            </div>
            <div className="reveal reveal-delay-1 max-w-2xl">
               <p className="text-xl leading-9 text-[hsl(var(--foreground)/.8)]">As a General Medicine Specialist and the Owner &amp; Managing Physician of Govind Hospital, Dr. Jidnyasa brings together careful clinical reasoning and the kind of warmth that helps people ask the questions they were nervous to say out loud.</p>
              <p className="mt-6 leading-8 text-[hsl(var(--muted-foreground))]">Whether you are managing a long-term condition, feeling unwell today, or looking for a clear second opinion, the consultation is a space to understand what is happening and decide on the next step together.</p>
              <div className="mt-9 grid grid-cols-2 gap-4 border-t border-[hsl(var(--border))] pt-6">
                <div><div className="font-display text-3xl text-[hsl(var(--primary))]">MBBS</div><div className="mt-1 text-xs uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">Medical degree</div></div>
                <div><div className="font-display text-3xl text-[hsl(var(--primary))]">MD</div><div className="mt-1 text-xs uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">General Medicine</div></div>
              </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">Follow Dr. Jidnyasa</span>
                  <SocialLinks />
                </div>
            </div>
          </div>
        </section>

        <section id="care" className="scroll-mt-20 bg-[hsl(var(--primary))] px-5 py-24 text-[hsl(var(--primary-foreground))] lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div><SectionLabel light>What I can help with</SectionLabel><h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.02] tracking-[-.045em] lg:text-6xl">Expertise for the whole picture.</h2></div>
              <p className="max-w-sm leading-7 text-[hsl(var(--primary-foreground)/.67)]">From a first fever to years of diabetes care, every concern deserves context, not a rushed label.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[hsl(var(--primary-foreground)/.15)] bg-[hsl(var(--primary-foreground)/.15)] sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(({ title, copy, icon: Icon }, index) => (
                <article key={title} className={`reveal reveal-delay-${(index % 3) + 1} group bg-[hsl(var(--primary))] p-7 transition-colors hover:bg-[hsl(var(--primary-foreground)/.08)] lg:p-8`} data-testid={`card-expertise-${index}`}>
                  <div className="flex items-start justify-between"><Icon size={23} strokeWidth={1.5} className="text-[hsl(var(--accent))]" /><span className="font-mono-custom text-xs text-[hsl(var(--primary-foreground)/.35)]">0{index + 1}</span></div>
                  <h3 className="mt-10 font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[hsl(var(--primary-foreground)/.65)]">{copy}</p>
                  <div className="mt-7 h-px w-8 bg-[hsl(var(--accent))] transition-all group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-20 px-5 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-28">
            <div className="reveal order-2 lg:order-1">
              <SectionLabel>A different kind of consultation</SectionLabel>
              <h2 className="mt-6 max-w-xl font-display text-5xl leading-[1.02] tracking-[-.045em] text-[hsl(var(--primary))] lg:text-6xl">Clarity is part of the treatment.</h2>
              <div className="mt-12 space-y-8">
                {[
                  ['Listen first', 'Every visit begins by understanding the person, not just the symptom.'],
                  ['Explain simply', 'You will leave knowing what we found, why it matters and what happens next.'],
                  ['Stay with the plan', 'Follow-up is practical and personal, so care can keep pace with real life.'],
                ].map(([title, copy], index) => (
                  <div key={title} className="flex gap-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[hsl(var(--secondary))] font-mono-custom text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span><div><h3 className="font-display text-xl text-[hsl(var(--primary))]">{title}</h3><p className="mt-1 max-w-md text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy}</p></div></div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] bg-[hsl(var(--secondary))] p-7 lg:p-10">
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[hsl(var(--primary)/.14)]" />
                <div className="absolute bottom-7 right-8 text-[hsl(var(--primary)/.12)]"><HeartPulse size={120} strokeWidth={.7} /></div>
                <div className="relative">
                  <div className="font-mono-custom text-xs font-bold uppercase tracking-[.16em] text-[hsl(var(--primary)/.65)]">A note for patients</div>
                  <div className="mt-14 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-.045em] text-[hsl(var(--primary))]">“You should never feel like a number in your own healthcare.”</div>
                  <div className="mt-16 flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--primary))] font-display text-lg text-[hsl(var(--accent))]">J</div><div><div className="text-sm font-bold text-[hsl(var(--primary))]">Dr. Jidnyasa Joshi Wani</div><div className="text-xs text-[hsl(var(--primary)/.62)]">General Medicine Specialist</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(var(--secondary)/.55)] px-5 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-28">
             <div className="reveal"><SectionLabel>Govind Hospital · Dhule</SectionLabel><h2 className="mt-6 max-w-sm font-display text-5xl leading-[1.02] tracking-[-.045em] text-[hsl(var(--primary))]">A hospital shaped around thoughtful care.</h2><p className="mt-6 max-w-sm leading-7 text-[hsl(var(--muted-foreground))]">Owned and led by Dr. Jidnyasa, Govind Hospital brings dependable medical support and a welcoming environment together under one roof.</p><div className="mt-8 overflow-hidden rounded-[2rem] border border-[hsl(var(--primary)/.14)] bg-[hsl(var(--card))]"><img src={doctorAtClinic} alt="Dr. Jidnyasa Joshi Wani at Govind Hospital in Dhule" className="h-64 w-full object-cover object-[center_55%] sm:h-72" /></div></div>
            <div className="reveal reveal-delay-1 grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {facilities.map((facility, index) => <div key={facility} className="flex gap-4 border-b border-[hsl(var(--primary)/.14)] py-5"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--accent))]"><Check size={13} strokeWidth={3} /></span><span className="text-sm leading-6 text-[hsl(var(--foreground)/.76)]">{facility}</span></div>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex items-end justify-between gap-5"><div><SectionLabel>Words from patients</SectionLabel><h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-[-.045em] text-[hsl(var(--primary))] lg:text-6xl">Care people remember.</h2></div><div className="hidden h-px w-32 bg-[hsl(var(--accent))] sm:block" /></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => <figure key={testimonial.author} className={`reveal reveal-delay-${index + 1} flex min-h-[270px] flex-col justify-between rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 shadow-[0_12px_35px_hsl(var(--primary)/.04)] transition-transform hover:-translate-y-1`} data-testid={`card-testimonial-${index}`}><div><div className="font-display text-5xl leading-none text-[hsl(var(--accent-foreground)/.48)]">“</div><blockquote className="mt-3 text-lg leading-8 text-[hsl(var(--foreground)/.82)]">{testimonial.quote}</blockquote></div><figcaption className="border-t border-[hsl(var(--border))] pt-5"><div className="text-sm font-bold text-[hsl(var(--primary))]">{testimonial.author}</div><div className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{testimonial.detail}</div></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section id="visit" className="scroll-mt-20 bg-[hsl(var(--primary))] px-5 py-24 text-[hsl(var(--primary-foreground))] lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="reveal grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <div><SectionLabel light>Plan your visit</SectionLabel><h2 className="mt-6 max-w-md font-display text-5xl leading-[1.02] tracking-[-.045em] lg:text-6xl">Your next step can be simple.</h2><p className="mt-7 max-w-md leading-7 text-[hsl(var(--primary-foreground)/.68)]">Call the clinic to find a suitable time, or use the details below to plan your route.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={`tel:${PHONE_LINK}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-6 py-4 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-transform hover:-translate-y-1" data-testid="button-visit-call"><Phone size={17} /> {PHONE_DISPLAY}</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--primary-foreground)/.24)] px-6 py-4 text-sm font-bold text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary-foreground)/.1)]" data-testid="link-visit-whatsapp"><MessageCircle size={17} /> Message on WhatsApp</a></div></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-[hsl(var(--primary-foreground)/.15)] bg-[hsl(var(--primary-foreground)/.07)] sm:col-span-2" data-testid="map-clinic">
                  <div className="relative h-64 overflow-hidden bg-[hsl(var(--secondary)/.35)]">
                    <iframe title="Map showing Govind Hospital, Dhule" src={MAP_EMBED_URL} className="h-full w-full border-0 opacity-80 grayscale-[.35] contrast-[.9]" loading="lazy" />
                    <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--card))] px-4 py-3 text-xs font-bold text-[hsl(var(--primary))] shadow-lg transition-transform hover:-translate-y-0.5" data-testid="link-directions"><Compass size={15} /> Get directions <ArrowUpRight size={14} /></a>
                  </div>
                </div>
                <div className="rounded-3xl border border-[hsl(var(--primary-foreground)/.15)] p-6"><MapPin size={20} className="text-[hsl(var(--accent))]" /><div className="mt-6 text-xs uppercase tracking-[.14em] text-[hsl(var(--primary-foreground)/.52)]">Clinic location</div><address className="mt-2 not-italic leading-7 text-[hsl(var(--primary-foreground)/.9)]">{ADDRESS}</address></div>
                <div className="rounded-3xl border border-[hsl(var(--primary-foreground)/.15)] p-6"><Clock3 size={20} className="text-[hsl(var(--accent))]" /><div className="mt-6 text-xs uppercase tracking-[.14em] text-[hsl(var(--primary-foreground)/.52)]">Consultation hours</div><div className="mt-2 leading-7 text-[hsl(var(--primary-foreground)/.9)]">Monday – Saturday<br />10:00 am – 1:00 pm<br />5:00 pm – 8:00 pm</div></div>
              </div>
            </div>
             <div className="reveal mt-20 grid gap-7 border-t border-[hsl(var(--primary-foreground)/.15)] pt-7 sm:grid-cols-2 lg:grid-cols-4"><a href={`mailto:${EMAIL}`} className="flex min-w-0 items-center gap-3 break-all text-sm text-[hsl(var(--primary-foreground)/.78)] hover:text-[hsl(var(--accent))]" data-testid="link-email"><Mail size={17} className="shrink-0" /> {EMAIL}</a><a href={`mailto:${CLINIC_EMAIL}`} className="flex min-w-0 items-center gap-3 break-all text-sm text-[hsl(var(--primary-foreground)/.78)] hover:text-[hsl(var(--accent))]" data-testid="link-clinic-email"><Mail size={17} className="shrink-0" /> {CLINIC_EMAIL}</a><a href={`tel:${PHONE_LINK}`} className="flex items-center gap-3 text-sm text-[hsl(var(--primary-foreground)/.78)] hover:text-[hsl(var(--accent))]" data-testid="link-phone"><Phone size={17} /> {PHONE_DISPLAY}</a><div className="flex items-center gap-3 text-sm text-[hsl(var(--primary-foreground)/.78)]"><CalendarDays size={17} /> Appointments by phone</div></div>
          </div>
        </section>
      </main>

      <footer className="bg-[hsl(var(--primary))] px-5 pb-24 text-[hsl(var(--primary-foreground))] sm:pb-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 border-t border-[hsl(var(--primary-foreground)/.15)] pt-8 sm:flex-row sm:items-end">
           <div><div className="font-display text-2xl">Dr. Jidnyasa Joshi Wani</div><div className="mt-2 text-sm text-[hsl(var(--primary-foreground)/.58)]">MBBS, MD (Medicine) · Owner &amp; Managing Physician, Govind Hospital</div><div className="mt-5"><SocialLinks light /></div></div>
          <div className="text-left text-xs leading-6 text-[hsl(var(--primary-foreground)/.5)] sm:text-right">For appointments and clinic timings,<br />please call ahead.</div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showTop && <a href="#top" className="grid h-11 w-11 place-items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--primary))] shadow-[0_10px_25px_hsl(var(--primary)/.16)] transition-transform hover:-translate-y-1" aria-label="Back to top" data-testid="button-back-to-top"><ArrowUp size={17} /></a>}
        <a href={`tel:${PHONE_LINK}`} className="hidden h-14 items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-5 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-[0_14px_35px_hsl(var(--accent)/.3)] transition-transform hover:-translate-y-1 sm:flex" aria-label={`Call ${PHONE_DISPLAY}`} data-testid="button-floating-call"><Phone size={18} /> <span>Call the clinic</span></a>
      </div>
      <div className="mobile-action-bar fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[hsl(var(--border))] bg-[hsl(var(--card)/.96)] px-4 py-3 shadow-[0_-10px_30px_hsl(var(--primary)/.08)] backdrop-blur sm:hidden">
        <a href={`tel:${PHONE_LINK}`} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[hsl(var(--primary))] px-3 text-sm font-bold text-[hsl(var(--primary-foreground))]" aria-label={`Call ${PHONE_DISPLAY}`} data-testid="button-mobile-call"><Phone size={17} /> Call</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[hsl(var(--primary)/.18)] bg-[hsl(var(--secondary))] px-3 text-sm font-bold text-[hsl(var(--primary))]" aria-label="Message Dr. Jidnyasa on WhatsApp" data-testid="button-mobile-whatsapp"><MessageCircle size={17} /> WhatsApp</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;