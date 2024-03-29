import {Component} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Location} from "./location/location";
import {Footer} from "../footer/footer";
import {Navbar} from "../navbar/navbar";

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


}
