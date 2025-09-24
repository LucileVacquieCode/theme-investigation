function flattenToCssVars(
  obj: Theme,
  prefix: string = '--'
): Record<string, string> {
  const result: Record<string, string> = {}

  function recurse(current: Theme, path: string[]) {
    Object.entries(current).forEach(([key, value]) => {
      const newPath = [...path, key]
      if (typeof value === 'object' && value !== null) {
        recurse(value, newPath)
      } else {
        const varName = `${prefix}${newPath.join('-')}`
        result[varName] = value
      }
    })
  }

  recurse(obj, [])
  return result
}

export function handleTheme(theme: Theme) {
  const root = document.documentElement
  const flatVars = flattenToCssVars(theme)

  Object.entries(flatVars).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}
