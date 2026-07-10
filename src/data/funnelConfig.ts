export type ResultKey = 'landing' | 'profesional' | 'premium';

export type FunnelOption = {
  label: string;
  detail: string;
  value: string;
  weights: Partial<Record<ResultKey, number>>;
};

export type FunnelQuestion = {
  id: string;
  title: string;
  subtitle: string;
  options: FunnelOption[];
};

export type FunnelAnswer = {
  question: string;
  label: string;
  value: string;
  weights: Partial<Record<ResultKey, number>>;
};

export type FunnelResult = {
  title: string;
  package: string;
  price: string;
  reason: string;
};

export const whatsappPhone = '593984710898';

export const funnelQuestions: FunnelQuestion[] = [
  {
    id: 'service',
    title: '¿Qué tipo de servicio vendes?',
    subtitle: 'Esto ayuda a entender cuánta explicación necesita tu oferta.',
    options: [
      {
        label: 'Un servicio principal',
        detail: 'Quiero enfocar una oferta clara.',
        value: 'un servicio principal',
        weights: { landing: 2, profesional: 1 },
      },
      {
        label: 'Varios servicios',
        detail: 'Necesito ordenar diferentes soluciones.',
        value: 'varios servicios',
        weights: { profesional: 2, premium: 1 },
      },
      {
        label: 'Servicio premium',
        detail: 'Mi venta depende mucho de confianza y percepción.',
        value: 'servicio premium',
        weights: { premium: 3 },
      },
    ],
  },
  {
    id: 'current',
    title: '¿Hoy tienes página web?',
    subtitle: 'El punto de partida cambia la recomendación.',
    options: [
      {
        label: 'No tengo web',
        detail: 'Solo redes, referidos o WhatsApp.',
        value: 'no tengo web',
        weights: { landing: 2, profesional: 1 },
      },
      {
        label: 'Tengo una básica',
        detail: 'Existe, pero no vende ni explica bien.',
        value: 'web basica',
        weights: { profesional: 2 },
      },
      {
        label: 'Tengo una desactualizada',
        detail: 'Ya no representa el nivel del negocio.',
        value: 'web desactualizada',
        weights: { premium: 2, profesional: 1 },
      },
    ],
  },
  {
    id: 'goal',
    title: '¿Qué quieres lograr primero?',
    subtitle: 'El objetivo define el alcance inicial.',
    options: [
      {
        label: 'Lanzar rápido',
        detail: 'Necesito publicar y recibir mensajes.',
        value: 'lanzar rapido',
        weights: { landing: 3 },
      },
      {
        label: 'Recibir mejores consultas',
        detail: 'Quiero que lleguen más preparados.',
        value: 'recibir mejores consultas',
        weights: { profesional: 3 },
      },
      {
        label: 'Subir percepción de marca',
        detail: 'Quiero verme más sólido y premium.',
        value: 'subir percepcion de marca',
        weights: { premium: 3 },
      },
    ],
  },
  {
    id: 'trust',
    title: '¿Cuánta confianza necesita tu cliente antes de escribirte?',
    subtitle: 'Algunos negocios necesitan más prueba y contexto que otros.',
    options: [
      {
        label: 'Poca',
        detail: 'La oferta se entiende rápido.',
        value: 'poca confianza previa',
        weights: { landing: 2 },
      },
      {
        label: 'Media',
        detail: 'Necesita ver proceso, servicios y razones.',
        value: 'confianza media',
        weights: { profesional: 2 },
      },
      {
        label: 'Alta',
        detail: 'Necesita autoridad, casos y diferenciación.',
        value: 'confianza alta',
        weights: { premium: 3 },
      },
    ],
  },
  {
    id: 'timing',
    title: '¿Qué tan pronto quieres lanzar o mejorar tu web?',
    subtitle: 'La urgencia ayuda a recomendar una primera versión realista.',
    options: [
      {
        label: 'Esta semana',
        detail: 'Necesito algo simple y rápido.',
        value: 'esta semana',
        weights: { landing: 2 },
      },
      {
        label: 'Este mes',
        detail: 'Puedo trabajar una web completa.',
        value: 'este mes',
        weights: { profesional: 2 },
      },
      {
        label: 'Quiero hacerlo bien',
        detail: 'Prefiero más estrategia y detalle.',
        value: 'hacerlo bien',
        weights: { premium: 2 },
      },
    ],
  },
];

export const funnelResults: Record<ResultKey, FunnelResult> = {
  landing: {
    title: 'Landing Profesional',
    package: 'Landing Profesional',
    price: 'Desde USD 199',
    reason:
      'Tu prioridad es lanzar una oferta clara, reducir fricción y llevar visitantes a WhatsApp sin una estructura compleja.',
  },
  profesional: {
    title: 'Web Profesional',
    package: 'Web Profesional',
    price: 'Desde USD 399',
    reason:
      'Necesitas ordenar servicios, elevar confianza y preparar mejor al cliente antes del primer mensaje.',
  },
  premium: {
    title: 'Web Premium',
    package: 'Web Premium',
    price: 'Desde USD 599',
    reason:
      'Tu venta depende de autoridad, percepción y detalle. Conviene una presencia más completa para tickets altos.',
  },
};
