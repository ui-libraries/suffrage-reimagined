<template>
  <div class="image-carousel md-elevation-20">
    <b-carousel id="carousel-1" class="image-body" v-model="slide" :interval="4000" controls indicators
      style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

      <span v-for="(image, index) in images" :key="index">
        <b-carousel-slide class="carousel-slide">
          <template v-slot:img
          >
            <expandable-image class="" :src="image.url" />
          </template>
        </b-carousel-slide>
      </span>
    </b-carousel>
    <md-divider class="divider"></md-divider>
    <div class="caption"><span>{{currentCaption}}</span></div>
  </div>
</template>



<script>
  import ExpandableImage from '../helpers/ExpandableImage'

  export default {
    props: {
      images: Array
    },

    components: {
      ExpandableImage
    },

    data() {
      return {
        slide: 0,
        sliding: null,
      }
    },

    computed: {
      currentCaption: function () {
        return this.images[this.slide].caption;
      }
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
  .carousel-slide {
    background-color: rgba(0, 0, 0, 0.185) !important;
  }

  .caption {
    background-color: rgba(0, 0, 0, 0.829);
    color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow-wrap: break-word;
    padding: 5px 0;
  }

  .divider {
        background-color: rgba(255, 204, 0, 0.24) !important;
    }

  .image-carousel {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: .04em solid rgba(255, 204, 0, 0.24);
    width: 250px;
  }

  .image-body {
    
  }
</style>