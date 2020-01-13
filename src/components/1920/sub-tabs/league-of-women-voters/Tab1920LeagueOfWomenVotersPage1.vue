<template>
    <div class="league-of-women-voters-page-container">
        <h4 class="page-header text-center">League of Women Voters</h4>
        <div class="text-left scrapbook-content-container">
            <div>Even as they celebrated, the members of the Iowa Equal Suffrage Association (IESA) 
                began planning for a new nonpartisan organization dedicated to political and 
                civic education: the League of Women Voters of Iowa (LWV).</div>
            <div>At the final convention of the IESA in <b>1919</b> President Pauline Devitt spoke of 
                the new role they would play, educating women voters and encouraging them to 
                exercise their newly-won right: “We are here, women of this convention, 
                to cast off the grave clothes and try our unaccustomed wings over new fields of action.”</div>
            <div>In the <b>1920s</b>, the Iowa LWV sent state organizers to various communities 
                to educate women about the political process and current issues.</div> 
            <div>Local LWV organizations began to spring up across the state; more than 
                100 women attended an organizing meeting in Osage, Iowa in <b>1924</b>.</div>
            <div>Iowa women continued to be active on the national stage and to 
                have close ties with women’s organizations elsewhere.</div>
            <div>In <b>1923</b>, the National League of Women Voters held its convention in
                 Des Moines, bringing national attention and business to the area.</div>
        </div>
        <div><image-carousel :images="images" /></div>
    
    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import AnthonyMemorialImage from '../../../../assets/book-content/anthonymemorial_large.png'
import CoggeshallImage from '../../../../assets/book-content/coggeshall_large.png'
import ProgramImage from '../../../../assets/book-content/program_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: AnthonyMemorialImage,
                        caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                        text: ''
                    },
                    {
                        url: CoggeshallImage,
                        caption: 'IWA. Margaret Atherton Bonney Papers.',
                        text: ''
                    },
                    {
                        url: ProgramImage,
                        caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>