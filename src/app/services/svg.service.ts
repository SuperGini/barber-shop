import {inject, Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {Icons} from "../utility/app.util";


@Injectable({providedIn: "root"})
export class SvgService {

    private matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
    private domSanitizer: DomSanitizer = inject(DomSanitizer);

    registerIcons(): void {
        Object.values(Icons)
              .forEach(icon =>
                  this.matIconRegistry.addSvgIcon(icon,
                      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/svg/${icon}.svg`))
              );
    }

}
