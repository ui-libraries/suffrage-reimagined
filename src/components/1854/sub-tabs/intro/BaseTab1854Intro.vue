<template>
    <div class="base-intro-container">
        <router-view />
        <image-carousel :images="images"/>
    </div>
</template>

<script>
import PaginationNavigation from '../../../helpers/PaginationNavigation'
import ImageCarousel from '../../../helpers/ImageCarousel'
export default {
    
    components: {
        PaginationNavigation,
        ImageCarousel
    },

    data() {
        return {
            images: [
                {
                    id: 1,
                    url: '',
                }
            ]
        }
    }
}
</script>

<style scoped>
.base-intro-container {
    height: 100%;
    width: 100%;
}

</style>