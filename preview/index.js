import './lib'
import Vue from 'vue'
import App from './app'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AttrComponent from './attr'
Vue.use(ElementUI)
Vue.use(AttrComponent)

new Vue(App).$mount('#app')

console.info('不要慌，"Method "$confirm" conflicts with an existing Vue instance method ..."错误完全在控制中，请忽略')
console.log(`
          
                                                                                                                                                                                                                                  
                                                     d888888o.    8 8888 8888888 8888888888           8 888888888o.          ,o888888o.  \`8.\`888b                 ,8' b.             8                                            
                                                   .\`8888:' \`88.  8 8888       8 8888                 8 8888    \`^888.    . 8888     \`88. \`8.\`888b               ,8'  888o.          8                                            
                                                   8.\`8888.   Y8  8 8888       8 8888                 8 8888        \`88. ,8 8888       \`8b \`8.\`888b             ,8'   Y88888o.       8                                            
                                                   \`8.\`8888.      8 8888       8 8888                 8 8888         \`88 88 8888        \`8b \`8.\`888b     .b    ,8'    .\`Y888888o.    8                                            
                                                    \`8.\`8888.     8 8888       8 8888                 8 8888          88 88 8888         88  \`8.\`888b    88b  ,8'     8o. \`Y888888o. 8                                            
                                                     \`8.\`8888.    8 8888       8 8888                 8 8888          88 88 8888         88   \`8.\`888b .\`888b,8'      8\`Y8o. \`Y88888o8                                            
                                                      \`8.\`8888.   8 8888       8 8888                 8 8888         ,88 88 8888        ,8P    \`8.\`888b8.\`8888'       8   \`Y8o. \`Y8888                                            
                                                  8b   \`8.\`8888.  8 8888       8 8888                 8 8888        ,88' \`8 8888       ,8P      \`8.\`888\`8.\`88'        8      \`Y8o. \`Y8                                            
                                                  \`8b.  ;8.\`8888  8 8888       8 8888                 8 8888    ,o88P'    \` 8888     ,88'        \`8.\`8' \`8,\`'         8         \`Y8o.\`                                            
                                                   \`Y8888P ,88P'  8 8888       8 8888                 8 888888888P'          \`8888888P'           \`8.\`   \`8'          8            \`Yo                                            
                                                                                                                                                                                                                                  
8 888888888o.          ,o888888o.     b.             8 8888888 8888888888           8 888888888o   8 8888888888                      .8.          8 8888888888   8 888888888o.            .8.           8 8888 8 888888888o.      
8 8888    \`^888.    . 8888     \`88.   888o.          8       8 8888                 8 8888    \`88. 8 8888                           .888.         8 8888         8 8888    \`88.          .888.          8 8888 8 8888    \`^888.   
8 8888        \`88. ,8 8888       \`8b  Y88888o.       8       8 8888                 8 8888     \`88 8 8888                          :88888.        8 8888         8 8888     \`88         :88888.         8 8888 8 8888        \`88. 
8 8888         \`88 88 8888        \`8b .\`Y888888o.    8       8 8888                 8 8888     ,88 8 8888                         . \`88888.       8 8888         8 8888     ,88        . \`88888.        8 8888 8 8888         \`88 
8 8888          88 88 8888         88 8o. \`Y888888o. 8       8 8888                 8 8888.   ,88' 8 888888888888                .8. \`88888.      8 888888888888 8 8888.   ,88'       .8. \`88888.       8 8888 8 8888          88 
8 8888          88 88 8888         88 8\`Y8o. \`Y88888o8       8 8888                 8 8888888888   8 8888                       .8\`8. \`88888.     8 8888         8 888888888P'       .8\`8. \`88888.      8 8888 8 8888          88 
8 8888         ,88 88 8888        ,8P 8   \`Y8o. \`Y8888       8 8888                 8 8888    \`88. 8 8888                      .8' \`8. \`88888.    8 8888         8 8888\`8b          .8' \`8. \`88888.     8 8888 8 8888         ,88 
8 8888        ,88' \`8 8888       ,8P  8      \`Y8o. \`Y8       8 8888                 8 8888      88 8 8888                     .8'   \`8. \`88888.   8 8888         8 8888 \`8b.       .8'   \`8. \`88888.    8 8888 8 8888        ,88' 
8 8888    ,o88P'    \` 8888     ,88'   8         \`Y8o.\`       8 8888                 8 8888    ,88' 8 8888                    .888888888. \`88888.  8 8888         8 8888   \`8b.    .888888888. \`88888.   8 8888 8 8888    ,o88P'   
8 888888888P'          \`8888888P'     8            \`Yo       8 8888                 8 888888888P   8 888888888888           .8'       \`8. \`88888. 8 8888         8 8888     \`88. .8'       \`8. \`88888.  8 8888 8 888888888P'      

`)
