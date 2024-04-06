import {Component, inject} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
    selector: "footer-component",
    templateUrl: "./footer.html",
    styleUrl: "./footer.css",
    imports: [
        MatIcon
    ],
    standalone: true
})
export class Footer {

    router: Router = inject(Router);

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
