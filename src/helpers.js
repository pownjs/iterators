import { lowers } from './sets'

/**
 * The following function will progressively iterate over all iterable and non-
 * iterable objects in the argument list, generating all possible combinations.
 */
const mix = function* (...args) {
    let item = args.shift()

    if (!item) {
        return
    }

    if (typeof(item[Symbol.iterator]) !== 'function') {
        if (typeof(item) === 'function') {
            item = item()
        } else
        if (Array.isArray(item)) {
            item = item.entries()
        } else{
            item = [item].entries()
        }
    }

    for (let i of item) {
        if (args.length) {
            for (let j of mix(...args)) {
                yield [i, ...j]
            }
        } else {
            yield [i]
        }
    }
}

/**
 * The following function will progressively generate all possible combinations
 * of the provided character set between the min and max lengths.
 */
const generate = function* (options={}) {
    const {min=5, max=8, characters=lowers} = options

    if (min > max) {
        throw new Error('min cannot be higher than max')
    } else
    if (min < max) {
        for (let i = min; i <= max; i++) {
            yield* generate({...options, min: i, max: i})
        }
    } else {
        yield* mix(...Array(max).fill(characters))
    }
}

export { mix, generate }
