<template>
    <div>
        <md-toolbar class="nav-header">
            <md-button v-if="isMobile()" class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <h4 class="md-title nav-title">
                <router-link to="/" class="stretched-link header-anchor">Women's Suffrage in Iowa Scrapbook
                </router-link>
            </h4>
        </md-toolbar>

        <md-drawer class="entire-drawer" :md-active.sync="showNavigation" md-swipeable>
        <smooth-scrollbar>

            <md-toolbar class="drawer-header" md-elevation="1">
                <span flex class="md-title bookmark-title text-center">Bookmark</span>
            </md-toolbar>

            <md-list class="md-double-line drawer-body">
                <md-subheader class="sub-header">About</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-about">
                    <div class="md-list-item-text">
                    <span>About the Suffrage</span>
                    </div>
                </md-list-item>

                <md-divider class="divider"></md-divider>
                <md-subheader class="sub-header">1854 to 1870</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-1854/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1854/amelia-bloomer">
                    <div class="md-list-item-text"><span>Amelia Bloomer</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1854/social-movements">
                    <div class="md-list-item-text"><span>Social Movements</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>
                
                <md-subheader class="sub-header">1870 to 1890</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-1870/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1870/legislative-battle">
                    <div class="md-list-item-text"><span>Legislative Battle</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1870/scandal-and-controversy">
                    <div class="md-list-item-text"><span>Scandal &amp; Controversy</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1870/temperance">
                    <div class="md-list-item-text"><span>Temperance</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1890 to 1915</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-1890/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1890/goal-unrealized">
                    <div class="md-list-item-text"><span>Goal Unrealized</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1890/organizing-for-the-vote">
                    <div class="md-list-item-text"><span>Organizing for the Vote</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1890/african-american-women">
                    <div class="md-list-item-text"><span>African American Women</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1890/boone-parade">
                    <div class="md-list-item-text"><span>Boone Parade</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1916 to 1920</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-1916/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1916/referendum">
                    <div class="md-list-item-text"><span>Referendum</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1916/war-work">
                    <div class="md-list-item-text"><span>War Work</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1916/the-winning-plan">
                    <div class="md-list-item-text"><span>The Winning Plan</span></div>
                </md-list-item>
                <md-divider class="divider"></md-divider>

                <md-subheader class="sub-header">1920 &amp; Beyond</md-subheader>
                <md-list-item class="bookmark-list-item" to="/tab-1920/intro">
                    <div class="md-list-item-text"><span>Introduction</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1920/league-of-women-voters">
                    <div class="md-list-item-text"><span>League of Women Voters</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1920/suffrage-memorial">
                    <div class="md-list-item-text"><span>Suffrage Memorial</span></div>
                </md-list-item>
                <md-list-item class="bookmark-list-item" to="/tab-1920/women-in-politics-today">
                    <div class="md-list-item-text"><span>Women in Politics Today</span></div>
                </md-list-item>

            </md-list>
        </smooth-scrollbar>

        </md-drawer>

    </div>
</template>

<script>
    export default {
        name: 'Temporary',
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
                return this.window.width < 1000 ? true : false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-header {
        width: 100%;
        font-size: 3rem;
        background-color: #FFCD00 !important;
        text-align: center;
        font-weight: bolder;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 2em;
    }

    // Demo purposes only
    .md-drawer {
        font-family: 'cursive';
        width: 230px;
        max-width: calc(100vw - 125px);
        // background-image: url('../assets/temp-book-paper.jpg')
    }

    .bookmark-title {
        letter-spacing: 2px !important;
        font-weight: bold !important;
    }

    .md-list-item-text:hover {
        text-shadow:
    -.3px -.3px 0 rgba(255, 204, 0, 0.5),
    .3px -.3px 0 rgba(255, 204, 0, 0.5),
    -.3px .3px 0 rgba(255, 204, 0, 0.5),
    .3px .3px 0 rgba(255, 204, 0, 0.5);
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
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
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    .drawer-header {
        background-color: #FFCD00 !important;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border: 1px solid rgba(187, 187, 187, 0.541);

        // box-shadow: 10px 10px 11px 3px rgb(255, 0, 0) !important;
    }

    .drawer-body {
        background-color: rgb(0, 0, 0) !important;
    }

    .md-list-item-text {
        color: white;
    }

    .md-list a {
        color: black !important;
    }

    .md-content {
        padding: 16px;
    }

    // .nav-title {
    //     font-size: 3vw !important
    // }

     @media only screen and (max-width: 650px) {
        .nav-title {
            font-size: 1rem !important;
        }
    }

    @media only screen and (max-width: 455px) {
        .nav-title {
            font-size: .7rem !important;
        }
    }

    @media only screen and (max-width: 350px) {
        .nav-title {
            font-size: .55rem !important;
        }
    }

    

   
    
</style>