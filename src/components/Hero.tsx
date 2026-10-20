import React, { useState, useEffect } from 'react';
import { Compass, Play, MapPin, Award, Wine, ArrowDown, ChevronRight, Sparkles, Check } from 'lucide-react';
import aerialEstateImg from '../assets/images/hero_spectacular_winery_1791990957097.jpg';
import vineyardSunsetImg from '../assets/images/hero_bodegas_verduguez_1791985792256.jpg';
import barrelCellarImg from '../assets/images/verduguez_barrel_cellar_1791985793533.jpg';
import wineBottlesImg from '../assets/images/verduguez_wine_bottles_1791985792833.jpg';
import { CategoryFilter } from './WineCatalog';
import { VirtualTourModal } from './VirtualTourModal';

interface HeroProps {
  onExploreWines: () => void;
  onExploreStory: () => void;
  onOpenBooking: () => void;
  onSelectCategory: (category: CategoryFilter) => void;
  onAddFeaturedWine: () => void;
  isFeaturedInCart: boolean;
  onOpenVirtualTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWines,
  onExploreStory,
  onOpenBooking,
  onSelectCategory,
  onAddFeaturedWine,
  isFeaturedInCart,
  onOpenVirtualTour,
}) => {
  const [activeVista, setActiveVista] = useState(0);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const vistas = [
    {
      id: 0,
      title: 'El Dominio & Finca',
      subtitle: 'Villanueva de Alcardete',
      image: aerialEstateImg,
      alt: 'Vista aérea panorámica de la finca y viñedos de Bodegas Verduguez al atardecer',
    },
    {
      id: 1,
      title: 'Viñedos a 780m de Altura',
      subtitle: 'Meseta Toledana',
      image: vineyardSunsetImg,
      alt: 'Viñedos viejos de Bodegas Verduguez bañados por la luz dorada del sol poniente',
    },
    {
      id: 2,
      title: 'Crianza en Barricas',
      subtitle: 'Roble Francés & Americano',
      image: barrelCellarImg,
      alt: 'Sala histórica de barricas subterráneas de Bodegas Verduguez',
    },
  ];

  // Subtle auto-glide of backdrops when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveVista((prev) => (prev + 1) % vistas.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, vistas.length]);

  const tasteSelectors: { label: string; cat: CategoryFilter; icon: string }[] = [
    { label: 'Tintos Crianza & Reserva', cat: 'crianza-reserva', icon: '🍷' },
    { label: 'Blancos & D.O. La Mancha', cat: 'do-lamancha', icon: '🥂' },
    { label: 'Ecológicos & Veganos', cat: 'ecologicos', icon: '🌿' },
    { label: 'Espumosos & Fogoso', cat: 'cocteles', icon: '✨' },
  ];

  const handleTasteClick = (cat: CategoryFilter) => {
    onSelectCategory(cat);
    onExploreWines();
  };

  return (
    <section
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-10 bg-[#120d0b] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Image Layers with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {vistas.map((vista, idx) => (
          <div
            key={vista.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeVista === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={vista.image}
              alt={vista.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform transition-transform duration-10000 ease-out"
            />
          </div>
        ))}

        {/* Sophisticated Multi-layer Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-[#140e0c]/60 to-[#140e0c]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140e0c]/90 via-[#140e0c]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#140e0c]/30 to-[#140e0c]/85" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Brand Emblem, Headline & Poetry */}
          <div className="lg:col-span-8">
            {/* Heritage Crest Lockup */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1e1614]/80 backdrop-blur-md border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-6 shadow-lg">
              <span className="font-cinzel font-bold text-[#d4af37]">B·V</span>
              <span aria-hidden="true" className="text-[#8f7d6a]">·</span>
              <span className="flex items-center gap-1.5 text-[#fbf7f0]">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                Villanueva de Alcardete
              </span>
              <span aria-hidden="true" className="text-[#8f7d6a]">·</span>
              <span className="text-[#d4af37] font-semibold">D.O. La Mancha</span>
              <span aria-hidden="true" className="text-[#8f7d6a]">·</span>
              <span className="text-[#cfc3b4]">1950</span>
            </div>

            {/* Spectacular Display Headline with Gold Sheen */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf7f0] leading-[1.08] mb-6 text-balance">
              Donde la tierra de La Mancha se convierte en{' '}
              <span className="font-serif italic font-normal text-[#d4af37]">vino de leyenda.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#dfd4c7] font-light leading-relaxed mb-8 max-w-2xl text-balance">
              Cuatro generaciones forjando el alma de Villanueva de Alcardete a 780 metros de altitud. Vinos nobles de guarda, viñedos ecológicos certificados y el orgullo de llevar nuestro terruño a más de 27 países.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExploreWines}
                className="px-7 py-3.5 bg-[#d4af37] text-[#1c1514] font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#c29e2c] transition-all shadow-xl shadow-black/40 flex items-center gap-2 group"
              >
                <span>Descubrir Colección</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenVirtualTour) onOpenVirtualTour();
                  else setIsVirtualTourOpen(true);
                }}
                className="px-5 py-3.5 bg-[#251b18]/90 hover:bg-[#34231f] text-[#fbf7f0] hover:text-[#d4af37] border border-[#d4af37]/50 hover:border-[#d4af37] font-semibold text-xs tracking-wider uppercase rounded backdrop-blur-md transition-all flex items-center gap-2.5 shadow-xl group"
                title="Iniciar recorrido guiado interactivo por Bodegas Verduguez"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#d4af37] text-[#1c1514] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="absolute -inset-1 rounded-full border border-[#d4af37]/60 animate-ping pointer-events-none opacity-75" />
                </div>
                <div className="text-left">
                  <span className="block leading-tight">Recorrido por la Bodega</span>
                  <span className="text-[10px] text-[#c7b5a3] font-normal normal-case block">Finca, viñedos, barricas y vino</span>
                </div>
              </button>

              <button
                onClick={onExploreStory}
                className="px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#d5c7b9] hover:text-[#fbf7f0] underline underline-offset-4 decoration-[#d4af37]/50 hover:decoration-[#d4af37] transition-colors"
              >
                Nuestra Historia Familiar
              </button>
            </div>

            {/* Quick Interactive Sensory Style Selector */}
            <div className="pt-6 border-t border-[#3e2c27]/60">
              <div className="text-[11px] font-semibold text-[#b8a798] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>¿Qué estilo de vino busca hoy?</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {tasteSelectors.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleTasteClick(item.cat)}
                    className="px-3 py-1.5 text-xs text-[#eedecb] bg-[#221815]/75 hover:bg-[#342420] border border-[#44312c] hover:border-[#d4af37]/50 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Luxury Icon Wine Showcase (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-[#1f1614]/85 backdrop-blur-xl p-6 rounded-2xl border border-[#4a3631] shadow-2xl space-y-4 hover:border-[#d4af37]/50 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#a69588]">
                <span className="font-cinzel text-[#d4af37] tracking-widest text-[11px] uppercase font-bold">
                  Vino Insignia de la Casa
                </span>
                <span className="tabular-nums">Añada 2018</span>
              </div>

              <div className="relative rounded-xl overflow-hidden h-44 border border-[#3e2b26]">
                <img
                  src={wineBottlesImg}
                  alt="Imperial Toledo Reserva Bodegas Verduguez"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/90 via-[#140e0c]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-[#f5efe6]">Imperial Toledo Reserva</span>
                  <span className="font-serif font-bold text-[#d4af37] tabular-nums">14,50 €</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#fbf7f0] mb-1">
                  18 Meses de Crianza en Roble
                </h3>
                <p className="text-xs text-[#c4b5a7] leading-relaxed line-clamp-2">
                  Fruta madura compotada, notas torrefactas de cacao puro y taninos sedosos moldeados por el tiempo en bodega subterránea.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#cfc2b5]">
                <span className="px-2 py-0.5 bg-[#2c1d19] border border-[#44302a] rounded">
                  D.O. La Mancha
                </span>
                <span className="px-2 py-0.5 bg-[#2c1d19] border border-[#44302a] rounded text-[#d4af37]">
                  Medalla de Oro
                </span>
                <span className="px-2 py-0.5 bg-[#2c1d19] border border-[#44302a] rounded">
                  91 Puntos Peñín
                </span>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={onExploreWines}
                  className="flex-1 py-2 text-xs font-medium text-[#dcd1c4] hover:text-white bg-[#2b1e1b] hover:bg-[#382622] border border-[#3e2c27] rounded transition-colors text-center"
                >
                  Ver Ficha Técnica
                </button>
                <button
                  onClick={onAddFeaturedWine}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 ${
                    isFeaturedInCart
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#d4af37] hover:bg-[#c29e2c] text-[#1c1514]'
                  }`}
                >
                  {isFeaturedInCart ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>En Consulta</span>
                    </>
                  ) : (
                    <span>Añadir</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Zone: Vista Selector & Proof Metric Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        {/* Vista switcher control tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-[#b8a798] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span>Perspectiva actual:</span>
            <strong className="text-white">{vistas[activeVista].title}</strong>
          </div>

          <div className="flex items-center gap-1.5 bg-[#1a1210]/90 backdrop-blur-md p-1 rounded-xl border border-[#3c2a26]">
            {vistas.map((vista, idx) => (
              <button
                key={vista.id}
                onClick={() => setActiveVista(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeVista === idx
                    ? 'bg-[#d4af37] text-[#1c1514] font-semibold shadow-md'
                    : 'text-[#bfb0a2] hover:text-white hover:bg-[#281a17]'
                }`}
              >
                {vista.title}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Proof Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#1a1210]/90 backdrop-blur-md rounded-2xl border border-[#3c2a26] shadow-2xl">
          <div className="p-2 border-r border-[#3c2a26]/70 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37] tabular-nums">
              1950
            </div>
            <div className="text-xs font-medium text-[#f5efe6] mt-0.5">Fundación Familiar</div>
            <div className="text-[11px] text-[#a89a8c] mt-0.5">Más de 70 años de legado vinícola</div>
          </div>

          <div className="p-2 border-r border-[#3c2a26]/70 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37] tabular-nums">
              4ª Gen.
            </div>
            <div className="text-xs font-medium text-[#f5efe6] mt-0.5">Continuidad y Pasión</div>
            <div className="text-[11px] text-[#a89a8c] mt-0.5">Liderada por Miguel Ángel Verduguez</div>
          </div>

          <div className="p-2 border-r border-[#3c2a26]/70 last:border-r-0">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37] tabular-nums">
              780 m
            </div>
            <div className="text-xs font-medium text-[#f5efe6] mt-0.5">Altitud del Terroir</div>
            <div className="text-[11px] text-[#a89a8c] mt-0.5">Noches frescas y equilibrio polifenólico</div>
          </div>

          <div className="p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#d4af37] tabular-nums">
              27+
            </div>
            <div className="text-xs font-medium text-[#f5efe6] mt-0.5">Países de Exportación</div>
            <div className="text-[11px] text-[#a89a8c] mt-0.5">Europa, América y Extremo Oriente</div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Modal Fallback if not controlled by parent */}
      {!onOpenVirtualTour && (
        <VirtualTourModal
          isOpen={isVirtualTourOpen}
          onClose={() => setIsVirtualTourOpen(false)}
          onBookVisit={() => {
            setIsVirtualTourOpen(false);
            onOpenBooking();
          }}
          onExploreWines={() => {
            setIsVirtualTourOpen(false);
            onExploreWines();
          }}
        />
      )}
    </section>
  );
};
