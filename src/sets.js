const ASCII = [...Array(127).keys()].map(String.fromCharCode)

const numbers = ASCII.slice(48, 58)
const lowers = ASCII.slice(97, 123)
const uppers = ASCII.slice(65, 91)
const alphas = [...ASCII.slice(32, 48), ...ASCII.slice(58, 65), ...ASCII.slice(91, 97), ...ASCII.slice(123, 127)]

export { ASCII, numbers, lowers, uppers, alphas }
