import { brl, maintenance, pix, plans, site } from './site';

const b = plans.basico.price;
const p = plans.personalizado.price;

/** Respostas em formato "resposta primeiro" — legíveis para pessoas, Google e IAs (GEO). */
export const faq: { q: string; a: string }[] = [
  {
    q: 'Quanto custa uma landing page na EBARA Services?',
    a: `O modelo Básico custa ${brl(b)} e o Personalizado, ${brl(p)}. No Pix à vista há 5% de desconto: ${brl(pix(b))} e ${brl(pix(p))}. A manutenção é opcional: ${brl(maintenance.mensal)} por mês ou ${brl(maintenance.semestral)} por semestre.`,
  },
  {
    q: 'Qual a diferença entre o modelo Básico e o Personalizado?',
    a: `O Básico usa uma estrutura de alta conversão já validada pela EBARA, adaptada à sua marca, com seus textos revisados e ${plans.basico.revisions} rodadas de alterações antes da entrega final. O Personalizado é feito do zero: inclui pesquisa e estudo de conversão, copy escrita pela EBARA, design exclusivo, animações sob medida, GEO e um painel de métricas mais completo.`,
  },
  {
    q: 'O que é GEO e por que minha landing page precisa disso?',
    a: 'GEO (Generative Engine Optimization) é a otimização para mecanismos de resposta com IA, como ChatGPT, Gemini, Perplexity e as AI Overviews do Google. Estruturamos o conteúdo com respostas diretas, dados estruturados (Schema.org) e arquivos como o llms.txt para que essas IAs entendam o que você vende e recomendem sua empresa.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: `Você paga 50% na contratação, para iniciar o projeto, e os outros 50% só depois de aprovar a página, antes da publicação final. Pode ser Pix em duas etapas (50% na aprovação e 50% na entrega) ou Pix à vista com 5% de desconto.`,
  },
  {
    q: 'Preciso ter os textos prontos?',
    a: 'No Personalizado, não: a copy é escrita pela EBARA a partir da pesquisa de conversão e enviada para sua aprovação antes do design. No Básico, você envia o conteúdo e nós revisamos e organizamos tudo na ordem que mais converte.',
  },
  {
    q: 'Em quanto tempo a página fica no ar?',
    a: `Em média, ${site.prazo} a partir do envio dos materiais. O que mais influencia o prazo é a velocidade das aprovações em cada etapa.`,
  },
  {
    q: 'Vou conseguir medir os resultados?',
    a: 'Sim. A página é entregue com Google Analytics 4, Pixel da Meta e eventos de conversão configurados (cliques no WhatsApp, envios de formulário). No Personalizado incluímos também mapas de calor e gravações de sessão com Microsoft Clarity.',
  },
  {
    q: 'O que acontece depois da publicação?',
    a: `A página é sua. Se quiser mantê-la atualizada, segura e evoluindo com os dados, a manutenção custa ${brl(maintenance.mensal)} por mês ou ${brl(maintenance.semestral)} por semestre e cobre ajustes de textos, imagens, ofertas e pequenos ajustes de layout.`,
  },
];
