// App Imports
import Login from '../../components/user/Login'
import Signup from '../../components/user/Signup'

// User routes
export default {
    login: {
        path: '/user/login',
        component: Login
    },

    signup: {
        path: '/user/signup',
        component: Signup
    }
}
