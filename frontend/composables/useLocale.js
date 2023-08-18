import { useCommonStore } from '~/stores/commonStore'

export async function initLocale () {
    const { $i18n } = useNuxtApp()
    const { getBrowserLocale, locales, locale, setLocale } =  $i18n

    if (process.client) {
        const commonStore = useCommonStore()
        const selectedLang = commonStore.lang

        if (selectedLang) {
            await setLocale(selectedLang)
        }
        else {
            const browserLocale = getBrowserLocale()
            const [lang] = locales.value.filter(o => o.code === browserLocale)

            if (lang && browserLocale !== locale.value) {
                await setLocale(lang.code)
            }
        }
    }
}

export function updateLang () {
    const { $i18n } = useNuxtApp()
    const { locale } = $i18n
    const commonStore = useCommonStore()

    commonStore.setLang(locale.value)
}
