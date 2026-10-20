import React from 'react';
import { WINERY_INFO } from '../data/wineryData';
import { Wine, Award, ShieldCheck, Heart, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#110c0a] text-[#ded3c5] border-t border-[#2d201c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#261b17]">
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 font-cinzel text-xl font-bold tracking-widest text-[#f5efe6]">
              <Wine className="w-5 h-5 text-[#d4af37]" />
              <span>BODEGAS VERDUGUEZ</span>
            </div>
            <p className="text-xs text-[#a39386] leading-relaxed">
              Bodega familiar fundada en 1950 en Villanueva de Alcardete (Toledo). Cuatro generaciones dedicadas con esmero al cultivo de viñedos de altura y la elaboración de vinos D.O. La Mancha, ecológicos y espumosos de gran pureza.
            </p>
            <div className="pt-2 text-[11px] text-[#7d6f65]">
              Miguel Ángel Verduguez Morata · 4ª Generación
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37]">
              Secciones
            </div>
            <ul className="space-y-2 text-xs text-[#b8aba0]">
              <li>
                <a href="#bodega" className="hover:text-[#f5efe6] transition-colors">
                  La Bodega & Historia
                </a>
              </li>
              <li>
                <a href="#vinedos" className="hover:text-[#f5efe6] transition-colors">
                  Viñedos & Terruño
                </a>
              </li>
              <li>
                <a href="#vinos" className="hover:text-[#f5efe6] transition-colors">
                  Nuestros Vinos
                </a>
              </li>
              <li>
                <a href="#enoturismo" className="hover:text-[#f5efe6] transition-colors">
                  Enoturismo & Visitas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#f5efe6] transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Wine Brands */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37]">
              Nuestras Marcas
            </div>
            <ul className="space-y-1.5 text-xs text-[#b8aba0]">
              <li>
                <strong className="text-[#e2d7cb]">Imperial Toledo:</strong> Gran Reserva, Reserva, Crianza
              </li>
              <li>
                <strong className="text-[#e2d7cb]">Hidalgo de Castilla:</strong> Roble & Tradición
              </li>
              <li>
                <strong className="text-[#e2d7cb]">Bodegas Verduguez Bio:</strong> Ecológicos & Veganos
              </li>
              <li>
                <strong className="text-[#e2d7cb]">Cueva:</strong> Espumosos Método Tradicional
              </li>
              <li>
                <strong className="text-[#e2d7cb]">Fogoso:</strong> Coctelería nacarada y sangrías
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37]">
              Sede Central
            </div>
            <div className="space-y-2 text-xs text-[#b8aba0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  {WINERY_INFO.address}, {WINERY_INFO.postalCode} {WINERY_INFO.city} ({WINERY_INFO.province})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="tabular-nums">{WINERY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{WINERY_INFO.emailGeneral}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quality & Responsible Consumption Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7d6e64]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#ded3c5]">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              D.O. La Mancha
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#ded3c5]">Agricultura Ecológica CAAE</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#ded3c5]">V-Label Vegano</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#ded3c5]">Certificación IFS Food</span>
          </div>

          <div className="text-center md:text-right text-[#a89a8e]">
            Disfrute del vino con moderación. Venta prohibida a menores de 18 años.
          </div>
        </div>

        <div className="pt-4 text-center text-[10px] text-[#63564e]">
          © {new Date().getFullYear()} Bodegas Verduguez S.L. Todos los derechos reservados. Villanueva de Alcardete, Toledo.
        </div>
      </div>
    </footer>
  );
};
