// App Imports
import Detail from '../../components/product/Detail'

// User routes
export default {
    product: {
        path: (slug = ':slug') => (`/product/${ slug }`),
        component: Detail
    }
}
