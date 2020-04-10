<template>
  <div class="page-container">
    <h4 class="text-center">1890 - 1915</h4>
    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            From
            <b class="embolden">1890 to 1915</b>, Iowans witnessed a changing of the guard in the suffrage movement as early
            leaders aged or died. In many cases, younger women brought fresh hope and ideas to the cause.
          </div>
          <div>
            By this time, many women’s clubs were discussing and debating suffrage. In
            <b class="embolden">1894</b>, Iowa women were
            granted partial suffrage to vote on bond issues and questions of tax increases for schools or
            municipalities, but, nationally, women were making slow gains.
          </div>
          <div>
            In
            <b class="embolden">1908</b>, Boone, Iowa hosted one of the first suffrage parades in the nation.
          </div>
          <div>
            Jennifer Riggs (Cosson) wrote several essays and speeches while at Simpson College in Indianola, Iowa.
            She argued publicly for suffrage, but did so within the context of
            <b class="embolden">1890s</b> social mores.
          </div>
          <div>
            Cosson was eloquent in her defense of the rights of women to be involved in society and in politics,
            but was not always comfortable with militant methods such as parades or picketing. She also was not sure
            that women had enough education to handle the responsibilities that came with voting.
          </div>
          <div>
            In
            <b class="embolden">1909</b>, her husband, Iowa Senator George Cosson, supported a bill to give women the vote. The
            bill was
            quickly killed.
          </div>
          <div>
            <ul>
              <li>
                <b class="embolden">1869 - 1896:</b>Wyoming became the first state to grant suffrage in
                <b class="embolden">1869.</b> Seven
                states followed, granting at least partial suffrage.
              </li>
              <li>
                <b class="embolden">1897 - 1910:</b>No U.S. state suffrage referendum was successful.
              </li>
              <li>
                <b class="embolden">By 1915:</b>Eight more states or territories had at least partial suffrage.
              </li>
              <li>
                <b class="embolden">1887 - 1914:</b>A federal amendment granting women the right to vote remained dormant.
              </li>
              <li>
                <b class="embolden">1914:</b>Congress reconsidered a federal amendment to grant equal suffrage.
              </li>
            </ul>
          </div>
          <div>
            By
            <b class="embolden">1900</b>, Iowa was one of four states with antisuffrage committees organized by women. These
            women may
            have feared the changes that suffrage would bring, believing they already had influence without official
            titles or legal rights.
          </div>
          <div>
            Of course, Iowa also had organized antisuffragist campaigns led by men. In
            <b class="embolden">1916</b>, the Iowa
            Association
            of Men Opposed to Woman Suffrage formed. Its members included a former Iowa governor, a real estate
            tycoon and railroad president, oil company lawyers, and a Ford Auto executive.
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import CaryImage from "../../../../assets/book-content/cary_large.png";
import HaugenImage from "../../../../assets/book-content/haugen_large.png";
import CossonImage from "../../../../assets/book-content/cosson_large.png";
import PinImage from "../../../../assets/book-content/pin_large.png";
import PostcardImage from "../../../../assets/book-content/postcard_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: CaryImage,
          caption: "IWA. Cary Club Records.",
          text:
            "In 1891, the Cary Club of Marion, Iowa listened to a presentation on Susan B. Anthony by a Mrs. Davis and engaged in a “Discussion on Women’s Suffrage” opened by a Mrs. Crowley."
        },
        {
          url: HaugenImage,
          caption: "SHSI Iowa City. Gilbert Haugen Papers.",
          text:
            "In the early 1890s, Julia Hildreth became involved in the Charles City Political Equality Club organized by Carrie Chapman Catt. By 1894, she was its president. At her request, her husband wrote to state representative Gilbert N. Haugen to ask his opinion of partial suffrage for women. Haugen replied that he was undecided, but would study the issue carefully."
        },
        {
          url: CossonImage,
          caption: "IWA. Jennifer Riggs Cosson Papers.",
          text:
            "“There is no necessity that she should sacrifice her dignity and good nature because she cannot go to the polls with her brother - that is but a matter of time and perhaps a very short time…” The American Girl of Today by Jennifer Riggs Cosson, undated."
        },
        {
          url: PinImage,
          caption: "IWA. Iowa Suffrage Memorial Commission Records.",
          text:
            "This pin is from the 1912 annual convention of the Iowa Equal Suffrage Association (IESA)."
        },
        {
          url: PostcardImage,
          caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
          text:
            "This postcard was distributed in 1916 by the Dubuque Association Opposed to Woman Suffrage. The association pointed to the long drought of suffrage victories in the period from 1890 to 1915 as evidence of popular opposition to women’s suffrage."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>