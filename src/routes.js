import {createRouter,createWebHistory,createWebHashHistory} from "vue-router";
import home from './pages/home'
import about from './pages/about'
import NotFound from './pages/notfound'
const routers = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:home,
            name:home
        },
        {
           path:'/about',
           component: about,
            name:about
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound,
            name:404
        }
    ]
});
export default routers;