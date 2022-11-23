<template>
  <v-app>
    <header></header>
    <v-main>
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
  components: {
    SheepCounter,
    FooterBlock,
  },
}
</script>


