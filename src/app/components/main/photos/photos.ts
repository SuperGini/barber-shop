import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {Footer} from "../footer/footer";
import {Navbar} from "../navbar/navbar";
import {DOCUMENT} from "@angular/common";

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
export class Photos implements OnInit, OnDestroy{


    photos: number = 9;
    htmlPictures: number[] = [];

    private document = inject(DOCUMENT);
    private navBar = this.document.querySelector(".nav-bar") as Element;

    ngOnInit(): void {
        this.numberOfPictures();
        this.navBar.classList.add("xxx");
    }

    numberOfPictures() {
            for (let i = 0; i < this.photos; i++){
                    this.htmlPictures.push(i);
            }
    }

    ngOnDestroy(): void {
        this.navBar.classList.remove("xxx");
    }

}

