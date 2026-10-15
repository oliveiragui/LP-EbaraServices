/**
 * Fonte única de verdade da página: preços, contato e condições.
 * Tudo que aparece no HTML, no JSON-LD (SEO) e no llms.txt (GEO) sai daqui.
 */

export const site = {
  name: 'EBARA Services',
  // TODO: confirmar domínio final (também em astro.config.mjs e public/robots.txt / llms.txt)
  url: 'https://ebaraservices.com.br',
  // TODO: substituir pelo WhatsApp real no formato DDI+DDD+número (ex.: 5511912345678)
  whatsapp: '5500000000000',
  // TODO: confirmar e-mail
  email: 'contato@ebaraservices.com.br',
  // TODO: confirmar prazo médio de entrega
  prazo: '10 a 15 dias úteis',
  updated: '2026-10-15',
  title: 'Criação de Landing Page que Converte | SEO, GEO e CRO | EBARA Services',
  description:
    'Landing pages de alta conversão com pesquisa, copy, SEO, GEO e métricas configuradas. A partir de R$ 799, com 50% pago só depois de aprovar a página.',
};

export const PIX_DISCOUNT = 0.05;

export const plans = {
  basico: { name: 'Básico', price: 799, revisions: 5 },
  personalizado: { name: 'Personalizado', price: 1200 },
} as const;

export const maintenance = { mensal: 80, semestral: 500 } as const;

export const pix = (n: number) => Math.round(n * (1 - PIX_DISCOUNT) * 100) / 100;

export const brl = (n: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: n % 1 ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(n);

export const wa = (msg = 'Olá, EBARA! Vi a página de landing pages e quero conversar sobre um projeto.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
