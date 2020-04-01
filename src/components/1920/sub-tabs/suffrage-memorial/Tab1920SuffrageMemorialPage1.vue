<template>
    <div class="suffrage-memorial-page-container">
        <h4 class="page-header text-center">Iowa's Suffrage Memorial</h4>
            <image-carousel :images="images">
                <template v-slot:textLeft="">
                    <div class="scrapbook-content-container text-left">
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
                </template>
            </image-carousel>
        </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import MemorialImage from '../../../../assets/book-content/memorial_large.png'
import HunterImage from '../../../../assets/book-content/hunter_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: MemorialImage,
                        caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                        text: 'Carrie Chapman Catt was among the suffrage pioneers with Iowa connections who addressed the public at the 1936 Woman’s Suffrage Memorial dedication.'
                    },
                    {
                        url: HunterImage,
                        caption: 'IWA. League of Women Voters of Iowa Records.',
                        text: 'Mary Ankeny Hunter was active in the Polk County Woman Suffrage Society (later the Des Moines Political Equality Club), the Unity Circle, the Des Moines Women’s Club, the Votes for Women League, and the League of Women Voters of Iowa.'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>