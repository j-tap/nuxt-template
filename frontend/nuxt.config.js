import viteStylusPug from 'vite-plugin-pug'
import i18n from './config/i18n'
import strapi from './config/strapi'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NODE_ENV: process.env.NODE_ENV,
        }
    },
    devtools: { enabled: process.env.NODE_ENV === 'dev' },
    vite: {
        plugins: [
            viteStylusPug(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/style/global.scss" as *;'
                }
            },
        }
    },
    modules: [
        '@nuxtjs/strapi',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            link: [{ rel: 'canonical', href: process.env.BASE_URL || '' }],
            meta: [
                { 'http-equiv': 'Cache-Control', content: `max-age=${process.env.CACHE_TIME || '60'}, must-revalidate` },
            ],
        },
    },
    strapi,
    i18n
})
