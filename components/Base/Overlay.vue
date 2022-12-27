<template>
  <v-overlay :value="loading">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
export default {
  name: 'BaseOverlayComponent',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
