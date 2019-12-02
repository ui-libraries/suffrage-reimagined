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
    children: [{
    path: '/tab-about',
    component: BaseTabAbout,
    redirect: 'tab-about/page=1',
    children: [{
      path: 'page=1',
      component: TabAboutPage1
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
          }, {
            path: 'page=2',
            component: Tab1854IntroPage2,
          }],
        },
        {
          path: 'social-movements',
          component: BaseTab1854SocialMovements,
          redirect: 'social-movements/page=1',
          children: [{
              path: 'page=1',
              component: Tab1854SocialMovementsPage1,
            },
            {
              path: 'page=2',
              component: Tab1854SocialMovementsPage2
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
          }, ],
        },
        {
          path: 'legislative-battle',
          component: BaseTab1870LegislativeBattle,
          redirect: 'legislative-battle/page=1',
          children: [{
              path: 'page=1',
              component: Tab1870LegislativeBattlePage1,
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
          },
          {
            path: 'page=2',
            component: Tab1890IntroPage2,
          }, ],
        },
        {
          path: 'goal-unrealized',
          component: BaseTab1890GoalUnrealized,
          redirect: 'goal-unrealized/page=1',
          children: [{
              path: 'page=1',
              component: Tab1890GoalUnrealizedPage1,
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
            },
            {
              path: 'page=2',
              component: Tab1890OrganizingForTheVotePage2,
            },
            {
              path: 'page=3',
              component: Tab1890OrganizingForTheVotePage3,
            },
            {
              path: 'page=4',
              component: Tab1890OrganizingForTheVotePage4,
            },
            {
              path: 'page=5',
              component: Tab1890OrganizingForTheVotePage5,
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
            },
            {
              path: 'page=2',
              component: Tab1890BooneParadePage2,
            },
          ]
        }
      ]
    }],
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

export default router