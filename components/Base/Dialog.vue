<template>
  <v-dialog v-model="isOpen" :width="width" :persistent="isPersistent">
    <BaseCard isUsingTitle isUsingAction>
      <template #img>
        <slot name="img" />
      </template>
      <template #title>
        <slot name="title" />
      </template>
      <template #body>
        <slot name="body" />
      </template>
      <template #action>
        <v-row v-if="isBtnBlock" align="center">
          <v-col>
            <v-btn
              v-if="isBtnBlock"
              v-show="isUsingFirstButton"
              depressed
              outlined
              color="primary"
              block
              :loading="loadingFirstBtn"
              @click="handleFirstButton"
            >
              {{ firstBtnText }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              v-if="isBtnBlock"
              v-show="isUsingSecondButton"
              depressed
              color="primary"
              block
              :loading="loadingSecondBtn"
              :disabled="loadingSecondBtn"
              @click="handleSecondButton"
            >
              {{ secondBtnText }}
            </v-btn>
          </v-col>
        </v-row>

        <v-row v-if="!isBtnBlock" align="center">
          <v-col class="text-right">
            <v-btn
              v-if="!isBtnBlock"
              v-show="isUsingFirstButton"
              dense
              depressed
              outlined
              color="primary"
              :loading="loadingFirstBtn"
              @click="handleFirstButton"
            >
              {{ firstBtnText }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              v-if="!isBtnBlock"
              v-show="isUsingSecondButton"
              dense
              depressed
              color="primary"
              :loading="loadingSecondBtn"
              :disabled="loadingSecondBtn"
              @click="handleSecondButton"
            >
              {{ secondBtnText }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </BaseCard>
  </v-dialog>
</template>

<script>
export default {
  name: 'BaseDialogComponent',
  props: {
    /**
     * @description for show the dialog
     *
     * @type {Boolean}
     * @default false
     * @requires
     */
    open: {
      type: Boolean,
      default: false,
    },
    /**
     * @description for set width dialog
     *
     * @type {String}
     * @default auto
     */
    width: {
      type: String,
      default: 'auto',
    },
    /**
     * @description if want backdrop cant clicked
     *
     * @type {Boolean}
     * @default false
     */
    isPersistent: {
      type: Boolean,
      default: false,
    },
    /**
     * @description if want to use first button
     *
     * @type {Boolean}
     * @default false
     */
    isUsingFirstButton: {
      type: Boolean,
      default: false,
    },
    /**
     * @description if want to use second button
     *
     * @type {Boolean}
     * @default false
     */
    isUsingSecondButton: {
      type: Boolean,
      default: true,
    },
    /**
     * @description for set the first button label
     *
     * @type {String}
     * @default first Button Label
     */
    firstBtnText: {
      type: String,
      default: 'first Button Label',
    },
    /**
     * @description for set the second button label
     *
     * @type {String}
     * @default Second Button Label
     */
    secondBtnText: {
      type: String,
      default: 'Second Button Label',
    },
    /**
     * @description if want to use button as block
     *
     * @type {Boolean}
     * @default false
     */
    isBtnBlock: {
      type: Boolean,
      default: false,
    },
    /**
     * @description if want to use loading in First button
     *
     * @type {Boolean}
     * @default false
     */
    loadingFirstBtn: {
      type: Boolean,
      default: false,
    },
    /**
     * @description if want to use loading in seccond button
     *
     * @type {Boolean}
     * @default false
     */
    loadingSecondBtn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    /**
     * @description for emitting the first button
     */
    handleFirstButton() {
      this.$emit('clickFirstButton')
    },

    /**
     * @description for emitting the second button
     */
    handleSecondButton() {
      this.$emit('clickSecondButton')
    },
  },
}
</script>
