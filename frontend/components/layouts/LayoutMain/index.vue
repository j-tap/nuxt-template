<template lang="pug">
div(:class="classes")
    TheHeader(:class="`${cls}__header`")
    main(:class="`${cls}__main`")
      slot
    TheFooter(:class="`${cls}__footer`")
</template>

<script setup>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

const cls = 'layout-default'
const classes = computed(() => [cls])
</script>

<style lang="scss" src="./style.scss" scoped />
