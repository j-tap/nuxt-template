export function strToNumHash (str) {
  let hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

export function objectToHash (obj = {}) {
  const NUM = 5381
  const str = JSON.stringify(obj)
  let hash = NUM

  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i)
  }

  return hash
}


export function toWithSpaces (val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function kebabToPascalCase (str = '') {
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('')
}

/**
 * Deep merging of objects
 * @param {Object} target
 * @param {Object} sources
 * @returns {Object}
 */
export function mergeObjects (target, ...sources) {
  if (!sources.length) {
    return target
  }

  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        mergeObjects(target[key], source[key])
      }
      else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeObjects(target, ...sources);
}
