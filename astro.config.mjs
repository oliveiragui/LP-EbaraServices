// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubActions ? 'https://oliveiragui.github.io' : 'https://ebaraservices.com.br',
  base: isGitHubActions ? '/LP-EbaraServices' : '/',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    // CSS inline no HTML: zero requisições bloqueantes de renderização
    inlineStylesheets: 'always',
  },
});
