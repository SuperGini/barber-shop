import {Component, OnInit} from "@angular/core";
import {Footer} from "../footer/footer";
import {Location} from "../home2/location/location";
import {MatIcon} from "@angular/material/icon";
import {Navbar} from "../navbar/navbar";
import {BarberShopPrices} from "../../../utility/barberShopPrices";

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
export class Services implements OnInit{

    services: BarberShopPrices[] = [];


    ngOnInit(): void {
        this.loadPrices();
    }

    loadPrices() {
        this.services.push(haircut);
        this.services.push(shave);
        this.services.push(haircutWashing);
        this.services.push(beardStyling);
        this.services.push(haircutBeardStyling);
        this.services.push(dyesHearBeard);
    }

}


const haircut: BarberShopPrices = {
    price: "Haircut",
    service: "45 RON"
}

const shave: BarberShopPrices = {
    price: "Haircut",
    service: "45 RON"
}


const haircutWashing: BarberShopPrices = {
    price: "Haircut + Washing",
    service: "60 RON"
}

const beardStyling: BarberShopPrices = {
    price: "Beard cut + Styling",
    service: "40 RON"
}

const haircutBeardStyling: BarberShopPrices = {
    price: "Haircut + Beard + Styling",
    service: "45 RON"
}

const dyesHearBeard: BarberShopPrices = {
    price: "Dyed hair / beard",
    service: "80 RON"
}
