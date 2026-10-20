import React, { useState, useMemo } from 'react';
import { WINES_DATA, WineItem } from '../data/wineryData';
import { WineModal } from './WineModal';
import wineBottlesImg from '../assets/images/verduguez_wine_bottles_1791985792833.jpg';
import { Search, SlidersHorizontal, Wine, Check, ArrowRight, Eye, Plus } from 'lucide-react';

interface WineCatalogProps {
  onAddToCart: (wine: WineItem) => void;
  cartWineIds: string[];
  currentCategory?: CategoryFilter;
  onCategoryChange?: (category: CategoryFilter) => void;
}

export type CategoryFilter = 'todos' | 'crianza-reserva' | 'do-lamancha' | 'ecologicos' | 'espumosos' | 'cocteles';

export const WineCatalog: React.FC<WineCatalogProps> = ({
  onAddToCart,
  cartWineIds,
  currentCategory,
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<CategoryFilter>('todos');
  const selectedCategory = currentCategory !== undefined ? currentCategory : internalCategory;

  const handleSelectCategory = (cat: CategoryFilter) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [activeWineForModal, setActiveWineForModal] = useState<WineItem | null>(null);

  const categories = [
    { id: 'todos' as CategoryFilter, label: 'Toda la Colección' },
    { id: 'crianza-reserva' as CategoryFilter, label: 'Crianza & Reserva' },
    { id: 'do-lamancha' as CategoryFilter, label: 'D.O. La Mancha' },
    { id: 'ecologicos' as CategoryFilter, label: 'Ecológicos & Veganos' },
    { id: 'espumosos' as CategoryFilter, label: 'Espumosos Cueva' },
    { id: 'cocteles' as CategoryFilter, label: 'Fogoso & Sangría' },
  ];

  const filteredWines = useMemo(() => {
    return WINES_DATA.filter((wine) => {
      const matchesCategory =
        selectedCategory === 'todos' || wine.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        wine.name.toLowerCase().includes(q) ||
        wine.brand.toLowerCase().includes(q) ||
        wine.varietals.some((v) => v.toLowerCase().includes(q)) ||
        wine.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="vinos" className="py-24 bg-[#faf7f2] text-[#1c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with split banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8b263e] mb-2">
              <Wine className="w-4 h-4 text-[#8b263e]" />
              <span>Nuestros Vinos & Marcas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1514] mb-4 text-balance">
              Colección elaborada con pasión y pureza varietal
            </h2>
            <p className="text-base sm:text-lg text-[#5e5048] leading-relaxed text-balance">
              Desde nuestros aclamados Imperial Toledo de crianza y reservas nobles, hasta vinos ecológicos y veganos certificados, espumosos de cueva y creaciones audaces como Fogoso.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2d5c7] h-52 sm:h-64">
              <img
                src={wineBottlesImg}
                alt="Botellas y copas de vino de Bodegas Verduguez en mesa de bodega"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                  Calidad D.O. La Mancha
                </span>
                <p className="text-xs sm:text-sm text-[#f1ede6] font-medium">
                  Embotellado en origen en Villanueva de Alcardete
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e8ded4] shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Functional Segmented Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#1c1514] text-white shadow-sm'
                      : 'text-[#63534b] hover:text-[#1c1514] hover:bg-[#faf7f2]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#8a7a70] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por uva, añada o marca..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#faf7f2] border border-[#e0d4c6] rounded-lg text-[#1c1514] placeholder-[#8a7a70] focus:outline-none focus:border-[#8b263e] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8a7a70] hover:text-[#1c1514]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Wine Grid */}
        {filteredWines.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e8dfd5] max-w-lg mx-auto">
            <Wine className="w-10 h-10 text-[#baa89c] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#1c1514] mb-1">
              No se encontraron vinos
            </h3>
            <p className="text-xs text-[#6e5d55] mb-4">
              Prueba con otro término de búsqueda o selecciona otra categoría.
            </p>
            <button
              onClick={() => {
                handleSelectCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1c1514] text-white rounded hover:bg-[#332521] transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWines.map((wine) => {
              const isInCart = cartWineIds.includes(wine.id);
              return (
                <div
                  key={wine.id}
                  className="bg-white rounded-2xl border border-[#e8ded3] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header & Content */}
                  <div className="p-6 sm:p-7">
                    {/* Quiet Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-[#705e55] mb-2 font-medium">
                      <span>{wine.brand}</span>
                      {wine.vintage && <span className="tabular-nums">Añada {wine.vintage}</span>}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1514] mb-2">
                      {wine.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5d4f48] leading-relaxed mb-4 line-clamp-2">
                      {wine.tagline}
                    </p>

                    {/* Varietals & Specs unboxed list */}
                    <div className="space-y-1.5 text-xs text-[#6e5d54] py-3 border-y border-[#f1eae0] mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#1c1514]">Variedades:</span>
                        <span className="text-right truncate max-w-[180px]">
                          {wine.varietals.join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#1c1514]">Graduación:</span>
                        <span className="tabular-nums">{wine.alcohol}</span>
                      </div>
                      {wine.barrelAging && (
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#1c1514]">Crianza:</span>
                          <span className="text-right truncate max-w-[180px]">
                            {wine.barrelAging}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Certifications text badges */}
                    {wine.certifications && wine.certifications.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#78675d] mb-4">
                        {wine.certifications.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 bg-[#faf6f0] border border-[#e8dfd2] rounded text-[#423631]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 sm:p-7 pt-0 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-[#705e55]">
                        Precio orientativo:
                        <div className="font-serif text-lg font-bold text-[#1c1514] tabular-nums">
                          {wine.priceEstimate}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveWineForModal(wine)}
                        className="text-xs font-semibold text-[#8b263e] hover:text-[#5c1323] flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ficha Sensorial</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveWineForModal(wine)}
                        className="px-3 py-2 text-xs font-medium text-[#3b2f29] bg-[#faf7f2] hover:bg-[#f0e8de] border border-[#e2d5c7] rounded transition-colors text-center"
                      >
                        Ver Detalles
                      </button>

                      <button
                        onClick={() => onAddToCart(wine)}
                        className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 ${
                          isInCart
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#1c1514] hover:bg-[#342723] text-white'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>En Consulta</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Añadir</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Sensory Wine Detail Modal */}
        <WineModal
          wine={activeWineForModal}
          onClose={() => setActiveWineForModal(null)}
          onAddToCart={onAddToCart}
          isInCart={activeWineForModal ? cartWineIds.includes(activeWineForModal.id) : false}
        />
      </div>
    </section>
  );
};
