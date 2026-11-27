import { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  GitBranch,
  Globe,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import type { CelestialBodyId } from './SolarSystemView';
import { IndonesiaSubjectView } from './IndonesiaSubjectView';

interface BlankPageProps {
  bodyId: CelestialBodyId;
  onBackToSolar: () => void;
  onBackToLanding: () => void;
}

export const BODY_SUBJECT_TITLES: Record<CelestialBodyId, string> = {
  sun: 'PAI',
  mercury: 'PKN',
  venus: 'B. Indonesia',
  earth: 'B. Inggris',
  mars: 'Matematika',
  ceres: 'IPS',
  jupiter: 'IPA',
  saturn: 'PJOK',
  uranus: 'Seni Budaya',
  neptune: 'B. Sunda',
  pluto: 'Informatika',
  haumea: 'Leadership',
  makemake: 'GE',
  eris: 'BK',
};

const BIODATA_CARDS = [
  {
    icon: GitBranch,
    title: 'Kelas: 9D',
    description: '',
  },
  {
    icon: BarChart3,
    title: 'Wali kelas: Saudia Nurbaity Suhendi S.Pd',
    description: '',
  },
  {
    icon: Users,
    title: 'Nama: Riffat Zaki Arrabani',
    description: '',
  },
  {
    icon: Zap,
    title: 'Tanggal lahir: 5 Juli 2011',
    description: '',
  },
  {
    icon: ShieldCheck,
    title: 'Alamat: jl. Sigma No 10 Cigadung, Bandung',
    description: '',
  },
  {
    icon: Globe,
    title: 'Hobby: Basket, Robotik',
    description: '',
  },
];

const PIPELINE_BARS = [58, 88, 42, 96, 74, 62];

const PIPELINE_STAGES = [
  { label: 'New leads', percent: 88 },
  { label: 'Qualified', percent: 68 },
  { label: 'In negotiation', percent: 44 },
  { label: 'Closed won', percent: 58 },
];

export function BlankPage({ bodyId, onBackToSolar, onBackToLanding }: BlankPageProps) {
  const title = BODY_SUBJECT_TITLES[bodyId];

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = `${title} — Me and My Milestone | Riffat Zaki Arrabani`;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBackToSolar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.title = prevTitle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [title, onBackToSolar]);

  if (bodyId === 'venus') {
    return (
      <IndonesiaSubjectView
        onBackToSolar={onBackToSolar}
        onBackToLanding={onBackToLanding}
      />
    );
  }

  return (
    <div
      data-blank-page={bodyId}
      className="relative z-10 w-full pointer-events-none"
      role="region"
      aria-label={title}
    >
      {/* Top Bar (3-zone contract) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#03050c]/85 border-b border-white/[0.06] pointer-events-auto">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={onBackToLanding}
            className="inline-flex items-center gap-2.5 text-slate-50 font-bold text-lg tracking-tight whitespace-nowrap shrink-0 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 fill-emerald-400"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <polygon points="50,12 90,85 10,85" />
            </svg>
            <span>Ascend</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a
              href="#subject-biodata"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Biodata
            </a>
            <a
              href="#subject-momentum"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Progress
            </a>
            <button
              type="button"
              onClick={onBackToSolar}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Solar System
            </button>
            <button
              type="button"
              onClick={onBackToLanding}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Main Page
            </button>
          </nav>

          <button
            type="button"
            onClick={onBackToSolar}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 text-white text-sm font-semibold hover:bg-white/[0.15] hover:border-white/30 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-start pt-36 md:pt-40 text-center relative"
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h1
            className="text-4xl sm:text-6xl md:text-[4.6rem] font-extrabold leading-[1.06] tracking-[-0.035em] mb-6 max-w-4xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            <span className="bg-gradient-to-br from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-100/75 max-w-[600px] mx-auto mb-10 leading-relaxed">
            Me N My Milestone · Riffat Zaki Arrabani
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              type="button"
              onClick={onBackToSolar}
              className="pointer-events-auto w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-emerald-950 font-bold text-sm shadow-[0_0_28px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.65)] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Solar System</span>
            </button>

            <a
              href="#subject-biodata"
              className="pointer-events-auto w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/75 border border-white/15 text-white font-semibold text-sm hover:bg-slate-800/85 hover:border-white/30 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <span>View Details</span>
            </a>
          </div>
        </div>

        <div className="h-[36vh] w-full" aria-hidden="true" />
      </section>

      {/* Spacer Strip matching main page */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <p className="font-mono-tabular text-xs tracking-[0.18em] uppercase text-white/45 mb-8">
            {title}
          </p>
        </div>
      </section>

      {/* Identitas Kelas & Biodata Grid */}
      <section id="subject-biodata" className="min-h-screen py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
            <div>
              <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] uppercase text-emerald-300 mb-3">
                {title}
              </p>
              <h2
                className="text-3xl md:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5 max-w-xl"
                style={{ textWrap: 'balance' }}
              >
                Identitas Kelas &amp; Biodata
              </h2>
              <p className="text-base md:text-lg text-slate-100/70 max-w-xl leading-relaxed">
                Biodata
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {BIODATA_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="pointer-events-auto text-left bg-[#0d1424]/80 border border-white/10 rounded-2xl p-7"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/12 border border-emerald-400/25 flex items-center justify-center text-emerald-300 mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    {card.description && (
                      <p className="text-sm text-slate-100/65 leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Momentum & Progress Section */}
      <section id="subject-momentum" className="min-h-screen py-24 md:py-32 flex items-center">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] uppercase text-emerald-300 mb-3">
                {title}
              </p>
              <h2
                className="text-3xl md:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5 max-w-xl"
                style={{ textWrap: 'balance' }}
              >
                See the whole funnel move in real time
              </h2>
              <p className="text-base md:text-lg text-slate-100/70 max-w-xl leading-relaxed mb-8">
                Every stage, every signal, every milestone — rendered live for {title}.
              </p>

              <button
                type="button"
                onClick={onBackToSolar}
                className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-emerald-950 font-bold text-sm shadow-[0_0_28px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.65)] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-300"
              >
                <span>Back to Solar System</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap gap-10 mt-12">
                <div>
                  <div className="text-4xl font-extrabold text-white font-mono-tabular">3.4x</div>
                  <div className="text-xs text-white/55 max-w-[140px] mt-1">
                    Faster pipeline velocity
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white font-mono-tabular">92%</div>
                  <div className="text-xs text-white/55 max-w-[140px] mt-1">
                    Lead capture accuracy
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white font-mono-tabular">11k+</div>
                  <div className="text-xs text-white/55 max-w-[140px] mt-1">
                    Automated daily actions
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-auto text-left w-full bg-[#0d1424]/85 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-7">
                <span className="text-base font-bold text-white">{title} · Q3</span>
                <span className="font-mono-tabular text-xs font-semibold text-emerald-400">
                  Live
                </span>
              </div>

              <div className="flex items-end justify-between h-28 px-2 mb-8 border-b border-white/[0.08] gap-3">
                {PIPELINE_BARS.map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-t-md bg-gradient-to-b from-emerald-400 to-emerald-600 opacity-85 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {PIPELINE_STAGES.map((stage) => (
                  <div key={stage.label} className="flex items-center gap-5 text-sm">
                    <span className="text-white/70 min-w-[110px]">{stage.label}</span>
                    <div className="flex-1 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                        style={{ width: `${stage.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="min-h-[85vh] flex items-center py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 w-full flex justify-start">
          <div className="pointer-events-auto bg-[#0d1424]/85 border border-white/12 rounded-3xl p-10 md:p-14 max-w-[680px] w-full text-center shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]">
            <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] uppercase text-emerald-300 mb-3">
              {title}
            </p>
            <h2
              className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5"
              style={{ textWrap: 'balance' }}
            >
              Put your growth on a new trajectory
            </h2>
            <p className="text-base text-slate-100/70 leading-relaxed mb-9 max-w-lg mx-auto">
              Me N My Milestone — {title} · Riffat Zaki Arrabani.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onBackToSolar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-emerald-950 font-bold text-sm shadow-[0_0_28px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.65)] hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Solar System</span>
              </button>

              <button
                type="button"
                onClick={onBackToLanding}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/75 border border-white/15 text-white font-semibold text-sm hover:bg-slate-800/85 hover:border-white/30 hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-400"
              >
                <span>Main Page</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-white/[0.06] bg-[#010206]/90 py-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToLanding}
            className="pointer-events-auto inline-flex items-center gap-2.5 text-slate-50 font-bold text-lg tracking-tight whitespace-nowrap shrink-0 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 fill-emerald-400"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <polygon points="50,12 90,85 10,85" />
            </svg>
            <span>Ascend</span>
          </button>

          <div className="text-xs text-slate-500">
            © 2026 Ascend Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
