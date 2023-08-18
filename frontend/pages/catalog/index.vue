<template lang="pug">
section
    ContentWrap
        h1 {{ t('menu.catalog') }}
        NuxtLink(:to="{ name: 'catalog-slug', params: { slug: 'test' } }") Test link
</template>

<script setup>
import { ContentWrap } from '~/components/structure'

const { t } = useI18n()

useHead(metaInfo({
    title: t('menu.catalog'),
}))
</script>
