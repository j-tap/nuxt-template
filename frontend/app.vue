<template lang="pug">
div(:class="classes")
    NuxtLayout
        NuxtLoadingIndicator(:color="colorAccent")
        NuxtPage(:key="key")
</template>

<script setup>
import { initLocale, updateLang } from '~/composables/useLocale'
import { useLoadingStore } from '~/stores/loadingStore'
import { colorAccent } from '~/assets/style/app.module.scss'
import { useCommonStore } from '~/stores/commonStore'
import { useMetaStore } from '~/stores/metaStore'
import { find } from '~/composables/useApi'

const i18n = useI18n()
const loadingStore = useLoadingStore()
const commonStore = useCommonStore()
const metaStore = useMetaStore()

await initLocale()

const key = ref(null)
const classes = computed(() => {
    return [
        'app-container',
        { 'app-container_loading': loadingStore.isLoading },
    ]
})

await fetchGlobalData()

watch(i18n.locale, async () => {
    updateLang()
    await fetchGlobalData()
    componentRefresh()
})

onMounted(() => {
    if (!commonStore.isVisited.value) {
        commonStore.setIsVisited(true)
    }
})

function componentRefresh () {
    key.value = `app-page_${new Date().getTime()}`
}

async function fetchGlobalData () {
    const [contactResponse, metaResponse] = await Promise.all([
        find('contact'),
        find('meta')
    ])

    commonStore.setContact(contactResponse.data)
    metaStore.setMeta(metaResponse.data)
}
</script>

<style lang="scss" src="~/assets/style/app.scss" />
