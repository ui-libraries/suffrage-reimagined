<template>
    <div class="intro-page-container">
        <h4 class="page-header text-center">1916-1919</h4>

            <image-carousel :images="images">
                <template v-slot:textLeft>
                    <div class="scrapbook-content-container text-left">
                        <div>From <b>1916 to 1919</b>, Iowa was a suffrage battleground. On <b>June 5, 1916</b>, Iowa’s men voted on a 
                            referendum to amend the constitution and grant women the ballot. Although the referendum failed 
                            in a corrupt election, the camapign piqued national interest. With the U.S.’s entry into World War I, 
                            Iowa women were sometimes torn between suffrage and war work, and suffrage campaigns 
                            faded a bit from the public eye.</div>
                        <div>Just two years later, Congress passed the 19th Amendment, and the women of the Hawkeye state launched 
                            a ratification campaign. In a special session of the General Assembly held on <b>July 2, 1919</b>, Iowa became 
                            the tenth state to ratify. On <b>August 26, 1920</b>, Tennessee became the last state to ratify, finally ending 
                            the work Iowa women had been involved with for seven decades.</div>
                        <div>In the year leading up to the <b>1916</b> referendum, women created suffrage stamps and wrote suffrage songs, 
                            doing everything they could think of to win the vote. National leader Carrie Chapman Catt returned to 
                            Iowa to campaign. Pauline Devitt’s husband James even hired a nurse for this three-year time period so 
                            his wife could focus on the cause. Pauline Devitt became president of the 
                            Iowa Equal Suffrage Association (IESA) in <b>1919</b>.</div>
                        <div>Across the country, the tide was turning in favor of suffrage. In <b>1916</b>, Alice Paul founded the militant 
                            National Woman’s Party, and Jeanette Rankin of Montana was the first woman elected to the U.S. House. 
                            In April <b>1919</b>, just four months before the state ratified the 19th Amendment, the Iowa General Assembly 
                            passed a bill granting women the right to vote in presidential elections.</div>
                    </div>
                </template>
            </image-carousel>

    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import JournalImage from '../../../../assets/book-content/journal_large.png'
import SongBookletImage from '../../../../assets/book-content/songbooklet_large.png'
import PosterImage from '../../../../assets/book-content/poster_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: JournalImage,
                        caption: "SHSI Iowa City. The Woman's Journal",
                        text: 'This national suffrage newspaper seemed sure of a suffrage victory for Iowa women in 1916. To help spread the referendum campaign message, The Woman’s Journal sent two months of free issues to 60 dailies and 850 weeklies across the state of Iowa.'
                    },
                    {
                        url: SongBookletImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: 'Lyrics from stanza 1 (to the tune of When Johnny Comes Marching Home): “When Suffrage takes the Hawkeye State, Hurrah! Hurrah! The world will call us wise and great, Hurrah! Hurrah!” by Helen Cowles LeCron, 1916.'
                    },
                    {
                        url: PosterImage,
                        caption: 'SHSI Iowa City.',
                        text: 'The imagery of classical Greece was used to communicate the idea of progress as seen in this suffrage poster entitled “Let Her Have the Fruit of Her Hands” by Evelyn Ramsay Cary, 1917'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>