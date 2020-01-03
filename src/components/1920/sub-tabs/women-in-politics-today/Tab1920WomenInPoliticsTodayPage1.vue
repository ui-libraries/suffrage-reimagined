<template>
    <div class="women-in-politics-today-page-container">
        <h4 class="page-header text-center">Women in Politics Today</h4>
        <div class="text-left">
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
        </div>
    <div><ImageCarousel :images="images"/></div>

    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import AnthonyMemorial from '../../../../assets/book-content/anthonymemorial_large.png'
import FiftyFiftyImage from '../../../../assets/book-content/5050_large.png'

export default {
        components: {
            ImageCarousel,
        },

        data() {
            return {
                images: [
                    // {
                    //     url: RecitationImage,
                    //     caption: 'IWA. Printed Works Collection.',
                    //     text: 'Text'
                    // },
                    // {
                    //     url: MarchingTuneImage,
                    //     caption: 'IWA. Printed Works Collection.',
                    //     text: ''
                    // },
                    {
                        url: AnthonyMemorial,
                        caption: 'test1',
                    },
                    {
                        url: FiftyFiftyImage,
                        caption: 'This journal piece is the anthony memorial work of art, located in Iowa City, Iowa.'
                    }
                //  {
                //         url: DllaImage,
                //         caption: 'ISU. Carrie Chapman Catt Papers',
                //         text: ''
                //     },
                //     {
                //         url: RobinsonImage,
                //         caption: 'ISU. Carrie Chapman Catt Papers',
                //         text: ''
                //     },
                ]
            }
        }
    }
</script>

<style scoped>

</style>