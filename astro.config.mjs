// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/engsoft',
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: 'Engenharia de Software',
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/firelink-library/engsoft'
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        {
          label: 'Arquitetura de sistemas',
          autogenerate: { directory: 'arquitetura' }, collapsed: true
        },
        {
          label: 'Arquitetura e engenharia de dados',
          autogenerate: { directory: 'dados' }, collapsed: true
        },
        {
          label: 'Qualidade de código',
          autogenerate: { directory: 'codigo' }, collapsed: true
        },
        {
          label: 'DevOps',
          autogenerate: { directory: 'devops' }, collapsed: true
        },
        {
          label: 'Testes e validação',
          autogenerate: { directory: 'testes' }, collapsed: true
        },
        {
          label: 'Segurança',
          autogenerate: { directory: 'seguranca' }, collapsed: true
        },
      ],
    }),
  ],
});
