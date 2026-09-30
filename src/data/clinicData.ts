export interface SpecialtyItem {
  id: string;
  number: string;
  name: string;
  category: 'consultas' | 'diagnosticos';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  preparationNote: string;
  iconName: 'eye' | 'heart' | 'bone' | 'userCheck' | 'scan' | 'flask';
}

export interface ExamItem {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  details: string;
  indication: string;
  iconName: 'activity' | 'scan' | 'flask' | 'heartPulse' | 'clipboardCheck';
}

export const CLINIC_INFO = {
  name: 'Clínica Fisiomedi',
  shortName: 'Fisiomedi',
  tagline: 'A melhor e a mais completa da cidade.',
  heroTitle: 'Cuidando da sua saúde por completo.',
  heroSubtitle: 'Atendimento médico, exames e especialistas em um só lugar.',
  phoneDisplay: '(62) 3371-2039',
  phoneTel: 'tel:+556233712039',
  whatsappNumber: '556233712039',
  instagramHandle: '@clinica.fisiomedi',
  instagramUrl: 'https://www.instagram.com/clinica.fisiomedi',
  websiteDisplay: 'www.buscafisio.com.br/fisiomedi',
  websiteUrl: 'https://www.buscafisio.com.br/fisiomedi',
  images: {
    hero: '/src/assets/images/hero_medical_clinic_1790805224725.jpg',
    about: '/src/assets/images/about_clinic_facility_1790805237408.jpg',
    ophthalmology: '/src/assets/images/ophthalmology_care_1790805246452.jpg',
    cardiology: '/src/assets/images/cardiology_echocardiogram_1790805256518.jpg',
  },
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Olá! Gostaria de agendar uma consulta ou exame na Clínica Fisiomedi.';
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`;
}

export const TRUST_INDICATORS = [
  'Atendimento especializado',
  'Equipe qualificada',
  'Exames e consultas',
  'Agendamento fácil',
];

export const ABOUT_PILLARS = [
  {
    id: 'atendimento',
    number: '01',
    title: 'Atendimento especializado',
    description:
      'Escuta atenta, acolhimento humanizado e avaliação criteriosa em cada consulta médica.',
  },
  {
    id: 'exames',
    number: '02',
    title: 'Exames',
    description:
      'Serviços diagnósticos laboratoriais, de imagem e cardiológicos integrados à rotina clínica.',
  },
  {
    id: 'especialidades',
    number: '03',
    title: 'Especialidades médicas',
    description:
      'Profissionais de diferentes áreas médicas atuando de forma integrada para o seu bem-estar.',
  },
  {
    id: 'estrutura',
    number: '04',
    title: 'Estrutura completa',
    description:
      'Ambientes confortáveis, climatizados e preparados para receber você e sua família com segurança.',
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'oftalmologia',
    number: '01',
    name: 'Oftalmologia',
    category: 'consultas',
    shortDescription:
      'Cuide da saúde dos seus olhos com atendimento especializado.',
    fullDescription:
      'Atendimento oftalmológico voltado para a prevenção, avaliação clínica e acompanhamento detalhado da saúde ocular em todas as fases da vida.',
    highlights: [
      'Avaliação completa da acuidade visual e refração',
      'Acompanhamento preventivo da saúde ocular',
      'Orientação especializada para conforto e qualidade visual',
    ],
    preparationNote:
      'Caso utilize óculos ou lentes de contato, traga-os ou leve sua receita mais recente no dia da consulta.',
    iconName: 'eye',
  },
  {
    id: 'cardiologia',
    number: '02',
    name: 'Cardiologia',
    category: 'consultas',
    shortDescription:
      'Prevenção, avaliação e acompanhamento da saúde do coração.',
    fullDescription:
      'Consultas cardiológicas dedicadas ao diagnóstico precoce, controle de fatores de risco, check-up cardiovascular e acompanhamento contínuo.',
    highlights: [
      'Check-up cardiológico preventivo e avaliação de rotina',
      'Integração direta com exame de Ecocardiograma na própria clínica',
      'Acompanhamento clínico e orientação cardiovascular individualizada',
    ],
    preparationNote:
      'Leve seus exames anteriores e a lista atualizada de medicamentos em uso contínuo.',
    iconName: 'heart',
  },
  {
    id: 'ortopedia',
    number: '03',
    name: 'Ortopedia',
    category: 'consultas',
    shortDescription:
      'Avaliação e cuidado para ossos, músculos e articulações.',
    fullDescription:
      'Atendimento ortopédico focado na investigação de dores articulares, musculares, coluna e reabilitação funcional do movimento.',
    highlights: [
      'Avaliação clínica de dores na coluna, joelhos, ombros e articulações',
      'Orientação para prevenção de lesões e retorno seguro às atividades',
      'Solicitação e análise integrada de exames de imagem',
    ],
    preparationNote:
      'Se possuir exames de imagem recentes (como ultrassom ou radiografias), apresente-os durante a consulta.',
    iconName: 'bone',
  },
  {
    id: 'ginecologia',
    number: '04',
    name: 'Ginecologia',
    category: 'consultas',
    shortDescription:
      'Atenção integral e preventiva à saúde da mulher em todas as fases.',
    fullDescription:
      'Cuidado ginecológico humanizado, com foco na prevenção, rotina periódica, orientações de saúde feminina e acompanhamento clínico.',
    highlights: [
      'Consultas periódicas de rotina e prevenção ginecológica',
      'Solicitação de exames laboratoriais e ultrassonográficos no mesmo local',
      'Atendimento acolhedor com privacidade e respeito',
    ],
    preparationNote:
      'Anote a data da última menstruação e leve exames preventivos ou laboratoriais anteriores.',
    iconName: 'userCheck',
  },
  {
    id: 'ultrassonografia',
    number: '05',
    name: 'Ultrassonografia',
    category: 'diagnosticos',
    shortDescription:
      'Exames de imagem por ultrassom com precisão e cuidado no atendimento.',
    fullDescription:
      'Diagnóstico por imagem seguro e não invasivo, auxiliando médicos de diversas especialidades na investigação clínica precisa.',
    highlights: [
      'Método diagnóstico seguro, indolor e sem radiação',
      'Apoio essencial para ginecologia, ortopedia e clínica médica',
      'Atendimento agendado com orientações prévias claras',
    ],
    preparationNote:
      'O preparo varia conforme a região examinada (como jejum ou ingestão de água). Nossa recepção informa todos os detalhes no agendamento.',
    iconName: 'scan',
  },
  {
    id: 'exames-laboratoriais',
    number: '06',
    name: 'Exames laboratoriais',
    category: 'diagnosticos',
    shortDescription:
      'Coleta e análises clínicas para check-up, prevenção e diagnóstico.',
    fullDescription:
      'Realize seus exames laboratoriais com praticidade e segurança, reunindo consultas e análises clínicas em um único endereço.',
    highlights: [
      'Exames de rotina, check-up preventivo e acompanhamento médico',
      'Atendimento ágil e cuidadoso durante a coleta',
      'Praticidade de realizar consultas e exames na mesma clínica',
    ],
    preparationNote:
      'Consulte nossa equipe pelo telefone ou WhatsApp sobre a necessidade de jejum para os exames solicitados no seu pedido médico.',
    iconName: 'flask',
  },
];

export const EXAMS: ExamItem[] = [
  {
    id: 'ecocardiograma',
    number: '01',
    name: 'Ecocardiograma',
    shortDescription:
      'Avaliação por imagem detalhada das estruturas e do funcionamento do coração.',
    details:
      'Exame de ultrassom cardíaco não invasivo que permite analisar válvulas, câmaras cardíacas e fluxo sanguíneo com segurança.',
    indication: 'Check-up cardiológico, investigação clínica e acompanhamento',
    iconName: 'heartPulse',
  },
  {
    id: 'ultrassonografia-diagnostica',
    number: '02',
    name: 'Ultrassonografia',
    shortDescription:
      'Exames de ultrassom para avaliação de órgãos internos, tecidos e articulações.',
    details:
      'Auxilia no diagnóstico rápido e seguro em diversas áreas médicas, com imagem em tempo real e atendimento humanizado.',
    indication: 'Avaliação abdominal, pélvica, musculoesquelética e geral',
    iconName: 'scan',
  },
  {
    id: 'exames-laboratoriais-card',
    number: '03',
    name: 'Exames laboratoriais',
    shortDescription:
      'Análises clínicas essenciais para prevenção, controle e acompanhamento da saúde.',
    details:
      'Coleta realizada com cuidado e higiene rigorosa para apoiar decisões médicas com resultados confiáveis.',
    indication: 'Hemograma, perfil lipídico, glicemia, check-up e rotinas',
    iconName: 'flask',
  },
  {
    id: 'exames-cardiologicos',
    number: '04',
    name: 'Exames cardiológicos',
    shortDescription:
      'Procedimentos diagnósticos voltados à avaliação preventiva e funcional cardiovascular.',
    details:
      'Suporte completo às consultas de cardiologia, permitindo avaliar a saúde do coração com praticidade no mesmo local.',
    indication: 'Prevenção cardiovascular, avaliação pré-operatória e rotina',
    iconName: 'activity',
  },
  {
    id: 'avaliacoes-medicas',
    number: '05',
    name: 'Avaliações médicas',
    shortDescription:
      'Consultas clínicas e especializadas com solicitação e interpretação integrada de exames.',
    details:
      'Atendimento médico completo para investigar sintomas, realizar check-ups periódicos e orientar tratamentos adequados.',
    indication: 'Check-up global, acompanhamento contínuo e prevenção',
    iconName: 'clipboardCheck',
  },
];

export const WHY_CHOOSE_BENEFITS = [
  {
    number: '01',
    title: 'Diversas especialidades',
    description:
      'Oftalmologia, cardiologia, ortopedia, ginecologia e outros atendimentos médicos reunidos em um só lugar.',
  },
  {
    number: '02',
    title: 'Exames e diagnósticos',
    description:
      'Ecocardiograma, ultrassonografia, exames laboratoriais e avaliações cardiológicas integrados às consultas.',
  },
  {
    number: '03',
    title: 'Atendimento especializado',
    description:
      'Profissionais qualificados com foco no acolhimento, na escuta atenta e no cuidado individualizado.',
  },
  {
    number: '04',
    title: 'Estrutura completa',
    description:
      'Ambiente planejado para oferecer conforto, organização e segurança em todas as etapas do seu atendimento.',
  },
  {
    number: '05',
    title: 'Facilidade para agendamento',
    description:
      'Agende sua consulta ou exame rapidamente pelo WhatsApp ou diretamente pelo telefone (62) 3371-2039.',
  },
];
