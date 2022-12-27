/**
 * @description Replace string to number
 *
 * @param {string} string
 *
 * @return {number}
 */
export const replaceStringToNum = (string) => {
  if (typeof string === 'string') {
    return Number(string.replace(/\./g, '').replace(/,/g, '.'))
  } else {
    return string
  }
}

/**
 * @description for convert string to array with identified separator
 *
 * @param {String} data
 * @param {String} identifier
 *
 * @return {Array}
 */
export const stringToArray = (data, identifier = ',') => {
  return data.split(identifier)
}
