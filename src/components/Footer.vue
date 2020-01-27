<template>
    <footer class="footer-container">
        <b-container fluid>
            <b-row class="text-center external-resources">
                <b-col cols="12" sm="12" md="4" class="image-index link">
                    <router-link class="footer-link" to="/image-index">Image Index</router-link>
                </b-col>
                <b-col cols="12" sm="12" md="4" class="resources link">
                    <router-link class="footer-link" to="/resources">Resources</router-link>
                </b-col>
                <b-col cols="12" sm="12" md="4" class="archival-collections-guide link">
                    <router-link class="footer-link" to="/archival-collections-guide">Archival Collections Guide</router-link>
                </b-col>
            </b-row>
            <b-row class="text-center image-wrapper mt-5" align-v="center" align-h="center">
                <b-col>
                    <img src='../assets/scrapbook-extras/wordmark-black-background.jpg' width="350px"/>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
    export default {
        mounted() {
            // this.$store.commit('setFooterLoaded')
        }
    }
</script>

<style scoped>
    .container-fluid {
        width: 100%;
        background-color: black;
        padding: 2.5em 1rem;
    }

    .external-resources {
        height: 50%;
        font-weight: bold;
        font-size: 1.5em;
    }

    .image-wrapper {
        height: 50%;
        color: white;
    }

    .row {
        padding: 5px 0;
    }

    .link {
        padding: 5px 0;
    }

    .footer-link {
        color: white !important;
    }
    .footer-link:hover {
        color: #FFCD00 !important;
        text-decoration: none;
    }
</style>