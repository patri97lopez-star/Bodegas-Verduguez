import React, { useState } from 'react';
import { ENOTOURISM_TOURS, EnotourismTour } from '../data/wineryData';
import { Compass, Calendar, Clock, Users, CheckCircle2, Check, ArrowRight } from 'lucide-react';

interface EnotourismProps {
  onTourBooked?: (details: string) => void;
  onOpenVirtualTour?: () => void;
}

export const Enotourism: React.FC<EnotourismProps> = ({ onTourBooked, onOpenVirtualTour }) => {
  const [selectedTour, setSelectedTour] = useState<EnotourismTour>(ENOTOURISM_TOURS[1]);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-24');
  const [selectedSlot, setSelectedSlot] = useState<string>('12:00h');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const timeSlots = ['11:00h', '12:30h', '17:00h'];
  const totalPrice = selectedTour.pricePerPerson * guestCount;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;

    setBookingConfirmed(true);
    if (onTourBooked) {
      onTourBooked(
        `Reserva: ${selectedTour.title} para ${guestCount} personas el ${selectedDate} a las ${selectedSlot} (${guestName})`
      );
    }
  };

  return (
    <section id="enoturismo" className="py-24 bg-[#faf7f2] text-[#1c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8b263e] mb-2">
            <Compass className="w-4 h-4 text-[#8b263e]" />
            <span>Enoturismo & Visitas a Bodega</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1514] mb-4 text-balance">
            Viva la experiencia del vino en su cuna toledana
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-base sm:text-lg text-[#5e4f47] leading-relaxed text-balance max-w-2xl">
              Le abrimos las puertas de nuestras históricas instalaciones en Villanueva de Alcardete. Conozca nuestros viñedos viejos, la paz de la sala de barricas y deguste nuestros vinos guiado por nuestros enólogos.
            </p>
            {onOpenVirtualTour && (
              <button
                type="button"
                onClick={onOpenVirtualTour}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#d4af37] text-[#1c1514] hover:bg-[#faf5ed] text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#8b263e]" />
                <span>Ver Recorrido Virtual en Bodega</span>
              </button>
            )}
          </div>
        </div>

        {/* 3 Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ENOTOURISM_TOURS.map((tour) => {
            const isSelected = selectedTour.id === tour.id;
            return (
              <div
                key={tour.id}
                onClick={() => setSelectedTour(tour)}
                className={`p-6 sm:p-8 rounded-2xl bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#8b263e] ring-2 ring-[#8b263e]/20 shadow-xl -translate-y-1'
                    : 'border-[#e8ded3] hover:border-[#8b263e]/50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold text-[#8b263e] uppercase tracking-wider">
                      {tour.badge}
                    </span>
                    <span className="text-xs text-[#73635b] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#8b263e]" />
                      {tour.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1514] mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5a4c45] leading-relaxed mb-6">
                    {tour.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-[#1c1514] uppercase tracking-wider">
                      Incluye:
                    </div>
                    {tour.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#52453f]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#f0e7dc] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#78675f]">Precio por persona</span>
                    <div className="font-serif text-2xl font-bold text-[#1c1514] tabular-nums">
                      {tour.pricePerPerson} €
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTour(tour);
                    }}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                      isSelected
                        ? 'bg-[#8b263e] text-white'
                        : 'bg-[#faf7f2] hover:bg-[#f1ebe1] text-[#1c1514] border border-[#ded2c3]'
                    }`}
                  >
                    {isSelected ? 'Seleccionada' : 'Elegir'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Configurator */}
        <div className="bg-white rounded-2xl border border-[#e8ded3] p-6 sm:p-10 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8b263e]">
              Planificador de Visita
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1514]">
              Solicitar reserva para: {selectedTour.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#66574f] mt-1">
              Personalice la fecha y el número de asistentes. Recibirá confirmación inmediata por parte de nuestro equipo de enoturismo.
            </p>
          </div>

          {bookingConfirmed ? (
            <div className="p-8 bg-[#faf7f2] rounded-xl border border-[#d9ccbf] text-center max-w-lg mx-auto">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-serif text-xl font-bold text-[#1c1514] mb-2">
                ¡Solicitud de Reserva Registrada!
              </h4>
              <p className="text-xs sm:text-sm text-[#5a4d46] leading-relaxed mb-4">
                Muchas gracias, <strong>{guestName}</strong>. Hemos recibido su petición para la experiencia <strong>{selectedTour.title}</strong> el día <strong>{selectedDate}</strong> a las <strong>{selectedSlot}</strong> para <strong>{guestCount} personas</strong>.
              </p>
              <div className="p-4 bg-white rounded-lg border border-[#e4d9ce] text-xs text-[#52443e] mb-6">
                Hemos enviado un correo a <strong>{guestEmail}</strong> con las indicaciones de llegada a nuestra bodega en C/ Los Hinojosos 1, Villanueva de Alcardete.
              </div>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="px-5 py-2.5 bg-[#1c1514] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#382b26] transition-colors"
              >
                Hacer Otra Reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] uppercase tracking-wider mb-2">
                    Fecha de la Visita
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min="2026-10-15"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#e2d6c8] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                      required
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] uppercase tracking-wider mb-2">
                    Turno Horario
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#e2d6c8] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest Stepper */}
                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] uppercase tracking-wider mb-2">
                    Nº de Personas
                  </label>
                  <div className="flex items-center bg-[#faf7f2] border border-[#e2d6c8] rounded-lg px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-8 h-8 rounded bg-white text-[#1c1514] font-bold hover:bg-[#eee4d8] transition-colors flex items-center justify-center border border-[#dfd3c5]"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-[#1c1514] tabular-nums">
                      {guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(15, guestCount + 1))}
                      className="w-8 h-8 rounded bg-white text-[#1c1514] font-bold hover:bg-[#eee4d8] transition-colors flex items-center justify-center border border-[#dfd3c5]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price preview */}
                <div className="p-3.5 rounded-lg bg-[#faf5ed] border border-[#eddcc7] flex flex-col justify-center">
                  <div className="text-[11px] text-[#7a685e] uppercase tracking-wider font-semibold">
                    Total Estimado
                  </div>
                  <div className="font-serif text-2xl font-bold text-[#8b263e] tabular-nums">
                    {totalPrice} €
                  </div>
                  <div className="text-[10px] text-[#8e7e75]">
                    IVA incluido · Pago en bodega
                  </div>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#eee4d8]">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Ej. Carmen Gómez"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#e2d6c8] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="carmen@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#e2d6c8] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#e2d6c8] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#eee4d8]">
                <div className="text-xs text-[#6e5e56]">
                  Visitas disponibles de lunes a sábado en horario de mañana y tarde. Para grupos superiores a 15 personas, consultar condiciones personalizadas.
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#8b263e] hover:bg-[#721f32] text-white rounded shadow-md transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Confirmar Solicitud de Visita</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
