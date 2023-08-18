<template lang="pug">
footer.footer
    ContentWrap
        p {{ contacts?.email }}
        p &copy;&nbsp;{{ year }}
</template>

<script setup>
import { ContentWrap } from '~/components/structure'
import { useCommonStore } from '~/stores/commonStore'

const { t } = useI18n()
const { contacts } = useCommonStore()
const year = new Date().getFullYear()
</script>

<style lang="scss" src="./style.scss" scoped />
