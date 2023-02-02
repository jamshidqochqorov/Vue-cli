import {createRouter,createWebHistory,createWebHashHistory} from "vue-router";
import home from './pages/home'
import about from './pages/about'
import NotFound from './pages/notfound'
import Item from "@/pages/ItemAlias";
const routers = createRouter({
    history:createWebHistory(),
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
            path: '/:itemAlias',
            component: Item,
            name:'itemAlias'
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound,
            name:'notfound'
        }
    ]
});
export default routers;