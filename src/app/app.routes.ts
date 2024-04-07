import {Routes} from '@angular/router';
import {Services} from "./components/main/services/services";
import {Photos} from "./components/main/photos/photos";
import {Main} from "./components/main/main";
import {Home} from "./components/main/home2/home";

export const routes: Routes = [


    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"

    },

    {
        path: "",
        component: Main,
        children: [
            {
                path: "home",
                component: Home,
                pathMatch: "full",
                title: 'GiniBarber BarberShop'

            },
            {
                path: "services",
                component: Services,
                pathMatch: "full",
                title: 'GiniBarber Prices'
            },
            {
                path: "photos",
                component: Photos,
                pathMatch: "full",
                title: "GiniBarber Photos"
            }

        ]
    },
];
