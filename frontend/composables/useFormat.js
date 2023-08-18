import { toWithSpaces } from '~/utils/format'

const types = {
    splitnumber: toWithSpaces,
    price: getPrice,
    date: getDate,
}

export function useFormat (type, value) {
    const fn = types[type]

    if (typeof fn === 'function') {
        return fn(value)
    }

    throw `'${type}' formatting type missing`
}

function getPrice () {
    const currency = t('common.currency_sign')
    return `${toWithSpaces(val)}\xa0${currency}`
}

function getDate (d) {
    const { locale } = useI18n()
    const opt = {
        day: 'numeric',
        month: 'short',
        ...options,
    }

    return new Intl.DateTimeFormat(locale.value, opt).format(new Date(d))
}
