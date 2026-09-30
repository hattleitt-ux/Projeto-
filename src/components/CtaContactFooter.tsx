import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  Globe,
  MapPin,
  Send,
  CheckCircle2,
  Edit3,
} from 'lucide-react';
import { CLINIC_INFO, buildWhatsAppUrl } from '../data/clinicData';

export const CtaContactFooter: React.FC = () => {
  // Contact Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Prepared Address & Map State (No invented address, ready for owner insertion)
  const [customAddress, setCustomAddress] = useState('');
  const [customHours, setCustomHours] = useState('');
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      setFormError('Por favor, preencha todos os campos para enviar sua mensagem.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    setFormSubmitted(true);
  };

  const contactWhatsAppMessage = [
    `Olá, equipe da *Clínica Fisiomedi*! Enviei uma mensagem pelo site:`,
    ``,
    `• *Nome:* ${name.trim()}`,
    `• *Telefone:* ${phone.trim()}`,
    `• *E-mail:* ${email.trim()}`,
    `• *Mensagem:* ${message.trim()}`,
  ].join('\n');

  return (
    <>
      {/* SECTION 9: CTA / AGENDAMENTO (Destaque Verde) */}
      <section
        id="agendamento"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#0B3B2D] via-[#0F4C3A] to-[#136F52] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs sm:text-sm font-medium text-[#A7E8CE] tracking-wide">
                Clínica Fisiomedi · Atendimento Rápido
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Precisa de atendimento?
              </h2>
              <p className="text-base sm:text-lg text-emerald-50/90 leading-relaxed">
                Agende sua consulta ou exame com a Clínica Fisiomedi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Gostaria de agendar uma consulta ou exame com a Clínica Fisiomedi.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-white hover:bg-[#E6F4EF] text-[#0B3B2D] text-sm sm:text-base font-semibold shadow-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-[#136F52] shrink-0" />
                Agendar pelo WhatsApp
              </a>

              <a
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#082A20]/60 hover:bg-[#082A20] border border-white/25 text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap font-mono-tabular"
              >
                <Phone className="w-4 h-4 text-[#A7E8CE] shrink-0" />
                Ligar para {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTATO */}
      <section id="contato" className="py-16 sm:py-24 bg-[#F7FAF8] border-b border-[#0C261E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#136F52]">
              <span>Canais de Atendimento</span>
              <span aria-hidden="true">·</span>
              <span>Fale com a nossa equipe</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#0B3B2D] tracking-tight">
              Entre em contato
            </h2>
            <p className="text-sm sm:text-base text-[#2F4F44]">
              Tire suas dúvidas sobre especialidades, preparo de exames ou agendamentos pelos nossos
              canais oficiais ou envie uma mensagem pelo formulário.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Info + Prepared Address & Map Slot */}
            <div className="lg:col-span-5 space-y-6">
              {/* Official Contact Channels Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#0C261E]/10 space-y-5">
                <h3 className="font-display text-lg font-semibold text-[#0B3B2D]">
                  Informações de contato
                </h3>

                <div className="space-y-4">
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F7FAF8] transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#E6F4EF] text-[#0F4C3A] group-hover:bg-[#136F52] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#3D5A50]">Telefone e Agendamentos</p>
                      <p className="text-sm sm:text-base font-mono-tabular font-semibold text-[#0B3B2D] mt-0.5">
                        {CLINIC_INFO.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F7FAF8] transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#E6F4EF] text-[#0F4C3A] group-hover:bg-[#136F52] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#3D5A50]">Instagram Oficial</p>
                      <p className="text-sm sm:text-base font-semibold text-[#0B3B2D] mt-0.5">
                        {CLINIC_INFO.instagramHandle}
                      </p>
                    </div>
                  </a>

                  <a
                    href={CLINIC_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F7FAF8] transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#E6F4EF] text-[#0F4C3A] group-hover:bg-[#136F52] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#3D5A50]">Link / Página Oficial</p>
                      <p className="text-sm font-semibold text-[#0B3B2D] mt-0.5 truncate">
                        {CLINIC_INFO.websiteDisplay}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Prepared Space for Address & Map (Strictly no invented address) */}
              <div className="bg-white rounded-2xl p-6 border border-[#0C261E]/10 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#136F52]" />
                    <h3 className="font-display text-lg font-semibold text-[#0B3B2D]">
                      Endereço e Localização
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEditingAddress((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#136F52] hover:text-[#0B3B2D] cursor-pointer whitespace-nowrap"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    {isEditingAddress ? 'Salvar' : 'Preencher endereço'}
                  </button>
                </div>

                {isEditingAddress ? (
                  <div className="space-y-3 pt-1">
                    <div>
                      <label
                        htmlFor="clinic-address-input"
                        className="block text-xs font-semibold text-[#0B3B2D] mb-1"
                      >
                        Endereço completo da Clínica Fisiomedi
                      </label>
                      <input
                        id="clinic-address-input"
                        type="text"
                        value={customAddress}
                        onChange={(e) => setCustomAddress(e.target.value)}
                        placeholder="Ex.: Rua, Número, Bairro, Cidade - GO, CEP"
                        className="w-full px-3 py-2 rounded-lg border border-[#0C261E]/15 text-xs sm:text-sm text-[#0C261E] bg-[#F7FAF8] focus:outline-none focus:border-[#136F52]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="clinic-hours-input"
                        className="block text-xs font-semibold text-[#0B3B2D] mb-1"
                      >
                        Horário de atendimento (opcional)
                      </label>
                      <input
                        id="clinic-hours-input"
                        type="text"
                        value={customHours}
                        onChange={(e) => setCustomHours(e.target.value)}
                        placeholder="Ex.: Segunda a Sexta, das 07h às 18h"
                        className="w-full px-3 py-2 rounded-lg border border-[#0C261E]/15 text-xs sm:text-sm text-[#0C261E] bg-[#F7FAF8] focus:outline-none focus:border-[#136F52]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-dashed border-[#136F52]/40 bg-[#F7FAF8] space-y-1.5">
                    <p className="text-xs font-semibold text-[#0B3B2D]">
                      {customAddress
                        ? customAddress
                        : '[Espaço reservado para o endereço — Insira Rua, Número, Bairro, Cidade - UF e CEP]'}
                    </p>
                    <p className="text-xs text-[#3D5A50]">
                      {customHours
                        ? customHours
                        : '[Espaço reservado para horário de funcionamento da clínica]'}
                    </p>
                  </div>
                )}

                {/* Map Frame Prepared Slot */}
                <div className="rounded-xl border border-dashed border-[#0C261E]/20 bg-[#EDF7F2]/60 p-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white text-[#136F52] flex items-center justify-center mx-auto shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-[#0B3B2D]">
                    Área preparada para o Mapa Interativo (Google Maps)
                  </p>
                  <p className="text-xs text-[#3D5A50] max-w-xs mx-auto leading-relaxed">
                    {customAddress
                      ? `Localização configurada: ${customAddress}`
                      : 'Substitua este bloco pelo iframe do Google Maps ou clique em "Preencher endereço" acima para visualizar.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0C261E]/10">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0B3B2D]">
                  Envie uma mensagem
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5A50] mt-1">
                  Preencha os campos abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>

                {formSubmitted ? (
                  <div className="mt-6 p-6 rounded-2xl bg-[#EDF7F2] border border-[#136F52]/25 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#136F52] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-lg font-semibold text-[#0B3B2D]">
                        Mensagem registrada com sucesso!
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2F4F44] max-w-md mx-auto">
                        Obrigado pelo contato, <strong>{name}</strong>. Caso deseje atendimento
                        imediato, você também pode encaminhar esta mensagem diretamente para o nosso
                        WhatsApp.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={buildWhatsAppUrl(contactWhatsAppMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enviar também pelo WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setName('');
                          setPhone('');
                          setEmail('');
                          setMessage('');
                        }}
                        className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-[#0C261E]/15 bg-white text-xs sm:text-sm font-semibold text-[#0B3B2D] hover:bg-[#F7FAF8] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-6 space-y-4" noValidate>
                    {formError && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-800"
                      >
                        {formError}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Nome
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome completo"
                        className="w-full px-4 py-3 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[#0B3B2D] mb-1.5"
                        >
                          Telefone
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(62) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] font-mono-tabular focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[#0B3B2D] mb-1.5"
                        >
                          E-mail
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seuemail@exemplo.com.br"
                          className="w-full px-4 py-3 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Como podemos ajudar? Informe a especialidade, exame ou dúvida desejada."
                        className="w-full px-4 py-3 rounded-xl border border-[#0C261E]/15 bg-[#F7FAF8] text-sm text-[#0C261E] focus:outline-none focus:border-[#136F52] focus:bg-white transition-colors resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-[#136F52] hover:bg-[#0F4C3A] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: RODAPÉ */}
      <footer className="bg-[#08261D] text-white pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="#inicio"
                className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
              >
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-lg bg-[#136F52] text-white flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
                <span className="font-display font-semibold">Fisiomedi</span>
              </a>

              <p className="text-sm text-emerald-100/85 max-w-sm leading-relaxed">
                Clínica Fisiomedi — cuidado e saúde em um só lugar.
              </p>

              <p className="text-xs text-emerald-200/70">
                “{CLINIC_INFO.tagline}”
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-semibold text-[#A7E8CE] tracking-wide">
                Navegação
              </h3>
              <ul className="space-y-2 text-sm text-emerald-100/80">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#clinica" className="hover:text-white transition-colors">
                    A Clínica
                  </a>
                </li>
                <li>
                  <a href="#especialidades" className="hover:text-white transition-colors">
                    Especialidades
                  </a>
                </li>
                <li>
                  <a href="#exames" className="hover:text-white transition-colors">
                    Exames
                  </a>
                </li>
                <li>
                  <a href="#convenios" className="hover:text-white transition-colors">
                    Convênios
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-semibold text-[#A7E8CE] tracking-wide">
                Contato e Redes Sociais
              </h3>
              <ul className="space-y-2.5 text-sm text-emerald-100/85">
                <li>
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono-tabular"
                  >
                    <Phone className="w-4 h-4 text-[#A7E8CE]" />
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#A7E8CE]" />
                    {CLINIC_INFO.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={CLINIC_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 text-[#A7E8CE]" />
                    {CLINIC_INFO.websiteDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
            <p>© 2026 Clínica Fisiomedi. Todos os direitos reservados.</p>
            <p>Saúde, exames e especialidades médicas.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar atendimento pelo WhatsApp da Clínica Fisiomedi"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 py-3 px-4 rounded-full bg-[#136F52] hover:bg-[#0F4C3A] text-white shadow-lg border border-white/15 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136F52]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </>
  );
};
