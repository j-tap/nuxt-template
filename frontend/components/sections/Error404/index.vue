<template lang="pug">
ContentWrap.error-404
    h1.title-base.error-404__title 404
    NuxtLink(:to="{ name: 'index' }") {{ t('menu.index') }}
</template>

<script setup>
import { ContentWrap } from '~/components/structure'
import { metaInfo } from '~/composables/useMeta'

const { t } = useI18n()

useHead(metaInfo({
  title: '404',
  description: t('common.error_{code}', { code: 404 }),
}))
</script>

<style lang="scss" src="./style.scss" scoped />
