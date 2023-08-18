import { defineStore } from 'pinia'

const id = 'meta'

export const useMetaStore = defineStore(id, () => {
    const meta = ref({})

    function setMeta (value) {
        meta.value = value
    }

    return {
        meta,
        setMeta,
    }
})
