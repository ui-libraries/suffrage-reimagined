<template>
    <div class="social-movements-page-container">
        <h4 class="text-center">Social Movements</h4>
        <div class="text-left scrapbook-content-container">
            <div>Women’s involvement in mid-nineteenth century social movements including abolition, black suffrage,
                child welfare, prison reform and care of Civil War soldiers paved the way for later suffrage work.
                Correspondence from the <b>1860s</b> reveals that Iowa women (and men) were discussing major issues of social
                change.</div>
            <div>Although she was not an active suffragist, Boone County resident Ellen Mowrer <b>(1848-1922)</b> described an
                encounter with a male acquaintance in an <b>1869</b> diary entry...</div>
            <div>“He is very hard against woman voting. Because, because was the only argument he could put forth. was a
                little tickled at him in the evening, when it was raining he said, Well Miss Mowrer..now how would you
                like to be out in the rain at a woman’s rights convention. &amp; I said the rain is pure. it comes down
                from
                heaven you know refreshes &amp; revives all things.”</div>
            <div>
                

                <b-container>
                    <b-row align-h="center">
                        <h5 class="text-uppercase">Two Divergent Paths</h5>
                    </b-row>
                    <b-row align-h="center" class="text-left">

                        <b-col>
                            <h6 class="text-center">Annie Wittenmyer (1827 - 1900)</h6>
                            <ul>
                                <li><b>1827: </b>Born in Ohio</li>
                                <li><b>1850: </b>Family moved to Keokuk, Iowa</li>
                                <li><b>1861: </b>Organized ladies' aid societies for Iowa soldiers</li>
                                <li><b>1862: </b>Appointed state sanitary agent of Iowa</li>
                                <li><b>1863: </b>Mired in a political battle because state politicians did not trust a
                                    woman with government money and supplies</li>
                                <li><b>1864: </b>Opened home for Civil War orphans in Davenport</li>
                                <li><b>1874 - 1879: </b>Served as National President of the Woman's Christian Temperance
                                    Union (WCTU)</li>

                            </ul>
                        </b-col>

                        <b-col>
                            <h6 class="text-center">Mary Darwin (1821 - 1886)</h6>
                            <ul>
                                <li><b>1821: </b>Born in Connecticut</li>
                                <li><b>1840s: </b>Moved to Iowa where she lived in Des Moines and Burlington</li>
                                <li><b>1863: </b>Publicly defended Wittenmyer's right to risk her life for her country
                                    and work outside the home</li>
                                <li><b>1868: </b>Named "Iowa's Most Popular Lecturer" by <i>The Henry County Press</i>
                                </li>
                                <li><b>1870: </b>Appointed chairwoman of the executive committee of the Iowa Woman
                                    Suffrage Association and founded the Burlington Woman Suffrage Society</li>
                                <li><b>1880: </b>Joined the Iowa SCTU and advocated for suffrage until her death in
                                    <b>1886</b></li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div>Involvement in a social movement did not guarantee a woman’s support for suffrage. Although Annie
                Turner Wittenmyer landed one of the first state positions given to a female (sanitary agent, <b>1862</b>),
                Wittenmyer disapproved of equal suffrage, believing women should exert moral influence rather than
                political influence.</div>
            <div>On the other hand, Mary Platt Darwin, Wittenmyer’s contemporary in the Sanitary Commission, became an
                ardent suffrage advocate.</div>
            <div>The Sanitary Commission was a precursor to the American Red Cross. When the Civil War began, women sent
                aid directly to the troops, but soon regional Sanitary Commissions distributed the funds and supplies
                and organized women who would feed, nurse, and house soldiers. Although Wittenmyer was well-respected
                for helping soldiers, she had to fight to maintain control of aid funds. In <b>1863</b>, Darwin defended
                Wittenmyer’s right to serve her country.
            </div>

        </div>
    <div><ImageCarousel :images="images"/></div>
    </div>
</template>

<script>

import ImageCarousel from '../../../helpers/ImageCarousel'
import DarwinLetterImage from '../../../../assets/book-content/darwinletter_large.png'
import MillerDiaryImage from '../../../../assets/book-content/millerdiary_large.png'
import MillerDiaryTwoImage from '../../../../assets/book-content/millerdiary2_large.png'
import WittenmyerImage from '../../../../assets/book-content/wittenmyer_large.png'
import DarwinImage from '../../../../assets/book-content/darwin_large.png'


    export default {
        components: {
            ImageCarousel,
        },

        data() {
            return {
                images: [
                    {
                        url: DarwinLetterImage,
                        caption: 'IWA. Elvira Gaston Platt Papers.',
                        text: ''
                    },
                    {
                        url: MillerDiaryImage,
                        caption: 'IWA. Ellen Mowrer Miller Papers.',
                        text: ''
                    },
                 {
                        url: MillerDiaryTwoImage,
                        caption: 'IWA. Ellen Mowrer Miller Papers.',
                        text: ''
                    },
                    {
                        url: WittenmyerImage,
                        caption: 'ISU. Carrie Chapman Catt Papers',
                        text: ''
                    },
                {
                        url: DarwinImage,
                        caption: 'ISU. Carrie Chapman Catt Papers',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>