// App Imports
import Dashboard from '../../modules/admin/Dashboard'
import ProductList from '../../modules/admin/product/List'
import ProductCreateOrEdit from '../../modules/admin/product/CreateOrEdit'

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
        component: ProductCreateOrEdit,
        auth: true
    },

    productEdit: {
        path: (id = ':id') => (`/admin/product/${ id }/edit`),
        component: ProductCreateOrEdit,
        auth: true
    },

    // User
    userList: {
        path: '/admin/users',
        component: Dashboard,
        auth: true
    }
}
