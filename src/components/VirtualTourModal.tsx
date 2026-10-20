import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Sparkles,
  Info,
  Check,
  Maximize2,
  Wine,
  FastForward,
} from 'lucide-react';

import aerialEstateImg from '../assets/images/hero_spectacular_winery_1791990957097.jpg';
import grapeHarvestImg from '../assets/images/verduguez_grape_harvest_1791985792864.jpg';
import tanksFermentationImg from '../assets/images/verduguez_tanks_fermentation_1792147451749.jpg';
import barrelCellarImg from '../assets/images/verduguez_barrel_cellar_1791985793533.jpg';
import wineBottlesImg from '../assets/images/verduguez_wine_bottles_1791985792833.jpg';
import tastingRoomImg from '../assets/images/verduguez_wine_tasting_room_1792147451588.jpg';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: () => void;
  onExploreWines?: () => void;
}

interface TourHotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  desc: string;
  tag: string;
}

interface TourChapter {
  id: number;
  chapterNumber: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  durationSeconds: number;
  narratorText: string;
  keyFacts: string[];
  hotspots: TourHotspot[];
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onBookVisit,
  onExploreWines,
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackProgress, setPlaybackProgress] = useState(0); // 0 to 100 within current chapter
  const [isAudioNarratorEnabled, setIsAudioNarratorEnabled] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<TourHotspot | null>(null);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5>(1);

  // Audio synthesis reference
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<number | null>(null);

  const chapters: TourChapter[] = [
    {
      id: 0,
      chapterNumber: '01 / 06',
      title: 'Llegada a la Finca & Hacienda Solariega',
      location: 'Villanueva de Alcardete, Toledo · 780m de Altitud',
      image: aerialEstateImg,
      alt: 'Vista aérea de la hacienda toledana y viñedos de Bodegas Verduguez',
      durationSeconds: 16,
      narratorText:
        'Bienvenidos a Bodegas Verduguez. Nos encontramos en Villanueva de Alcardete, en plena meseta toledana. Esta hacienda familiar fundada en 1950 a 780 metros de altitud goza de un microclima privilegiado con más de 3.000 horas de sol al año y un marcado salto térmico día-noche que confiere a nuestros vinos su singular frescura y carácter.',
      keyFacts: [
        'Fundada en 1950 por la familia Verduguez',
        '780m de altitud sobre el nivel del mar',
        'Salto térmico > 20°C día y noche en verano',
      ],
      hotspots: [
        {
          id: 'h1',
          x: 48,
          y: 56,
          title: 'Patio Porticado & Arquitectura de Piedra',
          desc: 'Construcción tradicional manchega donde se ubican la recepción de vendimia, el lagar histórico y las oficinas centrales.',
          tag: 'Patrimonio 1950',
        },
        {
          id: 'h2',
          x: 25,
          y: 42,
          title: 'Parcelas de Secano en Laderas',
          desc: 'Suelos calizo-arcillosos con excelente drenaje que fuerzan a las raíces a profundizar en busca de minerales.',
          tag: 'Terruño D.O. La Mancha',
        },
      ],
    },
    {
      id: 1,
      chapterNumber: '02 / 06',
      title: 'El Viñedo Centenario & La Vendimia Nocturna',
      location: 'Cepas Viejas de Tempranillo & Airén',
      image: grapeHarvestImg,
      alt: 'Vendimia manual de racimos de uva Tempranillo en Bodegas Verduguez',
      durationSeconds: 15,
      narratorText:
        'Aquí late el verdadero origen de nuestros vinos: cepas viejas de secano cuidadas durante cuatro generaciones. En las variedades blancas y tintas nobles, practicamos la vendimia manual y la recolección nocturna en las horas más frescas de la madrugada, protegiendo los racimos de la oxidación y preservando toda la pureza de sus aromas primarios.',
      keyFacts: [
        'Vendimia manual y recolección nocturna (10-14°C)',
        'Cepas autóctonas de Tempranillo (Cencibel) y Airén',
        'Cultivo ecológico certificado sin pesticidas sintéticos',
      ],
      hotspots: [
        {
          id: 'h3',
          x: 52,
          y: 50,
          title: 'Racimos de Tempranillo Seleccionados',
          desc: 'Piel gruesa rica en taninos y antocianos con pruina natural intacta gracias a la vendimia manual delicada.',
          tag: 'Fruta Noble',
        },
        {
          id: 'h4',
          x: 82,
          y: 65,
          title: 'Viticultura Ecológica & Biodiversidad',
          desc: 'Suelo vivo respetado bajo las directrices del sello CAAE y la normativa europea de agricultura ecológica.',
          tag: 'Certificado Bio',
        },
      ],
    },
    {
      id: 2,
      chapterNumber: '03 / 06',
      title: 'Nave de Elaboración & Fermentación Termorregulada',
      location: 'Tecnología Enológica & Monovarietales Puros',
      image: tanksFermentationImg,
      alt: 'Depósitos de acero inoxidable termorregulados en la nave de fermentación',
      durationSeconds: 16,
      narratorText:
        'En 1994, Miguel Ángel Verduguez transformó la bodega incorporando la más alta tecnología enológica. En esta nave, depósitos de acero inoxidable con camisas de frío controlan la fermentación a temperaturas milimétricas. Así elaboramos nuestros célebres monovarietales puros D.O. La Mancha y garantizamos la seguridad alimentaria avalada por la estricta norma internacional IFS Food.',
      keyFacts: [
        'Control térmico estricto (16°C blancos, 24°C tintos)',
        'Certificación de calidad y seguridad IFS Food',
        'Pioneros en embotellado de monovarietales de alta expresión',
      ],
      hotspots: [
        {
          id: 'h5',
          x: 75,
          y: 48,
          title: 'Sensores Térmicos Digitales',
          desc: 'Monitoreo en tiempo real de la curva de fermentación para potenciar la expresión aromática varietal.',
          tag: 'Precisión Enológica',
        },
        {
          id: 'h6',
          x: 18,
          y: 55,
          title: 'Tuberías de Cobre & Acero Sanitario',
          desc: 'Trasiegos por gravedad sin agresión mecánica al mosto, evitando turbideces y preservando el brillo natural.',
          tag: 'Trazabilidad Total',
        },
      ],
    },
    {
      id: 3,
      chapterNumber: '04 / 06',
      title: 'La Cripta Subterránea & La Sala de Barricas',
      location: 'Crianza en Silencio · Roble Francés & Americano',
      image: barrelCellarImg,
      alt: 'Hileras de barricas de roble bajo arcos de piedra en la bodega subterránea',
      durationSeconds: 16,
      narratorText:
        'Descendemos bajo tierra, a la penumbra y quietud de nuestra sala de barricas. Entre gruesos muros de piedra que mantienen una humedad y temperatura constante todo el año, reposan nuestros reservas. Aquí, durante 12 a 18 meses, el vino intercambia oxígeno sutilmente a través de las duelas de roble francés y americano, adquiriendo notas de vainilla, cacao y taninos aterciopelados.',
      keyFacts: [
        'Roble Francés Allier y Roble Americano de grano fino',
        'Humedad relativa del 75% y temperatura natural constante',
        'Crianza noble de 12 a 18 meses para Crianza y Reserva',
      ],
      hotspots: [
        {
          id: 'h7',
          x: 32,
          y: 52,
          title: 'Barricas de Roble Francés Allier',
          desc: 'Aportan elegancia, especias sutiles y respetan la fruta viva de la uva Tempranillo.',
          tag: 'Roble Noble',
        },
        {
          id: 'h8',
          x: 88,
          y: 60,
          title: 'Tostado Medio de Barrica',
          desc: 'Desprende sutiles notas de chocolate negro, torrefactos y bálsamos durante la guarda.',
          tag: 'Complejidad',
        },
      ],
    },
    {
      id: 4,
      chapterNumber: '05 / 06',
      title: 'El Embotellado & Vinos de Guarda',
      location: 'Afinamiento en Botella · Sello D.O. La Mancha',
      image: wineBottlesImg,
      alt: 'Botellas de vino Imperial Toledo Reserva en mesa de madera de la bodega',
      durationSeconds: 15,
      narratorText:
        'Tras la crianza en madera, el vino se embotella y reposa en la oscuridad de la bodega para su afinamiento final. En este instante mágico, el bouquet se armoniza y alcanza su máxima plenitud. Es el nacimiento de nuestro Imperial Toledo Gran Reserva, laureado con Medallas de Oro y 91 Puntos Peñín, junto a nuestras líneas ecológicas y espumosos de cueva.',
      keyFacts: [
        'Mínimo 18 meses de reposo posterior en botella',
        'Corcho natural de alcornoque español de alta densidad',
        'Exportado a más de 27 países en los cinco continentes',
      ],
      hotspots: [
        {
          id: 'h9',
          x: 43,
          y: 55,
          title: 'Imperial Toledo Gran Reserva',
          desc: 'Vino de guarda con ribetes teja, fruta negra compotada y un paso de boca largo y sedoso.',
          tag: 'Insignia de la Casa',
        },
        {
          id: 'h10',
          x: 64,
          y: 52,
          title: 'Copa de Cristal Fino & Servicio',
          desc: 'Temperatura óptima de cata a 16-18°C para desgranar todas las capas aromáticas terciarias.',
          tag: 'Guía de Sumiller',
        },
      ],
    },
    {
      id: 5,
      chapterNumber: '06 / 06',
      title: 'La Sala de Catas & La Experiencia Enoturística',
      location: 'Cata Guiada por Sumiller · Maridaje Manchego',
      image: tastingRoomImg,
      alt: 'Sumiller sirviendo vino en la sala de catas privada de Bodegas Verduguez con visitantes',
      durationSeconds: 17,
      narratorText:
        'Llegamos al broche final de nuestro recorrido: la sala de catas privada. Alrededor de una mesa de roble centenario y a la luz de las velas, nuestro sumiller descorcha con decantador para que disfruten del color, el aroma y el sabor de cada vino, maridado con el mejor queso manchego artesano. Una experiencia viva que les invitamos a disfrutar personalmente en nuestra casa.',
      keyFacts: [
        'Cata comentada de 3 a 5 vinos según la experiencia elegida',
        'Maridaje con queso manchego artesanal y productos toledanos',
        'Visitas personalizadas para particulares, parejas y grupos',
      ],
      hotspots: [
        {
          id: 'h11',
          x: 63,
          y: 45,
          title: 'Descorche & Decantador',
          desc: 'Oxigenación suave para abrir los aromas de guarda y permitir que el vino exprese su historia.',
          tag: 'Ritual del Vino',
        },
        {
          id: 'h12',
          x: 48,
          y: 68,
          title: 'Maridaje Manchego de Proximidad',
          desc: 'Queso curado de oveja de pasto toledano, picos artesanos y aceite de oliva virgen extra local.',
          tag: 'Gastronomía Toledana',
        },
      ],
    },
  ];

  const current = chapters[currentChapterIndex];

  // Stop any ongoing speech
  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Speak narrator commentary in Spanish with warm tone
  const speakNarrator = (text: string) => {
    if (!isAudioNarratorEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    stopSpeech();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = playbackSpeed === 1.5 ? 1.15 : 0.95;
      utterance.pitch = 0.98;

      // Try selecting a Spanish natural voice if available
      const voices = window.speechSynthesis.getVoices();
      const esVoice = voices.find(
        (v) => (v.lang === 'es-ES' || v.lang.startsWith('es')) && !v.name.includes('Google')
      ) || voices.find((v) => v.lang.startsWith('es'));

      if (esVoice) utterance.voice = esVoice;

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Graceful fallback if speech synthesis is disabled by browser security
    }
  };

  // Trigger narration whenever current chapter changes
  useEffect(() => {
    if (!isOpen) {
      stopSpeech();
      return;
    }

    setPlaybackProgress(0);
    setActiveHotspot(null);

    if (isPlaying) {
      speakNarrator(current.narratorText);
    } else {
      stopSpeech();
    }

    return () => {
      stopSpeech();
    };
  }, [currentChapterIndex, isOpen, isPlaying, isAudioNarratorEnabled, playbackSpeed]);

  // Main playback timer loop
  useEffect(() => {
    if (!isOpen || !isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalTimeMs = 100;
    const totalDurationMs = (current.durationSeconds * 1000) / playbackSpeed;
    const stepPercent = (intervalTimeMs / totalDurationMs) * 100;

    timerRef.current = window.setInterval(() => {
      setPlaybackProgress((prev) => {
        if (prev >= 100) {
          // Advance to next chapter or stop at end
          if (currentChapterIndex < chapters.length - 1) {
            setCurrentChapterIndex((idx) => idx + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + stepPercent;
      });
    }, intervalTimeMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, currentChapterIndex, playbackSpeed, current.durationSeconds]);

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSpeech();
    } else {
      setIsPlaying(true);
      speakNarrator(current.narratorText);
    }
  };

  // Change chapter
  const goToChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setPlaybackProgress(0);
    setActiveHotspot(null);
  };

  const handleRestart = () => {
    setCurrentChapterIndex(0);
    setPlaybackProgress(0);
    setIsPlaying(true);
    setActiveHotspot(null);
  };

  if (!isOpen) return null;

  const currentSeconds = Math.round((playbackProgress / 100) * current.durationSeconds);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl bg-[#140e0c] text-[#fbf7f0] rounded-2xl border border-[#3e2c27] shadow-2xl overflow-hidden flex flex-col max-h-[96vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Recorrido guiado oficial de Bodegas Verduguez"
      >
        {/* Top Bar Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[#2a1c18] flex items-center justify-between bg-[#1b120f]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2b1c18] border border-[#442e27] flex items-center justify-center text-[#d4af37]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#fbf7f0]">
                  VISITA VIRTUAL GUIADA
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#8b263e]/40 border border-[#8b263e]/60 text-[#e8b3be] font-medium uppercase tracking-wider">
                  En Vivo
                </span>
              </div>
              <p className="text-[11px] text-[#a8998d] hidden sm:block">
                Recorrido completo por la finca, viñedos, depósitos, cripta de barricas y sala de cata.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Speed toggle */}
            <button
              onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.5 : 1))}
              className="px-2 py-1 rounded bg-[#261916] hover:bg-[#34221e] border border-[#3c2924] text-[11px] text-[#d4af37] font-semibold transition-colors"
              title="Velocidad de reproducción"
            >
              {playbackSpeed}x
            </button>

            {/* Narrator Voice Audio toggle */}
            <button
              onClick={() => {
                const next = !isAudioNarratorEnabled;
                setIsAudioNarratorEnabled(next);
                if (!next) stopSpeech();
                else if (isPlaying) speakNarrator(current.narratorText);
              }}
              className={`p-2 rounded-lg border transition-colors ${
                isAudioNarratorEnabled
                  ? 'bg-[#2b1b17] border-[#d4af37]/50 text-[#d4af37]'
                  : 'bg-[#211613] border-[#382622] text-[#8e7e73]'
              }`}
              title={isAudioNarratorEnabled ? 'Silenciar narrador' : 'Activar voz del enólogo'}
              aria-label="Alternar voz del narrador"
            >
              {isAudioNarratorEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={() => {
                stopSpeech();
                onClose();
              }}
              className="p-2 rounded-lg bg-[#211613] hover:bg-[#32201b] border border-[#382622] text-[#b8a99d] hover:text-white transition-colors"
              aria-label="Cerrar visita virtual"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Main Screen Area */}
        <div className="relative aspect-video sm:h-[420px] md:h-[460px] w-full overflow-hidden bg-black select-none">
          {/* Active Image with smooth Ken Burns camera pan effect */}
          <img
            key={current.id}
            src={current.image}
            alt={current.alt}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-out ${
              isPlaying ? 'scale-110' : 'scale-105'
            }`}
          />

          {/* Cinematic Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />

          {/* Top Stage Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140e0c]/80 backdrop-blur-md border border-[#d4af37]/40 text-xs font-semibold text-[#d4af37]">
              <span>{current.chapterNumber}</span>
              <span className="text-[#8e7c69]">·</span>
              <span className="text-[#f5efe6]">{current.title}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-[#d8cfc5] border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{current.location}</span>
            </div>
          </div>

          {/* Interactive Clickable Hotspots over the scene */}
          {current.hotspots.map((hotspot) => {
            const isSelected = activeHotspot?.id === hotspot.id;
            return (
              <div
                key={hotspot.id}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveHotspot(isSelected ? null : hotspot)}
                  className={`group relative flex items-center justify-center p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#d4af37] text-[#1c1514] scale-125 shadow-lg shadow-[#d4af37]/40'
                      : 'bg-[#18110f]/80 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1514] border border-[#d4af37]/60'
                  }`}
                  aria-label={`Inspeccionar ${hotspot.title}`}
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/85 text-[10px] text-white font-medium px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {hotspot.title}
                  </span>
                </button>

                {/* Hotspot Popover Tooltip */}
                {isSelected && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-[#1a1210]/95 backdrop-blur-xl border border-[#d4af37]/60 text-white shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider mb-1">
                      <span>{hotspot.tag}</span>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-[#9e8f85] hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <h5 className="font-serif text-xs font-bold text-white mb-1">
                      {hotspot.title}
                    </h5>
                    <p className="text-[11px] text-[#cfc2b6] leading-relaxed">
                      {hotspot.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* On-screen Subtitles / Narration Box */}
          {showSubtitles && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 pointer-events-auto">
              <div className="bg-[#140e0c]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-[#3e2c27] shadow-xl max-w-3xl mx-auto flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#8b263e]/40 border border-[#8b263e] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                  <Wine className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#d4af37] mb-0.5 flex items-center gap-1.5">
                    <span>Voz del Enólogo · Bodegas Verduguez</span>
                    {isPlaying && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#f5efe6] leading-relaxed italic font-serif">
                    “{current.narratorText}”
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Player Control Bar */}
        <div className="px-4 py-3 bg-[#18110f] border-t border-[#2e1f1b] flex flex-col gap-2.5">
          {/* Progress Bar Timeline */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#a8998d] font-mono tabular-nums w-10 text-right">
              0:{currentSeconds.toString().padStart(2, '0')}
            </span>

            <div
              className="relative flex-1 h-2 bg-[#2a1b18] rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPercent = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                setPlaybackProgress(newPercent);
              }}
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#8b263e] via-[#d4af37] to-[#d4af37] transition-all duration-100 rounded-full"
                style={{ width: `${playbackProgress}%` }}
              />
            </div>

            <span className="text-[11px] text-[#8e7e73] font-mono tabular-nums w-10">
              0:{current.durationSeconds.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Control Buttons Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Prev Chapter */}
              <button
                onClick={() => goToChapter(Math.max(0, currentChapterIndex - 1))}
                disabled={currentChapterIndex === 0}
                className="p-1.5 rounded-lg bg-[#241714] border border-[#3a2520] text-[#cfc1b4] hover:text-[#d4af37] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Capítulo anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Main Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="px-4 py-1.5 rounded-lg bg-[#d4af37] hover:bg-[#c29e2c] text-[#1c1514] font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                aria-label={isPlaying ? 'Pausar recorrido' : 'Reproducir recorrido'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Continuar</span>
                  </>
                )}
              </button>

              {/* Next Chapter */}
              <button
                onClick={() => goToChapter(Math.min(chapters.length - 1, currentChapterIndex + 1))}
                disabled={currentChapterIndex === chapters.length - 1}
                className="p-1.5 rounded-lg bg-[#241714] border border-[#3a2520] text-[#cfc1b4] hover:text-[#d4af37] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Capítulo siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Replay */}
              <button
                onClick={handleRestart}
                className="p-1.5 rounded-lg bg-[#241714] border border-[#3a2520] text-[#a8998d] hover:text-white transition-colors"
                title="Reiniciar desde el principio"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Subtitles toggle */}
              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`px-2 py-1 rounded text-[11px] font-medium border transition-colors ${
                  showSubtitles
                    ? 'bg-[#2b1b17] border-[#d4af37]/40 text-[#d4af37]'
                    : 'bg-[#211613] border-[#382622] text-[#8e7e73]'
                }`}
              >
                Subtítulos {showSubtitles ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Direct Booking / Wine action buttons */}
            <div className="flex items-center gap-2">
              {onExploreWines && (
                <button
                  onClick={() => {
                    stopSpeech();
                    onClose();
                    onExploreWines();
                  }}
                  className="hidden md:inline-flex px-3.5 py-1.5 text-xs font-medium text-[#d8cfc5] hover:text-white bg-[#261916] border border-[#3c2924] rounded-lg transition-colors"
                >
                  Ver Vinos del Recorrido
                </button>
              )}

              <button
                onClick={() => {
                  stopSpeech();
                  onClose();
                  onBookVisit();
                }}
                className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#8b263e] hover:bg-[#721f32] text-white rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Reservar Esta Visita Presencial
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Thumbnails Strip */}
        <div className="p-3 sm:p-4 bg-[#140e0c] border-t border-[#2a1c18] overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {chapters.map((chap, idx) => {
              const isActive = currentChapterIndex === idx;
              return (
                <button
                  key={chap.id}
                  onClick={() => goToChapter(idx)}
                  className={`flex items-center gap-2.5 p-2 rounded-xl text-left border transition-all ${
                    isActive
                      ? 'bg-[#261815] border-[#d4af37] text-white shadow-md'
                      : 'bg-[#1a1210] border-[#34221d] text-[#a8998d] hover:bg-[#221613] hover:text-[#e8dfd5]'
                  }`}
                >
                  <img
                    src={chap.image}
                    alt={chap.title}
                    referrerPolicy="no-referrer"
                    className="w-12 h-10 rounded-lg object-cover object-center shrink-0"
                  />
                  <div className="pr-2">
                    <div className="text-[10px] font-semibold text-[#d4af37] uppercase">
                      {chap.chapterNumber}
                    </div>
                    <div className="font-serif text-xs font-bold line-clamp-1 max-w-[140px]">
                      {chap.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
