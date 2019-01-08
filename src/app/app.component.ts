import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('fr');
    }
}
