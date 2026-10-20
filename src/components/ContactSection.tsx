import React, { useState } from 'react';
import { WINERY_INFO } from '../data/wineryData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'particular',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#faf7f2] text-[#1c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8b263e] mb-2">
            <MessageSquare className="w-4 h-4 text-[#8b263e]" />
            <span>Contacto Directo & Localización</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1514] mb-4 text-balance">
            Estamos a su entera disposición en Villanueva de Alcardete
          </h2>
          <p className="text-base sm:text-lg text-[#5e4e46] leading-relaxed text-balance">
            Visítenos en el corazón vinícola de Toledo o contáctenos para cualquier consulta comercial, pedido o visita personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Winery Details & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e8ded3] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#1c1514] pb-4 border-b border-[#f0e7db]">
                Información de la Bodega
              </h3>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4d4039]">
                <MapPin className="w-5 h-5 text-[#8b263e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1c1514]">Sede y Bodega Central:</div>
                  <div>{WINERY_INFO.address}</div>
                  <div>
                    {WINERY_INFO.postalCode} {WINERY_INFO.city} ({WINERY_INFO.province})
                  </div>
                  <div>{WINERY_INFO.country}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4d4039]">
                <Phone className="w-5 h-5 text-[#8b263e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1c1514]">Teléfonos de Atención:</div>
                  <div className="tabular-nums">Fijo: {WINERY_INFO.phone}</div>
                  <div className="tabular-nums">Móvil / WhatsApp: {WINERY_INFO.mobile}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4d4039]">
                <Mail className="w-5 h-5 text-[#8b263e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1c1514]">Correos Electrónicos:</div>
                  <div>General: {WINERY_INFO.emailGeneral}</div>
                  <div>Exportación: {WINERY_INFO.emailExport}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#4d4039]">
                <Clock className="w-5 h-5 text-[#8b263e] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1c1514]">Horario de Bodega:</div>
                  <div>{WINERY_INFO.hours}</div>
                  <div className="text-[11px] text-[#85736a] mt-0.5">
                    Sábados: visitas y catas bajo reserva previa
                  </div>
                </div>
              </div>
            </div>

            {/* Road access and geographic note */}
            <div className="bg-[#f2ece2] p-6 rounded-2xl border border-[#ded1c2] text-xs text-[#52443d]">
              <div className="font-serif text-sm font-bold text-[#1c1514] mb-1">
                ¿Cómo llegar a la bodega?
              </div>
              <p className="leading-relaxed">
                Situada a menos de 1 hora de Toledo y 1 hora y cuarto de Madrid por la Autovía de los Viñedos (CM-42 / CM-310). Fácil acceso y aparcamiento propio para turismos y autobuses de grupos.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#e8ded3] shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center max-w-md mx-auto my-auto">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h4 className="font-serif text-2xl font-bold text-[#1c1514] mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-[#5d4f47] leading-relaxed mb-6">
                  Muchas gracias por contactar con Bodegas Verduguez, <strong>{formData.name}</strong>. Nuestro equipo le responderá a la mayor brevedad a <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'particular',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 bg-[#1c1514] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#382b26] transition-colors"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1c1514] mb-1">
                    Envíenos su consulta
                  </h3>
                  <p className="text-xs text-[#6e5d54]">
                    Rellene el siguiente formulario y nos pondremos en contacto con usted.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Manuel Navarro"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="manuel@ejemplo.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                      Motivo del Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e]"
                    >
                      <option value="particular">Consulta Particular / Compra Directa</option>
                      <option value="distribucion">Distribución Nacional / Horeca</option>
                      <option value="exportacion">Importación & Mercado Exterior</option>
                      <option value="enoturismo">Dudas sobre Visitas y Catas</option>
                      <option value="prensa">Comunicación y Prensa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1c1514] mb-1.5">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escriba aquí los detalles de su consulta, vinos de su interés o fechas previstas..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#faf7f2] border border-[#ded1c2] rounded-lg text-[#1c1514] focus:outline-none focus:border-[#8b263e] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#85736a]">
                    Tratamos sus datos conforme al RGPD con estricta confidencialidad.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#8b263e] hover:bg-[#701e31] text-white font-semibold text-xs tracking-wider uppercase rounded shadow-sm transition-colors flex items-center gap-2"
                  >
                    <span>Enviar Mensaje</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
