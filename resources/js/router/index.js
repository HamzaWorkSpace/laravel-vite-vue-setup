import {createRouter,createWebHistory} from 'vue-router';

const routes = createRouter(
      {
            history:createWebHistory(),
            routes:[
                  { 
                        path:'/',
                        name: 'Home',
                        component: () => import('../home.vue'),
                        //beforeEnter:[login_Status_check],//check if user is typing URL directly into the address bar
                  },
            ] 

      });

export default routes;