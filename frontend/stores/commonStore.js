import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const id = 'common'

const _isVisited = useStorage('visited', false)
const _lang = useStorage('lang', null)

export const useCommonStore = defineStore(id, () => {
    const contacts = ref({})
    const isVisited = _isVisited.value
    const lang = _lang.value

    function setIsVisited (value = false) {
        _isVisited.value = value
    }

    function setContact (value = null) {
        contacts.value = value
    }

    function setLang (value = null) {
        _lang.value = value
    }

    return {
        isVisited,
        contacts,
        lang,
        setIsVisited,
        setContact,
        setLang,
    }
})
