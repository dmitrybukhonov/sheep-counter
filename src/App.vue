<template>
  <div id="app">
    <div class="container is-max-widescreen">
      <b-loading v-model="isLoading"></b-loading>
      <div class="box">
        <h1 class="title has-text-centered">Счетчик овец</h1>
      </div>
      <div class="box">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">{{ this.count }}</p>
            </div>
          </div>
        </nav>
      </div>
      <SheepCounter :count="count" @change-count="changeCount" />
      <FooterBlock />
    </div>
  </div>
</template>

<script>
import SheepCounter from './components/sheep-counter.vue';
import FooterBlock from './FooterBlock.vue';
import './style/main.scss';

export default {
  name: 'App',
  beforeMount () {
    this.isLoading = false;
  },
  data () {
    return {
      count: 0,
      isLoading: true,
    };
  },
  components: {
    SheepCounter,
    FooterBlock,
  },
  methods: {
    changeCount () {
      this.count++;
    },
  }
};
</script>


