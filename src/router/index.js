import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/store/user'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { redirectIfLogged: true },
  },
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
    path: '/drop-down',
    name: 'drop.down',
    component: () => import('@/views/DropDown.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/Modal.vue'),
  },
  {
    path: '/count-up',
    name: 'count.up',
    component: () => import('@/views/CountUp.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('@/views/Grid.vue'),
  },
  {
    path: '/flex-grid',
    name: 'flex.grid',
    component: () => import('@/views/FlexGrid.vue'),
  },
  {
    path: '/css-grid',
    name: 'css.grid',
    component: () => import('@/views/CssGrid.vue'),
  },
  {
    path: '/twitter-rebuild',
    name: 'twitter.rebuild',
    component: () => import('@/views/TwitterRebuild.vue'),
  },
  {
      path: '/components',
      name: 'components',
      component: () => import('@/views/Components.vue'),
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
    name: 'when.visible',
    component: () => import('@/views/WhenVisible.vue'),
  },
  {
    path: '/fix-to-top',
    name: 'fix.to.top',
    component: () => import('@/views/FixToTopPage.vue'),
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
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/Resume.vue'),
  },
  {
    path: '/location-distance',
    name: 'location.distance',
    component: () => import('@/views/LocationDistance.vue'),
  },
  {
    path: '/resume-generator',
    name: 'resume.generator',
    component: () => import('@/views/ResumeGenerator.vue'),
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('@/views/Navigation.vue'),
  },
  {
    path: '/media-object',
    name: 'media.object',
    component: () => import('@/views/MediaObject.vue'),
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
