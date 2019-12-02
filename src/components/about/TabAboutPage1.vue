<template>
    <div class="page-container">
        <div class="image-pins-container"></div>
        <div class="text-center">
            <h4>
                Welcome to the Women's Suffrage in Iowa Online Exhibit and Resource Guide created by the Iowa Women's
                Archives!
            </h4>
        </div>
        <div class="text-left">
            <p>Women gained the right to vote when the 19th Amendment to the U.S. Constitution was ratified on
                <strong>August 26, 1920</strong>. But the struggle for the ballot began decades earlier.</p>
            <p>The story of Iowa women mirrors what happened on the national level. The Hawkeye state was often looked
                to as an example because of its ties to national suffrage leaders, a history of liberalism, and
                visionary organizing tactics.</p>
            <p>In honor of the 90th Anniversary of women&#8217;s suffrage, the Iowa Women&#8217;s Archives (IWA)
                received a grant from the State Historical Society, Inc. to digitize documents, photographs, and
                artifacts highlighting Iowa&#8217;s unique heritage.</p>
            <p>Materials from <a href="http://www.lib.uiowa.edu/iwa/" target="_blank" class="text-anchor">the Iowa Women's Archives</a>, <a
                    href="http://www.iowahistory.org/" target="_blank" class="text-anchor">the State Historical Society of Iowa</a>, and the
                Special Collections Departments of <a href="http://www.lib.uiowa.edu/spec-coll/" target="_blank" class="text-anchor">The
                    University of Iowa</a> and <a href="http://www.lib.iastate.edu/spcl/index.html" target="_blank" class="text-anchor">Iowa
                    State University</a> libraries are now available in the <a
                    href="http://digital.lib.uiowa.edu/suffrage" target="_blank" class="text-anchor">Iowa Digital Library</a>.</p>
            <p>In addition, the Iowa Women's Archives has created this scrapbook exhibit to provide a brief introduction
                to Iowa&#8217;s suffrage history and point to local and state suffrage <router-link to="/resources"
                    target="_blank" class="text-anchor">Resources</router-link>. Questions can be directed to the Iowa Women&#8217;s Archives staff at
                <a href="mailto:lib-women@uiowa.edu" class="text-anchor">lib-women@uiowa.edu</a></p>

        </div>
        <div class="text-left">
            <p><span class="font-weight-bold">Project Manager:</span> Christine Mastalio</p>
            <p><span class="font-weight-bold">Project Assistant:</span> Kayla Pollock</p>
            <p><span class="font-weight-bold">IWA Curator:</span> K&auml;ren Mason</p>
            <p>Special thanks to staff at the University of Iowa Libraries, the State Historical Society of Iowa, and
                other Iowa cultural heritage institutions for their help in making this project happen.</p>
            <p>The digital images in this exhibit have physical counterparts preserved by various institutions.
                Abbreviations used are as follows:<br /><br />
                <strong>IWA</strong> - Iowa Women&#8217;s Archives<br />
                <strong>SHSI DM</strong> - State Historical Society of Iowa, Des Moines<br />
                <strong>SHSI IC</strong> - State Historical Society of Iowa, Iowa City<br />
                <strong>ISU</strong> - Iowa State University Special Collections</p>
        </div>
    </div>
    <!-- <div class="image-carousel"><ImageCarousel :images="images"/></div> -->
    <!-- <expandable-image :src="require('../../assets/book-content/recitation_large.png')"/> -->
</template>

<script>
    import ImageCarousel from '../helpers/ImageCarousel'
    import ExpandableImage from '../helpers/ExpandableImage'
    import ReasonsImage from '../../assets/book-content/marchingtune.png'
    import RecitationLarge from '../../assets/book-content/recitation_large.png'
    export default {
        components: {
            ImageCarousel,
            ExpandableImage
        },

        data() {
            return {
                images: [{
                        id: 1,
                        url: ReasonsImage,
                        caption: 'Cao',
                        text: 'Text'
                    },
                    {
                        id: 2,
                        url: RecitationLarge,
                        caption: 'dsdfssdfsdfsdfdffg',
                        text: ''
                    },
                    {
                        id: 3,
                        url: ReasonsImage,
                        caption: 'dafd',
                        text: ''
                    },
                    {
                        id: 4,
                        url: ReasonsImage,
                        caption: 'sdfsdf',
                        text: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .image-carousel {
        width: 200px;
    }
</style>