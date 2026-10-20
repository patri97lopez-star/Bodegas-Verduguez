import React from 'react';
import harvestImg from '../assets/images/verduguez_grape_harvest_1791985792864.jpg';
import { Sun, Mountain, Droplets, Moon, Sparkles, Sprout } from 'lucide-react';

export const TerroirVineyards: React.FC = () => {
  const varietals = [
    {
      name: 'Tempranillo (Cencibel)',
      type: 'Tinta Autóctona',
      description: 'El corazón de nuestros tintos. Ofrece taninos sedosos, fruta roja silvestre y un potencial excepcional para la crianza en barrica.',
    },
    {
      name: 'Airén de Cepas Viejas',
      type: 'Blanca Histórica',
      description: 'La variedad tradicional de La Mancha. En nuestras parcelas de altura expresa una sorprendente frescura cítrica y sutil mineralidad.',
    },
    {
      name: 'Cabernet Sauvignon & Syrah',
      type: 'Tintas Nobles',
      description: 'Aportan estructura, color profundo y notas especiadas a nuestros coupages de guarda más selectos.',
    },
    {
      name: 'Macabeo & Chardonnay',
      type: 'Blancas Finas',
      description: 'Seleccionadas para blancos aromáticos fermentados y la base de nuestros espumosos de método tradicional.',
    },
  ];

  return (
    <section id="vinedos" className="py-24 bg-[#171210] text-[#f5efe6] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b263e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            <Sprout className="w-4 h-4 text-[#d4af37]" />
            <span>Terruño & Tradición Vitícola</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fbf7f0] mb-4 text-balance">
            Viñedos de altura en Villanueva de Alcardete
          </h2>
          <p className="text-base sm:text-lg text-[#c7bbb0] leading-relaxed text-balance">
            El secreto de los vinos de Bodegas Verduguez reside en el equilibrio natural entre el suelo castellano, las cepas viejas y las condiciones extremas de la meseta toledana.
          </p>
        </div>

        {/* 2-Column Split: Grape Harvest Imagery & Terroir Factors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left Column: Image with Harvest Craftsmanship */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-[#3e2e2a] shadow-2xl h-full min-h-[420px]">
              <img
                src={harvestImg}
                alt="Vendimia manual y cuidado de los racimos de uva en Bodegas Verduguez"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/90 via-[#140e0c]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Vendimia Seleccionada
                </span>
                <p className="font-serif text-lg font-medium leading-snug">
                  Cuidado racimo a racimo. Cosecha nocturna en el punto óptimo de madurez polifenólica.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Terroir Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-[#211a18] rounded-xl border border-[#3c2d28] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#30221e] flex items-center justify-center text-[#d4af37] mb-4">
                  <Mountain className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-2">
                  780 Metros de Altitud
                </h3>
                <p className="text-sm text-[#b8aba0] leading-relaxed">
                  Nuestros viñedos se sitúan a una altitud privilegiada en Villanueva de Alcardete. La cota elevada suaviza las temperaturas y favorece noches frescas durante los meses estivales.
                </p>
              </div>
              <div className="text-xs text-[#d4af37] font-semibold mt-4 pt-3 border-t border-[#342622]">
                Salto térmico &gt; 20°C día/noche
              </div>
            </div>

            <div className="p-6 bg-[#211a18] rounded-xl border border-[#3c2d28] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#30221e] flex items-center justify-center text-[#d4af37] mb-4">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-2">
                  +3.000 Horas de Sol
                </h3>
                <p className="text-sm text-[#b8aba0] leading-relaxed">
                  Luz mediterránea abundante y aire seco continental que protegen las cepas de plagas de forma natural, reduciendo drásticamente la necesidad de tratamientos químicos.
                </p>
              </div>
              <div className="text-xs text-[#d4af37] font-semibold mt-4 pt-3 border-t border-[#342622]">
                Sanidad vegetal óptima
              </div>
            </div>

            <div className="p-6 bg-[#211a18] rounded-xl border border-[#3c2d28] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#30221e] flex items-center justify-center text-[#d4af37] mb-4">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-2">
                  Suelo Calizo-Arcilloso
                </h3>
                <p className="text-sm text-[#b8aba0] leading-relaxed">
                  Tierras sedimentarias profundas que conservan la humedad subterránea en los meses más calurosos y aportan una finura mineral inconfundible a los vinos.
                </p>
              </div>
              <div className="text-xs text-[#d4af37] font-semibold mt-4 pt-3 border-t border-[#342622]">
                Retención mineral natural
              </div>
            </div>

            <div className="p-6 bg-[#211a18] rounded-xl border border-[#3c2d28] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#30221e] flex items-center justify-center text-[#d4af37] mb-4">
                  <Moon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-2">
                  Vendimia Nocturna
                </h3>
                <p className="text-sm text-[#b8aba0] leading-relaxed">
                  Para las variedades blancas y rosadas, recolectamos durante la madrugada para que la uva entre en tolva fresca (10-14°C), conservando intactos los aromas frutales primarios.
                </p>
              </div>
              <div className="text-xs text-[#d4af37] font-semibold mt-4 pt-3 border-t border-[#342622]">
                Cero oxidación prematura
              </div>
            </div>
          </div>
        </div>

        {/* Varietal Mosaic */}
        <div className="bg-[#1e1715] p-6 sm:p-8 rounded-2xl border border-[#392a26]">
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37]">
              Nuestras Variedades de Uva
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fbf7f0]">
              El patrimonio vegetal de Bodegas Verduguez
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {varietals.map((v) => (
              <div key={v.name} className="p-4 rounded-xl bg-[#281e1b] border border-[#3c2d29]">
                <div className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
                  {v.type}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#fbf7f0] mb-2">
                  {v.name}
                </h4>
                <p className="text-xs text-[#c2b5aa] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
