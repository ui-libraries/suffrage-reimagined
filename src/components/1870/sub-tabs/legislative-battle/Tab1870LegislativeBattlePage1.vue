<template>
    <div class="page-container">
        <h4 class="text-center">Legislative Battle</h4>

        <image-carousel :images="images">
            <template v-slot:textLeft>
                <div class="scrapbook-content-container text-left">
                    <div>Trying to gain political power from outside the political arena can be a difficult process - as
                        the
                        Iowa suffragists found out.</div>



                    <div>The women had to rely on male lawmakers and male voters to enact legislative change. In
                        <b>1897</b>, Susan B.
                        Anthony said the Iowa General Assembly was playing a “cat and mouse” game with suffragists. The
                        cat and
                        mouse game that began in the late 1860s would continue for several decades: a women’s suffrage
                        amendment
                        was considered in almost every session from <b>1870 to 1916</b>, but did not pass two
                        consecutive sessions
                        until <b>1916</b></div>
                </div>
            </template>
        </image-carousel>
    </div>
</template>

<script>
    import ImageCarousel from '../../../helpers/ImageCarousel'
    import ProcessImage from '../../../../assets/book-content/process_large.png'
    import ConventionImage from '../../../../assets/book-content/convention_large.png'

    export default {
        components: {
            ImageCarousel,
        },

        data() {
            return {
                images: [{
                        url: ProcessImage,
                        caption: 'Graphics Created by Christine Mastalio',
                        text: ''
                    },
                    {
                        url: ConventionImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: ''
                    },
                ]
            }
        }

    }
</script>

<style scoped>

</style>