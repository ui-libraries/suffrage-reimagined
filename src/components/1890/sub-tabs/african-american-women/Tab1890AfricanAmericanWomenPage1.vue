<template>
  <div class="page-container">
    <h4 class="text-center">African American Women</h4>
    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            Beginning in the early
            <b class="embolden">1900s</b>, African American Iowans worked for suffrage mainly through women’s clubs. Founded
            in
            <b class="embolden">1902</b>, the Iowa Association of Colored Women’s Clubs (IACWC - later known as the Iowa Federation of Colored
            Women’s Clubs) provided an umbrella organization for the activism of clubwomen.
          </div>

          <div>
            By the
            <b class="embolden">1910s</b>, suffrage clubs in IACWC included the Suffragette Club of Des Moines and various Mary
            Church Terrell clubs. The IACWC established a standing suffrage committee in
            <b class="embolden">1914</b> headed by Teresa Adams
            of Davenport.
          </div>

          <div>
            In
            <b class="embolden">1916</b>, African American women in Buxton, Iowa marched for suffrage in a family parade.
          </div>

          <div>
            Organizations such as IACWC focused on many inequalities facing African American women in areas such as
            education, working wages and property rights.
          </div>

          <div>
            Officers of the Des Moines Suffrage Club, an African American women’s club, wrote this sympathy note
            (above) to Fannie Wilson on the death of her husband.
          </div>

          <div>
            African American obituaries saved by Wilson's daughter, Gwendolyn Wilson Fowler, show that African
            American women in the
            <b class="embolden">1900s</b> were involved in suffrage clubs and, later, the League of Women Voters.
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import iacwcImage from "../../../../assets/book-content/iacwc_large.png";
import WilsonImage from "../../../../assets/book-content/wilson_large.png";
import WilsonobitImage from "../../../../assets/book-content/wilsonobit_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: iacwcImage,
          caption:
            "SHSI Des Moines. Iowa Association of Colored Women's Clubs Records",
          text:
            "IACWC honorary president Gertrude D. Rush became the first African American woman to pass the Iowa bar in 1918 and spent her career working for the legal rights of her fellow women."
        },
        {
          url: WilsonImage,
          caption: "IWA. Gwendolyn Wilson Fowler Papers.",
          text:
            "This note was preserved in the papers of Fannie Wilson’s daughter, Gwendolyn Wilson Fowler, who became the first African American woman in Iowa to obtain a pharmaceutical degree and be officially registered in the state in 1930. Fannie Wilson Cooper’s obituary talked about her community activities, but made no mention of her suffrage activities. The only proof we have is the suffrage note."
        },
        {
          url: WilsonobitImage,
          caption: "IWA. Gwendolyn Wilson Fowler Papers.",
          text:
            "Fannie Wilson and her first husband, Dr. Cornelius Wilson, moved to Des Moines from Arkansas in 1913. She lived in Des Moines until her death at age 96."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>