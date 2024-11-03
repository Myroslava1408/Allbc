export const formatNumber = (num: number): string => {
  if (isNaN(num)) return ''
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + 'm'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k'
  }
  return num.toString()
}
