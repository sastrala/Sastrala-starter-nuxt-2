<template>
  <section>
    <nuxt-content :document="post" />
  </section>
</template>

<script>
export default {
  name: 'PageAbout',
  data: () => ({
    post: null,
  }),
  async created() {
    await this.fetchContent()
  },
  methods: {
    async fetchContent() {
      try {
        const response = await this.$content(this.$i18n.locale, 'about').fetch()
        this.post = response
      } catch (err) {
        this.$store.commit('component/Snackbar/errorMessage', err)
      }
    },
  },
}
</script>
