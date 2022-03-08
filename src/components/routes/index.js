import { MainLayout, Overview } from "../../layouts";
import { Lists } from "../../layouts/dashboard/lists";

const routes = [
    {
        url: "/dashboard",
        layout: MainLayout,
        component: Overview,
    },
    {
        url: "/dashboard/lists",
        layout: MainLayout,
        component: Lists,
    }
]

export default routes;