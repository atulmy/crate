// App Imports
import Home from '../../modules/home/Home'
import Men from '../../modules/home/Men'
import Women from '../../modules/home/Women'
import HowItWorks from '../../modules/home/HowItWorks'
import WhatsNew from '../../modules/home/WhatsNew'

// Home routes
export default {
    home: {
        path: '/',
        component: Home,
        exact: true
    },

    men: {
        path: '/men',
        component: Men
    },

    women: {
        path: '/women',
        component: Women
    },

    howItWorks: {
        path: '/how-it-works',
        component: HowItWorks
    },

    whatsNew: {
        path: '/whats-new',
        component: WhatsNew
    }
}