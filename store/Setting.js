// constant
import {
  SETTING_LANGUANGE,
  SETTING_THEME,
  SETTING_EMAIL_CONNECT,
} from '@/constant'

// helpers
import { setTheme, checkLocalTheme, stringToArray } from '@/helpers'

export const state = () => ({
  loading: false,
  language: null,
  theme: false,
  emailConnect: [],
})

export const getters = {
  loading: (state) => state.loading,
  language: (state) => state.language,
  theme: (state) => state.theme,
  emailConnect: (state) => state.emailConnect,
}

export const mutations = {
  SET_LOADING: (state, payload) => {
    state.loading = payload
  },
  SET_LANGUAGE: (state, payload) => {
    state.language = payload
  },
  SET_THEME: (state, payload) => {
    state.theme = payload
  },
  SET_EMAIL_CONNECT: (state, payload) => {
    state.emailConnect = payload
  },
}

export const actions = {
  /**
   * @description Get data setting
   *
   * @return {Promise}
   */
  async fetchSetting({ commit }) {
    commit('SET_LOADING', true)

    try {
      const response = await this.$repositories.setting.all()

      // set language
      const language = response.find((key) => key.name === SETTING_LANGUANGE)
      commit('SET_LANGUAGE', language)
      this.$i18n.setLocale(language.value)

      // set theme
      const theme = response.find((key) => key.name === SETTING_THEME)
      commit('SET_THEME', theme)
      if (!checkLocalTheme()) {
        setTheme(theme.value)
      }

      // set user connect
      const emailConnect = response.find(
        (key) => key.name === SETTING_EMAIL_CONNECT
      )
      commit('SET_EMAIL_CONNECT', stringToArray(emailConnect?.value))

      return Promise.resolve(response)
    } catch (err) {
      return Promise.reject(err)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  /**
   * @description for update setting
   *
   * @param {Object} payload
   *
   * @return {Promise}
   */
  async updateSetting({ commit }, payload) {
    commit('SET_LOADING', true)

    try {
      const response = await this.$repositories.setting.update(payload)

      return Promise.resolve(response)
    } catch (err) {
      return Promise.reject(err)
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
