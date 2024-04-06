import {Component, HostListener, inject, OnInit, PLATFORM_ID, signal} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {DOCUMENT, isPlatformBrowser, NgClass} from "@angular/common";
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

    private router;
    private document = inject(DOCUMENT);

    private platformId = inject(PLATFORM_ID);

    activePage = signal<string>('');
    activeX = signal<boolean>(false);

    header = this.document.querySelector(".inner-container") as Element;


    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit(): void {
        this.getActivePage();
        this.doShit();
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
        this.router.navigate(['homex']);
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


    doShit() {
        console.log("xxxxxxxxxx");
        const sectionOneOptions = {
            rootMargin: "-100% 0% 0% 0%",
        };

        if (isPlatformBrowser(this.platformId)) {

            let url = this.router.url;
            const navBar = this.document.querySelector(".nav-bar") as Element;
            const sectionOneObserver = new IntersectionObserver(function (entries) {
                entries.forEach((entry) => {
                    console.log(entry.target);
                    console.log(url);
                    if (entry.isIntersecting) {
                        navBar.classList.remove("xxx");
                    }

                    if (!entry.isIntersecting) {
                        navBar.classList.add("xxx");
                    }
                });
            }, sectionOneOptions);

            return sectionOneObserver.observe(this.header);

        }

    }

}







