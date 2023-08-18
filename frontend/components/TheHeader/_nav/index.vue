<template lang="pug">
nav.nav-main
    ul.nav-main__list
        li.nav-main__item(
            v-for="item in items"
            :key="item.id"
        )
            NuxtLink(:to="{ name: item.route }") {{ item.name }}
</template>

<script setup>
const props = defineProps({ items: Array })
</script>

<style lang="scss" src="./style.scss" scoped />
