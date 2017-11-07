// App Imports
import Login from '../../components/user/Login'
import Signup from '../../components/user/Signup'
import Profile from '../../components/user/Profile'
import Subscriptions from '../../components/user/Subscriptions'

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
