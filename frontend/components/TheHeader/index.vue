<template lang="pug">
header.header
    ContentWrap.header__content
        span.header__logo {{ t('app.name') }}
        Nav(:items="menu")
        LangSwitcher
</template>

<script setup>
import Nav from './_nav'
import { ContentWrap } from '~/components/structure'
import { LangSwitcher } from '~/components/common'
import { find } from '~/composables/useApi'

const { t, locale } = useI18n()
const menu = ref([])

fetchData()

watch(locale, () => {
    fetchData()
})

function fetchData () {
    find('menus').then(({ data }) => {
        menu.value = data
    })
}
</script>

<style lang="styl" src="./style.scss" scoped />
