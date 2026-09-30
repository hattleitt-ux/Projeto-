import React from 'react';
import { X, Check, Calendar, Phone } from 'lucide-react';
import { SpecialtyItem, CLINIC_INFO } from '../data/clinicData';

interface SpecialtyModalProps {
  specialty: SpecialtyItem | null;
  onClose: () => void;
  onSchedule: (serviceName: string) => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  onSchedule,
}) => {
  if (!specialty) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071C15]/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#0C261E]/10 shadow-2xl overflow-hidden">
        <div className="bg-[#0F4C3A] text-white px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#A7E8CE] font-medium">
              Especialidades e Serviços · Clínica Fisiomedi
            </p>
            <h2
              id="specialty-modal-title"
              className="font-display text-2xl font-semibold mt-0.5"
            >
              {specialty.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes da especialidade"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-sm sm:text-base text-[#2F4F44] leading-relaxed">
            {specialty.fullDescription}
          </p>

          <div>
            <h3 className="text-xs font-semibold text-[#0B3B2D] mb-2.5">
              Destaques do atendimento na Fisiomedi
            </h3>
            <ul className="space-y-2">
              {specialty.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#2F4F44]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E6F4EF] text-[#136F52] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#F7FAF8] border border-[#0C261E]/10">
            <p className="text-xs font-semibold text-[#0B3B2D]">
              Orientação para o paciente
            </p>
            <p className="text-xs text-[#3D5A50] mt-1 leading-relaxed">
              {specialty.preparationNote}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                const name = specialty.name;
                onClose();
                onSchedule(name);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Agendar {specialty.name}
            </button>
            <a
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#0C261E]/15 hover:bg-[#F7FAF8] text-[#0C261E] text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#136F52]" />
              {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
