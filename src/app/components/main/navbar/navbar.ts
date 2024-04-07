import {Component, HostListener, inject, OnInit} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {DOCUMENT, NgClass} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {activePage, activeX} from "../../../caching/caching";

@Component({
    selector: "navbar-component",
    templateUrl: "./navbar.html",
    styleUrl: "./navbar.css",
    imports: [
        MatIcon,
        NgClass,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem,
        MatButton,
        RouterLink,

    ],
    standalone: true
})
export class Navbar {

    private router: Router = inject(Router);
    private document = inject(DOCUMENT);

    protected readonly activeX = activeX;
    protected readonly activePage = activePage;


    private isSticky: boolean = false;
    private navBar = this.document.querySelector(".nav-bar") as Element;

    // https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component
    @HostListener('document:click', ['$event'])
    toogleHamburger(event: { target: HTMLElement; }) {
        if (event.target.classList.contains('container')) {
            activeX.set(true);
            return;
        }

        activeX.set(false);
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        this.isSticky = window.scrollY > 0;

        if (this.isSticky && !this.navBar.classList.contains("xxx")) {
            this.navBar.classList.add("xxx");
        }

        if (window.scrollY === 0 && this.router.url === "/home") {
            this.navBar.classList.remove("xxx");
        }
    }

    navigateToServicesPage() {
        this.router.navigate(['services']);
    }

    navigateToHomePage() {
        this.router.navigate(['home']);
    }

    navigateToPhotoPage() {
        this.router.navigate(['photos']);
    }

}
