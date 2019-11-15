<template>
  <div class="tab-1870">
    <OpenBook>
      <span slot="first-page">
        <h2>1870 - 1890</h2>
        <div class="figures">
          <figure>
            <img class="oconnor-image" src="../.././assets/book-content/oconnor_large.png">
            <figcaption>SHSI Des Moines. Joseph Dugdale Papers.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>The period from <strong>1870</strong> to <strong>1890</strong> was one of both excitement and
            disappointment
            for Iowa suffragists. When Iowa&#8217;s constitution was adopted in <strong>1857</strong>, the word
            &ldquo;white&rdquo; was included in the voting section, but in <strong>1868</strong>, Iowans voted to remove
            it, enfranchising black and Native American men in law, if not always in practice. </p>
          <p>This dramatic change in just over a decade led women to believe they would be next. Indeed, in
            <strong>1870</strong>, the Iowa Legislature hired a female clerk (Mary Spencer), changed the code so women
            could practice law, and approved a resolution to amend the constitution and allow women to vote.</p>
          <p>Quaker and peace activist Joseph Dugdale spearheaded a women&#8217;s rights convention in Mount Pleasant in
            <strong>1870</strong>, which led to the organization of the Iowa Woman Suffrage Association (later known as
            the Iowa Equal Suffrage Association). A <em>Mount Pleasant Journal</em> editorial encouraged other states to
            look to Iowa as an example of progress. </p>
        </div>
      </span>

      <span slot="second-page">
        <div class="figures">
          <figure>
            <img class="reasons-image" src="../.././assets/book-content/anthony_large.png">
            <figcaption>SHSI Des Moines. Iowa Women's Suffrage Collection.</figcaption>
          </figure>
          <figure>
            <img class="chariton-image" src="../.././assets/book-content/chariton_large.png">
            <figcaption>SHSI Des Moines. Iowa Women's Suffrage Collection.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>In <strong>1871</strong>, a free love scandal rocked the nation and splintered the suffrage movement in
            Iowa.
            The <strong>1872</strong> General Assembly rejected the women’s suffrage resolution - forcing the women to
            start over in the legislature.</p>
          <div class="p-spacer"></div>
          <p>Meanwhile, more and more Iowa women began speaking publicly and getting involved in local, state, and
            national suffrage organizations. </p>
        </div>
      </span>
    </OpenBook>
  </div>
</template>

<script>
  import OpenBook from '../OpenBook'

  export default {
    name: 'Tab1870',

    components: {
      OpenBook
    }
  }

</script>

<style scoped>
.tab-1870 {
  text-align: center;
}
  h2 {
        text-align: center;
    }

    .figures {
    float: left;
    text-align: center;
    padding: 0 10px;
    height: 100%;
}

figure {
    display: block;
    height: 50%;
}

figcaption {
    font-size: 10px;
    font-style: italic;
}

.content {
    display: table;
    margin: 0 auto;
}

.p-spacer {
  padding: 80px 0;
}

</style>
