import { mix, generate } from '../src/helpers'

test('mix all possible combinations of simple values', () => {
    const result = Array.from(mix('/', '1', '/', 'A', '/'))

    expect(result.length).toBe(1)
})

test('mix all possible combinations of array values', () => {
    const result = Array.from(mix(['/'], ['1', '2', '3'], ['/'], ['A', 'B', 'C'], ['/']))

    expect(result.length).toBe(Math.pow(3, 2))
})

test('mix all possible combinations of iterators', () => {
    const gen1 = function* () {
        yield '1'
        yield '2'
        yield '3'
    }

    const gen2 = function* () {
        yield 'A'
        yield 'B'
        yield 'C'
    }

    const result = Array.from(mix('/', gen1, '/', gen2, '/'))

    expect(result.length).toBe(Math.pow(3, 2))
})

test('mix all possible combinations of mixed values', () => {
    const gen1 = function* () {
        yield '1'
        yield '2'
        yield '3'
    }

    const result = Array.from(mix('/', gen1, '/', ['A', 'B', 'C'], '/'))

    expect(result.length).toBe(Math.pow(3, 2))
})

test('generate all possible combinations between 1 and 1 in character set a,b,c', () => {
    const result = Array.from(generate({min: 1, max: 1, characters: ['a', 'b', 'c']}))

    expect(result.length).toBe(3)
    expect(result[0].length).toBe(1)
    expect(result[1].length).toBe(1)
    expect(result[2].length).toBe(1)
})

test('generate all possible combinations between 1 and 2 in character set a,b,c', () => {
    const result = Array.from(generate({min: 1, max: 2, characters: ['a', 'b', 'c']}))

    expect(result.length).toBe(12)
    expect(result[0].length).toBe(1)
    expect(result[1].length).toBe(1)
    expect(result[2].length).toBe(1)
    expect(result[3].length).toBe(2)
    expect(result[4].length).toBe(2)
    expect(result[5].length).toBe(2)
    expect(result[result.length - 1].length).toBe(2)
    expect(result[result.length - 2].length).toBe(2)
    expect(result[result.length - 3].length).toBe(2)
})

test('generate all possible combinations between 1 and 3 in character set a,b,c', () => {
    const result = Array.from(generate({min: 1, max: 3, characters: ['a', 'b', 'c']}))

    expect(result.length).toBe(39)
    expect(result[0].length).toBe(1)
    expect(result[1].length).toBe(1)
    expect(result[2].length).toBe(1)
    expect(result[3].length).toBe(2)
    expect(result[4].length).toBe(2)
    expect(result[5].length).toBe(2)
    expect(result[result.length - 1].length).toBe(3)
    expect(result[result.length - 2].length).toBe(3)
    expect(result[result.length - 3].length).toBe(3)
})
