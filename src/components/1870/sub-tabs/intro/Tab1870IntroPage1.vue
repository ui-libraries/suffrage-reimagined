<template>
  <div class="page-container">
    <h4 class="text-center page-header">1870 - 1890</h4>
    <image-carousel :images="images">
      <template v-slot:textLeft>
        <div class="scrapbook-content-container text-left">
          <div>
            The period from
            <b class="embolden">1870 to 1890</b> was one of both excitement and disappointment for Iowa suffragists.
            When
            Iowa’s constitution was adopted in
            <b class="embolden">1857</b>, the word “white” was included in the voting section, but
            in
            <b
              class="embolden"
            >1868</b>, Iowans voted to remove it, enfranchising black and Native American men in law, if not
            always in
            practice.
          </div>

          <div>
            This dramatic change in just over a decade led women to believe they would be next. Indeed, in
            <b
              class="embolden"
            >1870</b>,
            the Iowa Legislature hired a female clerk (Mary Spencer), changed the code so women could practice law,
            and approved a resolution to amend the constitution and allow women to vote.
          </div>

          <div>
            Quaker and peace activist Joseph Dugdale spearheaded a women’s rights convention in Mount Pleasant in
            <b
              class="embolden"
            >1870</b>, which led to the organization of the Iowa Woman Suffrage Association (later known as the
            Iowa
            Equal Suffrage Association). A Mount Pleasant Journal editorial encouraged other states to look to Iowa
            as an example of progress.
          </div>

          <div>
            In
            <b class="embolden">1871</b>, a free love scandal rocked the nation and splintered the suffrage movement in Iowa. The
            <b
              class="embolden"
            >1872</b>
            General Assembly rejected the women’s suffrage resolution - forcing the women to start over in the
            legislature.
          </div>

          <div>
            Meanwhile, more and more Iowa women began speaking publicly and getting involved in local, state, and
            national suffrage organizations.
          </div>
        </div>
      </template>
    </image-carousel>
  </div>
</template>

<script>
import ImageCarousel from "../../../helpers/ImageCarousel";
import OconnorImage from "../../../../assets/book-content/oconnor_large.png";
import AnthonyImage from "../../../../assets/book-content/anthony_large.png";
import CharitonImage from "../../../../assets/book-content/chariton_large.png";

export default {
  components: {
    ImageCarousel
  },

  data() {
    return {
      images: [
        {
          url: OconnorImage,
          caption: "SHSI Des Moines. Joseph Dugdale Papers.",
          text:
            "In 1869, Iowa Attorney General Henry O’Connor ruled that women were allowed to hold the political office of superintendent of schools for county districts based on a case in Mitchell County. In this 1870 letter, he voiced his support for Dugdale’s suffrage convention. To the disappointment of suffragists, O’Connor’s 1872 bid for governor was unsuccessful"
        },
        {
          url: AnthonyImage,
          caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
          text:
            "Susan B. Anthony wrote a letter to Caroline Ingham of Algona, Iowa in 1876, urging Ingham to publish suffrage editorials in state and local newspapers and to send Anthony an embroidered flag or similar token for a National American Woman Suffrage Association display"
        },
        {
          url: CharitonImage,
          caption: "SHSI Des Moines. Iowa Women's Suffrage Collection.",
          text:
            "Quaker L.M. Davis of Chariton, Iowa wrote this 1890 speech arguing for the right to vote so that women could choose good government, advocate for peace, and claim a God-given right. She said, “It is not pleasant to be classified with criminals and idiots and insane people.”"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>