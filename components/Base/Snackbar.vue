<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    :top="isPositionTop"
    :bottom="isPositionBottom"
    :left="isPositionLeft"
    :right="isPositionRight"
  >
    {{ message }}
    <template #action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="onClickClose">
        {{ $t('component.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'BaseSnackbarComponent',
  data() {
    return {
      show: false,
      message: '',
      color: '',
      position: '',
      timeout: null,
    }
  },
  computed: {
    /**
     * @description for positioning the toast
     *
     * @default top
     */
    isPositionTop() {
      return this.position === 'top' || this.position === ''
    },
    isPositionBottom() {
      return this.position === 'bottom'
    },
    isPositionLeft() {
      return this.position === 'left'
    },
    isPositionRight() {
      return this.position === 'right'
    },
  },
  created() {
    // for getting the data for model
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'component/Snackbar/showMessage') {
        this.message = state.component.Snackbar.message
        this.timeout = state.component.Snackbar.timeout
        this.color = state.component.Snackbar.color
        this.position = state.component.Snackbar.position
        this.show = true
      }
    })

    // for error handler
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'component/Snackbar/errorMessage') {
        this.message = state.component.Snackbar.message
        this.timeout = state.component.Snackbar.timeout
        this.color = state.component.Snackbar.color
        this.position = state.component.Snackbar.position
        this.show = true
      }
    })
  },
  methods: {
    onClickClose() {
      this.show = false
      this.$store.commit('component/Snackbar/clearData')
    },
  },
}
</script>
