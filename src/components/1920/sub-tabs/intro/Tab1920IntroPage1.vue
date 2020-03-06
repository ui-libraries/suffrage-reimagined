<template>
    <div class="intro-page-container">
        <h4 class="page-header text-center">1920 and Beyond</h4>

            <image-carousel :images="images">
                <template v-slot:textLeft>
                    <div class="scrapbook-content-container text-left">
                        <div>In the long struggle for voting rights, Iowa’s efforts had been well-respected across the nation. 
                            Although women could vote as individuals, their organizing days were not over.</div>
                        <div>In the fall of <b>1919</b>, the suffragists met in Boone and formed the League of Women Voters of Iowa (LWV). 
                            That organization continues to educate voters today.</div>
                        <div>To commemorate their struggle, veteran suffragists formed the Iowa Suffrage Memorial Commission in <b>1922</b>. 
                            Fourteen years later, a bronze bas-relief was installed in the Iowa Capitol in Des Moines.</div>
                        <div>The right to vote did not bring about the sweeping freedoms for American women that some suffragists 
                            had expected. Women continued to fight for equality in the workplace, the political arena and the home. 
                            Much of that work continues today.</div>
                        <hr>
                        <div>
                            <div>Flora Dunlap <b>(1872-1952)</b> served as the first president of the Iowa LWV, but she had been 
                                breaking ground in women’s rights long before that.</div>
                            <ul>
                                <li><b>1872: </b>Born in Ohio</li>
                                <li><b>1904: </b>Moved to Des Moines to head the Roadside Settlement House after working
                                    with Jane Addams at Hull House in Chicago.</li>
                                <li><b>1912: </b>First woman elected to the Des Moines School Board, but refused to run again
                                    in <b>1915</b> because her male colleagues had ignored her, making her an ineffective board member</li>
                                <li><b>1913-1916: </b>Served as president of the Iowa Equal Suffrage Association, 
                                    participating in the <b>1913</b> automobile tour and spearheading the <b>1916</b> referendum campaign</li>
                                <li><b>1919: </b>Elected first president of the Iowa LWV for a one-year term</li>
                                <li><b>1930s: </b>Held several Polk County government positions during the Great Depression - 
                                    often as the first woman</li>
                            </ul>
                        </div>
                    </div>
                </template>
            </image-carousel>
        </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import DunlapImage from '../../../../assets/book-content/dunlap_large.png'
import BlackwellImage from '../../../../assets/book-content/blackwell_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: DunlapImage,
                        caption: 'IWA. League of Women Voters of Iowa Records.',
                        text: ''
                    },
                    {
                        url: BlackwellImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection",
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>