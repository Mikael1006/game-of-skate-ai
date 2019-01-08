import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { map } from 'rxjs/operators';
import { EventData } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'Welcome',
    moduleId: module.id,
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    private rsc: any;

    constructor(
        private translate: TranslateService,
        private routerExtensions: RouterExtensions
        ) {
    }

    ngOnInit(): void {
        this.rsc = this.translate.get('pages').pipe(map(rsc => {
            console.log("TRANSLATE :", JSON.stringify(rsc));
            return rsc.welcome;
        }));
        console.log('WELCOME');
    }

    /**
     * click on the button
     *
     * @param {EventData} event
     * @memberof HomeComponent
     */
    onClick(event: EventData) {
        console.log('NAVIGATE');
        this.routerExtensions.navigate(['/game/match']);
    }
}
