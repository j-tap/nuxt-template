<template lang="pug">
ul.lang-switcher
    li.lang-switcher__item(
        v-for="(item, ind) in list"
        :key="item.iso"
    )
        span(v-if="ind !== 0") &nbsp;|&nbsp;
        span(
            :class="{ 'active': item.code === curLang }"
            @click="setLocale(item.code)"
        )
            |{{ item?.name }}
</template>

<script setup>
const { locales, locale, setLocale } = useI18n()
const list = computed(() => locales.value || [])
const curLang = computed(() => locale.value)
</script>

<style lang="scss" scoped src="./style.scss" />
