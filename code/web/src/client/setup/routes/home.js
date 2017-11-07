// App Imports
import Home from '../../components/home/Home'
import Men from '../../components/home/Men'
import Women from '../../components/home/Women'
import HowItWorks from '../../components/home/HowItWorks'
import WhatsNew from '../../components/home/WhatsNew'

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