import React, { useState } from 'react';
import { TIMELINE_MILESTONES, WINERY_INFO } from '../data/wineryData';
import barrelImg from '../assets/images/verduguez_barrel_cellar_1791985793533.jpg';
import { History, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const HistoryTradition: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(1);

  return (
    <section id="bodega" className="py-24 bg-[#faf7f2] text-[#1c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8b263e] mb-2">
            <History className="w-4 h-4 text-[#8b263e]" />
            <span>Nuestra Historia & Familia</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1514] mb-4 text-balance">
            Tradición familiar centenaria en Villanueva de Alcardete
          </h2>
          <p className="text-base sm:text-lg text-[#5c4f49] leading-relaxed text-balance">
            Desde que los primeros lagares de la familia Verduguez comenzaron a trabajar la uva en 1950, cuatro generaciones han guardado con lealtad el respeto al viñedo, conjugándolo con un espíritu incansable de innovación.
          </p>
        </div>

        {/* 2-Column Split: Visual Story & Founder Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Left Column: Image with Oak Aging Cellar */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e4d9cc] h-full min-h-[380px]">
              <img
                src={barrelImg}
                alt="Sala de crianza y barricas de roble de Bodegas Verduguez"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/90 via-[#140e0c]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Sala de Barricas Subterránea
                </span>
                <p className="font-serif text-lg sm:text-xl font-medium leading-snug">
                  Crianza paciente en silencio: barricas de roble francés y americano donde reposan nuestros reservas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Family Legacy Details & Leadership Quote */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-8 sm:p-10 rounded-2xl border border-[#e8dfd5] shadow-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8b263e] font-semibold mb-3">
                El Salto a la Calidad (1994)
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1c1514] mb-4">
                La visión de Miguel Ángel Verduguez Morata
              </h3>
              <p className="text-[#554740] leading-relaxed mb-6 text-sm sm:text-base">
                En 1994, la cuarta generación tomó el testigo con una determinación clara: abandonar la venta a granel tradicional de la comarca y transformar Bodegas Verduguez en un referente de <strong>vinos embotellados puros, monovarietales de alta expresión</strong> amparados bajo la <strong>Denominación de Origen La Mancha</strong>.
              </p>
              <p className="text-[#554740] leading-relaxed mb-8 text-sm sm:text-base">
                Esta audacia no tardó en cosechar frutos: en 1999 se dio el salto exportador, llevando la autenticidad toledana a las mesas más exigentes de Europa, Asia y Norteamérica, sin perder nunca el trato cercano de bodega familiar de pueblo.
              </p>
            </div>

            {/* Quote block */}
            <div className="bg-[#faf6f0] p-6 rounded-xl border border-[#eedfcb]">
              <blockquote className="font-serif italic text-base sm:text-lg text-[#2a1d1a] leading-relaxed mb-3">
                “El vino no es solo uva fermentada: es el testimonio vivo de nuestra tierra, el sudor de nuestros abuelos bajo el sol manchego y el orgullo de mirar al futuro sin olvidar de dónde venimos.”
              </blockquote>
              <div className="flex items-center justify-between text-xs text-[#705e55]">
                <span className="font-semibold text-[#1c1514]">Miguel Ángel Verduguez Morata</span>
                <span>Propietario & 4ª Generación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e8dfd5] shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#eee5dc]">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8b263e]">
                Cronología de la Bodega
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1514]">
                Hitos que han marcado nuestro rumbo
              </h3>
            </div>
            <div className="hidden sm:block text-xs text-[#7e6d64]">
              Seleccione un año para conocer la etapa
            </div>
          </div>

          {/* Timeline Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isActive = activeMilestoneIndex === idx;
              return (
                <button
                  key={milestone.year}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  className={`text-left p-3.5 rounded-xl transition-all border ${
                    isActive
                      ? 'bg-[#1c1514] text-white border-[#1c1514] shadow-md'
                      : 'bg-[#faf7f2] text-[#423631] border-[#e8ded4] hover:bg-[#f1ebe2]'
                  }`}
                >
                  <div
                    className={`font-serif text-lg font-bold tabular-nums ${
                      isActive ? 'text-[#d4af37]' : 'text-[#8b263e]'
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <div className="text-xs font-medium line-clamp-1 mt-0.5">
                    {milestone.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-[#faf7f2] p-6 sm:p-8 rounded-xl border border-[#e4d8cb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 animate-in fade-in duration-300">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-2xl font-bold text-[#8b263e] tabular-nums">
                  {TIMELINE_MILESTONES[activeMilestoneIndex].year}
                </span>
                <span className="text-[#a08f84]">·</span>
                <h4 className="font-serif text-xl font-bold text-[#1c1514]">
                  {TIMELINE_MILESTONES[activeMilestoneIndex].title}
                </h4>
              </div>
              <p className="text-[#554740] text-sm sm:text-base leading-relaxed">
                {TIMELINE_MILESTONES[activeMilestoneIndex].description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#8b263e] uppercase tracking-wider bg-white px-4 py-2.5 rounded-lg border border-[#e2d5c7]">
              <span>Capítulo {activeMilestoneIndex + 1} de {TIMELINE_MILESTONES.length}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
