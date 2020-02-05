import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseScrapbook from '../components/ScrapbookPieces/BaseScrapbook'
import ScrapbookBody from '../components/ScrapbookPieces/ScrapbookBody'

import BaseTabAbout from '../components/about/BaseTabAbout'
import TabAboutPage1 from '../components/about/TabAboutPage1' 

// const BaseScrapbook = () => import('../components/ScrapbookPieces/BaseScrapbook')
// const ScrapbookBody = () => import('../components/ScrapbookPieces/ScrapbookBody')

// const BaseTabAbout = () => import('../components/about/BaseTabAbout') 
// const TabAboutPage1 = () => import('../components/about/TabAboutPage1') 

const BaseTab1854 = () => import(/* webpackChunkName: "1854" */ '../components/1854/BaseTab1854') 
const BaseTab1854Intro = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/intro/BaseTab1854Intro') 
const Tab1854IntroPage1 = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/intro/Tab1854IntroPage1') 
const Tab1854IntroPage2 = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/intro/Tab1854IntroPage2') 
const BaseTab1854SocialMovements = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/social-movements/BaseTab1854SocialMovements') 
const Tab1854SocialMovementsPage1 = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/social-movements/Tab1854SocialMovementsPage1') 
const Tab1854SocialMovementsPage2 = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/social-movements/Tab1854SocialMovementsPage2') 
const BaseTab1854AmeliaBloomer = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/amelia-bloomer/BaseTab1854AmeliaBloomer') 
const Tab1854AmeliaBloomerPage1 = () => import(/* webpackChunkName: "1854" */ '../components/1854/sub-tabs/amelia-bloomer/Tab1854AmeliaBloomerPage1') 

const BaseTab1870 = () => import(/* webpackChunkName: "1870" */ '../components/1870/BaseTab1870') 
const BaseTab1870Intro = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/intro/BaseTab1870Intro') 
const Tab1870IntroPage1 = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/intro/Tab1870IntroPage1') 
const BaseTab1870LegislativeBattle = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/legislative-battle/BaseTab1870LegislativeBattle') 
const Tab1870LegislativeBattlePage1 = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/legislative-battle/Tab1870LegislativeBattlePage1') 
const BaseTab1870ScandalAndControversy = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/scandal-and-controversy/BaseTab1870ScandalAndControversy') 
const Tab1870ScandalAndControversyPage1 = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/scandal-and-controversy/Tab1870ScandalAndControversyPage1') 
const BaseTab1870Temperance = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/temperance/BaseTab1870Temperance') 
const Tab1870TemperancePage1 = () => import(/* webpackChunkName: "1870" */ '../components/1870/sub-tabs/temperance/Tab1870TemperancePage1') 

const BaseTab1890 = () => import(/* webpackChunkName: "1890" */ '../components/1890/BaseTab1890') 
const BaseTab1890Intro = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/intro/BaseTab1890Intro') 
const Tab1890IntroPage1 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/intro/Tab1890IntroPage1') 
const Tab1890IntroPage2 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/intro/Tab1890IntroPage2') 
const BaseTab1890GoalUnrealized = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/goal-unrealized/BaseTab1890GoalUnrealized') 
const Tab1890GoalUnrealizedPage1 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/goal-unrealized/Tab1890GoalUnrealizedPage1') 
const BaseTab1890OrganizingForTheVote = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/BaseTab1890OrganizingForTheVote') 
const Tab1890OrganizingForTheVotePage1 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage1') 
const Tab1890OrganizingForTheVotePage2 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage2') 
const Tab1890OrganizingForTheVotePage3 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage3') 
const Tab1890OrganizingForTheVotePage4 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage4') 
const Tab1890OrganizingForTheVotePage5 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/organizing-for-the-vote/Tab1890OrganizingForTheVotePage5') 
const BaseTab1890AfricanAmericanWomen = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/african-american-women/BaseTab1890AfricanAmericanWomen') 
const Tab1890AfricanAmericanWomenPage1 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/african-american-women/Tab1890AfricanAmericanWomenPage1') 
const BaseTab1890BooneParade = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/boone-parade/BaseTab1890BooneParade') 
const Tab1890BooneParadePage1 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/boone-parade/Tab1890BooneParadePage1') 
const Tab1890BooneParadePage2 = () => import(/* webpackChunkName: "1890" */ '../components/1890/sub-tabs/boone-parade/Tab1890BooneParadePage2') 

const BaseTab1916 = () => import(/* webpackChunkName: "1916" */ '../components/1916/BaseTab1916') 
const BaseTab1916Intro = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/intro/BaseTab1916Intro') 
const Tab1916IntroPage1 = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/intro/Tab1916IntroPage1') 
const BaseTab1916Referendum = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/referendum/BaseTab1916Referendum') 
const Tab1916ReferendumPage1 = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/referendum/Tab1916ReferendumPage1') 
const Tab1916ReferendumPage2 = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/referendum/Tab1916ReferendumPage2') 
const BaseTab1916WarWork = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/war-work/BaseTab1916WarWork') 
const Tab1916WarWorkPage1 = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/war-work/Tab1916WarWorkPage1') 
const BaseTab1916TheWinningPlan  = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/the-winning-plan/BaseTab1916TheWinningPlan') 
const Tab1916TheWinningPlanPage1 = () => import(/* webpackChunkName: "1916" */ '../components/1916/sub-tabs/the-winning-plan/Tab1916TheWinningPlanPage1') 

const BaseTab1920 = () => import(/* webpackChunkName: "1920" */ '../components/1920/BaseTab1920') 
const BaseTab1920Intro = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/intro/BaseTab1920Intro') 
const Tab1920IntroPage1 = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/intro/Tab1920IntroPage1') 
const BaseTab1920LeagueOfWomenVoters = () => import( /* webpackChunkName: "1920" */'../components/1920/sub-tabs/league-of-women-voters/BaseTab1920LeagueOfWomenVoters') 
const Tab1920LeagueOfWomenVotersPage1 = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/league-of-women-voters/Tab1920LeagueOfWomenVotersPage1') 
const BaseTab1920SuffrageMemorial = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/suffrage-memorial/BaseTab1920SuffrageMemorial') 
const Tab1920SufffrageMemorialPage1 = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/suffrage-memorial/Tab1920SuffrageMemorialPage1') 
const BaseTab1920WomenInPoliticsToday = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/women-in-politics-today/BaseTab1920WomenInPoliticsToday') 
const Tab1920WomenInPoliticsTodayPage1 = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/women-in-politics-today/Tab1920WomenInPoliticsTodayPage1') 
const Tab1920WomenInPoliticsTodayPage2 = () => import(/* webpackChunkName: "1920" */ '../components/1920/sub-tabs/women-in-politics-today/Tab1920WomenInPoliticsTodayPage2') 

const ImageIndex = () => import(/* webpackChunkName: "external-resources" */ '../components/external-resources/ImageIndex') 
const Resources = () => import(/* webpackChunkName: "external-resources" */ '../components/external-resources/Resources') 
const ArchivalCollectionsGuide = () => import(/* webpackChunkName: "external-resources" */ '../components/external-resources/ArchivalCollectionsGuide') 

const routes = [{
  path: '/',
  component: BaseScrapbook,
  children: [{
    path: '',
    component: ScrapbookBody,
    redirect: '/about',
    children: [
    {
      path: '/about',
      component: BaseTabAbout,
      redirect: 'about',
      children: [{
        path: '',
        component: TabAboutPage1,
        name: 'TabAboutPage1'
      }]
    },
    {
      //1854
      path: '1854',
      component: BaseTab1854,
      children: [{
          path: 'intro',
          component: BaseTab1854Intro,
          redirect: 'intro',

          children: [{
            path: '',
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
          redirect: 'social-movements',
          children: [{
              path: '',
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
          redirect: 'amelia-bloomer',
          children: [{
              path: '',
              component: Tab1854AmeliaBloomerPage1,
              name: 'Tab1854AmeliaBloomerPage1'
            },
          ]
        }
      ]
    },
    {
      //1870
      path: '1870',
      component: BaseTab1870,
      children: [{
          path: 'intro',
          component: BaseTab1870Intro,
          redirect: 'intro',

          children: [{
            path: '',
            component: Tab1870IntroPage1,
            name: 'Tab1870IntroPage1'
          }, ],
        },
        {
          path: 'legislative-battle',
          component: BaseTab1870LegislativeBattle,
          redirect: 'legislative-battle',
          children: [{
              path: '',
              component: Tab1870LegislativeBattlePage1,
              name: 'Tab1870LegislativeBattlePage1'
            },
          ]
        },
        {
          path: 'scandal-and-controversy',
          component: BaseTab1870ScandalAndControversy,
          redirect: 'scandal-and-controversy',

          children: [{
              path: '',
              component: Tab1870ScandalAndControversyPage1,
              name: 'Tab1870ScandalAndControversyPage1'
            },
          ]
        },
        {
          path: 'temperance',
          component: BaseTab1870Temperance,
          redirect: 'temperance',

          children: [{
              path: '',
              component: Tab1870TemperancePage1,
              name: 'Tab1870TemperancePage1'
            },
          ]
        }
      ]
    },
    {
      //1890
      path: '1890',
      component: BaseTab1890,
      children: [{
          path: 'intro',
          component: BaseTab1890Intro,
          redirect: 'intro',

          children: [{
            path: '',
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
          redirect: 'goal-unrealized',
          children: [{
              path: '',
              component: Tab1890GoalUnrealizedPage1,
              name: 'Tab1890GoalUnrealizedPage1'
            },
          ]
        },
        {
          path: 'organizing-for-the-vote',
          component: BaseTab1890OrganizingForTheVote,
          redirect: 'organizing-for-the-vote',
          children: [{
              path: '',
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
          redirect: 'african-american-women',

          children: [{
              path: '',
              component: Tab1890AfricanAmericanWomenPage1,
              name: 'Tab1890AfricanAmericanWomenPage1'
            },
          ]
        },
        {
          path: 'boone-parade',
          component: BaseTab1890BooneParade,
          redirect: 'boone-parade',
          
          children: [{
              path: '',
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
      path: '1916',
      component: BaseTab1916,
      children: [{
          path: 'intro',
          component: BaseTab1916Intro,
          redirect: 'intro',

          children: [{
            path: '',
            component: Tab1916IntroPage1,
            name: 'Tab1916IntroPage1'
          },
          ],
        },
        {
          path: 'referendum',
          component: BaseTab1916Referendum,
          redirect: 'referendum',
          children: [{
              path: '',
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
          redirect: 'war-work',
          children: [{
              path: '',
              component: Tab1916WarWorkPage1,
              name: 'Tab1916WarWorkPage1'
            },
          ]
        },
        {
          path: 'the-winning-plan',
          component: BaseTab1916TheWinningPlan,
          redirect: 'the-winning-plan',

          children: [{
              path: '',
              component: Tab1916TheWinningPlanPage1,
              name: 'Tab1916TheWinningPlanPage1'
            },
          ]
        },
      ]
    },
    {
      //1920
      path: '1920',
      component: BaseTab1920,
      children: [{
          path: 'intro',
          component: BaseTab1920Intro,
          redirect: 'intro',

          children: [{
            path: '',
            component: Tab1920IntroPage1,
            name: 'Tab1920IntroPage1'
          },
          ],
        },
        {
          path: 'league-of-women-voters',
          component: BaseTab1920LeagueOfWomenVoters,
          redirect: 'league-of-women-voters',
          children: [{
              path: '',
              component: Tab1920LeagueOfWomenVotersPage1,
              name: 'Tab1920LeagueOfWomenVotersPage1'
            },
          ]
        },
        {
          path: 'suffrage-memorial',
          component: BaseTab1920SuffrageMemorial,
          redirect: 'suffrage-memorial',
          children: [{
              path: '',
              component: Tab1920SufffrageMemorialPage1,
              name: 'Tab1920SufffrageMemorialPage1'
            },
          ]
        },
        {
          path: 'women-in-politics-today',
          component: BaseTab1920WomenInPoliticsToday,
          redirect: 'women-in-politics-today',

          children: [{
              path: '',
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
{path: '/archival-collections-guide', component: ArchivalCollectionsGuide},
{path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes,
  mode: 'history', //might funk things up during production
  base: '/suffrage/'
})

const routeNames = ['TabAboutPage1', 'Tab1854IntroPage1', /*'Tab1854IntroPage2',*/ 'Tab1854AmeliaBloomerPage1', 'Tab1854SocialMovementsPage1', /*'Tab1854SocialMovementsPage2',*/
                    'Tab1870IntroPage1', 'Tab1870LegislativeBattlePage1', 'Tab1870ScandalAndControversyPage1', 'Tab1870TemperancePage1',
                    'Tab1890IntroPage1', /*'Tab1890IntroPage2',*/ 'Tab1890GoalUnrealizedPage1', 'Tab1890OrganizingForTheVotePage1', /*'Tab1890OrganizingForTheVotePage2',*/ /*'Tab1890OrganizingForTheVotePage3',*/ /*'Tab1890OrganizingForTheVotePage4',*/ /*'Tab1890OrganizingForTheVotePage5',*/ 'Tab1890AfricanAmericanWomenPage1', 'Tab1890BooneParadePage1', /*'Tab1890BooneParadePage2',*/
                    'Tab1916IntroPage1', 'Tab1916ReferendumPage1', /*'Tab1916ReferendumPage2',*/ 'Tab1916WarWorkPage1', 'Tab1916TheWinningPlanPage1',
                    'Tab1920IntroPage1', 'Tab1920LeagueOfWomenVotersPage1', 'Tab1920SufffrageMemorialPage1', 'Tab1920WomenInPoliticsTodayPage1', /*'Tab1920WomenInPoliticsTodayPage2'*/]

export default router
export { routeNames }