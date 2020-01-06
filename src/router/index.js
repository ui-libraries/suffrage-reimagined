import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseScrapbook from '../components/ScrapbookPieces/BaseScrapbook'
import ScrapbookBody from '../components/ScrapbookPieces/ScrapbookBody'

import BaseTabAbout from '../components/about/BaseTabAbout'
import TabAboutPage1 from '../components/about/TabAboutPage1'

import BaseTab1854 from '../components/1854/BaseTab1854'
import BaseTab1854Intro from '../components/1854/sub-tabs/intro/BaseTab1854Intro'
import Tab1854IntroPage1 from '../components/1854/sub-tabs/intro/Tab1854IntroPage1'
import Tab1854IntroPage2 from '../components/1854/sub-tabs/intro/Tab1854IntroPage2'
import BaseTab1854SocialMovements from '../components/1854/sub-tabs/social-movements/BaseTab1854SocialMovements'
import Tab1854SocialMovementsPage1 from '../components/1854/sub-tabs/social-movements/Tab1854SocialMovementsPage1'
import Tab1854SocialMovementsPage2 from '../components/1854/sub-tabs/social-movements/Tab1854SocialMovementsPage2'
import BaseTab1854AmeliaBloomer from '../components/1854/sub-tabs/amelia-bloomer/BaseTab1854AmeliaBloomer'
import Tab1854AmeliaBloomerPage1 from '../components/1854/sub-tabs/amelia-bloomer/Tab1854AmeliaBloomerPage1'

import BaseTab1870 from '../components/1870/BaseTab1870'
import BaseTab1870Intro from '../components/1870/sub-tabs/intro/BaseTab1870Intro'
import Tab1870IntroPage1 from '../components/1870/sub-tabs/intro/Tab1870IntroPage1'
import BaseTab1870LegislativeBattle from '../components/1870/sub-tabs/legislative-battle/BaseTab1870LegislativeBattle'
import Tab1870LegislativeBattlePage1 from '../components/1870/sub-tabs/legislative-battle/Tab1870LegislativeBattlePage1'
import BaseTab1870ScandalAndControversy from '../components/1870/sub-tabs/scandal-and-controversy/BaseTab1870ScandalAndControversy'
import Tab1870ScandalAndControversyPage1 from '../components/1870/sub-tabs/scandal-and-controversy/Tab1870ScandalAndControversyPage1'
import BaseTab1870Temperance from '../components/1870/sub-tabs/temperance/BaseTab1870Temperance'
import Tab1870TemperancePage1 from '../components/1870/sub-tabs/temperance/Tab1870TemperancePage1'

import BaseTab1890 from '../components/1890/BaseTab1890'
import BaseTab1890Intro from '../components/1890/sub-tabs/intro/BaseTab1890Intro'
import Tab1890IntroPage1 from '../components/1890/sub-tabs/intro/Tab1890IntroPage1'
import Tab1890IntroPage2 from '../components/1890/sub-tabs/intro/Tab1890IntroPage2'
import BaseTab1890GoalUnrealized from '../components/1890/sub-tabs/goal-unrealized/BaseTab1890GoalUnrealized'
import Tab1890GoalUnrealizedPage1 from '../components/1890/sub-tabs/goal-unrealized/Tab1890GoalUnrealizedPage1'
import BaseTab1890OrganizingForTheVote from '../components/1890/sub-tabs/organizing-for-the-vote/BaseTab1890OrganizingForTheVote'
import Tab1890OrganizingForTheVotePage1 from '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage1'
import Tab1890OrganizingForTheVotePage2 from '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage2'
import Tab1890OrganizingForTheVotePage3 from '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage3'
import Tab1890OrganizingForTheVotePage4 from '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage4'
import Tab1890OrganizingForTheVotePage5 from '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage5'
import BaseTab1890AfricanAmericanWomen from '../components/1890/sub-tabs/african-american-women/BaseTab1890AfricanAmericanWomen'
import Tab1890AfricanAmericanWomenPage1 from '../components/1890/sub-tabs/african-american-women/Tab1890AfricanAmericanWomenPage1'
import BaseTab1890BooneParade from '../components/1890/sub-tabs/boone-parade/BaseTab1890BooneParade'
import Tab1890BooneParadePage1 from '../components/1890/sub-tabs/boone-parade/Tab1890BooneParadePage1'
import Tab1890BooneParadePage2 from '../components/1890/sub-tabs/boone-parade/Tab1890BooneParadePage2'

import BaseTab1916 from '../components/1916/BaseTab1916'
import BaseTab1916Intro from '../components/1916/sub-tabs/intro/BaseTab1916Intro'
import Tab1916IntroPage1 from '../components/1916/sub-tabs/intro/Tab1916IntroPage1'
import BaseTab1916Referendum from '../components/1916/sub-tabs/referendum/BaseTab1916Referendum'
import Tab1916ReferendumPage1 from '../components/1916/sub-tabs/referendum/Tab1916ReferendumPage1'
import Tab1916ReferendumPage2 from '../components/1916/sub-tabs/referendum/Tab1916ReferendumPage2'
import BaseTab1916WarWork from '../components/1916/sub-tabs/war-work/BaseTab1916WarWork'
import Tab1916WarWorkPage1 from '../components/1916/sub-tabs/war-work/Tab1916WarWorkPage1'
import BaseTab1916TheWinningPlan  from '../components/1916/sub-tabs/the-winning-plan/BaseTab1916TheWinningPlan'
import Tab1916TheWinningPlanPage1 from '../components/1916/sub-tabs/the-winning-plan/Tab1916TheWinningPlanPage1'

import BaseTab1920 from '../components/1920/BaseTab1920'
import BaseTab1920Intro from '../components/1920/sub-tabs/intro/BaseTab1920Intro'
import Tab1920IntroPage1 from '../components/1920/sub-tabs/intro/Tab1920IntroPage1'
import BaseTab1920LeagueOfWomenVoters from '../components/1920/sub-tabs/league-of-women-voters/BaseTab1920LeagueOfWomenVoters'
import Tab1920LeagueOfWomenVotersPage1 from '../components/1920/sub-tabs/league-of-women-voters/Tab1920LeagueOfWomenVotersPage1'
import BaseTab1920SuffrageMemorial from '../components/1920/sub-tabs/suffrage-memorial/BaseTab1920SuffrageMemorial'
import Tab1920SufffrageMemorialPage1 from '../components/1920/sub-tabs/suffrage-memorial/Tab1920SuffrageMemorialPage1'
import BaseTab1920WomenInPoliticsToday from '../components/1920/sub-tabs/women-in-politics-today/BaseTab1920WomenInPoliticsToday'
import Tab1920WomenInPoliticsTodayPage1 from '../components/1920/sub-tabs/women-in-politics-today/Tab1920WomenInPoliticsTodayPage1'
import Tab1920WomenInPoliticsTodayPage2 from '../components/1920/sub-tabs/women-in-politics-today/Tab1920WomenInPoliticsTodayPage2'

import ImageIndex from '../components/external-resources/ImageIndex'
import Resources from '../components/external-resources/Resources'
import ArchivalCollectionsGuide from '../components/external-resources/ArchivalCollectionsGuide'

const routes = [{
  path: '/',
  component: BaseScrapbook,
  children: [{
    path: '',
    component: ScrapbookBody,
    redirect: '/tab-about',
    children: [
    {
      path: '/tab-about',
      component: BaseTabAbout,
      redirect: 'tab-about/page=1',
      children: [{
        path: 'page=1',
        component: TabAboutPage1,
        name: 'TabAboutPage1'
      }]
    },
    {
      //1854
      path: 'tab-1854',
      component: BaseTab1854,
      children: [{
          path: 'intro',
          component: BaseTab1854Intro,
          redirect: 'intro/page=1',

          children: [{
            path: 'page=1',
            component: Tab1854IntroPage1,
            name: 'Tab1854IntroPage1'
          }, {
            path: 'page=2',
            component: Tab1854IntroPage2,
            name: 'Tab1854IntroPage2'
          }],
        },
        {
          path: 'social-movements',
          component: BaseTab1854SocialMovements,
          redirect: 'social-movements/page=1',
          children: [{
              path: 'page=1',
              component: Tab1854SocialMovementsPage1,
              name: 'Tab1854SocialMovementsPage1'
            },
            {
              path: 'page=2',
              component: Tab1854SocialMovementsPage2,
              name: 'Tab1854SocialMovementsPage2'
            }
          ]
        },
        {
          path: 'amelia-bloomer',
          component: BaseTab1854AmeliaBloomer,
          redirect: 'amelia-bloomer/page=1',
          children: [{
              path: 'page=1',
              component: Tab1854AmeliaBloomerPage1,
              name: 'Tab1854AmeliaBloomerPage1'
            },
          ]
        }
      ]
    },
    {
      //1870
      path: 'tab-1870',
      component: BaseTab1870,
      children: [{
          path: 'intro',
          component: BaseTab1870Intro,
          redirect: 'intro/page=1',

          children: [{
            path: 'page=1',
            component: Tab1870IntroPage1,
            name: 'Tab1870IntroPage1'
          }, ],
        },
        {
          path: 'legislative-battle',
          component: BaseTab1870LegislativeBattle,
          redirect: 'legislative-battle/page=1',
          children: [{
              path: 'page=1',
              component: Tab1870LegislativeBattlePage1,
              name: 'Tab1870LegislativeBattlePage1'
            },
          ]
        },
        {
          path: 'scandal-and-controversy',
          component: BaseTab1870ScandalAndControversy,
          redirect: 'scandal-and-controversy/page=1',

          children: [{
              path: 'page=1',
              component: Tab1870ScandalAndControversyPage1,
              name: 'Tab1870ScandalAndControversyPage1'
            },
          ]
        },
        {
          path: 'temperance',
          component: BaseTab1870Temperance,
          redirect: 'temperance/page=1',

          children: [{
              path: 'page=1',
              component: Tab1870TemperancePage1,
              name: 'Tab1870TemperancePage1'
            },
          ]
        }
      ]
    },
    {
      //1890
      path: 'tab-1890',
      component: BaseTab1890,
      children: [{
          path: 'intro',
          component: BaseTab1890Intro,
          redirect: 'intro/page=1',

          children: [{
            path: 'page=1',
            component: Tab1890IntroPage1,
            name: 'Tab1890IntroPage1'
          },
          {
            path: 'page=2',
            component: Tab1890IntroPage2,
            name: 'Tab1890IntroPage2'
          }, ],
        },
        {
          path: 'goal-unrealized',
          component: BaseTab1890GoalUnrealized,
          redirect: 'goal-unrealized/page=1',
          children: [{
              path: 'page=1',
              component: Tab1890GoalUnrealizedPage1,
              name: 'Tab1890GoalUnrealizedPage1'
            },
          ]
        },
        {
          path: 'organizing-for-the-vote',
          component: BaseTab1890OrganizingForTheVote,
          redirect: 'organizing-for-the-vote/page=1',
          children: [{
              path: 'page=1',
              component: Tab1890OrganizingForTheVotePage1,
              name: 'Tab1890OrganizingForTheVotePage1'
            },
            {
              path: 'page=2',
              component: Tab1890OrganizingForTheVotePage2,
              name: 'Tab1890OrganizingForTheVotePage2'
            },
            {
              path: 'page=3',
              component: Tab1890OrganizingForTheVotePage3,
              name: 'Tab1890OrganizingForTheVotePage3'
            },
            {
              path: 'page=4',
              component: Tab1890OrganizingForTheVotePage4,
              name: 'Tab1890OrganizingForTheVotePage4'
            },
            {
              path: 'page=5',
              component: Tab1890OrganizingForTheVotePage5,
              name: 'Tab1890OrganizingForTheVotePage5'
            },
          ]
        },
        {
          path: 'african-american-women',
          component: BaseTab1890AfricanAmericanWomen,
          redirect: 'african-american-women/page=1',

          children: [{
              path: 'page=1',
              component: Tab1890AfricanAmericanWomenPage1,
              name: 'Tab1890AfricanAmericanWomenPage1'
            },
          ]
        },
        {
          path: 'boone-parade',
          component: BaseTab1890BooneParade,
          redirect: 'boone-parade/page=1',
          
          children: [{
              path: 'page=1',
              component: Tab1890BooneParadePage1,
              name: 'Tab1890BooneParadePage1'
            },
            {
              path: 'page=2',
              component: Tab1890BooneParadePage2,
              name: 'Tab1890BooneParadePage2'
            },
          ]
        }
      ]
    },
    {
      //1916
      path: 'tab-1916',
      component: BaseTab1916,
      children: [{
          path: 'intro',
          component: BaseTab1916Intro,
          redirect: 'intro/page=1',

          children: [{
            path: 'page=1',
            component: Tab1916IntroPage1,
            name: 'Tab1916IntroPage1'
          },
          ],
        },
        {
          path: 'referendum',
          component: BaseTab1916Referendum,
          redirect: 'referendum/page=1',
          children: [{
              path: 'page=1',
              component: Tab1916ReferendumPage1,
              name: 'Tab1916ReferendumPage1'
            },
            {
              path: 'page=2',
              component: Tab1916ReferendumPage2,
              name: 'Tab1916ReferendumPage2'
            }
          ]
        },
        {
          path: 'war-work',
          component: BaseTab1916WarWork,
          redirect: 'war-work/page=1',
          children: [{
              path: 'page=1',
              component: Tab1916WarWorkPage1,
              name: 'Tab1916WarWorkPage1'
            },
          ]
        },
        {
          path: 'the-winning-plan',
          component: BaseTab1916TheWinningPlan,
          redirect: 'the-winning-plan/page=1',

          children: [{
              path: 'page=1',
              component: Tab1916TheWinningPlanPage1,
              name: 'Tab1916TheWinningPlanPage1'
            },
          ]
        },
      ]
    },
    {
      //1920
      path: 'tab-1920',
      component: BaseTab1920,
      children: [{
          path: 'intro',
          component: BaseTab1920Intro,
          redirect: 'intro/page=1',

          children: [{
            path: 'page=1',
            component: Tab1920IntroPage1,
            name: 'Tab1920IntroPage1'
          },
          ],
        },
        {
          path: 'league-of-women-voters',
          component: BaseTab1920LeagueOfWomenVoters,
          redirect: 'league-of-women-voters/page=1',
          children: [{
              path: 'page=1',
              component: Tab1920LeagueOfWomenVotersPage1,
              name: 'Tab1920LeagueOfWomenVotersPage1'
            },
          ]
        },
        {
          path: 'suffrage-memorial',
          component: BaseTab1920SuffrageMemorial,
          redirect: 'suffrage-memorial/page=1',
          children: [{
              path: 'page=1',
              component: Tab1920SufffrageMemorialPage1,
              name: 'Tab1920SufffrageMemorialPage1'
            },
          ]
        },
        {
          path: 'women-in-politics-today',
          component: BaseTab1920WomenInPoliticsToday,
          redirect: 'women-in-politics-today/page=1',

          children: [{
              path: 'page=1',
              component: Tab1920WomenInPoliticsTodayPage1,
              name: 'Tab1920WomenInPoliticsTodayPage1'
            },
            {
              path: 'page=2',
              component: Tab1920WomenInPoliticsTodayPage2,
              name: 'Tab1920WomenInPoliticsTodayPage2'
            }
          ]
        },
      ]
    }
  ],
  }],
},
{path: '/image-index', component: ImageIndex},
{path: '/resources', component: Resources},
{path: '/archival-collections-guide', component: ArchivalCollectionsGuide}
]

const router = new VueRouter({
  routes,
  mode: 'history' //might funk things up during production
})

const routeNames = ['TabAboutPage1', 'Tab1854IntroPage1', 'Tab1854IntroPage2', 'Tab1854AmeliaBloomerPage1', 'Tab1854SocialMovementsPage1', 'Tab1854SocialMovementsPage2',
                    'Tab1870IntroPage1', 'Tab1870LegislativeBattlePage1', 'Tab1870ScandalAndControversyPage1', 'Tab1870TemperancePage1',
                    'Tab1890IntroPage1', 'Tab1890IntroPage2', 'Tab1890GoalUnrealizedPage1', 'Tab1890OrganizingForTheVotePage1', 'Tab1890OrganizingForTheVotePage2', 'Tab1890OrganizingForTheVotePage3', 'Tab1890OrganizingForTheVotePage4', 'Tab1890OrganizingForTheVotePage5', 'Tab1890AfricanAmericanWomenPage1', 'Tab1890BooneParadePage1', 'Tab1890BooneParadePage2',
                    'Tab1916IntroPage1', 'Tab1916ReferendumPage1', 'Tab1916ReferendumPage2', 'Tab1916WarWorkPage1', 'Tab1916TheWinningPlanPage1',
                    'Tab1920IntroPage1', 'Tab1920LeagueOfWomenVotersPage1', 'Tab1920SufffrageMemorialPage1', 'Tab1920WomenInPoliticsTodayPage1', 'Tab1920WomenInPoliticsTodayPage2']

export default router
export { routeNames }