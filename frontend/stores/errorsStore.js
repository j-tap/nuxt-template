import { defineStore } from 'pinia'

const id = 'errorsStore'

export const useErrorsStore = defineStore(id, () => {

    const displayContent404 = ref(false)

    function setDisplayContent404 (isDisplay = false) {
        displayContent404.value = isDisplay
    }

    return {
        displayContent404,
        setDisplayContent404,
    }
})
