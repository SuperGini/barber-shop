import {Routes} from '@angular/router';
import {Services} from "./components/main/services/services";
import {Photos} from "./components/main/photos/photos";
import {Main} from "./components/main/main";
import {Home} from "./components/main/home2/home";

export const routes: Routes = [


    {
        path: "",
        redirectTo: "homex",
        pathMatch: "full"

    },

    {
        path: "",
        component: Main,
        children: [
            {
                path: "homex",
                component: Home,
                pathMatch: "full"

            },
            {
                path: "services",
                component: Services,
                pathMatch: "full"
            },
            {
                path: "photos",
                component: Photos,
                pathMatch: "full"
            }

        ]
    },
];
