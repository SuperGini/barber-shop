import {Component, inject} from "@angular/core";
import {Footer} from "./footer/footer";
import {Location} from "./home2/location/location";
import {MatIcon} from "@angular/material/icon";
import {Navbar} from "./navbar/navbar";
import {Router, RouterOutlet} from "@angular/router";
import {ViewportScroller} from "@angular/common";


@Component({
    selector: "main-component",
    templateUrl: "main.html",
    styleUrl: "main.css",
    imports: [
        Footer,
        Location,
        MatIcon,
        Navbar,
        RouterOutlet
    ],
    standalone: true
})
export class Main {

    private router: Router = inject(Router);
    private viewportScroller = inject(ViewportScroller);


    navigateToServicesPage() {
        this.router.navigate(['services']);
    }

    scrollToContact() {
        this.viewportScroller.scrollToAnchor('infox');

    }

}
