<template>
    <div class="scrapbook-navigation-container">
        <b-nav tabs justified fill>
            <!-- Home -->
            <b-nav-item-dropdown split-to="/" class="ml-0 mr-1" text="About" split left :lazy="true"
            :toggle-class="[currentPage.includes('tab-about') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item class="about" to="/tab-about">About</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1854 - 1870 -->
            <b-nav-item-dropdown split-to="/tab-1854/intro" class="mr-1" id="my-nav-dropdown" text="1854 - 1870" split left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1854') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1854/intro">Introduction</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item to="/tab-1854/amelia-bloomer">Amelia Bloomer</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item to="/tab-1854/social-movements">Social Movements</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1870 - 1890 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-1" text="1870 - 1890" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1870') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1870/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/legislative-battle">Legislative Battle</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/scandal-and-controversy">Scandal &amp; Controversy</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/temperance">Temperance</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1890 - 1915 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-1" text="1890 - 1915" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1890') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1890/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/goal-unrealized">Goal Unrealized</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1890/organizing-for-the-vote">Organizing for the Vote</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/boone-parade">Boone Parade</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1916 - 1920 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-1" text="1916 - 1920" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1916') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1916/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/referendum">Referendum</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1916/war-work">War Work</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/the-winning-plan">The Winning Plan</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1920 & beyond -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-0" text="1920 &amp; Beyond" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1920') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1920/intro">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/league-of-women-voters">League of Women Voters</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1920/suffrage-memorial">Suffrage Memorial</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/women-in-politics-today">Women in Politics Today</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>

<script>
    import BaseTab1854 from '../1854/BaseTab1854'
    export default {
        components: {
            BaseTab1854,
        },

        data() {
            return {
                activeClass: 'active',
            }
        },

        computed: {
            currentPage() {
                return this.$route.path;
            }
        }
    }
</script>

<style scoped>
    .scrapbook-navigation-container {
        font-family: 'Beth Ellen', cursive;
        font-size: .9em;
    }

    /* .nav-item {
        background-color: black;
    } */

    .nav-item:hover {
         background-color: #FFCD00;
    }

    .dropdown-menu {
        background-color: #FFCD00 !important;
    }

    
    
</style>