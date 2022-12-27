/**
 * @description for get user email
 *
 * @param {Array} data
 * @param {String} value
 *
 * @return {String}
 */
export const getAuthEmail = (data, value) => {
  return data.find((email) => email === value)
}
