export const state = () => ({
  message: '',
  color: '',
  position: '',
  timeout: -1,
})

export const mutations = {
  /**
   * @description for storing the toast style & message
   *
   * @param {object} state
   * @param {object} payload
   */
  showMessage(state, payload) {
    state.message = payload.message
    state.color = payload.color
    state.position = payload.position
    state.timeout = payload.timeout
  },

  /**
   * @description for storing the toast error message
   *
   * @param {object} state
   * @param {object} payload
   */
  errorMessage(state, payload) {
    const { error } = payload
    state.message = error.message
    state.color = 'error'
    state.position = 'bottom'
    state.timeout = -1
  },

  /**
   * @description for clear toast message
   *
   * @param {object} state
   */
  clearData(state) {
    state.message = ''
    state.color = ''
    state.position = ''
    state.timeout = -1
  },
}
