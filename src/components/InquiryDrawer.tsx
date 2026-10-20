import React, { useState } from 'react';
import { WineItem } from '../data/wineryData';
import { X, Trash2, Send, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { wine: WineItem; quantity: number }[];
  onUpdateQuantity: (wineId: string, quantity: number) => void;
  onRemoveItem: (wineId: string) => void;
  onClearCart: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [inquiryType, setInquiryType] = useState<'particular' | 'profesional'>('particular');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalBottles = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf7f2] text-[#1c1514] border-l border-[#ded2c3] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#e8ded3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8b263e]" />
              <h3 className="font-serif text-lg font-bold text-[#1c1514]">
                Consulta de Vinos & Pedido
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#faf7f2] text-[#705f56] hover:text-[#1c1514] transition-colors"
              aria-label="Cerrar panel de consulta"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {submitted ? (
              <div className="py-8 text-center bg-white p-6 rounded-2xl border border-[#ded1c2]">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#1c1514] mb-2">
                  ¡Solicitud Enviada a Bodega!
                </h4>
                <p className="text-xs sm:text-sm text-[#5d4f47] leading-relaxed mb-4">
                  Gracias <strong>{userName}</strong>. Hemos recibido su interés por los{' '}
                  <strong>{totalBottles} vinos</strong> seleccionados. Nuestro equipo comercial le contactará en <strong>{userEmail}</strong> con la propuesta y disponibilidad de añada.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1c1514] text-white rounded hover:bg-[#342723] transition-colors"
                >
                  Finalizar
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center text-[#7a6b63]">
                <ShoppingBag className="w-12 h-12 text-[#c9b8ab] mx-auto mb-3" />
                <p className="font-serif text-base font-bold text-[#1c1514] mb-1">
                  No ha seleccionado ningún vino
                </p>
                <p className="text-xs leading-relaxed max-w-xs mx-auto mb-6">
                  Explore nuestro catálogo y pulse "Añadir" en los vinos que desee incluir en su consulta o reserva de degustación.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#8b263e] text-white rounded hover:bg-[#721f32] transition-colors"
                >
                  Ver Catálogo de Vinos
                </button>
              </div>
            ) : (
              <>
                {/* List of selected wines */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#706057]">
                    <span>Vinos en la lista ({cartItems.length})</span>
                    <button
                      onClick={onClearCart}
                      className="text-[#8b263e] hover:underline text-[11px]"
                    >
                      Vaciar lista
                    </button>
                  </div>

                  {cartItems.map(({ wine, quantity }) => (
                    <div
                      key={wine.id}
                      className="p-3.5 bg-white rounded-xl border border-[#e8dfd5] flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-[#8b263e] font-semibold uppercase tracking-wider">
                          {wine.brand}
                        </div>
                        <h5 className="font-serif text-sm font-bold text-[#1c1514] truncate">
                          {wine.name}
                        </h5>
                        <div className="text-[11px] text-[#73635a]">
                          {wine.priceEstimate} · {wine.varietals[0]}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-[#faf7f2] border border-[#ded2c3] rounded px-1.5 py-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(wine.id, Math.max(1, quantity - 1))}
                          className="w-6 h-6 text-xs font-bold text-[#42352f] hover:bg-[#f0e7db] rounded"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold tabular-nums">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(wine.id, quantity + 1)}
                          className="w-6 h-6 text-xs font-bold text-[#42352f] hover:bg-[#f0e7db] rounded"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(wine.id)}
                        className="text-[#96867d] hover:text-rose-700 p-1 transition-colors"
                        title="Eliminar de la lista"
                        aria-label={`Eliminar ${wine.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Form to submit inquiry */}
                <form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl border border-[#e8dfd5] space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8b263e]">
                    Datos de la Consulta
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#faf7f2] rounded-lg border border-[#e6dcce]">
                    <button
                      type="button"
                      onClick={() => setInquiryType('particular')}
                      className={`py-1.5 text-xs font-medium rounded transition-colors ${
                        inquiryType === 'particular'
                          ? 'bg-white text-[#1c1514] shadow-xs'
                          : 'text-[#6e5d55]'
                      }`}
                    >
                      Particular / Cata
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('profesional')}
                      className={`py-1.5 text-xs font-medium rounded transition-colors ${
                        inquiryType === 'profesional'
                          ? 'bg-white text-[#1c1514] shadow-xs'
                          : 'text-[#6e5d55]'
                      }`}
                    >
                      Horeca / Distribución
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1">
                      Nombre o Razón Social *
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Ej. Roberto Sánchez"
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="roberto@correo.com"
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1">
                      Teléfono y Localidad
                    </label>
                    <input
                      type="text"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="Ej. +34 611 222 333 (Madrid / Toledo...)"
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1">
                      Comentarios o requerimientos
                    </label>
                    <textarea
                      rows={2}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      placeholder="Indique si precisa envío a domicilio, estuches de regalo o cata..."
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded text-[#1c1514] focus:outline-none focus:border-[#8b263e] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#8b263e] hover:bg-[#721f32] text-white rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Enviar Consulta a Bodega</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-white border-t border-[#e8ded3] text-[11px] text-[#786860] text-center">
            Venta directa desde bodega · Villanueva de Alcardete (Toledo) · D.O. La Mancha
          </div>
        </div>
      </div>
    </div>
  );
};
