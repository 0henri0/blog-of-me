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
                meta: {
                    progress: {
                      func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                      ]
                    }
                },
            },
            // =============================================================================
            // Theme Routes
            // =============================================================================
            {
                path: '/posts',
                name: 'posts',
                component: () => import('../views/users/components/posts/Index.vue'),
                meta: {
                    progress: {
                      func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                      ]
                    }
                },
            },

            {
                path: '/about-me',
                name: 'about-me',
                component: () => import('../views/users/components/aboutMe/AboutMe.vue'),
                meta: {
                    progress: {
                      func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                      ]
                    }
                },
            }

        ]
    }]
});