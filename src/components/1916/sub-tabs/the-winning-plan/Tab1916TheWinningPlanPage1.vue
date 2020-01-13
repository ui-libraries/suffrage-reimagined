<template>
    <div class="the-winning-plan-page-container">
        <h4 class="page-header text-center">The Winning Plan</h4>

        <div class="text-left scrapbook-content-container">
            <div>The failed <b>1916</b> referendum in Iowa spurred Carrie Chapman Catt, serving her second term as 
                president of the National American Woman Suffrage Association, to devise a four-pronged strategy,
                 which would later be known as “The Winning Plan.”</div>
            <div>
                <ul>
                    <li>Women in states with presidential suffrage would work to pass a federal suffrage amendment</li>
                    <li>Women who believed they could successfully amend their state constitution would press for a referendum</li>
                    <li>Most states would work toward presidential suffrage</li>
                    <li>Southern states would work toward primary suffrage</li>
                </ul>
            </div>
            <div>Iowa women won presidential suffrage in April 1919.</div>
            <div>On <b>July 2, 1919</b> Iowa became the tenth State to ratify the federal amendment. In a special session, 
                the House voted 96 to 5 in favor; the Senate passed it unanimously 45 to 0. On <b>
                    August 26, 
                    1920
                </b> Tennessee became the thirty-sixth state to ratify - enacting the Nineteenth Amendment to the 
                Constitution.</div>
            <div>“This is jubilee day. This is glory day. I am so happy to be here tonight to tell you about the 
                long trail, - the Suffrage trail, the wonderful trail that has led us up and up, - until today women
                 are free,” Alice Longley, Des Moines Political Equality Club, Polk County, Iowa, <b>1920</b>.</div>
        </div>
        <div><image-carousel :images="images" /></div>

    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import MarchingImage from '../../../../assets/book-content/marching_large.png'
import ShawImage from '../../../../assets/book-content/shaw_large.png'
import AliensImage from '../../../../assets/book-content/aliens_large.png'
import AutoImage from '../../../../assets/book-content/auto_large.png'
import ReenactmentImage from '../../../../assets/book-content/reenactment_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: MarchingImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection",
                        text: ''
                    },
                    {
                        url: ShawImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: ''
                    },
                    {
                        url: AliensImage,
                        caption: 'Courtesy Suzanne Caswell. Boone County Historical Society.',
                        text: ''
                    },
                    {
                        url: AutoImage,
                        caption: 'Courtesy Suzanne Caswell. Boone County Historical Society.',
                        text: ''
                    },
                    {
                        url: ReenactmentImage,
                        caption: 'Courtesy Suzanne Caswell. Boone County Historical Society.',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>