
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/header', component: () => import('components/header.vue') },
      { path: '/contact', component: () => import('components/home/myContact.vue') },
      { path: '/skill', component: () => import('components/home/mySkill.vue') },
      { path: '/project', component: () => import('components/home/myProject.vue') },
      { path: '/social', component: () => import('components/home/mySocial.vue') },
      { path: '/about', component: () => import('components/home/myPresentation.vue') },
      { path: '/news', component: () => import('components/home/myNews.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
