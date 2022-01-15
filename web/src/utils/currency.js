/**
 * Formats a given price to Brazilian currency
 * @param { number } price Price to be formatted
 * @returns { string } Formatted price
 */
export const formatPrice = price => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}
