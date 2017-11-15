// App Imports
import { APP_URL_API } from '../configs'
import home from './home'
import user from './user'

// Combined routes
export const routes = Object.assign(home, user)

// API Routes
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API