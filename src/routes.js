import Home from './components/Home.vue';
import Header from './components/Header.vue';

const User = resolve => {
    require.ensure([
        "./components/user/User.vue"
    ], () => {
        resolve(require('./components/user/User.vue'));
    }, "user");
};
const UserStart = resolve => {
    require.ensure([
        "./components/user/UserStart.vue"
    ], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, "user");
};
const UserDetail = resolve => {
    require.ensure([
        "./components/user/UserDetail.vue"
    ], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, "user");
};
const UserEdit = resolve => {
    require.ensure([
        "./components/user/UserEdit.vue"
    ], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, "user");
};
const Accounts = resolve => {
    require.ensure([
        "./components/Accounts.vue"
    ], () => {
        resolve(require('./components/Accounts.vue'));
    }, "accounts");
};
const AccountDetails = resolve => {
    require.ensure([
        "./components/AccountDetails.vue"
    ], () => {
        resolve(require('./components/AccountDetails.vue'));
    }, "accounts");
};

export const routes = [{
        path: '/',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [{
                path: '',
                component: UserStart
            }, {
                path: ':id',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log("inside route setup");
                    next();
                }
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            },
        ]
    },
    {
        path: '/accounts',
        components: {
            default: Accounts
        },
        name: 'accounts',
        children: [{
            path: ':id',
            component: AccountDetails,
            name: 'accountDetails'
        }]
    },
    {
        path: '/redirect-me',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*',
        redirect: '/'
    },
];