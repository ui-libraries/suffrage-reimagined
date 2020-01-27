<template>
    <div class="page-container">
        <h4 class="text-center">Organizing for the Vote</h4>
        <div class="text-left scrapbook-content-container">
            <div>Women’s clubs exploded into existence in the latter half of the nineteenth century and were extremely
                important to the suffrage movement.</div>
            <div>Some, such as the Charles City Political Equality Club, were devoted almost solely to getting the vote.
                Others, such as the Proteus Club of Des Moines and the Cary Club of Marion, were focused on intellectual
                and community improvement. These clubs provided an established network of active women ripe for
                conversion to the suffrage cause.</div>
            <div>In <b>1907</b>, IESA officers lived in cities and towns across the state, including Chariton, Des Moines,
                Hull, Ida Grove, Mason City, Maquoketa, Ottumwa, Panora, Sheldon, Shenandoah, and Sioux City. Map
                created by Christine Mastalio.</div>
            <div>In July <b>1912</b>, Iowa suffragists staged an automobile tour from Des Moines to Highland Park, Valley
                Junction, and Mitchellville. They would arrive at a stop, play cornets to announce their arrival and
                then give speeches.</div>
            <div>Another automobile tour was launched in September <b>1913</b>, going from central Iowa to the eastern border.
                An estimated 7,500 people in 30 towns saw the mobile caravan.

            </div>
            <div>In <b>1909</b>, her husband, Iowa Senator George Cosson, supported a bill to give women the vote. The bill was
                quickly killed.</div>
            <div>
                This <b>1897</b> sheet music dedicated to the Political Equality Club of Emmetsburg, Iowa details, in song, why
                Iowa women should vote.
            </div>
            <div>Composer Lilla Cordelia Ormsby Bliven moved to Palo Alto County, Iowa from Michigan in the <b>1880s</b> with
                her husband, Charles Bliven. Lilla Bliven wrote verses and songs for almost every occasion, according to
                her son Bruce Bliven’s reminiscences in the August <b>1968</b> edition of The <a class="text-anchor" href="http://ormsby.org/genie/Bruce_Bliven/Palimpsest_one.html">Palimpsest.</a>
            </div>
            
        </div>
        <image-carousel :images="images">
            <template v-slot:textLeft>
                <div class="scrapbook-content-container text-left">
                    <div>In <b>1913</b>, the Proteus Club of Des Moines put on a fundraising event. Their play, “The Militant
                            Husbandette,” spoofed Molière's work by parodying activities of militant British suffragettes.</div>
                        <div>The Iowa Federation of Women’s Clubs (IFWC) organized in <b>1893</b> and provided organizational support and
                            ideas for hundreds of clubs by the <b>1920s</b>. During this time period, middle-class women had both increased
                            leisure time and increased education resulting in a proliferation of women’s clubs focused on just about
                            everything including education, conservation, philanthropy, civic duties, social causes and intellectual
                            improvement.</div>
                        <div>In <b>1911</b>, the IFWC became one of the first state federations to endorse suffrage.</div>
                        <div>Carrie Dean graduated from Tipton, Iowa high school in <b>1895</b> and moved to Ida Grove, Iowa after her
                            marriage in the early <b>1900s</b>. Once there, she joined the Ida Grove Civic Club, which she remembered in
                            her <b>1936</b> reminiscences as a suffrage club that disguised its name to appeal to conservative
                            sensibilities.</div>
                        <div>In addition to suffrage activities, the club also worked to get a new library, high school, golf course
                            and swimming pool in Ida Grove.</div>
                        <div>Sixteen years after Iowa women began voting, Carrie Pruyn recalled touring the rural areas around Ida
                            Grove in her Buick, which she had decorated with suffrage slogans, and arguing with farmers who wanted
                            the women to go back home and take care of the babies.</div>
                </div>
            </template>
        </image-carousel>
                        <div class="scrapbook-content-container text-left">
                            <div>Although rural males made up 70 percent of Iowa’s voting population, it was not until the <b>1910s</b> that
                                the Iowa Equal Suffrage Association began focusing on educating rural voters.</div>
                            <div>Beginning in the early 1900s, African American Iowans worked for suffrage mainly through women’s clubs. Founded in 1902, 
                                the Iowa Association of Colored Women’s Clubs (IACWC - later known as the Iowa Federation of Colored Women’s Clubs) 
                                provided an umbrella organization for the activism of clubwomen.</div>
                            <div>By the 1910s, suffrage clubs in IACWC included the Suffragette Club of Des Moines and various Mary Church Terrell clubs. 
                                The IACWC established a standing suffrage committee in 1914 headed by Teresa Adams of Davenport. 
                                In 1916, African American women in Buxton, Iowa marched for suffrage in a family parade.</div>
                            <div>Organizations such as IACWC focused on many inequalities facing African American women in areas such as education, 
                                working wages and property rights.</div>
                            <div>Officers of the Des Moines Suffrage Club, an African American women’s club, wrote this sympathy note (above) 
                                to Fannie Wilson on the death of her husband. African American obituaries saved by Wilson's daughter, 
                                Gwendolyn Wilson Fowler, show that African American women in the 1900s were involved in suffrage clubs 
                                and, later, the League of Women Voters.</div>
                        </div>
    </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import CharlesCityImage from '../../../../assets/book-content/charlescity_large.png'
// import MapImage from '../../../../assets/book-content/map_large.png'
import RoadImage from '../../../../assets/book-content/road_large.png'
import SongImage from '../../../../assets/book-content/song_large.png'
import HusbandetteImage from '../../../../assets/book-content/husbandette_large.png'
import HistoryImage from '../../../../assets/book-content/history_large.png'
import DeanBicycleImage from '../../../../assets/book-content/deanbicycle_large.png'
import DeanDancingImage from '../../../../assets/book-content/deandancing_large.png'
import DeanHighschoolImage from '../../../../assets/book-content/deanhighschool_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: CharlesCityImage,
                        caption: 'SHSI Iowa City. Charles City Political Equality Club Records.',
                        text: ''
                    },
                    // {
                    //     url: MapImage,
                    //     caption: 'Plat Book of Boone County, Iowa, 1896',
                    //     text: ''
                    // },
                    {
                        url: RoadImage,
                        caption: 'IWA. Iowa Suffrage Memorial Commission Records.',
                        text: ''
                    },
                                        {
                        url: SongImage,
                        caption: 'IWA. Welch and Angrick Collection.',
                        text: ''
                    },
                                         {
                        url: HusbandetteImage,
                        caption: 'IWA. Proteus Club Records.',
                        text: ''
                    },
                    {
                        url: HistoryImage,
                        caption: "IWA. Iowa Federation of Women's Clubs Records.",
                        text: ''
                    },
                   
                    {
                        url: DeanBicycleImage,
                        caption: 'SHSI Iowa City. Carrie Dean Pruyn Papers.',
                        text: ''
                    },
                    {
                        url: DeanDancingImage,
                        caption: 'SHSI Iowa City. Carrie Dean Pruyn Papers.',
                        text: ''
                    },               
                     {
                        url: DeanHighschoolImage,
                        caption: 'SHSI Iowa City. Carrie Dean Pruyn Papers.',
                        text: '',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>