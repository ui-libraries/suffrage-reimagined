<template>
    <div class="page-container">
        <h4 class="text-center">
            African American Women
        </h4>
        Beginning in the early <b>1900s</b>, African American Iowans worked for suffrage mainly through women’s clubs. Founded
        in <b>1902</b>, the Iowa Association of Colored Women’s Clubs (IACWC - later known as the Iowa Federation of Colored
        Women’s Clubs) provided an umbrella organization for the activism of clubwomen.

        <div class="text-left scrapbook-content-container">
            <div>
                By the <b>1910s</b>, suffrage clubs in IACWC included the Suffragette Club of Des Moines and various Mary
                Church Terrell clubs. The IACWC established a standing suffrage committee in <b>1914</b> headed by Teresa Adams
                of Davenport.
            </div>

            <div>
                In <b>1916</b>, African American women in Buxton, Iowa marched for suffrage in a family parade.
            </div>

            <div>
                Organizations such as IACWC focused on many inequalities facing African American women in areas such as
                education, working wages and property rights.
            </div>

            <div>
                Officers of the Des Moines Suffrage Club, an African American women’s club, wrote this sympathy note
                (above) to Fannie Wilson on the death of her husband.
            </div>

            <div>
                African American obituaries saved by Wilson's daughter, Gwendolyn Wilson Fowler, show that African
                American women in the <b>1900s</b> were involved in suffrage clubs and, later, the League of Women Voters.
            </div>
        </div>
        <div><image-carousel :images="images" /></div>

    </div>
</template>

<script>
    import ImageCarousel from '../../../helpers/ImageCarousel'
import iacwcImage from '../../../../assets/book-content/iacwc_large.png'
import WilsonImage from '../../../../assets/book-content/wilson_large.png'
import WilsonobitImage from '../../../../assets/book-content/wilsonobit_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: iacwcImage,
                        caption: "SHSI Des Moines. Iowa Association of Colored Women's Clubs Records",
                        text: ''
                    },
                    {
                        url: WilsonImage,
                        caption: 'IWA. Gwendolyn Wilson Fowler Papers.',
                        text: ''
                    },
                    {
                        url: WilsonobitImage,
                        caption: 'IWA. Gwendolyn Wilson Fowler Papers.',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>