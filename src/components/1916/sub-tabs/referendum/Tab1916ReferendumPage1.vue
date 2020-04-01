<template>
    <div class="referendum-page-container">
        <h4 class="page-header text-center">1916 Referendum</h4>

            <image-carousel :images="images">
                <template v-slot:textLeft>
                    <div class="scrapbook-content-container text-left">
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
                    </div>
                </template>
            </image-carousel>
            <div class="scrapbook-content-container text-left">
                                        <div>In general, the greatest opposition to the 1916 referendum came from the wet counties on the eastern 
                            edge of the state and counties that had heavy concentrations of non-English immigrants, Catholics, or Democrats.</div>
                        <div>A Woman’s Christian Temperance Union investigation published in January 1917 concluded that the 
                            referendum was rife with fraud. Far more ballots were cast on the suffrage measure than in the 
                            gubernatorial election held at the same time. Many counties violated election laws by having 
                            improperly trained officials, improperly placed ballot boxes, and improperly recorded tallies. 
                            In some counties, the number of votes cast exceeded the number of names registered to vote!</div>
            </div>
        </div>
</template>

<script>
import ImageCarousel from '../../../helpers/ImageCarousel'
import SampleBallotImage from '../../../../assets/book-content/sampleballot_large.png'
import BillboardImage from '../../../../assets/book-content/billboard_large.png'
import PlainFactsImage from '../../../../assets/book-content/plainfacts_large.png'
import HorackImage from '../../../../assets/book-content/horack_large.png'
import FraudMapImage from '../../../../assets/book-content/fraudmap_large.png'

    export default {
        components: {
            ImageCarousel,
        },
        
        data() {
            return {
                images: [
                    {
                        url: SampleBallotImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: 'This sample ballot demonstrated how men should mark their ballots to amend Article I, Section II of Iowa’s Constitution by removing the word “male,” thus allowing women and men to vote.'
                    },
                    {
                        url: BillboardImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: 'This campaign sign compared Iowa to other states. Iowa suffragists hoped a successful 1916 campaign in Iowa would pave the way for victories elsewhere.'
                    },
                    {
                        url: PlainFactsImage,
                        caption: 'IWA. Iowa Suffrage Memorial Commission records.',
                        text: 'An anonymous ad in the Iowa Homestead before the referendum vote claimed that city women would vote to drastically raise taxes and force rural voters to pay for paved roads, which were considered an unnecessary and wasteful expense at the time. This Plain Facts brochure was only one way that Iowa suffragists combatted misconceptions during the 1916 campaign.'
                    },
                    {
                        url: HorackImage,
                        caption: 'SHSI Iowa City.',
                        text: 'This letter is from the Women’s Anti-Suffrage Association of Massachusetts to Harvard-educated Iowan Hugo Claude Horack: “[We] hope the men of Iowa, like the men of Massachusetts, will reject the proposal to thrust women into politics against their will,” 1916.'
                    },
                    {
                        url: FraudMapImage,
                        caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
                        text: 'The flags on this county map of Iowa from Carrie Chapman Catt’s scrapbook represented twelve different irregularities in the 1916 primary. The list of violations included: unaccounted for votes, more votes than names on list of voters, and no time of opening polls or wrong time given. '
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>