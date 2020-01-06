<template>
    <div class="base-scrapbook-container">
    <div class="testing md-elevation-15">
        <scrapbook-navigation />
        <scrapbook-body />
        <img class="go-back-arrow" src="../../assets/page-arrow-left.png" @click="prevTab()">
        <img class="go-forward-arrow" src="../../assets/page-arrow-right.png" @click="nextTab()">
    </div>
</div>
</template>

<script>
import ScrapbookNavigation from './ScrapbookNavigation'
import ScrapbookBody from './ScrapbookBody'
export default {
    data () {
        return {
            routeNames: ['TabAboutPage1', 'Tab1854IntroPage1', 'Tab1854IntroPage2', 'Tab1854AmeliaBloomerPage1', 'Tab1854SocialMovementsPage1', 'Tab1854SocialMovementsPage2',
                    'Tab1870IntroPage1', 'Tab1870LegislativeBattlePage1', 'Tab1870ScandalAndControversyPage1', 'Tab1870TemperancePage1',
                    'Tab1890IntroPage1', 'Tab1890IntroPage2', 'Tab1890GoalUnrealizedPage1', 'Tab1890OrganizingForTheVotePage1', 'Tab1890OrganizingForTheVotePage2', 'Tab1890OrganizingForTheVotePage3', 'Tab1890OrganizingForTheVotePage4', 'Tab1890OrganizingForTheVotePage5', 'Tab1890AfricanAmericanWomenPage1', 'Tab1890BooneParadePage1', 'Tab1890BooneParadePage2',
                    'Tab1916IntroPage1', 'Tab1916ReferendumPage1', 'Tab1916ReferendumPage2', 'Tab1916WarWorkPage1', 'Tab1916TheWinningPlanPage1',
                    'Tab1920IntroPage1', 'Tab1920LeagueOfWomenVotersPage1', 'Tab1920SufffrageMemorialPage1', 'Tab1920WomenInPoliticsTodayPage1', 'Tab1920WomenInPoliticsTodayPage2'],
        }
    },

    components: {
        ScrapbookNavigation,
        ScrapbookBody
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
.base-scrapbook-container {
    margin: 1rem 0;
    padding: 1rem;
}

.go-back-arrow {
    position: absolute;
    left: 85px;
  }
  .go-forward-arrow {
    position: absolute;
    left: 70vw;
  }
  .go-back-arrow, .go-forward-arrow {
    height: 4vh;
    top: 90%;
  }

</style>