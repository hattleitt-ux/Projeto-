/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SpecialtyItem } from './data/clinicData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutAndSpecialties } from './components/AboutAndSpecialties';
import { ExamsAndSpotlights } from './components/ExamsAndSpotlights';
import { CtaContactFooter } from './components/CtaContactFooter';
import { BookingModal } from './components/BookingModal';
import { SpecialtyModal } from './components/SpecialtyModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);

  const handleOpenBooking = (preselectService?: string) => {
    setBookingService(preselectService || 'Oftalmologia');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF8] text-[#0C261E]">
      {/* 1. Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero / Primeira Seção */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. Sobre a Clínica & 4. Especialidades */}
        <AboutAndSpecialties
          onSelectSpecialty={(specialty) => setSelectedSpecialty(specialty)}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Exames, 6. Oftalmologia, 7. Ecocardiograma/Cardiologia, 8. Por que escolher & Convênios */}
        <ExamsAndSpotlights onOpenBooking={handleOpenBooking} />

        {/* 9. CTA Verde, 10. Contato Completo, 11. Rodapé & WhatsApp Flutuante */}
        <CtaContactFooter />
      </main>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialService={bookingService}
        onClose={() => setBookingModalOpen(false)}
      />

      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onSchedule={(serviceName) => handleOpenBooking(serviceName)}
      />
    </div>
  );
}

