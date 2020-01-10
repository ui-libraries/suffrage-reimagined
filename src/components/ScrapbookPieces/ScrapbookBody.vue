<template>
<div class="scrapbook-body-container" role="main">
    <router-view />
    <div class="nav-arrows">
        <img class="go-back-arrow" src="../../assets/page-arrow-left.png" @click="prevTab()">
        <img class="go-forward-arrow" src="../../assets/page-arrow-right.png" @click="nextTab()">
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            routeNames: ['TabAboutPage1', 'Tab1854IntroPage1', 'Tab1854AmeliaBloomerPage1', 'Tab1854SocialMovementsPage1',
                    'Tab1870IntroPage1', 'Tab1870LegislativeBattlePage1', 'Tab1870ScandalAndControversyPage1', 'Tab1870TemperancePage1',
                    'Tab1890IntroPage1', 'Tab1890GoalUnrealizedPage1', 'Tab1890OrganizingForTheVotePage1', 'Tab1890AfricanAmericanWomenPage1', 'Tab1890BooneParadePage1',
                    'Tab1916IntroPage1', 'Tab1916ReferendumPage1', 'Tab1916WarWorkPage1', 'Tab1916TheWinningPlanPage1',
                    'Tab1920IntroPage1', 'Tab1920LeagueOfWomenVotersPage1', 'Tab1920SufffrageMemorialPage1', 'Tab1920WomenInPoliticsTodayPage1', 'Tab1920WomenInPoliticsTodayPage2'],
        }
    },

    methods: {
      prevTab() {
        let index = this.routeNames.indexOf(this.$route.name);
        if (this.routeNames[index-1]) {
            this.$router.push({name: this.routeNames[index-1]});
        }
      },
      nextTab() {
        let index = this.routeNames.indexOf(this.$route.name);
        if (this.routeNames[index+1]) {
            this.$router.push({name: this.routeNames[index+1]});
        }
      }
    }
}
</script>

<style scoped>
.scrapbook-body-container {
    /* min-height: 48rem; */
    min-height: 75vh;
    background-color: ghostwhite;
    position: relative;
    background-image: url('https://i.imgur.com/mNBhyUX.jpg');
    padding: 2em 4em;
}

@media only screen and (max-width: 450px) {
    .scrapbook-body-container {
        padding: 2em 2em;
    }
  }

  .go-back-arrow {
    position: absolute;
    left: 35px;
  }
  .go-forward-arrow {
    position: absolute;
    left: 94%;
  }
  .go-back-arrow, .go-forward-arrow {
    height: 4vh;
    top: 92%;
    cursor: pointer;
  }
</style>