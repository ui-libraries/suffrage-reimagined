<template>
  <div class="page-container">
    <h4 class="text-center">Goal Unrealized</h4>
    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            Known as “The Mother of Woman Suffrage in Iowa,” Mary Jane Whitely Coggeshall paid tribute to the
            sacrifices of Susan B. Anthony in a
            <b class="embolden">1906</b> Des Moines Political Equality Club memorial. Five years later,
            Coggeshall died without realizing her goal of equal suffrage.
          </div>
          <div>
            <br />

            <h6 class="text-center">Mary Jane Whitely Coggeshall (1836 - 1911)</h6>
            <ul>
              <li>
                <b class="embolden">1836: </b>Born in Indiana
              </li>
              <li>
                <b class="embolden">1886: </b>Appointed first editor of Iowa's suffrage newspaper,
                <i>The Woman's Standard</i>
              </li>
              <li>
                <b class="embolden">1890: </b>Served first term as president of the Iowa Equal Suffrage Association (IESA)
              </li>
              <li>
                <b class="embolden">1903: </b>Served second term as president of IESA
              </li>
              <li>
                <b class="embolden">1908: </b>Filed a successful lawsuit against the City of Des Moines when women were denied
                the right to vote on a bond issue. The arguments in the case would be used to justify
                presidential suffrage for Iowa women in
                <b class="embolden">1919</b>
              </li>
              <li>
                <b class="embolden">1911: </b>Died, leaving $15,000 to suffrage associations
              </li>
            </ul>
          </div>
          <div>
            Despite unrealized goals, suffragists seemed to be optimistic that victory was right around the corner.
            In an
            <b class="embolden">1898</b> suffrage report for the Iowa Woman’s Christian Temperance Union (WCTU), Martha Callanan
            wrote, “...it would seem as if public sentiment would not much longer tolerate the withholding of this
            justice to one half the people.”
          </div>
          <div>
            By
            <b class="embolden">1915</b>, the Iowa legislature had approved a ballot measure to amend the Iowa constitution and grant
            women full suffrage. In June
            <b class="embolden">1916</b> the referendum failed, and IESA women continued to hope for an end to
            the “wait full of woe.”
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import AnthonyMemorialImage from "../../../../assets/book-content/anthonymemorial_large.png";
import CoggeshallImage from "../../../../assets/book-content/coggeshall_large.png";
import ProgramImage from "../../../../assets/book-content/program_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: AnthonyMemorialImage,
          caption: "IWA. Iowa Suffrage Memorial Commission Records.",
          text:
            "Several of the biggest names in Iowa suffrage work eulogized Susan B. Anthony at a 1906 Des Moines Political Equality Club meeting."
        },
        {
          url: CoggeshallImage,
          caption: "IWA. Margaret Atherton Bonney Papers.",
          text:
            "Portrait of Mary Jane Whitely Coggeshall, who said, “We who have toiled up the steps of the Old Capitol only to see our bills defeated upon final vote...We who took our baby boys with us to those early meetings, now find those boys are voters, while their mothers are still asking for freedom,” in an 1895 speech at the 25th Anniversary of the Polk County Woman Suffrage Society."
        },
        {
          url: ProgramImage,
          caption: "IWA. Iowa Suffrage Memorial Commission Records.",
          text:
            "In March 1915, ten IESA women performed a play entitled, “How the Vote Was Won,” set “any year in the future.”"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>