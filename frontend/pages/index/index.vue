<template lang="pug">
.page-index
    ContentWrap
        h1 {{ data?.title }}
</template>

<script setup>
import { ContentWrap } from '~/components/structure'
import { find } from '~/composables/useApi'

const { t } = useI18n()

const { data } = await find('home-page')

useHead(metaInfo({
    title: data?.title,
}))
</script>

<style lang="scss" src="./style.scss" scoped />
