import { useMetaStore } from '~/stores/metaStore'

export function metaInfo (info = {
    title: null,
    description: null,
    keywords: null,
    image: null,
}) {
    const { $i18n } = useNuxtApp()
    const { locale, t } = $i18n
    const route = useRoute()
    const config = useRuntimeConfig()
    const metaStore = useMetaStore()
    const defMeta = metaStore.meta
    const apiUrl = config.public.strapi.url
    const type = 'website'
    const twcard = 'summary_large_image'

    const url = config.public.BASE_URL + route.path
    const description = info.description || defMeta?.description
    const keywords = info.keywords || defMeta?.keywords
    const author = defMeta?.author
    const lang = locale

    let title = info.title || defMeta?.title || t('app.name')
    if (route.name !== 'index') {
        title = `${title} | ${t('app.name')}`
    }

    let image = `${apiUrl}/_nuxt/og-image.png`
    if (info.image) {
        image = `${apiUrl}${info.image}`
    }
    else if (defMeta?.image) {
        image = `${apiUrl}${defMeta?.image}`
    }

    return {
        title: title,
        link: [
            { rel: 'image_src', href: image },
        ],
        meta: [
            { name: 'title', content: title },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'author', content: author },
            { property: 'og:type', content: type },
            { property: 'og:url', content: url },
            { property: 'og:title', content: title },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '500' },
            { property: 'og:image:height', content: '500' },
            { property: 'og:locale', content: lang },
            { property: 'twitter:card', content: twcard },
            { property: 'twitter:url', content: url },
            { property: 'twitter:title', content: title },
            { property: 'twitter:description', content: description },
            { property: 'twitter:image', content: image },

            { property: 'link', rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
            { property: 'link', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
            { property: 'link', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
            { property: 'link', rel: 'manifest', href: '/favicon/site.webmanifest' },
            { property: 'link', rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#d8c690' },
            { property: 'meta', name: 'msapplication-TileColor', content: '#d8c690' },
            { property: 'meta', name: 'theme-color', content: '#d8c690' },
        ],
        bodyAttrs: {
            class: '',
        },
        htmlAttrs: {
            lang,
        },
    }
}
