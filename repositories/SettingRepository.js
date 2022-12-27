// Constant
import { SETTING_THEME } from '@/constant'

// Helpers
import { connectServerSpreadsheet } from '@/helpers'

export default () => ({
  /**
   * @description for get list data
   *
   * @returns {Array}
   *
   */
  async all() {
    try {
      const data = await connectServerSpreadsheet(1)
      const response = await data.getRows()

      // map data for cleaner output
      const mapPayload = response.map((value) => {
        return {
          name: value.name,
          value: value.value,
        }
      })

      return Promise.resolve(mapPayload)
    } catch (err) {
      return Promise.reject(err.response.data)
    }
  },

  /**
   * @description for update data
   *
   * @param {Object} payload
   *
   * @returns {Object}
   *
   */
  async update(payload) {
    try {
      const data = await connectServerSpreadsheet(1)
      const rows = await data.getRows()
      const detail = rows.findIndex((value) => value.name === payload.type)

      // check if data is category income / category outcome convert array to string
      let typeData = null

      // set theme local storage
      if (payload.type === SETTING_THEME) {
        localStorage.setItem('theme', payload.dataValue)
      }

      typeData = payload.dataValue
      rows[detail].value = typeData

      const response = await rows[detail].save()

      return Promise.resolve(response)
    } catch (err) {
      return Promise.reject(err.response.data)
    }
  },
})
