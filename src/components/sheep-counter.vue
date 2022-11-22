<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1>{{ msg }}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <h2>{{ count }}</h2>
    </v-row>
    <v-row align="center" justify="center">
      <coverflow :coverList="coverList" :coverWidth="220" :coverHeight="100" :width="400" @change="onChange">
      </coverflow>
    </v-row>
  </v-container>
</template>

<script>
import coverflow from '../assets/vue-coverflow'
// import Meta from 'vue-meta'

export default {
  created () {
    //
  },
  props: {
    msg: String
  },
  components: {
    coverflow
  },
  methods: {
    onChange (index) {
      this.count = index;

      this.item = {
        index: index + 1,
        cover: require('../assets/images/sheep.png'),
        style: "position: absolute; width: 220px; height: auto; bottom: 60px; transition: transform 0.4s ease 0s, margin-left 0.4s ease 0s, -webkit-filter 0.4s ease 0s; left: 100px; margin-left: 150px; filter: brightness(0.7); z-index: 2; perspective: 300px; transform: rotateY(-55deg) translateZ(-55px);",
      };
      this.coverList.push(this.item);
    },
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  },
  // head: {
  //   console.log('head');
  //   return {
  //     title: '123123',
  //     meta: [
  //       {
  //         name: 'og:title',
  //         hid: 'og:title',
  //         content: this.metaTitle,
  //       },
  //       {
  //         name: 'description',
  //         hid: 'description',
  //         content: this.metaDescription,
  //       },
  //       {
  //         name: 'og:description',
  //         hid: 'og:description',
  //         content: this.metaDescription,
  //       },
  //     ],
  //   };
  // },
  data () {
    return {
      metaTitle: '123123',
      metaDescription: '123123',
      count: 0,
      removeIndex: 0,
      coverList: [
        {
          index: 0,
          cover: require('../assets/images/sheep.png'),
        },
        {
          index: 1,
          cover: require('../assets/images/sheep.png'),
        },
      ]
    }
  },
}
</script>
