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

/** Converts a string or DateObj */
export function convertToIso(date: string | Date) {
  if (date) {
    try {
      const dateVal: Date = new Date(date)
        , yyyy: any = dateVal.getFullYear()
      let dd: any = dateVal.getDate()
        , mm: any = dateVal.getMonth() + 1

      if (dd < 10) dd = `0${dd}`
      if (mm < 10) mm = `0${mm}`

      return `${yyyy}-${mm}-${dd}T00:00:00.000Z`
    }
    catch (err) {
      console.error('convertToIso.Err: ', err)
    }
  }
  return date
}

