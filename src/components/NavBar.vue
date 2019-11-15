<template>
         <div class="header">
        <b-navbar class="navbar-styling" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">
                <img src="" class="d-inline-block align-top" alt="">
                Women's Suffrage in Iowa: an online exhibit<br />Iowa's Suffrage Scrapbook, 1854-1920
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse is-nav id="nav-collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <b-button to='/image-index' size="sm" variant='outline-light'>
                            Images Index
                        </b-button>
                    </b-nav-item>
                    <b-nav-item>
                        <b-button to='/resources' size="sm" variant='outline-light'>
                            Resources
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
.header {
    width: 100%;
    text-align: center;
}

.navbar-styling {
        border-bottom: 2px solid black;
        box-shadow: 0 10px 6px 0 rgba(0, 0, 0, .16);
    }
    .navbar-brand {
        letter-spacing: 5px;
        font-size: 25px;
        font-family: 'Lobster'
    }
    em {
        font-size: 20px;
    }
</style>