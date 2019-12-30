<template>
    <div class="page-container">
        <h4 class="text-center">Goal Unrealized</h4>
        <div class="text-left scrapbook-content-container">
            <div>Known as “The Mother of Woman Suffrage in Iowa,” Mary Jane Whitely Coggeshall paid tribute to the
                sacrifices of Susan B. Anthony in a <b>1906</b> Des Moines Political Equality Club memorial. Five years later,
                Coggeshall died without realizing her goal of equal suffrage.</div>
            <div>

                <br />

                <h6 class="text-center">Mary Jane Whitely Coggeshall (1836 - 1911)</h6>
                <ul>
                    <li><b>1836: </b>Born in Indiana</li>
                    <li><b>1886: </b>Appointed first editor of Iowa's suffrage newspaper, <i>The Woman's Standard</i>
                    </li>
                    <li><b>1890: </b>Served first term as president of the Iowa Equal Suffrage Association (IESA)</li>
                    <li><b>1903: </b>Served second term as president of IESA</li>
                    <li><b>1908: </b>Filed a successful lawsuit against the City of Des Moines when women were denied
                        the right to vote on a bond issue. The arguments in the case would be used to justify
                        presidential suffrage for Iowa women in <b>1919</b></li>
                    <li><b>1911: </b>Died, leaving $15,000 to suffrage associations</li>
                </ul>
            </div>
            <div>Despite unrealized goals, suffragists seemed to be optimistic that victory was right around the corner.
                In an <b>1898</b> suffrage report for the Iowa Woman’s Christian Temperance Union (WCTU), Martha Callanan
                wrote, “...it would seem as if public sentiment would not much longer tolerate the withholding of this
                justice to one half the people.”</div>
            <div>
                By <b>1915</b>, the Iowa legislature had approved a ballot measure to amend the Iowa constitution and grant
                women full suffrage. In June <b>1916</b> the referendum failed, and IESA women continued to hope for an end to
                the “wait full of woe.”
            </div>
        </div>
        <div><image-carousel :images="images" /></div>
    </div>
</template>

<script>
    import ImageCarousel from '../../../helpers/ImageCarousel'
// import AnthonyMemorialImage from '../../../../assets/book-content/cary_large.png'
// import CoggeshallImage from '../../../../assets/book-content/haugen_large.png'
// import ProgramImage from '../../../../assets/book-content/cosson_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    // {
                    //     url: AnthonyMemorialImage,
                    //     caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                    //     text: ''
                    // },
                    // {
                    //     url: CoggeshallImage,
                    //     caption: 'IWA. Margaret Atherton Bonney Papers.',
                    //     text: ''
                    // },
                    // {
                    //     url: ProgramImage,
                    //     caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                    //     text: ''
                    // },
                ]
            }
        }
    }
</script>

<style scoped>

</style>