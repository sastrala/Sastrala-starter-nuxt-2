<template>
  <v-row no-gutters>
    <v-col>
      <span v-if="!noTitle" class="text-h6">
        {{ $t('settingPage.language') }}
      </span>
      <v-radio-group
        :value="value"
        dense
        row
        hide-details
        @change="updateSetting($event)"
      >
        <v-radio
          v-for="locale in availableLocales"
          :key="locale.code"
          :label="locale.name"
          :value="locale.code"
        />
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
// constant
import { SETTING_LANGUANGE } from '@/constant'

export default {
  name: 'SettingLanguageComponent',
  props: {
    value: {
      type: String,
      default: '',
    },
    noTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    /**
     * @description for pas the data to parent
     *
     * @param {String} $event
     *
     * @return {void}
     */
    updateSetting($event) {
      this.$emit('change', $event, SETTING_LANGUANGE)
    },
  },
}
</script>
