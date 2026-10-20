import React, { useState } from 'react';
import { EXPORT_REGIONS, WINERY_INFO } from '../data/wineryData';
import { Globe, Plane, Mail, Building2, CheckCircle2, FileText } from 'lucide-react';

export const ExportPresence: React.FC = () => {
  const [dossierRequested, setDossierRequested] = useState(false);
  const [b2bName, setB2bName] = useState('');
  const [b2bCompany, setB2bCompany] = useState('');
  const [b2bCountry, setB2bCountry] = useState('');
  const [b2bEmail, setB2bEmail] = useState('');

  const handleB2bSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!b2bEmail || !b2bCompany) return;
    setDossierRequested(true);
  };

  return (
    <section className="py-24 bg-[#140e0c] text-[#f5efe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            <Globe className="w-4 h-4 text-[#d4af37]" />
            <span>Presencia Internacional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fbf7f0] mb-4 text-balance">
            Exportando el carácter de La Mancha a más de 27 países
          </h2>
          <p className="text-base sm:text-lg text-[#c4b5a6] leading-relaxed text-balance">
            Desde 1999, Bodegas Verduguez mantiene una decidida vocación internacional. Nuestra capacidad de adaptación y flexibilidad enológica nos permite abastecer a los importadores y cadenas más exigentes del mundo.
          </p>
        </div>

        {/* Global Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {EXPORT_REGIONS.map((item) => (
            <div
              key={item.region}
              className="p-6 rounded-2xl bg-[#1d1614] border border-[#382a26] flex flex-col justify-between hover:border-[#d4af37]/40 transition-colors"
            >
              <div>
                <div className="text-3xl mb-3">{item.flag}</div>
                <h3 className="font-serif text-xl font-bold text-[#fbf7f0] mb-2">
                  {item.region}
                </h3>
                <p className="text-xs text-[#b8aba0] leading-relaxed">
                  {item.market}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2e211e] flex items-center justify-between text-[11px] text-[#8e7e72]">
                <span>Distribución consolidada</span>
                <span className="text-[#d4af37]">D.O. La Mancha & Bio</span>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Importer / Distributor Module */}
        <div className="bg-[#1f1715] rounded-2xl border border-[#3a2b27] p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] block mb-2">
                Canal Profesionales & Export
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf7f0] mb-4">
                ¿Es distribuidor, sumiller o importador?
              </h3>
              <p className="text-xs sm:text-sm text-[#b8aba0] leading-relaxed mb-6">
                Ponga a su disposición fichas técnicas detalladas en varios idiomas, tarifas de exportación FOB/EXW, opciones de marca propia y muestras para su comité de cata.
              </p>
              <div className="space-y-2 text-xs text-[#dcd1c6]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>Departamento de Exportación: {WINERY_INFO.emailExport}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Flexibilidad en lotes, etiquetado y certificaciones internacionales (IFS Food).</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {dossierRequested ? (
                <div className="p-6 bg-[#261d1a] rounded-xl border border-[#44332e] text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <h4 className="font-serif text-lg font-bold text-[#fbf7f0] mb-1">
                    Dossier y Lista de Precios Solicitados
                  </h4>
                  <p className="text-xs text-[#b8aba0] leading-relaxed">
                    Hemos remitido los catálogos técnicos a <strong>{b2bEmail}</strong>. Nuestro responsable de exportación para <strong>{b2bCountry || 'su región'}</strong> contactará en breve con su empresa.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleB2bSubmit}
                  className="bg-[#261d1a] p-6 rounded-xl border border-[#3c2d28] space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#c4b5a6] mb-1">
                        Nombre del Contacto *
                      </label>
                      <input
                        type="text"
                        required
                        value={b2bName}
                        onChange={(e) => setB2bName(e.target.value)}
                        placeholder="Ej. Hans Müller"
                        className="w-full px-3 py-2 text-xs bg-[#1a1311] border border-[#3c2d28] rounded text-[#f5efe6] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c4b5a6] mb-1">
                        Empresa / Distribuidora *
                      </label>
                      <input
                        type="text"
                        required
                        value={b2bCompany}
                        onChange={(e) => setB2bCompany(e.target.value)}
                        placeholder="Ej. Wein Import GmbH"
                        className="w-full px-3 py-2 text-xs bg-[#1a1311] border border-[#3c2d28] rounded text-[#f5efe6] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#c4b5a6] mb-1">
                        País de Destino *
                      </label>
                      <input
                        type="text"
                        required
                        value={b2bCountry}
                        onChange={(e) => setB2bCountry(e.target.value)}
                        placeholder="Ej. Alemania, Japón, EE.UU..."
                        className="w-full px-3 py-2 text-xs bg-[#1a1311] border border-[#3c2d28] rounded text-[#f5efe6] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#c4b5a6] mb-1">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={b2bEmail}
                        onChange={(e) => setB2bEmail(e.target.value)}
                        placeholder="import@empresa.com"
                        className="w-full px-3 py-2 text-xs bg-[#1a1311] border border-[#3c2d28] rounded text-[#f5efe6] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#8e7e72]">
                      Respuesta en menos de 24 horas laborables.
                    </span>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#d4af37] hover:bg-[#c39e2e] text-[#1c1514] font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Solicitar Dossier Export</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
