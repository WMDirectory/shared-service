/**
 * Retrieves nested value from param Value, stored according to param Path
 * @param {*} value
 * @param {string} path
 * @param {*} defaultValue
 * Stolen from https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-3159161
 */
export const get = (value: any, path: string, defaultValue: any) =>
String(path)
  .split('.')
  .reduce((acc, v) => {
    try {
      acc = acc[v] === undefined ? defaultValue : acc[v]
    } catch (e) {
      return defaultValue
    }
    return acc
  }, value)

