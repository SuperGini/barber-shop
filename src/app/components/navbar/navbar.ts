import {Component, ElementRef, HostListener, inject, OnInit, signal} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";

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

    ],
    standalone: true
})
export class Navbar implements OnInit {


    private router = inject(Router);
    private eRef = inject(ElementRef);

    activePage = signal<string>('');
    activeX = signal<boolean>(false);

    ngOnInit(): void {
        this.getActivePage();
    }

    // https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component
    @HostListener('document:click', ['$event'])
    toogleHamburger(event: { target: HTMLElement; }) {
        if (event.target.classList.contains('container')) {
            this.activeX.set(true);
            return;
        }

        this.activeX.set(false);
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

    getActivePage() {
        const activePath = this.router.url.replace('/', '');
        switch (activePath) {
            case 'home':
                this.activePage.set('home');
                break;
            case 'services':
                this.activePage.set('services');
                break;
            case 'photos':
                this.activePage.set('photos');
                break;
        }
    }
}
