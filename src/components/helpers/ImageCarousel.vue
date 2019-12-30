<template>
  <div class="image-carousel">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

      <span v-for="(image, index) in images" :key="index">
        <b-carousel-slide class="carousel-slide">
          <template v-slot:img
          >
            <expandable-image class="d-block w-100 img-fluid" :src="image.url" />
          </template>
        </b-carousel-slide>
      </span>

      <!-- <b-carousel-slide v-for="image in images" :key="image.id" class="carousel-slide"
          :caption="image.caption"
          :text="image.text"
          :img-src="image.url"
        ></b-carousel-slide> -->



    </b-carousel>
    <div class="caption">{{currentCaption}}</div>
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
    background-color: black !important;
  }



  .caption {
    background-color: rgba(0, 0, 0, 0.829);
    color: white;
  }

  .image-carousel {
    width: 300px;
    height: 600px;
  }
</style>