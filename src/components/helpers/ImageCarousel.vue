<template>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
    <span v-for="image in images" :key="image.id">
    <b-carousel-slide  class="carousel-slide"
      :caption="image.caption"
      :text="image.text">
      <template v-slot:img>
      <expandable-image
      class="d-block w-100 img-fluid"
      :src="image.url"
      />
      </template>
    </b-carousel-slide>
    </span>

      <!-- <b-carousel-slide v-for="image in images" :key="image.id" class="carousel-slide"
        :caption="image.caption"
        :text="image.text"
        :img-src="image.url"
      ></b-carousel-slide> -->
      
      
    
    </b-carousel>
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
        sliding: null
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



.carousel-caption {
}
</style>