<template>
    <nav class="scrapbook-navigation-container" role="navigation">
        <b-nav tabs justified fill>
            <!-- Home/About -->
            <b-nav-item-dropdown class="ml-lg-0 mr-lg-1" text="About" title="About" split left :lazy="true"
            :toggle-class="[currentPage.includes('tab-about') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item class="about" to="/tab-about" title="About">About</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1854 - 1870 -->
            <b-nav-item-dropdown class="mr-lg-1" id="my-nav-dropdown" text="1854 - 1870" title="1854 to 1870" split left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1854') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1854/intro/" title="Introduction">Introduction</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item to="/tab-1854/amelia-bloomer/" title="Amelia Bloomer">Amelia Bloomer</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item to="/tab-1854/social-movements/" title="Social Movements">Social Movements</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1870 - 1890 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-1" text="1870 - 1890" title="1870 to 1890" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1870') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1870/intro/" title="Introduction">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/legislative-battle/" title="Legislative Battle">Legislative Battle</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/scandal-and-controversy/" title="Scandal &amp; Controversy">Scandal &amp; Controversy</b-dropdown-item>
                <b-dropdown-item to="/tab-1870/temperance/" title="Temperance">Temperance</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1890 - 1915 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-1" text="1890 - 1915" title="1890 to 1915" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1890') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1890/intro/" title="Introduction">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/goal-unrealized/" title="Goal Unrealized">Goal Unrealized</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1890/organizing-for-the-vote/" title="Organizing for the Vote">Organizing for the Vote</b-dropdown-item>
                <b-dropdown-item to="/tab-1890/boone-parade/" title="Boone Parade">Boone Parade</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1916 - 1920 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-1" text="1916 - 1920" title="1916 to 1920" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1916') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1916/intro/" title="Introduction">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/referendum/" title="Referendum">Referendum</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1916/war-work/" title="War Work">War Work</b-dropdown-item>
                <b-dropdown-item to="/tab-1916/the-winning-plan/" title="The Winning Plan">The Winning Plan</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1920 & beyond -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-0" text="1920 &amp; Beyond" title="1920 &amp; Beyond" left :lazy="true"
            :toggle-class="[currentPage.includes('tab-1920') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/tab-1920/intro/" title="Introduction">Introduction</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/league-of-women-voters/" title="League of Women Voters">League of Women Voters</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item to="/tab-1920/suffrage-memorial/" title="Suffrage Memorial">Suffrage Memorial</b-dropdown-item>
                <b-dropdown-item to="/tab-1920/women-in-politics-today/" title="Women in Politics Today">Women in Politics Today</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </nav>
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

    .dropdown-menu {
        background-color: #FFCD00 !important;
    }
</style>