import React, { useState } from 'react';
import {
  Activity,
  Scan,
  FlaskConical,
  HeartPulse,
  ClipboardCheck,
  Calendar,
  Check,
  Eye,
  Heart,
  Plus,
  Edit3,
  MessageCircle,
} from 'lucide-react';
import {
  CLINIC_INFO,
  EXAMS,
  ExamItem,
  WHY_CHOOSE_BENEFITS,
  buildWhatsAppUrl,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface ExamsAndSpotlightsProps {
  onOpenBooking: (preselectService?: string) => void;
}

export const ExamsAndSpotlights: React.FC<ExamsAndSpotlightsProps> = ({
  onOpenBooking,
}) => {
  const [customConvenios, setCustomConvenios] = useState<string[]>([
    '[Inserir Convênio Parceiro 01]',
    '[Inserir Convênio Parceiro 02]',
    '[Inserir Convênio Parceiro 03]',
    '[Inserir Convênio Parceiro 04]',
  ]);
  const [editingConvenios, setEditingConvenios] = useState(false);
  const [newConvenioInput, setNewConvenioInput] = useState('');

  const renderExamIcon = (iconName: ExamItem['iconName']) => {
    switch (iconName) {
      case 'heartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'scan':
        return <Scan className="w-5 h-5" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5" />;
      case 'activity':
        return <Activity className="w-5 h-5" />;
      case 'clipboardCheck':
        return <ClipboardCheck className="w-5 h-5" />;
    }
  };

  const handleAddConvenio = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newConvenioInput.trim();
    if (!trimmed) return;
    setCustomConvenios((prev) => {
      const filtered = prev.filter((item) => !item.startsWith('[Inserir'));
      return [...filtered, trimmed];
    });
    setNewConvenioInput('');
  };

  return (
    <>
      {/* SECTION 5: EXAMES E DIAGNÓSTICOS */}
      <section id="exames" className="py-16 sm:py-24 bg-white border-b border-[#0C261E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <span>Centro de Diagnósticos</span>
                <span aria-hidden="true">·</span>
                <span>Precisão e agilidade</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight">
                Exames e diagnósticos
              </h2>
              <p className="text-sm sm:text-base text-[#2F4F44] max-w-xl">
                Realize seus exames complementares com conforto e tecnologia na própria clínica,
                facilitando o acompanhamento com o seu médico.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('Ecocardiograma')}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm font-semibold transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Agende seu exame
            </button>
          </div>

          {/* Asymmetric Bento Grid for 5 Exam Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {EXAMS.map((exam, index) => {
              const isFeatured = index === 0 || index === 1;
              const colSpanClass = isFeatured ? 'lg:col-span-3' : 'lg:col-span-2';

              return (
                <div
                  key={exam.id}
                  className={`${colSpanClass} rounded-2xl p-6 bg-[#F7FAF8] border border-[#0C261E]/10 hover:border-[#136F52]/40 transition-colors flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-[#E6F4EF] text-[#0F4C3A] flex items-center justify-center">
                        {renderExamIcon(exam.iconName)}
                      </span>
                      <span className="font-mono-tabular text-xs text-[#3D5A50]">
                        {exam.number} · Diagnóstico
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-[#0B3B2D]">
                      {exam.name}
                    </h3>

                    <p className="text-sm font-medium text-[#1F3A31] mt-2 leading-relaxed">
                      {exam.shortDescription}
                    </p>

                    <p className="text-xs sm:text-sm text-[#3D5A50] mt-2 leading-relaxed">
                      {exam.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#0C261E]/8 flex items-center justify-between gap-3">
                    <span className="text-xs text-[#3D5A50] truncate">
                      {exam.indication}
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(exam.name)}
                      className="text-xs font-semibold text-[#136F52] hover:text-[#0B3B2D] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Agendar →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Bar inside Exames */}
          <div className="mt-10 p-6 rounded-2xl bg-[#EDF7F2] border border-[#136F52]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm sm:text-base font-semibold text-[#0B3B2D]">
                Possui um pedido médico de exame?
              </p>
              <p className="text-xs sm:text-sm text-[#2F4F44] mt-0.5">
                Nossa equipe orienta você sobre o preparo necessário e os horários disponíveis.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking('Exames laboratoriais')}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Agende seu exame
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: OFTALMOLOGIA SPOTLIGHT */}
      <section
        id="oftalmologia"
        className="py-16 sm:py-24 bg-[#F7FAF8] border-b border-[#0C261E]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <Eye className="w-4 h-4" />
                <span>Destaque em Saúde Ocular</span>
                <span aria-hidden="true">·</span>
                <span>Oftalmologia</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight leading-tight">
                Cuide da saúde da sua visão
              </h2>

              <p className="text-base sm:text-lg text-[#2F4F44] leading-relaxed">
                Conte com atendimento oftalmológico especializado para avaliação e acompanhamento
                da sua saúde visual.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  'Consultas preventivas e avaliação detalhada da acuidade visual',
                  'Acompanhamento periódico para crianças, adultos e idosos',
                  'Atendimento cuidadoso com equipamentos oftalmológicos adequados',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9EFE6] text-[#0F4C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span className="text-sm sm:text-base text-[#1F3A31]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Oftalmologia')}
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  Agendar consulta com oftalmologista
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#0C261E]/10 bg-white shadow-sm">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ResilientImage
                    src={CLINIC_INFO.images.ophthalmology}
                    alt="Atendimento oftalmológico especializado na Clínica Fisiomedi"
                    fallbackLabel="Oftalmologia — Clínica Fisiomedi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-5 py-4 bg-white border-t border-[#0C261E]/8 flex items-center justify-between text-xs text-[#2F4F44]">
                  <span>Avaliação oftalmológica completa e preventiva</span>
                  <span className="font-semibold text-[#136F52]">Atendimento com hora marcada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ECOCARDIOGRAMA / CARDIOLOGIA SPOTLIGHT */}
      <section
        id="cardiologia"
        className="py-16 sm:py-24 bg-white border-b border-[#0C261E]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-[#0C261E]/10 bg-[#F7FAF8] shadow-sm">
                <div className="aspect-4/3 w-full overflow-hidden">
                  <ResilientImage
                    src={CLINIC_INFO.images.cardiology}
                    alt="Exame de ecocardiograma e avaliação cardiológica na Clínica Fisiomedi"
                    fallbackLabel="Cardiologia e Ecocardiograma — Clínica Fisiomedi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-5 py-4 bg-[#F7FAF8] border-t border-[#0C261E]/8 flex items-center justify-between text-xs text-[#2F4F44]">
                  <span>Ecocardiograma e consultas cardiológicas</span>
                  <span className="font-semibold text-[#136F52]">Diagnóstico seguro</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <Heart className="w-4 h-4" />
                <span>Cardiologia e Diagnóstico</span>
                <span aria-hidden="true">·</span>
                <span>Ecocardiograma</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight leading-tight">
                Cuide da saúde do seu coração
              </h2>

              <p className="text-base sm:text-lg text-[#2F4F44] leading-relaxed">
                Realize sua avaliação cardiológica com profissionais especializados e equipamentos
                adequados.
              </p>

              <div className="space-y-3 pt-1">
                {[
                  'Exame de Ecocardiograma realizado com precisão e conforto',
                  'Integração entre consulta cardiológica e exames diagnósticos',
                  'Prevenção, check-up cardiovascular e acompanhamento contínuo',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D9EFE6] text-[#0F4C3A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span className="text-sm sm:text-base text-[#1F3A31]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Ecocardiograma')}
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  Agendar exame
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: POR QUE ESCOLHER A FISIOMEDI */}
      <section
        id="diferenciais"
        className="py-16 sm:py-24 bg-[#F7FAF8] border-b border-[#0C261E]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
              <span>Diferenciais da Clínica</span>
              <span aria-hidden="true">·</span>
              <span>Por que escolher a Fisiomedi</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight">
              Por que escolher a Fisiomedi
            </h2>
            <p className="text-sm sm:text-base text-[#2F4F44]">
              Reunimos estrutura completa, equipe qualificada e agilidade para cuidar da sua saúde
              com tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {WHY_CHOOSE_BENEFITS.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-white rounded-2xl p-6 border border-[#0C261E]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#E6F4EF] text-[#136F52] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </span>
                    <span className="font-mono-tabular text-xs text-[#3D5A50]">
                      {benefit.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B3B2D]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D5A50] mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONVÊNIOS E ATENDIMENTO (Prepared placeholder slots without inventing data) */}
      <section id="convenios" className="py-16 sm:py-20 bg-white border-b border-[#0C261E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
                <span>Modalidades de Atendimento</span>
                <span aria-hidden="true">·</span>
                <span>Particular e Convênios</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B3B2D] tracking-tight">
                Convênios e formas de atendimento
              </h2>
              <p className="text-sm sm:text-base text-[#2F4F44]">
                Consulte a disponibilidade de atendimento pelo seu convênio ou condições especiais
                para consultas e exames particulares diretamente com nossa recepção.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setEditingConvenios((prev) => !prev)}
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl border border-[#0C261E]/15 hover:bg-[#F7FAF8] text-xs font-semibold text-[#0B3B2D] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#136F52]" />
                {editingConvenios ? 'Concluir edição de convênios' : 'Inserir convênios da clínica'}
              </button>

              <a
                href={buildWhatsAppUrl(
                  'Olá! Gostaria de consultar os convênios atendidos na Clínica Fisiomedi.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar meu convênio
              </a>
            </div>
          </div>

          {editingConvenios && (
            <form
              onSubmit={handleAddConvenio}
              className="mb-6 p-4 rounded-xl bg-[#EDF7F2] border border-[#136F52]/20 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
            >
              <input
                type="text"
                value={newConvenioInput}
                onChange={(e) => setNewConvenioInput(e.target.value)}
                placeholder="Digite o nome do convênio para adicionar à lista..."
                className="flex-1 px-3.5 py-2 rounded-lg bg-white border border-[#0C261E]/15 text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-[#0F4C3A] text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                Adicionar convênio
              </button>
            </form>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {customConvenios.map((item, idx) => {
              const isPlaceholder = item.startsWith('[Inserir');
              return (
                <div
                  key={`${item}-${idx}`}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                    isPlaceholder
                      ? 'border-dashed border-[#136F52]/35 bg-[#F7FAF8] text-[#3D5A50]'
                      : 'border-[#0C261E]/10 bg-white text-[#0B3B2D] font-semibold'
                  }`}
                >
                  <span className="text-xs sm:text-sm truncate">{item}</span>
                  <span className="text-[11px] font-mono-tabular text-[#136F52] shrink-0">
                    {isPlaceholder ? 'Campo editável' : 'Ativo'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
