/**
 * Delays the current function execution context in `n` milliseconds
 * @param { number } ms Milliseconds to delay
 * @returns { Promise<void> } A promise that resolves to nothing
 */
export const delay = (ms) => new Promise((res) => setTimeout(res, ms))
