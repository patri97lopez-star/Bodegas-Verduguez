import React from 'react';
import { ShieldCheck, Award, Leaf, HeartHandshake, FileCheck } from 'lucide-react';

export const CertificationsQuality: React.FC = () => {
  const certifications = [
    {
      title: 'D.O. La Mancha',
      tagline: 'Denominación de Origen Protegida',
      description: 'Nuestros vinos están certificados bajo la regulación más exigente de Castilla-La Mancha, garantizando el origen Villanueva de Alcardete, rendimientos controlados y exhaustivas catas ciegas de calidad oficial.',
      icon: Award,
    },
    {
      title: 'Agricultura Ecológica CAAE',
      tagline: 'Sello Euro-Hoja Oficial',
      description: 'Parcelas cultivadas sin abonos de síntesis ni pesticidas. Fomentamos la biodiversidad natural del viñedo y elaboramos vinos honestos, limpios y respetuosos con las generaciones futuras.',
      icon: Leaf,
    },
    {
      title: 'Certificado Vegano V-Label',
      tagline: 'Vinificación 100% Libre de Derivados Animales',
      description: 'Auditado por la Unión Vegetariana Europea. En nuestros procesos de clarificación empleamos exclusivamente bentonitas minerales o proteínas vegetales de guisante y patata.',
      icon: HeartHandshake,
    },
    {
      title: 'Norma IFS Food',
      tagline: 'Seguridad y Calidad Alimentaria Internacional',
      description: 'Garantía de excelencia que avala nuestras instalaciones para la exportación a las cadenas más exigentes del mundo, con trazabilidad rigurosa desde la cepa hasta la botella.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-white text-[#1c1514] border-t border-[#ede4d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8b263e] mb-2">
            <FileCheck className="w-4 h-4 text-[#8b263e]" />
            <span>Garantía de Excelencia</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1514] mb-4">
            Certificaciones oficiales que respaldan nuestra labor
          </h2>
          <p className="text-sm sm:text-base text-[#615249] leading-relaxed">
            La confianza de nuestros clientes en más de 27 países se apoya en auditorías rigurosas que avalan tanto la autenticidad del terruño como la seguridad y sostenibilidad de nuestros métodos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8dfd4] flex flex-col justify-between hover:border-[#8b263e]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e4d8cc] flex items-center justify-center text-[#8b263e] mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-semibold text-[#8b263e] uppercase tracking-wider mb-1">
                    {item.tagline}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1c1514] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5c4d45] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eee3d7] flex items-center gap-1.5 text-xs text-[#827168] font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Auditoría en vigor</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
