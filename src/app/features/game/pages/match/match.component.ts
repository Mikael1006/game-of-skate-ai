import { Component, OnInit } from '@angular/core';
import { TranslateService } from '~/app/services/translate.service';

@Component({
    selector: 'Match',
    moduleId: module.id,
    templateUrl: './match.component.html'
})
export class MatchComponent implements OnInit {

    private rsc: any;

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        console.log('MATCH');
        this.rsc = this.translate.get('pages').match;
    }

}
