<template>
    <div class="women-in-politics-today-page-container page-container">
        <h4 class="page-header text-center">Women in Politics Today</h4>
        <div class="scrapbook-content-container text-left">
            <div>In 1926, legal provisions barring Iowa women from holding political office were lifted,
                and the Professional Women’s League of Des Moines (PWL) staged a burlesque of what
                they thought the Iowa state senate would look like in 1935.</div>
            <div>These women were optimistic that their newfound voting power would lead to a
                proliferation of high-powered women professionals and politicians.</div>
            <div>The records of the burlesque include mock telegrams from women too busy with business
                ventures to attend the Senate; mock Senate files - proposed, modified and vetoed by women;
                and a mock roll call of prominent suffragists turned politicians.</div>
            <div>These active women of the 1920s would be disappointed that, in 2011, only 22.6 percent
                of elected officials in Iowa were women even though women made up 53 percent of Iowa’s population.</div>
            <hr>
        </div>
        <image-carousel :images="images">
            <template v-slot:textLeft>
                <div class="scrapbook-content-container text-left">

                    <div><h5>A Note on Sources</h5></div>
                    <div>In addition to the primary sources selected for the <a
                            href="https://digital.lib.uiowa.edu/suffrage" target="_blank" class="text-anchor">
                            Women's Suffrage in
                            Iowa Digital Collection
                        </a>, Christine Mastalio and Kayla Pollock consulted many
                        secondary sources to create the text for this exhibit. Some of the most
                        helpful were Louise Noun's Strong-Minded Women and Sara Egge's dissertation
                        (for Iowa information) and books by Sara Evans and Eleanor Flexner (for national context).</div>
                    <hr>
                    <div>
                        <router-link to="/image-index" class="text-anchor"><b>Exhibit Image Index</b></router-link>
                    </div>
                    <div>The Image Index includes a citation for each image included in the exhibit.
                        Each citation links directly to its corresponding digital object.</div>
                    <hr>
                    <div>
                        <router-link to="/resources" class="text-anchor"><b>Further Resources on Suffrage in Iowa</b>
                        </router-link>
                    </div>
                    <div>The resources page provides a bibliography of dozens of primary and secondary sources
                        relating to women’s suffrage in Iowa including archival collections, books,
                        journal articles, and websites.</div>
                    <hr>
                    <div>
                        <router-link to="/archival-collections-guide" class="text-anchor"><b>
                            Guide to the Physical
                                Collections
                        </b></router-link>
                    </div>
                    <div>Items selected for the <a href="https://digital.lib.uiowa.edu/suffrage" class="text-anchor"
                            target="_blank">Women’s Suffrage in Iowa Digital
                            Collection</a> often were a
                        small portion of much larger collections. This guide provides the larger context
                        for the digital objects by describing the physical collections from which they were selected.
                    </div>
                    <hr>
                    <div class="text-center quote"><b><i>"One Century is Long Enough to Wait for Equity"</i></b></div>
                    <hr>
                    <div>One organization continuing the fight for political equality in the twenty-first century is <a
                            href="https://www.maggietinsman.com/5050-in-2020/" target="_blank" class="text-anchor">
                            50/50 in 2020.
                        </a></div>
                    <div>Founded by former Iowa senators Jean Lloyd Jones (D- Iowa City) and Maggie Tinsman
                        (R-Davenport),
                        “The mission of 50-50 in 2020 is to achieve political equity for Iowa women by recruiting,
                        training, and mentoring women in sufficient numbers that by the 100th anniversary of
                        Woman Suffrage (the year 2020) Iowans will have elected females to fill 50% of the Iowa
                        Legislature, the Iowa delegation of the U.S. Congress, and the office of the Governor.”</div>
                    <div><a href="http://www.women.iowa.gov/index.html" class="text-anchor" target="_blank">The Iowa
                            Commission on the Status of Women</a> and the
                        <a href="http://las.iastate.edu/CattCenter/" class="text-anchor" target="_blank">
                            Carrie Chapman Catt Center for Women
                            in Politics
                        </a> also provide current resources on women in politics.</div>
                </div>
            </template>
        </image-carousel>
    </div>
</template>

<script>
    import ImageCarousel from '../../../helpers/ImageCarousel'
    import SaffordImage from '../../../../assets/book-content/safford_large.png'
    import TelegramImage from '../../../../assets/book-content/telegram_large.png'
    import BurlesqueImage from '../../../../assets/book-content/burlesque_large.png'
    import FiftyFiftyImage from '../../../../assets/book-content/5050_large.png'

    export default {
        components: {
            ImageCarousel,
        },

        data() {
            return {
                images: [{
                        url: SaffordImage,
                        caption: "IWA. Professional Women's League Records.",
                        text: 'Rev. Mary Safford and Marie H. Jenney, undated photograph from the Professional Women’s League of Des Moines.'
                    },
                    {
                        url: TelegramImage,
                        caption: "IWA. Professional Women's League Records.",
                        text: 'This mock telegram was written by Rev. Mary Safford and Dr. Adele Fuchs, who were active in the Professional Women’s League of Des Moines and were two early examples of Iowa women with successful careers outside the home.'
                    },
                    {
                        url: BurlesqueImage,
                        caption: "IWA. Professional Women's League Records.",
                        text: 'Clipping from the Des Moines Register showing the costumes from the PWL burlesque in 1926.'
                    },
                    {
                        url: FiftyFiftyImage,
                        caption: '50/50 in 2020 Organization',
                        text: ''
                    }
                ]
            }
        }
    }
</script>

<style scoped>

.quote {
    color: rgb(41, 41, 41);
}

</style>