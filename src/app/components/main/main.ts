import {Component} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Location} from "../location/location";
import {Footer} from "../footer/footer";

@Component({
    selector: "main-component",
    templateUrl: "main.html",
    styleUrl: "main.css",
    imports: [
        MatIcon,
        Location,
        Footer
    ],
    standalone: true
})
export class Main {


}
