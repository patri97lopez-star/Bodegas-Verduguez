export interface WineItem {
  id: string;
  name: string;
  brand: string;
  category: 'do-lamancha' | 'crianza-reserva' | 'ecologicos' | 'espumosos' | 'cocteles';
  vintage?: string;
  varietals: string[];
  alcohol: string;
  barrelAging?: string;
  tagline: string;
  description: string;
  tastingNotes: {
    visual: string;
    nose: string;
    palate: string;
  };
  pairing: string;
  servingTemp: string;
  certifications?: string[];
  awards?: string[];
  priceEstimate?: string;
}

export interface EnotourismTour {
  id: string;
  title: string;
  duration: string;
  pricePerPerson: number;
  badge: string;
  description: string;
  includes: string[];
  idealFor: string;
}

export const WINERY_INFO = {
  name: 'Bodegas Verduguez',
  legalName: 'Bodegas Verduguez S.L.',
  foundedYear: 1950,
  origin: 'Villanueva de Alcardete, Toledo, España',
  denominacion: 'D.O. La Mancha',
  currentLeadership: 'Miguel Ángel Verduguez Morata (4ª Generación)',
  altitude: '780 metros sobre el nivel del mar',
  climate: 'Continental extremo con gran salto térmico estival día-noche (+20°C)',
  soil: 'Calizo-arcilloso con excelente drenaje y retención mineral',
  sunHours: '+3.000 horas anuales de insolación',
  exportCountriesCount: 27,
  address: 'Calle Los Hinojosos, 1',
  postalCode: '45810',
  city: 'Villanueva de Alcardete',
  province: 'Toledo',
  country: 'España',
  phone: '+34 925 167 493',
  mobile: '+34 647 540 199',
  emailGeneral: 'info@bodegasverduguez.com',
  emailExport: 'export@bodegasverduguez.com',
  hours: 'Lunes a Viernes: 08:00 - 14:00 y 16:00 - 19:00',
};

export const TIMELINE_MILESTONES = [
  {
    year: '1950',
    title: 'Fundación y Primeros Lagares',
    description: 'La familia Verduguez inicia la elaboración artesanal de vinos en Villanueva de Alcardete, aprovechando la riqueza vinícola de las cepas viejas manchegas y el saber transmitido de padres a hijos.',
  },
  {
    year: '1994',
    title: 'Revolución de la Calidad y Monovarietales',
    description: 'Miguel Ángel Verduguez Morata asume la dirección y transforma el modelo tradicional hacia la alta calidad, el embotellado de vinos monovarietales puros y la excelencia bajo el sello D.O. La Mancha.',
  },
  {
    year: '1999',
    title: 'Apertura al Mercado Internacional',
    description: 'Comienza la expansión exterior de la bodega. Sus vinos conquistan mercados exigentes en Centroeuropa, Estados Unidos y Asia gracias a una inmejorable relación de autenticidad y frescura.',
  },
  {
    year: '2001',
    title: 'Constitución S.L. & Nueva Nave de Crianza',
    description: 'Ampliación de las instalaciones con parques de barricas de roble francés y americano, e implementación de tecnología puntera con control termorregulado de fermentación.',
  },
  {
    year: '2012',
    title: 'Pioneros en Vinos Ecológicos y Veganos',
    description: 'Certificación oficial del viñedo y procesos en agricultura ecológica (CAAE) y acreditación vegana V-Label, eliminando clarificantes de origen animal y respetando la microfauna del terruño.',
  },
  {
    year: 'Hoy',
    title: 'Vanguardia, Premios y Presencia en 27+ Países',
    description: 'Cuatro generaciones unidas por el vino, elaborando desde grandes reservas clásicos hasta innovaciones icónicas como Fogoso y sangrías de autor apreciadas en los 5 continentes.',
  },
];

export const WINES_DATA: WineItem[] = [
  {
    id: 'imperial-toledo-reserva',
    name: 'Imperial Toledo Reserva',
    brand: 'Imperial Toledo',
    category: 'crianza-reserva',
    vintage: '2018',
    varietals: ['100% Tempranillo (Cencibel)'],
    alcohol: '14.0% Vol.',
    barrelAging: '18 meses en roble francés y americano + 18 meses en botella',
    tagline: 'La máxima expresión de nuestro terruño centenario con noble crianza.',
    description: 'Vino tinto de guarda elaborado a partir de cepas viejas de secano a 780m de altitud. Un reserva noble, estructurado y de una elegancia profunda.',
    tastingNotes: {
      visual: 'Rojo rubí profundo con ribetes teja y capa media-alta, limpio y brillante.',
      nose: 'Compleja armonía de fruta madura en compota, ciruelas negras, higos secos, combinados con notas balsámicas, torrefactos, cacao fino y especias nobles (clavo y vainilla).',
      palate: 'En boca es potente, untuoso y aterciopelado. Taninos pulidos y maduros con una acidez equilibrada que prolonga un postgusto largo y mineral.',
    },
    pairing: 'Chuletones de vaca madurada, cordero lechal asado al horno de leña, guisos de caza mayor y queso manchego curado artesano.',
    servingTemp: '16°C - 18°C',
    certifications: ['D.O. La Mancha'],
    awards: ['Medalla de Oro - Concurso Selección La Mancha', '91 Puntos Guía Peñín'],
    priceEstimate: '14,50 €',
  },
  {
    id: 'imperial-toledo-crianza',
    name: 'Imperial Toledo Crianza',
    brand: 'Imperial Toledo',
    category: 'crianza-reserva',
    vintage: '2020',
    varietals: ['85% Tempranillo', '15% Cabernet Sauvignon'],
    alcohol: '13.5% Vol.',
    barrelAging: '12 meses en barrica de roble seleccionado',
    tagline: 'Equilibrio maestro entre frescura frutal y tostados especiados.',
    description: 'Un coupage armónico donde la redondez del Tempranillo se complementa con la columna vertebral del Cabernet, afinado un año en bodega subterránea.',
    tastingNotes: {
      visual: 'Granate intenso con reflejos violáceos de juventud aún persistente.',
      nose: 'Aromas marcados de frutos rojos y grosellas, entrelazados con notas de madera de cedro, vainilla y pimienta dulce.',
      palate: 'Entrada sabrosa y redonda, con taninos sedosos y un paso fresco y frutal. Final envolvente y persistente.',
    },
    pairing: 'Carnes a la brasa, embutidos ibéricos de bellota, arroces con carne y pastas con salsas trufadas.',
    servingTemp: '15°C - 17°C',
    certifications: ['D.O. La Mancha'],
    awards: ['Medalla de Plata - Bacchus International'],
    priceEstimate: '9,80 €',
  },
  {
    id: 'imperial-toledo-blanco-chardonnay',
    name: 'Imperial Toledo Blanco Fermentado',
    brand: 'Imperial Toledo',
    category: 'do-lamancha',
    vintage: '2023',
    varietals: ['Chardonnay', 'Macabeo'],
    alcohol: '13.0% Vol.',
    barrelAging: '4 meses sobre lías finas con battonage',
    tagline: 'Untuosidad mineral y aromas cítricos de altitud.',
    description: 'Vendimia nocturna a bajas temperaturas para atrapar los aromas más volátiles. La crianza sobre lías aporta un volumen en boca memorable.',
    tastingNotes: {
      visual: 'Amarillo pajizo dorado con destellos verdosos de gran brillantez.',
      nose: 'Explosión de fruta blanca de hueso (melocotón, pera de agua), notas cítricas de lima y un sutil fondo de mantequilla y pan tostado.',
      palate: 'Glicérico, untuoso y vibrante. La viva acidez equilibra la cremosidad aportada por las lías con un recuerdo floral duradero.',
    },
    pairing: 'Pescados al horno, arroces marineros, mariscos gallegos, risottos cremosos y quesos de cabra frescos.',
    servingTemp: '8°C - 10°C',
    certifications: ['D.O. La Mancha'],
    awards: ['Gran Selección Castilla-La Mancha'],
    priceEstimate: '8,20 €',
  },
  {
    id: 'hidalgo-de-castilla-tempranillo',
    name: 'Hidalgo de Castilla Tinto Roble',
    brand: 'Hidalgo de Castilla',
    category: 'do-lamancha',
    vintage: '2022',
    varietals: ['100% Tempranillo'],
    alcohol: '13.5% Vol.',
    barrelAging: '6 meses en roble americano',
    tagline: 'El corazón de La Mancha embotellado con noble franqueza.',
    description: 'Homenaje a la hidalguía castellana. Un monovarietal que celebra el vigor de la variedad autóctona con un sutil paso por roble para redondear su viveza.',
    tastingNotes: {
      visual: 'Rojo cereza brillante con ribete carmín.',
      nose: 'Moras silvestres, frambuesas maduras y un toque tostado a caramelo toffee y canela.',
      palate: 'Agradable y directo, tanino dulce y una frescura que invita a beber otro trago. Muy polivalente.',
    },
    pairing: 'Tapas manchegas, pisto con huevo, carnes blancas y quesos semicurados.',
    servingTemp: '14°C - 16°C',
    certifications: ['D.O. La Mancha'],
    priceEstimate: '6,90 €',
  },
  {
    id: 'verduguez-organic-tempranillo',
    name: 'Verduguez Organic & Vegan Tempranillo',
    brand: 'Bodegas Verduguez Bio',
    category: 'ecologicos',
    vintage: '2023',
    varietals: ['100% Tempranillo Ecológico'],
    alcohol: '13.5% Vol.',
    barrelAging: 'Sin barrica para ensalzar la fruta pura',
    tagline: 'Pureza natural, respeto al ecosistema y sello vegano certificado.',
    description: 'Uvas procedentes de parcelas de cultivo ecológico certificado sin pesticidas ni abonos de síntesis química. Clarificación exclusivamente mineral y vegetal.',
    tastingNotes: {
      visual: 'Púrpura intenso de capa alta con ribetes azulados de absoluta pureza.',
      nose: 'Aroma sincero a fruto rojo fresco recién recolectado, arándanos, violetas y notas terrosas de campo mediterráneo (tomillo y romero).',
      palate: 'Jugo frutal en su máxima expresión, vivaz, enérgico, con tanino crujiente y una honestidad mineral única.',
    },
    pairing: 'Cocina vegetal mediterránea, hamburguesas de legumbres y setas, platos con verduras de temporada a la brasa y pastas.',
    servingTemp: '14°C - 15°C',
    certifications: ['Ecológico CAAE (Euro-Hoja)', 'Certificado Vegano V-Label', 'D.O. La Mancha'],
    awards: ['Ecovino de Oro'],
    priceEstimate: '7,50 €',
  },
  {
    id: 'verduguez-organic-airen',
    name: 'Verduguez Organic Airén de Altura',
    brand: 'Bodegas Verduguez Bio',
    category: 'ecologicos',
    vintage: '2023',
    varietals: ['100% Airén Ecológico de Cepas Viejas'],
    alcohol: '12.0% Vol.',
    tagline: 'Reivindicando la histórica uva reina manchega con viticultura bio.',
    description: 'La variedad autóctona Airén cobra una dimensión brillante en viñedos ecológicos de altura a 780 metros, donde las noches frescas conservan su crujiente acidez.',
    tastingNotes: {
      visual: 'Amarillo muy pálido, brillante, con irisaciones aceradas.',
      nose: 'Manzana verde Granny Smith, notas florales de azahar y hierba fresca recién cortada con un ligero toque de pomelo.',
      palate: 'Ligero, refrescante y muy bebible. Final limpio y vivificante con una mineralidad salina sutil.',
    },
    pairing: 'Ensaladas frescas, ceviches de pescado blanco, gazpacho andaluz, hummus y tempuras de verduras.',
    servingTemp: '7°C - 9°C',
    certifications: ['Ecológico CAAE (Euro-Hoja)', 'Certificado Vegano V-Label', 'D.O. La Mancha'],
    priceEstimate: '6,80 €',
  },
  {
    id: 'cueva-brut-nature',
    name: 'Verduguez Cueva Brut Nature',
    brand: 'Cueva',
    category: 'espumosos',
    varietals: ['Macabeo', 'Chardonnay'],
    alcohol: '11.5% Vol.',
    barrelAging: 'Segunda fermentación en botella según método tradicional con 14 meses de rima',
    tagline: 'Burbuja fina y persistente nacida en las bodegas cueva toledanas.',
    description: 'Espumoso de gran distinción elaborado bajo el método clásico en la penumbra de las bodegas subterráneas de Villanueva de Alcardete.',
    tastingNotes: {
      visual: 'Amarillo pajizo dorado, con rosario de burbujas continuas y finísimas que forman una persistente corona en superficie.',
      nose: 'Aromas de bollería recién horneada, manzana asada, almendra tostada y flores blancas.',
      palate: 'Seco y elegante (sin licor de expedición añadido), con carbónico perfectamente integrado que acaricia el paladar. Final cremoso y cítrico.',
    },
    pairing: 'Ostras, jamón ibérico, arroces de marisco, hojaldres salados y brindis de celebración.',
    servingTemp: '6°C - 8°C',
    certifications: ['Método Tradicional'],
    awards: ['Medalla de Oro Espumosos de Calidad'],
    priceEstimate: '11,20 €',
  },
  {
    id: 'fogoso-sparkling-cocktail',
    name: 'Fogoso Silver & Gold Edition',
    brand: 'Fogoso',
    category: 'cocteles',
    varietals: ['Moscatel & Airén'],
    alcohol: '5.5% Vol.',
    tagline: 'El icónico espumoso nacarado con hipnótico efecto de fuego en movimiento.',
    description: 'Una de las creaciones más innovadoras de Bodegas Verduguez que causó sensación mundial: al agitar la botella, destellos metálicos plata y oro bailan en suspensión.',
    tastingNotes: {
      visual: 'Mágica suspensión con brillo perlado irisado que produce un efecto visual de fuego fluido al movimiento.',
      nose: 'Muy aromático, dulce, con recuerdos a uva moscatel fresca, flores blancas y fruta tropical.',
      palate: 'Sorbete chispeante, dulce sin empalagar, refrescante y con un carbónico jovial y festivo.',
    },
    pairing: 'Aperitivos festivos, cócteles de bienvenida, postres con frutas o para disfrutar en copas heladas con hielo y menta.',
    servingTemp: '5°C - 7°C',
    awards: ['Premio Internacional a la Innovación en Bebidas'],
    priceEstimate: '8,90 €',
  },
  {
    id: 'keep-calm-sangria',
    name: 'Keep Calm & Drink Sangria Artesana',
    brand: 'Keep Calm',
    category: 'cocteles',
    varietals: ['Tempranillo & Esencias Cítricas Naturales'],
    alcohol: '7.0% Vol.',
    tagline: 'La receta tradicional española embotellada con estilo contemporáneo.',
    description: 'Elaborada con vino tinto Tempranillo de primera calidad de la bodega, macerado pacientemente con extractos naturales de naranja de Valencia, limón y canela en rama.',
    tastingNotes: {
      visual: 'Rojo granate brillante y festivo.',
      nose: 'Aroma fresco e irresistible a cítricos recién exprimidos, canela y frutas del bosque.',
      palate: 'Golosa, equilibrada, refrescante, con el punto justo de dulzor y un retrogusto cítrico estimulante.',
    },
    pairing: 'Servir en jarra o copa ancha con abundante hielo, rodajas de naranja y manzana, ideal para terrazas y reuniones al aire libre.',
    servingTemp: '5°C - 7°C',
    priceEstimate: '5,50 €',
  },
];

export const ENOTOURISM_TOURS: EnotourismTour[] = [
  {
    id: 'visita-esencial',
    title: 'Visita Esencial & Cata de 3 Vinos',
    duration: '1h 30min',
    pricePerPerson: 18,
    badge: 'Popular',
    description: 'Un recorrido perfecto para adentrarse en la historia familiar desde 1950, conocer los lagares tradicionales y la nave de barricas con cata comentada.',
    includes: [
      'Paseo guiado por las instalaciones históricas y modernas',
      'Explicación del proceso de vinificación y crianza',
      'Cata dirigida de 3 vinos representativos (Blanco, Rosado/Tinto Joven y Crianza)',
      'Acompañamiento con queso manchego artesanal y picos de pan',
    ],
    idealFor: 'Parejas, grupos de amigos y quienes deseen una primera aproximación cercana al mundo del vino manchego.',
  },
  {
    id: 'experiencia-terruño-reserva',
    title: 'Experiencia Terruño & Gran Reserva',
    duration: '2h 30min',
    pricePerPerson: 35,
    badge: 'Recomendada',
    description: 'Inmersión profunda en la viticultura de altura: visita a las parcelas de viñedos viejos de secano a 780m, sala de guarda privada y cata de 5 vinos seleccionados.',
    includes: [
      'Recorrido por viñedos centenarios de Tempranillo y Airén',
      'Acceso exclusivo a la sacristía de barricas históricas',
      'Cata premium de 5 vinos (incluye Imperial Toledo Reserva y edición limitada)',
      'Maridaje gastronómico manchego: queso curado, cecina de ciervo y lomo de orza',
      'Copa serigrafiada de recuerdo de Bodegas Verduguez',
    ],
    idealFor: 'Amantes del vino, enoturistas experimentados y celebraciones especiales.',
  },
  {
    id: 'taller-bio-espumosos',
    title: 'Taller Bio & Espumosos de Cueva',
    duration: '2h 00min',
    pricePerPerson: 28,
    badge: 'Sostenible',
    description: 'Descubra cómo elaboramos nuestros vinos con certificación ecológica CAAE y el secreto de la segunda fermentación en botella de nuestros espumosos método tradicional.',
    includes: [
      'Charla sobre biodiversidad, cultivo orgánico y viticultura regenerativa',
      'Visita a la zona de rima de espumosos método tradicional',
      'Cata de 4 vinos ecológicos y veganos + degustación de Cueva Brut Nature y Fogoso',
      'Degustación de aceites de oliva virgen extra de la comarca y tapas ecológicas',
    ],
    idealFor: 'Personas interesadas en sostenibilidad, vinos veganos y amantes de las burbujas.',
  },
];

export const EXPORT_REGIONS = [
  { region: 'Alemania & Austria', flag: '🇩🇪', market: 'Primer destino europeo en vinos ecológicos y varietales D.O. La Mancha.' },
  { region: 'Reino Unido', flag: '🇬🇧', market: 'Alta demanda de Imperial Toledo Reserva y líneas de sangría contemporánea.' },
  { region: 'Japón & Corea del Sur', flag: '🇯🇵', market: 'Aprecio extraordinario por vinos monovarietales limpios y la innovación visual de Fogoso.' },
  { region: 'Estados Unidos & Canadá', flag: '🇺🇸', market: 'Presencia en distribuidores de la costa Este y Oeste con marcas de guarda.' },
  { region: 'Países Bajos & Bélgica', flag: '🇳🇱', market: 'Líderes en importación de vinos veganos certificados sin aditivos animales.' },
  { region: 'México & Latinoamérica', flag: '🇲🇽', market: 'Crecimiento sostenido en restauración y tiendas especializadas de prestigio.' },
];
