<template>
  <v-container class="align-center text-center justify-center mt-9">
    <v-row>
      <v-col>
        <v-btn class="black--text" color="white" @click="login">
          <v-icon>mdi-google</v-icon>&nbsp; {{ $t('login') }}
        </v-btn>
      </v-col>
    </v-row>

    <BaseOverlayLoading :loading="loading" />
  </v-container>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  name: 'PageVerification',
  data() {
    return {
      pin: null,
    }
  },
  computed: {
    ...mapGetters({
      loading: 'Auth/loading',
    }),
  },
  methods: {
    /**
     * @description login with google
     *
     * @returns {void}
     */
    login() {
      this.$auth.loginWith('google')
    },
  },
}
</script>
