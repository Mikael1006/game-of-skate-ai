import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'AppPage',
    moduleId: module.id,
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    @Input()
    pageTitle: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}