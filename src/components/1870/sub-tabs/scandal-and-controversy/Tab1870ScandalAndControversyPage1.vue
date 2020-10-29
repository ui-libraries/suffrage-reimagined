<template>
  <div class="page-container">
    <h4>Scandal &amp; Controversy</h4>
    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            In the spring and summer of
            <b class="embolden">1871</b>, a national controversy stirred that would have a lasting impact on
            Iowa suffragists.
          </div>

          <div>
            Spiritualist, free-love advocate, and suffragist Victoria Woodhull of New York was derided by the
            national press for her controversial opinions and actions. Since she was also an outspoken advocate and
            financial backer of the National Woman Suffrage Association, the entire movement was tainted.
          </div>

          <div>
            At the same time, the president of the American Woman Suffrage Association, Henry Ward Beecher, was
            having an affair with suffrage advocate Theodore Tilton’s wife. The Beecher-Tilton scandal was more
            suppressed in the national media, but word spread to Iowa through other suffragists.
          </div>

          <div>
            Also in
            <b class="embolden">1871</b>, Elizabeth Cady Stanton made headlines for speaking about such controversial topics as
            birth control and divorce. Her lecture tour included several stops in Iowa.
          </div>

          <div>
            Prominent suffrage leader Annie Savery
            <b class="embolden">(1831 - 1891)</b> of Des Moines defended the right of suffragists
            such as Woodhull to hold minority opinions. She wanted the private thoughts of women to be protected -
            just as they were for men. Not everyone agreed, though.
          </div>

          <div>
            At the
            <b class="embolden">1871</b> Iowa State Suffrage Society convention, Nettie Sanford
            <b class="embolden">(1830-1901)</b> of Marshalltown
            proposed a resolution stating that marriage was sacred and binding.
          </div>

          <div>
            Several Iowa suffrage societies, including Polk County’s, issued statements of moral purity in an
            attempt to distance themselves from the national scandals.
          </div>

          <div>
            Polk County suffrage leader Martha Callanan
            <b class="embolden">(1826-1901)</b> led a campaign to ostracize Savery for her
            defense of intellectual freedom.
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import WoodhullImage from "../../../../assets/book-content/woodhull_large.png";
import SaveryImage from "../../../../assets/book-content/savery_large.png";
import NounImage from "../../../../assets/book-content/noun_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: WoodhullImage,
          caption: "Wikimedia Commons",
          text:
            "The relationship between Victoria Woodhull and the National Woman Suffrage Association was an uneasy one. The suffragists appreciated her logical arguments and her financial support, but they did not like her unorthodox social views and living habits"
        },
        {
          url: SaveryImage,
          caption: "IWA. Printed Works Collection",
          text:
            "Despite her leadership and financial support of the suffrage movement, after the early 1870s, Savery’s name was forgotten in Iowa history, and Elizabeth Cady Stanton edited out her significance in the Iowa chapter of History of Woman Suffrage. In 2002, the Iowa Women’s Archives published Louise Noun’s manuscript about Annie Savery, setting the record straight about her contribution to Iowa’s early suffrage movement"
        },
        {
          url: NounImage,
          caption: "IWA. Louise R. Noun Papers.",
          text:
            "Annie Savery expressed her opinions in frequent letters to Des Moines newspapers: “But when asked to go into a political convention to denounce individuals or cliques who do not agree with me on all subjects, I shall emphatically protest against being used for any such purpose,” Iowa State Register, Nov. 19, 1871. Louise Noun (right, 1908 - 2002) paid to restore this portrait of Savery in 1972"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>