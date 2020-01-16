<template>
    <div class="page-container">
        <h4 class="text-center">Boone Parade</h4>
            <image-carousel :images="images">
                <template v-slot:textLeft>
                    <div class="scrapbook-content-container text-left">
                        <div>One of Iowa’s claims to fame in the suffrage movement is the <b>1908</b> suffrage parade held in Boone, Iowa.
                            Prior to this, parades had been associated with militant English suffragettes. By <b>1908</b>, however, Iowa
                            suffragists realized that their methods had to change.</div>
                        <div>On <b>October 29, 1908</b>, about one hundred fifty women marched from the Boone Universalist Church to the
                            downtown business district. Led by a band, the women marched and rode in cars, waving banners
                            proclaiming their rights. At the end of the route, the women listened to speeches from National American
                            Woman Suffrage Association (NAWSA) president Dr. Anna Howard Shaw and two English suffragettes.</div>
                        <div>In <b>1888</b>, Davenport, Iowa had hosted an anti-suffrage parade, and women had marched in parades of other
                            kinds, but Boone was the first in Iowa dedicated solely to suffrage.</div>
                        <div>There is debate over whether or not the Boone parade was the first suffrage parade in the entire
                            country. IESA president Eleanor Gordon believed it was, but there were also suffrage parades in New York
                            City and Oakland, California the same year.</div>
                        <div>
                            Although parades and picketing were only used in the last phase of the suffrage movement, the images
                            have remained iconic in national memory.
                        </div>
                        <div>One hundred years later, in <b>2008</b>, the Boone County Historical Society received funding to organize a reenactment of Iowa’s historic suffrage parade.</div>
                        <div>One hundred participants from across the state came dressed in <b>1908</b> fashions and marched the original parade route singing songs and stopping to listen to suffrage speeches. The original slogans and banner styles were reproduced after examining photographs in the <b>1908</b> Boone News Republican.</div>
                        <div>
                            Many Iowa organizations participated in the reenactment. After the parade, a suffrage monument was dedicated to the women of Iowa on the grounds of Boone High School.
                        </div>
                    </div>
                </template>
            </image-carousel>
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