import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, CheckCircle2, Calendar } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES, EXAMS, buildWhatsAppUrl } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  ...SPECIALTIES.map((s) => ({ label: `Consulta — ${s.name}`, value: s.name })),
  ...EXAMS.map((e) => ({ label: `Exame — ${e.name}`, value: e.name })),
  { label: 'Outro atendimento médico / Dúvida', value: 'Outro atendimento médico' },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService = '',
  onClose,
}) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Oftalmologia');
  const [preferredPeriod, setPreferredPeriod] = useState<'Manhã' | 'Tarde' | 'Qualquer horário'>('Manhã');
  const [attendanceType, setAttendanceType] = useState<'Particular' | 'Convênio'>('Particular');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
    setSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const formattedWhatsAppMessage = [
    `Olá, equipe da *Clínica Fisiomedi*! Gostaria de solicitar um agendamento:`,
    ``,
    `• *Procedimento/Especialidade:* ${selectedService}`,
    patientName.trim() ? `• *Paciente:* ${patientName.trim()}` : null,
    patientPhone.trim() ? `• *Telefone:* ${patientPhone.trim()}` : null,
    `• *Período de preferência:* ${preferredPeriod}`,
    `• *Modalidade:* ${attendanceType}`,
    notes.trim() ? `• *Observações:* ${notes.trim()}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppUrl(formattedWhatsAppMessage);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071C15]/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#0C261E]/10 shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#0F4C3A] text-white px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#A7E8CE] font-medium">
              Clínica Fisiomedi · Atendimento e Exames
            </p>
            <h2 id="booking-modal-title" className="font-display text-xl font-semibold mt-0.5">
              Agendar consulta ou exame
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de agendamento"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#E6F4EF] text-[#136F52] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#0C261E]">
              Solicitação pronta para envio!
            </h3>
            <p className="text-sm text-[#3D5A50] mt-2 max-w-md mx-auto leading-relaxed">
              Preparamos os dados do seu agendamento para <strong>{selectedService}</strong>.
              Escolha abaixo se prefere concluir diretamente no WhatsApp da clínica ou ligar para nossa recepção.
            </p>

            <div className="mt-6 bg-[#F7FAF8] border border-[#0C261E]/10 rounded-xl p-4 text-left text-xs text-[#2F4F44] space-y-1">
              <p>
                <strong>Especialidade / Exame:</strong> {selectedService}
              </p>
              {patientName && (
                <p>
                  <strong>Paciente:</strong> {patientName}
                </p>
              )}
              {patientPhone && (
                <p>
                  <strong>Telefone:</strong> {patientPhone}
                </p>
              )}
              <p>
                <strong>Preferência:</strong> {preferredPeriod} · {attendanceType}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar pelo WhatsApp
              </a>
              <a
                href={CLINIC_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#0C261E]/15 hover:bg-[#F7FAF8] text-[#0C261E] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#136F52]" />
                Ligar {CLINIC_INFO.phoneDisplay}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs text-[#3D5A50] hover:text-[#0C261E] underline cursor-pointer"
            >
              Editar informações do agendamento
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
              <label
                htmlFor="booking-service"
                className="block text-xs font-semibold text-[#0C261E] mb-1.5"
              >
                Especialidade ou exame desejado
              </label>
              <select
                id="booking-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.label} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-semibold text-[#0C261E] mb-1.5"
                >
                  Seu nome completo
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ex.: Maria Aparecida Silva"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-xs font-semibold text-[#0C261E] mb-1.5"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="(62) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] font-mono-tabular focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-semibold text-[#0C261E] mb-1.5">
                  Período de preferência
                </span>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F0F6F3] rounded-xl">
                  {(['Manhã', 'Tarde', 'Qualquer horário'] as const).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setPreferredPeriod(period)}
                      className={`py-1.5 px-2 text-xs font-medium rounded-lg transition-colors cursor-pointer truncate ${
                        preferredPeriod === period
                          ? 'bg-white text-[#0B3B2D] shadow-xs font-semibold'
                          : 'text-[#3D5A50] hover:text-[#0C261E]'
                      }`}
                    >
                      {period === 'Qualquer horário' ? 'Flexível' : period}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-[#0C261E] mb-1.5">
                  Tipo de atendimento
                </span>
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F0F6F3] rounded-xl">
                  {(['Particular', 'Convênio'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAttendanceType(type)}
                      className={`py-1.5 px-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        attendanceType === type
                          ? 'bg-white text-[#0B3B2D] shadow-xs font-semibold'
                          : 'text-[#3D5A50] hover:text-[#0C261E]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-notes"
                className="block text-xs font-semibold text-[#0C261E] mb-1.5"
              >
                Observações (opcional)
              </label>
              <textarea
                id="booking-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Informe se possui pedido médico em mãos ou preferência de dia da semana."
                className="w-full px-3.5 py-2 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                Preparar agendamento
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E6F4EF] hover:bg-[#D4ECE3] text-[#0B3B2D] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#136F52]" />
                Ir direto ao WhatsApp
              </a>
            </div>

            <div className="pt-2 border-t border-[#0C261E]/10 flex items-center justify-between text-xs text-[#3D5A50]">
              <span>Prefere falar por telefone?</span>
              <a
                href={CLINIC_INFO.phoneTel}
                className="font-mono-tabular font-semibold text-[#0F4C3A] hover:underline"
              >
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
