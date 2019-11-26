<template>
    <div class="page-container">
    test about
    <div class="image-carousel"><ImageCarousel :images="images"/></div>
    <!-- <expandable-image :src="require('../../assets/book-content/recitation_large.png')"/> -->
    </div>
</template>

<script>
import ImageCarousel from '../helpers/ImageCarousel'
import ExpandableImage from '../helpers/ExpandableImage'
import ReasonsImage from '../../assets/book-content/marchingtune.png'
import RecitationLarge from '../../assets/book-content/recitation_large.png'
export default {
    components: {
        ImageCarousel,
        ExpandableImage
    },

    data() {
        return {
            images: [
                { id: 1, url: ReasonsImage, caption: 'Cao', text: 'Text'},
                { id: 2, url: RecitationLarge, caption: 'dsdfssdfsdfsdfdffg', text: ''},
                { id: 3, url: ReasonsImage, caption: 'dafd', text: ''},
                { id: 4, url: ReasonsImage, caption: 'sdfsdf', text: ''},
            ]
        }
    }
}
</script>

<style scoped>
.image-carousel {
    width: 200px;
}
</style>