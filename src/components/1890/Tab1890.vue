<template>
  <div class="tab-1890">
    <OpenBook>
      <span slot="first-page">
        <h2 class="time-header">1890 - 1915</h2>
        <div class="figures">
          <figure>
            <img class="cary-image" src="../.././assets/book-content/cary_large.png">
            <figcaption>IWA. Cary Club Records.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>From <strong>1890</strong> to <strong>1915</strong>, Iowans witnessed a changing of the guard in the
            suffrage movement as early leaders aged or died. In many cases, younger women brought fresh hope and
            ideas to the cause.</p>
          <p>By this time, many women&#8217;s clubs were discussing and debating suffrage. In
            <strong>1894</strong>, Iowa women were granted partial suffrage to vote on bond issues and questions
            of tax increases for schools or municipalities, but, nationally, women were making slow gains.
          </p>
          <p>In <strong>1908</strong>, Boone, Iowa hosted one of the first suffrage parades in the nation.</p>
        </div>
      </span>

      <span slot="second-page">
        <div class="figures">
          <figure>
            <img class="haugen-image" src="../.././assets/book-content/haugen_large.png">
            <figcaption>SHSI Iowa City. Gilbert Haugen Papers.</figcaption>
          </figure>



          <figure>
            <img class="cosson-image" src="../.././assets/book-content/cosson_large.png">
            <figcaption>IWA. Jennifer Riggs Cosson Papers.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>Jennifer Riggs (Cosson) wrote several essays and speeches while at Simpson College in Indianola,
            Iowa. She argued publicly for suffrage, but did so within the context of <strong>1890s</strong> social
            mores.
          </p>

          <p>Cosson was eloquent in her defense of the rights of women to be involved in society and in politics,
            but was not always comfortable with militant methods such as parades or picketing. She also was not
            sure that women had enough education to handle the responsibilities that came with voting.</p>

          <p>In <strong>1909</strong>, her husband, Iowa Senator George Cosson, supported a bill to give women the
            vote. The bill was quickly killed.
          </p>
        </div>
      </span>
    </OpenBook>
  </div>
</template>

<script>
  import OpenBook from '../OpenBook'

  export default {
    name: 'Tab1890',

    components: {
      OpenBook
    }
  }

</script>

<style scoped>
  .tab-1890 {
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

  .time-header {
    text-align: center;
  }

</style>
