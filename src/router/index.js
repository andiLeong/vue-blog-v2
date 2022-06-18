import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/store/user'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { redirectIfLogged: true },
  },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   component: () => import('@/views/Logout.vue'),
  // },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/views/Posts.vue'),
  },
  {
    path: '/posts/:slug',
    name: 'posts.show',
    component: () => import('@/views/Post.vue'),
    props: true,
  },
  {
    path: '/posts/edit/:slug',
    name: 'posts.edit',
    component: () => import('@/views/post/Edit.vue'),
    props: true,
    meta: { adminOnly: true },
  },
  {
    path: '/posts/create',
    name: 'post.create',
    component: () => import('@/views/post/Create.vue'),
    meta: { adminOnly: true },
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/SimpleForm.vue'),
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('@/views/Tabs.vue'),
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import('@/views/Uploader.vue'),
    meta: { adminOnly: true },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/Gallery.vue'),
  },
  {
    path: '/when-visible',
    name: 'when-visible',
    component: () => import('@/views/WhenVisible.vue'),
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('@/views/Pagination.vue'),
  },
  {
    path: '/order',
    name: 'order.index',
    component: () => import('@/views/order/Index.vue'),
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/Notes.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'border-b-sky-500 text-gray-900 border-b-2',
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  let loggedIn = userStore.isLoggedIn;
  let isAdmin = userStore.isAdmin;

  if (to.meta.adminOnly && !loggedIn) {
    return { name: 'login' };
  }

  if (to.meta.adminOnly && !isAdmin) {
    return { name: 'home' };
  }

  if (to.meta.auth && !loggedIn) {
    return { name: 'login' };
  }

  if (to.meta.redirectIfLogged && loggedIn) {
    return { name: 'home' };
  }
});

export default router;
