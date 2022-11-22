<template>
  <div class="coverflow" v-CoverflowBlock>
    <img
      v-for="(coverItem) of coverList"
      :src="coverItem.cover"
      :style="coverItem.style"
      :index="coverItem.index"
      :data-id="coverItem.index"
      :id="'coverflow'+coverItem.index"
      :key="coverItem.index">
  </div>
</template>

<script>
import CoverflowBlock from './directives/coverflowBlock'

export default {
  name: 'CoverflowBlock',
  data () {
    return {
      coverIndex: 0
    }
  },
  props: {
    coverList: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 980
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    index: {
      type: Number,
      default: 0
    },
    coverWidth: {
      type: Number,
      default: 100
    },
    coverHeight: {
      type: Number,
      default: 0
    },
    coverSpace: {
      type: Number,
      default: 50
    },
    coverShadow: {
      type: Boolean,
      default: false
    },
    coverFlat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (index) {
      this.coverIndex = index
      this.$emit('change', index)
    }
  },
  directives: {
    CoverflowBlock
  }
}
</script>
