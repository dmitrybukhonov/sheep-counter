<template>
  <v-app>
    <header></header>
    <v-main>
      <!-- <v-container>
        <v-toolbar flat height="72">
          <v-switch v-model="$vuetify.theme.dark" inset></v-switch>
        </v-toolbar>
      </v-container> -->
      <SheepCounter msg="Sheep Counter" />
      <FooterBlock />
    </v-main>
  </v-app>
</template>

<script>
import SheepCounter from './components/sheep-counter.vue';
import FooterBlock from './FooterBlock.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App'
  },
  components: {
    SheepCounter,
    FooterBlock,
  },
}
</script>

<style>
/* #app {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
