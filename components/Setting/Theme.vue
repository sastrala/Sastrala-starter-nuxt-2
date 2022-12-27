<template>
  <v-row no-gutters>
    <v-col>
      <span v-if="!noTitle" class="text-h6">
        {{ $t('settingPage.theme') }}
      </span>
      <v-radio-group
        :value="value"
        dense
        row
        hide-details
        @change="updateSetting($event)"
      >
        <v-radio
          v-for="(data, i) in availableTheme"
          :key="i"
          :label="data.name"
          :value="data"
        />
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script>
// constant
import { SETTING_THEME } from '@/constant'

// theme scheme
import { theme } from '@/config'

export default {
  name: 'SettingThemeComponent',
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
    noTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    availableTheme() {
      return theme
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
      this.$emit('change', $event, SETTING_THEME)
    },
  },
}
</script>
