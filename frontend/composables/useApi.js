import axios from 'axios'
import { useLoadingStore } from '~/stores/loadingStore'

async function sendRequest (props, cb) {
    const { $i18n } = useNuxtApp()
    const { iso } = $i18n.localeProperties.value

    props.params = { populate: 'deep', locale: iso, ...props.params }
    return await send(props, cb)
}

async function send (props, cb) {
    let result = { data: null, errors: [], meta: null, status: false }

    try {
        requestStart()
        const { data, meta } = await cb(props)
        requestFinally()
        if (data) {
            result = { data: data || null, meta: meta || null, status: true }
        }
    }
    catch (error) {
        requestFinally()
        result.errors = error?.response?.data?.error?.details?.errors || []
        console.error('Error api asyncData:', error?.message || error)
    }

    return result
}

function requestStart() {
    try {
        if (process.client) {
            const loadingStore = useLoadingStore()
            loadingStore.updateLoading(true)
        }
    }
    catch (error) {
        console.error('Error in requestStart:', error)
    }
}

function requestFinally () {
    try {
        if (process.client) {
            const loadingStore = useLoadingStore()
            loadingStore.updateLoading(false)
        }
    }
    catch (error) {
        console.error('Error in requestFinally:', error)
    }
}

export async function find (name, params = {}) {
    return sendRequest({ name, params }, async (props) => {
        const { find } = useStrapi()
        return await find(props.name, props.params)
    })
}

export async function findBySlug (name, slug, params = {}) {
    params.filters = {
        slug,
    }

    return sendRequest({ name, params }, async (props) => {
        const { find } = useStrapi()
        const response = await find(props.name, props.params)
        return { ...response, data: response.data[0] }
    })
}

export async function findOne (name, id = null, params = {}) {
    return sendRequest({ name, id, params }, async (props) => {
        const { findOne } = useStrapi()

        return await findOne(props.name, props.id, props.params)
    })
}

export async function create (name, params = {}) {
    return sendRequest({ name, params }, async (props) => {
        const { create } = useStrapi()
        return await create(props.name, props.params)
    })
}

export async function sendForm (form, token) {
    return send(form, async (data) => {
        const runtimeConfig = useRuntimeConfig()
        const urlApi = runtimeConfig.public.strapi.url
        const url = `${urlApi}/api/feedbacks`
        const props = { ...data, token }

        return await axios.post(url, props)
    })
}
