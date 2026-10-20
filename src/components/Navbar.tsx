import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Wine } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'La Bodega', href: '#bodega' },
    { label: 'Viñedos', href: '#vinedos' },
    { label: 'Nuestros Vinos', href: '#vinos' },
    { label: 'Enoturismo', href: '#enoturismo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181312]/95 backdrop-blur-md border-b border-[#3d2b27] py-3.5 shadow-xl'
          : 'bg-gradient-to-b from-[#110c0b]/90 via-[#110c0b]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-cinzel text-xl md:text-2xl tracking-widest text-[#f5efe6] font-bold hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <Wine className="w-5 h-5 text-[#d4af37]" />
            <span>BODEGAS VERDUGUEZ</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#d8cfc4]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors pb-1 border-b border-transparent hover:border-[#d4af37] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + inquiry bag */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#d8cfc4] hover:text-[#d4af37] transition-colors rounded-lg border border-[#3d2b27] bg-[#221a18]/70"
              title="Vinos seleccionados para consulta o pedido"
              aria-label="Abrir selección de vinos"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8b263e] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#181312] tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#1c1514] bg-[#d4af37] hover:bg-[#c39e2e] transition-colors rounded shadow-sm whitespace-nowrap shrink-0"
            >
              Reservar Visita
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f5efe6] hover:text-[#d4af37] transition-colors"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-3 border-t border-[#3d2b27] bg-[#181312] px-4 rounded-b-xl shadow-2xl flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-[#d8cfc4] hover:text-[#d4af37] py-2 border-b border-[#2d201c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-2 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1c1514] bg-[#d4af37] hover:bg-[#c39e2e] transition-colors rounded text-center"
            >
              Reservar Visita a la Bodega
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
