import React, { useState } from 'react';
import {
  Eye,
  Heart,
  Bone,
  UserCheck,
  Scan,
  FlaskConical,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Building2,
  Microscope,
} from 'lucide-react';
import {
  ABOUT_PILLARS,
  CLINIC_INFO,
  SPECIALTIES,
  SpecialtyItem,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface AboutAndSpecialtiesProps {
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  onOpenBooking: (preselectService?: string) => void;
}

export const AboutAndSpecialties: React.FC<AboutAndSpecialtiesProps> = ({
  onSelectSpecialty,
  onOpenBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'consultas' | 'diagnosticos'>('todos');

  const filteredSpecialties = SPECIALTIES.filter((item) => {
    if (activeFilter === 'todos') return true;
    return item.category === activeFilter;
  });

  const renderSpecialtyIcon = (iconName: SpecialtyItem['iconName']) => {
    switch (iconName) {
      case 'eye':
        return <Eye className="w-5 h-5" />;
      case 'heart':
        return <Heart className="w-5 h-5" />;
      case 'bone':
        return <Bone className="w-5 h-5" />;
      case 'userCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'scan':
        return <Scan className="w-5 h-5" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5" />;
    }
  };

  const renderPillarIcon = (id: string) => {
    switch (id) {
      case 'atendimento':
        return <Stethoscope className="w-5 h-5" />;
      case 'exames':
        return <Microscope className="w-5 h-5" />;
      case 'especialidades':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* SECTION 3: SOBRE A CLÍNICA */}
      <section id="clinica" className="py-16 sm:py-24 bg-white border-b border-[#0C261E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#0C261E]/10 bg-[#F7FAF8]">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ResilientImage
                    src={CLINIC_INFO.images.about}
                    alt="Estrutura clínica moderna e equipe médica da Clínica Fisiomedi"
                    fallbackLabel="Estrutura Completa — Clínica Fisiomedi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 bg-[#F2F8F5] border-t border-[#0C261E]/8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-[#136F52]">
                      Compromisso com a sua saúde
                    </p>
                    <p className="text-sm font-semibold text-[#0B3B2D] mt-0.5">
                      “{CLINIC_INFO.tagline}”
                    </p>
                  </div>
                  <a
                    href="#contato"
                    className="text-xs font-semibold text-[#0F4C3A] hover:underline whitespace-nowrap shrink-0"
                  >
                    Falar conosco →
                  </a>
                </div>
              </div>
            </div>

            {/* Text & 4 Cards Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <span>Sobre a Clínica Fisiomedi</span>
                <span aria-hidden="true">·</span>
                <span>Cuidado integral</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight leading-tight max-w-xl">
                Uma clínica completa para cuidar de você
              </h2>

              <p className="text-base sm:text-lg text-[#2F4F44] leading-relaxed max-w-2xl">
                A Clínica Fisiomedi oferece atendimento em diferentes especialidades médicas e
                serviços de diagnóstico, proporcionando praticidade e cuidado em um só lugar.
              </p>

              {/* 4 Pillar Cards */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="p-5 rounded-xl bg-[#F7FAF8] border border-[#0C261E]/10 hover:border-[#136F52]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-lg bg-[#E6F4EF] text-[#0F4C3A] flex items-center justify-center">
                        {renderPillarIcon(pillar.id)}
                      </span>
                      <span className="font-mono-tabular text-xs text-[#3D5A50]">
                        {pillar.number}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#0B3B2D]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3D5A50] mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ESPECIALIDADES */}
      <section id="especialidades" className="py-16 sm:py-24 bg-[#F7FAF8] border-b border-[#0C261E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Interactive Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <span>Áreas de Atuação</span>
                <span aria-hidden="true">·</span>
                <span>Corpo clínico e diagnóstico</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight">
                Especialidades e atendimentos
              </h2>
              <p className="text-sm sm:text-base text-[#2F4F44] max-w-xl">
                Conheça as especialidades médicas e os serviços de apoio diagnóstico disponíveis na
                Clínica Fisiomedi.
              </p>
            </div>

            {/* Functional Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filtrar especialidades por categoria"
              className="inline-flex items-center gap-1 p-1 bg-[#E6F0EC] rounded-xl self-start md:self-auto"
            >
              {[
                { id: 'todos', label: 'Todas (6)' },
                { id: 'consultas', label: 'Consultas Médicas (4)' },
                { id: 'diagnosticos', label: 'Imagem e Laboratório (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === tab.id}
                  onClick={() => setActiveFilter(tab.id as 'todos' | 'consultas' | 'diagnosticos')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-white text-[#0B3B2D] shadow-xs'
                      : 'text-[#2F4F44] hover:text-[#0B3B2D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((specialty) => (
              <article
                key={specialty.id}
                className="group bg-white rounded-2xl p-6 border border-[#0C261E]/10 hover:border-[#136F52]/50 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#E6F4EF] text-[#0F4C3A] group-hover:bg-[#136F52] group-hover:text-white transition-colors duration-150 flex items-center justify-center">
                      {renderSpecialtyIcon(specialty.iconName)}
                    </div>
                    <span className="font-mono-tabular text-xs text-[#3D5A50]">
                      {specialty.number} · {specialty.category === 'consultas' ? 'Consulta' : 'Diagnóstico'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#0B3B2D]">
                    {specialty.name}
                  </h3>

                  <p className="text-sm text-[#2F4F44] mt-2 leading-relaxed">
                    {specialty.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0C261E]/8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectSpecialty(specialty)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#136F52] hover:text-[#0B3B2D] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(specialty.name)}
                    className="py-1.5 px-3 rounded-lg bg-[#F0F7F4] hover:bg-[#E0EFE9] text-xs font-semibold text-[#0B3B2D] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Agendar
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
