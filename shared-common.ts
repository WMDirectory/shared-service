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

/** Converts a string or DateObj to GMT+0 without time value */
export function convertToGMT(date: string | Date) {
  if (date) {
    try {
      const dateObj: Date = new Date(date)
        , yyyy: any = dateObj.getFullYear()
      let dd: any = dateObj.getDate()
        , mm: any = dateObj.getMonth() + 1

      if (dd < 10) dd = `0${dd}`
      if (mm < 10) mm = `0${mm}`

      return `${yyyy}-${mm}-${dd}T00:00:00.000Z`
    }
    catch (err) {
      console.error('convertToGMT.Err: ', err)
    }
  }
  return date
}

/**
 * Sorts array based on the single key that you provide
 * @param arrObj array of objects to be sorted
 * @param sortKey key for sorting
 * @param isDesc boolean for descending
 */
export function sortArrObj(arrObj: any[], sortKey?: string, isDesc?: boolean) {
  return arrObj.sort((a, b) => {
    let _A = a, _B = b
    if (sortKey) { _A = a[sortKey]; _B = b[sortKey] }
    const dir = _A < _B ? 1 : ((_B < _A) ? -1 : 0)
    if (isDesc) { return dir }
    return -dir
  })
}

/**
 * Yes
 */
export function simulateKey(element: HTMLElement, keycode?: string) {
  const keyboardEvent = new KeyboardEvent('keydown', {code: 'Tab', key: 'Tab', keyCode: 9} as any)
  // element.dispatchEvent(e)

  /** Attempt #2 */
  // const keyboardEvent = new KeyboardEvent('keydown')

  // const initMethod = typeof keyboardEvent[`initKeyboardEvent`] !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'

  // keyboardEvent[initMethod](
  //   'keydown', // event type : keydown, keyup, keypress
  //   true, // bubbles
  //   true, // cancelable
  //   window, // viewArg: should be window
  //   false, // ctrlKeyArg
  //   false, // altKeyArg
  //   false, // shiftKeyArg
  //   false, // metaKeyArg
  //   9, // keyCodeArg : unsigned long the virtual key code, else 0
  //   0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
  // )
  // keyboardEvent[`keyCodeVal`] = 9

  element.dispatchEvent(keyboardEvent)
}

