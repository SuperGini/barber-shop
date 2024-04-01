import {Component, inject} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Location} from "./location/location";
import {Footer} from "../footer/footer";
import {Navbar} from "../navbar/navbar";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
    selector: "home-component",
    templateUrl: "home.html",
    styleUrl: "home.css",
    imports: [
        MatIcon,
        Location,
        Footer,
        Navbar
    ],
    standalone: true
})
export class Home {

    private router: Router = inject(Router);
    private viewportScroller = inject(ViewportScroller);


    navigateToServicesPage() {
        this.router.navigate(['services']);
    }

    scrollToContact() {
        this.viewportScroller.scrollToAnchor('infox');

    }
}
