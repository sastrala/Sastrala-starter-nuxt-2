<template>
  <section>
    <!-- theme input  -->
    <SettingTheme v-model="form.theme" class="mb-5" @change="updateSetting" />

    <!-- language input  -->
    <SettingLanguage
      v-model="form.language"
      class="mb-5"
      @change="updateSetting"
    />

    <!-- set account connect -->
    <SettingEmailConnect
      v-model="form.emailConnect"
      :loading="loading"
      @change="updateSetting"
    />
  </section>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

// constant
import {
  SETTING_LANGUANGE,
  SETTING_THEME,
  SETTING_EMAIL_CONNECT,
} from '@/constant'

// helpers
import { findTheme, setTheme } from '@/helpers'

export default {
  name: 'PageSetting',
  data() {
    return {
      form: {
        language: null,
        theme: null,
        emailConnect: [],
      },
    }
  },
  computed: {
    ...mapGetters({
      loading: 'Setting/loading',
      language: 'Setting/language',
      theme: 'Setting/theme',
      emailConnect: 'Setting/emailConnect',
    }),
  },

  async created() {
    await this.fetchDataSetting()
  },

  methods: {
    /**
     * @description for get setting data
     *
     * @return {any}
     */
    async fetchDataSetting() {
      try {
        await this.$store.dispatch('Setting/fetchSetting')

        this.form.language = this.language.value
        this.form.emailConnect = this.emailConnect
        this.form.theme = findTheme(this.theme.value)
      } catch (err) {
        this.$store.commit('component/Snackbar/errorMessage', err)
      }
    },

    /**
     * @description for update setting data
     *
     * @param {String | Array} value
     * @param {String} type
     *
     * @return {void}
     */
    async updateSetting(value, type) {
      let dataValue = value

      // if type email connect
      if (type === SETTING_EMAIL_CONNECT) {
        // this assign value for handle bug in combobox
        this.form.emailConnect = value

        dataValue = value.toString()
      }

      // if type language
      if (type === SETTING_LANGUANGE) {
        this.$i18n.setLocale(value)
      }

      // if type theme
      if (type === SETTING_THEME) {
        dataValue = value.name
        setTheme(dataValue)
      }

      try {
        await this.$store.dispatch('Setting/updateSetting', { dataValue, type })
        await this.fetchDataSetting()

        this.$notifier.showToast({
          type: 'success',
          message: this.$t('settingPage.updateSettingMessage'),
        })
      } catch (err) {
        this.$store.commit('component/Snackbar/errorMessage', err)
      }
    },
  },
}
</script>
