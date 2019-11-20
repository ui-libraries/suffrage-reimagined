import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BaseScrapbook from '../components/ScrapbookPieces/BaseScrapbook'
import ScrapbookBody from '../components/ScrapbookPieces/ScrapbookBody'

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

const routes = [{
  path: '/',
  component: BaseScrapbook,
  children: [{
    path: '',
    component: ScrapbookBody,
    children: [{
      //1854
      path: 'tab-1854',
      component: BaseTab1854,
      children: [{
          path: 'intro',
          component: BaseTab1854Intro,

          children: [{
            path: 'pages/1',
            component: Tab1854IntroPage1,
          }, {
            path: 'pages/2',
            component: Tab1854IntroPage2,
          }],
        },
        {
          path: 'social-movements',
          component: BaseTab1854SocialMovements,
          children: [{
              path: 'pages/1',
              component: Tab1854SocialMovementsPage1,
            },
            {
              path: 'pages/2',
              component: Tab1854SocialMovementsPage2
            }
          ]
        },
        {
          path: 'amelia-bloomer',
          component: BaseTab1854AmeliaBloomer,
          children: [{
              path: 'pages/1',
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

          children: [{
            path: 'pages/1',
            component: Tab1870IntroPage1,
          }, ],
        },
        {
          path: 'legislative-battle',
          component: BaseTab1870LegislativeBattle,
          children: [{
              path: 'pages/1',
              component: Tab1870LegislativeBattlePage1,
            },
          ]
        },
        {
          path: 'scandal-and-controversy',
          component: BaseTab1870ScandalAndControversy,
          children: [{
              path: 'pages/1',
              component: Tab1870ScandalAndControversyPage1,
            },
          ]
        },
        {
          path: 'temperance',
          component: BaseTab1870Temperance,
          children: [{
              path: 'pages/1',
              component: Tab1870TemperancePage1,
            },
          ]
        }
      ]
    }],
  }],
}]

const router = new VueRouter({
  routes,
  mode: 'history' //might funk things up during production
})

export default router