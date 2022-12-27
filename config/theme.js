// vuetify colors
import colors from 'vuetify/lib/util/colors'

export default [
  {
    name: 'Dark',
    isDark: true,
    colors: {
      primary: colors.blue.lighten1,
      accent: colors.grey.lighten1,
      secondary: colors.amber.lighten1,
      info: colors.teal.lighten1,
      warning: colors.amber.lighten1,
      error: colors.deepOrange.lighten1,
      success: colors.green.lighten1,
    },
  },
  {
    name: 'Light',
    isDark: false,
    colors: {
      primary: colors.blue.base,
      accent: colors.grey.base,
      secondary: colors.amber.base,
      info: colors.teal.base,
      warning: colors.amber.base,
      error: colors.deepOrange.base,
      success: colors.green.base,
    },
  },
]
