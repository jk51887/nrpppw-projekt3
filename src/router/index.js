import {
  createRouter,createWebHistory
} from "vue-router";

import LifecycleHook from "../views/LifecycleHook.vue";
import NotFound from "../views/NotFound.vue";
import HelloWorld from "../components/HelloWorld.vue";
import TwoWayBind from "../views/TwoWayBind.vue";
import Method from "../views/Method.vue";
import Component from "../views/Component.vue";
import Event from "../views/Event.vue";


const routes = [
  {
    path: "/",
    component: HelloWorld,  
  },
  {
    path: "/event",
    component: Event,  
  },
  {
    path: "/method",
    component: Method,  
  },
  {
    path: "/component",
    component: Component,  
  },

  {
    path: "/lifecyclehook",
    component: LifecycleHook,
    
  },
  {
    path: "/twowaybind",
    component: TwoWayBind,
    
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;


