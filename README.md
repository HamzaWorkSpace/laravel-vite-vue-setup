1)	Create laravel project by running command 

composer create-project laravel/laravel PROJECT-NAME

2)	Now install vue.js by running command 

npm I vue@next vue-loader@next

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

7)	Now go to resources/js folder and create a new folder named layouts. And in that folder create a new file named aap.vue

8)	In app.vue add the following code:

<template>
      <div>
           Hello world!
      </div>
</template>

9)	In resources/js/app.js file add the following code

import ‘. /bootstrap';

import {createApp} from 'vue';
import app from './layouts/app.vue';

const myapp = createApp(app)

myapp. mount('#app');
