import { defineStore } from 'pinia'

const id = 'loadingStore'

export const useLoadingStore = defineStore(id, () => {
    const isLoading = ref(false)
    const countLoading = ref(0)

    function setCountLoading (value) {
        countLoading.value = value
    }

    function setIsLoading (value) {
        isLoading.value = value
    }

    function updateLoading (is = true) {
        const cnt = countLoading.value
        const newCnt = is ? cnt + 1 : Math.max(cnt - 1, 0)

        setCountLoading(newCnt)
        setIsLoading(!!countLoading.value > 0)
    }

    function resetLoading () {
        countLoading.value = 0
        isLoading.value = false
    }

    return {
        isLoading,
        countLoading,
        setCountLoading,
        setIsLoading,
        updateLoading,
    }
})
