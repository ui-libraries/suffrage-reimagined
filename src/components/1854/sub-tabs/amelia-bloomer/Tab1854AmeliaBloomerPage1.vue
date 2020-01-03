<template>
    <div class="amelia-bloomer-page-container">
        <h4 class="page-header text-center">Amelia Bloomer</h4>
        <div class="text-left scrapbook-content-container">
            <div>In the <b>1850s</b>, the term “bloomers” referred to a knee-length tunic worn loose or belted over Turkish
                pants, which could hang straight or be gathered at the ankle. This was a marked contrast to many layers
                of petticoats and tight corsets that restricted movement and caused serious health problems.</div>
            <div>Iowa newspapers in Dubuque, Muscatine, Ottumwa, and Farmington printed stories about the first
                appearances of the new apparel in their communities.</div>
            <div>Iowan Amelia Bloomer did not invent bloomers, but the costume was associated with her name because she
                wrote about it frequently in her publication, The Lily, and because she wore the reform dress longer
                than most suffragists.</div>
            <div>
                
                <h6 class="text-center">Amelia Jenks Bloomer (1818 - 1894)</h6>
                <ul>
                    <li><b>1818: </b>Born in Cortland County, New York</li>
                    <li><b>1840: </b>Married political activist Dexter Bloomer - their wedding vows did not include a
                        promise of obedience</li>
                    <li><b>1848: </b>Attended the first women’s rights convention in Seneca Falls, New York, but was not
                        yet convinced of the need for suffrage</li>
                    <li><b>1849: </b>Started The Lily, a temperance newspaper, and began advocating for suffrage so
                        women could enact temperance laws</li>
                    <li><b>1855: </b>Moved to Council Bluffs, Iowa and became the first state resident to publicly speak
                        for suffrage</li>
                    <li><b>1860s: </b>Wrote numerous editorials and rebuttals to Council Bluffs newspapers regarding
                        suffrage</li>
                    <li><b>1871 - 1873: </b>Served as president of the Iowa Woman Suffrage Association</li>
                    <li><b>1880: </b>Wrote history of the Iowa suffrage movement for The History of Woman Suffrage
                        edited by Elizabeth Cady Stanton, Susan B. Anthony and Matilda Joslyn Gage, but the chapter was
                        edited against her wishes</li>
                    <li><b>1894: </b>Died in Council Bluffs, Iowa at the age of 76
                    </li>
                </ul>
            </div>
        </div>
    <div><ImageCarousel :images="images"/></div>
    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import BloomerFashionImage from '../../../../assets/book-content/bloomerfashion_large.png'
import BloomerAmeliaImage from '../../../../assets/book-content/bloomeramelia_large.png'
    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: BloomerFashionImage,
                        caption: 'Library of Congress. Print & Photograph Collection.',
                        text: ''
                    },
                    {
                        url: BloomerAmeliaImage,
                        caption: 'History of Woman Suffrage, ed. Anthony, Stanton & Gage.',
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