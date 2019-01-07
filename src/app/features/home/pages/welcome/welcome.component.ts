import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/ui/page/page';
import { TranslateService } from '~/app/services/translate.service';

@Component({
    selector: 'Welcome',
    moduleId: module.id,
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

    private rsc: any;

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.rsc = this.translate.get('pages').home;
    }

    /**
     * click on the button
     *
     * @param {EventData} event
     * @memberof HomeComponent
     */
    onClick(event: EventData) {
    }
}
