// App Imports
import Dashboard from '../../modules/admin/Dashboard'
import ProductList from '../../modules/admin/product/List'
import ProductCreate from '../../modules/admin/product/Create'

// Admin routes
export default {
    // Dashboard
    dashboard: {
        path: '/admin/dashboard',
        component: Dashboard,
        auth: true
    },

    // Product
    productList: {
        path: '/admin/products',
        component: ProductList,
        auth: true
    },

    productCreate: {
        path: '/admin/product/create',
        component: ProductCreate,
        auth: true
    },

    productEdit: {
        path: (id = ':id') => (`/admin/product/${ id }/edit`),
        component: ProductList,
        auth: true
    },

    // User
    userList: {
        path: '/admin/users',
        component: Dashboard,
        auth: true
    }
}
