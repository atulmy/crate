// App Imports

// Home components
import Home from '../components/home/Home'
import HomeMen from '../components/home/Men'
import HomeWomen from '../components/home/Women'
import HomeHowItWorks from '../components/home/HowItWorks'

// User components
import UserLogin from '../components/user/Login'
import UserSignup from '../components/user/Signup'

// Home routes
export const home = {
    home: {
        path: '/',
        component: Home,
        exact: true
    },

    men: {
        path: '/men',
        component: HomeMen
    },

    women: {
        path: '/women',
        component: HomeWomen
    },

    howItWorks: {
        path: '/how-it-works',
        component: HomeHowItWorks
    }
}

// User routes
export const user = {
    login: {
        path: '/user/login',
        component: UserLogin
    },

    signup: {
        path: '/user/signup',
        component: UserSignup
    }
}

// Combined routes
const routes = Object.assign(home, user)

export default routes