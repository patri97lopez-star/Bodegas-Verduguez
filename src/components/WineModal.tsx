import React from 'react';
import { WineItem } from '../data/wineryData';
import { X, Award, Check, GlassWater, Thermometer, UtensilsCrossed, Sparkles } from 'lucide-react';

interface WineModalProps {
  wine: WineItem | null;
  onClose: () => void;
  onAddToCart: (wine: WineItem) => void;
  isInCart: boolean;
}

export const WineModal: React.FC<WineModalProps> = ({
  wine,
  onClose,
  onAddToCart,
  isInCart,
}) => {
  if (!wine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#faf7f2] text-[#1c1514] rounded-2xl shadow-2xl border border-[#ded2c3] max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wine-modal-title"
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#423631] hover:text-[#1c1514] border border-[#e4d8cb] transition-colors z-10"
          aria-label="Cerrar ficha de cata"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#e8ded3] bg-white">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b263e] mb-2">
            <span>{wine.brand}</span>
            <span aria-hidden="true">·</span>
            <span>{wine.varietals.join(', ')}</span>
            {wine.vintage && (
              <>
                <span aria-hidden="true">·</span>
                <span>Añada {wine.vintage}</span>
              </>
            )}
          </div>

          <h3 id="wine-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1514] mb-2">
            {wine.name}
          </h3>

          <p className="text-sm sm:text-base text-[#61524a] leading-relaxed">
            {wine.description}
          </p>

          {/* Quick specs pill-free strip */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#52453e] mt-4 pt-4 border-t border-[#f0e7dc]">
            <div>
              <span className="font-semibold text-[#1c1514]">Graduación:</span>{' '}
              <span className="tabular-nums">{wine.alcohol}</span>
            </div>
            {wine.barrelAging && (
              <div>
                <span className="font-semibold text-[#1c1514]">Crianza:</span>{' '}
                <span>{wine.barrelAging}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Thermometer className="w-3.5 h-3.5 text-[#8b263e]" />
              <span className="font-semibold text-[#1c1514]">Servicio:</span>{' '}
              <span>{wine.servingTemp}</span>
            </div>
          </div>
        </div>

        {/* Tasting Notes (Fase Visual, Nariz, Boca) */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-[#e8dfd5]">
            <h4 className="font-serif text-lg font-bold text-[#1c1514] mb-3 flex items-center gap-2">
              <GlassWater className="w-4 h-4 text-[#8b263e]" />
              <span>Notas de Cata Sensorial</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#eee4d8]">
                <div className="font-semibold text-[#8b263e] uppercase tracking-wider text-[11px] mb-1">
                  Fase Visual
                </div>
                <p className="text-[#52453e] leading-relaxed">{wine.tastingNotes.visual}</p>
              </div>

              <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#eee4d8]">
                <div className="font-semibold text-[#8b263e] uppercase tracking-wider text-[11px] mb-1">
                  Fase Olfativa
                </div>
                <p className="text-[#52453e] leading-relaxed">{wine.tastingNotes.nose}</p>
              </div>

              <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#eee4d8]">
                <div className="font-semibold text-[#8b263e] uppercase tracking-wider text-[11px] mb-1">
                  Fase Gustativa
                </div>
                <p className="text-[#52453e] leading-relaxed">{wine.tastingNotes.palate}</p>
              </div>
            </div>
          </div>

          {/* Gastronomic Pairing */}
          <div className="bg-white p-5 rounded-xl border border-[#e8dfd5] flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#faf5ed] text-[#8b263e] shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-serif text-base font-bold text-[#1c1514] mb-1">
                Maridaje Recomendado
              </h5>
              <p className="text-xs sm:text-sm text-[#5a4c45] leading-relaxed">
                {wine.pairing}
              </p>
            </div>
          </div>

          {/* Awards & Certifications */}
          {(wine.awards || wine.certifications) && (
            <div className="bg-[#faf5ed] p-5 rounded-xl border border-[#e8dcce]">
              <div className="text-xs font-semibold text-[#8b263e] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#8b263e]" />
                <span>Sellos, Certificaciones y Galardones</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#443833]">
                {wine.certifications?.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded border border-[#dfd2c2] font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    {cert}
                  </span>
                ))}
                {wine.awards?.map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#fcf9f4] rounded border border-[#eedfcb] font-medium text-[#7a571c]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    {award}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 bg-white border-t border-[#e8ded3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            {wine.priceEstimate && (
              <div className="text-xs text-[#73635b]">
                Precio orientativo bodega:{' '}
                <span className="font-serif text-lg font-bold text-[#1c1514] tabular-nums">
                  {wine.priceEstimate}
                </span>
              </div>
            )}
            <div className="text-[11px] text-[#8e7e76]">
              Disponible para distribución nacional, exportación y degustación.
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#4d4039] hover:text-[#1c1514] border border-[#ded2c3] rounded hover:bg-[#faf7f2] transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => onAddToCart(wine)}
              className={`w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 ${
                isInCart
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#8b263e] hover:bg-[#721f32] text-white shadow-sm'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Añadido a Consulta</span>
                </>
              ) : (
                <span>Añadir a Consulta de Pedido</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
