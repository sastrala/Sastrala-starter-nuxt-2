<template>
  <v-row no-gutters class="mb-5">
    <v-col class="d-flex flex-column">
      <span class="text-h6">{{ $t('settingPage.googleConnect') }}</span>
      <v-combobox
        ref="comboBox"
        class="mt-3"
        :value="value"
        :delimiters="[',']"
        label="Email"
        outlined
        multiple
        append-icon
        chips
        :deletable-chips="value.length !== 1"
        :loading="loading"
        @change="updateSetting($event)"
      >
      </v-combobox>
    </v-col>
  </v-row>
</template>

<script>
import { SETTING_EMAIL_CONNECT } from '@/constant'

export default {
  name: 'SettingEmailConnect',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
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
      this.$emit('change', $event, SETTING_EMAIL_CONNECT)
    },
  },
}
</script>
