<template>
  <v-footer color="transparent" padless fixed>
    <v-col class="text-center" cols="12">
      © 2018 - {{ new Date().getFullYear() }},
      <a href="https://www.instagram.com/sastrala.id/" target="_blank">
        @sastrala.id
      </a>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'ElementFooterComponent',
}
</script>
