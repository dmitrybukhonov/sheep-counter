<template>
  <div class="box">
    <b-carousel 
    class="sheep-carousel"
    :progress="false" 
    :arrow="false" 
    :indicator="false" 
    :indicator-inside="false" 
    :pause-info="false"
    :autoplay="false" 
    @change="info()">
    <b-carousel-item v-for="(item, i) in 2" :key="i">
      <section class="box-custom">
        <img :src="require('../assets/images/sheep.png')">
      </section>
    </b-carousel-item>
  </b-carousel>
</div>
</template>

<script>
export default {
  count: {
    type: Number,
    required: true,
  },
  methods: {
    info () {
      this.$emit('change-count');
    }
  }
}
</script>

<style>
.box-custom {
  height: 256px;
}
.sheep-carousel {
  text-align: center;
}
</style>