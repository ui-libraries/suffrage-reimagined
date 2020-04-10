<template>
  <div class="intro-page-container">
    <h4 class="page-header text-center">1920 and Beyond</h4>

    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            In the long struggle for voting rights, Iowa’s efforts had been well-respected across the nation.
            Although women could vote as individuals, their organizing days were not over.
          </div>
          <div>
            In the fall of
            <b class="embolden">1919</b>, the suffragists met in Boone and formed the League of Women Voters of Iowa (LWV).
            That organization continues to educate voters today.
          </div>
          <div>
            To commemorate their struggle, veteran suffragists formed the Iowa Suffrage Memorial Commission in
            <b class="embolden">1922</b>.
            Fourteen years later, a bronze bas-relief was installed in the Iowa Capitol in Des Moines.
          </div>
          <div>
            The right to vote did not bring about the sweeping freedoms for American women that some suffragists
            had expected. Women continued to fight for equality in the workplace, the political arena and the home.
            Much of that work continues today.
          </div>
          <hr />
          <div>
            <div>
              Flora Dunlap
              <b class="embolden">(1872-1952)</b> served as the first president of the Iowa LWV, but she had been
              breaking ground in women’s rights long before that.
            </div>
            <ul>
              <li>
                <b class="embolden">1872:</b>Born in Ohio
              </li>
              <li>
                <b class="embolden">1904:</b>Moved to Des Moines to head the Roadside Settlement House after working
                with Jane Addams at Hull House in Chicago.
              </li>
              <li>
                <b class="embolden">1912:</b>First woman elected to the Des Moines School Board, but refused to run again
                in
                <b class="embolden">1915</b> because her male colleagues had ignored her, making her an ineffective board member
              </li>
              <li>
                <b class="embolden">1913-1916:</b>Served as president of the Iowa Equal Suffrage Association,
                participating in the
                <b class="embolden">1913</b> automobile tour and spearheading the
                <b class="embolden">1916</b> referendum campaign
              </li>
              <li>
                <b class="embolden">1919:</b>Elected first president of the Iowa LWV for a one-year term
              </li>
              <li>
                <b class="embolden">1930s:</b>Held several Polk County government positions during the Great Depression -
                often as the first woman
              </li>
            </ul>
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import DunlapImage from "../../../../assets/book-content/dunlap_large.png";
import BlackwellImage from "../../../../assets/book-content/blackwell_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: DunlapImage,
          caption: "IWA. League of Women Voters of Iowa Records.",
          text:
            "In 1916, Flora Dunlap was harassed by two drunk election officials as she tried to vote on a bond issue. One of those officials tried to have her vote on the suffrage question even though she was not legally allowed. The other was so drunk he fell over, muttering about women who wanted to move out of their “sphere.”"
        },
        {
          url: BlackwellImage,
          caption: "SHSI Des Moines. Iowa Women's Suffrage Collection",
          text:
            "In October 1919, Alice Stone Blackwell, daughter of pioneer suffragists Lucy Stone and Henry Blackwell, wrote to a Mrs. Crowley of the Iowa Equal Suffrage Association thanking Iowans for a decades-long partnership with the suffragists of Massachusetts."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>