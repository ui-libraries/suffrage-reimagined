<template>
    <div class="component-container">
        <OpenBook>
            <span slot="first-page">
                <transition name="open-book-transition"><h2>1854 - 1869</h2></transition>
                <div class="content"><p> The period from <strong>1854</strong> to <strong>1869</strong> marked the beginning of the suffrage movement in Iowa. Suffrage activity before the Civil War was sporadic. Iowa had gained statehood in <strong>1846</strong> and was still very much a pioneer state. </p>
                <p>Many future suffragists settled in Iowa during the <strong>1850s</strong>. In <strong>1854</strong>, Frances Dana Gage (1808-1884), a women&#8217;s rights advocate from Ohio, visited southeastern Iowa to lecture on women&#8217;s suffrage. </p></div>
            </span>

            <span slot="second-page">
                <div class="figures">
                        <figure>
                            <img class="reasons-image" src="../.././assets/book-content/recitation_large.png">
                            <figcaption>IWA. Printed Works Collection</figcaption>
                        </figure>
                        <figure>
                            <img class="cattpin-image" src="../.././assets/book-content/marchingtune_large.png">
                            <figcaption>Printed Works Collection</figcaption>
                        </figure>
                    </div>
                <div class="content">
                This book of Readings and Recitations contained a collection of state and national suffrage poems, songs and essays published in 1892 in Des Moines. Such collections may have been sent out by a national suffrage organization and modified to appeal to audiences in particular states.
                </div>
            </span>
        </OpenBook>
    </div>
</template>

<script>
import OpenBook from '../OpenBook'
export default {
    name: 'Tab1854Home',
    
    components: {
        OpenBook,
    }
}
</script>

<style scoped>
.component-container {
    text-align: center;
}

h2 {
        text-align: center;
    }

    .figures {
    float: left;
    text-align: center;
    padding: 0 10px;
    height: 100%;
}

figure {
    display: block;
    height: 50%;
}

figcaption {
    font-size: 10px;
    font-style: italic;
}

.reasons-image {
    width: auto;
    height: 300px;
}

.cattpin-image {
    height: 300px;
}

.content {
    display: table;
    margin: 0 auto;
}

</style>