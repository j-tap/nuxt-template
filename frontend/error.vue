<template>
<div>
    <div class="server-error">
        <h1 class="server-error__title">Sorry, unknown error</h1>
        <div v-if="isDev">
            <p>Code: {{ error.statusCode }}</p>
            <p>URL: {{ error.url }}</p>
            <p>Status: {{ error.statusMessage }}</p>
            <p>{{ error.message }}</p>
            <pre v-html="error.stack" />
        </div>
    </div>
</div>
</template>

<script setup>
import { metaInfo } from '~/composables/useMeta'

const props = defineProps({
    error: Object
})

const runtimeConfig = useRuntimeConfig()
const { NODE_ENV } = runtimeConfig.public

const isDev = computed(() => NODE_ENV === 'development')

const handleError = () => clearError({ redirect: '/' })

useHead(metaInfo({
    title: 'Sorry, unknown error',
}))
</script>

<style lang="css" scoped>
.server-error {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: clamp(15px, 4vw, 80px);
}
.server-error__title {
    display: block;
    font-size: $font-size_title;
    text-align: center;
    text-transform: uppercase;
}
.server-error pre {
    white-space: pre-wrap
}
</style>
