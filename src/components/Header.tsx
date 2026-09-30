import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (preselectService?: string) => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Clínica', href: '#clinica' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Exames', href: '#exames' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Contato', href: '#contato' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md border-b border-[#0C261E]/10 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#0B3B2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#136F52] rounded-md whitespace-nowrap shrink-0"
          aria-label="Clínica Fisiomedi — Início"
        >
          <span
            aria-hidden="true"
            className="w-8 h-8 rounded-lg bg-[#0F4C3A] text-white flex items-center justify-center shadow-xs"
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
          <span className="font-display font-semibold tracking-tight">
            Fisiomedi
          </span>
        </a>

        {/* Zone 2: Primary Navigation Links (clean text with subtle hover underline) */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2F4F44]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 whitespace-nowrap shrink-0 hover:text-[#0B3B2D] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#136F52] hover:after:w-full after:transition-all after:duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#136F52] rounded-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#136F52] hover:bg-[#0F4C3A] active:scale-[0.99] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136F52]"
          >
            Agende sua consulta
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#0B3B2D] hover:bg-[#E7F3EE] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#136F52]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-white border-b border-[#0C261E]/10 shadow-lg px-4 pt-3 pb-5"
        >
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#0C261E] hover:bg-[#E7F3EE] hover:text-[#0B3B2D] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-3 border-t border-[#0C261E]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-[#136F52] hover:bg-[#0F4C3A] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Agende sua consulta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
