import {Component, inject} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
    selector: "navbar-component",
    templateUrl: "./navbar.html",
    styleUrl: "./navbar.css",
    imports: [
        MatIcon
    ],
    standalone: true
})
export class Navbar {

    private router = inject(Router);

    navigateToServicesPage() {
        this.router.navigate(['services'])
    }

    navigateToHomePage() {
        this.router.navigate(['home']);
    }

    navigateToPhotoPage() {
        this.router.navigate(['photos']);
    }




}
