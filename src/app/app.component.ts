import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SvgService} from "./services/svg.service";
import {activePage} from "./caching/caching";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";
import {Meta} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    private svgService = inject(SvgService);
    private router: Router = inject(Router);
   // https://stackoverflow.com/questions/76264067/takeuntildestroyed-can-only-be-used-within-an-injection-context
    //https://github.com/ueler/angular-rxjs-unsubscribe
    private events = this.router.events.pipe(takeUntilDestroyed()); //this will automatically destroy the observer aht the en
    private meta: Meta = inject(Meta);

    ngOnInit(): void {
        this.svgService.registerIcons();
        this.events
            .pipe(
                tap(x => {
                    if (x instanceof NavigationEnd) {
                        const page = x.urlAfterRedirects.replace('/', '');
                        activePage.set(page);
                    }
                })
            )
            .subscribe();

        this.meta.addTags([
            {name: "description", content: "GiniBarber barbershop, cel mai bun barbershop din Pantelimon"}
        ]);
    }

}
