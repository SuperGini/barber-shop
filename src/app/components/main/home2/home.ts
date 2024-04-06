import {Component, inject} from "@angular/core";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {Location} from "./location/location";

@Component({
    selector: "home-component",
    templateUrl: "home.html",
    styleUrl: "home.css",
    imports: [
        MatIcon,
        Location
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
