import { Routes } from '@angular/router';
import {Home} from "./components/home/home";
import {Services} from "./components/services/services";

export const routes: Routes = [

    {
        path: "home",
        component: Home,
        pathMatch: "full"
    },
    {
        path: "services",
        component: Services,
        pathMatch: "full"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"

    }






];
