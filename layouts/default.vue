<template>
  <v-app>
    <v-main class="main-base">
      <v-container>
        <ElementNavbar class="mb-5" />
        <Nuxt keep-alive />
        <ElementFooter />
      </v-container>
    </v-main>
    <BaseSnackbar />
  </v-app>
</template>

<script>
// helpers
import { checkLocalTheme, setTheme } from '@/helpers'

export default {
  name: 'DefaultLayout',
  /**
   * @description for get setting data for the first time
   *
   * @return {any}
   */
  async fetch() {
    if (checkLocalTheme()) {
      setTheme()
    }

    if (this.$route.name !== 'setting') {
      try {
        await this.$store.dispatch('Setting/fetchSetting')
      } catch (err) {
        this.$store.commit('component/Snackbar/errorMessage', err)
      }
    }
  },
}
</script>
