<template>
    <div class="suffrage-memorial-page-container">
        <h4 class="page-header text-center">Iowa's Suffrage Memorial</h4>
        <div class="text-left scrapbook-content-container">
            <div>The Iowa Suffrage Memorial Commission began its work in <b>1922</b>, but the actual memorial at the 
                Iowa State Capitol was not dedicated until <b>1936</b> because of conflicting visions and fundraising difficulties.</div>
            <div>Nellie Verne Walker, a nationally renowned artist from Iowa, designed the bas-relief in bronze. 
                It depicts a procession of women dressed in Greek-style costume and bearing symbols of progress. 
                The original proposal was to honor fifty Iowa suffragists by name, but the final product symbolized 
                both the progression of the movement and the long chain of unrecognized suffragists.</div>
            <div>Mary Ankeny Hunter led the campaign for a suffrage memorial. She married into a pioneer 
                suffrage family in <b>1892</b> and joined many women’s clubs, including the Unity Circle of the First Unitarian Church 
                of Des Moines. The club and the church were both active in the <b>1908</b> Boone suffrage parade.</div>
            <div>Fellow Des Moines Universalist Rev. Mary Safford was nationally known in Unitarian circles and 
                played a pivotal part in the spread of the denomination and the spread of suffrage work in Iowa. 
                When Safford died in <b>1927</b>, she donated $5,000 for the creation of an Iowa suffrage memorial.</div>
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