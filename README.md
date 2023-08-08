1)	Create laravel project by running command 

        composer create-project laravel/laravel PROJECT-NAME
                
    and move to the new project folder by using cd command of terminal
    
    

2)	Now install vue.js by running command 

        npm i vue@next vue-loader@next

3)	Now install vite-vue plugin to run vue on vite by using command 

        npm i @vitejs/plugin-vue

4)	Now go to vite.config.js file and add the following


          import vue from '@vitejs/plugin-vue'; ➡ add this
          export default defineConfig ({
          plugins: [
            vue (), ➡ add this
            laravel({
                      input: ['resources/css/app.css', 'resources/js/app.js'],
                       refresh: true,
                    }),
                   ],
               });

5)	Now go to resources/views/welcome.blade.php file and remove all the <style></style> tags and also remove everything in <body></body> tags. 

6)	Now create a new <div></div> in <body></body> tag and give it id=”app” as shown below:


            <body class="antialiased">

                <div id="app"></div> ➡ add this
                @vite('resources/js/app.js') ➡ add this

            </body>

7)	In resources/js/app.js file add the following code

                import { createApp } from 'vue';
                import { createPinia } from 'pinia';

                import BootstrapVue3 from 'bootstrap-vue-3'
                import 'bootstrap/dist/css/bootstrap.css'
                import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

                import '@formkit/themes/genesis'
                import App from './app.vue';
                import { plugin, defaultConfig } from '@formkit/vue';
                import routes from './router/index.js';
                import VueLoading from 'vue-loading-overlay';
                import 'vue-loading-overlay/dist/vue-loading.css';
                import { VueCookieNext } from 'vue-cookie-next';
                VueCookieNext.config({ expire: '7d' })

                const pinia = createPinia();

                const app=createApp(App)
                app.use(BootstrapVue3);
                app.use(plugin, defaultConfig);
                app.use(routes);
                app.use(pinia);
                app.use(VueLoading);
                app.use(VueCookieNext);
                app.mount('#app');
                
                
 10) create the following directories in resources/js
    a) js/assets (put images here)
    b) js/components (components go here)
    c) js/layouts (your fixed design throughout website is defined here example: fixed header)
    d) js/pages/ "VIEWS OF THE WEBSITE"
    e) js/router/index.js (your routes are defined in index.js)
    f) js/store/(your pinia store files go here)
   
  11) now,  create a new file named aap.vue (resources/app.vue), In app.vue add the following code:

          <template>
             
                 <router-view></router-view>
              
          </template>
          
   12) create a new file named home.vue in resources/home.vue. and put the following code
        <template>
              <div>
                    Hello World!
                </div>
         </template>
   13) now go to resources/router/index.js file and put the following code to create a route to home page.
          
          
          import {createRouter,createWebHistory} from 'vue-router';

            const routes = createRouter(
                  {
                        history:createWebHistory(),
                        routes:[
                              { 
                                    path:'/',
                                    name: 'Home',
                                    component: () => import('../home.vue'),
                                    //beforeEnter:['func']// used to run a function before a route changes
                              },
                        ] 

                  });

               export default routes;
    14) I could have written the commands to install all the packages of npm that we are using. but its just easy to copy and paste the following  code in package.json
        replace all code.

            {
                "private": true,
                "scripts": {
                    "dev": "vite",
                    "build": "vite build",
                    "watch": "vite build --watch"
               },
                "devDependencies": {
                    "axios": "^1.1.2",
                    "laravel-vite-plugin": "^0.6.0",
                    "lodash": "^4.17.19",
                    "postcss": "^8.1.14",
                    "vite": "^3.0.0"
                },
                "dependencies": {
                    "@formkit/themes": "^1.0.0-beta.10",
                    "@formkit/vue": "^1.0.0-beta.10",
                    "@popperjs/core": "^2.11.6",
                    "@vitejs/plugin-vue": "^3.2.0",
                    "vue": "^3.2.36",
                    "vue-loader": "^17.0.0",
                    "bootstrap": "^5.2.0",
                    "bootstrap-vue": "^2.22.0",
                    "bootstrap-vue-3": "^0.1.21",
                    "moment": "^2.29.4",
                    "pinia": "^2.0.21",
                    "sweetalert2": "^11.4.32",
                    "vue-cookie-next": "^1.3.0",
                    "vue-loading-overlay": "5.0",
                    "vue-router": "^4.1.3"
                }
            }

15) now run npm run dev and php artisan serve command to see the output on the browser

16) add the following code in routes/web.php file to fix 404 error on pages other than home page.

            Route::get('/{any}',function(){
                return view('welcome');
            })->where("any",".*");
17) change .env.example file to .env

18) inside.env file change APP_URL=http://localhost to APP_URL=http://localhost:8000

19) open command prompt and type npm run dev and open another command prompt and type php artisan serve command. 
    now open the shown URL in browder to view the visuals of code
    
    
   
        
   
 
 
