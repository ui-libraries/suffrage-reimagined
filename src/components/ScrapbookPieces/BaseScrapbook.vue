<template>
    <div class="base-scrapbook-container">
        <navigation-arrows />
        <div class="testing md-elevation-15">
            <scrapbook-navigation />
            <router-view />
        </div>

    </div>
</template>

<script>
    import NavigationArrows from './NavigationArrows'
    import ScrapbookNavigation from './ScrapbookNavigation'
    import ScrapbookBody from './ScrapbookBody'

    export default {
        components: {
            NavigationArrows,
            ScrapbookNavigation,
            ScrapbookBody
        },

        mounted() {
            // this.$store.commit('setScrapbookLoaded')
        }


    }
</script>

<style scoped>
    .base-scrapbook-container {
    z-index: 0;
        margin: 1rem 0;
        padding: 1rem;
    }



</style>