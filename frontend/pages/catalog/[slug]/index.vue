<template lang="pug">
section
    ContentWrap
        NuxtLink(:to="{ name: 'catalog' }") &larr;
        h1 {{ slug }}
</template>
<script setup>
import { ContentWrap } from '~/components/structure'

const route = useRoute()
const slug = computed(() => route.params.slug)

useHead(metaInfo({
    title: slug.value,
}))
</script>
