
import Home from "../views/Home";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Items from "../views/Items";

const routes = [{
        path: "/",
        name: "home",
        component: Home,
        guest: true
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        guest: true
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        guest: true
    },
    {
        path: "/items",
        name: "items",
        component: Items,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue")
    }
]


export default routes;