import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercelEdge from '@astrojs/vercel/edge'

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind()],
	output: 'server',
  adapter: vercelEdge(),
});
