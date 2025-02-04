import { defineConfig } from 'astro/config'
import { FontaineTransform } from 'fontaine'


// https://astro.build/config
export default defineConfig({
  site: 'https://clairequillen.github.io',
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
})
