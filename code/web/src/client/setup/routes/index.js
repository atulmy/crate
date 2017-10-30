// App Imports
import { APP_URL_API } from '../configs'
import home from './home'
import user from './user'

// Combined routes
export const routes = Object.assign(home, user)

// API Routes
export const routesApi = APP_URL_API