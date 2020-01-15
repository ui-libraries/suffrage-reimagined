<template>
<div class="scrapbook-body-container" role="main">
    <router-view />
</div>
</template>

<script>
export default { 
    data () {
        return {
        }
    },

    methods: {
    }
}
</script>

<style scoped>
.scrapbook-body-container {
    /* min-height: 48rem; */
    min-height: 75vh;
    background-color: ghostwhite;
    position: relative;
    /* background-image: url('https://i.imgur.com/mNBhyUX.jpg'); */
    background-image: url("../../assets/scrapbook-extras/temp-book-paper.jpg");
    background-size: cover;
    padding: 2em 4em;
}

@media only screen and (max-width: 450px) {
    .scrapbook-body-container {
        padding: 2em 2em;
    }
  }

  .nav-arrows {
      display: block;
      width: 100%;
      height: 100px;
  }

  .go-back-arrow {
    position: absolute;
    left: 35px;
  }
  .go-forward-arrow {
    position: absolute;
    left: 94%;
  }
  .go-back-arrow, .go-forward-arrow {
    height: 6vh;
    top: 92%;
    border-radius: 100%;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
  }

  .go-back-arrow:hover, .go-forward-arrow:hover {
    background-color: rgba(0, 0, 0, 0.164);
  }
</style>