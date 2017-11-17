// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes
export default {
    login: {
        path: '/user/login',
        component: Login
    },

    signup: {
        path: '/user/signup',
        component: Signup
    },

    profile: {
        path: '/user/profile',
        component: Profile,
        auth: true
    },

    subscriptions: {
        path: '/user/subscriptions',
        component: Subscriptions,
        auth: true
    }
}
