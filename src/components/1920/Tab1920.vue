<template>
  <div class="tab-1920">
    <OpenBook>
      <span slot="first-page">
        <h2 class="time-header">1920 & Beyond</h2>
        <p> In the long struggle for voting rights, Iowa&#8217;s efforts had been well-respected across the
          nation.
          Although women could vote as individuals, their organizing days were not over.</p>
        <p> In the fall of <strong>1919</strong>, the suffragists met in Boone and formed the League of Women
          Voters of Iowa (LWV). That organization continues to educate voters today.</p>
        <p>To commemorate their struggle, veteran suffragists formed the Iowa Suffrage Memorial Commission in
          <strong>1922</strong>. Fourteen years later, a bronze bas-relief was installed in the Iowa Capitol in
          Des Moines.</p>
        <p>The right to vote did not bring about the sweeping freedoms for American women that some suffragists
          had expected. Women continued to fight for equality in the workplace, the political arena and the
          home. Much of that work continues today. </p>
      </span>

      <span slot="second-page">
        <div class="figures">
          <figure>
            <img class="dunlap-image" src="../.././assets/book-content/dunlap_large.png">
            <figcaption>IWA. Printed Works Collection</figcaption>
          </figure>
          <figure>
            <img class="cattpin-image" src="../.././assets/book-content/blackwell_large.png">
            <figcaption>Printed Works Collection</figcaption>
          </figure>
        </div>
        <div class="content">
          <p> Flora Dunlap (1872-1952) served as the first president of the Iowa LWV, but she had been breaking
            ground in women&#8217;s rights long before that.
            <li><strong>1872</strong>: Born in Ohio</li>
            <li><strong>1904</strong>: Moved to Des Moines to head the Roadside Settlement House after working
              with Jane Addams at Hull House in Chicago</li>
            <li><strong>1912</strong>: First woman elected to the Des Moines School Board, but refused to run
              again in <strong>1915</strong> because her male colleagues had ignored her, making her an
              ineffective board member</li>
            <li><strong>1913-1916</strong>: Served as president of the Iowa Equal Suffrage Association,
              participating in the <strong>1913</strong> automobile tour and spearheading the
              <strong>1916</strong> referendum campaign </li>
            <li><strong>1919</strong>: Elected first president of the Iowa LWV for a one-year term</li>
            <li><strong>1930s</strong>: Held several Polk County government positions during the Great Depression
              - often as the first woman </li>
        </div>
      </span>
    </OpenBook>
  </div>
</template>

<script>
  import OpenBook from '../OpenBook'

  export default {
    name: 'Tab1920',

    components: {
      OpenBook
    }
  }

</script>

<style scoped>
  .tab-1920 {
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

  .dunlap-image {
    border: 1px solid black;
  }

  .time-header {
    text-align: center;
  }

</style>
