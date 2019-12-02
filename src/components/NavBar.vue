<template>
         <div class="nav-header position-relative">
        <router-link to="/" class="router-link stretched-link">
            Women's Suffrage in Iowa Scrapbook
        </router-link>
    </div>
</template>

<style scoped>
    .nav-header{
        width: 100%;
        font-size: 3rem;
        background-color: #FFCD00;
    text-align:center;
    font-weight: bolder;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 2em;
}

a {
    text-decoration: none !important;
    color: black;
}

a:hover {
    color: black;
}

@media only screen and (max-width: 450px) {
    .nav-header {
        font-size: 1.5rem;
    }
}

@media only screen and (max-width: 350px) {
    .nav-header {
        font-size: 1.3rem;
    }
}
</style>