import { Component, OnInit } from '@angular/core';
import { TranslateService } from '~/app/services/translate.service';

@Component({
    selector: 'FirstPlayer',
    moduleId: module.id,
    templateUrl: './first-player.component.html',
    styleUrls: ['./first-player.component.css']
})
export class FirstPlayerComponent implements OnInit {

    private rsc: any;

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
        console.log('FIRST PLAYER');
        this.rsc = this.translate.get('pages').match;
    }

}