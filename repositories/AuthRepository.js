// Constant
import { SETTING_EMAIL_CONNECT, GOOGLE } from '@/constant'

// Helpers
import {
  connectServerSpreadsheet,
  stringToArray,
  getAuthEmail,
} from '@/helpers'

export default () => ({
  /**
   * @description for check verification pin & hash it then place it into cookies
   *
   * @param {object} payload
   *
   * @returns {Promise}
   */
  async checkVerification(payload) {
    try {
      const data = await connectServerSpreadsheet(1)
      const rows = await data.getRows()

      // get data from server
      let responseData = null
      let responseType = null
      if (payload.type === GOOGLE) {
        const responseUser = rows.find(
          (value) => value.name === SETTING_EMAIL_CONNECT
        )
        responseData = getAuthEmail(
          stringToArray(responseUser.value),
          payload.value
        )
        responseType = 'error_user'
      }

      // if data match with data in server
      if (responseData === payload.value) {
        return Promise.resolve(true)
      } else {
        return Promise.reject(responseType)
      }
    } catch (err) {
      return Promise.reject(err.response.data)
    }
  },
})
