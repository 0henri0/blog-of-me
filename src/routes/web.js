import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [{
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        path: '',
        component: () => import('../views/users/layouts/Index.vue'),
        children: [
            // =============================================================================
            // Theme Routes
            // =============================================================================
            {
                path: '/',
                name: 'home',
                component: () => import('../views/users/components/home/Index.vue'),
            },
            // =============================================================================
            // Theme Routes
            // =============================================================================
            {
                path: '/posts',
                name: 'posts',
                component: () => import('../views/users/components/posts/Index.vue'),
            },

            {
                path: '/about-me',
                name: 'about-me',
                component: () => import('../views/users/components/aboutMe/AboutMe.vue'),
            }

        ]
    }]
});