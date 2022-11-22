<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }}
      <a v-bind:href="href" target="blank">
        <v-icon size="24px">
          mdi-instagram
        </v-icon>
      </a>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {
      href: 'https://www.instagram.com/kramer.dmitry/',
    }
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>