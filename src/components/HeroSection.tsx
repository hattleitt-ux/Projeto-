import React from 'react';
import { Calendar, ArrowDownRight, Phone, Check } from 'lucide-react';
import { CLINIC_INFO, TRUST_INDICATORS } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenBooking: (preselectService?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#EDF7F2] via-[#F7FAF8] to-[#F7FAF8] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#0C261E]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#136F52]">
              <span>Clínica Médica e Diagnósticos</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2F4F44]">{CLINIC_INFO.tagline}</span>
            </div>

            {/* Dominant Display Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-[#0B3B2D] leading-[1.12] max-w-2xl">
              <span className="block text-[#136F52]">Fisiomedi</span>
              Cuidando da sua saúde por completo.
            </h1>

            {/* Concrete Value Subtitle */}
            <p className="text-base sm:text-lg text-[#2F4F44] leading-relaxed max-w-xl">
              {CLINIC_INFO.heroSubtitle} Consultas especializadas, exames cardiológicos,
              ultrassonografia, análises laboratoriais e atendimento humanizado para você e sua família.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] active:scale-[0.99] text-white text-sm sm:text-base font-semibold shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136F52]"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Agendar consulta
              </button>

              <a
                href="#clinica"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white hover:bg-[#E6F4EF]/70 text-[#0B3B2D] border border-[#0C261E]/15 text-sm sm:text-base font-semibold transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136F52]"
              >
                Conheça a clínica
                <ArrowDownRight className="w-4 h-4 text-[#136F52] shrink-0" />
              </a>
            </div>

            {/* Trust Indicators Grid */}
            <div className="pt-6 border-t border-[#0C261E]/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_INDICATORS.map((indicator) => (
                <div key={indicator} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="w-4 h-4 rounded-full bg-[#D9EFE6] text-[#0F4C3A] flex items-center justify-center shrink-0 mt-0.5"
                  >
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1F3A31] leading-snug">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#0C261E]/10 bg-white shadow-md">
              <div className="aspect-16/10 sm:aspect-16/9 lg:aspect-4/3 w-full overflow-hidden">
                <ResilientImage
                  src={CLINIC_INFO.images.hero}
                  alt="Atendimento médico humanizado em consultório moderno da Clínica Fisiomedi"
                  fallbackLabel="Clínica Fisiomedi — Saúde e Especialidades"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Measured Scrim Overlay at Bottom of Image */}
              <div className="bg-[#0B3B2D] text-white px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-[#A7E8CE] font-medium">
                    Central de Atendimento e Agendamentos
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Consultas médicas e exames em um só lugar
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono-tabular font-semibold text-[#0B3B2D] bg-[#A7E8CE] hover:bg-white px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
