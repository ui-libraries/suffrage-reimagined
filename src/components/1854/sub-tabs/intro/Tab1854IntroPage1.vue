<template>
    <div class="intro-page-container">
        <h4 class="page-header text-center">1854 - 1869</h4>

        <div class="text-left scrapbook-content-container">
            <div>The period from <b>1854</b> to <b>1869</b> marked the beginning of the suffrage movement in Iowa.
                Suffrage activity
                before the Civil War was sporadic. Iowa had gained statehood in <b>1846</b> and was still very much a
                pioneer
                state.</div>

            <div>Many future suffragists settled in Iowa during the <b>1850s</b>. In <b>1854</b>, Frances Dana Gage
                <b>(1808-1884)</b>, a
                women’s rights advocate from Ohio, visited southeastern Iowa to lecture on women’s suffrage.</div>

        </div>
        <image-carousel :images="images">
            <template v-slot:textLeft>
                <div class="scrapbook-content-container text-left">
                    <hr>
                    <div>
                        This book of Readings and Recitations contained a collection of state and national suffrage
                        poems, songs
                        and essays published in <b>1892</b> in Des Moines. Such collections may have been sent out by a
                        national
                        suffrage organization and modified to appeal to audiences in particular states.
                    </div>
                    <div>
                        In an era when women had few leadership or career opportunities outside the home, Iowa’s
                        property and
                        marriage laws were considered more favorable than those of other states. In <b>1868</b>, African
                        Americans won
                        the right to vote in Iowa and early suffragists thought women would be next.
                    </div>

                    <div>
                        In <b>1869</b>, members of a women’s study club in Dubuque attended a suffrage convention in
                        Galena,
                        Illinois.
                        Soon after, they founded the Northern Iowa Woman Suffrage Association, which was the first
                        organization
                        dedicated solely to equal suffrage in the state.
                    </div>

                    <div>
                        In the early <b>1880s</b>, Julia Ward Howe (nationally known social activist and author of the
                        lyrics to
                        The
                        Battle Hymn of the Republic) visited Dubuque and gave a report on a Washington, D.C. suffrage
                        convention
                        to the Dubuque women.
                    </div>
                </div>
            </template>
        </image-carousel>
        <div>
        </div>
    </div>
</template>

<script>
    import ImageCarousel from '../../../helpers/ImageCarousel'
    import RecitationImage from '../../../../assets/book-content/recitation_large.png'
    import MarchingTuneImage from '../../../../assets/book-content/marchingtune_large.png'
    import DllaImage from '../../../../assets/book-content/dlla_large.png'
    import RobinsonImage from '../../../../assets/book-content/robinson_large.png'

    export default {
        components: {
            ImageCarousel,
        },

        data() {
            return {
                images: [{
                        url: RecitationImage,
                        caption: 'IWA. Printed Works Collection.',
                        text: 'Text'
                    },
                    {
                        url: MarchingTuneImage,
                        caption: 'IWA. Printed Works Collection.',
                        text: ''
                    },

                    {
                        url: DllaImage,
                        caption: 'ISU. Carrie Chapman Catt Papers',
                        text: ''
                    },
                    {
                        url: RobinsonImage,
                        caption: 'ISU. Carrie Chapman Catt Papers',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>