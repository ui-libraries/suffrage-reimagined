<template>
  <b-container fluid>
    <b-row>
      <b-col v-if="hasTextLeft"><slot name="textLeft"></slot></b-col>
      <b-col>
        <div class="carousel-wrapper">
          <div class="image-carousel md-elevation-20">
            <b-carousel id="carousel-1" class="image-body" v-model="slide" :interval="4000" controls indicators
              style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        
              <span v-for="(image, index) in images" :key="index">
                <b-carousel-slide class="carousel-slide">
                  <template v-slot:img
                  >
                    <expandable-image class="" :src="image.url" :close-on-background-click="true"/>
                  </template>
                </b-carousel-slide>
              </span>
            </b-carousel>
            <md-divider class="divider"></md-divider>
            <smooth-scrollbar><div class="caption"><span class="vertical-center">{{currentCaption}}</span></div></smooth-scrollbar>
          </div>
        </div>
      </b-col>
      <b-col v-if="hasTextRight"><slot name="textRight"></slot></b-col>
    </b-row>
  </b-container>
</template>



<script>
  import ExpandableImage from '../helpers/ExpandableImage'

  export default {
    props: {
      images: Array
    },

    components: {
      ExpandableImage,
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
      },

      hasTextLeft() {
        return !!this.$slots.textLeft;
      },

      hasTextRight() {
        return !!this.$slots.textRight
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
.container-fluid {
  margin-bottom: 5em;
}

.carousel-wrapper {
  max-height: 1000px;

}

  .carousel-slide {
    background-color: rgba(0, 0, 0, 0.185) !important;
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.829);
    color: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow-wrap: break-word;
    overflow: auto;
    padding: 5px 3px;
    height: 80px;
  }

  .divider {
        background-color: rgba(255, 204, 0, 0.24) !important;
    }

  .image-carousel {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 250px;
    margin: 0 auto;
    border: .06em solid rgba(255, 204, 0, 0.24);
  }

</style>