<template>
    <footer class="footer-container">
        <b-row class="text-center external-resources m-3" align-v="center" align-h="center">
            <b-col class="image-index">
                <router-link class="footer-link" to="/image-index">Image Index</router-link>
            </b-col>
            <b-col class="resources">
                <router-link class="footer-link" to="/resources">Resources</router-link>
            </b-col>
            <b-col class="archival-collections-guide">
                <router-link class="footer-link" to="/archival-collections-guide">Archival Collections Guide</router-link>
            </b-col>
        </b-row>
        <b-row class="text-center image-wrapper mt-3" align-v="center" align-h="center">
            <b-col>
                Image
            </b-col>
        </b-row>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer-container {
        width: 100%;
        min-height: 2em;
        background-color: black;
        padding: 2.5em 0;
    }

    .footer-container {
        width: 100%;
    }

    .external-resources {
        height: 50%;
        font-weight: bold;
        font-size: 1.5em;
    }

    .image-wrapper {
        height: 50%;
    }

    .footer-link {
        color: white;
    }
    .footer-link:hover {
        color: #FFCD00;
        text-decoration: none;
    }
</style>