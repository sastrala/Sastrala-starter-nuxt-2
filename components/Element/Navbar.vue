<template>
  <v-app-bar color="transparent" flat dense>
    <v-slide-x-transition v-if="!['index'].includes($route.name)" hide-on-leave>
      <v-btn
        class="mr-1"
        nuxt
        depressed
        fab
        small
        color="lighten-5"
        @click="goBack"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-slide-x-transition>
    <v-toolbar-title>
      <div class="d-flex flex-column">
        <span class="text-h6 font-weight-bold">
          {{ navbarText.title }}
        </span>
        <span v-if="navbarText.subtitle" class="text-caption">
          {{ navbarText.subtitle }}
        </span>
      </div>
    </v-toolbar-title>

    <v-spacer />

    <v-tooltip v-if="['index'].includes($route.name)" bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          class="mr-1"
          nuxt
          depressed
          fab
          small
          color="lighten-5"
          :to="{ name: 'setting' }"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('settingPage.setting') }}</span>
    </v-tooltip>

    <v-tooltip v-if="['index', 'setting'].includes($route.name)" bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          class="mr-1"
          nuxt
          depressed
          fab
          small
          color="lighten-5"
          :to="{ name: 'about' }"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('aboutPage') }}</span>
    </v-tooltip>

    <v-tooltip v-if="['index', 'setting'].includes($route.name)" bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          nuxt
          depressed
          fab
          small
          color="error"
          v-bind="attrs"
          v-on="on"
          @click="logout"
        >
          <v-icon>mdi-power-standby</v-icon>
        </v-btn>
      </template>
      <span>{{ $t('logout') }}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'ElementNavbarComponent',
  computed: {
    navbarText() {
      let title = ''
      let subtitle = null

      if (this.$route.name === 'index') {
        title = 'Sastrala Template'
        subtitle = this.$store.state.auth?.user
          ? `Hallo ${this.$store.state.auth.user.name}`
          : null
      } else if (this.$route.name === 'setting') {
        title = this.$t('settingPage.setting')
      } else if (this.$route.name === 'id') {
        title = this.$t('financePage.createEdit.editTransaction')
      } else if (this.$route.name === 'about') {
        title = this.$t('aboutPage')
      }
      return { title, subtitle }
    },
  },
  methods: {
    /**
     * @description for logout method
     */
    async logout() {
      await this.$auth.logout()
    },

    /**
     * @description for handle goback router if history is zero
     *
     * @return {void}
     */
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
.v-app-bar {
  .v-toolbar__content {
    padding: 0px !important;
  }
}
</style>
