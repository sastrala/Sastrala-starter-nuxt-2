// lodash
import isEmpty from 'lodash.isempty'

// Theme Schema
import { theme } from '@/config'

/**
 * @description for find the theme scheme data
 *
 * @param {String} themeName name of theme
 *
 * @returns {Object} object
 */
export const findTheme = (themeName) => {
  return theme.find((value) => value.name === themeName)
}

/**
 * @description for set App Theme
 *
 * @param {String} theme name of theme
 * @default null
 *
 * @returns {void} change the theme by scheme color
 */
export const setTheme = (theme = null) => {
  const dataTheme = findTheme(
    checkLocalTheme() && !theme ? localStorage.getItem('theme') : theme
  )

  if (!checkLocalTheme()) {
    localStorage.setItem('theme', theme)
  }

  const name = dataTheme.name
  const dark = dataTheme.isDark
  const color = dataTheme.colors

  // set color themes
  Object.keys(color).forEach((i) => {
    dark
      ? (window.$nuxt.$vuetify.theme.themes.dark[i] = color[i])
      : (window.$nuxt.$vuetify.theme.themes.light[i] = color[i])
  })

  // set dark theme or not
  window.$nuxt.$vuetify.theme.dark = dark

  // save theme name to disable selection
  window.$nuxt.$vuetify.theme.themes.name = name
}

/**
 * @description for check if in local storage theme was set
 *
 * @returns {Boolean} true / false
 */
export const checkLocalTheme = () => {
  const themeData = localStorage.getItem('theme') ?? null

  if (themeData && !isEmpty(findTheme(themeData))) {
    return true
  } else {
    return false
  }
}
