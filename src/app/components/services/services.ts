import {Component} from "@angular/core";
import {Footer} from "../footer/footer";
import {Location} from "../home/location/location";
import {MatIcon} from "@angular/material/icon";
import {Navbar} from "../navbar/navbar";

@Component({
    selector: "services-component",
    templateUrl: "./services.html",
    styleUrl: "./services.css",
    imports: [
        Footer,
        Location,
        MatIcon,
        Navbar
    ],
    standalone: true
})
export class Services {

}
