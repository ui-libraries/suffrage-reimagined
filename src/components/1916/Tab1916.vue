<template>
  <div class="tab-1916">
    <OpenBook>
      <span slot="first-page">
        <h2 class="time-header">1916 - 1919</h2>
        <div class="figures">
          <figure>
            <img class="journal-image" src="../.././assets/book-content/journal_large.png">
            <figcaption>SHSI Iowa City. Gilbert Haugen Papers.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>From <strong>1916</strong> to <strong>1919</strong>, Iowa was a suffrage battleground. On June 5,
            <strong>1916</strong>, Iowa&#8217;s men voted on a referendum to amend the constitution and grant
            women the ballot. Although the referendum failed in a corrupt election, the camapign piqued national
            interest.
            With the U.S.&#8217;s entry into World War I, Iowa women were sometimes torn between suffrage and war
            work, and suffrage campaigns faded a bit from the public eye.</p>
          <p>Just two years later, Congress passed the 19th Amendment, and the women of the Hawkeye state launched
            a ratification campaign. In a special session of the General Assembly held on July 2,
            <strong>1919</strong>, Iowa became the tenth state to ratify. On August 26, <strong>1920</strong>,
            Tennessee became the last state to ratify, finally ending the work Iowa women had been involved with
            for seven decades.</p>
        </div>
      </span>

      <span slot="second-page">
        <div class="figures">
          <figure>
            <img class="songbooklet-image" src="../.././assets/book-content/songbooklet_large.png">
            <figcaption>SHSI Des Moines. Iowa Women's Suffrage Collection.</figcaption>
          </figure>

          <figure>
            <img class="poster-image" src="../.././assets/book-content/poster_large.png">
            <figcaption>SHSI Iowa City.</figcaption>
          </figure>
        </div>
        <div class="content">
          <p>In the year leading up to the <strong>1916</strong> referendum, women created suffrage stamps and wrote
            suffrage songs, doing everything they could think of to win the vote. National leader Carrie Chapman Catt
            returned to Iowa to campaign. Pauline Devitt&#8217;s husband James even hired a nurse for this three-year
            time
            period so his wife could focus on the cause. Pauline Devitt became president of the Iowa Equal Suffrage
            Association (IESA) in <strong>1919</strong>.</p>
          <p>Across the country, the tide was turning in favor of suffrage. In <strong>1916</strong>, Alice Paul founded
            the militant National Woman&#8217;s Party, and Jeanette Rankin of Montana was the first woman elected to the
            U.S. House. In April <strong>1919</strong>, just four months before the state ratified the 19th Amendment,
            the
            Iowa General Assembly passed a bill granting women the right to vote in presidential elections. </p>
        </div>
      </span>
    </OpenBook>
  </div>
</template>

<script>
  import OpenBook from '../OpenBook'

  export default {
    name: 'Tab1916',

    components: {
      OpenBook
    }
  }

</script>

<style scoped>
  .tab-1916 {
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

  .songbooklet-image {
    padding: -2px -20px;
    border: 1px solid black;
  }

  .time-header {
    text-align: center;
  }

</style>
