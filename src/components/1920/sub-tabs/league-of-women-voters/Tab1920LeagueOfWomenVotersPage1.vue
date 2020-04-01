<template>
    <div class="league-of-women-voters-page-container">
        <h4 class="page-header text-center">League of Women Voters</h4>
              <image-carousel :images="images">
                  <template v-slot:textLeft>
                      <div class="scrapbook-content-container text-left">
                          <div>Even as they celebrated, the members of the Iowa Equal Suffrage Association (IESA) 
                            began planning for a new nonpartisan organization dedicated to political and 
                            civic education: the League of Women Voters of Iowa (LWV).</div>
                        <div>At the final convention of the IESA in <b>1919</b> President Pauline Devitt spoke of 
                            the new role they would play, educating women voters and encouraging them to 
                            exercise their newly-won right: “We are here, women of this convention, 
                            to cast off the grave clothes and try our unaccustomed wings over new fields of action.”</div>
                        <div>In the <b>1920s</b>, the Iowa LWV sent state organizers to various communities 
                            to educate women about the political process and current issues.</div> 
                        <div>Local LWV organizations began to spring up across the state; more than 
                            100 women attended an organizing meeting in Osage, Iowa in <b>1924</b>.</div>
                        <div>Iowa women continued to be active on the national stage and to 
                            have close ties with women’s organizations elsewhere.</div>
                        <div>In <b>1923</b>, the National League of Women Voters held its convention in
                             Des Moines, bringing national attention and business to the area.</div>
                      </div>
                  </template>
              </image-carousel>
        </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import BulletinImage from '../../../../assets/book-content/bulletin_large.png'
import OsageImage from '../../../../assets/book-content/osage_large.png'
// import AdImage from '../../../../assets/book-content/ad_large.png'


    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: BulletinImage,
                        caption: 'IWA. League of Women Voters of Johnson County Records.',
                        text: 'Founded by Zella White Stewart in 1920, the League of Women Voters of Johnson County provided a place for women from all political parties to gather.'
                    },
                    {
                        url: OsageImage,
                        caption: 'IWA. League of Women Voters of Iowa Records.',
                        text: 'Mrs. I.H. Tomlinson of Osage, Iowa submitted this 1924 organizer’s report to the League of Women Voters talking about roads “impassable on account of mud.” The report speaks to the difficulty of travel and communication in the early twentieth century - especially in rural Iowa.'
                    },
                    // {
                    //     url: AdImage,
                    //     caption: 'IWA. League of Women Voters of Iowa Records.',
                    //     text: ''
                    // },
                ]
            }
        }
    }
</script>

<style scoped>

</style>