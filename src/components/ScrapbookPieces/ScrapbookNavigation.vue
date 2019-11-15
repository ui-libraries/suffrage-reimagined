<template>
    <div class="scrapbook-navigation-container">
        <b-nav tabs justified fill>
            <b-nav-item-dropdown id="my-nav-dropdown" text="Home" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown id="my-nav-dropdown" text="1854 - 1870" toggle-class="nav-link-custom" right :lazy="true">
                <b-dropdown-item to="/tab-1854/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1854/amelia-bloomer">Amelia Bloomer</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1854/social-movements">Social Movements</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>
                test 3
            </b-nav-item>
            <b-nav-item>
                Test 4
            </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
    import BaseTab1854 from '../1854/BaseTab1854'
    export default {
        components: {
            BaseTab1854,
        }
    }
</script>

<style scoped>
    .scrapbook-navigation-container {}

    .tab-pane {
        /* padding: 20px 20px; */
        padding: 20px 0;
        height: 300px !important;
        background-color: ghostwhite;
    }

    .col-auto {
        background-color: black !important;
    }
</style>