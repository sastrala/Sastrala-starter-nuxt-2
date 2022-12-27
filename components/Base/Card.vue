<template>
  <v-card
    :width="width"
    :height="height"
    :elevation="elevation"
    :outlined="outlined"
  >
    <div v-if="$slots.img" class="text-center">
      <slot name="img" />
    </div>
    <v-card-title v-if="$slots.title">
      <slot name="title" />
    </v-card-title>
    <v-card-text v-if="$slots.body" class="pa-0">
      <slot name="body" />
    </v-card-text>
    <v-card-actions v-if="$slots.action" class="pb-5 px-5 pt-0">
      <slot name="action" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BaseCardComponent',
  props: {
    /**
     * @description if want to use card width
     *
     * @param {number | string}
     * @default '100%'
     */
    width: {
      type: [Number, String],
      default: null,
    },

    /**
     * @description if want to use card height
     *
     * @param {number | string}
     * @default '100%'
     */
    height: {
      type: [Number, String],
      default: null,
    },

    /**
     * @description if want to use shadow or elevation
     *
     * @param {Number | String}
     * @default '0'
     */
    elevation: {
      type: [Number, String],
      default: '0',
    },

    /**
     * @description if want to use outlined theme
     *
     * @param {boolean}
     * @default false
     */
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
