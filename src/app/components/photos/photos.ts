import {Component, OnInit} from "@angular/core";
import {Footer} from "../footer/footer";
import {Navbar} from "../navbar/navbar";

@Component({
    selector: "photos-component",
    templateUrl: "./photos.html",
    styleUrl: "./photos.css",
    imports: [
        Footer,
        Navbar
    ],
    standalone: true
})
export class Photos implements OnInit{


    photos: number = 9;

    htmlPictures: number[] = [];

    ngOnInit(): void {
        this.numberOfPictures();
    }

    numberOfPictures() {
            for (let i = 0; i < this.photos; i++){
                    this.htmlPictures.push(i);
            }
    }

}

