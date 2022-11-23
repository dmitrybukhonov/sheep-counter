<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h2>{{ msg }}</h2>
    </v-row>
    <v-row align="center" justify="center">
      <h1>{{ count }}</h1>
    </v-row>
    <v-row class="sheep-block" align="center" justify="center">
      <div @click="sheepChange">
        <img :width="sheepHeight" v-bind:src="require('../assets/images/sheep.png')" />
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    sheepChange () {
      this.count++;
      this.sheepHeight++;

      if (this.sheepHeight > 399) {
        this.sheepHeight = 300;
      }
    },
  },
  data () {
    return {
      count: 0,
      sheepHeight: 250,
    }
  },
}
</script>
<style>
.sheep-block {
  height: 400px;
}

h2 {
  font-size: 30px
}
</style>
