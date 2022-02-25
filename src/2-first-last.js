export const firstLast = (items) => {
  const last = items.slice(-1)
  if(items.length === 0) {
    return "No items!"
  } else if (items.length === 1) {
    return `Only item: ${items}`
  }
  return `First: ${items[0]}, Last: ${last}`
}
