<template>
    <nav v-if="!isMobile()" class="scrapbook-navigation-container" role="navigation">
        <b-nav tabs justified fill>
            <!-- Home/About -->
            <!-- <b-nav-item to="/" exact class="ml-lg-0 mr-lg-1" text="About" title="About"
                :toggle-class="[currentPage == '/' ? activeClass : 'nav-item-custom']">
                About
            </b-nav-item> -->
            <!-- 1854 - 1870 -->
            <b-nav-item-dropdown class="mr-lg-1" id="my-nav-dropdown" text="1854 - 1870" title="1854 to 1870" left
                :lazy="true" :toggle-class="[currentPage.includes('1854') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/1854/intro/" title="Introduction"><span class="active-icon"></span>Introduction</b-dropdown-item>
                <b-dropdown-item to="/1854/amelia-bloomer/" title="Amelia Bloomer"><span class="active-icon"></span>Amelia Bloomer</b-dropdown-item>
                <b-dropdown-item to="/1854/social-movements/" title="Social Movements"><span class="active-icon"></span>Social Movements</b-dropdown-item>
                
            </b-nav-item-dropdown>
            <!-- 1870 - 1890 -->
            <b-nav-item-dropdown class="mr-lg-1" id="my-nav-dropdown" text="1870 - 1890" title="1870 to 1890" left
                :lazy="true" :toggle-class="[currentPage.includes('1870') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/1870/intro/" title="Introduction"><span class="active-icon"></span>Introduction</b-dropdown-item>
                <b-dropdown-item to="/1870/legislative-battle/" title="Legislative Battle"><span class="active-icon"></span>Legislative Battle
                </b-dropdown-item>
                <b-dropdown-item to="/1870/scandal-and-controversy/" title="Scandal &amp; Controversy"><span class="active-icon"></span>Scandal &amp;
                    Controversy</b-dropdown-item>
                <b-dropdown-item to="/1870/temperance/" title="Temperance"><span class="active-icon"></span>Temperance</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1890 - 1915 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-1" text="1890 - 1915" title="1890 to 1915" left
                :lazy="true" :toggle-class="[currentPage.includes('1890') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/1890/intro/" title="Introduction"><span class="active-icon"></span>Introduction</b-dropdown-item>
                <b-dropdown-item to="/1890/goal-unrealized/" title="Goal Unrealized"><span class="active-icon"></span>Goal Unrealized
                </b-dropdown-item>
                <b-dropdown-item to="/1890/organizing-for-the-vote/" title="Organizing for the Vote"><span class="active-icon"></span>Organizing for
                    the Vote</b-dropdown-item>
                <b-dropdown-item to="/1890/african-american-women/" title="African American Women"><span class="active-icon"></span>African American
                    Women</b-dropdown-item>
                <b-dropdown-item to="/1890/boone-parade/" title="Boone Parade"><span class="active-icon"></span>Boone Parade</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1916 - 1920 -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-1" text="1916 - 1920" title="1916 to 1920" left
                :lazy="true" :toggle-class="[currentPage.includes('1916') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/1916/intro/" title="Introduction"><span class="active-icon"></span>Introduction</b-dropdown-item>
                <b-dropdown-item to="/1916/referendum/" title="Referendum"><span class="active-icon"></span>Referendum</b-dropdown-item>
                <b-dropdown-item to="/1916/war-work/" title="War Work"><span class="active-icon"></span>War Work</b-dropdown-item>
                <b-dropdown-item to="/1916/the-winning-plan/" title="The Winning Plan"><span class="active-icon"></span>The Winning Plan
                </b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- 1920 & beyond -->
            <b-nav-item-dropdown id="my-nav-dropdown" class="mr-lg-0" text="1920 &amp; Beyond" title="1920 &amp; Beyond" right
             :lazy="true" :toggle-class="[currentPage.includes('1920') ? activeClass : 'nav-link-custom']">
                <b-dropdown-item to="/1920/intro/" title="Introduction"><span class="active-icon"></span>Introduction</b-dropdown-item>
                <b-dropdown-item to="/1920/league-of-women-voters/" title="League of Women Voters"><span class="active-icon"></span>League of Women
                    Voters</b-dropdown-item>
                <b-dropdown-item to="/1920/suffrage-memorial/" title="Suffrage Memorial"><span class="active-icon"></span>Suffrage Memorial
                </b-dropdown-item>
                <b-dropdown-item to="/1920/women-in-politics-today/" title="Women in Politics Today"><span class="active-icon"></span>Women in
                    Politics Today</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </nav>
</template>

<script>
import icon from '../../assets/scrapbook-extras/bookmark-icon.png'
    export default {
        data() {
            return {
                icon: icon,
                activeClass: 'active',
                window: {
                    width: 0,
                    height: 0,
                }
            }
        },

        computed: {
            currentPage() {
                return this.$route.path;
            },
        },

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            },

            isMobile() {
                return this.window.width <= 1200 ? true : false
            },

            isAboutActive() {
                return this.currentPage.includes('about') ? activeClass : 'nav-link-custom'
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
        background-color: var(--primary-color) !important;
    }


    .nav-item-custom:hover a {
        color: var(--secondary-color) !important;
    }

    .nav-item-custom a {

    }

    #my-nav-dropdown {
        -webkit-box-shadow: 0px -4px 25px -3px rgba(54, 54, 54, 0.48);
-moz-box-shadow: 0px -4px 25px -3px rgba(54, 54, 54, 0.48);
box-shadow: 0px -4px 25px -3px rgba(54, 54, 54, 0.48);
    }



    .active-icon {
        position: absolute;
        top: 6px;
        left: 4px;

        width: 16px;
        height: 16px;
        opacity: 0.7;
    }
    

    
</style>