// import { createRouter, createWebHistory } from 'vue-router';
// // import Vue from 'vue';
// // import VueRouter from 'vue-router';
// import Login from '@/components/LoginComponent.vue';
// import Register from '@/components/RegisterComponent.vue';
// import Dashboard from '@/components/DashboardComponent.vue';

// // Vue.use(VueRouter);

// // const routes = [
// //   {
// //     path: '/login',
// //     name: 'LoginComponent',
// //     component: Login,
// //   },
// //   {
// //     path: '/register',
// //     name: 'RegisterComponent',
// //     component: Register,
// //   },
// //   {
// //     path: '/dashboard',
// //     name: 'DashboardComponent',
// //     component: Dashboard,
// //     meta: { requiresAuth: true },
// //   },
// //   {
// //     path: '*',
// //     redirect: '/login', // Redirect any unknown routes to login
// //   },
// // ];

// const routes = [

//     {
//             path: '/login',
//             name: 'LoginComponent',
//             component: Login,
//           },
//           {
//             path: '/register',
//             name: 'RegisterComponent',
//             component: Register,
//           },
//           {
//             path: '/dashboard',
//             name: 'DashboardComponent',
//             component: Dashboard,
//             meta: { requiresAuth: true },
//           },
//           {
//             path: '*',
//             redirect: '/login', // Redirect any unknown routes to login
//           },


//     { path: '/', redirect: Login },
//     { path: '/register', component: Register },
//     { path: '/dashboard', component: Dashboard }
//   ];
  
//   const router = createRouter({
    
//     history: createWebHistory(),
//     routes
//   });
  
//   export default router;



// // const router = new VueRouter({
// //   mode: 'history',
// //   routes,
// // });

// // // Global navigation guard to check for protected routes
// // router.beforeEach((to, from, next) => {
// //   const isAuthenticated = localStorage.getItem('auth');
// //   if (to.matched.some((record) => record.meta.requiresAuth)) {
// //     if (!isAuthenticated) {
// //       next('/login'); // Redirect to login if not authenticated
// //     } else {
// //       next(); // Allow navigation if authenticated
// //     }
// //   } else {
// //     next(); // Always allow navigation to non-protected routes
// //   }
// // });

// // export default router;






import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/LoginComponent.vue';
import Register from '@/components/RegisterComponent.vue';
import Dashboard from '@/components/DashboardComponent.vue';

// Definir las rutas de tu aplicación
const routes = [
  {
    path: '/', // Ruta raíz que redirige al login
    redirect: '/login',
  },
  {
    path: '/login', // Ruta para el login
    name: 'Login',
    component: Login,
  },
  {
    path: '/register', // Ruta para el registro
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard', // Ruta protegida para el dashboard
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/:catchAll(.*)', // Ruta catch-all para redireccionar a login si la ruta no existe
    redirect: '/login',
  },
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protección de rutas: checkea si la ruta requiere autenticación
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth'); // Simulación de autenticación
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login'); // Si no está autenticado, redirigir a login
    } else {
      next(); // Si está autenticado, continuar
    }
  } else {
    next(); // Para las rutas no protegidas, permitir el acceso siempre
  }
});

export default router;