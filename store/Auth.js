export const state = () => ({
  loading: false,
})

export const getters = {
  loading: (state) => state.loading,
}

export const mutations = {
  SET_LOADING: (state, payload) => {
    state.loading = payload
  },
}

export const actions = {
  /**
   * @description for update setting
   *
   * @param {Object} payload
   *
   * @return {Promise}
   */
  async checkVerification({ commit }, payload) {
    commit('SET_LOADING', true)

    try {
      const response = await this.$repositories.auth.checkVerification(payload)

      return Promise.resolve(response)
    } catch (err) {
      return Promise.reject(err)
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
