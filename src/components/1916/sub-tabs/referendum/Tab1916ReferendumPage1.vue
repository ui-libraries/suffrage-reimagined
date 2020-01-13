<template>
    <div class="referendum-page-container">
        <h4 class="page-header text-center">1916 Referendum</h4>

        <div class="text-left scrapbook-content-container">
            <div><b>June 5, 1916</b> was judgment day for the suffrage amendment. Thanks to the hard work of the Iowa 
                Equal Suffrage Association and its able leaders, Mary Safford <b>(1912 - 1913)</b> and Flora Dunlap <b>(1913 - 1916)</b>, 
                the Iowa General Assembly had finally passed a proposed constitutional amendment in 
                two consecutive sessions. Now it would be up to the people.</div>
            <div>The women of the state (and some men) mobilized in full force to convince voting men to check ‘yes’ 
                on a special ballot. Clubs spent hundreds, if not thousands of dollars, on campaign literature, lecturers, 
                and another state automobile tour.</div>
            <div>The IESA’s <b>1915</b> plan for the months leading up to the election called for fundraising, “directly through 
                collections at meetings or solicitations of contributions; indirectly through food sales, bazaars, 
                banquets, suffrage plays, entertainments or by any other method that fits the community.”</div>
            <div>Between <b>1910 and 1916</b>, nineteen out of twenty-six suffrage referenda in the United States were defeated. 
                The track record in the forty years before that was even worse.</div>
            <div>Iowa suffragists knew they had a fight ahead of them - especially in light of vigorous anti-suffrage 
                campaigns organizing around the referendum. Suffrage supporters viewed their biggest foes as immigrants, 
                rural voters, and the liquor industry.</div>
            <div>Iowa’s referendum attracted fierce anti-suffrage attention. One of the most active ‘anti’ organizations, 
                the Iowa Association of Men Opposed to Woman Suffrage, was led by former Iowa governor Frank D. Jackson.</div>
            <div>Suffragists blamed the liquor industry, the German American Alliance, and ignorant rural voters for 
                their defeat in the 1916 referendum. Opposition to prohibition and women’s suffrage often went 
                hand-in-hand, because the liquor industry feared women would enact prohibition. 
                The German American Alliance probably did not exist as a formal organization, although many new immigrants, 
                including those from Germany, did hold conservative views of woman’s role in society. 
                Community size had virtually no correlation with how a man voted for equal suffrage.</div>
            <div>In general, the greatest opposition to the 1916 referendum came from the wet counties on the eastern 
                edge of the state and counties that had heavy concentrations of non-English immigrants, Catholics, or Democrats.</div>
            <div>A Woman’s Christian Temperance Union investigation published in January 1917 concluded that the 
                referendum was rife with fraud. Far more ballots were cast on the suffrage measure than in the 
                gubernatorial election held at the same time. Many counties violated election laws by having 
                improperly trained officials, improperly placed ballot boxes, and improperly recorded tallies. 
                In some counties, the number of votes cast exceeded the number of names registered to vote!</div>
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