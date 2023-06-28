export const capitalize = (string: string, capall = true) => {
  const reg = new RegExp('\\w+', capall ? 'g' : '')
  return string.replace(reg, (word) => word[0].toUpperCase() + word.slice(1))
}
