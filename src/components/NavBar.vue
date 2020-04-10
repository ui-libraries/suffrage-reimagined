<template>
    <div class="nav-container">
        <headroom :class="[isMobile() ? 'headroom-container-mobile' : 'headroom-container']">
        <md-toolbar class="nav-header">
            <md-button v-if="isMobile()" class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <h4 class="md-title nav-title">
                <router-link to="/" class="stretched-link header-anchor">Women's Suffrage in Iowa Scrapbook
                </router-link>
            </h4>
        </md-toolbar>
        </headroom>

        <md-drawer class="entire-drawer" :md-active.sync="showNavigation" md-swipeable>

            <md-toolbar class="drawer-header" md-elevation="1">
                <span flex class="md-title bookmark-title text-center">Table of Contents</span>
            </md-toolbar>

            <md-list class="md-double-line drawer-body">
                <md-subheader class="sub-header">About</md-subheader>
                <md-list-item class="bookmark-list-item" to="/" exact>
                    <div class="md-list-item-text">
                    <span>About the Suffrage</span>
                    </div>
                </md-list-item>

                <!-- 1854 -->
                <md-divider class="divider"></md-divider>
                <md-subheader class="sub-header">1854 to 1870</md-subheader>
                <md-list-item class="bookmark-list-item" to="/1854/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1854/amelia-bloomer">
                    <div class="md-list-item-text"><span>Amelia Bloomer</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1854/social-movements">
                    <div class="md-list-item-text"><span>Social Movements</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>
                
                <!-- 1870 -->
                <md-subheader class="sub-header">1870 to 1890</md-subheader>
                <md-list-item class="bookmark-list-item" to="/1870/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1870/legislative-battle">
                    <div class="md-list-item-text"><span>Legislative Battle</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1870/scandal-and-controversy">
                    <div class="md-list-item-text"><span>Scandal &amp; Controversy</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1870/temperance">
                    <div class="md-list-item-text"><span>Temperance</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <!-- 1890 --> 
                <md-subheader class="sub-header">1890 to 1915</md-subheader>
                <md-list-item class="bookmark-list-item" to="/1890/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1890/goal-unrealized">
                    <div class="md-list-item-text"><span>Goal Unrealized</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1890/organizing-for-the-vote">
                    <div class="md-list-item-text"><span>Organizing for the Vote</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1890/african-american-women">
                    <div class="md-list-item-text"><span>African American Women</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1890/boone-parade">
                    <div class="md-list-item-text"><span>Boone Parade</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <!-- 1916 --> 
                <md-subheader class="sub-header">1916 to 1920</md-subheader>
                <md-list-item class="bookmark-list-item" to="/1916/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1916/referendum">
                    <div class="md-list-item-text"><span>Referendum</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1916/war-work">
                    <div class="md-list-item-text"><span>War Work</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1916/the-winning-plan">
                    <div class="md-list-item-text"><span>The Winning Plan</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <!-- 1920 --> 
                <md-subheader class="sub-header">1920 &amp; Beyond</md-subheader>
                <md-list-item class="bookmark-list-item" to="/1920/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1920/league-of-women-voters">
                    <div class="md-list-item-text"><span>League of Women Voters</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1920/suffrage-memorial">
                    <div class="md-list-item-text"><span>Suffrage Memorial</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/1920/women-in-politics-today">
                    <div class="md-list-item-text"><span>Women in Politics Today</span></div>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    import { headroom } from 'vue-headroom'

    export default {
        name: 'Temporary',
        components: {
            headroom
        },

        data() {
            return {
                showNavigation: false,
                showSidepanel: false,
                window: {
                    width: 0,
                    height: 0,
                }
            }
        },

        mounted() {
            // this.$store.commit('setNavLoaded')
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
            }
        }
    }
</script>

<style scoped>
.headroom, .headroom--top, .headroom--bottom {
    z-index: 0 !important;
}

/* Forces into correct size . . gets rid of unwanted white space below nav */
.headroom-container {
    height: 64px !important;
}

.headroom-container-mobile {
    height: 48px !important;
}

    .nav-header {
        width: 100%;
        font-size: 3rem;
        background-color: var(--primary-color) !important;
        text-align: center;
        font-weight: bolder;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 2em;
    }
    .md-drawer {
        font-family: 'Gotham Book';
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .bookmark-title {
        font-size: 1em;
        letter-spacing: 2px !important;
        font-weight: bold !important;
    }

    .md-list-item-text {
        transition: color .3s ease-in-out;
    }

    .md-list-item-text:hover {
        color: var(--primary-color);
    }

    .sub-header {
        color: grey !important;
    }

    .divider {
        background-color: rgba(187, 187, 187, 0.541) !important;
    }

    .entire-drawer {
        background-color: rgb(0, 0, 0) !important;
        border-right: 1px solid rgba(187, 187, 187, 0.541);
        border-top-right-radius: 15px;
        z-index: 10001;
    }

    .drawer-header {
        background-color: var(--primary-color) !important;
        border-top-right-radius: 15px;
        border: 1px solid rgba(187, 187, 187, 0.541);
    }

    .drawer-body {
        background-color: rgb(0, 0, 0) !important;
    }

    .md-list-item-text {
        color: white;
    }

    .md-list a {
        color: var(--secondary-color) !important;
    }

    .md-content {
        padding: 16px;
    }

     @media only screen and (max-width: 650px) {
        .nav-title {
            font-size: 1rem !important;
        }
    }

    @media only screen and (max-width: 455px) {
        .nav-title {
            font-size: .75rem !important;
        }
    }

    @media only screen and (max-width: 365px) {
        .nav-title {
            font-size: .55rem !important;
        }
    }

      .md-list-item .router-link-active .md-list-item-text{
        color: var(--primary-color);
    }

    
</style>