// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// -----------------------------------------------

// import App from './App.vue'
// import router from './router';

// Vue.config.productionTip = false;

// new Vue({router, render: (h) => h(App),
// })
// .$mount('#app'); 
// App.use(router);  


import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router

const app = createApp(App);

app.use(router);  // Usar el router con la aplicación
app.mount('#app');  // Montar la aplicación en el elemento con id #app
